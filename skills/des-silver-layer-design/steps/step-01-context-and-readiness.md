# Step 01 — Context and Readiness

## Goal

Confirm that Silver Layer Design is the correct next step and that upstream Bronze, domain, source, architecture, requirement, and product context is available.

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
- workflow status file;
- Bronze dataset inventory;
- raw preservation and metadata rules;
- schema drift and quarantine policy;
- conceptual domain entities/events;
- source-of-truth decisions;
- identity and grain rules;
- P1/P2 requirements and quality expectations;
- source sensitivity classifications;
- downstream product outputs.

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
   - Bronze Layer Specification.
4. Extract:
   - P1/P2 Bronze datasets;
   - domain entities/events needed for downstream outputs;
   - source-of-truth mappings;
   - identity and grain rules;
   - known terminology conflicts;
   - source schema drift risks;
   - Bronze metadata and lineage fields;
   - quality expectations;
   - privacy/security constraints;
   - downstream P1/P2 requirements;
   - open questions.
5. Check whether existing `10-silver-layer-specification.md` exists.
6. Decide whether to create a new Silver specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Silver should be domain-aligned and trustworthy, not consumer-specific like Gold.
- Silver usually cleans, standardizes, deduplicates, validates, and conforms.
- Do not clean, conform, or design detailed Gold tables, semantic models, dashboards, APIs, or write pipeline implementation code.
- Treat Bronze as evidence and raw input, not as a business model.
- Use the conceptual domain model to decide entity/event meaning.
- Use source-of-truth decisions to guide cross-source reconciliation.
- If identity is unclear, do not invent canonical IDs.
- If status/category mappings are unknown, mark them as open.
- If records fail Silver business rules, define reject/quarantine handling rather than dropping silently.
- Keep lineage back to Bronze.

## Silver Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Input | Which Bronze datasets feed this Silver dataset? |
| Domain | Which entity/event/concept does this Silver dataset represent? |
| Grain | What does one Silver record represent? |
| Identity | How is the entity/event identified across records and sources? |
| Source of truth | Which source wins when values conflict? |
| Conformance | What must be standardized or mapped? |
| Quality | What checks prove the data is trustworthy enough for Gold? |
| Rejection | What happens to records that cannot be conformed? |
| Security | Which fields remain sensitive after Silver processing? |
| Lineage | Can each Silver record be traced back to Bronze/source evidence? |

## HALT - Readiness Check Failed

Stop if upstream Bronze context, architecture context, or source context is missing or too weak to design Silver safely.

### Trigger

Use this HALT if:

- `09-bronze-layer-specification.md` is missing;
- P1 Bronze datasets are not defined;
- Bronze metadata is missing;
- schema drift or quarantine policy is unclear;
- lineage fields needed for traceability are missing;
- raw sensitive access policy affects Silver but is unresolved.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-bronze-layer-design`  
B. Route back to `des-domain-modeling` if entity/grain/identity is unclear  
C. Continue Phase 10 as Draft using current context  
D. User provides missing Silver context now  
E. Stop workflow  

### Recommendation

Choose A if Bronze datasets, metadata, or drift policy is missing.  
Choose B if domain alignment, grain, or identity is missing.  
Choose C only if the user accepts that Silver design remains Draft.

### Required response

Choose A/B/C/D/E.

## HALT - Silver Dataset Boundary

Stop if it is unclear how Bronze datasets should map to Silver datasets.

### Decision needed

How should Silver dataset boundaries be defined?

### Options

A. One Silver dataset per domain entity  
B. One Silver dataset per domain event  
C. One Silver dataset per source-conformed entity/event  
D. One Silver dataset per source object with light cleaning only  
E. One Silver dataset per reusable low-level fact  
F. Custom boundary  
G. Keep as Draft pending domain/source clarification  

### Recommendation

Prefer A/B for domain-aligned Silver. Use C when cross-source conformance is not ready.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1 Bronze datasets are identified;
- P1 domain entities/events are identified;
- Silver dataset boundary decision is known or marked unresolved;
- identity, conformance, quality, lineage, and security gaps are documented;
- the agent knows whether to create, update, or defer the Silver specification.

## Next Step

After completion, load only:

```text
steps/step-02-silver-entity-and-conformance-decisions.md
```
