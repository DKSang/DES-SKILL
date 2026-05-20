# Danh sách Skills Cần Nâng Cấp Step (Chất Lượng Cao)

> **Trạng thái**: Các skill dưới đây có `steps/` được tạo tự động bởi `scaffold-missing-steps.js` — đủ để chạy,
> nhưng chưa đạt chất lượng như các Batch A/B (viết tay, có HALT cụ thể, Decision Matrix chi tiết, FDE knowledge sâu).

## Tiêu chí "Chất Lượng Cao" (để đối chiếu khi nâng cấp)

- [ ] Có HALT bắt buộc tại đúng điểm quyết định nghiệp vụ (không chỉ "chờ người dùng")
- [ ] Dùng ngôn ngữ nghiệp vụ cụ thể (ví dụ, bảng với cột rõ ràng) thay vì bullet points chung chung
- [ ] Phản ánh FDE knowledge cụ thể (trích từ sách, không phải generic DE advice)
- [ ] Có decision matrix hoặc phân loại có cơ sở (không phải "hỏi team")
- [ ] Mỗi HALT đi kèm lý do nghiệp vụ tại sao phải dừng

## Tier 1 — Cần nâng cấp trước (Core Pipeline Design)

| Skill | Lý do cần nâng cấp | FDE Knowledge cần bổ sung |
| :--- | :--- | :--- |
| `de-architecture-design` | Step-02 chưa có HALT tại Irreversible decisions; ADR format còn generic | Storage reversibility taxonomy; local-first vs cloud-first tradeoffs sâu hơn |
| `de-ingestion-design` | Offset/watermark strategy còn sơ lược; thiếu partitioned read pattern | Bounded vs unbounded data; checkpoint file patterns; exactly-once semantics |
| `de-gold-layer-design` | HALT tại Kimball/OBT chưa có scoring matrix; grain re-declaration chưa enforced | Kimball vs Inmon vs OBT decision criteria cụ thể; conformed dimension design |
| `de-transformation-design` | Chưa có incremental vs full-refresh decision logic; window function complexity check | Idempotent transform patterns; late-arrival record handling |
| `de-data-quality` | Threshold baseline window còn generic ("30-day rolling"); anomaly detection belum ada formula | FDE 5 quality dimensions applied per layer (Bronze/Silver/Gold khác nhau) |

## Tier 2 — Nâng cấp sau (Serving & Governance)

| Skill | Lý do cần nâng cấp | FDE Knowledge cần bổ sung |
| :--- | :--- | :--- |
| `de-semantic-model-design` | Single metric layer principle chưa có enforcement check; RLS design còn abstract | Certified metric layer patterns (dbt Metrics, Cube, Fabric Semantic) |
| `de-lineage-and-metadata` | Column-level lineage process còn manual; schema registry setup generic | OpenLineage standard; DataHub vs Fabric Data Catalog tradeoffs |
| `de-governance-and-security` | PII masking decision matrix chưa có HALT khi có PII trong Gold layer | PDPD Vietnam-specific requirements; masking vs tokenization tradeoffs |
| `de-data-contracts` | Breaking change policy chưa có semver enforcement guide; notification process abstract | Consumer-driven contract testing patterns |
| `de-orchestration-and-observability` | DAG design chưa có retry backoff formula; SLA monitoring threshold chưa có | Maximal decoupling orchestration principle; Dagster Sensors vs Airflow Schedule |

## Tier 3 — Nâng cấp khi có nhu cầu

| Skill | Lý do cần nâng cấp |
| :--- | :--- |
| `de-bronze-layer-design` | Serialization format decision (Parquet vs Delta vs Iceberg) chưa có scoring matrix |
| `de-silver-layer-design` | SCD Type 2 MERGE key design chưa được nói đến |
| `de-serving-layer-design` | Caching strategy chưa có decision tree |
| `de-cost-and-performance-optimization` | FinOps: reserved capacity vs on-demand chưa có cost model template |
| `de-cicd-and-testing` | Contract test enforcement trong CI pipeline chưa có tooling-specific guidance |
| `de-project-evaluation` | Adoption metric collection (ai dùng? bao nhiêu?) chưa có tracking approach |
| `de-semantic-and-serving-layer` | Chỉ là routing — cần giữ nguyên, không cần upgrade |

## Skills Đã Đạt Chất Lượng Cao ✅

| Skill | Điểm nổi bật |
| :--- | :--- |
| `de-business-discovery` | Đã có từ session trước, đầy đủ với stakeholder interview guide |
| `de-business-questions` | HALT grain + analytical output type classification |
| `de-requirements-and-kpis` | HALT metric conflicts + 5-criteria KPI gate + P1/P2/P3 SLA |
| `de-data-product-definition` | Phase 1/2+ separation + per-product spec gate + SLA consistency check |
| `de-domain-modeling` | HALT grain declaration + M:M bridge enforcement + SCD identification |
| `de-data-source-assessment` | FDE write pattern classification + CDC log retention check |
| `de-architecture-design` | Tier 1 batch: one-way-door ADR HALT + reversibility taxonomy + storage/deployment scoring matrix |
| `de-ingestion-design` | Tier 1 batch: bounded/unbounded classification + checkpoint/idempotency/DLQ gate |
| `de-gold-layer-design` | Tier 1 batch: Kimball/Inmon/OBT scoring + grain re-declaration + conformed dimension gate |
| `de-transformation-design` | Tier 1 batch: full-refresh vs incremental strategy + idempotency + late/delete handling gate |
| `de-data-quality` | Tier 1 batch: Bronze/Silver/Gold DQ dimension policy + anomaly formula + owner/action HALT |
| `de-semantic-model-design` | Tier 2 batch: single metric authority enforcement + semantic layer pattern + RLS test gate |
| `de-lineage-and-metadata` | Tier 2 batch: column-level lineage for PII/metrics + catalog steward gate + schema registry compatibility |
| `de-governance-and-security` | Tier 2 batch: PII-in-Gold HALT + PDPD/regulatory scope + masking/tokenization/access control gate |
| `de-data-contracts` | Tier 2 batch: semver breaking-change policy + consumer-driven contract tests + notification/deprecation gate |
| `de-orchestration-and-observability` | Tier 2 batch: sensor-vs-schedule decision + retry backoff formula + SLA/alert/runbook gate |
| `de-bronze-layer-design` | Tier 3 batch: Parquet/Delta/Iceberg scoring + partition/file-layout + replay/retention gate |
| `de-silver-layer-design` | Tier 3 batch: SCD Type 2 MERGE key design + dedup/late/delete/quarantine gate |
| `de-serving-layer-design` | Tier 3 batch: serving interface decision + caching/materialization tree + semantic/access gate |
| `de-cost-and-performance-optimization` | Tier 3 batch: FinOps capacity model + ROI priority + correctness/rollback gate |
| `de-cicd-and-testing` | Tier 3 batch: contract-test enforcement + promotion/secrets/rollback release gate |
| `de-project-evaluation` | Tier 3 batch: adoption metrics + evidence-based Go/No-Go + remediation gate |
| `de-semantic-and-serving-layer` | Routing-only skill kept intentionally unchanged |
