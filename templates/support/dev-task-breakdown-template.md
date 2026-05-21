# Dev Task Breakdown

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-dev-task-breakdown |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Source Story |  |
| Source Artifacts | support/story-catalog.md, support/story-readiness-report.md |
| Next Support Skill | des-implementation-plan |

## 1. Dev Task Breakdown Summary

```text
<short summary of selected story, number of tasks, key dependencies, blockers, and implementation readiness>
```

## 2. Task Breakdown Scope

In scope:

*
*
*

Out of scope:

* new story creation
* sprint planning
* production code generation inside this artifact
* deployment execution
* code review

## 3. Selected Story Context

| Field                | Value                    |
| -------------------- | ------------------------ |
| Story ID             |                          |
| Story Title          |                          |
| Epic ID              |                          |
| Story Type           |                          |
| Priority             | P1 / P2 / P3             |
| Readiness Status     | Ready for Task Breakdown |
| Source DES Artifacts |                          |

Story goal:

```text
<story goal>
```

Acceptance criteria:

*
*
*

Test expectations:

*
*
*

## 4. Implementation Context

| Area                             | Notes |
| -------------------------------- | ----- |
| Target layer/component           |       |
| Input dataset/source/config      |       |
| Output dataset/artifact          |       |
| Dependency                       |       |
| Quality/contract expectations    |       |
| Governance/security expectations |       |
| CI/CD expectation                |       |

## 5. Affected Areas

| Area                | Affected?      | Notes |
| ------------------- | -------------- | ----- |
| config              | Yes / No / TBD |       |
| source code         | Yes / No / TBD |       |
| ingestion pipeline  | Yes / No / TBD |       |
| transformation      | Yes / No / TBD |       |
| dataset/schema      | Yes / No / TBD |       |
| quality rules       | Yes / No / TBD |       |
| contracts           | Yes / No / TBD |       |
| orchestration       | Yes / No / TBD |       |
| metadata/docs       | Yes / No / TBD |       |
| tests               | Yes / No / TBD |       |
| CI/CD               | Yes / No / TBD |       |
| security/governance | Yes / No / TBD |       |

## 6. Ordered Task List

| Order | Task ID      | Task Name | Type                                                                                  | Status |
| ----- | ------------ | --------- | ------------------------------------------------------------------------------------- | ------ |
| 1     | TASK-XXX-001 |           | setup / source / ingestion / dataset / transformation / quality / test / docs / CI/CD | Ready  |
| 2     | TASK-XXX-002 |           |                                                                                       | Ready  |

## 7. Task Details

### TASK-XXX-001 — `<Task Name>`

| Field               | Value                                            |
| ------------------- | ------------------------------------------------ |
| Type                |                                                  |
| Status              | Ready / Blocked / Deferred / Needs Clarification |
| Purpose             |                                                  |
| Expected Output     |                                                  |
| Reference Artifacts |                                                  |
| Dependencies        |                                                  |

Validation / check:

```text
<how to know this task is complete>
```

Notes:

```text
<any implementation notes without writing full code>
```

---

## 8. Test Task List

| Task ID | Test Type                                                        | Purpose | Expected Check |
| ------- | ---------------------------------------------------------------- | ------- | -------------- |
|         | unit / integration / schema / contract / DQ / smoke / regression |         |                |

## 9. Quality Contract and Governance Tasks

| Control Area     | Task | Required?      | Notes |
| ---------------- | ---- | -------------- | ----- |
| Data quality     |      | Yes / No / N/A |       |
| Data contract    |      | Yes / No / N/A |       |
| Metadata/lineage |      | Yes / No / N/A |       |
| Security/access  |      | Yes / No / N/A |       |
| Audit/logging    |      | Yes / No / N/A |       |

## 10. Dependency and Sequencing Notes

```text
<dependency order and sequencing notes>
```

Example:

```text
TASK-ING-001
  → TASK-ING-002
  → TASK-ING-003
  → TASK-ING-004
```

## 11. Task Acceptance Checks

| Acceptance Criterion | Covered By Task(s) |
| -------------------- | ------------------ |
|                      |                    |

## 12. Implementation Risks

| Risk | Impact | Mitigation | Owner |
| ---- | ------ | ---------- | ----- |
|      |        |            |       |

## 13. Coding Agent Handoff Prompt

```text
Implement story <STORY-ID>: <Story Title>.

Use the following references:
- <DES artifact paths>
- <Story Catalog path>
- <Story Readiness Report path>

Follow the ordered tasks:
1. <TASK-ID> — <Task Name>
2. <TASK-ID> — <Task Name>

Constraints:
- Do not hardcode secrets.
- Do not exceed story scope.
- Preserve acceptance criteria.
- Add/adjust required tests.
- Respect quality, contract, governance, and CI/CD expectations.
- Update docs/metadata/status after implementation.

Stop and ask for clarification if:
- required source/config is missing;
- acceptance criteria conflict with implementation;
- sensitive data handling is unclear;
- tests cannot be run or defined.
```

## 14. Ready for Implementation Decision

Decision:

```text
Ready for implementation / Ready with risks / Blocked / Needs refinement
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
des-implementation-plan
```

Reason:

```text
The story has been decomposed into development tasks. The next step is to sequence implementation across one or more stories or hand off the task plan to a coding agent.
```
