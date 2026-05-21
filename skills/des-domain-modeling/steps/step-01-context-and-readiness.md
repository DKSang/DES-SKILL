# Step 01 — Context and Readiness

## Goal

Confirm that Domain Modeling is the correct next step and that upstream business, product, requirement, and source context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- workflow status file;
- known product outputs;
- P1/P2 business questions;
- P1/P2 requirements and KPIs;
- source-to-product mapping;
- source-to-requirement/KPI mapping;
- source-of-truth decisions;
- known term conflicts;
- known source quality/schema risks.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Data Source Inventory.
4. Extract:
   - P1/P2 use cases;
   - P1/P2 business questions;
   - data product outputs;
   - candidate business concepts;
   - candidate source systems;
   - source-of-truth decisions;
   - source conflicts;
   - terms already used in artifacts;
   - candidate metrics and grains;
   - known temporal concepts;
   - open questions.
5. Check whether existing `06-conceptual-domain-model.md` exists.
6. Decide whether to create a new conceptual model, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Domain modeling should start from business meaning, not from source tables.
- Source schemas are evidence, not the model itself.
- Do not use this skill to design physical schemas, database tables, Bronze/Silver/Gold layouts, star schemas, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.
- Business questions often reveal important entities, events, and grains.
- KPIs often reveal required grain and temporal concepts.
- Source-of-truth conflicts from Phase 5 should not be hidden.
- If no source exists for a core concept, mark the concept as business-needed but source-unconfirmed.
- If several source systems use the same term differently, record a terminology conflict.
- If the same real-world thing appears under different names, record synonym candidates.

## Domain Readiness Lens

Use this lens before modeling:

| Area | Readiness Question |
| --- | --- |
| Scope | Which part of the business domain is in this project? |
| Concept | What real-world things or events does the product need to understand? |
| Meaning | What does each term mean to the business? |
| Identity | How do we know two records refer to the same thing? |
| Grain | What does one instance of a concept represent? |
| Relationship | How do concepts relate to each other? |
| Time | Which timestamps matter and what do they mean? |
| Source | Which source supports or owns each concept? |
| Consumer | Which use case depends on this concept? |
| Ambiguity | Which meanings are unresolved or conflicting? |

## HALT - Readiness Check Failed

Stop if upstream source assessment is missing or too weak to model the domain safely.

### Trigger

Use this HALT if:

- `05-data-source-inventory.md` is missing;
- P1 product outputs have no mapped sources;
- source-of-truth decisions are missing for core concepts;
- source conflicts are unresolved and affect P1 use cases;
- source schemas or descriptions are too vague to identify concepts;
- sensitive or regulated data classification affects domain modeling but is unknown.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-source-assessment`  
B. Continue Phase 6 as Draft using current context  
C. User provides missing source/domain context now  
D. Stop workflow  

### Recommendation

Choose A if source-of-truth or source mapping is missing for P1 concepts.  
Choose B only if the user accepts that the conceptual model remains Draft.

### Required response

Choose A/B/C/D.

## HALT - Domain Scope Required

Stop if the business domain boundary is unclear.

### Decision needed

What domain scope should this conceptual model cover?

### Options

A. Only first-release product outputs  
B. P1 + P2 use cases from the data product specification  
C. Entire known business domain for the project  
D. One bounded context / subdomain at a time  
E. Custom scope  

### Recommendation

Choose A or D for MVP delivery. Choose B if downstream design needs near-term extensibility.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- domain scope is selected or marked unresolved;
- candidate concepts, entities, events, metrics, sources, and conflicts are extracted;
- source-of-truth gaps are documented;
- the agent knows whether to create, update, or defer the conceptual model.

## Next Step

After completion, load only:

```text
steps/step-02-domain-concepts-and-relationships.md
```
