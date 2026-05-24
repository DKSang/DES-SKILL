# Step 02 — Lineage, Metadata, Catalog, and Evidence

## Goal

Define metadata categories, catalog requirements, business/technical/operational/reference metadata, lineage depth, ownership, quality/trust metadata, usage metadata, version metadata, audit metadata, metadata capture responsibilities, maintenance policy, and supporting evidence.

This step prepares the Lineage and Metadata Specification and identifies which lineage/metadata decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 17 to Phase 18 handoff, if available
- Phase 17 evidence pack, if available
- Data Source Inventory
- Bronze/Silver/Gold Layer Specifications
- Data Contract Specification
- Transformation Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Semantic Model Specification
- Serving Layer Specification
- User answers from HALT points
- Existing catalog, glossary, lineage, metadata, governance, or observability standards if available

---

## Actions

1. Define metadata scope and non-scope.
2. Define metadata design principles.
3. Define metadata categories:
   - business metadata;
   - technical metadata;
   - operational metadata;
   - reference metadata.
4. Create metadata asset inventory.
5. Define business metadata.
6. Define technical metadata.
7. Define operational metadata.
8. Define reference metadata.
9. Define dataset catalog requirements.
10. Define field and schema metadata.
11. Define metric and KPI metadata.
12. Define contract metadata.
13. Define transformation lineage.
14. Define dataset lineage.
15. Define column-level lineage expectations.
16. Define semantic and serving lineage.
17. Define quality and trust metadata.
18. Define ownership and stewardship metadata.
19. Define usage and consumer metadata.
20. Define change and version metadata.
21. Define audit and compliance metadata.
22. Define metadata capture responsibilities.
23. Define metadata freshness and maintenance policy.
24. Map each critical metadata decision to evidence.
25. Mark unsupported metadata claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
26. Identify required Phase 18 support work.
27. Use HALT checkpoints for unresolved decisions.
28. Prepare draft Lineage and Metadata Specification content.
29. Prepare content for the Phase 18 Support Plan.

---

## Metadata Design Principles

| Principle | Meaning |
|---|---|
| Business-readable | Metadata must help users understand meaning, not only schemas |
| Traceable | Assets should trace upstream and downstream |
| Operationally grounded | Metadata should include run and quality evidence where needed |
| Trust-visible | Quality, freshness, certification, and contract status should be visible |
| Owner-backed | Metadata needs accountable owner/steward/support contact |
| Version-aware | Schema, contract, metric, and semantic changes need versions |
| Scope-aware | Column lineage should be justified by risk and feasibility |
| Maintained | Metadata freshness and ownership must be designed |
| AI-agent-ready where relevant | Agent access needs definitions, lineage, limitations, and trust metadata |
| Tool-neutral | Design metadata requirements, do not implement catalog tooling here |

---

## Metadata Categories

Use these metadata categories:

| Category | Description |
|---|---|
| Business metadata | Definitions, owners, business rules, usage, glossary, KPI meaning |
| Technical metadata | Schema, fields, data types, lineage, transformations, dependencies |
| Operational metadata | Run IDs, schedules, status, counts, errors, runtime, quality results |
| Reference metadata | Codes, units, calendars, mappings, lookup tables, standard classifications |

---

## Metadata Asset Types

Track metadata for:

| Asset Type | Examples |
|---|---|
| Source system | API, database, SaaS, file feed, stream |
| Dataset | Bronze, Silver, Gold tables/files/views |
| Field/column | names, types, meanings, constraints |
| Metric/KPI | formula, owner, status, version |
| Contract | level, clauses, schema version, SLA |
| Transformation | input/output, rules, code owner, run ID |
| Quality rule | rule, severity, result, owner |
| Workflow | schedule, trigger, status, run evidence |
| Semantic object | model, measure, dimension, hierarchy |
| Serving output | dashboard, API, export, reverse ETL, agent interface |
| Reference object | status codes, mappings, units, calendars |

---

## Metadata Evidence Mapping

For every P1 metadata asset, capture evidence status.

| Metadata Field | Evidence Status | Allowed Output |
|---|---|---|
| Phase 17 handoff | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Metadata scope | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Metadata category coverage | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Metadata asset inventory | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Business metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Technical metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Operational metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Reference metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Dataset catalog requirements | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Field/schema metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Metric/KPI metadata | Confirmed / Conflict / Missing / Waived | Approved / Draft / Risk / Blocked |
| Contract metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Transformation lineage | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Dataset lineage | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Column-level lineage | Confirmed / Scoped / Missing / Not applicable | Approved / Draft / Risk |
| Semantic/serving lineage | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Quality/trust metadata | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Ownership/stewardship | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |
| Usage/consumer metadata | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Change/version metadata | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Audit/compliance metadata | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Capture responsibility | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Maintenance policy | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |

---

## HALT — Metadata Category Coverage

Stop if one or more metadata categories are not covered.

### Options

A. Business metadata  
B. Technical metadata  
C. Operational metadata  
D. Reference metadata  
E. All four categories  
F. Custom subset  

### Recommendation

Choose E for data product completeness.

### Required response

Choose one or more options.

---

## HALT — Metadata Asset Inventory

Stop if assets requiring metadata are unclear.

### Options

A. Sources  
B. Bronze/Silver/Gold datasets  
C. Fields/columns  
D. Metrics/KPIs  
E. Contracts  
F. Transformations  
G. Quality rules  
H. Workflows/runs  
I. Semantic objects  
J. Serving outputs  
K. Reference objects  
L. All P1 assets  
M. Custom inventory  

### Required response

Choose one or more options.

---

## HALT — Dataset Catalog Fields

Stop if required catalog fields are unclear.

### Recommended minimum

- asset name;
- asset type;
- layer;
- description;
- business definition;
- owner;
- steward;
- source system;
- upstream dependencies;
- downstream consumers;
- grain;
- schema version;
- contract ID;
- quality/trust status;
- freshness/SLA;
- sensitivity classification;
- last updated;
- usage notes.

### Options

A. Approve recommended minimum  
B. Add project-specific fields  
C. Minimal MVP catalog only  
D. AI/data-agent-ready expanded metadata  
E. Keep Draft pending catalog standard  

### Required response

Choose A/B/C/D/E.

---

## HALT — Business Definition Owner

Stop if business definitions lack accountable owner.

### Options

A. Business data steward  
B. Data product owner  
C. Domain owner  
D. Metric/KPI owner  
E. Data governance owner  
F. Shared ownership  
G. Unknown — keep Draft/Risk  

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Lineage Depth

Stop if lineage depth is unclear.

### Options

A. Dataset-level lineage only  
B. Table/view-level lineage plus transformation mapping  
C. End-to-end source → Bronze → Silver → Gold → Semantic → Serving lineage  
D. Contract-level lineage for governed outputs  
E. Operational run-level lineage  
F. Column-level lineage for critical fields only  
G. Full column-level lineage where feasible  

### Required response

Choose one or more options.

---

## HALT — Column-Level Lineage

Stop if column-level lineage is requested but feasibility or scope is unclear.

### Options

A. Not required in MVP  
B. Required only for certified metrics/KPIs  
C. Required for sensitive fields  
D. Required for contract fields  
E. Required for all Gold fields  
F. Required end-to-end where tooling supports it  
G. Keep Draft pending tooling review  

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Operational Metadata Capture

Stop if run evidence and operational metadata are unclear.

### Recommended fields

- workflow_run_id;
- task_run_id;
- input dataset version;
- output dataset version;
- execution timestamp;
- status;
- row/file/event counts;
- quality result references;
- error logs;
- retry count;
- runtime;
- publish status;
- SLA status.

### Options

A. Approve recommended operational metadata  
B. Add cost/usage metadata  
C. Add contract validation metadata  
D. Add lineage event metadata  
E. Keep Draft pending orchestration/tooling choice  

### Required response

Choose one or more options.

---

## HALT — Quality and Trust Metadata

Stop if quality/trust status exposure is unclear.

### Options

A. Dataset quality status  
B. Rule-level quality result summary  
C. Certification/trust badge  
D. Freshness/SLA status  
E. Known limitations/warnings  
F. Contract compliance status  
G. Consumer-visible trust summary  
H. Data-team-only detailed results  

### Required response

Choose one or more options.

---

## HALT — Contract Metadata

Stop if contracts exist but metadata exposure is unclear.

### Options

A. Contract ID and version  
B. Contract owner  
C. Contract schema version  
D. Contract SLA/freshness level  
E. Contract quality expectations  
F. Contract change/breaking-change status  
G. Contract approval status  
H. Contract compliance result  
I. Not applicable  

### Required response

Choose one or more options.

---

## HALT — Semantic and Serving Metadata

Stop if semantic or serving metadata needs are unclear.

### Options

A. Semantic object name and definition  
B. Metric/measure owner and formula source  
C. Serving output channel and consumer  
D. Serving output trust/freshness/quality display  
E. API/export/data sharing contract metadata  
F. AI/data-agent grounding metadata  
G. Feedback/support metadata  
H. Usage/adoption metadata  

### Required response

Choose one or more options.

---

## HALT — Usage and Consumer Metadata

Stop if downstream usage tracking is unclear.

### Options

A. Downstream dashboards/reports  
B. Semantic model usage  
C. API consumers/calls  
D. ML/AI consumers  
E. Exports/reverse ETL destinations  
F. Query/user activity summary  
G. Feedback/issues linked to asset  
H. Not required in MVP  

### Required response

Choose one or more options.

---

## HALT — Audit and Compliance Metadata

Stop if compliance or audit traceability is required but metadata is unclear.

### Options

A. Access audit metadata  
B. Change/version audit metadata  
C. Contract approval metadata  
D. Data deletion/retention traceability  
E. Sensitive field lineage  
F. Quality gate evidence  
G. Incident history  
H. Not applicable  

### Required response

Choose one or more options.

---

## HALT — Metadata Capture Responsibility

Stop if capture method/responsibility is unclear.

### Options

A. Manually maintained in planning artifacts  
B. Generated from code/config later  
C. Captured from orchestration run logs  
D. Captured from quality rule results  
E. Captured from contracts/specifications  
F. Captured from semantic/serving definitions  
G. Captured by catalog/governance tool later  
H. Shared responsibility by metadata type  

### Required response

Choose one or more options.

---

## HALT — Metadata Maintenance Owner

Stop if no one owns metadata maintenance.

### Options

A. Data engineering team  
B. Data product owner  
C. Business data steward  
D. Governance team  
E. Platform/catalog admin  
F. Shared responsibility model  
G. Unknown — keep Risk  

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

- metadata scope and principles are defined;
- metadata categories are covered;
- metadata asset inventory is created;
- dataset catalog fields are defined;
- business, technical, operational, and reference metadata are specified;
- lineage depth is approved;
- column-level lineage expectations are documented;
- quality/trust, contract, semantic/serving, usage, audit, and version metadata are documented;
- metadata capture responsibilities are documented;
- maintenance ownership is documented;
- evidence mapping is prepared;
- required support work is identified;
- risks and assumptions are explicit;
- draft lineage/metadata specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
