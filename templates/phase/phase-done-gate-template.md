# Phase {{PHASE_NUMBER}} Done Gate — {{PHASE_NAME}}

## 1. Purpose

This Done Gate determines whether Phase {{PHASE_NUMBER}} is complete enough to hand off safely to the next phase.

A phase is not Done just because its artifact exists.

A phase is Done only when:

```text
artifact exists
+ required support work is identified
+ evidence exists or is waived with reason
+ artifact is revised from evidence
+ handoff exists for the next phase
````

---

## 2. Done Gate Metadata

| Field                    | Value                                   |
| ------------------------ | --------------------------------------- |
| Phase Number             | {{PHASE_NUMBER}}                        |
| Phase Name               | {{PHASE_NAME}}                          |
| Phase Core Skill         | `{{PHASE_CORE_SKILL}}`                  |
| Phase Artifact           | `{{PHASE_ARTIFACT}}`                    |
| Support Plan             | `{{PHASE_SUPPORT_PLAN}}`                |
| Evidence Pack            | `{{PHASE_EVIDENCE_PACK}}`               |
| Artifact Revision Report | `{{ARTIFACT_REVISION_REPORT}}`          |
| Handoff File             | `{{PHASE_HANDOFF_FILE}}`                |
| Gate Date                | {{YYYY-MM-DD}}                          |
| Gate Reviewer            | {{OWNER_OR_AGENT}}                      |
| Gate Result              | Pass / Pass with risks / Fail / Blocked |

---

## 3. Required Inputs

| Input                    | Required? | Status                                     | Notes |
| ------------------------ | --------: | ------------------------------------------ | ----- |
| Phase artifact           |       Yes | Found / Missing / Partial                  |       |
| Phase support plan       |       Yes | Found / Missing / Partial                  |       |
| Evidence pack            |       Yes | Found / Missing / Partial / Waived         |       |
| Artifact revision report |       Yes | Found / Missing / Partial                  |       |
| Handoff draft            |       Yes | Found / Missing / Partial                  |       |
| Workflow status file     |       Yes | Found / Missing / Partial                  |       |
| Upstream handoff         |  Yes / No | Found / Missing / Partial / Not Applicable |       |

---

## 4. Gate Checklist

| Gate ID | Gate Check                                                  | Required? | Status                | Evidence / Notes |
| ------- | ----------------------------------------------------------- | --------: | --------------------- | ---------------- |
| G-001   | Initial phase artifact exists                               |       Yes | Pass / Fail / Partial |                  |
| G-002   | Upstream inputs were reviewed or missing inputs documented  |       Yes | Pass / Fail / Partial |                  |
| G-003   | Required support work was identified                        |       Yes | Pass / Fail / Partial |                  |
| G-004   | Required support skills were executed or waived with reason |       Yes | Pass / Fail / Partial |                  |
| G-005   | Evidence exists for critical decisions                      |       Yes | Pass / Fail / Partial |                  |
| G-006   | Evidence was stored or clearly referenced                   |       Yes | Pass / Fail / Partial |                  |
| G-007   | Artifact was revised using evidence                         |       Yes | Pass / Fail / Partial |                  |
| G-008   | Key decisions are explicit                                  |       Yes | Pass / Fail / Partial |                  |
| G-009   | Assumptions are explicit                                    |       Yes | Pass / Fail / Partial |                  |
| G-010   | Risks are explicit                                          |       Yes | Pass / Fail / Partial |                  |
| G-011   | Open questions are explicit                                 |       Yes | Pass / Fail / Partial |                  |
| G-012   | Handoff to the next phase exists                            |       Yes | Pass / Fail / Partial |                  |
| G-013   | Next phase input expectations are clear                     |       Yes | Pass / Fail / Partial |                  |
| G-014   | Workflow status update is ready                             |       Yes | Pass / Fail / Partial |                  |

---

## 5. Critical Decision Coverage

| Decision ID | Decision     | Evidence Source | Coverage                          | Gate Impact           |
| ----------- | ------------ | --------------- | --------------------------------- | --------------------- |
| DEC-001     | {{DECISION}} | E-001           | Full / Partial / Missing / Waived | Pass / Risk / Blocker |
| DEC-002     | {{DECISION}} | E-002           | Full / Partial / Missing / Waived | Pass / Risk / Blocker |

---

## 6. Required Support Skills Result

| Support Skill       | Requirement Status                                       | Execution Result                         | Evidence Output       | Gate Impact           |
| ------------------- | -------------------------------------------------------- | ---------------------------------------- | --------------------- | --------------------- |
| `{{SUPPORT_SKILL}}` | Required / Optional / Waived / Deferred / Not Applicable | Pass / Fail / Partial / Blocked / Waived | `{{EVIDENCE_OUTPUT}}` | Pass / Risk / Blocker |
| `{{SUPPORT_SKILL}}` | Required / Optional / Waived / Deferred / Not Applicable | Pass / Fail / Partial / Blocked / Waived | `{{EVIDENCE_OUTPUT}}` | Pass / Risk / Blocker |

---

## 7. Open Blockers

| Blocker ID | Blocker     | Impact     | Required Resolution | Owner     |
| ---------- | ----------- | ---------- | ------------------- | --------- |
| B-001      | {{BLOCKER}} | {{IMPACT}} | {{RESOLUTION}}      | {{OWNER}} |

If any blocker remains open, the gate result should be `Fail` or `Blocked`.

---

## 8. Accepted Risks

| Risk ID  | Risk     | Why Accepted     | Impact on Next Phase | Owner     |
| -------- | -------- | ---------------- | -------------------- | --------- |
| RISK-001 | {{RISK}} | {{WHY_ACCEPTED}} | {{IMPACT}}           | {{OWNER}} |

Accepted risks must be carried into the handoff.

---

## 9. Do-Not-Assume List

The next phase must not assume the following:

* {{DO_NOT_ASSUME_1}}
* {{DO_NOT_ASSUME_2}}

---

## 10. Gate Decision

Choose one:

```text
Pass
Pass with risks
Fail
Blocked
```

### Gate Result

{{GATE_RESULT}}

### Explanation

{{EXPLANATION}}

### Conditions

If the result is `Pass with risks`, list the conditions:

* {{CONDITION_1}}
* {{CONDITION_2}}

If the result is `Fail` or `Blocked`, list required actions:

* {{REQUIRED_ACTION_1}}
* {{REQUIRED_ACTION_2}}

---

## 11. Workflow Status Update

Recommended workflow status update:

```yaml
phase_{{PHASE_NUMBER}}:
  name: "{{PHASE_NAME}}"
  skill: "{{PHASE_CORE_SKILL}}"
  artifact: "{{PHASE_ARTIFACT}}"
  support_plan: "{{PHASE_SUPPORT_PLAN}}"
  evidence_pack: "{{PHASE_EVIDENCE_PACK}}"
  artifact_revision_report: "{{ARTIFACT_REVISION_REPORT}}"
  done_gate: "{{THIS_DONE_GATE_FILE}}"
  handoff: "{{PHASE_HANDOFF_FILE}}"
  status: "Done | Validated | Blocked | Draft"
  gate_result: "Pass | Pass with risks | Fail | Blocked"
  next_recommended_skill: "{{NEXT_RECOMMENDED_SKILL}}"
  open_risks:
    - "{{RISK}}"
  open_questions:
    - "{{OPEN_QUESTION}}"
```

---

## 12. Next Action

Recommended next action:

```text
{{NEXT_ACTION}}
```

Reason:

{{REASON}}

---

## 13. Change Log

| Date           | Change            | Reason                  | Updated By         |
| -------------- | ----------------- | ----------------------- | ------------------ |
| {{YYYY-MM-DD}} | Created Done Gate | Phase completion review | {{OWNER_OR_AGENT}} |

