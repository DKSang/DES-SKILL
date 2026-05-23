# DES-SKILL Workflow Status

> Copy this file to `_des-output/implementation-artifacts/des-workflow-status.md` when starting a project.
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
| **Active Skill** | (e.g., `des-bronze-layer-design`) |
| **Workflow Mode** | Quick Fix / Standard Feature / Enterprise Data Product / Correct Course |
| **Active Persona** | Workflow Coordinator / Data Product Analyst / Source & Domain Analyst / Data Architect / Data Quality Engineer / Analytics Engineer / Governance Reviewer / DataOps Engineer / Implementation Developer / Delivery Reviewer |
| **Next Recommended Skill** | (e.g., `des-silver-layer-design`) |
| **Last Updated** | YYYY-MM-DD |

---

## Workflow Mode Decision

| Mode | Status | Reason | Required Next Skill / Gate |
| :--- | :--- | :--- | :--- |
| Quick Fix | Not Selected | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `des-dev-task-breakdown` -> `des-code-review` |
| Standard Feature | Not Selected | One cohesive data feature, pipeline change, model change, or contract/DQ update | `des-implementation-plan` before build |
| Enterprise Data Product | Not Selected | New production data product, regulated data, cross-team work, or irreversible decision | Required phase artifacts 01-22 |
| Correct Course | Not Selected | Artifact conflict, review blocker, verification failure, incident fact, or scope change | `des-correct-course` then affected phase update |

**Selected Mode**:

**Explicit Override Granted?** Yes / No / N/A

**Mode Blockers**:

---

## Phase Artifact Progress

| # | Artifact File | Skill | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 01 | `01-business-discovery-brief.md` | `des-business-discovery` | Not Started | |
| 02 | `02-business-question-catalog.md` | `des-business-questions` | Not Started | |
| 03 | `03-requirements-and-kpi-catalog.md` | `des-requirements-and-kpis` | Not Started | |
| 04 | `04-data-product-specification.md` | `des-data-product-definition` | Not Started | |
| 05 | `05-data-source-inventory.md` | `des-data-source-assessment` | Not Started | |
| 06 | `06-conceptual-domain-model.md` | `des-domain-modeling` | Not Started | |
| 07 | `07-architecture-decision-record.md` | `des-architecture-design` | Not Started | |
| 07b | `07-architecture-decision-record-template.md` | `des-architecture-design` | Not Started | Template reference |
| 08 | `08-ingestion-specification.md` | `des-ingestion-design` | Not Started | |
| 09 | `09-bronze-layer-design.md` | `des-bronze-layer-design` | Not Started | |
| 10 | `10-silver-layer-design.md` | `des-silver-layer-design` | Not Started | |
| 11 | `11-gold-layer-design.md` | `des-gold-layer-design` | Not Started | |
| 12 | `12-data-contract-specification.md` | `des-data-contracts` | Not Started | |
| 13 | `13-transformation-specification.md` | `des-transformation-design` | Not Started | |
| 14 | `14-data-quality-specification.md` | `des-data-quality` | Not Started | |
| 15 | 15-orchestration-observability-specification.md | des-orchestration-observability | Not Started | |
| 15b | 15b-pipeline-specs.md | des-orchestration-observability | Not Started | One spec per pipeline |
| 16 | `16-semantic-model-specification.md` | `des-semantic-model-design` | Not Started | |
| 17 | `17-serving-layer-specification.md` | `des-serving-layer-design` | Not Started | |
| 18 | `18-lineage-metadata-specification.md` | `des-lineage-metadata-design` | Not Started | |
| 19 | `19-governance-and-security.md` | `des-governance-and-security` | Not Started | |
| 20 | `20-cost-and-performance-optimization.md` | `des-cost-and-performance-optimization` | Not Started | |
| 21 | `21-cicd-and-testing.md` | `des-cicd-and-testing` | Not Started | |
| 21b | `21b-release-readiness.md` | `des-cicd-and-testing` | Not Started | Per-release sign-off |
| 22 | `22-project-evaluation.md` | `des-project-evaluation` | Not Started | |
| 23 | `23-data-lifecycle-review.md` | `des-project-evaluation` | Not Started | Quarterly review |

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
| `help-note.md` | `des-help` | Not Started | Optional workflow explanation or routing note |
| `epic-catalog.md` | `des-create-epic` | Not Started | Epics derived from approved DES artifacts |
| `story-catalog.md` | `des-create-story` | Not Started | Context-rich story packet from artifacts and repo context |
| `sprint-plan.md` | `des-sprint-planning` | Not Started | Sprint/story/review/release/retro status tracking |
| `story-readiness-report.md` | `des-story-readiness-check` | Not Started | Readiness gate before task breakdown |
| `dev-task-breakdown.md` | `des-dev-task-breakdown` | Not Started | Developer task list with checks and validation notes |
| `implementation-plan.md` | `des-implementation-plan` | Not Started | Tasks mapped to planning artifacts |
| `code-review-report.md` | `des-code-review` | Not Started | Findings against artifacts/contracts/DQ/security |
| `release-readiness-report.md` | `des-release-readiness-review` | Not Started | Fresh release evidence and release decision |
| `retrospective-report.md` | `des-retrospective` | Not Started | Lessons, artifact drift, follow-up backlog |
| `correct-course-plan.md` | `des-correct-course` | Not Started | Corrective route and action plan |

**Status values**: `Not Started` → `In Progress` → `Done` → `Blocked (reason)` → `Skipped (reason)`

---

## Implementation Readiness / Definition of Done

| Gate | Checklist | Status | Notes |
| :--- | :--- | :--- | :--- |
| Implementation Readiness | `checklists/implementation-readiness-checklist.md` | Not Started | Must pass before `des-dev-task-breakdown` unless risk is explicitly accepted |
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
1. _des/DES-WORKFLOW.md
2. _des-output/implementation-artifacts/des-workflow-status.md
3. _des-output/planning-artifacts/ (scan all completed artifacts)

Then:
- Identify the current phase from des-workflow-status.md
- Check that all upstream phase artifacts are complete before starting the next phase
- Activate the correct next skill from the Skill column
- Write the next artifact to _des-output/planning-artifacts/
- Update des-workflow-status.md: set artifact status to Done, update Current Phase and Next Recommended Skill
```
