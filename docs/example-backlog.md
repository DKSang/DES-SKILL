# Example Project Backlog — Online Learning Platform

**Trạng thái**: Phần lõi (Phases 01-07, 14) đã tạo trong WS4. Các artifacts dưới đây chưa được tạo.

---

## Artifacts Chưa Tạo (Online Learning Platform)

### Tier 1 — Core Pipeline (Quan trọng nhất)

| Phase | File cần tạo | Nội dung cần | Skill liên quan |
| :--- | :--- | :--- | :--- |
| 04 | `04-data-product-definition.md` | Formal definition 3 data products: Instructor Dashboard, At-Risk API, Revenue Report; SLA per product; consumer list | `de-data-product-definition` |
| 08 | `08-ingestion-design.md` | Bounded/Unbounded; Debezium CDC spec cho LMS+Payment; Micro-batch spec cho Kafka events; API batch spec; idempotency strategy; DLQ design | `de-ingestion-design` |
| 09 | `09-bronze-layer-design.md` | Schema per entity với 5 audit columns (`des_*`); Delta Lake partition strategy; append-only; CDC operation type column | `de-bronze-layer-design` |
| 10 | `10-silver-layer-design.md` | Standardization rules per entity; SCD Type 2 spec cho `dim_student`; dedup strategy; PII masking tại Silver; FK validation | `de-silver-layer-design` |
| 11 | `11-gold-layer-design.md` | Kimball schema: `fact_enrollment`, `fact_learning_progress`, `fact_instructor_revenue`, `dim_student`, `dim_course`, `dim_module`, `dim_platform`, `dim_date`; SQL grain examples | `de-gold-layer-design` |
| 12 | `12-data-contracts.md` | Contract LMS → Bronze; Contract Kafka → Bronze; SLA + schema guarantees; producer/consumer signatures | `de-data-contracts` |
| 13 | `13-transformation-design.md` | dbt model graph; Kimball transformation logic; SCD2 implementation; completion rate formula in SQL | `de-transformation-design` |

### Tier 2 — Serving & Operations

| Phase | File cần tạo | Nội dung cần | Skill liên quan |
| :--- | :--- | :--- | :--- |
| 15 | `15-orchestration-and-observability.md` | Airflow DAG spec: CDC → Silver → Gold → DQ → Semantic refresh; retry policies; alerting | `de-orchestration-and-observability` |
| 16 | `16-semantic-model-design.md` | Fabric Semantic Model: measures, hierarchies, relationships; At-risk API spec | `de-semantic-model-design` |
| 17 | `17-serving-layer-design.md` | Power BI Instructor Dashboard spec; FastAPI At-Risk endpoint; CSV export for CFO | `de-serving-layer-design` |

### Tier 3 — Governance & Evaluation

| Phase | File cần tạo | Nội dung cần | Skill liên quan |
| :--- | :--- | :--- | :--- |
| 18 | `18-lineage-and-metadata.md` | Column-level lineage; Fabric Data Catalog tagging; dbt docs | `de-lineage-and-metadata` |
| 19 | `19-governance-and-security.md` | RBAC roles; PII masking spec; PDPD compliance checklist | `de-governance-and-security` |
| 20 | `20-cost-and-performance-optimization.md` | Budget $2,500/tháng breakdown; Delta OPTIMIZE schedule; partition pruning | `de-cost-and-performance-optimization` |
| 21 | `21-cicd-and-testing.md` | GitHub Actions CI: dbt test + GE; Release checklist | `de-cicd-and-testing` |
| 22 | `22-project-evaluation.md` | Retrospective: SLA đạt được? Lessons learned? Gaps? | `de-project-evaluation` |

---

## Ghi Chú

- Tất cả artifacts sẽ viết tiếng Việt (theo chuẩn DES-SKILL)
- Mỗi artifact phải có section **HALT** nếu có quyết định blocking
- Artifact cần tham chiếu FDE knowledge tương ứng (không sao chép)
- Ưu tiên Tier 1 trước — Tier 2 + 3 có thể làm sau khi Tier 1 review
