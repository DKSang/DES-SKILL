# Step 01 — Context and Readiness

## Goal

Confirm that Bronze Layer Design is the correct next step and that upstream ingestion, architecture, source, product, and security context is available.

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
- workflow status file;
- in-scope P1/P2 sources;
- ingestion patterns;
- landing target expectations;
- ingestion metadata expectations;
- replay/backfill strategy;
- schema drift policy;
- source security/privacy classification;
- retention or compliance requirements;
- architecture layer strategy;
- storage strategy;
- access control expectations.

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
   - Ingestion Specification.
4. Extract:
   - P1/P2 sources;
   - Ingestion pattern per source;
   - Source payload/format;
   - Expected landing target;
   - Ingestion metadata requirements;
   - Source sensitivity classification;
   - Schema drift policy from Ingestion Design;
   - Replay/backfill strategy;
   - Error/quarantine expectations;
   - Retention constraints;
   - Architecture storage/layer decisions;
   - Open questions.
5. Check whether existing `09-bronze-layer-specification.md` exists.
6. Decide whether to create a new Bronze specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Bronze should preserve source truth and ingestion evidence.
- Bronze is not the place for business conformance or curated metrics.
- Bronze dataset boundaries usually align to source feed, source object, endpoint, topic, file family, or logical raw object.
- If ingestion design says raw payload must be retained, Bronze must support that.
- If replay/backfill is required, Bronze must preserve enough raw data and metadata.
- If schema drift is expected, Bronze design must record how drift is stored/detected.
- If source contains sensitive data, Bronze access should be stricter than curated layers.
- If bad records are quarantined, define where and how they remain traceable.
- If partitioning is unknown, avoid high-cardinality keys and record as Draft.
- Do not clean, conform, deduplicate for business correctness, or design detailed Silver/Gold tables, physical transformations, or write pipeline implementation code.

## Bronze Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Source | Which ingestion source/feed/object creates this Bronze dataset? |
| Raw preservation | What must be retained exactly as received? |
| Format | What format/table/file representation is appropriate? |
| Partition | How should data be organized for replay, cost, and operations? |
| Metadata | What evidence is needed to trace load, source, file, run, and schema? |
| Drift | What happens when source schema changes? |
| Replay | Can Bronze support backfill and reprocessing? |
| Quarantine | Where do malformed/rejected records go? |
| Retention | How long should raw data be kept? |
| Access | Who can read raw data, especially sensitive fields? |
| Boundary | What cleaning is allowed versus deferred to Silver? |

## HALT - Readiness Check Failed

Stop if upstream ingestion context, architecture context, or source context is missing or too weak to design Bronze safely.

### Trigger

Use this HALT if:

- `08-ingestion-specification.md` is missing;
- P1 sources have no ingestion pattern;
- landing target expectations are missing;
- ingestion metadata expectations are missing;
- replay/backfill or schema drift policy is unclear;
- security/privacy classification is unknown for raw data.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-ingestion-design`  
B. Route back to `des-architecture-design` if storage/layer strategy is unclear  
C. Continue Phase 9 as Draft using current context  
D. User provides missing Bronze context now  
E. Stop workflow  

### Recommendation

Choose A if ingestion pattern, metadata, replay, or drift policy is missing.  
Choose B if architecture storage/layer strategy is missing.  
Choose C only if the user accepts that Bronze design remains Draft.

### Required response

Choose A/B/C/D/E.

## HALT - Bronze Dataset Boundary

Stop if it is unclear how source data should map to Bronze datasets.

### Decision needed

How should Bronze dataset boundaries be defined?

### Options

A. One Bronze dataset per source system  
B. One Bronze dataset per source object/table/endpoint/topic/file family  
C. One Bronze dataset per ingestion pipeline  
D. One Bronze dataset per business concept  
E. Custom boundary  
F. Keep as Draft pending source clarification  

### Recommendation

Prefer B for traceability and replay. Avoid D unless source already emits business-conformed data.

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1/P2 sources and ingestion patterns are extracted;
- Bronze dataset boundary decision is known or marked unresolved;
- raw preservation, metadata, drift, replay, retention, and access gaps are identified;
- the agent knows whether to create, update, or defer the Bronze specification.

## Next Step

After completion, load only:

```text
steps/step-02-bronze-dataset-and-storage-decisions.md
```
