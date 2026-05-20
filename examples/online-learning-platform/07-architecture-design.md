# 07 — Architecture Design
# Online Learning Platform

**Skill sử dụng**: `de-architecture-design`
**Input từ**: `06-domain-modeling.md`, `05-data-source-assessment.md`, `03-requirements-and-kpis.md`

---

> **FDE Principle**: One-way door decisions (khó đảo ngược) phải được team approve. Two-way door (dễ thay đổi) → quyết định nhanh.

---

## 1. Bối Cảnh và Yêu Cầu Nghiệp Vụ

- **Dự án**: `learning_analytics_platform`
- **Data Maturity**: **Level 2 (Scaling)** → Prioritize reliability over sophistication; no Spark
- **Hard SLAs (P1)**: Instructor dashboard by 6AM; At-risk API lag < 30 phút
- **Team**: 2 data engineers (Python/SQL); không có Scala/JVM/Spark experience
- **Scale**: 2 GB/ngày LMS + 8 GB/ngày events; 3 năm lịch sử ≈ ~37TB total
- **Budget**: $2,500/tháng cloud infra
- **Development Path**: **Local-first** (DuckDB + dbt local) → deploy to cloud

---

## 2. Tóm Tắt Quyết Định Kiến Trúc

> **FDE Reversibility**: 🔴 One-way door (khó đảo ngược) | 🟢 Two-way door (dễ thay đổi)

| Decision Area | Lựa chọn | Reversibility | Rationale | Trade-off chính |
| :--- | :--- | :--- | :--- | :--- |
| **Cloud Platform** | Microsoft Azure | 🔴 One-way door | Organization đã có Azure subscription; Fabric available | Egress cost nếu migrate sang AWS/GCP |
| **Storage** | Azure Data Lake Storage Gen2 (ADLS) | 🔴 One-way door | Native Fabric + Delta Lake support; cost-effective | Vendor dependency |
| **Storage Format** | **Delta Lake** (Parquet + transaction log) | 🔴 One-way door | ACID transactions; time travel; MERGE support cho SCD | Full rewrite nếu migrate sang Iceberg |
| **Compute** | **Microsoft Fabric Spark** + **dbt Core** | 🟢 Two-way door | Managed; team đã dùng dbt; no ops burden | Fabric cost higher than self-managed |
| **Ingestion — LMS/Payment CDC** | **Debezium** → Kafka → ADLS | 🟢 Two-way door | Open-source CDC; battle-tested; no vendor lock | Cần maintain Debezium connector |
| **Ingestion — APIs** | **Python scripts** + Airflow | 🟢 Two-way door | Simple; team knows Python; versioned in Git | Cần monitoring thủ công |
| **Orchestration** | **Apache Airflow** (managed on Azure) | 🟢 Two-way door | OSS DAGs; portable; team familiar | Self-hosted maintenance |
| **Transformation** | **dbt Core** | 🟢 Two-way door | SQL-native; testable; version-controlled | Spark SQL nếu cần large-scale |
| **Serving — BI** | **Microsoft Fabric Semantic Model** + Power BI | 🟢 Two-way door | Native Fabric; giảng viên quen dùng | Microsoft-only |
| **Serving — API** | **FastAPI** trên Azure Container App | 🟢 Two-way door | Lightweight; Python; auto-scale | Cần CI/CD pipeline |
| **DQ Testing** | **dbt tests** + **Great Expectations** | 🟢 Two-way door | dbt tests cho unit; GE cho anomaly | 2 tools phải maintain |

---

## ⚠️ HALT — Xác Nhận Irreversible Decisions

Các quyết định **One-way door** sau yêu cầu team approval trước khi tiếp tục:

1. **Azure Platform**: Đã confirm — tổ chức đã có Enterprise Agreement với Microsoft. ✅
2. **Delta Lake format**: Cần confirm với Data Lead rằng không có kế hoạch migrate sang Iceberg trong 3 năm tới.
3. **ADLS vs Fabric OneLake**: Chọn OneLake (unified) hay ADLS riêng?

**→ Quyết định confirmed**: Dùng **Fabric OneLake** (ADLS internally) + Delta format. Data Lead đã approve ngày 2026-05-21.

---

## 3. High-Level Data Flow

```text
Source Systems
─────────────────────────────────────────────────
  LMS PostgreSQL (CRUD)          ──Debezium CDC──►
  Payment MySQL (CRUD)           ──Debezium CDC──►  Kafka Topics
  Kafka Learning Events (Stream) ──consumer──────►    │
  Udemy/Coursera/Skillshare APIs ──Python batch──►    │
                                                      │
                                               ┌──────▼──────┐
                                               │ Raw Landing  │
                                               │  (ADLS/OLake)│
                                               └──────┬───────┘
                                                      │ Airflow DAG
                                               ┌──────▼──────┐
                                               │  Bronze Layer│  Append-only; raw schema; audit cols
                                               │  Delta Lake  │
                                               └──────┬───────┘
                                                      │ dbt models
                                               ┌──────▼──────┐
                                               │  Silver Layer│  Standardized; deduplicated; DQ-checked
                                               │  Delta Lake  │
                                               └──────┬───────┘
                                                      │ dbt models
                                               ┌──────▼──────┐
                                               │  Gold Layer  │  Kimball: Facts + Dims
                                               │  Delta Lake  │
                                               └──────┬───────┘
                        ┌─────────────────────────────┼──────────────────────────┐
                        ▼                             ▼                          ▼
               Fabric Semantic Model          FastAPI (At-risk API)      Excel/CSV export
               + Power BI Dashboard           Azure Container App         (CFO monthly)
```

---

## 4. Compute-Storage Separation

- **Storage**: Fabric OneLake (Delta Lake format) — compute-agnostic, accessible by Fabric Spark, dbt, Power BI, FastAPI
- **Compute Batch**: Fabric Spark (managed) cho CDC ingestion + dbt Core cho transformations
- **Compute Micro-batch**: Dedicated Fabric Spark Streaming job cho Learning Events (30-phút micro-batch)
- **Network**: All resources trong `Australia East` region (gần Vietnam, thấp latency, đủ compliance)
- **Access Security**: Service Principal cho mỗi pipeline; credentials trong Azure Key Vault; không có hardcoded credentials

---

## 5. Six Undercurrents Coverage

| Undercurrent | Quyết định | Owner |
| :--- | :--- | :--- |
| **Security** | Student email masked ở Silver layer; RBAC role `analyst-group` không có PII; Key Vault cho credentials | security-team |
| **Data Management** | Fabric Data Catalog cho lineage; dbt docs cho column-level docs | data-platform-team |
| **DataOps** | GitHub Actions CI/CD cho dbt; Great Expectations cho anomaly DQ; Airflow cho orchestration | data-platform-team |
| **Data Architecture** | Medallion (Bronze/Silver/Gold); Kimball Gold; tất cả quyết định lớn = ADR | data-lead |
| **Orchestration** | Airflow DAGs: CDC ingestion → dbt Silver → dbt Gold → DQ check → Semantic model refresh | data-platform-team |
| **Software Engineering** | dbt models versioned in Git; Python ingestion scripts unit-tested; PR reviews bắt buộc | all engineers |

---

## 6. Platform & Tooling Decision Matrix

| Component | Candidate A | Candidate B | Selected | Key Reason | Reversibility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Warehouse | Snowflake | Fabric SQL | **Fabric SQL** | Đã có Azure EA; no extra cost | 🟢 Two-way |
| CDC | Airbyte | Debezium | **Debezium** | Open-source; no vendor; battle-tested | 🟢 Two-way |
| Orchestration | Prefect | Airflow | **Airflow** | Team quen; portable DAGs | 🟢 Two-way |
| DQ | Soda | Great Expectations | **dbt tests + GE** | dbt tests cho unit; GE cho anomaly | 🟢 Two-way |
| Semantic Layer | Cube | Fabric Semantic Model | **Fabric Semantic Model** | Power BI native; không cần thêm infra | 🟢 Two-way |

---

## 7. Risks, Anti-patterns & Mitigations

| Risk / Anti-pattern | Impact | Mitigation |
| :--- | :--- | :--- |
| Streaming cho tất cả events (over-engineer) | Chi phí cao; complexity Level 3 nhưng team Level 2 | Micro-batch 30 phút đủ cho P1 SLA 30 phút |
| Hardcoded credentials | Security breach | Enforce Key Vault check trong GitHub Actions CI |
| Không có DLQ cho CDC | Mất data khi connector fail | Debezium → DLQ topic trên Kafka |
| Single-region deployment | DR failure | Plan Azure Zone Redundant Storage từ đầu |
| Chọn Delta Lake mà không document | Không rollback plan | ADR-001 documented dưới đây |

---

## ADR-001: Storage Format = Delta Lake (One-Way Door)

- **Context**: Cần ACID transactions cho CDC MERGE; time travel cho debugging; schema evolution
- **Decision**: Delta Lake trên Fabric OneLake
- **Alternatives considered**: (1) Plain Parquet — không có ACID; (2) Apache Iceberg — không native với Fabric tại thời điểm này
- **Reversibility**: **One-way door** — migration sang Iceberg = full rewrite tất cả pipelines
- **Accepted by**: Data Lead, 2026-05-21

**Handoff**: Chuyển sang `de-ingestion-design`.
