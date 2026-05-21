# DES Workflow Status — Online Learning Platform

**Project**: EduTech Vietnam — Learning Analytics Platform
**Data Maturity**: Level 2 (Scaling)
**Started**: 2026-05-21
**Last Updated**: 2026-05-21

---

## Phase Status

| Phase | Skill | Status | Artifact | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 01 | `des-business-discovery` | ✅ COMPLETE | `01-business-discovery-brief.md` | Level 2 confirmed; scope defined |
| 02 | `des-business-questions` | ✅ COMPLETE | `02-business-question-catalog.md` | Completion Rate conflict resolved |
| 03 | `des-requirements-and-kpis` | ✅ COMPLETE | `03-requirements-and-kpi-catalog.md` | P1 Hard SLA: 6AM daily |
| 04 | `des-data-product-definition` | ⏳ PENDING | — | — |
| 05 | `des-data-source-assessment` | ✅ COMPLETE | `05-data-source-inventory.md` | HALT: Udemy rate limit & PII policy resolved |
| 06 | `des-domain-modeling` | ✅ COMPLETE | `06-conceptual-domain-model.md` | Grain confirmed: daily snapshot |
| 07 | `des-architecture-design` | ✅ COMPLETE | `07-architecture-design.md` | ADR-001: Delta Lake One-way door confirmed |
| 08 | `des-ingestion-design` | ⏳ PENDING | — | — |
| 09 | `des-bronze-layer-design` | ⏳ PENDING | — | — |
| 10 | `des-silver-layer-design` | ⏳ PENDING | — | — |
| 11 | `des-gold-layer-design` | ⏳ PENDING | — | — |
| 12 | `des-data-contracts` | ⏳ PENDING | — | — |
| 13 | `des-transformation-design` | ⏳ PENDING | — | — |
| 14 | `des-data-quality` | ✅ COMPLETE | `14-data-quality-specification.md` | 14 rules defined; 3-layer gates |
| 15 | `des-orchestration-observability` | ⏳ PENDING | — | — |
| 16 | `des-semantic-model-design` | ⏳ PENDING | — | — |
| 17 | `des-serving-layer-design` | ⏳ PENDING | — | — |
| 18 | `des-lineage-metadata-design` | ⏳ PENDING | — | — |
| 19 | `des-governance-and-security` | ⏳ PENDING | — | — |
| 20 | `des-cost-and-performance-optimization` | ⏳ PENDING | — | — |
| 21 | `des-cicd-and-testing` | ⏳ PENDING | — | — |
| 22 | `des-project-evaluation` | ⏳ PENDING | — | — |

---

## Key Decisions Log

| Ngày | Quyết định | Loại | Decided By |
| :--- | :--- | :--- | :--- |
| 2026-05-21 | Completion Rate = submit quiz cuối + mark Complete trong LMS | Metric definition | Product Manager + CFO |
| 2026-05-21 | Active Student = 7-ngày window (canonical) | Metric definition | product-manager |
| 2026-05-21 | Storage: Azure / Fabric OneLake + Delta Lake | One-way door | Data Lead |
| 2026-05-21 | Modeling: Kimball (Dimensional) — vì team Level 2 + BI primary | Architecture | Data Lead + PM |
| 2026-05-21 | Grain `fact_learning_progress` = daily snapshot (không phải per-event) | Grain | Product Manager |
| 2026-05-21 | Udemy API tier upgrade → cần confirm với Product | Blocker | Data Engineer |

---

## Blockers / Open Items

| Item | Owner | Due | Status |
| :--- | :--- | :--- | :--- |
| Udemy API tier upgrade cho 58.5K enrollments | Product Manager | 2026-05-28 | 🔴 Open |
| PII masking policy tại layer nào (Bronze vs Silver) | Security team | 2026-05-28 | 🔴 Open |
| Payment DB timezone (UTC hay UTC+7?) | finance-team | 2026-05-25 | 🟡 In progress |
| Module có thể thuộc nhiều courses không? | lms-team | 2026-05-25 | 🟡 In progress |

---

## Next Skill

→ **`des-data-product-definition`** (Phase 04) để define formal data products cho Instructor Dashboard và At-Risk API.
