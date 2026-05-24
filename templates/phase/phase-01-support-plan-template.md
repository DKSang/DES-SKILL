# Phase 01 Support Plan — Business Discovery

## 1. Purpose

This support plan defines the lightweight support work required to complete Phase 01 Business Discovery.

Phase 01 does not require technical probing, source profiling, or pipeline implementation.

It requires evidence that the business context is clear enough for Phase 02 Business Questions.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 01 |
| Phase Name | Business Discovery |
| Phase Core Skill | `des-business-discovery` |
| Initial Artifact | `_des-output/planning-artifacts/01-business-discovery-brief.md` |
| Upstream Handoff | Not applicable |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

Phase 01 has no required upstream DES phase, but it should still review available project context.

| Input | Required? | Status | Notes |
|---|---:|---|---|
| User request / project idea | Yes | Found / Missing / Partial | |
| Existing README / PRD / brief / proposal / notes | No | Found / Missing / Partial | |
| Existing workflow status | No | Found / Missing / Partial | |
| Existing Business Discovery Brief | No | Found / Missing / Partial | |
| Existing project-context.md | No | Found / Missing / Partial | |

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
| V-001 | Project intent | Determines workflow mode and downstream scope | Critical | User statement or project document |
| V-002 | Business problem | Prevents solution-first design | Critical | User statement or project document |
| V-003 | Primary consumer | Drives business questions, KPI, data product, serving, and quality expectations | Critical | User selection, stakeholder note, or accepted risk |
| V-004 | Target decision or use case | Prevents building generic tables without decision purpose | Critical | User selection or project document |
| V-005 | Expected value | Explains why the project matters | High | User statement, project objective, or accepted risk |
| V-006 | MVP scope and non-scope | Prevents oversized downstream design | High | User selection or scope note |
| V-007 | Initial success criteria | Seeds Phase 03 requirement and KPI design | High | User list or accepted risk |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Context Source Review | Identify where each business claim came from | User request, docs, notes | Evidence summary | Required | |
| Business Intent Validation | Confirm or mark project intent | User answer or document | Evidence item E-001 | Required | |
| Stakeholder and Consumer Check | Confirm or mark primary consumer | User answer or document | Evidence item E-002 | Required | |
| Target Use Case Check | Confirm target decision/use case | User answer or document | Evidence item E-003 | Required | |
| Scope Boundary Check | Confirm MVP scope and non-scope | User answer or document | Evidence item E-004 | Required | |
| Success Criteria Check | Confirm initial success criteria | User answer or document | Evidence item E-005 | Required | |
| Phase 01 Done Gate | Decide whether Phase 01 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 01 Handoff | Prepare Phase 02 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Context Source Review
2. Business Intent Validation
3. Stakeholder and Consumer Check
4. Target Use Case Check
5. Scope Boundary Check
6. Success Criteria Check
7. Update Business Discovery Brief from evidence
8. Run Phase 01 Done Gate
9. Create Phase 01 to Phase 02 Handoff
```

---

## 8. Evidence Output Locations

All Phase 01 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-01/
```

Expected evidence files:

| Evidence File                                             | Supports Validation ID | Status                                                      |
| --------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | V-001 to V-007         | Not Started / In Progress / Collected / Accepted / Rejected |

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

* Project intent is missing.
* Primary consumer is missing.
* Target decision or use case is missing.
* MVP scope is missing.
* Success criteria are missing.
* User wants to skip Phase 01 without accepting risk.
* Phase 02 would rely on hidden assumptions.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 01 context is summarized.
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
Create or update _des-output/evidence/phase-01/phase-01-evidence-pack.md
```

Reason:

Business Discovery decisions need explicit evidence or accepted risk before Phase 01 can be marked Done.

---

## 13. Change Log

| Date       | Change               | Reason              | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 01 validation |            |
