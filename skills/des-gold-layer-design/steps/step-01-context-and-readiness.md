# Step 01 — Context and Readiness

## Goal

Confirm that Gold Layer Design is the correct next step and that upstream Silver, KPI, product, question, architecture, and serving context is available.

## Required Inputs

Look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/08-ingestion-specification.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- workflow status file;
- P1/P2 business questions;
- approved KPIs and metric definitions;
- P1/P2 functional and non-functional requirements;
- data product outputs;
- serving direction from architecture;
- Silver dataset inventory;
- Silver grain and identity rules;
- Silver quality risks;
- freshness/SLA expectations;
- security/privacy constraints;
- consumer access expectations.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Data Source Inventory;
   - Conceptual Domain Model;
   - Architecture Decision Record;
   - Ingestion Specification;
   - Bronze Layer Specification;
   - Silver Layer Specification.
4. Extract:
   - P1/P2 business questions;
   - approved KPIs and candidate metrics;
   - P1/P2 product outputs;
   - serving direction;
   - consumer groups;
   - Silver datasets and grains;
   - Silver quality risks and unresolved identity issues;
   - required dimensions/slices from questions;
   - freshness/SLA expectations;
   - access/security constraints;
   - open questions.
5. Check whether existing `11-gold-layer-specification.md` exists.
6. Decide whether to create a new Gold specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Gold should be designed from business questions and product outputs, not from source tables.
- Gold outputs should be consumer-ready or serving-ready.
- Silver gives trusted entities/events; Gold packages them for use cases.
- Gold may be dimensional marts, aggregate tables, wide tables, feature datasets, serving datasets, export-ready outputs, or metric-ready datasets.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or write pipeline implementation code.
- Do not duplicate semantic model logic unless the Gold dataset itself is the approved metrics layer input.
- If a KPI formula is not approved in Phase 3, keep it Draft.
- If Silver identity or source-of-truth is unresolved, mark Gold as Risk.
- If different consumers need different grains or definitions, split Gold outputs or stage releases.
- Avoid one giant Gold table for every possible question.

## Gold Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Question | Which business question does this Gold output answer? |
| Consumer | Who uses this Gold output? |
| Serving | How will this output be consumed later? |
| Metric | Which approved KPI/metric does it support? |
| Grain | What does one Gold record represent? |
| Aggregation | What calculations or rollups are needed? |
| Slicing | Which dimensions or filters must be supported? |
| Source | Which Silver datasets feed it? |
| Freshness | How fresh must the output be? |
| Quality | What makes this output trusted enough to serve? |
| Contract | Does this output need a data contract? |

## HALT - Readiness Check Failed

Stop if upstream Silver context, architecture context, or source context is missing or too weak to design Gold safely.

### Trigger

Use this HALT if:

- `10-silver-layer-specification.md` is missing;
- P1 Silver datasets are not defined;
- Silver grain or identity is unresolved for required concepts;
- Silver quality risks block P1 Gold outputs;
- required KPI definitions are missing or conflicting;
- serving direction is unclear.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-silver-layer-design`  
B. Route back to `des-requirements-and-kpis` if KPI definitions are missing  
C. Route back to `des-data-product-definition` if product output/consumer is unclear  
D. Continue Phase 11 as Draft using current context  
E. User provides missing Gold context now  
F. Stop workflow  

### Recommendation

Choose A if Silver grain/identity/quality is unresolved.  
Choose B if metric formulas or KPI ownership are missing.  
Choose D only if the user accepts that Gold design remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT - Gold Dataset Boundary

Stop if it is unclear how many Gold outputs are needed or what each output serves.

### Decision needed

How should Gold dataset boundaries be defined?

### Options

A. One Gold dataset per business question group  
B. One Gold dataset per data product output  
C. One Gold mart per consumer/use case  
D. Dimensional mart with facts and dimensions  
E. Metric-ready aggregate datasets  
F. ML/AI feature or training dataset  
G. API/application-serving dataset  
H. Export/reverse ETL-ready dataset  
I. Custom boundary  
J. Keep as Draft pending serving clarification  

### Recommendation

Choose B or C for data product alignment. Choose D when BI/semantic/reporting is the main serving path.

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1/P2 business questions are identified;
- P1/P2 Silver datasets are identified;
- approved KPI/metric definitions are extracted;
- product output and serving direction are known or marked unresolved;
- Gold dataset boundary decision is known or marked unresolved;
- the agent knows whether to create, update, or defer the Gold specification.

## Next Step

After completion, load only:

```text
steps/step-02-gold-output-and-metric-design.md
```
