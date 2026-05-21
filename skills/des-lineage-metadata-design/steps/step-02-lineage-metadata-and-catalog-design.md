# Step 02 — Lineage, Metadata, and Catalog Design

## Goal

Define metadata categories, catalog requirements, business/technical/operational/reference metadata, lineage depth, ownership, quality/trust metadata, usage metadata, version metadata, audit metadata, and metadata maintenance responsibilities.

## Required Inputs

- Confirmed context from Step 01
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

## Actions

1. Define metadata scope and non-scope.
2. Define metadata design principles.
3. Define metadata categories:
   - business metadata;
   - technical metadata;
   - operational metadata;
   - reference metadata.
4. Create metadata inventory.
5. Define dataset catalog requirements.
6. Define field and schema metadata.
7. Define metric and KPI metadata.
8. Define contract metadata.
9. Define transformation lineage.
10. Define dataset lineage.
11. Define column-level lineage expectations.
12. Define semantic and serving lineage.
13. Define quality and trust metadata.
14. Define ownership and stewardship metadata.
15. Define usage and consumer metadata.
16. Define change and version metadata.
17. Define audit and compliance metadata.
18. Define metadata capture responsibilities.
19. Define metadata freshness and maintenance policy.
20. Use HALT checkpoints for unresolved decisions.

## Metadata Categories

Use these metadata categories:

| Category | Description |
| --- | --- |
| Business metadata | Definitions, owners, business rules, usage, glossary, KPI meaning |
| Technical metadata | Schema, fields, data types, lineage, transformations, dependencies |
| Operational metadata | Run IDs, schedules, status, counts, errors, runtime, quality results |
| Reference metadata | Codes, units, calendars, mappings, lookup tables, standard classifications |

## Metadata Asset Types

Track metadata for:

| Asset Type | Examples |
| --- | --- |
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

## HALT — Metadata Category Coverage

Stop if one or more metadata categories are not covered.

### Decision needed

Which categories are required?

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

## HALT — Dataset Catalog Fields

Stop if required catalog fields are unclear.

### Decision needed

Approve minimum catalog fields.

### Recommended minimum

- asset name;
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

## HALT — Business Definition Owner

Stop if business definitions lack accountable owner.

### Decision needed

Who owns business definitions?

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

## HALT — Lineage Depth

Stop if lineage depth is unclear.

### Decision needed

Approve lineage depth.

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

## HALT — Column-Level Lineage

Stop if column-level lineage is requested but feasibility or scope is unclear.

### Decision needed

Approve column-level lineage expectation.

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

## HALT — Operational Metadata Capture

Stop if run evidence and operational metadata are unclear.

### Decision needed

Approve operational metadata capture.

### Required fields

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

## HALT — Quality and Trust Metadata

Stop if quality/trust status exposure is unclear.

### Decision needed

What quality/trust metadata should be exposed?

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

## HALT — Usage and Consumer Metadata

Stop if downstream usage tracking is unclear.

### Decision needed

What usage metadata should be captured?

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

## HALT — Audit and Compliance Metadata

Stop if compliance or audit traceability is required but metadata is unclear.

### Decision needed

Approve audit/compliance metadata.

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

## HALT — Metadata Maintenance Owner

Stop if no one owns metadata maintenance.

### Decision needed

Who maintains metadata?

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

## Completion Criteria

This step is complete when:

- metadata scope and principles are defined;
- metadata categories are covered;
- metadata inventory is created;
- dataset catalog fields are defined;
- business, technical, operational, and reference metadata are specified;
- lineage depth is approved;
- column-level lineage expectations are documented;
- quality/trust, usage, audit, and version metadata are documented;
- maintenance ownership is documented;
- draft lineage/metadata specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
