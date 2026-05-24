# Phase 11 Support Plan — Gold Layer Design

## 1. Purpose

This support plan defines the validation work required to complete Phase 11 Gold Layer Design.

Phase 11 does not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD workflow files, or code.

It requires evidence that Gold outputs are mapped to business questions, KPIs, data product outputs, consumers, approved Silver inputs, grain, aggregation, quality, freshness, contract expectation, and lineage before Data Contracts begin.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 11 |
| Phase Name | Gold Layer Design |
| Phase Core Skill | `des-gold-layer-design` |
| Initial Artifact | `_des-output/planning-artifacts/11-gold-layer-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/10-silver-layer-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-10-to-11-handoff.md` |
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
| Phase 02 Business Question Catalog | Yes | Found / Missing / Partial | |
| Phase 03 Requirements and KPI Catalog | Yes | Found / Missing / Partial | |
| Phase 04 Data Product Specification | Yes | Found / Missing / Partial | |
| Phase 05 Data Source Inventory | Recommended | Found / Missing / Partial | |
| Phase 06 Conceptual Domain Model | Recommended | Found / Missing / Partial | |
| Phase 07 Architecture Decision Record | Recommended | Found / Missing / Partial | |
| Phase 08 Ingestion Specification | Recommended | Found / Missing / Partial | |
| Phase 09 Bronze Layer Specification | Recommended | Found / Missing / Partial | |
| Phase 10 Silver Layer Specification | Yes | Found / Missing / Partial | |
| Phase 10 to Phase 11 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 10 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 10 Done Gate | Recommended | Found / Missing / Partial | |
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
| V-001 | Phase 10 handoff alignment | Ensures Gold follows approved Silver constraints | Critical | Phase 10 handoff or accepted risk |
| V-002 | Business question to Gold mapping | Ensures Gold exists for real business need | Critical | Phase 02 mapping |
| V-003 | KPI/requirement to Gold mapping | Ensures Gold metrics trace to approved definitions | Critical where metrics exist | Phase 03 mapping |
| V-004 | Data product output to Gold mapping | Ensures Gold supports approved product output | Critical | Phase 04 mapping |
| V-005 | Silver-to-Gold mapping | Ensures Gold uses approved trusted inputs | Critical | Silver mapping |
| V-006 | Gold dataset boundary | Prevents vague or monolithic Gold outputs | High | Boundary decision |
| V-007 | Consumer/serving alignment | Ensures output is shaped for real consumption | Critical | Consumer/serving decision |
| V-008 | Grain/aggregation | Prevents incorrect metrics and joins | Critical | Grain/aggregation decision |
| V-009 | Metric definition alignment | Prevents metric drift and conflicting numbers | Critical where metrics exist | KPI definition evidence |
| V-010 | Modeling pattern | Ensures Gold pattern fits serving path | High | Pattern decision |
| V-011 | Filtering/slicing | Ensures required dimensions/filters are supported | High | Question/consumer evidence |
| V-012 | History/SCD behavior | Prevents incorrect historical/as-of reporting | High where history matters | History decision |
| V-013 | Freshness/SLA | Ensures output meets product expectation | High | SLA decision |
| V-014 | Gold boundary quality | Defines trust gate before consumption | Critical | DQ rule evidence |
| V-015 | Access/security | Prevents exposure of restricted data | Critical when sensitive | Security decision |
| V-016 | Contract expectation | Enables Phase 12 data contracts | High | Contract level decision |
| V-017 | Lineage/traceability | Enables audit and debugging back to Silver/Bronze/source | Critical | Lineage fields |
| V-018 | Performance/cost | Ensures serving pattern is feasible | Medium/High | Cost/performance note |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 10 Handoff Review | Validate Phase 11 derives from Phase 10 | Silver spec + handoff | Evidence item E-001 | Required | |
| Business Question to Gold Mapping Check | Map Gold to questions | Phase 02 + Gold draft | Evidence item E-002 | Required | |
| KPI/Requirement to Gold Mapping Check | Map Gold to requirements/KPIs | Phase 03 + Gold draft | Evidence item E-003 | Required where metrics exist | |
| Data Product Output to Gold Mapping Check | Map Gold to product outputs | Phase 04 + Gold draft | Evidence item E-004 | Required | |
| Silver-to-Gold Mapping Check | Validate approved Silver inputs | Silver spec + handoff | Evidence item E-005 | Required | |
| Gold Dataset Boundary Check | Validate boundaries and non-monolithic design | Gold draft | Evidence item E-006 | Required | |
| Consumer/Serving Alignment Check | Validate consumer and serving path | Phase 04/07 + Gold draft | Evidence item E-007 | Required | |
| Grain/Aggregation Check | Validate one-record meaning and calculations | Gold draft + KPI definitions | Evidence item E-008 | Required | |
| Metric Definition Alignment Check | Validate metric formulas against Phase 03 | Phase 03 + Gold draft | Evidence item E-009 | Required where metrics exist | |
| Modeling Pattern Check | Validate dimensional/aggregate/wide/API/ML/export pattern | Gold draft | Evidence item E-010 | Required | |
| Filtering/Slicing Check | Validate required dimensions and filters | Phase 02/04 + Gold draft | Evidence item E-011 | Required where relevant | |
| History/SCD Behavior Check | Validate current/historical/as-of logic | Gold draft | Evidence item E-012 | Required where relevant | |
| Freshness/SLA Check | Validate refresh expectation | Phase 03/04/07 + Gold draft | Evidence item E-013 | Required for P1 |
| Gold Boundary Quality Check | Validate output trust rules | Gold draft + Silver quality | Evidence item E-014 | Required | |
| Access/Security Check | Validate consumer access and sensitivity | Phase 10 + product output | Evidence item E-015 | Required | |
| Contract Expectation Check | Validate contract level for Phase 12 | Gold draft | Evidence item E-016 | Required | |
| Lineage/Traceability Check | Validate trace to Silver/Bronze/source | Silver/Gold metadata | Evidence item E-017 | Required | |
| Performance/Cost Check | Validate cost and query serving feasibility | Gold draft + serving direction | Evidence item E-018 | Required | |
| Phase 11 Done Gate | Decide whether Phase 11 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 11 Handoff | Prepare Phase 12 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 10 Handoff Review
2. Business Question to Gold Mapping Check
3. KPI/Requirement to Gold Mapping Check
4. Data Product Output to Gold Mapping Check
5. Silver-to-Gold Mapping Check
6. Gold Dataset Boundary Check
7. Consumer/Serving Alignment Check
8. Grain/Aggregation Check
9. Metric Definition Alignment Check
10. Modeling Pattern Check
11. Filtering/Slicing Check
12. History/SCD Behavior Check
13. Freshness/SLA Check
14. Gold Boundary Quality Check
15. Access/Security Check
16. Contract Expectation Check
17. Lineage/Traceability Check
18. Performance/Cost Check
19. Update Gold Layer Specification from evidence
20. Run Phase 11 Done Gate
21. Create Phase 11 to Phase 12 Handoff
```

---

## 8. Evidence Output Locations

All Phase 11 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-11/
```

Expected evidence files:

| Evidence File                                             | Supports Validation ID | Status                                                      |
| --------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | V-001 to V-018         | Not Started / In Progress / Collected / Accepted / Rejected |

Optional evidence subpaths:

```text
_des-output/evidence/phase-11/metric-alignment/
_des-output/evidence/phase-11/grain-check/
_des-output/evidence/phase-11/aggregation-review/
_des-output/evidence/phase-11/serving-query/
_des-output/evidence/phase-11/access-security/
_des-output/evidence/phase-11/contract-expectations/
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
* Blocked by missing KPI/Silver/product/consumer decision
* Out of scope for current workflow mode
* Replaced by another support action

---

## 10. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 10 handoff is missing.
* P1 business question has no Gold output.
* P1 product output has no Gold dataset.
* Gold output has no consumer or serving path.
* Gold grain is missing.
* KPI definition conflicts with Phase 03.
* Aggregation rule is unclear.
* Model type is unclear.
* Required slices/filters are missing.
* Freshness/SLA is missing for P1 output.
* Gold quality rules are missing.
* Access/security handling is unresolved.
* Contract expectation is missing for downstream system-facing output.
* Lineage back to Silver/Bronze/source is incomplete.
* Phase 12 would rely on hidden Gold assumptions.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 10 artifact and handoff are reviewed.
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
Create or update _des-output/evidence/phase-11/phase-11-evidence-pack.md
```

Reason:

Gold design requires explicit business question, KPI, product output, Silver input, grain, aggregation, serving, quality, contract, and lineage evidence before Phase 11 can be marked Done.

---

## 13. Change Log

| Date       | Change               | Reason              | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 11 validation |            |
