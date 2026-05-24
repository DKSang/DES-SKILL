# Phase 04 Support Plan — Data Product Definition

## 1. Purpose

This support plan defines the lightweight support work required to complete Phase 04 Data Product Definition.

Phase 04 does not require technical probing, source profiling, physical schema design, medallion layer coding, or pipeline implementation.

It requires evidence that the data product boundary is clear, that the consumers and use cases are aligned with requirements, and that the product outputs and service expectations are explicit before Phase 05 Data Source Assessment begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 04 |
| Phase Name | Data Product Definition |
| Phase Core Skill | `des-data-product-definition` |
| Initial Artifact | `_des-output/planning-artifacts/04-data-product-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-03-to-04-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 03 Requirements and KPI Catalog | Yes | Found / Missing / Partial | |
| Phase 03 to Phase 04 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 03 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 03 Done Gate | Recommended | Found / Missing / Partial | |
| Workflow status | Yes | Found / Missing / Partial | |

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
| V-001 | Phase 03 handoff alignment | Ensures product design traces to validated requirements | Critical | Phase 03 handoff or accepted risk |
| V-002 | Product boundary | Prevents scope bloat and unclear ownership | Critical | Boundary review |
| V-003 | Consumer/Use-case alignment | Prevents building products without consumer target | Critical | Alignment check |
| V-004 | Product output definition | First release output must be explicitly defined | Critical | Output review |
| V-005 | Service expectation | Freshness, availability, and SLAs must be explicit | Critical | Service expectation check |
| V-006 | Trust expectation | Quality and trust levels guide down-stream test designs | Critical | Trust review |
| V-007 | Ownership and Stewardship | Essential for operational support and changes | High | Owner assignment |
| V-008 | Lifecycle status | Sets downstream strictness and contract status | High | Status check |
| V-009 | Phase 05 Source Need Readiness | Ensures Phase 05 knows which source evidence to profile | High | Source needs check |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 03 Handoff Review | Validate that product derives from requirements | Phase 03 handoff + artifact | Evidence item E-001 | Required | |
| Product Boundary Check | Verify product boundary is clear and owned | Specification boundary | Evidence item E-002 | Required | |
| Consumer and Use Case Alignment Check | Ensure product maps to approved requirements | Specification mapping | Evidence item E-003 | Required | |
| Product Output Check | Verify first release output and formats | Specification outputs | Evidence item E-004 | Required | |
| Service Expectation Check | Verify freshness, availability, and SLA rules | Specification service rules | Evidence item E-005 | Required | |
| Trust Expectation Check | Verify quality and trust expectations | Specification trust rules | Evidence item E-006 | Required | |
| Ownership and Stewardship Check | Verify designated owner/steward exists | Specification owners | Evidence item E-007 | Required | |
| Lifecycle Status Check | Verify Experimental/Draft/MVP/etc. status | Specification lifecycle | Evidence item E-008 | Required | |
| Phase 05 Source Need Readiness Check | Ensure Phase 05 has list of source needs to assess | Specification source needs | Evidence item E-009 | Required | |
| Phase 04 Done Gate | Decide whether Phase 04 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 04 Handoff | Prepare Phase 05 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 03 Handoff Review
2. Product Boundary Check
3. Consumer and Use Case Alignment Check
4. Product Output Check
5. Service Expectation Check
6. Trust Expectation Check
7. Ownership and Stewardship Check
8. Lifecycle Status Check
9. Phase 05 Source Need Readiness Check
10. Update Data Product Specification from evidence
11. Run Phase 04 Done Gate
12. Create Phase 04 to Phase 05 Handoff
```

---

## 8. Evidence Output Locations

All Phase 04 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-04/
```

Expected evidence files:

| Evidence File | Supports Validation ID | Status |
|---|---|---|
| `_des-output/evidence/phase-04/phase-04-evidence-pack.md` | V-001 to V-009 | Not Started / In Progress / Collected / Accepted / Rejected |

---

## 9. Waivers and Deferrals

| Item | Type | Waiver / Deferral Reason | Risk | Accepted By | Date |
|---|---|---|---|---|---|
| | Support Work / Evidence / Validation | | | | |

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

* Phase 03 handoff is missing.
* Primary consumer is unclear.
* Product boundary is vague or overlapping.
* First release output is unclear.
* Product owner or steward is unclear.
* Product lifecycle status is unclear.
* Service expectation is vague.
* Trust expectation is vague.
* Phase 05 source need is not ready.
* Phase 04 Done Gate fails.
* User wants to skip Phase 04 without accepting risk.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 04 context is summarized.
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
Create or update _des-output/evidence/phase-04/phase-04-evidence-pack.md
```

Reason:

Data Product Definition decisions need explicit evidence or accepted risk before Phase 04 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 04 validation | |
