# Step 01 — Context and Readiness

## Goal

Confirm that Semantic Model Design is the correct next step and that upstream Gold, KPI, contract, quality, and serving context is available.

## Required Inputs

Look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/13-transformation-specification.md`;
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
- workflow status file;
- Gold datasets and output types;
- business questions and KPIs;
- approved metric definitions;
- consumers/personas;
- serving direction;
- contract expectations;
- quality rules and trust status;
- security/access constraints;
- glossary/domain terms;
- freshness/SLA expectations.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Conceptual Domain Model;
   - Silver Layer Specification;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Transformation Specification;
   - Data Quality Specification;
   - Orchestration and Observability Specification.
4. Extract:
   - P1/P2 business questions;
   - approved KPIs and metrics;
   - Gold outputs suitable for semantic exposure;
   - Gold dataset grain;
   - consumers and use cases;
   - required dimensions/slices;
   - security/access restrictions;
   - freshness and quality display expectations;
   - certified/trusted status candidates;
   - semantic risks and open questions.
5. Check whether existing `16-semantic-model-specification.md` exists.
6. Decide whether to create a new orchestration/observability specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Semantic model should express business meaning, not physical schema detail.
- Metrics must trace back to approved KPI definitions.
- Grain and aggregation rules must be visible.
- Semantic relationships should not create accidental many-to-many double counting.
- If the Gold model is not stable, semantic model should remain Draft.
- If security is unresolved, semantic exposure should be Risk or Blocked.
- If users need self-service analytics, naming, descriptions, and certified metrics matter.
- If AI/data agents will use the model, glossary alignment and metadata become more important.

## Semantic Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Consumer | Who will use the semantic model? |
| Question | Which business questions will it answer? |
| Gold input | Which Gold dataset feeds it? |
| Metric | Which approved KPI/measure is exposed? |
| Grain | What grain does the metric operate at? |
| Aggregation | How is the metric aggregated? |
| Dimension | Which attributes can slice/filter the metric? |
| Relationship | How do semantic entities relate? |
| Security | Who can see which rows/columns/measures? |
| Trust | Is this certified, promoted, draft, or experimental? |
| Freshness | How should freshness be shown to users? |

## HALT — Missing or Weak Gold/KPI Context

Stop if upstream Gold or KPI context is missing or too weak to design semantic model safely.

### Trigger

Use this HALT if:

- `11-gold-layer-specification.md` is missing;
- KPI definitions are missing or conflicting;
- Gold grain is unclear;
- Gold output type is unclear;
- semantic serving direction is unclear;
- security/access classification is unknown;
- quality/contract status is insufficient for semantic exposure.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-gold-layer-design`
B. Route back to `des-requirements-and-kpis`
C. Route back to `des-data-contracts` or `des-data-quality`
D. Continue Phase 16 as Draft using current context
E. User provides missing semantic context now
F. Stop workflow

### Recommendation

Choose A if Gold grain/output is unclear.
Choose B if KPI definitions are missing.
Choose D only if the user accepts that semantic model remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT — Semantic Scope Required

Stop if semantic model scope is unclear.

### Decision needed

What should this semantic model cover?

### Options

A. P1 Gold outputs only
B. One semantic model per data product
C. One semantic model per business domain
D. One semantic model per consumer group
E. Enterprise-wide shared metrics layer
F. AI/data-agent-ready semantic layer
G. Custom scope

### Recommendation

Choose B for data product alignment. Choose C if the domain model is mature.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- semantic scope is selected or marked unresolved;
- Gold datasets, KPIs, consumers, dimensions, security constraints, and trust status candidates are extracted;
- unresolved semantic risks are documented;
- the agent knows whether to create, update, or defer the semantic model specification.

## Next Step

After completion, load only:

```text
steps/step-02-semantic-concepts-measures-and-relationships.md
```
