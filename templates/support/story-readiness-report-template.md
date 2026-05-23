# Story Readiness Report

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-story-readiness-check |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Source Artifacts | support/story-catalog.md, support/sprint-plan.md |
| Next Support Skill | des-dev-task-breakdown |

## 1. Story Readiness Summary

```text
<short summary of stories reviewed, ready stories, blocked stories, missing context, and recommended next action>
```

## 2. Readiness Check Scope

In scope:

*
*
*

Out of scope:

* story creation
* sprint planning
* task breakdown
* implementation code
* code review

## 3. Readiness Criteria

| Criterion                       | Required for Ready? | Notes |
| ------------------------------- | ------------------- | ----- |
| Valid story ID                  | Yes                 |       |
| Epic mapping                    | Yes                 |       |
| DES artifact mapping            | Yes                 |       |
| Clear goal and benefit          | Yes                 |       |
| Included/excluded scope         | Yes                 |       |
| Acceptance criteria             | Yes                 |       |
| Test expectations               | Yes                 |       |
| Dependency known                | Yes                 |       |
| Quality expectation             | Yes or N/A          |       |
| Contract expectation            | Yes or N/A          |       |
| Governance/security expectation | Yes or N/A          |       |
| Story size reasonable           | Yes                 |       |
| Blockers resolved               | Yes                 |       |

## 4. Input Artifact Coverage

| Artifact                 | Available?                   | Used For                |
| ------------------------ | ---------------------------- | ----------------------- |
| support/story-catalog.md | Yes / No / Draft             | selected stories        |
| support/sprint-plan.md   | Yes / No / Draft             | sprint-selected stories |
| support/epic-catalog.md  | Yes / No / Draft             | epic mapping            |
| DES main artifacts       | Complete / Partial / Missing | readiness evidence      |

## 5. Selected Stories

| Story ID | Title | Epic | Priority     | Current Status                     |
| -------- | ----- | ---- | ------------ | ---------------------------------- |
|          |       |      | P1 / P2 / P3 | Draft / Ready / Blocked / Deferred |

## 6. Story Readiness Evaluation

### `<STORY-ID>` — `<Story Title>`

| Area                      | Result                                 | Notes |
| ------------------------- | -------------------------------------- | ----- |
| Epic mapping              | Pass / Fail / Unknown                  |       |
| DES artifact mapping      | Pass / Fail / Unknown                  |       |
| Goal and benefit          | Pass / Fail / Unknown                  |       |
| Scope clarity             | Pass / Fail / Unknown                  |       |
| Acceptance criteria       | Pass / Fail / Unknown                  |       |
| Test expectations         | Pass / Fail / Unknown                  |       |
| Data/input/output clarity | Pass / Fail / Unknown / N/A            |       |
| Quality expectation       | Pass / Fail / Unknown / N/A            |       |
| Contract expectation      | Pass / Fail / Unknown / N/A            |       |
| Governance/security       | Pass / Fail / Unknown / N/A            |       |
| Dependency readiness      | Pass / Fail / Unknown                  |       |
| Story size                | Good / Too broad / Too small / Unknown |       |
| Risk/blocker              | None / Low / Medium / High             |       |

Recommended readiness status:

```text
Ready for Task Breakdown / Needs Refinement / Blocked / Deferred / Route Back to DES Phase / Route Back to Support Skill
```

Required action:

```text
<what must happen next>
```

## 7. Missing Context Register

| Story ID | Missing Context | Owner / Source                   | Recommended Action |
| -------- | --------------- | -------------------------------- | ------------------ |
|          |                 | DES phase / support skill / user |                    |

## 8. Dependency and Blocker Register

| Story ID | Dependency / Blocker | Impact | Resolution |
| -------- | -------------------- | ------ | ---------- |
|          |                      |        |            |

## 9. Quality Contract and Governance Review

| Story ID | Quality / Contract / Governance Concern | Status                      |
| -------- | --------------------------------------- | --------------------------- |
|          |                                         | Pass / Risk / Blocked / N/A |

## 10. Test Readiness Review

| Story ID | Test Expectation | Status                       |
| -------- | ---------------- | ---------------------------- |
|          |                  | Ready / Missing / Risk / N/A |

## 11. Story Size and Clarity Review

| Story ID | Size Review                            | Recommendation |
| -------- | -------------------------------------- | -------------- |
|          | Good / Too broad / Too small / Unclear |                |

## 12. Recommended Story Status

| Story ID | Recommended Status                                                            | Reason |
| -------- | ----------------------------------------------------------------------------- | ------ |
|          | Ready for Task Breakdown / Needs Refinement / Blocked / Deferred / Route Back |        |

## 13. Required Refinements

| Story ID | Refinement Needed | Route                                 |
| -------- | ----------------- | ------------------------------------- |
|          |                   | des-create-story / DES phase / user |

## 14. Ready Story Handoff

Stories ready for `des-dev-task-breakdown`:

| Story ID | Title | Notes |
| -------- | ----- | ----- |
|          |       |       |

## 15. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 16. Open Questions

| Open Question | Why It Matters | Owner | Needed By                               |
| ------------- | -------------- | ----- | --------------------------------------- |
|               |                |       | des-dev-task-breakdown / implementation |

## 17. Next Support Skill Recommendation

Recommended next support skill:

```text
des-dev-task-breakdown
```

Condition:

```text
Only run this for stories marked Ready for Task Breakdown.
```

Reason:

```text
The selected stories have enough clarity and validation to be decomposed into implementation tasks.
```
