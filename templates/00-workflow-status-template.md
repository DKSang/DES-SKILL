# DES-SKILL Workflow Status

> Copy this file to `.agents/des-skill/sprint-status/des-workflow-status.md` when starting a project.
> Update it after every phase to maintain a reliable session-to-session handoff.

---

## Project

| Field | Value |
| :--- | :--- |
| **Project Name** | |
| **Domain** | |
| **Repository** | |
| **Data Maturity Level** | Level 1 / Level 2 / Level 3 |
| **Current Phase** | (e.g., `09 - Bronze Layer Design`) |
| **Active Skill** | (e.g., `de-bronze-layer-design`) |
| **Workflow Mode** | Quick Fix / Standard Feature / Enterprise Data Product / Correct Course |
| **Active Persona** | Workflow Coordinator / Data Product Analyst / Source & Domain Analyst / Data Architect / Data Quality Engineer / Analytics Engineer / Governance Reviewer / DataOps Engineer / Implementation Developer / Delivery Reviewer |
| **Next Recommended Skill** | (e.g., `de-silver-layer-design`) |
| **Last Updated** | YYYY-MM-DD |

---

## Workflow Mode Decision

| Mode | Status | Reason | Required Next Skill / Gate |
| :--- | :--- | :--- | :--- |
| Quick Fix | Not Selected | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `de-build-from-artifacts` -> `de-verify-delivery` |
| Standard Feature | Not Selected | One cohesive data feature, pipeline change, model change, or contract/DQ update | `de-implementation-planning` before build |
| Enterprise Data Product | Not Selected | New production data product, regulated data, cross-team work, or irreversible decision | Required phase artifacts 01-22 |
| Correct Course | Not Selected | Artifact conflict, review blocker, verification failure, incident fact, or scope change | `de-brainstorm-change` then affected phase update |

**Selected Mode**:

**Explicit Override Granted?** Yes / No / N/A

**Mode Blockers**:

---

## Phase Artifact Progress

| # | Artifact File | Skill | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 01 | `01-business-discovery.md` | `de-business-discovery` | Not Started | |
| 02 | `02-business-questions.md` | `de-business-questions` | Not Started | |
| 03 | `03-requirements-and-kpis.md` | `de-requirements-and-kpis` | Not Started | |
| 04 | `04-data-product-definition.md` | `de-data-product-definition` | Not Started | |
| 05 | `05-data-source-assessment.md` | `de-data-source-assessment` | Not Started | |
| 06 | `06-domain-modeling.md` | `de-domain-modeling` | Not Started | |
| 07 | `07-architecture-design.md` | `de-architecture-design` | Not Started | |
| 07b | `07b-architecture-decision-records.md` | `de-architecture-design` | Not Started | One ADR per major decision |
| 08 | `08-ingestion-design.md` | `de-ingestion-design` | Not Started | |
| 09 | `09-bronze-layer-design.md` | `de-bronze-layer-design` | Not Started | |
| 10 | `10-silver-layer-design.md` | `de-silver-layer-design` | Not Started | |
| 11 | `11-gold-layer-design.md` | `de-gold-layer-design` | Not Started | |
| 12 | `12-data-contracts.md` | `de-data-contracts` | Not Started | |
| 13 | `13-transformation-design.md` | `de-transformation-design` | Not Started | |
| 14 | `14-data-quality.md` | `de-data-quality` | Not Started | |
| 15 | `15-orchestration-and-observability.md` | `de-orchestration-and-observability` | Not Started | |
| 15b | `15b-pipeline-specs.md` | `de-orchestration-and-observability` | Not Started | One spec per pipeline |
| 16 | `16-semantic-model-design.md` | `de-semantic-model-design` | Not Started | |
| 17 | `17-serving-layer-design.md` | `de-serving-layer-design` | Not Started | |
| 18 | `18-lineage-and-metadata.md` | `de-lineage-and-metadata` | Not Started | |
| 19 | `19-governance-and-security.md` | `de-governance-and-security` | Not Started | |
| 20 | `20-cost-and-performance-optimization.md` | `de-cost-and-performance-optimization` | Not Started | |
| 21 | `21-cicd-and-testing.md` | `de-cicd-and-testing` | Not Started | |
| 21b | `21b-release-readiness.md` | `de-cicd-and-testing` | Not Started | Per-release sign-off |
| 22 | `22-project-evaluation.md` | `de-project-evaluation` | Not Started | |
| 23 | `23-data-lifecycle-review.md` | `de-project-evaluation` | Not Started | Quarterly review |

**Status values**: `Not Started` → `In Progress` → `Done` → `Skipped (reason)`

---

## Six Undercurrents Health

Track the current state of each undercurrent across all active phases:

| Undercurrent | Status | Last Reviewed Phase | Notes |
| :--- | :--- | :--- | :--- |
| **Security** | ⬜ Not assessed | — | |
| **Data Management** | ⬜ Not assessed | — | |
| **DataOps** | ⬜ Not assessed | — | |
| **Data Architecture** | ⬜ Not assessed | — | |
| **Orchestration** | ⬜ Not assessed | — | |
| **Software Engineering** | ⬜ Not assessed | — | |

**Status values**: `⬜ Not assessed` / `🟡 Partial` / `✅ Complete` / `🔴 Blocker`

---

## Active Blockers

| Blocker | Phase Blocked | Owner | Impact | Next Action | Due Date |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | |

---

## Implementation Support Progress

Use this section when moving from planning artifacts into implementation work. These support skills are optional and can be used whenever enough planning context exists. Keep the status current so build, review, verification, and retrospective work can resume safely across sessions.

| Support Artifact | Skill | Status | Notes |
| :--- | :--- | :--- | :--- |
| `change-brief.md` | `de-brainstorm-change` | Not Started | Scope change, new feature, or incident follow-up |
| `implementation-plan.md` | `de-implementation-planning` | Not Started | Tasks mapped to planning artifacts |
| `implementation-story.md` | `de-implementation-planning` | Not Started | Executable dev packet with ACs, tasks, guardrails, file list, change log |
| `implementation-log.md` | `de-build-from-artifacts` | Not Started | Files changed, tests run, deviations |
| `review-report.md` | `de-review-implementation` | Not Started | Findings against artifacts/contracts/DQ/security |
| `verification-report.md` | `de-verify-delivery` | Not Started | Fresh command evidence |
| `implementation-retrospective.md` | `de-implementation-retrospective` | Not Started | Lessons, artifact drift, follow-up backlog |

**Status values**: `Not Started` → `In Progress` → `Done` → `Blocked (reason)` → `Skipped (reason)`

---

## Implementation Readiness / Definition of Done

| Gate | Checklist | Status | Notes |
| :--- | :--- | :--- | :--- |
| Implementation Readiness | `checklists/implementation-readiness-checklist.md` | Not Started | Must pass before `de-build-from-artifacts` unless risk is explicitly accepted |
| Definition of Done | `checklists/definition-of-done-checklist.md` | Not Started | Must support ready-for-review, complete, release, or completion claim |

**Gate status values**: `Not Started` -> `Pass` -> `Blocked` -> `Ready with Accepted Risk` -> `Partial`

---

## Key Decisions Log

| Date | Phase | Decision Made | Rationale | Reversibility | Artifact Reference |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | Easy / Hard | |

---

## Open Questions

| Question | Phase | Owner | Needed By | Next Action |
| :--- | :--- | :--- | :--- | :--- |
| | | | | |

---

## Next Session Prompt

Copy and paste this at the start of the next agent session:

```text
Continue this DES-SKILL project.

Read these files in order:
1. .agents/des-skill/DES-WORKFLOW.md
2. .agents/des-skill/sprint-status/des-workflow-status.md
3. .agents/des-skill/output/ (scan all completed artifacts)

Then:
- Identify the current phase from des-workflow-status.md
- Check that all upstream phase artifacts are complete before starting the next phase
- Activate the correct next skill from the Skill column
- Write the next artifact to .agents/des-skill/output/
- Update des-workflow-status.md: set artifact status to Done, update Current Phase and Next Recommended Skill
```
