# Sprint Plan

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-sprint-planning |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Source Artifacts | support/epic-catalog.md, support/story-catalog.md |
| Next Support Skill | des-story-readiness-check |

## 1. Sprint Plan Summary

```text
<short summary of sprint goal, selected stories, capacity, dependencies, blockers, and readiness needs>
```

## 2. Sprint Planning Scope

In scope:

*
*
*

Out of scope:

* new story creation
* detailed task breakdown
* implementation code
* test implementation
* deployment execution
* code review
* release approval

## 3. Sprint Goal

```text
<one clear sprint goal>
```

## 4. Planning Inputs

| Input           | Status                        | Notes |
| --------------- | ----------------------------- | ----- |
| Epic Catalog    | Available / Missing / Draft   |       |
| Story Catalog   | Available / Missing / Draft   |       |
| Workflow Status | Available / Missing / Draft   |       |
| DES artifacts   | Available / Partial / Missing |       |
| Sprint capacity | Known / Assumed / Unknown     |       |
| Sprint duration | Known / Assumed / Unknown     |       |

## 5. Sprint Capacity and Assumptions

| Area                    | Value                                                        |
| ----------------------- | ------------------------------------------------------------ |
| Sprint duration         |                                                              |
| Capacity model          | story count / T-shirt / points / developer-days / agent-days |
| Team/agent availability |                                                              |
| Planning assumption     |                                                              |

## 6. Candidate Story Pool

| Story ID | Title | Epic | Priority     | Current Status                     | Candidate? | Notes |
| -------- | ----- | ---- | ------------ | ---------------------------------- | ---------- | ----- |
|          |       |      | P1 / P2 / P3 | Draft / Ready / Blocked / Deferred | Yes / No   |       |

## 7. Story Selection Strategy

| Factor                  | Decision |
| ----------------------- | -------- |
| Priority                |          |
| Dependency order        |          |
| Readiness               |          |
| Risk                    |          |
| Capacity                |          |
| Quality/CI/CD inclusion |          |

## 8. Selected Sprint Stories

| Story ID | Title | Epic | Reason Selected                                | Sprint Status                    |
| -------- | ----- | ---- | ---------------------------------------------- | -------------------------------- |
|          |       |      | priority / dependency / unblock / risk / value | Selected / Needs readiness check |

## 9. Stretch Stories

| Story ID | Title | Reason Stretch                              |
| -------- | ----- | ------------------------------------------- |
|          |       | extra capacity / optional / dependency-risk |

## 10. Deferred Stories

| Story ID | Title | Reason Deferred                                              |
| -------- | ----- | ------------------------------------------------------------ |
|          |       | dependency / capacity / blocker / lower priority / not ready |

## 11. Blocked Stories

| Story ID | Title | Blocker | Required Action |
| -------- | ----- | ------- | --------------- |
|          |       |         |                 |

## 12. Dependency Order

```text
<story dependency order>
```

Example:

```text
STORY-FOUND-001
  → STORY-CICD-001
  → STORY-ING-001
  → STORY-BRZ-001
```

## 13. Sprint Backlog

| Order | Story ID | Story Title | Sprint Role                   | Notes |
| ----- | -------- | ----------- | ----------------------------- | ----- |
| 1     |          |             | committed / stretch / unblock |       |
| 2     |          |             |                               |       |

## 14. Readiness Check Plan

| Story ID | Needs Readiness Check? | Reason |
| -------- | ---------------------- | ------ |
|          | Yes / No               |        |

Recommended next step:

```text
Run des-story-readiness-check for selected stories before task breakdown.
```

## 15. Sprint Acceptance Criteria

The sprint is successful when:

*
*
*

## 16. Definition of Ready

A story can enter implementation when:

* it maps to an epic;
* it maps to DES artifacts;
* acceptance criteria are clear;
* test expectations are clear;
* dependencies are resolved or explicitly handled;
* quality/security implications are known;
* required input artifacts are available;
* story readiness check passes or risk is accepted.

## 17. Definition of Done

A sprint story is Done when:

* implementation matches story scope;
* acceptance criteria pass;
* required tests pass;
* quality/security expectations are satisfied;
* documentation or metadata is updated;
* CI/CD checks pass where applicable;
* review is completed;
* story status is updated.

## 18. Risks and Mitigations

| Risk | Impact | Mitigation | Owner |
| ---- | ------ | ---------- | ----- |
|      |        |            |       |

## 19. Execution Guidance

Suggested execution flow:

```text
1. Run readiness check for selected stories.
2. Break ready stories into dev tasks.
3. Implement dependency-unblocking stories first.
4. Run tests and quality checks early.
5. Keep blocked/stretch stories separate.
6. Update workflow status after story completion.
```

## 20. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 21. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                          |
| ------------- | -------------- | ----- | -------------------------------------------------- |
|               |                |       | des-story-readiness-check / des-dev-task-breakdown |

## 22. Next Support Skill Recommendation

Recommended next support skill:

```text
des-story-readiness-check
```

Reason:

```text
The Sprint Plan selects candidate stories. The next step is to validate whether selected stories are ready for implementation before breaking them into development tasks.
```
