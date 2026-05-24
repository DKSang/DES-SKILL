# Phase 12 Support Plan — Data Contracts

## 1. Purpose

This support plan defines the validation work required to complete Phase 12 Data Contracts.

Phase 12 does not implement tests, transformations, dashboards, APIs, semantic model internals, orchestration, CI/CD workflow files, or code.

It requires evidence that contracts have clear producer-consumer ownership, business meaning, grain, schema, field expectations, freshness/SLA, quality, access, lineage, versioning, change, incident, validation, and approval expectations before Transformation Design begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 12 |
| Phase Name | Data Contracts |
| Phase Core Skill | `des-data-contracts` |
| Initial Artifact | `_des-output/planning-artifacts/12-data-contract-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/11-gold-layer-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-11-to-12-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 02 Business Question Catalog | Recommended | Found / Missing / Partial | |
| Phase 03 Requirements and KPI Catalog | Yes when metrics exist | Found / Missing / Partial | |
| Phase 04 Data Product Specification | Yes | Found / Missing / Partial | |
| Phase 10 Silver Layer Specification | Recommended | Found / Missing / Partial | |
| Phase 11 Gold Layer Specification | Yes | Found / Missing / Partial | |
| Phase 11 to Phase 12 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 11 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 11 Done Gate | Recommended | Found / Missing / Partial | |
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
| V-001 | Phase 11 handoff alignment | Ensures contracts target approved Gold outputs | Critical | Phase 11 handoff |
| V-002 | Contract scope | Prevents under/over-contracting | Critical | Contract scope decision |
| V-003 | Contract inventory | Ensures required outputs are covered | Critical | Inventory mapping |
| V-004 | Producer/consumer/owner | Establishes accountability | Critical | Ownership decision |
| V-005 | Contract level | Sets strictness and governance depth | High | Contract level decision |
| V-006 | Dataset/output identity | Defines what is contracted | Critical | Dataset/output reference |
| V-007 | Business meaning and grain | Prevents semantic misuse | Critical | Gold grain/meaning |
| V-008 | Schema expectations | Defines structural obligations | Critical | Schema decision |
| V-009 | Field-level expectations | Defines field meaning, type, requiredness, constraints | High for Standard+ | Field/schema evidence |
| V-010 | Metric/KPI expectations | Prevents metric drift | Critical when metrics exist | Phase 03 KPI evidence |
| V-011 | Freshness/SLA | Defines delivery promise | High | SLA evidence |
| V-012 | Quality expectations | Defines trust and validation rules | Critical | DQ rule evidence |
| V-013 | Volume/completeness | Prevents silent partial output | High when relevant | Completeness rule |
| V-014 | Security/access | Prevents unauthorized use | Critical | Access/security decision |
| V-015 | Lineage/metadata | Supports audit and debugging | High | Lineage decision |
| V-016 | Compatibility/versioning | Defines safe vs breaking changes | High | Versioning policy |
| V-017 | Change management | Defines notification/approval process | High | Change policy |
| V-018 | Deprecation policy | Defines retirement/migration process | Medium/High | Deprecation policy |
| V-019 | Incident/escalation | Defines violation response | High for Standard+ | Escalation policy |
| V-020 | Acceptance/validation | Ensures contract can be checked later | Critical | Validation criteria |
| V-021 | Ownership/approval | Confirms accountability and sign-off | Critical | Approval decision |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 11 Handoff Review | Validate Phase 12 derives from Phase 11 | Gold spec + handoff | Evidence E-001 | Required | |
| Contract Scope Check | Validate contract scope | Phase 11 contract expectation | Evidence E-002 | Required | |
| Contract Inventory Check | Validate required contracts are listed | Contract draft | Evidence E-003 | Required | |
| Producer/Consumer/Owner Check | Validate accountability | Product/owner info | Evidence E-004 | Required | |
| Contract Level Check | Validate level fits consumer risk | Gold contract expectation | Evidence E-005 | Required | |
| Dataset/Output Identity Check | Validate target identity | Gold dataset inventory | Evidence E-006 | Required | |
| Business Meaning/Grain Check | Validate semantic meaning and grain | Gold spec | Evidence E-007 | Required | |
| Schema Expectation Check | Validate structural obligation | Gold/Silver schema | Evidence E-008 | Required | |
| Field-Level Expectation Check | Validate field obligations | Schema/field list | Evidence E-009 | Required for Standard+ | |
| Metric/KPI Expectation Check | Validate metric definitions | Phase 03 + Gold | Evidence E-010 | Required when metrics exist | |
| Freshness/SLA Check | Validate delivery promise | Gold/product SLA | Evidence E-011 | Required for P1 | |
| Quality Expectation Check | Validate DQ obligations | Gold DQ rules | Evidence E-012 | Required | |
| Volume/Completeness Check | Validate completeness expectations | Gold/product expectations | Evidence E-013 | Required when relevant | |
| Security/Access Check | Validate access obligations | Security classification | Evidence E-014 | Required | |
| Lineage/Metadata Check | Validate traceability obligations | Gold lineage | Evidence E-015 | Required | |
| Compatibility/Versioning Check | Validate breaking/compatible changes | Policy draft | Evidence E-016 | Required | |
| Change Management Check | Validate notification/approval behavior | Policy draft | Evidence E-017 | Required | |
| Deprecation Policy Check | Validate retirement behavior | Policy draft | Evidence E-018 | Required for Standard+ | |
| Incident/Escalation Check | Validate contract violation response | Policy draft | Evidence E-019 | Required for Standard+ | |
| Acceptance/Validation Check | Validate future test/check candidates | Contract draft | Evidence E-020 | Required | |
| Ownership/Approval Check | Validate sign-off expectations | Owner/approver info | Evidence E-021 | Required | |
| Phase 12 Done Gate | Decide whether Phase 12 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 12 Handoff | Prepare Phase 13 input | Artifact + Done Gate | Handoff file | Required | |

---

## 7. Support Work Execution Order

```text
1. Phase 11 Handoff Review
2. Contract Scope Check
3. Contract Inventory Check
4. Producer/Consumer/Owner Check
5. Contract Level Check
6. Dataset/Output Identity Check
7. Business Meaning/Grain Check
8. Schema Expectation Check
9. Field-Level Expectation Check
10. Metric/KPI Expectation Check
11. Freshness/SLA Check
12. Quality Expectation Check
13. Volume/Completeness Check
14. Security/Access Check
15. Lineage/Metadata Check
16. Compatibility/Versioning Check
17. Change Management Check
18. Deprecation Policy Check
19. Incident/Escalation Check
20. Acceptance/Validation Check
21. Ownership/Approval Check
22. Update Data Contract Specification from evidence
23. Run Phase 12 Done Gate
24. Create Phase 12 to Phase 13 Handoff
```

---

## 8. Evidence Output Locations

All Phase 12 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-12/
```

Expected evidence file:

```text
_des-output/evidence/phase-12/phase-12-evidence-pack.md
```

---

## 9. Waivers and Deferrals

| Item | Type | Waiver / Deferral Reason | Risk | Accepted By | Date |
| ---- | ---- | ------------------------ | ---- | ----------- | ---- |
| | Support Work / Evidence / Validation | | | | |

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 11 handoff is missing.
* P1 system-facing output has no contract.
* Contract has no producer or consumer.
* Contract has no owner or approver.
* Contract level is missing.
* Schema expectation is missing.
* Grain is missing.
* Freshness/SLA is missing for P1 output.
* Quality expectations are missing.
* Access/security classification is unresolved.
* Change/versioning policy is missing.
* Incident/escalation policy is missing for Standard+ contract.
* Validation criteria are missing.
* Metric definitions conflict with Phase 03.
* Phase 13 would rely on hidden contract assumptions.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 11 artifact and handoff are reviewed.
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
Create or update _des-output/evidence/phase-12/phase-12-evidence-pack.md
```

Reason:

Data contracts require explicit producer, consumer, owner, grain, schema, freshness, quality, security, lineage, versioning, incident, validation, and approval evidence before Phase 12 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 12 validation | |
