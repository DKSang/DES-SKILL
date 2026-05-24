# Phase 03 Support Plan — Requirements and KPIs

## 1. Purpose

This support plan defines the lightweight support work required to complete Phase 03 Requirements and KPIs.

Phase 03 does not require physical schema design, source ingestion development, medallion table coding, or pipeline implementation.

It requires evidence that business questions are correctly traced to requirements, that KPIs are defined with formulas, grains, and owners, and that non-functional SLA and freshness expectations are measurable before Phase 04 Data Product Definition begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 03 |
| Phase Name | Requirements and KPIs |
| Phase Core Skill | `des-requirements-and-kpis` |
| Initial Artifact | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` |
| Upstream Artifact | `_des-output/planning-artifacts/02-business-question-catalog.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-02-to-03-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 02 Business Question Catalog | Yes | Found / Missing / Partial | |
| Phase 02 to Phase 03 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 02 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 02 Done Gate | Recommended | Found / Missing / Partial | |
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
| V-001 | Phase 02 handoff alignment | Ensures requirements trace to validated business questions | Critical | Phase 02 handoff or accepted risk |
| V-002 | Question-to-Requirement Traceability | Confirms no approved P1 questions are missed | Critical | Traceability check |
| V-003 | Functional requirement testability | Prevents requirements that cannot be verified/tested | Critical | Testability review |
| V-004 | Non-functional measurability | Vague SLAs lead to unmeasurable platform goals | Critical | Measurability review |
| V-005 | KPI formula definition | Downstream code/tests depend on exact KPI logic | Critical | Formula verification |
| V-006 | Metric grain definition | Dictates Medallion design and data contract constraints | Critical | Grain mapping |
| V-007 | Metric ownership | Essential for governance and conflict resolution | High | Owner assignment |
| V-008 | Freshness / SLA expectations | Affects ingestion patterns and orchestration costs | High | Measurable SLA thresholds |
| V-009 | Acceptance criteria check | Defines when a requirement is officially satisfied | High | Acceptance criteria review |
| V-010 | Metric conflict check | Prevents encoding conflicting stakeholder formulas | High | Conflict register |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 02 Handoff Review | Validate that requirements derive from Phase 02 context | Phase 02 artifact + handoff | Evidence item E-001 | Required | |
| Question-Requirement Traceability Check | Ensure each question maps to at least one requirement | Questions + catalog | Evidence item E-002 | Required | |
| Functional Requirement Testability Check | Verify that functional requirements are testable | Catalog requirements | Evidence item E-003 | Required | |
| Non-Functional Requirement Measurability Check | Verify freshness, security, and cost constraints are explicit | Catalog NFRs | Evidence item E-004 | Required | |
| KPI Formula Check | Verify KPI mathematical and logical definitions | KPI list | Evidence item E-005 | Required | |
| Metric Grain Check | Ensure KPI defines one measurement per grain | KPI list | Evidence item E-006 | Required | |
| Metric Owner Check | Verify that approved KPIs have designated owners | KPI list | Evidence item E-007 | Required | |
| Freshness/SLA Check | Verify freshness has explicit time/latency thresholds | KPI list / SLAs | Evidence item E-008 | Required | |
| Acceptance Criteria Check | Ensure P1 requirements have clear acceptance criteria | Catalog requirements | Evidence item E-009 | Required | |
| Metric Conflict Check | Verify overlapping metric definitions are reconciled | Catalog metrics | Evidence item E-010 | Required | |
| Phase 03 Done Gate | Decide whether Phase 03 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 03 Handoff | Prepare Phase 04 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 02 Handoff Review
2. Question-Requirement Traceability Check
3. Functional Requirement Testability Check
4. Non-Functional Requirement Measurability Check
5. KPI Formula Check
6. Metric Grain Check
7. Metric Owner Check
8. Freshness/SLA Check
9. Acceptance Criteria Check
10. Metric Conflict Check
11. Update Requirements and KPI Catalog from evidence
12. Run Phase 03 Done Gate
13. Create Phase 03 to Phase 04 Handoff
```

---

## 8. Evidence Output Locations

All Phase 03 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-03/
```

Expected evidence files:

| Evidence File | Supports Validation ID | Status |
|---|---|---|
| `_des-output/evidence/phase-03/phase-03-evidence-pack.md` | V-001 to V-010 | Not Started / In Progress / Collected / Accepted / Rejected |

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

* Phase 02 handoff is missing.
* P1 business question has no mapping requirement.
* P1 requirement has no consumer mapping.
* P1 approved KPI lacks formula, grain, or owner.
* Freshness SLA is vague and not accepted as risk.
* Metric conflict remains unresolved and blocking.
* Acceptance criteria are missing.
* Phase 03 requirements reveal Phase 02 question catalog was fundamentally incorrect.
* Phase 03 Done Gate fails.
* User wants to skip Phase 03 without accepting risk.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 03 context is summarized.
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
Create or update _des-output/evidence/phase-03/phase-03-evidence-pack.md
```

Reason:

Requirements and KPI decisions need explicit evidence or accepted risk before Phase 03 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 03 validation | |
