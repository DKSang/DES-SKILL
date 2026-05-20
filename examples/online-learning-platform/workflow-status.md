# DES Workflow Status — Online Learning Platform

**Project**: EduTech Vietnam — Learning Analytics Platform
**Data Maturity**: Level 2 (Scaling)
**Started**: 2026-05-21
**Last Updated**: 2026-05-21

---

## Phase Status

| Phase | Skill | Status | Artifact | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 01 | `de-business-discovery` | ✅ COMPLETE | `01-business-discovery.md` | Level 2 confirmed; scope defined |
| 02 | `de-business-questions` | ✅ COMPLETE | `02-business-questions.md` | Completion Rate conflict resolved |
| 03 | `de-requirements-and-kpis` | ✅ COMPLETE | `03-requirements-and-kpis.md` | P1 Hard SLA: 6AM daily |
| 04 | `de-data-product-definition` | ⏳ PENDING | — | — |
| 05 | `de-data-source-assessment` | ✅ COMPLETE | `05-data-source-assessment.md` | HALT: Udemy rate limit & PII policy resolved |
| 06 | `de-domain-modeling` | ✅ COMPLETE | `06-domain-modeling.md` | Grain confirmed: daily snapshot |
| 07 | `de-architecture-design` | ✅ COMPLETE | `07-architecture-design.md` | ADR-001: Delta Lake One-way door confirmed |
| 08 | `de-ingestion-design` | ⏳ PENDING | — | — |
| 09 | `de-bronze-layer-design` | ⏳ PENDING | — | — |
| 10 | `de-silver-layer-design` | ⏳ PENDING | — | — |
| 11 | `de-gold-layer-design` | ⏳ PENDING | — | — |
| 12 | `de-data-contracts` | ⏳ PENDING | — | — |
| 13 | `de-transformation-design` | ⏳ PENDING | — | — |
| 14 | `de-data-quality` | ✅ COMPLETE | `14-data-quality.md` | 14 rules defined; 3-layer gates |
| 15 | `de-orchestration-and-observability` | ⏳ PENDING | — | — |
| 16 | `de-semantic-model-design` | ⏳ PENDING | — | — |
| 17 | `de-serving-layer-design` | ⏳ PENDING | — | — |
| 18 | `de-lineage-and-metadata` | ⏳ PENDING | — | — |
| 19 | `de-governance-and-security` | ⏳ PENDING | — | — |
| 20 | `de-cost-and-performance-optimization` | ⏳ PENDING | — | — |
| 21 | `de-cicd-and-testing` | ⏳ PENDING | — | — |
| 22 | `de-project-evaluation` | ⏳ PENDING | — | — |

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

→ **`de-data-product-definition`** (Phase 04) để define formal data products cho Instructor Dashboard và At-Risk API.
