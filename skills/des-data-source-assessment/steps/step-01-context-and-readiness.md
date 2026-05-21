# Step 01 — Context and Readiness

## Goal

Confirm that Data Source Assessment is the correct next step and that upstream data product, requirement, and business question context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- workflow status file;
- known candidate sources;
- known source owners or upstream teams;
- known access methods;
- known security, privacy, compliance, or licensing constraints;
- known source documentation, API docs, database schemas, file samples, data dictionaries, or contracts.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification.
4. Extract:
   - P1/P2 data product outputs;
   - supported use cases;
   - P1/P2 requirements and KPIs;
   - freshness/SLA expectations;
   - quality/trust expectations;
   - access and serving expectations;
   - security/privacy constraints;
   - product boundary and non-scope.
5. Identify candidate source systems mentioned by the user or upstream artifacts.
6. Check whether existing `05-data-source-inventory.md` exists.
7. Decide whether to create a new source inventory, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- A source system is where data is created, generated, captured, logged, or provided.
- Source systems can include application databases, APIs, files, SaaS exports, third-party data, data sharing feeds, logs, events, message queues, streams, spreadsheets, manual reference data, and existing warehouses/lakehouses.
- Treat source documentation, data samples, and owner statements as evidence.
- Do not confuse source availability with source suitability.
- Do not confuse source schema with business domain model.
- If no source maps to a P1 product output, the data product may need scope revision.
- If source ownership is unknown, mark the source as risky.
- If the source is external or third-party, assess cost, licensing, limits, and reliability.

## Source Readiness Lens

Use this lens before assessing details:

| Area | Readiness Question |
| --- | --- |
| Need | Which product output, requirement, KPI, or business question needs this source? |
| Authority | Is this source authoritative for the concept it provides? |
| Owner | Who owns and supports this source? |
| Access | Can the data team legally and technically access it? |
| Pattern | How is data created or updated? |
| Freshness | How current is the source, and how current must downstream data be? |
| Quality | What known issues exist? |
| Stability | How often does schema or meaning change? |
| Security | Does it contain sensitive, regulated, or credential-protected data? |
| Feasibility | Can this source realistically support the first release? |

## HALT - Readiness Check Failed

Stop if upstream product context is missing or too weak to assess sources safely.

### Trigger

Use this HALT if:

- `04-data-product-specification.md` is missing;
- P1 product outputs are unclear;
- supported use cases are unclear;
- requirements/KPIs are not mapped to product outputs;
- freshness or trust expectations are unknown for P1 outputs;
- product boundary conflicts with candidate sources.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-product-definition`  
B. Continue Phase 5 as Draft using current context  
C. User provides missing product/source context now  
D. Stop workflow  

### Recommendation

Choose A if P1 outputs or product boundary are unclear.  
Choose B only if the user accepts that source assessment remains Draft.

### Required response

Choose A/B/C/D.

## HALT - No Candidate Sources Identified

Stop if no candidate source systems are known for P1 product outputs.

### Decision needed

How should candidate sources be identified?

### Options

A. User provides source list now  
B. Mark P1 product output as blocked pending source discovery  
C. Route back to data product scope and reduce first release  
D. Continue with placeholder source risks only  

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1/P2 outputs and requirements are extracted;
- candidate sources are listed or the lack of sources is recorded as a blocker;
- product-to-source mapping gaps are identified;
- the agent knows whether to create, update, or defer the source inventory.

## Next Step

After completion, load only:

```text
steps/step-02-source-inventory-and-risk-assessment.md
```
