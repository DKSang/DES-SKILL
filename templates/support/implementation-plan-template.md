# Implementation Plan

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-implementation-plan |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Source Artifacts | support/dev-task-breakdown.md |
| Next Support Skill | des-code-review |

## 1. Implementation Plan Summary

```text
<short summary of scope, selected stories, execution strategy, dependencies, risks, and readiness decision>
```

## 2. Implementation Scope

In scope:

*
*
*

Out of scope:

* new story creation
* sprint replanning
* code review
* production deployment execution
* claiming implementation completion

## 3. Selected Stories and Tasks

| Story ID | Story Title | Included Tasks | Status                                           |
| -------- | ----------- | -------------- | ------------------------------------------------ |
|          |             |                | Ready / Blocked / Deferred / Needs Clarification |

## 4. Execution Strategy

| Strategy            | Decision / Notes |
| ------------------- | ---------------- |
| Sequential          |                  |
| Checkpoint-driven   |                  |
| Test-first          |                  |
| Foundation-first    |                  |
| Thin vertical slice |                  |
| Layer-first         |                  |
| Story-by-story      |                  |
| Risk-first          |                  |

## 5. Dependency Sequence

```text
<ordered dependency chain>
```

Example:

```text
TASK-FOUND-001
  → TASK-FOUND-002
  → TASK-CICD-001
  → TASK-ING-001
  → TASK-BRZ-001
```

## 6. Parallelization Opportunities

| Work Item | Can Run In Parallel? | Condition |
| --------- | -------------------- | --------- |
|           | Yes / No / Maybe     |           |

## 7. Implementation Phases

| Phase | Goal                 | Tasks |
| ----- | -------------------- | ----- |
| 1     | Setup / prerequisite |       |
| 2     | Core implementation  |       |
| 3     | Validation and tests |       |
| 4     | Docs/status/update   |       |

## 8. Checkpoint Plan

| Checkpoint                     | When               | Evidence |
| ------------------------------ | ------------------ | -------- |
| Setup checkpoint               | after setup tasks  |          |
| Core implementation checkpoint | after core tasks   |          |
| Test checkpoint                | after tests        |          |
| Quality/security checkpoint    | before Done        |          |
| Handoff checkpoint             | before code review |          |

## 9. Validation and Test Execution Order

| Order | Test / Validation        | When                       |
| ----- | ------------------------ | -------------------------- |
| 1     | static/config validation | early                      |
| 2     | unit/schema test         | after relevant task        |
| 3     | integration/smoke test   | after story implementation |
| 4     | quality/contract test    | before output publish      |
| 5     | CI/CD validation         | before merge/release       |

## 10. Quality Contract and Security Gate Timing

| Gate                | Applies To | Timing                          |
| ------------------- | ---------- | ------------------------------- |
| Data contract       |            | before publish / before release |
| Data quality        |            | before publish / before Done    |
| Security/governance |            | before serving/export/API       |
| Secret scan         |            | before merge                    |
| Metadata/lineage    |            | before story Done               |

## 11. Documentation Metadata and Status Update Plan

| Update           | When | Owner |
| ---------------- | ---- | ----- |
| README / docs    |      |       |
| metadata/catalog |      |       |
| story status     |      |       |
| workflow status  |      |       |
| known issues     |      |       |

## 12. Rollback Abort and Escalation Conditions

Stop implementation if:

* required source/config is unavailable;
* acceptance criteria conflict with implementation;
* quality/contract/security rule cannot be satisfied;
* sensitive data handling is unclear;
* tests cannot be defined or run;
* implementation would exceed story scope;
* deployment/release is requested without release plan.

Escalate to:

| Condition                   | Route                                          |
| --------------------------- | ---------------------------------------------- |
| missing story detail        | des-create-story / des-story-readiness-check |
| missing task detail         | des-dev-task-breakdown                         |
| missing quality/contract    | DES Phase 12 / Phase 14                        |
| missing governance/security | DES Phase 19                                   |
| missing CI/CD               | DES Phase 21                                   |

## 13. Coding Agent Handoff Prompt

```text
Implement the selected story/task plan.

Use:
- _des-output/implementation-artifacts/dev-task-breakdown.md
- _des-output/implementation-artifacts/story-readiness-report.md
- _des-output/implementation-artifacts/sprint-plan.md
- relevant DES artifacts listed in the task breakdown

Implementation rules:
1. Follow the dependency sequence.
2. Do not exceed story scope.
3. Do not hardcode secrets.
4. Preserve acceptance criteria.
5. Implement tests/checks listed in the task breakdown.
6. Respect data quality, contract, governance, security, and CI/CD expectations.
7. Update docs/metadata/status as specified.
8. Stop if a blocker or conflicting requirement appears.

After implementation:
- run applicable validations/tests;
- summarize changed files;
- summarize checks run and results;
- list remaining risks;
- prepare for des-code-review.
```

## 14. Implementation Readiness Decision

Decision:

```text
Ready for Implementation / Ready with Risks / Blocked / Needs Clarification / Deferred
```

Reason:

```text
<reason>
```

## 15. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 16. Open Questions

| Open Question | Why It Matters | Owner | Needed By                    |
| ------------- | -------------- | ----- | ---------------------------- |
|               |                |       | implementation / code review |

## 17. Next Support Skill Recommendation

Recommended next support skill:

```text
des-code-review
```

Condition:

```text
Run this after implementation exists.
```

Reason:

```text
The next meaningful support step is to review implementation against story, task breakdown, DES artifacts, tests, quality, governance, and CI/CD expectations.
```
