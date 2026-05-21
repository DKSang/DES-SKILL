# Step 01 — Context and Readiness

## Goal

Confirm that Lineage and Metadata Design is the correct next step and that upstream dataset, transformation, contract, quality, semantic, serving, and ownership context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- workflow status file;
- source inventory;
- Bronze/Silver/Gold dataset inventory;
- transformation dependency graph;
- contract inventory;
- quality rule inventory;
- semantic model inventory;
- serving output inventory;
- workflow run evidence expectations;
- ownership/stewardship decisions.

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
   - Ingestion Specification;
   - Bronze Layer Specification;
   - Silver Layer Specification;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Transformation Specification;
   - Data Quality Specification;
   - Orchestration and Observability Specification;
   - Semantic Model Specification;
   - Serving Layer Specification.
4. Extract:
   - datasets and outputs requiring catalog entries;
   - metrics and KPIs requiring definitions;
   - transformations requiring lineage;
   - contracts requiring metadata;
   - quality status to expose;
   - operational metadata/run evidence;
   - reference data and mappings;
   - owners, stewards, consumers;
   - compliance/audit needs;
   - missing definitions or ownership gaps.
5. Check whether existing `18-lineage-metadata-specification.md` exists.
6. Decide whether to create a new lineage/metadata specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Metadata should support both humans and systems.
- Business metadata explains meaning and ownership.
- Technical metadata explains schema, lineage, fields, pipelines, and dependencies.
- Operational metadata explains run status, counts, errors, timings, and evidence.
- Reference metadata explains codes, units, calendars, mappings, and lookup definitions.
- Lineage should support debugging, impact analysis, audit, and consumer trust.
- Column-level lineage is useful but can be costly; require it where risk justifies it.
- Metadata must be maintained, not written once and forgotten.
- Serving outputs should show trust signals like freshness, quality status, owner, and certified status.

## Lineage Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Asset | Which source/dataset/metric/output needs metadata? |
| Meaning | What does it mean in business terms? |
| Owner | Who owns and maintains it? |
| Schema | What fields and types exist? |
| Lineage | What upstream assets created it? |
| Transformation | Which transformation changed it? |
| Quality | What quality/trust status applies? |
| Contract | Which contract governs it? |
| Usage | Who consumes it? |
| Operations | Which run produced it? |
| Version | Which schema/contract/metric version is active? |

## HALT — Missing or Weak Serving Context

Stop if upstream serving or semantic context is missing or too weak.

### Trigger

Use this HALT if:

- `17-serving-layer-specification.md` is missing;
- semantic model inventory is missing;
- serving outputs are unclear;
- consumer usage is unclear;
- freshness/quality visibility expectations are missing;
- ownership/support model is missing.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-serving-layer-design`  
B. Route back to `des-semantic-model-design`  
C. Continue Phase 18 as Draft using current context  
D. User provides missing lineage/metadata context now  
E. Stop workflow  

### Recommendation

Choose A if serving output or consumer usage is missing. Choose B if semantic model metadata is missing.

### Required response

Choose A/B/C/D/E.

## HALT — Metadata Scope Required

Stop if metadata scope is unclear.

### Decision needed

What metadata scope should Phase 18 cover?

### Options

A. P1 Gold and serving outputs only  
B. P1 Bronze/Silver/Gold datasets  
C. P1 end-to-end source → serving lineage  
D. P1 + P2 data product assets  
E. Full project catalog and lineage framework  
F. AI/data-agent-ready metadata scope  
G. Custom scope  

### Recommendation

Choose C for first-release trust and auditability. Choose F if AI/data-agent access is important.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- metadata scope is selected or marked unresolved;
- datasets, metrics, contracts, transformations, quality rules, serving outputs, owners, and metadata gaps are extracted;
- the agent knows whether to create, update, or defer the lineage/metadata specification.

## Next Step

After completion, load only:

```text
steps/step-02-lineage-metadata-and-catalog-design.md
```
