# DES-SKILL Workflow Status

> Copy this file to `_des-output/implementation-artifacts/des-workflow-status.md` when starting a project.
> Update it after every phase, support run, evidence collection, artifact revision, done gate, and handoff.
>
> This status file is the central control plane for DES-SKILL phase-by-phase validated delivery.

---

## Project

| Field | Value |
| :--- | :--- |
| **Project Name** | |
| **Domain** | |
| **Repository** | |
| **Data Maturity Level** | Level 1 / Level 2 / Level 3 |
| **Current Phase** | e.g., `05 - Data Source Assessment` |
| **Active Skill** | e.g., `des-data-source-assessment` |
| **Workflow Mode** | Quick Fix / Standard Feature / Enterprise Data Product / Correct Course |
| **Execution Model** | Full Planning Then Implementation / Phase-Orchestrated Support / Hybrid |
| **Active Persona** | Workflow Coordinator / Data Product Analyst / Source & Domain Analyst / Data Architect / Data Quality Engineer / Analytics Engineer / Governance Reviewer / DataOps Engineer / Implementation Developer / Delivery Reviewer |
| **Next Recommended Skill** | e.g., `des-domain-modeling` |
| **Last Updated** | YYYY-MM-DD |

---

## Workflow Mode Decision

| Mode | Status | Reason | Required Next Skill / Gate |
| :--- | :--- | :--- | :--- |
| Quick Fix | Not Selected | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `des-dev-task-breakdown` -> `des-code-review` |
| Standard Feature | Not Selected | One cohesive data feature, pipeline change, model change, or contract/DQ update | `des-implementation-plan` before build |
| Enterprise Data Product | Not Selected | New production data product, regulated data, cross-team work, or irreversible decision | Required phase artifacts and validated handoffs |
| Correct Course | Not Selected | Artifact conflict, review blocker, verification failure, incident fact, or scope change | `des-correct-course` then affected phase update |

**Selected Mode**:

**Execution Model Selected**:

**Explicit Override Granted?** Yes / No / N/A

**Mode Blockers**:

---

## Phase Status Values

Use these values consistently across this file.

| Status | Meaning |
| :--- | :--- |
| `Not Started` | The phase has not started. |
| `Draft` | Initial phase artifact exists, but required support work or evidence is missing. |
| `Evidence Required` | Required support work has been identified but not completed. |
| `Evidence Collected` | Required evidence exists, but artifact revision or Done Gate is not complete. |
| `Validated` | Artifact has been revised using evidence and is ready for Done Gate. |
| `Done` | Done Gate passed and handoff exists. |
| `Blocked` | The phase cannot continue until a blocker is resolved. |
| `Skipped` | The phase was skipped with explicit reason and accepted risk. |

Do not mark a phase `Done` only because the phase artifact exists.

---

## Phase Artifact Progress

This table tracks the main DES lifecycle artifact for each phase.

| # | Artifact File | Skill | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| 01 | `01-business-discovery-brief.md` | `des-business-discovery` | Not Started | |
| 02 | `02-business-question-catalog.md` | `des-business-questions` | Not Started | |
| 03 | `03-requirements-and-kpi-catalog.md` | `des-requirements-and-kpis` | Not Started | |
| 04 | `04-data-product-specification.md` | `des-data-product-definition` | Not Started | |
| 05 | `05-data-source-inventory.md` | `des-data-source-assessment` | Not Started | |
| 06 | `06-conceptual-domain-model.md` | `des-domain-modeling` | Not Started | |
| 07 | `07-architecture-decision-record.md` | `des-architecture-design` | Not Started | |
| 08 | `08-ingestion-specification.md` | `des-ingestion-design` | Not Started | |
| 09 | `09-bronze-layer-specification.md` | `des-bronze-layer-design` | Not Started | |
| 10 | `10-silver-layer-specification.md` | `des-silver-layer-design` | Not Started | |
| 11 | `11-gold-layer-specification.md` | `des-gold-layer-design` | Not Started | |
| 12 | `12-data-contract-specification.md` | `des-data-contracts` | Not Started | |
| 13 | `13-transformation-specification.md` | `des-transformation-design` | Not Started | |
| 14 | `14-data-quality-specification.md` | `des-data-quality` | Not Started | |
| 15 | `15-orchestration-observability-specification.md` | `des-orchestration-observability` | Not Started | |
| 16 | `16-semantic-model-specification.md` | `des-semantic-model-design` | Not Started | |
| 17 | `17-serving-layer-specification.md` | `des-serving-layer-design` | Not Started | |
| 18 | `18-lineage-metadata-specification.md` | `des-lineage-metadata-design` | Not Started | |
| 19 | `19-governance-security-specification.md` | `des-governance-security-design` | Not Started | |
| 20 | `20-cost-performance-optimization-specification.md` | `des-cost-and-performance-optimization` | Not Started | |
| 21 | `21-cicd-testing-specification.md` | `des-cicd-and-testing` | Not Started | |
| 22 | `22-project-evaluation-report.md` | `des-project-evaluation` | Not Started | |

---

## Phase Execution Status

This table tracks whether each phase is only drafted or truly validated.

| # | Phase | Artifact Status | Support Plan | Evidence Pack | Artifact Revision | Done Gate | Handoff | Overall Phase Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | Business Discovery | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 02 | Business Questions | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 03 | Requirements and KPIs | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 04 | Data Product Definition | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 05 | Data Source Assessment | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 06 | Domain Modeling | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 07 | Architecture Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 08 | Ingestion Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 09 | Bronze Layer Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 10 | Silver Layer Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 11 | Gold Layer Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 12 | Data Contracts | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 13 | Transformation Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 14 | Data Quality | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 15 | Orchestration and Observability | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 16 | Semantic Model Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 17 | Serving Layer Design | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 18 | Lineage and Metadata | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 19 | Governance and Security | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 20 | Cost and Performance | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 21 | CI/CD and Testing | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |
| 22 | Project Evaluation | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started | Not Started |

Suggested values:

```text
Not Started
Draft
Required
In Progress
Collected
Revised
Pass
Pass with risks
Fail
Ready
Ready with Risks
Done
Blocked
Skipped
Waived
```

---

## Phase Support Plan Progress

Track the support plan for each phase.

| Phase | Support Plan File          | Required Support Skills | Optional Support Skills | Waived / Deferred Items | Status      | Notes |
| :---- | :------------------------- | :---------------------- | :---------------------- | :---------------------- | :---------- | :---- |
| 01    | `phase-01-support-plan.md` |                         |                         |                         | Not Started |       |
| 02    | `phase-02-support-plan.md` |                         |                         |                         | Not Started |       |
| 03    | `phase-03-support-plan.md` |                         |                         |                         | Not Started |       |
| 04    | `phase-04-support-plan.md` |                         |                         |                         | Not Started |       |
| 05    | `phase-05-support-plan.md` |                         |                         |                         | Not Started |       |
| 06    | `phase-06-support-plan.md` |                         |                         |                         | Not Started |       |
| 07    | `phase-07-support-plan.md` |                         |                         |                         | Not Started |       |
| 08    | `phase-08-support-plan.md` |                         |                         |                         | Not Started |       |
| 09    | `phase-09-support-plan.md` |                         |                         |                         | Not Started |       |
| 10    | `phase-10-support-plan.md` |                         |                         |                         | Not Started |       |
| 11    | `phase-11-support-plan.md` |                         |                         |                         | Not Started |       |
| 12    | `phase-12-support-plan.md` |                         |                         |                         | Not Started |       |
| 13    | `phase-13-support-plan.md` |                         |                         |                         | Not Started |       |
| 14    | `phase-14-support-plan.md` |                         |                         |                         | Not Started |       |
| 15    | `phase-15-support-plan.md` |                         |                         |                         | Not Started |       |
| 16    | `phase-16-support-plan.md` |                         |                         |                         | Not Started |       |
| 17    | `phase-17-support-plan.md` |                         |                         |                         | Not Started |       |
| 18    | `phase-18-support-plan.md` |                         |                         |                         | Not Started |       |
| 19    | `phase-19-support-plan.md` |                         |                         |                         | Not Started |       |
| 20    | `phase-20-support-plan.md` |                         |                         |                         | Not Started |       |
| 21    | `phase-21-support-plan.md` |                         |                         |                         | Not Started |       |
| 22    | `phase-22-support-plan.md` |                         |                         |                         | Not Started |       |

---

## Phase Evidence Pack Progress

Track whether evidence exists for each phase.

| Phase | Evidence Directory               | Evidence Pack File          | Critical Evidence Coverage        | Evidence Status | Notes |
| :---- | :------------------------------- | :-------------------------- | :-------------------------------- | :-------------- | :---- |
| 01    | `_des-output/evidence/phase-01/` | `phase-01-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 02    | `_des-output/evidence/phase-02/` | `phase-02-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 03    | `_des-output/evidence/phase-03/` | `phase-03-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 04    | `_des-output/evidence/phase-04/` | `phase-04-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 05    | `_des-output/evidence/phase-05/` | `phase-05-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 06    | `_des-output/evidence/phase-06/` | `phase-06-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 07    | `_des-output/evidence/phase-07/` | `phase-07-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 08    | `_des-output/evidence/phase-08/` | `phase-08-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 09    | `_des-output/evidence/phase-09/` | `phase-09-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 10    | `_des-output/evidence/phase-10/` | `phase-10-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 11    | `_des-output/evidence/phase-11/` | `phase-11-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 12    | `_des-output/evidence/phase-12/` | `phase-12-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 13    | `_des-output/evidence/phase-13/` | `phase-13-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 14    | `_des-output/evidence/phase-14/` | `phase-14-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 15    | `_des-output/evidence/phase-15/` | `phase-15-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 16    | `_des-output/evidence/phase-16/` | `phase-16-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 17    | `_des-output/evidence/phase-17/` | `phase-17-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 18    | `_des-output/evidence/phase-18/` | `phase-18-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 19    | `_des-output/evidence/phase-19/` | `phase-19-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 20    | `_des-output/evidence/phase-20/` | `phase-20-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 21    | `_des-output/evidence/phase-21/` | `phase-21-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |
| 22    | `_des-output/evidence/phase-22/` | `phase-22-evidence-pack.md` | Missing / Partial / Full / Waived | Not Started     |       |

Evidence status values:

```text
Not Started
In Progress
Collected
Insufficient
Accepted
Rejected
Waived
Blocked
```

---

## Phase Artifact Revision Progress

Track whether the phase artifact was updated after evidence collection.

| Phase | Artifact Revision Report        | Artifact Revised From Evidence? | Revision Status | Notes |
| :---- | :------------------------------ | :------------------------------ | :-------------- | :---- |
| 01    | `phase-01-artifact-revision.md` | No                              | Not Started     |       |
| 02    | `phase-02-artifact-revision.md` | No                              | Not Started     |       |
| 03    | `phase-03-artifact-revision.md` | No                              | Not Started     |       |
| 04    | `phase-04-artifact-revision.md` | No                              | Not Started     |       |
| 05    | `phase-05-artifact-revision.md` | No                              | Not Started     |       |
| 06    | `phase-06-artifact-revision.md` | No                              | Not Started     |       |
| 07    | `phase-07-artifact-revision.md` | No                              | Not Started     |       |
| 08    | `phase-08-artifact-revision.md` | No                              | Not Started     |       |
| 09    | `phase-09-artifact-revision.md` | No                              | Not Started     |       |
| 10    | `phase-10-artifact-revision.md` | No                              | Not Started     |       |
| 11    | `phase-11-artifact-revision.md` | No                              | Not Started     |       |
| 12    | `phase-12-artifact-revision.md` | No                              | Not Started     |       |
| 13    | `phase-13-artifact-revision.md` | No                              | Not Started     |       |
| 14    | `phase-14-artifact-revision.md` | No                              | Not Started     |       |
| 15    | `phase-15-artifact-revision.md` | No                              | Not Started     |       |
| 16    | `phase-16-artifact-revision.md` | No                              | Not Started     |       |
| 17    | `phase-17-artifact-revision.md` | No                              | Not Started     |       |
| 18    | `phase-18-artifact-revision.md` | No                              | Not Started     |       |
| 19    | `phase-19-artifact-revision.md` | No                              | Not Started     |       |
| 20    | `phase-20-artifact-revision.md` | No                              | Not Started     |       |
| 21    | `phase-21-artifact-revision.md` | No                              | Not Started     |       |
| 22    | `phase-22-artifact-revision.md` | No                              | Not Started     |       |

Revision status values:

```text
Not Started
In Progress
Revised
Needs More Evidence
Needs More Revision
Blocked
```

---

## Phase Done Gate Progress

Track whether each phase has passed the Done Gate.

| Phase | Done Gate File          | Gate Result | Gate Status | Conditions / Blockers |
| :---- | :---------------------- | :---------- | :---------- | :-------------------- |
| 01    | `phase-01-done-gate.md` | Not Run     | Not Started |                       |
| 02    | `phase-02-done-gate.md` | Not Run     | Not Started |                       |
| 03    | `phase-03-done-gate.md` | Not Run     | Not Started |                       |
| 04    | `phase-04-done-gate.md` | Not Run     | Not Started |                       |
| 05    | `phase-05-done-gate.md` | Not Run     | Not Started |                       |
| 06    | `phase-06-done-gate.md` | Not Run     | Not Started |                       |
| 07    | `phase-07-done-gate.md` | Not Run     | Not Started |                       |
| 08    | `phase-08-done-gate.md` | Not Run     | Not Started |                       |
| 09    | `phase-09-done-gate.md` | Not Run     | Not Started |                       |
| 10    | `phase-10-done-gate.md` | Not Run     | Not Started |                       |
| 11    | `phase-11-done-gate.md` | Not Run     | Not Started |                       |
| 12    | `phase-12-done-gate.md` | Not Run     | Not Started |                       |
| 13    | `phase-13-done-gate.md` | Not Run     | Not Started |                       |
| 14    | `phase-14-done-gate.md` | Not Run     | Not Started |                       |
| 15    | `phase-15-done-gate.md` | Not Run     | Not Started |                       |
| 16    | `phase-16-done-gate.md` | Not Run     | Not Started |                       |
| 17    | `phase-17-done-gate.md` | Not Run     | Not Started |                       |
| 18    | `phase-18-done-gate.md` | Not Run     | Not Started |                       |
| 19    | `phase-19-done-gate.md` | Not Run     | Not Started |                       |
| 20    | `phase-20-done-gate.md` | Not Run     | Not Started |                       |
| 21    | `phase-21-done-gate.md` | Not Run     | Not Started |                       |
| 22    | `phase-22-done-gate.md` | Not Run     | Not Started |                       |

Gate result values:

```text
Not Run
Pass
Pass with risks
Fail
Blocked
```

---

## Phase Handoff Register

Track whether each phase has produced a safe handoff to the next phase.

| From Phase | To Phase | Handoff File                | Handoff Status | Risks Carried Forward | Notes |
| :--------- | :------- | :-------------------------- | :------------- | :-------------------- | :---- |
| 01         | 02       | `phase-01-to-02-handoff.md` | Not Started    |                       |       |
| 02         | 03       | `phase-02-to-03-handoff.md` | Not Started    |                       |       |
| 03         | 04       | `phase-03-to-04-handoff.md` | Not Started    |                       |       |
| 04         | 05       | `phase-04-to-05-handoff.md` | Not Started    |                       |       |
| 05         | 06       | `phase-05-to-06-handoff.md` | Not Started    |                       |       |
| 06         | 07       | `phase-06-to-07-handoff.md` | Not Started    |                       |       |
| 07         | 08       | `phase-07-to-08-handoff.md` | Not Started    |                       |       |
| 08         | 09       | `phase-08-to-09-handoff.md` | Not Started    |                       |       |
| 09         | 10       | `phase-09-to-10-handoff.md` | Not Started    |                       |       |
| 10         | 11       | `phase-10-to-11-handoff.md` | Not Started    |                       |       |
| 11         | 12       | `phase-11-to-12-handoff.md` | Not Started    |                       |       |
| 12         | 13       | `phase-12-to-13-handoff.md` | Not Started    |                       |       |
| 13         | 14       | `phase-13-to-14-handoff.md` | Not Started    |                       |       |
| 14         | 15       | `phase-14-to-15-handoff.md` | Not Started    |                       |       |
| 15         | 16       | `phase-15-to-16-handoff.md` | Not Started    |                       |       |
| 16         | 17       | `phase-16-to-17-handoff.md` | Not Started    |                       |       |
| 17         | 18       | `phase-17-to-18-handoff.md` | Not Started    |                       |       |
| 18         | 19       | `phase-18-to-19-handoff.md` | Not Started    |                       |       |
| 19         | 20       | `phase-19-to-20-handoff.md` | Not Started    |                       |       |
| 20         | 21       | `phase-20-to-21-handoff.md` | Not Started    |                       |       |
| 21         | 22       | `phase-21-to-22-handoff.md` | Not Started    |                       |       |

Handoff status values:

```text
Not Started
Ready
Ready with Risks
Not Ready
Blocked
Skipped
```

---

## Phase Dependency and Readiness Matrix

Use this table before starting a new phase.

| Next Phase | Required Upstream Phase | Required Upstream Artifact                          | Required Handoff            | Ready to Start? | Notes |
| :--------- | :---------------------- | :-------------------------------------------------- | :-------------------------- | :-------------- | :---- |
| 02         | 01                      | `01-business-discovery-brief.md`                    | `phase-01-to-02-handoff.md` | No              |       |
| 03         | 02                      | `02-business-question-catalog.md`                   | `phase-02-to-03-handoff.md` | No              |       |
| 04         | 03                      | `03-requirements-and-kpi-catalog.md`                | `phase-03-to-04-handoff.md` | No              |       |
| 05         | 04                      | `04-data-product-specification.md`                  | `phase-04-to-05-handoff.md` | No              |       |
| 06         | 05                      | `05-data-source-inventory.md`                       | `phase-05-to-06-handoff.md` | No              |       |
| 07         | 06                      | `06-conceptual-domain-model.md`                     | `phase-06-to-07-handoff.md` | No              |       |
| 08         | 07                      | `07-architecture-decision-record.md`                | `phase-07-to-08-handoff.md` | No              |       |
| 09         | 08                      | `08-ingestion-specification.md`                     | `phase-08-to-09-handoff.md` | No              |       |
| 10         | 09                      | `09-bronze-layer-specification.md`                  | `phase-09-to-10-handoff.md` | No              |       |
| 11         | 10                      | `10-silver-layer-specification.md`                  | `phase-10-to-11-handoff.md` | No              |       |
| 12         | 11                      | `11-gold-layer-specification.md`                    | `phase-11-to-12-handoff.md` | No              |       |
| 13         | 12                      | `12-data-contract-specification.md`                 | `phase-12-to-13-handoff.md` | No              |       |
| 14         | 13                      | `13-transformation-specification.md`                | `phase-13-to-14-handoff.md` | No              |       |
| 15         | 14                      | `14-data-quality-specification.md`                  | `phase-14-to-15-handoff.md` | No              |       |
| 16         | 15                      | `15-orchestration-observability-specification.md`   | `phase-15-to-16-handoff.md` | No              |       |
| 17         | 16                      | `16-semantic-model-specification.md`                | `phase-16-to-17-handoff.md` | No              |       |
| 18         | 17                      | `17-serving-layer-specification.md`                 | `phase-17-to-18-handoff.md` | No              |       |
| 19         | 18                      | `18-lineage-metadata-specification.md`              | `phase-18-to-19-handoff.md` | No              |       |
| 20         | 19                      | `19-governance-security-specification.md`           | `phase-19-to-20-handoff.md` | No              |       |
| 21         | 20                      | `20-cost-performance-optimization-specification.md` | `phase-20-to-21-handoff.md` | No              |       |
| 22         | 21                      | `21-cicd-testing-specification.md`                  | `phase-21-to-22-handoff.md` | No              |       |

A phase is ready to start only when the previous phase has either:

```text
Done Gate = Pass
or Done Gate = Pass with risks
and Handoff = Ready or Ready with Risks
```

---

## Current Phase Operating Notes

Use this section to resume work safely across sessions.

| Field                   | Value                                                                                           |
| :---------------------- | :---------------------------------------------------------------------------------------------- |
| Current Phase           |                                                                                                 |
| Current Step            | Initial Artifact / Support Plan / Evidence Collection / Artifact Revision / Done Gate / Handoff |
| Current Support Skill   |                                                                                                 |
| Current Evidence Target |                                                                                                 |
| Current Blocker         |                                                                                                 |
| Next Immediate Action   |                                                                                                 |
| Do Not Proceed Until    |                                                                                                 |

---

## Active Blockers

| Blocker | Phase Blocked | Owner | Impact | Next Action | Due Date |
| :------ | :------------ | :---- | :----- | :---------- | :------- |
|         |               |       |        |             |          |

---

## Risk Register

| Risk ID | Risk | Phase | Severity                       | Status                               | Mitigation | Carry Forward? |
| :------ | :--- | :---- | :----------------------------- | :----------------------------------- | :--------- | :------------- |
|         |      |       | Critical / High / Medium / Low | Open / Accepted / Mitigated / Closed |            | Yes / No       |

---

## Key Decisions Log

| Date | Phase | Decision Made | Evidence / Rationale | Reversibility        | Artifact Reference |
| :--- | :---- | :------------ | :------------------- | :------------------- | :----------------- |
|      |       |               |                      | Easy / Medium / Hard |                    |

---

## Open Questions

| Question | Phase | Owner | Needed By | Next Action |
| :------- | :---- | :---- | :-------- | :---------- |
|          |       |       |           |             |

---

## Six Undercurrents Health

Track the current state of each undercurrent across all active phases.

| Undercurrent             | Status         | Last Reviewed Phase | Notes |
| :----------------------- | :------------- | :------------------ | :---- |
| **Security**             | ⬜ Not assessed | —                   |       |
| **Data Management**      | ⬜ Not assessed | —                   |       |
| **DataOps**              | ⬜ Not assessed | —                   |       |
| **Data Architecture**    | ⬜ Not assessed | —                   |       |
| **Orchestration**        | ⬜ Not assessed | —                   |       |
| **Software Engineering** | ⬜ Not assessed | —                   |       |

Status values:

```text
⬜ Not assessed
🟡 Partial
✅ Complete
🔴 Blocker
```

---

## Implementation Support Progress

Use this section when moving from phase artifacts into implementation work.

Support skills can be used in two modes:

1. Post-planning implementation mode.
2. Inside-phase completion mode.

| Support Artifact              | Skill                          | Status      | Mode                         | Notes                                                          |
| :---------------------------- | :----------------------------- | :---------- | :--------------------------- | :------------------------------------------------------------- |
| `des-wise-recommendation.md`  | `des-wise`                     | Not Started | Routing / Help               | Optional workflow explanation or routing note                  |
| `epic-catalog.md`             | `des-create-epic`              | Not Started | Post-planning / Inside-phase | Epics derived from approved artifacts or validated phase slice |
| `story-catalog.md`            | `des-create-story`             | Not Started | Post-planning / Inside-phase | Context-rich story packet from artifacts and repo context      |
| `sprint-plan.md`              | `des-sprint-planning`          | Not Started | Post-planning                | Sprint/story/review/release/retro status tracking              |
| `story-readiness-report.md`   | `des-story-readiness-check`    | Not Started | Post-planning / Inside-phase | Readiness gate before task breakdown                           |
| `dev-task-breakdown.md`       | `des-dev-task-breakdown`       | Not Started | Post-planning / Inside-phase | Developer task list with checks and validation notes           |
| `implementation-plan.md`      | `des-implementation-plan`      | Not Started | Post-planning / Inside-phase | Tasks mapped to planning artifacts                             |
| `code-review-report.md`       | `des-code-review`              | Not Started | Post-planning / Inside-phase | Findings against artifacts/contracts/DQ/security               |
| `release-readiness-report.md` | `des-release-readiness-review` | Not Started | Post-planning                | Fresh release evidence and release decision                    |
| `retrospective-report.md`     | `des-retrospective`            | Not Started | Post-planning                | Lessons, artifact drift, follow-up backlog                     |
| `correct-course-plan.md`      | `des-correct-course`           | Not Started | Recovery                     | Corrective route and action plan                               |
| `workflow-status-update.md`   | `des-workflow-status-update`   | Not Started | Status                       | Status update and consistency check                            |

Status values:

```text
Not Started
In Progress
Done
Blocked
Skipped
Waived
```

---

## Implementation Readiness / Definition of Done

| Gate                     | Checklist                                          | Status      | Notes                                                                 |
| :----------------------- | :------------------------------------------------- | :---------- | :-------------------------------------------------------------------- |
| Implementation Readiness | `checklists/implementation-readiness-checklist.md` | Not Started | Must pass before broad build work unless risk is explicitly accepted  |
| Phase Support Plan       | `checklists/phase-support-plan-checklist.md`       | Not Started | Required before support execution in Phase-Orchestrated Support model |
| Phase Evidence Pack      | `checklists/phase-evidence-pack-checklist.md`      | Not Started | Required before artifact revision                                     |
| Phase Artifact Revision  | `checklists/phase-artifact-revision-checklist.md`  | Not Started | Required before Done Gate                                             |
| Phase Done Gate          | `checklists/phase-done-gate-checklist.md`          | Not Started | Required before marking phase Done                                    |
| Phase Handoff            | `checklists/phase-handoff-checklist.md`            | Not Started | Required before starting next phase                                   |
| Definition of Done       | `checklists/definition-of-done-checklist.md`       | Not Started | Must support ready-for-review, complete, release, or completion claim |

Gate status values:

```text
Not Started
Pass
Pass with risks
Blocked
Ready with Accepted Risk
Partial
```

---

## Learning Support Progress

Use this section when the project also uses DES learning skills.

| Learning Artifact                | Skill                        | Status      | Notes |
| :------------------------------- | :--------------------------- | :---------- | :---- |
| `des-learning-path.md`           | `des-learning-path`          | Not Started |       |
| `des-learning-status.md`         | `des-learning-status-update` | Not Started |       |
| `des-learning-review.md`         | `des-learning-review`        | Not Started |       |
| `*-learning-notes.md`            | `des-explain-artifact`       | Not Started |       |
| `*-artifact-quiz.md`             | `des-artifact-quiz`          | Not Started |       |
| `*-learning-gap-report.md`       | `des-gap-teacher`            | Not Started |       |
| `*-socratic-coaching-session.md` | `des-socratic-coach`         | Not Started |       |

---

## Artifact Drift Log

Use this section when evidence, code, or review shows that an earlier artifact is no longer accurate.

| Date | Affected Phase | Artifact | Drift Detected | Evidence | Required Action | Status                             |
| :--- | :------------- | :------- | :------------- | :------- | :-------------- | :--------------------------------- |
|      |                |          |                |          |                 | Open / Fixed / Accepted / Deferred |

---

## Next Session Prompt

Copy and paste this at the start of the next agent session:

```text
Continue this DES-SKILL project.

Read these files in order:
1. _des/DES-WORKFLOW.md
2. _des-output/implementation-artifacts/des-workflow-status.md
3. docs/phase-execution-contract.md
4. templates/phase/phase-execution-contract.config.toml
5. _des-output/planning-artifacts/
6. _des-output/phase-support-plans/
7. _des-output/evidence/
8. _des-output/phase-handoffs/

Then:
- Identify the current phase from des-workflow-status.md.
- Check Phase Execution Status, not only Phase Artifact Progress.
- Do not start the next phase unless the previous phase has Done Gate = Pass or Pass with risks.
- Do not start the next phase unless the previous handoff is Ready or Ready with Risks.
- If the current phase is Draft, create or update its support plan.
- If evidence is missing, recommend the required support skill.
- If evidence exists but the artifact is not revised, revise the artifact before Done Gate.
- If Done Gate has not run, run the Done Gate checklist.
- If Done Gate passes, create or update the phase handoff.
- Update des-workflow-status.md after every meaningful change.
```

---

## Notes for Agents

* Phase Artifact Progress shows whether a document exists.
* Phase Execution Status shows whether the phase is actually complete.
* Do not treat `Done` in Phase Artifact Progress as enough to start the next phase.
* Always check support plan, evidence pack, artifact revision, Done Gate, and handoff.
* Carry forward risks instead of hiding them.
* Use `des-correct-course` when evidence contradicts an approved artifact.
