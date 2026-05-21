# Step 01 - Context and Readiness

## Goal

Confirm that Data Product Definition is the correct next step and that upstream business, question, requirement, and KPI context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- workflow status file;
- approved consumers;
- P1/P2 business questions;
- P1/P2 functional and non-functional requirements;
- approved, draft, or candidate KPIs;
- scope and non-scope;
- initial success criteria;
- known output expectations such as dashboard, dataset, API, semantic model, ML dataset, data sharing, report, or application feature.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize Business Discovery Brief.
4. Read or summarize Business Question Catalog.
5. Read or summarize Requirements and KPI Catalog.
6. Extract:
   - primary and secondary consumers;
   - target decisions or use cases;
   - P1/P2 business questions;
   - P1/P2 requirements;
   - approved or draft KPIs;
   - success criteria;
   - constraints;
   - scope and non-scope;
   - open questions.
7. Check whether existing `04-data-product-specification.md` exists.
8. Decide whether to create a new product specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- A data product must serve a consumer or system.
- A data product is more than a table. It includes expectations around usability, trust, ownership, and consumption.
- Do not assume a dashboard, API, or ML dataset is the data product by itself; it may be an output of the product.
- If Phase 3 has no approved requirements, this phase can continue only as Draft.
- If multiple consumers have conflicting needs, identify whether this is one data product with multiple views or multiple data products.
- If the project is platform/infrastructure-focused, the consumer may be internal data teams, analysts, ML teams, or downstream systems.

## Data Product Readiness Lens

Use this lens before defining the product:

| Area | Readiness Question |
| --- | --- |
| Consumer | Who or what consumes this product? |
| Use Case | Which decisions, workflows, analytics, ML, or operations does it support? |
| Value | What value does the product create? |
| Output | What form does the consumer receive? |
| Boundary | What is inside and outside the product? |
| Service | How fresh, reliable, trustworthy, and accessible must it be? |
| Owner | Who owns product definition and change approval? |
| Lifecycle | Is this experimental, MVP, shared, production, or deprecated? |

## HALT - Missing or Weak Requirements Context

Stop if upstream requirements are missing or too weak to define a product safely.

### Trigger

Use this HALT if:

- `03-requirements-and-kpi-catalog.md` is missing;
- P1 requirements are not identified;
- primary consumer is missing;
- target use case is missing;
- success criteria are missing;
- requirements contain unresolved conflicts that affect product boundary.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-requirements-and-kpis`  
B. Continue Phase 4 as Draft using current context  
C. User provides missing requirement/product context now  
D. Stop workflow

### Recommendation

Choose A if P1 requirements or primary consumer are missing.  
Choose B only if the user accepts that the product specification remains Draft.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- primary consumers and P1 use cases are identified or marked unresolved;
- P1 requirements and success criteria are extracted;
- product definition gaps are documented;
- the agent knows whether to create, update, or defer the product specification.

## Next Step

After completion, load only:

```text
steps/step-02-product-boundary-and-service-design.md
```
