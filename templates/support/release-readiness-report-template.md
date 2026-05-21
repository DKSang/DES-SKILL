# Release Readiness Report

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-release-readiness-review |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Release Candidate |  |
| Release Target | Demo / Internal Review / Dev / Test / Staging / Production / Handoff |
| Source Artifacts | support/sprint-plan.md, support/code-review-report.md |
| Next Support Skill | des-retrospective |

## 1. Release Readiness Summary

```text
<short summary of release candidate, target, decision, blockers, missing evidence, and required actions>
```

## 2. Release Scope

In scope:

*
*
*

Out of scope:

* implementation fixes
* new story creation
* production deployment execution
* code modification
* sprint replanning

## 3. Release Candidate Inventory

| Item | Type                                                                           | Included? | Notes |
| ---- | ------------------------------------------------------------------------------ | --------- | ----- |
|      | story / epic / sprint increment / data product / pipeline / semantic / serving | Yes / No  |       |

## 4. Story Completion Review

| Story ID | Status                             | Evidence | Result                          |
| -------- | ---------------------------------- | -------- | ------------------------------- |
|          | Done / Partial / Blocked / Unknown |          | Pass / Fail / Partial / Unknown |

## 5. Acceptance Criteria Review

| Story ID | Acceptance Criteria Status              | Notes |
| -------- | --------------------------------------- | ----- |
|          | Met / Partially met / Not met / Unknown |       |

## 6. Code Review Status

| Review Item                 | Result                                                                                      | Notes |
| --------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| Code review decision        | Approved / Approved with minor comments / Changes requested / Blocked / Needs more evidence |       |
| Blocker findings            | None / Exists                                                                               |       |
| Major findings              | None / Exists                                                                               |       |
| Required changes completed? | Yes / No / Unknown                                                                          |       |

## 7. Test Evidence Review

| Test Type    | Required?      | Evidence | Result                          |
| ------------ | -------------- | -------- | ------------------------------- |
| unit         | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| integration  | Yes / No / N/A |          |                                 |
| schema       | Yes / No / N/A |          |                                 |
| contract     | Yes / No / N/A |          |                                 |
| data quality | Yes / No / N/A |          |                                 |
| smoke        | Yes / No / N/A |          |                                 |
| CI/CD        | Yes / No / N/A |          |                                 |

## 8. Data Quality Evidence Review

| Quality Gate     | Required?      | Evidence | Result                          |
| ---------------- | -------------- | -------- | ------------------------------- |
| freshness        | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| completeness     | Yes / No / N/A |          |                                 |
| uniqueness/grain | Yes / No / N/A |          |                                 |
| validity/domain  | Yes / No / N/A |          |                                 |
| reconciliation   | Yes / No / N/A |          |                                 |

## 9. Data Contract Evidence Review

| Contract Area         | Required?      | Evidence | Result                          |
| --------------------- | -------------- | -------- | ------------------------------- |
| schema compatibility  | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| required fields       | Yes / No / N/A |          |                                 |
| grain                 | Yes / No / N/A |          |                                 |
| freshness/SLA         | Yes / No / N/A |          |                                 |
| breaking change check | Yes / No / N/A |          |                                 |

## 10. CI CD Gate Review

| Gate              | Required?      | Evidence | Result                          |
| ----------------- | -------------- | -------- | ------------------------------- |
| PR approval       | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| static validation | Yes / No / N/A |          |                                 |
| test gate         | Yes / No / N/A |          |                                 |
| secret scan       | Yes / No / N/A |          |                                 |
| release evidence  | Yes / No / N/A |          |                                 |

## 11. Governance and Security Review

| Area                                | Required?      | Evidence | Result                          |
| ----------------------------------- | -------------- | -------- | ------------------------------- |
| no hardcoded secrets                | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| sensitive field handling            | Yes / No / N/A |          |                                 |
| access control                      | Yes / No / N/A |          |                                 |
| masking/restriction                 | Yes / No / N/A |          |                                 |
| external/API/AI-agent access review | Yes / No / N/A |          |                                 |
| audit/logging                       | Yes / No / N/A |          |                                 |

## 12. Orchestration and Observability Review

| Area                     | Required?      | Evidence | Result                          |
| ------------------------ | -------------- | -------- | ------------------------------- |
| workflow run             | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| retry/failure behavior   | Yes / No / N/A |          |                                 |
| alerting                 | Yes / No / N/A |          |                                 |
| run evidence             | Yes / No / N/A |          |                                 |
| freshness/SLA monitoring | Yes / No / N/A |          |                                 |

## 13. Cost and Performance Risk Review

| Area              | Risk                          | Notes |
| ----------------- | ----------------------------- | ----- |
| runtime           | Low / Medium / High / Unknown |       |
| query performance | Low / Medium / High / Unknown |       |
| storage growth    | Low / Medium / High / Unknown |       |
| compute/capacity  | Low / Medium / High / Unknown |       |
| cost spike        | Low / Medium / High / Unknown |       |

## 14. Documentation Metadata and Status Review

| Item                     | Required?      | Result                          |
| ------------------------ | -------------- | ------------------------------- |
| README/docs updated      | Yes / No / N/A | Pass / Fail / Missing / Unknown |
| metadata/catalog updated | Yes / No / N/A |                                 |
| lineage/status updated   | Yes / No / N/A |                                 |
| release notes created    | Yes / No / N/A |                                 |
| known issues documented  | Yes / No / N/A |                                 |

## 15. Rollback and Recovery Review

| Area            | Evidence | Result                          |
| --------------- | -------- | ------------------------------- |
| rollback path   |          | Ready / Missing / Unknown / N/A |
| fallback output |          |                                 |
| recovery owner  |          |                                 |
| abort condition |          |                                 |

## 16. Release Risks and Blockers

| ID    | Severity                | Risk / Blocker | Required Action |
| ----- | ----------------------- | -------------- | --------------- |
| R-001 | Blocker / Major / Minor |                |                 |

## 17. Required Actions

| Action | Owner | Required Before                            |
| ------ | ----- | ------------------------------------------ |
|        |       | release / demo / internal review / handoff |

## 18. Release Decision

Decision:

```text
Ready for Release / Ready for Demo / Ready for Internal Review / Ready with Risks / Changes Required / Blocked / Needs More Evidence
```

Reason:

```text
<reason>
```

## 19. Handoff Notes

```text
<what should be communicated to stakeholders/developers/release owner>
```

## 20. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 21. Open Questions

| Open Question | Why It Matters | Owner | Needed By                             |
| ------------- | -------------- | ----- | ------------------------------------- |
|               |                |       | release / retrospective / next sprint |

## 22. Next Support Skill Recommendation

Recommended next support skill:

```text
des-retrospective
```

Reason:

```text
After release readiness is reviewed, the next step is to capture lessons learned, blockers, process improvements, and next-sprint recommendations.
```
