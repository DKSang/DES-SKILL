# Phase {{PHASE_NUMBER}} Support Plan — {{PHASE_NAME}}

## 1. Purpose

This support plan defines the support skills, validation work, evidence, and review actions required to complete Phase {{PHASE_NUMBER}}.

The initial phase artifact is not treated as final until this support plan is executed, waived with reason, or explicitly deferred with accepted risk.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | {{PHASE_NUMBER}} |
| Phase Name | {{PHASE_NAME}} |
| Phase Core Skill | `{{PHASE_CORE_SKILL}}` |
| Initial Artifact | `{{INITIAL_PHASE_ARTIFACT}}` |
| Upstream Handoff | `{{UPSTREAM_HANDOFF}}` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | {{YYYY-MM-DD}} |
| Last Updated | {{YYYY-MM-DD}} |
| Owner / Agent | {{OWNER_OR_AGENT}} |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

List the upstream artifacts, handoffs, or decisions used to create this support plan.

| Input | Required? | Status | Notes |
|---|---:|---|---|
| `{{UPSTREAM_ARTIFACT_1}}` | Yes / No | Found / Missing / Partial | |
| `{{UPSTREAM_ARTIFACT_2}}` | Yes / No | Found / Missing / Partial | |
| `{{UPSTREAM_HANDOFF}}` | Yes / No | Found / Missing / Partial | |
| `des-workflow-status.md` | Yes | Found / Missing / Partial | |

---

## 4. Initial Artifact Summary

Summarize what the initial phase artifact currently contains.

### Confirmed Items

- {{CONFIRMED_ITEM_1}}
- {{CONFIRMED_ITEM_2}}

### Assumptions

- {{ASSUMPTION_1}}
- {{ASSUMPTION_2}}

### Open Questions

- {{OPEN_QUESTION_1}}
- {{OPEN_QUESTION_2}}

### Known Risks

- {{RISK_1}}
- {{RISK_2}}

---

## 5. What Must Be Validated

List the phase decisions or assumptions that require support work before the phase can be marked Done.

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | {{VALIDATION_ITEM}} | {{WHY}} | Critical / High / Medium / Low | {{EVIDENCE}} |
| V-002 | {{VALIDATION_ITEM}} | {{WHY}} | Critical / High / Medium / Low | {{EVIDENCE}} |

Criticality guide:

| Level | Meaning |
|---|---|
| Critical | Downstream phase may be wrong or blocked without this evidence. |
| High | Important decision quality depends on this evidence. |
| Medium | Helpful for reducing risk but not always blocking. |
| Low | Nice to have or can be deferred. |

---

## 6. Required Support Skills

| Support Skill | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| `{{SUPPORT_SKILL}}` | {{PURPOSE}} | {{INPUT}} | {{OUTPUT}} | Required / Optional / Waived / Deferred / Not Applicable | |
| `{{SUPPORT_SKILL}}` | {{PURPOSE}} | {{INPUT}} | {{OUTPUT}} | Required / Optional / Waived / Deferred / Not Applicable | |

Requirement status values:

| Status | Meaning |
|---|---|
| Required | Must be executed before Done Gate. |
| Optional | Useful but not required to complete this phase. |
| Waived | Not executed; waiver reason must be documented. |
| Deferred | Moved to a later phase with accepted risk. |
| Not Applicable | Not relevant for this project or phase. |
| Blocked | Cannot execute due to missing access, missing input, or unresolved decision. |

---

## 7. Support Skill Execution Order

Use this section to define the recommended order.

```text
1. {{SUPPORT_SKILL_1}}
2. {{SUPPORT_SKILL_2}}
3. {{SUPPORT_SKILL_3}}
4. artifact revision
5. phase done gate
6. handoff creation
````

Dependency notes:

* {{DEPENDENCY_NOTE_1}}
* {{DEPENDENCY_NOTE_2}}

---

## 8. Evidence Output Locations

All evidence should be stored or referenced under:

```text
_des-output/evidence/phase-{{PHASE_NUMBER}}/
```

Expected evidence files:

| Evidence File                                                      | Produced By         | Supports Validation ID | Status                                                      |
| ------------------------------------------------------------------ | ------------------- | ---------------------- | ----------------------------------------------------------- |
| `_des-output/evidence/phase-{{PHASE_NUMBER}}/{{EVIDENCE_FILE}}.md` | `{{SUPPORT_SKILL}}` | V-001                  | Not Started / In Progress / Collected / Accepted / Rejected |
| `_des-output/evidence/phase-{{PHASE_NUMBER}}/{{EVIDENCE_FILE}}.md` | `{{SUPPORT_SKILL}}` | V-002                  | Not Started / In Progress / Collected / Accepted / Rejected |

---

## 9. Waivers and Deferrals

Use this table when a support skill or validation item is not executed.

| Item     | Type                                  | Waiver / Deferral Reason | Risk     | Accepted By | Date           |
| -------- | ------------------------------------- | ------------------------ | -------- | ----------- | -------------- |
| {{ITEM}} | Support Skill / Evidence / Validation | {{REASON}}               | {{RISK}} | {{OWNER}}   | {{YYYY-MM-DD}} |

Allowed reasons:

* Not applicable to this project
* Already satisfied by existing evidence
* Deferred with accepted risk
* Blocked by missing access
* Out of scope for current workflow mode
* Replaced by another support skill

Bad reasons:

* Need to move fast
* Assumed to be fine
* Will check later
* No time
* Not important

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Required upstream artifact is missing.
* Required evidence cannot be collected.
* A critical validation item fails.
* A support skill is blocked by missing access.
* A downstream phase would depend on an unvalidated assumption.
* A required support skill is waived without explicit accepted risk.
* Evidence contradicts the current phase artifact.
* The phase artifact needs major correction before moving forward.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Upstream inputs are listed.
* [ ] Initial artifact assumptions are identified.
* [ ] Required validation items are listed.
* [ ] Required support skills are selected.
* [ ] Evidence output locations are defined.
* [ ] Waivers or deferrals are documented.
* [ ] HALT conditions are clear.
* [ ] The next support action is recommended.

---

## 12. Next Support Action

Recommended next action:

```text
{{NEXT_SUPPORT_SKILL_OR_ACTION}}
```

Reason:

{{REASON}}

---

## 13. Change Log

| Date           | Change               | Reason                         | Updated By         |
| -------------- | -------------------- | ------------------------------ | ------------------ |
| {{YYYY-MM-DD}} | Created support plan | Initial phase support planning | {{OWNER_OR_AGENT}} |

