# DES-SKILL Workflow

## Workflow đầy đủ (22 phases + 11 support steps)

### Tầng 1 — Main lifecycle phases

```text
01  des-business-discovery          →  01-business-discovery-brief.md
02  des-business-questions          →  02-business-question-catalog.md
03  des-requirements-and-kpis       →  03-requirements-and-kpi-catalog.md
04  des-data-product-definition     →  04-data-product-specification.md
05  des-data-source-assessment      →  05-data-source-inventory.md
06  des-domain-modeling             →  06-conceptual-domain-model.md
07  des-architecture-design         →  07-architecture-decision-record.md
08  des-ingestion-design            →  08-ingestion-specification.md
09  des-bronze-layer-design         →  09-bronze-layer-specification.md
10  des-silver-layer-design         →  10-silver-layer-specification.md
11  des-gold-layer-design           →  11-gold-layer-specification.md
12  des-data-contracts              →  12-data-contract-specification.md
13  des-transformation-design       →  13-transformation-specification.md
14  des-data-quality                →  14-data-quality-specification.md
15  des-orchestration-observability →  15-orchestration-observability-specification.md
16  des-semantic-model-design       →  16-semantic-model-specification.md
17  des-serving-layer-design        →  17-serving-layer-specification.md
18  des-lineage-metadata-design     →  18-lineage-metadata-specification.md
19  des-governance-security-design  →  19-governance-security-specification.md
20  des-cost-and-performance-optimization → 20-cost-performance-optimization-specification.md
21  des-cicd-and-testing            →  21-cicd-testing-specification.md
22  des-project-evaluation          →  22-project-evaluation-report.md
```

### Tầng 2 — Support implementation loop

```text
des-create-epic             →  epic-catalog.md
des-create-story            →  story-catalog.md
des-sprint-planning         →  sprint-plan.md
des-story-readiness-check   →  story-readiness-report.md
des-dev-task-breakdown      →  dev-task-breakdown.md
des-implementation-plan     →  implementation-plan.md
[Implementation]
des-code-review             →  code-review-report.md
des-release-readiness-review →  release-readiness-report.md
des-retrospective           →  retrospective-report.md
des-correct-course          →  correct-course-plan.md
des-workflow-status-update  →  des-workflow-status.md
```

---

## Luồng tối thiểu cho project học tập / portfolio

Nếu là project học tập hoặc portfolio nhỏ, có thể dùng luồng rút gọn:

```text
Phase 01  des-business-discovery
Phase 02  des-business-questions
Phase 03  des-requirements-and-kpis
Phase 04  des-data-product-definition
Phase 05  des-data-source-assessment
Phase 07  des-architecture-design
Phase 08  des-ingestion-design
Phase 09  des-bronze-layer-design
Phase 10  des-silver-layer-design
Phase 11  des-gold-layer-design
Phase 14  des-data-quality
Phase 21  des-cicd-and-testing
          ↓
  des-create-epic
  des-create-story
  des-sprint-planning
  des-dev-task-breakdown
  des-code-review
```

---

## Luồng đầy đủ cho project nghiêm túc

Dùng toàn bộ 22 main skills và 11 support skills. Không bỏ qua phase nào mà không có lý do rõ ràng.

---

## Workflow modes

| Mode | Dùng khi | Hành vi |
|:---|:---|:---|
| `Quick Fix` | Sửa nhỏ, bounded change | Tìm path artifact và verification tối thiểu |
| `Standard Feature` | Feature mới, pipeline change | Dùng planning → design → build → review → verify |
| `Enterprise Data Product` | Data product mới, high-impact | Full lifecycle với HALT gates và evidence mạnh |
| `Correct Course` | Workflow bị lệch, artifact cũ không khớp thực tế | Reassess artifact và route về recovery phase |

---

## Quy tắc chuyển phase

Không chuyển sang phase sau nếu:

- Artifact chính của phase hiện tại còn thiếu
- HALT chưa được resolve
- Checklist còn item bị blocked
- Workflow status đang `Blocked`
- Decision quan trọng chưa có owner
- Upstream artifact phụ thuộc chưa tồn tại

---

## HALT policy

`HALT` là điểm dừng bắt buộc trong step files. Agent **phải dừng** khi gặp HALT và chờ quyết định từ người dùng.

Ví dụ HALT điển hình:

| HALT trigger | Phase |
|:---|:---|
| Không rõ business owner là ai | des-business-discovery |
| KPI formula chưa được confirm | des-requirements-and-kpis |
| Gold grain chưa rõ | des-gold-layer-design |
| Contract owner chưa sign off | des-data-contracts |
| Story chưa có acceptance criteria | des-story-readiness-check |
| Test evidence còn thiếu | des-release-readiness-review |

---

## Artifact dependency map

```text
01-business-discovery-brief
    └─▶ 02-business-question-catalog
            └─▶ 03-requirements-and-kpi-catalog
                    ├─▶ 04-data-product-specification
                    └─▶ 05-data-source-inventory
                              └─▶ 06-conceptual-domain-model
                                        └─▶ 07-architecture-decision-record
                                                  ├─▶ 08-ingestion-specification
                                                  ├─▶ 09-bronze-layer-specification
                                                  ├─▶ 10-silver-layer-specification
                                                  └─▶ 11-gold-layer-specification
                                                            ├─▶ 12-data-contract-specification
                                                            ├─▶ 13-transformation-specification
                                                            ├─▶ 14-data-quality-specification
                                                            └─▶ 15-orchestration-observability-specification
                                                                          ├─▶ 16-semantic-model-specification
                                                                          ├─▶ 17-serving-layer-specification
                                                                          ├─▶ 18-lineage-metadata-specification
                                                                          └─▶ 19-governance-security-specification
                                                                                        ├─▶ 20-cost-performance-optimization
                                                                                        ├─▶ 21-cicd-testing-specification
                                                                                        └─▶ 22-project-evaluation-report
```
