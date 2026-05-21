# Step 01 — Context and Readiness

## Goal

Confirm that Data Contracts is the correct next step and that upstream Gold, Silver, source, requirement, product, and governance context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- workflow status file;
- Gold datasets and outputs;
- Silver datasets that feed Gold;
- source feeds that require upstream expectation;
- data product outputs;
- consumers and producers;
- owners and approvers;
- KPI/metric definitions;
- grain definitions;
- freshness/SLA expectations;
- quality rules;
- access/security classification;
- contract expectations from Phase 4 or Phase 11.

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
   - Silver Layer Specification;
   - Gold Layer Specification.
4. Extract:
   - datasets or outputs marked as requiring contract;
   - Gold datasets and serving direction;
   - Silver datasets with downstream dependency;
   - upstream sources with source contract/SLA expectations;
   - producer, consumer, owner, and approver candidates;
   - schema, grain, KPI, freshness, quality, access, and lineage expectations;
   - change management and versioning risks;
   - open questions.
5. Check whether existing `12-data-contract-specification.md` exists.
6. Decide whether to create a new contract specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- A data contract is not only a schema.
- A contract should capture what the producer promises and what the consumer can rely on.
- Not every dataset needs a full contract; contract level should match risk and consumer dependency.
- Production, external, API-facing, ML-serving, and shared semantic outputs usually need stronger contracts.
- Exploratory outputs may only need minimal contracts.
- If a Gold output will feed a dashboard, semantic model, API, ML system, external partner, or operational workflow, contract expectation should be explicit.
- If a contract depends on unresolved metric definition, route back to Phase 3 or keep as Draft.
- If a contract depends on unresolved Gold grain, route back to Phase 11.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or write pipeline implementation code.

## Contract Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Output | Which dataset/feed/output is covered by the contract? |
| Producer | Who produces or owns the data? |
| Consumer | Who relies on it? |
| Meaning | What does the data represent? |
| Grain | What does one record represent? |
| Schema | What structure and fields are promised? |
| Freshness | How current must the data be? |
| Quality | What quality guarantees exist? |
| Access | Who can use it and under what restrictions? |
| Change | What happens when schema, meaning, or SLA changes? |
| Incident | What happens when the contract is violated? |
| Validation | How is the contract checked? |

## HALT - Readiness Check Failed

Stop if upstream Gold context is missing or too weak to define contracts safely.

### Trigger

Use this HALT if:

- `11-gold-layer-specification.md` is missing;
- P1 Gold outputs are unclear;
- Gold grain is missing;
- Gold consumer or serving path is unclear;
- contract expectations are missing for downstream-facing outputs;
- KPI definitions used by Gold are conflicting;
- access/security classification is unknown.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-gold-layer-design`  
B. Route back to `des-requirements-and-kpis` if KPI definitions are missing  
C. Route back to `des-data-product-definition` if consumer/output ownership is unclear  
D. Continue Phase 12 as Draft using current context  
E. User provides missing contract context now  
F. Stop workflow  

### Recommendation

Choose A if Gold grain/output/serving context is unclear.  
Choose B if KPI definition is missing or conflicting.  
Choose D only if the user accepts that contracts remain Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT - Contract Required Outputs

Stop if it is unclear which datasets or outputs require contracts.

### Decision needed

Which outputs should receive data contracts?

### Options

A. P1 Gold outputs only  
B. P1 Gold outputs plus critical Silver datasets  
C. Source feeds plus Gold outputs  
D. All shared production datasets  
E. Only external/system-facing outputs  
F. Minimal contracts for all P1 datasets, full contracts for system-facing outputs  
G. Custom contract scope  

### Recommendation

Choose F for balanced governance. Choose A for lightweight MVP.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- contract scope is selected or marked unresolved;
- datasets/outputs requiring contracts are identified;
- producer, consumer, owner, grain, schema, freshness, quality, access, and change risks are extracted;
- the agent knows whether to create, update, or defer the contract specification.

## Next Step

After completion, load only:

```text
steps/step-02-contract-boundary-and-obligations.md
```
