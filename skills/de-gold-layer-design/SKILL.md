---
name: de-gold-layer-design
description: Use when designing business-ready Gold tables, marts, facts, dimensions, metrics, and single source of truth datasets for analytics or serving.
---

# de-gold-layer-design

## When To Use

Use after Silver design and before data contracts or transformation implementation. Use when consumers need trusted business-ready datasets.

## Purpose

Design Gold datasets that represent business processes, certified metrics, and analytics-ready entities with explicit grain and ownership.

## Inputs Required

- KPI catalog.
- Reporting and serving requirements.
- Domain model.
- Silver table specifications.
- Business definitions and stakeholder decisions.

## Step-By-Step Process

1. Identify business processes and analytical entities.
2. Define facts, dimensions, aggregate marts, and metric tables.
3. Declare table grain, primary keys, dimensions, and measures.
4. Map each Gold table to KPIs, reports, APIs, or semantic models.
5. Define metric formulas and ownership.
6. Define slowly changing dimension behavior where needed.
7. Define consumer access and performance needs.

## Required Outputs

- Gold table specifications.
- Fact and dimension model.
- Metric definition catalog.
- Consumer mapping.

## Quality Checklist

- Each table has a declared grain.
- Metrics have formulas and owners.
- Gold tables support known business questions.
- Dimensions and facts have stable keys.
- Aggregates do not obscure metric definitions.

## Common Mistakes To Avoid

- Mirroring Silver tables instead of modeling business concepts.
- Creating metrics without owners.
- Mixing multiple grains in one table.
- Optimizing for one dashboard at the expense of shared truth.

## Handoff To The Next Skill

Next use `de-data-contracts` to formalize producer and consumer expectations for critical datasets.

## Example Output Format

```markdown
# Gold Model
| Table | Type | Business Process | Grain | Measures | Dimensions | Consumers |
## Metric Catalog
## Entity Relationships
```
