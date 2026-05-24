# Phase 06 Support Plan — Domain Modeling

## 1. Purpose

This support plan defines the validation support work required to complete Phase 06 Domain Modeling.

Phase 06 does not require physical schema design, database table modeling, Medallion layer layout (Bronze/Silver/Gold), star schema design, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.

It requires validation that core business concepts, glossary terms, ontology-lite classes/relationships, grains, identifiers, states, temporal rules, and source mappings are defined, consistent, and aligned with Phase 05 source evidence and caveats before Phase 07 Architecture Design begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 06 |
| Phase Name | Domain Modeling |
| Phase Core Skill | `des-domain-modeling` |
| Initial Artifact | `_des-output/planning-artifacts/06-conceptual-domain-model.md` |
| Upstream Artifact | `_des-output/planning-artifacts/05-data-source-inventory.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-05-to-06-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 05 Data Source Inventory | Yes | Found / Missing / Partial | |
| Phase 05 to Phase 06 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 05 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 05 Done Gate | Recommended | Found / Missing / Partial | |
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
| V-001 | Phase 05 handoff alignment | Ensures domain concepts trace to validated source inventory and caveats | Critical | Phase 05 handoff or accepted risk |
| V-002 | Business glossary check | Standardizes terms, definitions, and controlled vocabulary | Critical | Glossary checks |
| V-003 | Source-to-concept mapping | Prevents copying source schema as domain model | Critical | Mapping table |
| V-004 | Ontology-lite boundary | Restricts modeling to useful classes, relationships, and boundaries | Critical | Ontology concept map |
| V-005 | Core entity identity | Deduplication, conformance, and contracts depend on identity rules | Critical | Identity rules |
| V-006 | Conceptual grain | Grain ambiguity causes incorrect aggregates or duplicate bugs | Critical | Grain definitions |
| V-007 | Relationship cardinality | Undocumented M:M joins cause row fan-out bugs downstream | Critical | Relationship mappings |
| V-008 | Source-of-truth mapping | Resolves or documents overlapping source fields/concepts | High | Source-of-truth decisions |
| V-009 | Terminology conflict check | Highlights ambiguous terms or synonyms across source systems | High | Terminology conflict registry |
| V-010 | Temporal concepts | Defines business time meaning (event time vs processing time) | High | Date/time definitions |
| V-011 | Lifecycle state definitions | Organizes status stages that change over time | High | State/lifecycle mapping |
| V-012 | Source caveat propagation | Carries quality/freshness/privacy/license risks into model | High | Caveats mapping |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 05 Handoff Review | Validate domain concepts align with source evidence/caveats | Phase 05 handoff + artifact | Evidence item E-001 | Required | |
| Business Glossary Check | Reconcile vocabulary and check definitions | Glossary terms | Evidence item E-002 | Required | |
| Source-to-Concept Mapping Check | Ensure concepts represent business, not physical schema | Mapping table | Evidence item E-003 | Required | |
| Ontology-Lite Boundary Check | Check classes, relationships, and boundaries | Ontology-lite | Evidence item E-004 | Required | |
| Core Entity Identity Check | Validate natural/business unique key definitions | Entities | Evidence item E-005 | Required | |
| Conceptual Grain Check | Validate one-instance meaning for entities/events | Entities/events | Evidence item E-006 | Required | |
| Relationship Cardinality Check | Validate join relationships and cardinalities | Relationships | Evidence item E-007 | Required | |
| Source-of-Truth Mapping Check | Verify authoritative sources for P1 concepts | Mappings | Evidence item E-008 | Required | |
| Terminology Conflict Check | Ensure ambiguous terms/synonyms are listed | Conflict registry | Evidence item E-009 | Required | |
| Temporal Concept Check | Define meaning of date/time fields | Temporal rules | Evidence item E-010 | Required | |
| Lifecycle State Check | Reconcile statuses and transitions | State definitions | Evidence item E-011 | Required | |
| Source Caveat Propagation Check | Carry source risks and data realities forward | Caveats | Evidence item E-012 | Required | |
| Phase 06 Done Gate | Decide whether Phase 06 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 06 Handoff | Prepare Phase 07 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 05 Handoff Review
2. Business Glossary Check
3. Source-to-Concept Mapping Check
4. Ontology-Lite Boundary Check
5. Core Entity Identity Check
6. Conceptual Grain Check
7. Relationship Cardinality Check
8. Source-of-Truth Mapping Check
9. Terminology Conflict Check
10. Temporal Concept Check
11. Lifecycle State Check
12. Source Caveat Propagation Check
13. Update Conceptual Domain Model from evidence
14. Run Phase 06 Done Gate
15. Create Phase 06 to Phase 07 Handoff
```

---

## 8. Evidence Output Locations

All Phase 06 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-06/
```

Expected evidence files:

| Evidence File | Supports Validation ID | Status |
|---|---|---|
| `_des-output/evidence/phase-06/phase-06-evidence-pack.md` | V-001 to V-012 | Not Started / In Progress / Collected / Accepted / Rejected |

---

## 9. Waivers and Deferrals

| Item | Type | Waiver / Deferral Reason | Risk | Accepted By | Date |
|---|---|---|---|---|---|
| | Support Work / Evidence / Validation | | | | |

Allowed reasons:

* Not applicable to this project
* Already satisfied by existing evidence
* Deferred with accepted risk
* Out of scope for current workflow mode
* Replaced by another support action

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 05 handoff is missing.
* Domain scope is unclear.
* Business term has multiple unresolved meanings (ambiguity).
* Core entity identity is unclear or natural/business keys are missing.
* Conceptual grain is unapproved or ambiguous for a P1 concept.
* Source of truth is conflicting and unresolved.
* Relationship between concepts is ambiguous (especially M:M).
* Domain event definition lacks subject, timing, or mutability.
* Temporal definitions are ambiguous (event time vs processing time).
* Lifecycle/state definitions are important but missing.
* Source schema/sample evidence conflicts with business terminology.
* Phase 06 Done Gate fails.
* User wants to skip Phase 06 without accepting risk.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 06 context is summarized.
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
Create or update _des-output/evidence/phase-06/phase-06-evidence-pack.md
```

Reason:

Domain modeling decisions need explicit technical/data and business evidence or accepted risk before Phase 06 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 06 validation | |
