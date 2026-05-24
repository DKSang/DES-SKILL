# Phase 05 Support Plan — Data Source Assessment

## 1. Purpose

This support plan defines the validation support work required to complete Phase 05 Data Source Assessment.

Phase 05 does not require production ingestion pipeline development, medallion schema coding, or transformation implementation.

It requires technical and data evidence that the candidate source systems are legally/technically accessible, authoritative, licensed, stable, and conformed before Phase 06 Domain Modeling begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 05 |
| Phase Name | Data Source Assessment |
| Phase Core Skill | `des-data-source-assessment` |
| Initial Artifact | `_des-output/planning-artifacts/05-data-source-inventory.md` |
| Upstream Artifact | `_des-output/planning-artifacts/04-data-product-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-04-to-05-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 04 Data Product Specification | Yes | Found / Missing / Partial | |
| Phase 04 to Phase 05 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 04 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 04 Done Gate | Recommended | Found / Missing / Partial | |
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
| V-001 | Phase 04 handoff alignment | Ensures sources trace to validated product outputs | Critical | Phase 04 handoff or accepted risk |
| V-002 | Source need mapping | Confirms no P1 product outputs/needs lack sources | Critical | Mapping table |
| V-003 | Candidate source inventory | Ensures all sources are identified and cataloged | Critical | Inventory check |
| V-004 | Source access | Prevents building pipelines for inaccessible systems | Critical | Connection test / API probe |
| V-005 | Schema definition | Downstream models/contracts depend on source schema | Critical | Schema snap / docs / sample columns |
| V-006 | Sample data | Downstream mapping requires actual data format | Critical | Sample response / file / query sample |
| V-007 | Quality profile | Outliers, nulls, duplicates affect ingestion design | Critical | Quality profile / sampling check |
| V-008 | Freshness & update pattern | Affects ingestion scheduling and pipeline type | High | Schedule / timestamp check |
| V-009 | Licensing & terms | Usage quotas, rates, and costs must be acceptable | High | License/terms review |
| V-010 | Security & privacy | Masking, PII indicator, security limits guide storage | High | Security classification check |
| V-011 | Source of truth | Authorities must be defined for business concepts | High | Authority mappings |
| V-012 | Ingestion feasibility | Summarizes feasibility rating for Phase 06/08 | High | Feasibility checklist |

---

## 6. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 04 Handoff Review | Validate source candidates follow product outputs | Phase 04 handoff + artifact | Evidence item E-001 | Required | |
| Source Need Mapping Check | Check mapping of product outputs to candidate sources | Specification + candidates | Evidence item E-002 | Required | |
| Candidate Source Inventory Check | Verify all candidate sources are listed and typed | Candidates | Evidence item E-003 | Required | |
| Source Access Probe | Test technical connectivity (ping, connection, login) | Endpoint Endpoints / API keys | Evidence item E-004 | Required | |
| Schema Inspection | Inspect table schemas, schemas, or JSON structures | Database schemas / API docs | Evidence item E-005 | Required | |
| Sample Data or Response Capture | Fetch API response sample, csv row, or DB records | Source endpoints | Evidence item E-006 | Required | |
| Data Quality Profile | Analyze sample for nulls, duplicates, and ranges | Data samples | Evidence item E-007 | Required | |
| Freshness Pattern Check | Identify update frequencies and update schemas | Data samples / owner notes | Evidence item E-008 | Required | |
| License/Terms Review | Review API terms, costs, licenses, and quotas | Terms of service / pricing | Evidence item E-009 | Required | |
| Security Classification Check | Review data sensitivity (PII, PCI, GDPR, HIPAA) | Data samples / docs | Evidence item E-010 | Required | |
| Source of Truth Check | Reconcile overlapping source fields/concepts | Candidates | Evidence item E-011 | Required | |
| Ingestion Feasibility Check | Rate final ingestion readiness for each source | Assessment details | Evidence item E-012 | Required | |
| Phase 05 Done Gate | Decide whether Phase 05 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 05 Handoff | Prepare Phase 06 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 04 Handoff Review
2. Source Need Mapping Check
3. Candidate Source Inventory Check
4. Source Access Probe
5. Schema Inspection
6. Sample Data or Response Capture
7. Data Quality Profile
8. Freshness Pattern Check
9. License/Terms Review
10. Security Classification Check
11. Source of Truth Check
12. Ingestion Feasibility Check
13. Update Data Source Inventory from evidence
14. Run Phase 05 Done Gate
15. Create Phase 05 to Phase 06 Handoff
```

---

## 8. Evidence Output Locations

All Phase 05 evidence should be stored or referenced under:

```text
_des-output/evidence/phase-05/
```

Expected evidence files:

| Evidence File | Supports Validation ID | Status |
|---|---|---|
| `_des-output/evidence/phase-05/phase-05-evidence-pack.md` | V-001 to V-012 | Not Started / In Progress / Collected / Accepted / Rejected |

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

* Phase 04 handoff is missing.
* Product outputs map to no candidate sources.
* Source owner is unknown.
* Source of truth is conflicting and unresolved.
* Access method or permission is unknown or blocked.
* Upstream freshness or reliability is unclear.
* Source contains sensitive PII/credential data.
* Source cost, terms, license, or quotas block usage.
* Ingestion feasibility is unknown.
* Probe evidence is missing for a P1 source and not waived.
* Phase 05 Done Gate fails.
* User wants to skip Phase 05 without accepting risk.

---

## 11. Completion Criteria

This support plan is complete when:

* [ ] Phase 05 context is summarized.
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
Create or update _des-output/evidence/phase-05/phase-05-evidence-pack.md
```

Reason:

Data Source Assessment decisions need explicit technical/data evidence or accepted risk before Phase 05 can be marked Done.

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 05 validation | |
