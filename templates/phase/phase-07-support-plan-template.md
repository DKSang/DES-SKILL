# Phase 07 Support Plan — Architecture Design

## 1. Purpose

This support plan defines the validation work required to complete Phase 07 Architecture Design.

Phase 07 does not design detailed ingestion pipelines, physical table schemas, Bronze/Silver/Gold details, transformation SQL/Python, full data contracts, CI/CD workflow files, dashboards, APIs, semantic model internals, or implementation code.

It requires evidence that architecture decisions are traceable to product outputs, requirements, source realities, domain constraints, trust expectations, freshness/SLA, security/privacy posture, cost constraints, team capability, and reversibility.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 07 |
| Phase Name | Architecture Design |
| Phase Core Skill | `des-architecture-design` |
| Initial Artifact | `_des-output/planning-artifacts/07-architecture-decision-record.md` |
| Upstream Artifact | `_des-output/planning-artifacts/06-conceptual-domain-model.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-06-to-07-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 01 Business Discovery Brief | Recommended | Found / Missing / Partial | |
| Phase 02 Business Question Catalog | Recommended | Found / Missing / Partial | |
| Phase 03 Requirements and KPI Catalog | Recommended | Found / Missing / Partial | |
| Phase 04 Data Product Specification | Recommended | Found / Missing / Partial | |
| Phase 05 Data Source Inventory | Recommended | Found / Missing / Partial | |
| Phase 06 Conceptual Domain Model | Yes | Found / Missing / Partial | |
| Phase 06 to Phase 07 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 06 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 06 Done Gate | Recommended | Found / Missing / Partial | |
| Workflow status | Yes | Found / Missing / Partial | |
| Existing architecture/platform notes | No | Found / Missing / Partial | |

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
| V-001 | Phase 06 handoff alignment | Ensures architecture derives from validated domain and source context | Critical | Phase 06 handoff or accepted risk |
| V-002 | Architecture driver traceability | Prevents tool-first architecture | Critical | Driver-to-decision trace |
| V-003 | Option comparison | Prevents unsupported architecture choices | Critical | Options and trade-off review |
| V-004 | Platform feasibility | Platform choice affects cost, operations, security, deployment, and lock-in | High | Feasibility note or accepted risk |
| V-005 | Environment strategy | Drives CI/CD, promotion, testing, access, and release safety | High | Environment decision |
| V-006 | Storage/compute fit | Affects performance, cost, development speed, scalability, and operability | High | Fit review |
| V-007 | Batch/streaming/event fit | Latency choices can overcomplicate or under-serve requirements | High | Freshness/source pattern review |
| V-008 | Layer strategy | Drives traceability, data quality, contracts, and consumer trust | High | Layer decision |
| V-009 | Serving strategy | P1 outputs must be consumable by intended users/systems | High | Serving decision |
| V-010 | Security/privacy architecture | Sensitive data requires architecture-level controls | Critical | Security posture decision |
| V-011 | Governance/metadata direction | Trust, lineage, ownership, and change control require metadata decisions | High | Governance direction |
| V-012 | Cost/operational burden | Architecture must fit budget and team capability | High | Cost/team review |
| V-013 | Reversibility/lock-in | Hard-to-reverse choices need explicit approval | Critical | Reversibility review |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 06 Handoff Review | Validate Phase 07 derives from Phase 06 | Phase 06 model + handoff | Evidence item E-001 | Required | |
| Architecture Driver Traceability Check | Map decisions to product/source/domain drivers | ADR draft | Evidence item E-002 | Required | |
| Architecture Option Comparison | Validate options/trade-offs | ADR draft | Evidence item E-003 | Required | |
| Platform Feasibility Check | Validate platform direction | ADR draft + constraints | Evidence item E-004 | Required when platform selected | |
| Environment Strategy Check | Validate environment model | ADR draft | Evidence item E-005 | Required | |
| Storage/Compute Fit Check | Validate storage and compute choices | ADR draft + source/product constraints | Evidence item E-006 | Required | |
| Batch/Streaming/Event Fit Check | Validate processing pattern | Freshness + source patterns | Evidence item E-007 | Required | |
| Layer Strategy Check | Validate layer model | ADR draft | Evidence item E-008 | Required | |
| Serving Strategy Check | Validate serving path | Product outputs | Evidence item E-009 | Required | |
| Security/Privacy Architecture Check | Validate security posture | Source classifications + trust expectation | Evidence item E-010 | Required | |
| Governance/Metadata Architecture Check | Validate governance direction | Trust, lineage, ownership needs | Evidence item E-011 | Required | |
| Cost and Operational Burden Check | Validate architecture against team and budget realities. | Cost/team notes | Evidence item E-012 | Required | |
| Reversibility and Lock-In Check | Validate decision reversibility | ADR decisions | Evidence item E-013 | Required | |
| Phase 07 Done Gate | Decide whether Phase 07 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 07 Handoff | Prepare Phase 08 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 06 Handoff Review
2. Architecture Driver Traceability Check
3. Architecture Option Comparison
4. Platform Feasibility Check
5. Environment Strategy Check
6. Storage/Compute Fit Check
7. Batch/Streaming/Event Fit Check
8. Layer Strategy Check
9. Serving Strategy Check
10. Security/Privacy Architecture Check
11. Governance/Metadata Architecture Check
12. Cost and Operational Burden Check
13. Reversibility and Lock-In Check
14. Update Architecture Decision Record from evidence
15. Run Phase 07 Done Gate
16. Create Phase 07 to Phase 08 Handoff
```

---

## 8. Evidence Output Locations

All Phase 07 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-07/
```

Expected evidence files:

| Evidence File                                             | Supports Validation ID | Status                                                      |
| --------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | V-001 to V-013         | Not Started / In Progress / Collected / Accepted / Rejected |

Optional evidence subpaths:

```text
_des-output/evidence/phase-07/option-comparison/
_des-output/evidence/phase-07/platform-feasibility/
_des-output/evidence/phase-07/cost-operational-burden/
_des-output/evidence/phase-07/security-privacy/
_des-output/evidence/phase-07/reversibility/
```

---

## 9. Waivers and Deferrals

| Item | Type                                 | Waiver / Deferral Reason | Risk | Accepted By | Date |
| ---- | ------------------------------------ | ------------------------ | ---- | ----------- | ---- |
|      | Support Work / Evidence / Validation |                          |      |             |      |

Allowed reasons:

* Not applicable to this project
* Already satisfied by existing evidence
* Deferred with accepted risk
* Blocked by missing platform access or cost information
* Out of scope for current workflow mode
* Replaced by another support action

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 06 handoff is missing.
* Architecture scope is unclear.
* Target platform direction is unclear.
* Environment strategy is unclear.
* Storage or compute strategy is missing.
* Batch/streaming/event decision conflicts with freshness/source evidence.
* Serving direction is missing for P1 outputs.
* Security/privacy posture is missing for sensitive or decision-support data.
* Cost or operational burden may exceed team capability.
* Hard-to-reverse decision lacks explicit rationale.
* Architecture is only a tool list.
* Phase 08 would rely on hidden architecture assumptions.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 06 artifact and handoff are reviewed.
* [ ] Required validation items are listed.
* [ ] Required support work is listed.
* [ ] Evidence output locations are defined.
* [ ] Waivers or deferrals are documented.
* [ ] HALT conditions are clear.
* [ ] Next support action is recommended.

---

## 12. Next Support Action

Recommended next action:

```text
Create or update _des-output/evidence/phase-07/phase-07-evidence-pack.md
```

Reason:

Architecture design requires explicit driver traceability, option comparison, fit checks, security/cost/governance review, and reversibility evidence before Phase 07 can be marked Done.

---

## 13. Change Log

| Date       | Change               | Reason              | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 07 validation |            |
