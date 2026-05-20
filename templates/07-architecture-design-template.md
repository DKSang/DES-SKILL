# Architecture Design Document

Template này được dùng trong Phase 07 để tài liệu hóa kiến trúc hệ thống, lựa chọn công nghệ, và Architectural Decision Records (ADRs). Người dùng tự điền; xóa ví dụ khi hoàn thành.

> **Nguyên tắc FDE**: Phân biệt rõ quyết định **One-way door** (khó đảo ngược — cần coi trọng) và **Two-way door** (dễ đảo ngược — quyết định nhanh). Chọn công cụ vì lý do kỹ thuật/nghiệp vụ, không phải vì phổ biến.

---

## 1. Bối Cảnh và Yêu Cầu Nghiệp Vụ

- **Dự án / Domain**: (Ví dụ: `sales_analytics_platform`)
- **Data Maturity Level hiện tại**:

| Level | Dấu hiệu | Kinh nghiệm cần | Anti-Pattern |
| :--- | :--- | :--- | :--- |
| **Level 1** (Ad-hoc) | Analytics thủ công, 1-2 nguồn, monolithic DB | Xây batch pipeline cơ bản | Over-engineer streaming trước khi batch chạy ổn |
| **Level 2** (Scaling) | Nhiều nguồn, orchestration DAG, DQ issues | Formal ingestion, RBAC, DAG + DQ | Thiếu DQ check, silent failure |
| **Level 3** (Data-Led) | Real-time, data mesh, ML trong production | Automate contracts, FinOps, dev platform | Tool-first architecture; bỏ qua metadata |

- **Business SLA**: (Ví dụ: dashboard làm mới hằng giờ; ML features cập nhật hằng ngày; báo cáo by 8AM)
- **Team Constraints**: (Ví dụ: 2 data engineers, Python/SQL mạnh, không có Scala/JVM)
- **Scale Estimates**: (Ví dụ: 50M events/ngày, 200GB raw/ngày, 3 năm lịch sử = ~200TB)
- **Development Path**: Local-first (DuckDB/dbt local) / Cloud-first / Hybrid

---

## 2. Tóm Tắt Quyết định Kiến Trúc

> **FDE Reversibility Framework**: Gán nhãn cho mọi quyết định lớn:
> - **Two-way door** (có thể đảo ngược dễ dàng) → Quyết định nhanh, không cần phân tích sâu.
> - **One-way door** (khó thay đổi sau — dữ liệu migration, vendor lock-in) → Yêu cầu team approval; tài liệu hóa alternatives.

| Decision Area | Lựa chọn | Reversibility | Rationale | Trade-off chính |
| :--- | :--- | :--- | :--- | :--- |
| Storage Platform | *Ví dụ: Azure ADLS Gen2* | **One-way door** (platform lock-in) | Cost-effective, native Delta Lake | Egress cost nếu migrate |
| Compute Engine | *Ví dụ: Databricks / dbt + Snowflake* | Two-way door | Managed Spark; familiar | Chi phí cao hơn self-managed |
| Ingestion Tool | *Ví dụ: ADF + Kafka* | Two-way door | Managed pipelines + streaming | Kafka cần ops expertise |
| Orchestration | *Ví dụ: Airflow* | Two-way door | OSS, portable DAGs | Self-hosted burden |
| Transformation | *Ví dụ: dbt Core* | Two-way door | SQL-native, version controlled | Spark cho large-scale |
| Storage Format | *Ví dụ: Delta Lake* | **One-way door** (full rewrite để migrate) | ACID transactions, time travel | Vên dối nếu cần Iceberg |
| Serving | *Ví dụ: Power BI + FastAPI* | Two-way door | Analyst-familiar; API cho operational | Nhiều serving tools |

---

## 3. High-Level Data Flow

```text
Source Systems (OLTP / APIs / IoT / SaaS)
        │
        ▼
[Ingestion Layer]  ── (Batch / CDC / Stream) ──► Object Storage (Raw Landing Zone)
        │
        ▼
[Bronze Layer]     ── Append-only raw replica with audit columns ──► Delta Lake / Iceberg
        │
        ▼
[Silver Layer]     ── Standardized, deduplicated, validated ──► Delta Lake
        │
        ▼
[Gold Layer]       ── Kimball Dimensional Model (Facts + Dims) ──► Delta Lake / Warehouse
        │
        ▼
[Serving Layer]    ── BI Dashboards / REST API / ML Features / Reverse ETL
```

---

## 4. Compute-Storage Separation Design

*   **Storage**: (e.g., All data persisted in Azure ADLS Gen2 using open Delta Lake format — compute-agnostic)
*   **Compute**: (e.g., Databricks cluster auto-scales; suspended when idle. Separately managed from storage.)
*   **Network**: (e.g., Storage account and compute in same region to avoid egress costs)
*   **Access Security**: (e.g., Compute accesses storage via managed identity/service principal — no credentials in code)

---

## 5. Six Undercurrents Coverage

Confirm that all six undercurrents are addressed at the architecture level:

| Undercurrent | Design Decision | Owner |
| :--- | :--- | :--- |
| **Security** | All credentials in Azure Key Vault; column-level encryption for PII in Silver+ | security-team |
| **Data Management** | Unity Catalog for column lineage and dataset discovery | data-platform-team |
| **DataOps** | GitHub Actions CI/CD for dbt models; Great Expectations for DQ tests | data-platform-team |
| **Data Architecture** | Medallion architecture; all decisions logged as ADRs | data-lead |
| **Orchestration** | Airflow DAGs with ExternalTaskSensor for inter-domain dependencies | data-platform-team |
| **Software Engineering** | dbt models version-controlled; modular ingestion functions; reviewed PRs | all engineers |

---

## 6. Platform & Tooling Decision Matrix

| Component | Candidate A | Candidate B | Selected | Key Reason | Reversibility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Warehouse | Snowflake | Databricks SQL | — | — | — |
| Orchestration | Airflow | Prefect | — | — | — |
| Transformation | dbt | Spark SQL | — | — | — |
| DQ / Testing | Great Expectations | dbt tests | — | — | — |
| Catalog | Datahub | Unity Catalog | — | — | — |

---

## 7. Risks, Anti-patterns & Mitigations

| Risk / Anti-pattern | Impact | Mitigation |
| :--- | :--- | :--- |
| Tool-first design (choosing tools before problem) | Wrong stack; rework | Finalize ADRs only after business requirements are locked |
| Over-engineered streaming for batch-friendly problems | High cost, complexity | Batch unless SLA < 5 min latency is explicitly required |
| Single-region deployment | Disaster recovery failure | Plan multi-region or cross-zone replication from day 1 |
| Hardcoded credentials in pipeline code | Security breach | Enforce secrets manager check in PR pipeline |
