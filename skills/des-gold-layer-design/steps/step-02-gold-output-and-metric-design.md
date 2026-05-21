# Step 02 — Gold Output and Metric Design

## Goal

Define Gold datasets, marts, aggregates, metric-ready outputs, or serving-ready outputs mapped to business questions, KPIs, consumers, Silver inputs, grain, quality, freshness, contracts, and lineage.

## Required Inputs

- Confirmed context from Step 01
- Silver Layer Specification
- Requirements and KPI Catalog
- Business Question Catalog
- Data Product Specification
- Architecture Decision Record
- User answers from HALT points
- Existing semantic/reporting/API/ML output notes if available

## Actions

1. Define Gold scope and non-scope.
2. Define Gold design principles.
3. Map business questions to Gold outputs.
4. Map requirements and KPIs to Gold outputs.
5. Map Silver datasets to Gold datasets.
6. Create Gold dataset inventory.
7. Classify Gold output type.
8. Align Gold outputs to consumers and serving direction.
9. Define grain and aggregation rules.
10. Define metric and KPI definitions used.
11. Decide modeling pattern:
    - dimensional mart;
    - fact/dimension;
    - aggregate table;
    - wide analytical table;
    - metric-ready dataset;
    - feature dataset;
    - API/application-serving dataset;
    - export/reverse ETL output;
    - governance/audit output.
12. Define filtering and slicing expectations.
13. Define history and slowly changing behavior.
14. Define freshness/SLA expectations.
15. Define Gold boundary data quality rules.
16. Define access control and security handling.
17. Define contract expectations.
18. Define lineage and traceability requirements.
19. Define performance and cost considerations.
20. Use HALT checkpoints for unresolved decisions.

## Hints

- Gold is where business questions become serving-ready data outputs.
- Gold should be intentionally shaped for consumption.
- Gold grain must be explicit.
- Aggregations must use approved metric definitions.
- If BI/semantic layer is next, Gold should provide stable dimensions/facts or metric-ready inputs.
- If ML/AI is next, Gold may provide feature/label/training/evaluation datasets.
- If API/app serving is next, Gold may provide application-ready read models.
- If multiple consumers need different freshness or definitions, split outputs.
- Avoid mixing row-level detail and highly aggregated metrics in one unclear dataset.
- Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.

## Gold Output Types

Classify each Gold dataset as one or more:

| Output Type | Description |
| --- | --- |
| Dimensional mart | Fact and dimension model for BI/semantic consumption |
| Aggregate table | Precomputed metric or summary table |
| Wide analytical table | Denormalized table for analyst exploration |
| Metric-ready dataset | Stable input for semantic/metrics layer |
| Report-ready dataset | Dataset shaped for a known report/dashboard |
| API/application-serving dataset | Read-optimized dataset for app/API consumption |
| ML/AI feature dataset | Features for training or inference |
| ML/AI label dataset | Labels/outcomes for model training/evaluation |
| Operational output | Output used to trigger or support operations |
| Reverse ETL/export output | Dataset pushed to business tools or partners |
| Governance/audit output | Output for quality, lineage, compliance, or monitoring |

## Gold Dataset Standard

Each Gold dataset must define:

| Field | Required? |
| --- | --- |
| Dataset name | Required |
| Business question mapping | Required |
| Consumer | Required |
| Serving direction | Required |
| Silver inputs | Required |
| Grain | Required |
| Metric/KPI mapping | Required where metrics exist |
| Aggregation rules | Required where aggregated |
| Slicing/filtering dimensions | Required where relevant |
| Freshness/SLA | Required for P1 |
| Quality rules | Required |
| Access/security classification | Required |
| Contract expectation | Required |
| Lineage fields | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## HALT - Business Question Mapping

Stop if a P1 Gold dataset does not map to an approved business question, requirement, KPI, or product output.

### Why this matters

Gold outputs should exist because they serve a clear downstream need.

### Decision needed

Approve the need for target Gold dataset.

### Options

A. Map to approved business question
B. Map to approved KPI/metric requirement
C. Map to approved data product output
D. Map to operational/ML/API need
E. Mark as exploratory P2/P3
F. Remove or defer dataset

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Consumer and Serving Alignment

Stop if consumer or serving path is unclear.

### Decision needed

Approve serving direction for target Gold dataset.

### Options

A. BI/semantic layer
B. Dashboard/report
C. Analyst direct query
D. API/application serving
E. ML/AI training/inference
F. Reverse ETL/export
G. Governance/audit monitoring
H. Multiple serving paths
I. Unknown — keep Draft

### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## HALT - Metric Definition Alignment

Stop if a Gold output uses a metric without an approved definition.

### Why this matters

Gold datasets often become trusted metric sources. Wrong definitions create downstream inconsistency.

### Decision needed

How should the metric be handled?

### Options

A. Use approved Phase 3 KPI definition
B. Revise Phase 3 KPI definition before Gold design
C. Keep metric as Draft and mark Gold as Risk
D. Exclude metric from first release
E. Create separate candidate metric output

### Required response

Choose A/B/C/D/E.

---

## HALT - Grain and Aggregation Rule

Stop if Gold grain or aggregation rule is unclear.

### Why this matters

Gold grain controls correctness, join behavior, metric calculation, semantic model design, and consumer trust.

### Decision needed

Approve grain and aggregation rule for target Gold dataset.

### Required fields

* one record represents what;
* aggregation level;
* time grain if any;
* dimensional slicing fields;
* metric aggregation rule;
* handling of late/corrected data.

### Options

A. Transaction/event-level grain
B. Entity-level grain
C. Entity-by-time-period grain
D. Dimension-by-time-period aggregate grain
E. Consumer/use-case-specific read model grain
F. ML feature/entity-period grain
G. Custom grain
H. Keep Draft pending KPI/consumer decision

### Required response

Choose A/B/C/D/E/F/G/H and describe grain.

---

## HALT - Modeling Pattern Decision

Stop if Gold model type is unclear.

### Decision needed

Approve modeling pattern.

### Options

A. Star schema / dimensional mart
B. Aggregate table
C. Wide analytical table
D. Metric-ready dataset
E. Report-specific dataset
F. API/application read model
G. ML/AI feature or label dataset
H. Reverse ETL/export dataset
I. Governance/audit dataset
J. Custom pattern

### Recommendation

Choose A/D for BI + semantic layer use cases.
Choose F for application/API serving.
Choose G for ML/AI outputs.

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## HALT - History and Slowly Changing Behavior

Stop if historical behavior affects correctness.

### Trigger examples

* dimensions change over time;
* metrics need historical as-of accuracy;
* late-arriving facts update old periods;
* corrected Silver data changes Gold outputs;
* consumer needs current view and historical view.

### Decision needed

Approve history behavior.

### Options

A. Current-state only
B. Full historical snapshots
C. Slowly changing dimension Type 1 overwrite
D. Slowly changing dimension Type 2 history
E. Periodic snapshot fact/aggregate
F. Recompute affected windows on correction
G. Keep immutable event facts and derive history later
H. Custom behavior

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT - Freshness and SLA

Stop if freshness/SLA for a P1 Gold output is unclear.

### Decision needed

Approve freshness/SLA.

### Options

A. Same as Silver refresh
B. Daily by specified time
C. Hourly/sub-hourly
D. Event/streaming aligned
E. On-demand/manual
F. Best effort with documented limitation
G. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G and specify timezone/time where relevant.

---

## HALT - Gold Boundary Data Quality Rules

Stop if quality rules are unclear.

### Decision needed

What must be true before this Gold output can be trusted?

### Options

A. Required dimensions/keys not null
B. Uniqueness at declared grain
C. Referential integrity to dimensions/reference tables
D. Metric reconciliation to source/Silver totals
E. Freshness SLA pass
F. No blocked Silver quality issues
G. Valid metric ranges/thresholds
H. Consumer acceptance review
I. Custom rules

### Required response

Choose all applicable rules and severity.

---

## HALT - Access Control and Security

Stop if Gold output contains sensitive, confidential, regulated, or restricted data.

### Decision needed

Approve Gold access/security handling.

### Options

A. Public/open output
B. Internal standard access
C. Restricted business access
D. Role-based access by consumer group
E. Row-level or column-level security required
F. Masking/tokenization required
G. Governance/security review required
H. Custom policy

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT - Contract Expectation

Stop if Gold output is consumed by downstream systems, dashboards, APIs, ML, or external users and contract expectation is unclear.

### Decision needed

What contract level is needed?

### Options

A. No contract needed for exploratory output
B. Minimal contract: name, grain, owner, freshness, fields
C. Standard contract: schema, grain, quality, SLA, lineage, change policy
D. Full contract: schema, SLA, quality, access, versioning, deprecation, incident policy
E. External/regulated contract requiring governance review
F. Defer to Phase 12

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Lineage and Traceability

Stop if Gold output cannot trace back to Silver/Bronze/source evidence.

### Decision needed

Approve lineage requirements.

### Required fields

* Gold dataset name;
* Silver input dataset(s);
* transformation run ID;
* metric definition version;
* source/Silver date window;
* upstream quality status;
* pipeline run ID;
* source system lineage where available.

### Options

A. Approve recommended lineage fields
B. Add project-specific lineage fields
C. Reduce lineage fields for MVP
D. Keep lineage decision Draft/Risk

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* Gold scope and principles are defined;
* each P1 business question/product output maps to at least one Gold output or is deferred with reason;
* each P1 Gold dataset has consumer, serving direction, Silver inputs, grain, model type, quality rules, freshness, access policy, lineage, and status;
* metric/KPI usage aligns with Phase 3;
* contract expectations are identified;
* risks and assumptions are explicit;
* draft Gold specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
