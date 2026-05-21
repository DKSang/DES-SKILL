# Code Review Report

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-code-review |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Reviewed Story / PR |  |
| Source Artifacts | support/story-catalog.md, support/dev-task-breakdown.md, support/implementation-plan.md |
| Next Support Skill | des-data-quality-review / des-release-readiness-review |

## 1. Code Review Summary

```text
<short summary of reviewed implementation, decision, blockers, major findings, and next action>
```

## 2. Review Scope

In scope:

*
*
*

Out of scope:

* new story creation
* sprint planning
* task breakdown
* rewriting implementation
* production release approval

## 3. Reviewed Story and Tasks

| Story / Task | Title | Status                                   |
| ------------ | ----- | ---------------------------------------- |
| STORY-...    |       | Reviewed / Partial / Missing             |
| TASK-...     |       | Completed / Partial / Missing / Deferred |

## 4. Implementation Evidence Reviewed

| Evidence                     | Available? | Notes |
| ---------------------------- | ---------- | ----- |
| changed files                | Yes / No   |       |
| code diff                    | Yes / No   |       |
| PR summary                   | Yes / No   |       |
| test files                   | Yes / No   |       |
| test results                 | Yes / No   |       |
| implementation summary       | Yes / No   |       |
| docs/metadata/status updates | Yes / No   |       |

## 5. Acceptance Criteria Review

| Acceptance Criterion | Evidence | Result                          |
| -------------------- | -------- | ------------------------------- |
|                      |          | Pass / Fail / Partial / Unknown |

## 6. Task Completion Review

| Task ID | Expected Output | Evidence | Result                              |
| ------- | --------------- | -------- | ----------------------------------- |
|         |                 |          | Done / Partial / Missing / Deferred |

## 7. Architecture and Design Alignment Review

| Area                       | Review Result               | Notes |
| -------------------------- | --------------------------- | ----- |
| architecture pattern       | Pass / Fail / Partial / N/A |       |
| layer boundary             | Pass / Fail / Partial / N/A |       |
| environment/config pattern | Pass / Fail / Partial / N/A |       |
| implementation scope       | Pass / Fail / Partial / N/A |       |

## 8. Transformation Logic Review

| Area                          | Result                      | Notes |
| ----------------------------- | --------------------------- | ----- |
| input/output mapping          | Pass / Fail / Partial / N/A |       |
| grain                         | Pass / Fail / Partial / N/A |       |
| key/identity handling         | Pass / Fail / Partial / N/A |       |
| joins/relationships           | Pass / Fail / Partial / N/A |       |
| metric formula                | Pass / Fail / Partial / N/A |       |
| incremental/backfill behavior | Pass / Fail / Partial / N/A |       |

## 9. Data Contract Review

| Contract Area        | Result                      | Notes |
| -------------------- | --------------------------- | ----- |
| schema compatibility | Pass / Fail / Partial / N/A |       |
| required fields      | Pass / Fail / Partial / N/A |       |
| grain/uniqueness     | Pass / Fail / Partial / N/A |       |
| freshness/SLA        | Pass / Fail / Partial / N/A |       |
| breaking change      | Pass / Fail / Partial / N/A |       |

## 10. Data Quality Review

| Quality Area     | Result                      | Notes |
| ---------------- | --------------------------- | ----- |
| completeness     | Pass / Fail / Partial / N/A |       |
| uniqueness       | Pass / Fail / Partial / N/A |       |
| validity/domain  | Pass / Fail / Partial / N/A |       |
| reconciliation   | Pass / Fail / Partial / N/A |       |
| freshness        | Pass / Fail / Partial / N/A |       |
| failure handling | Pass / Fail / Partial / N/A |       |

## 11. Test Coverage Review

| Test Type    | Expected?      | Evidence | Result                          |
| ------------ | -------------- | -------- | ------------------------------- |
| unit         | Yes / No / N/A |          | Pass / Fail / Missing / Unknown |
| integration  | Yes / No / N/A |          |                                 |
| schema       | Yes / No / N/A |          |                                 |
| contract     | Yes / No / N/A |          |                                 |
| data quality | Yes / No / N/A |          |                                 |
| smoke        | Yes / No / N/A |          |                                 |
| CI/CD        | Yes / No / N/A |          |                                 |

## 12. Orchestration and Observability Review

| Area                 | Result                      | Notes |
| -------------------- | --------------------------- | ----- |
| workflow dependency  | Pass / Fail / Partial / N/A |       |
| retry/timeout        | Pass / Fail / Partial / N/A |       |
| logging/run evidence | Pass / Fail / Partial / N/A |       |
| alerting             | Pass / Fail / Partial / N/A |       |
| publish gate         | Pass / Fail / Partial / N/A |       |

## 13. Governance and Security Review

| Area                              | Result                      | Notes |
| --------------------------------- | --------------------------- | ----- |
| no hardcoded secrets              | Pass / Fail / Unknown       |       |
| access control                    | Pass / Fail / Partial / N/A |       |
| sensitive field handling          | Pass / Fail / Partial / N/A |       |
| masking/restriction               | Pass / Fail / Partial / N/A |       |
| audit/logging                     | Pass / Fail / Partial / N/A |       |
| external sharing/API/agent access | Pass / Fail / Partial / N/A |       |

## 14. Cost and Performance Review

| Area                                 | Result                        | Notes |
| ------------------------------------ | ----------------------------- | ----- |
| unnecessary full refresh             | Pass / Fail / Unknown / N/A   |       |
| partitioning/file strategy respected | Pass / Fail / Partial / N/A   |       |
| expensive operation risk             | Low / Medium / High / Unknown |       |
| caching/materialization risk         | Low / Medium / High / N/A     |       |
| cost/performance monitoring          | Pass / Fail / Partial / N/A   |       |

## 15. Documentation Metadata and Status Review

| Area                     | Result                      | Notes |
| ------------------------ | --------------------------- | ----- |
| README/docs updated      | Pass / Fail / N/A           |       |
| metadata/catalog updated | Pass / Fail / Partial / N/A |       |
| lineage updated          | Pass / Fail / Partial / N/A |       |
| story/status updated     | Pass / Fail / Partial / N/A |       |
| known issues documented  | Pass / Fail / Partial / N/A |       |

## 16. Findings

| ID    | Severity                                        | Finding | Evidence | Recommendation |
| ----- | ----------------------------------------------- | ------- | -------- | -------------- |
| F-001 | Blocker / Major / Minor / Suggestion / Question |         |          |                |

## 17. Required Changes

| Change | Reason | Required Before               |
| ------ | ------ | ----------------------------- |
|        |        | merge / release / next review |

## 18. Optional Improvements

| Improvement | Value |
| ----------- | ----- |
|             |       |

## 19. Merge Readiness Decision

Decision:

```text
Approved / Approved with minor comments / Changes requested / Blocked / Needs more evidence
```

Reason:

```text
<reason>
```

## 20. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 21. Open Questions

| Open Question | Why It Matters | Owner | Needed By                     |
| ------------- | -------------- | ----- | ----------------------------- |
|               |                |       | merge / release / next review |

## 22. Next Support Skill Recommendation

Recommended next support skill:

```text
des-data-quality-review / des-release-readiness-review
```

Reason:

```text
<why this next step is recommended>
```
