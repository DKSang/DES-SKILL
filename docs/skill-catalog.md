# Main Skill Catalog

DES-SKILL có 22 main lifecycle skills, mỗi skill thiết kế một phase trong vòng đời data engineering project.

## Catalog đầy đủ

| STT | Skill | Mục tiêu | Output Artifact |
|---:|:---|:---|:---|
| 01 | `des-business-discovery` | Làm rõ business problem, stakeholder, decisions, constraints, success criteria | `01-business-discovery-brief.md` |
| 02 | `des-business-questions` | Chuyển nhu cầu mơ hồ thành câu hỏi phân tích và vận hành cụ thể | `02-business-question-catalog.md` |
| 03 | `des-requirements-and-kpis` | Định nghĩa metrics, owner, grain, formula, acceptance criteria, conflicts | `03-requirements-and-kpi-catalog.md` |
| 04 | `des-data-product-definition` | Định nghĩa consumers, use cases, freshness, SLA, output | `04-data-product-specification.md` |
| 05 | `des-data-source-assessment` | Inventory sources, ownership, reliability, access, latency, quality, risks | `05-data-source-inventory.md` |
| 06 | `des-domain-modeling` | Identify entities, relationships, grain, events, business vocabulary | `06-conceptual-domain-model.md` |
| 07 | `des-architecture-design` | Chọn platform pattern, layers, compute, storage, trade-offs | `07-architecture-decision-record.md` |
| 08 | `des-ingestion-design` | Thiết kế batch, streaming, CDC, API, file ingestion, failure handling | `08-ingestion-specification.md` |
| 09 | `des-bronze-layer-design` | Thiết kế raw data layer với traceability, metadata, replay strategy | `09-bronze-layer-specification.md` |
| 10 | `des-silver-layer-design` | Thiết kế standardize, clean, deduplicate, conform, validate | `10-silver-layer-specification.md` |
| 11 | `des-gold-layer-design` | Thiết kế curated marts, facts, dimensions, aggregates, outputs | `11-gold-layer-specification.md` |
| 12 | `des-data-contracts` | Định nghĩa schema, ownership, compatibility, change policy | `12-data-contract-specification.md` |
| 13 | `des-transformation-design` | Specify transformation logic và test strategy | `13-transformation-specification.md` |
| 14 | `des-data-quality` | Định nghĩa rules, severity, thresholds, monitoring, remediation | `14-data-quality-specification.md` |
| 15 | `des-orchestration-observability` | Thiết kế schedules, dependencies, retries, alerts, run evidence | `15-orchestration-observability-specification.md` |
| 16 | `des-semantic-model-design` | Định nghĩa metrics, dimensions, relationships, BI behavior | `16-semantic-model-specification.md` |
| 17 | `des-serving-layer-design` | Thiết kế how data is exposed: BI, apps, APIs, files, downstream | `17-serving-layer-specification.md` |
| 18 | `des-lineage-metadata-design` | Record traceability, owners, classifications, discoverability | `18-lineage-metadata-specification.md` |
| 19 | `des-governance-security-design` | Định nghĩa access, privacy, compliance, retention, masking | `19-governance-security-specification.md` |
| 20 | `des-cost-and-performance-optimization` | Analyze cost, query patterns, partitioning, scaling | `20-cost-performance-optimization-specification.md` |
| 21 | `des-cicd-and-testing` | Định nghĩa repo structure, checks, deployment path, tests | `21-cicd-testing-specification.md` |
| 22 | `des-project-evaluation` | Verify release readiness, evidence, risks, decisions, handover | `22-project-evaluation-report.md` |

---

## Nhóm theo domain

### Business & Requirements (01–03)

Trả lời câu hỏi: **Cần xây gì và vì sao?**

- `des-business-discovery` → Hiểu problem và stakeholder
- `des-business-questions` → Làm rõ analytical needs
- `des-requirements-and-kpis` → Cố định KPI và acceptance criteria

### Data Product & Source (04–05)

Trả lời câu hỏi: **Data product là gì? Source data ở đâu?**

- `des-data-product-definition` → Định nghĩa consumer và SLA
- `des-data-source-assessment` → Đánh giá nguồn và rủi ro

### Design Foundation (06–07)

Trả lời câu hỏi: **Domain model và kiến trúc nào phù hợp?**

- `des-domain-modeling` → Business vocabulary và entity map
- `des-architecture-design` → Platform pattern và trade-offs

### Pipeline Design (08–13)

Trả lời câu hỏi: **Pipeline, layers, và contracts thiết kế ra sao?**

- `des-ingestion-design` → Ingestion strategy
- `des-bronze-layer-design` → Raw storage design
- `des-silver-layer-design` → Cleansed layer design
- `des-gold-layer-design` → Curated marts design
- `des-data-contracts` → Schema contracts và change policy
- `des-transformation-design` → Transform logic

### Quality & Operations (14–15)

Trả lời câu hỏi: **Quality rules và orchestration như thế nào?**

- `des-data-quality` → Quality rules và thresholds
- `des-orchestration-observability` → Schedules, alerts, monitoring

### Consumption (16–17)

Trả lời câu hỏi: **Làm sao expose data cho consumer?**

- `des-semantic-model-design` → Metrics layer
- `des-serving-layer-design` → BI, API, file serving

### Governance & Platform (18–21)

Trả lời câu hỏi: **Lineage, security, cost, và CI/CD như thế nào?**

- `des-lineage-metadata-design` → Traceability
- `des-governance-security-design` → Access và compliance
- `des-cost-and-performance-optimization` → Cost control
- `des-cicd-and-testing` → Deployment pipeline

### Release Gate (22)

Trả lời câu hỏi: **Có đủ điều kiện release không?**

- `des-project-evaluation` → Release readiness report

---

## Stack-Specific Support Skills

Ngoài 22 main lifecycle skills, DES-SKILL cung cấp các stack skills để hỗ trợ triển khai trên các công nghệ cụ thể:

- `des-duckdb-local-engine` → Local profiling và prototyping
- `des-dbt-engineering` → dbt implementation và best practices

Xem chi tiết tại [docs/stack-skills.md](docs/stack-skills.md).

---

## Thứ tự bắt buộc

Main skills có dependency rõ ràng. Không nên chạy phase N nếu artifact của phase N-1 chưa được approve:

```text
01 → 02 → 03 → 04
              → 05
                └→ 06 → 07 → 08
                              → 09
                              → 10
                              → 11 → 12
                                    → 13
                                    → 14
                                    → 15 → 16
                                           → 17
                                           → 18
                                           → 19 → 20
                                                  → 21
                                                  → 22
```

---

## Artifact path mặc định

Tất cả output artifacts được lưu tại:

```text
_des-output/planning-artifacts/
├── 01-business-discovery-brief.md
├── 02-business-question-catalog.md
├── ...
└── 22-project-evaluation-report.md
```

Xem `ARTIFACTS.md` tại root repo để biết đường dẫn đầy đủ và tên file chính xác.
