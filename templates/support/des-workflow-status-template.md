# DES Workflow Status

```yaml
workflow_status:
  project: ""
  domain: ""
  owner: ""
  last_updated: ""
  current_state: "Unknown"
  overall_status: "Draft"
  next_route:
    skill: ""
    reason: ""
  blockers: []
  risks: []
```

## 1. Workflow Status Summary

```text
<short summary of current state, completed artifacts, active work, blockers, and next route>
```

## 2. Project Metadata

| Field        | Value |
| ------------ | ----- |
| Project      |       |
| Domain       |       |
| Owner        |       |
| Repository   |       |
| Environment  |       |
| Last Updated |       |

## 3. Current Workflow State

| Field                  | Value                                                                                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Current State          | Main Lifecycle Design / Epic Planning / Story Planning / Sprint Planning / Story Readiness / Task Breakdown / Implementation Planning / Implementation In Progress / Code Review / Release Readiness / Retrospective / Correct Course / Ready for Next Sprint / Closed / Blocked / Unknown |
| Overall Status         | Not Started / Draft / In Progress / Done / Done with Risks / Blocked / Deferred / Missing / Unknown / Not Applicable                                                                                                                                                                       |
| Active Route           |                                                                                                                                                                                                                                                                                            |
| Next Recommended Skill |                                                                                                                                                                                                                                                                                            |
| Reason                 |                                                                                                                                                                                                                                                                                            |

## 4. Main DES Phase Status

| Phase                            | Artifact                                          | Status                                                   | Notes |
| -------------------------------- | ------------------------------------------------- | -------------------------------------------------------- | ----- |
| 01 Business Discovery            | 01-business-discovery-brief.md                    | Not Started / Draft / Done / Blocked / Missing / Unknown |       |
| 02 Business Questions            | 02-business-question-catalog.md                   |                                                          |       |
| 03 Requirements and KPIs         | 03-requirements-and-kpi-catalog.md                |                                                          |       |
| 04 Data Product Definition       | 04-data-product-specification.md                  |                                                          |       |
| 05 Data Source Assessment        | 05-data-source-inventory.md                       |                                                          |       |
| 06 Domain Modeling               | 06-conceptual-domain-model.md                     |                                                          |       |
| 07 Architecture Design           | 07-architecture-decision-record.md                |                                                          |       |
| 08 Ingestion Design              | 08-ingestion-specification.md                     |                                                          |       |
| 09 Bronze Layer Design           | 09-bronze-layer-specification.md                  |                                                          |       |
| 10 Silver Layer Design           | 10-silver-layer-specification.md                  |                                                          |       |
| 11 Gold Layer Design             | 11-gold-layer-specification.md                    |                                                          |       |
| 12 Data Contracts                | 12-data-contract-specification.md                 |                                                          |       |
| 13 Transformation Design         | 13-transformation-specification.md                |                                                          |       |
| 14 Data Quality Design           | 14-data-quality-specification.md                  |                                                          |       |
| 15 Orchestration Observability   | 15-orchestration-observability-specification.md   |                                                          |       |
| 16 Semantic Model Design         | 16-semantic-model-specification.md                |                                                          |       |
| 17 Serving Layer Design          | 17-serving-layer-specification.md                 |                                                          |       |
| 18 Lineage Metadata Design       | 18-lineage-metadata-specification.md              |                                                          |       |
| 19 Governance Security Design    | 19-governance-security-specification.md           |                                                          |       |
| 20 Cost Performance Optimization | 20-cost-performance-optimization-specification.md |                                                          |       |
| 21 CI/CD Testing                 | 21-cicd-testing-specification.md                  |                                                          |       |
| 22 Project Evaluation            | 22-project-evaluation-report.md                   |                                                          |       |

## 5. Support Skill Status

| Support Skill                | Artifact                             | Status                                                   | Notes |
| ---------------------------- | ------------------------------------ | -------------------------------------------------------- | ----- |
| des-create-epic              | support/epic-catalog.md              | Not Started / Draft / Done / Blocked / Missing / Unknown |       |
| des-create-story             | support/story-catalog.md             |                                                          |       |
| des-sprint-planning          | support/sprint-plan.md               |                                                          |       |
| des-story-readiness-check    | support/story-readiness-report.md    |                                                          |       |
| des-dev-task-breakdown       | support/dev-task-breakdown.md        |                                                          |       |
| des-implementation-plan      | support/implementation-plan.md       |                                                          |       |
| des-code-review              | support/code-review-report.md        |                                                          |       |
| des-release-readiness-review | support/release-readiness-report.md  |                                                          |       |
| des-retrospective            | support/retrospective-report.md      |                                                          |       |
| des-correct-course           | support/correct-course-plan.md       |                                                          |       |
| des-workflow-status-update   | sprint-status/des-workflow-status.md |                                                          |       |

## 6. Epic Status

| Epic ID | Name | Status | Notes |
| ------- | ---- | ------ | ----- |
|         |      |        |       |

## 7. Story Status

| Story ID | Epic ID | Title | Status                                                            | Notes |
| -------- | ------- | ----- | ----------------------------------------------------------------- | ----- |
|          |         |       | Draft / Ready / In Progress / Done / Blocked / Deferred / Unknown |       |

## 8. Sprint Status

| Field                | Value                                          |
| -------------------- | ---------------------------------------------- |
| Sprint Name / Number |                                                |
| Sprint Goal          |                                                |
| Sprint Status        | Draft / In Progress / Done / Blocked / Unknown |
| Selected Stories     |                                                |
| Blocked Stories      |                                                |
| Deferred Stories     |                                                |

## 9. Readiness Status

| Story ID | Readiness Status                                                                        | Required Action |
| -------- | --------------------------------------------------------------------------------------- | --------------- |
|          | Ready for Task Breakdown / Needs Refinement / Blocked / Deferred / Route Back / Unknown |                 |

## 10. Implementation Status

| Story / Task | Status                                               | Notes |
| ------------ | ---------------------------------------------------- | ----- |
|              | Not Started / In Progress / Done / Blocked / Unknown |       |

## 11. Review Status

| Review      | Decision                                                                                          | Notes |
| ----------- | ------------------------------------------------------------------------------------------------- | ----- |
| Code Review | Approved / Approved with minor comments / Changes requested / Blocked / Needs more evidence / N/A |       |

## 12. Release Status

| Field             | Value                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Release Candidate |                                                                                                                                            |
| Release Target    | Demo / Internal Review / Dev / Test / Staging / Production / Handoff / N/A                                                                 |
| Release Decision  | Ready for Release / Ready for Demo / Ready for Internal Review / Ready with Risks / Changes Required / Blocked / Needs More Evidence / N/A |
| Required Actions  |                                                                                                                                            |

## 13. Correct Course Status

| Field            | Value                                                |
| ---------------- | ---------------------------------------------------- |
| Active Issue     |                                                      |
| Severity         | Blocker / Major / Minor / Suggestion / Unknown / N/A |
| Correction Route |                                                      |
| Required Actions |                                                      |
| Status           | Open / In Progress / Resolved / Accepted Risk / N/A  |

## 14. Open Blockers

| ID      | Blocker | Severity                          | Owner | Required Action |
| ------- | ------- | --------------------------------- | ----- | --------------- |
| BLK-001 |         | Blocker / Major / Minor / Unknown |       |                 |

## 15. Open Risks

| ID       | Risk | Severity                      | Mitigation |
| -------- | ---- | ----------------------------- | ---------- |
| RISK-001 |      | High / Medium / Low / Unknown |            |

## 16. Required Next Actions

| Order | Action | Route                                                      |
| ----- | ------ | ---------------------------------------------------------- |
| 1     |        | DES phase / support skill / implementation / user evidence |

## 17. Routing Decision

Next route:

```text
<skill or phase>
```

Reason:

```text
<why this is the next correct step>
```

## 18. Status History

| Date | Change | Source                     | Notes |
| ---- | ------ | -------------------------- | ----- |
|      |        | des-workflow-status-update |       |
