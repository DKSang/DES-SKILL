# Phase 02 Support Plan — Business Questions

## 1. Purpose

This support plan defines the lightweight support work required to complete Phase 02 Business Questions.

Phase 02 does not require technical probing, source profiling, KPI formula design, or table design.

It requires evidence that the prioritized business questions are clear, scoped, answerable enough, and mapped to consumers and decisions before Phase 03 Requirements and KPIs begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 02 |
| Phase Name | Business Questions |
| Phase Core Skill | `des-business-questions` |
| Initial Artifact | `_des-output/planning-artifacts/02-business-question-catalog.md` |
| Upstream Artifact | `_des-output/planning-artifacts/01-business-discovery-brief.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-01-to-02-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 01 Business Discovery Brief | Yes | Found / Missing / Partial | |
| Phase 01 to Phase 02 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 01 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 01 Done Gate | Recommended | Found / Missing / Partial | |
| Workflow status | Yes | Found / Missing / Partial | |
| Existing question list / dashboard request / report request | No | Found / Missing / Partial | |

---

## 4. Initial Artifact Summary

### Confirmed Items

- 

### Assumptions

- 

### Open Questions

- 

### Known Risks

- 

---

## 5. What Must Be Validated

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | Phase 01 handoff alignment | Ensures questions follow validated business context | Critical | Phase 01 handoff or accepted risk |
| V-002 | Question quality | Prevents vague or non-actionable questions | Critical | Question quality review |
| V-003 | Consumer mapping | Phase 03 requirements depend on who uses the answer | Critical | Mapping table or accepted risk |
| V-004 | Decision/use-case mapping | Prevents generic analysis without decision purpose | Critical | Mapping table or accepted risk |
| V-005 | Question priority | Drives KPI and MVP requirement selection | High | User approval, artifact priority, or accepted risk |
| V-006 | Scope alignment | Prevents Phase 03 from expanding beyond MVP | High | Scope check against Phase 01 |
| V-007 | Answerability risk | Helps Phase 05 know which questions may fail source validation | High | Answerability review |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 01 Handoff Review | Validate that questions derive from Phase 01 context | Phase 01 artifact + handoff | Evidence item E-001 | Required | |
| Question Quality Review | Check clarity, actionability, and answerability | Candidate questions | Evidence item E-002 | Required | |
| Consumer Mapping Check | Ensure P1 questions map to consumer | Question catalog | Evidence item E-003 | Required | |
| Decision Mapping Check | Ensure P1 questions map to decision/use case | Question catalog | Evidence item E-004 | Required | |
| Scope Alignment Check | Check each question against Phase 01 scope/non-scope | Phase 01 handoff + catalog | Evidence item E-005 | Required | |
| Priority Validation | Confirm top questions are approved or marked Draft | User approval / catalog | Evidence item E-006 | Required | |
| Answerability Risk Check | Flag questions that may lack plausible data | Catalog | Evidence item E-007 | Required | |
| Phase 02 Done Gate | Decide whether Phase 02 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 02 Handoff | Prepare Phase 03 input | Artifact + Done Gate | Handoff file | Required | |

Requirement status values:

```text
Required
Optional
Waived with reason
Not applicable
Deferred with accepted risk
Blocked
```

---

## 7. Support Work Execution Order

```text
1. Phase 01 Handoff Review
2. Question Quality Review
3. Consumer Mapping Check
4. Decision Mapping Check
5. Scope Alignment Check
6. Priority Validation
7. Answerability Risk Check
8. Update Business Question Catalog from evidence
9. Run Phase 02 Done Gate
10. Create Phase 02 to Phase 03 Handoff
```

---

## 8. Evidence Output Locations

All Phase 02 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-02/
```

Expected evidence files:

| Evidence File                                             | Supports Validation ID | Status                                                      |
| --------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | V-001 to V-007         | Not Started / In Progress / Collected / Accepted / Rejected |

---

## 9. Waivers and Deferrals

| Item | Type                                 | Waiver / Deferral Reason | Risk | Accepted By | Date |
| ---- | ------------------------------------ | ------------------------ | ---- | ----------- | ---- |
|      | Support Work / Evidence / Validation |                          |      |             |      |

Allowed reasons:

* Not applicable to this project
* Already satisfied by existing evidence
* Deferred with accepted risk
* Blocked by missing access
* Out of scope for current workflow mode
* Replaced by another support action

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 01 handoff is missing.
* P1 question has no consumer mapping.
* P1 question has no decision/use-case mapping.
* Question priority is unclear.
* Question conflicts with Phase 01 scope.
* High-priority question is not plausibly answerable and not accepted as risk.
* Phase 02 questions reveal that Phase 01 discovery was wrong.
* Phase 02 Done Gate fails.
* User wants to skip Phase 02 without accepting risk.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 02 context is summarized.
* [ ] Required validation items are listed.
* [ ] Required support work is listed.
* [ ] Evidence output location is defined.
* [ ] Waivers or deferrals are documented.
* [ ] HALT conditions are clear.
* [ ] Next support action is recommended.

---

## 12. Next Support Action

Recommended next action:

```text
Create or update _des-output/evidence/phase-02/phase-02-evidence-pack.md
```

Reason:

Business Questions decisions need explicit evidence or accepted risk before Phase 02 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 02 validation | |
