# Step 02 — Gold Output, Metric, Serving, and Evidence

## Goal

Define Gold datasets, marts, aggregates, metric-ready outputs, or serving-ready outputs mapped to business questions, KPIs, data product outputs, consumers, Silver inputs, grain, quality, freshness, contracts, and lineage.

This step prepares the Gold Layer Specification and identifies which Gold decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Silver Layer Specification
- Phase 10 to Phase 11 handoff, if available
- Phase 10 evidence pack, if available
- Requirements and KPI Catalog
- Business Question Catalog
- Data Product Specification
- Architecture Decision Record
- User answers from HALT points
- Existing semantic/reporting/API/ML output notes if available

---

## Actions

1. Define Gold scope and non-scope.
2. Define Gold design principles.
3. Map business questions to Gold outputs.
4. Map requirements and KPIs to Gold outputs.
5. Map data product outputs to Gold outputs.
6. Map Silver datasets to Gold datasets.
7. Create Gold dataset inventory.
8. Classify Gold output type.
9. Align Gold outputs to consumers and serving direction.
10. Define grain and aggregation rules.
11. Define metric and KPI definitions used.
12. Decide modeling pattern:
    - dimensional mart;
    - fact/dimension;
    - aggregate table;
    - wide analytical table;
    - metric-ready dataset;
    - feature dataset;
    - API/application-serving dataset;
    - export/reverse ETL output;
    - governance/audit output.
13. Define filtering and slicing expectations.
14. Define history and slowly changing behavior.
15. Define freshness/SLA expectations.
16. Define Gold boundary data quality rules.
17. Define access control and security handling.
18. Define contract expectations.
19. Define lineage and traceability requirements.
20. Define performance and cost considerations.
21. Map each critical Gold decision to evidence.
22. Mark unsupported Gold claims as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.
23. Identify required Phase 11 support work.
24. Use HALT checkpoints for unresolved decisions.
25. Prepare draft Gold specification content.
26. Prepare content for the Phase 11 Support Plan.

---

## Hints

- Gold is where business questions become serving-ready data outputs.
- Gold should be intentionally shaped for consumption.
- Gold grain must be explicit.
- Aggregations must use approved metric definitions.
- If BI/semantic layer is next, Gold should provide stable dimensions/facts or metric-ready inputs.
- If ML/AI is next, Gold may provide feature/label/training/evaluation datasets.
- If API/app serving is next, Gold may provide application-ready read models.
- If multiple consumers need different freshness, definitions, or access levels, split outputs.
- Avoid mixing row-level detail and highly aggregated metrics in one unclear dataset.
- Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.
- Phase 12 will define contracts in detail; Phase 11 only determines contract expectation and contract level.

---

## Gold Design Principles

Use these as defaults unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Question-driven | Gold exists to answer approved business questions or product outputs |
| Metric-consistent | Metrics must align with approved KPI definitions |
| Consumer-ready | Shape data around consumption path and consumer needs |
| Grain-explicit | Every Gold output must declare one-record meaning |
| Traceable | Gold records/metrics must trace back to Silver and upstream evidence |
| Contract-aware | Outputs with consumers should declare contract expectations |
| Quality-gated | Gold should not hide upstream quality or Silver risks |
| Secure | Access and sensitive fields must match consumer/security constraints |
| Not semantic internals | Gold supports semantic models but does not define full semantic layer logic |

---

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

---

## Gold Dataset Standard

Each Gold dataset must define:

| Field | Required? |
...
| Consumer | Required |
| Serving direction | Required |
| Silver inputs | Required |
| Grain | Required |
| Metric/KPI mapping | Required where metrics exist |
| Aggregation rules | Required where aggregated |
| Modeling pattern/output type | Required |
| Slicing/filtering dimensions | Required where relevant |
| History/SCD behavior | Required |
| Freshness/SLA | Required for P1 |
| Quality rules | Required |
| Access/security classification | Required |
| Contract expectation | Required |
| Lineage fields | Required |
| Performance/cost expectation | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Gold Evidence Mapping

For every P1 Gold dataset, capture the evidence status.

| Gold Field                  | Evidence Status                                | Allowed Output            |
| --------------------------- | ---------------------------------------------- | ------------------------- |
| Business question mapping   | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| KPI/requirement mapping     | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Data product output mapping | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Silver-to-Gold mapping      | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Gold dataset boundary       | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Consumer/serving alignment  | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Grain/aggregation           | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Metric definition alignment | Confirmed / Conflict / Missing / Waived        | Approved / Draft / Risk   |
| Modeling pattern            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Filtering/slicing           | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| History/SCD behavior        | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Freshness/SLA               | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Gold quality rules          | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Access/security             | Confirmed / Assumed / Missing / Waived         | Approved / Risk / Blocked |
| Contract expectation        | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Lineage/traceability        | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Performance/cost            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |

---

## Phase 11 Required Support Work

Based on the Gold design above, prepare a support plan using these categories:

| Support Work                              | Required When                                     | Output           |
| ----------------------------------------- | ------------------------------------------------- | ---------------- |
| Phase 10 Handoff Review                   | Always                                            | Evidence pack    |
| Business Question to Gold Mapping Check   | Always                                            | Evidence pack    |
| KPI/Requirement to Gold Mapping Check     | Always when metrics/KPIs exist                    | Evidence pack    |
| Data Product Output to Gold Mapping Check | Always for P1 outputs                             | Evidence pack    |
| Silver-to-Gold Mapping Check              | Always                                            | Evidence pack    |
| Gold Dataset Boundary Check               | Always                                            | Evidence pack    |
| Consumer/Serving Alignment Check          | Always                                            | Evidence pack    |
| Grain/Aggregation Check                   | Always                                            | Evidence pack    |
| Metric Definition Alignment Check         | Required when metrics exist                       | Evidence pack    |
| Modeling Pattern Check                    | Always                                            | Evidence pack    |
| Filtering/Slicing Check                   | Required for BI/reporting/analytics               | Evidence pack    |
| History/SCD Behavior Check                | Required when history/as-of/current-state matters | Evidence pack    |
| Freshness/SLA Check                       | Always for P1                                     | Evidence pack    |
| Gold Boundary Quality Check               | Always                                            | Evidence pack    |
| Access/Security Check                     | Always                                            | Evidence pack    |
| Contract Expectation Check                | Always before Phase 12                            | Evidence pack    |
| Lineage/Traceability Check                | Always                                            | Evidence pack    |
| Performance/Cost Check                    | Always                                            | Evidence pack    |
| Done Gate                                 | Always before marking Done                      | Done Gate result |
| Handoff to Phase 12                       | Always before Phase 12                            | Handoff file     |

---

## Decision Area 1 - Business Question Mapping

Stop if a P1 Gold dataset does not map to an approved business question, requirement, KPI, or product output.

### HALT - Business Question Mapping

#### Why this matters

Gold outputs should exist because they serve a clear downstream need.

#### Options

A. Map to approved business question
B. Map to approved KPI/metric requirement
C. Map to approved data product output
D. Map to operational/ML/API need
E. Mark as exploratory P2/P3
F. Remove or defer dataset

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 2 - Consumer and Serving Alignment

Stop if consumer or serving path is unclear.

### HALT - Consumer and Serving Alignment

#### Options

A. BI/semantic layer
B. Dashboard/report
C. Analyst direct query
D. API/application serving
E. ML/AI training/inference
F. Reverse ETL/export
G. Governance/audit monitoring
H. Multiple serving paths
I. Unknown — keep Draft

#### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## Decision Area 3 - Metric Definition Alignment

Stop if a Gold output uses a metric without an approved definition.

### HALT - Metric Definition Alignment

#### Why this matters

Gold datasets often become trusted metric sources. Wrong definitions create downstream inconsistency.

#### Options

A. Use approved Phase 03 KPI definition
B. Revise Phase 03 KPI definition before Gold design
C. Keep metric as Draft and mark Gold as Risk
D. Exclude metric from first release
E. Create separate candidate metric output

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 4 - Grain and Aggregation Rule

Stop if Gold grain or aggregation rule is unclear.

### HALT - Grain and Aggregation Rule

#### Required fields

* one record represents what;
* aggregation level;
* time grain if any;
* dimensional slicing fields;
* metric aggregation rule;
* handling of late/corrected data.

#### Options

A. Transaction/event-level grain
B. Entity-level grain
C. Entity-by-time-period grain
D. Dimension-by-time-period aggregate grain
E. Consumer/use-case-specific read model grain
F. ML feature/entity-period grain
G. Custom grain
H. Keep Draft pending KPI/consumer decision

#### Required response

Choose A/B/C/D/E/F/G/H and describe grain.

---

## Decision Area 5 - Modeling Pattern Decision

Stop if Gold model type is unclear.

### HALT - Modeling Pattern Decision

#### Options

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

#### Recommendation

Choose A/D for BI + semantic layer use cases.
Choose F for application/API serving.
Choose G for ML/AI outputs.

#### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## Decision Area 6 - Filtering and Slicing Expectations

Stop if dimensions, filters, or slicing behavior required by consumers are unclear.

### HALT - Filtering and Slicing Expectations

#### Options

A. Time/date slicing
B. Geography/region slicing
C. Entity/customer/product/crop/asset slicing
D. Status/category slicing
E. Scenario/version slicing
F. Security-driven slicing
G. No slicing required
H. Custom slicing

#### Required response

Choose all applicable options and list required dimensions.

---

## Decision Area 7 - History and Slowly Changing Behavior

Stop if historical behavior affects correctness.

### HALT - History and Slowly Changing Behavior

#### Trigger examples

* dimensions change over time;
* metrics need historical as-of accuracy;
* late-arriving facts update old periods;
* corrected Silver data changes Gold outputs;
* consumer needs current view and historical view.

#### Options

A. Current-state only
B. Full historical snapshots
C. Slowly changing dimension Type 1 overwrite
D. Slowly changing dimension Type 2 history
E. Periodic snapshot fact/aggregate
F. Recompute affected windows on correction
G. Keep immutable event facts and derive history later
H. Custom behavior

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 8 - Freshness and SLA

Stop if freshness/SLA for a P1 Gold output is unclear.

### HALT - Freshness and SLA

#### Options

A. Same as Silver refresh
B. Daily by specified time
C. Hourly/sub-hourly
D. Event/streaming aligned
E. On-demand/manual
F. Best effort with documented limitation
G. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G and specify timezone/time where relevant.

---

## Decision Area 9 - Gold Boundary Data Quality Rules

Stop if quality rules are unclear.

### HALT - Gold Boundary Data Quality Rules

#### Options

A. Required dimensions/keys not null
B. Uniqueness at declared grain
C. Referential integrity to dimensions/reference tables
D. Metric reconciliation to source/Silver totals
E. Freshness SLA pass
F. No blocked Silver quality issues
G. Valid metric ranges/thresholds
H. Consumer acceptance review
I. Custom rules

#### Required response

Choose all applicable rules and severity.

---

## Decision Area 10 - Access Control and Security

Stop if Gold output contains sensitive, confidential, regulated, or restricted data.

### HALT - Access Control and Security

#### Options

A. Public/open output
B. Internal standard access
C. Restricted business access
D. Role-based access by consumer group
E. Row-level or column-level security required
F. Masking/tokenization required
G. Governance/security review required
H. Custom policy

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 11 - Contract Expectation

Stop if Gold output is consumed by downstream systems, dashboards, APIs, ML, or external users and contract expectation is unclear.

### HALT - Contract Expectation

#### Options

A. No contract needed for exploratory output
B. Minimal contract: name, grain, owner, freshness, fields
C. Standard contract: schema, grain, quality, SLA, lineage, change policy
D. Full contract: schema, SLA, quality, access, versioning, deprecation, incident policy
E. External/regulated contract requiring governance review
F. Defer to Phase 12

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 12 - Lineage and Traceability

Stop if Gold output cannot trace back to Silver/Bronze/source evidence.

### HALT - Lineage and Traceability

#### Required fields

* Gold dataset name;
* Silver input dataset(s);
* transformation run ID;
* metric definition version;
* source/Silver date window;
* upstream quality status;
* pipeline run ID;
* source system lineage where available.

#### Options

A. Approve recommended lineage fields
B. Add project-specific lineage fields
C. Reduce lineage fields for MVP
D. Keep lineage decision Draft/Risk

#### Required response

Choose A/B/C/D.

---

## Decision Area 13 - Performance and Cost Expectation

Stop if serving path, query frequency, data volume, or aggregation strategy could affect performance/cost.

### HALT - Performance and Cost Expectation

#### Options

A. Basic performance; optimize later
B. Pre-aggregate for common queries
C. Partition/cluster/index by access pattern later in implementation phase
D. Separate heavy exploration from production outputs
E. Cache/materialize serving outputs
F. Cost/performance review required before implementation
G. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* Gold scope and principles are defined;
* each P1 business question/product output maps to at least one Gold output or is deferred with reason;
* each P1 Gold dataset has consumer, serving direction, Silver inputs, grain, model type, quality rules, freshness, access policy, lineage, and status;
* metric/KPI usage aligns with Phase 03;
* contract expectations are identified;
* performance/cost considerations are documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft Gold specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
