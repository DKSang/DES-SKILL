---
name: de-semantic-model-design
description: Use when defining certified metrics, dimensions, hierarchies, business glossary, metric ownership, semantic relationships, or row-level security for analytics.
---

# de-semantic-model-design

## When To Use

Use after Gold model design and orchestration readiness. Use before dashboard, API, AI agent, or feature serving design when consistent metrics and business semantics are required.

## Purpose

Design a semantic model that centralizes metric definitions, dimensions, relationships, hierarchies, ownership, and security rules.

## Inputs Required

- Gold table specifications.
- KPI and metric catalog.
- Domain model and glossary.
- Consumer and data product definitions.
- Governance and security constraints.

## Step-By-Step Process

1. Identify certified metrics and their formulas.
2. Define dimensions, hierarchies, filters, and drill paths.
3. Define relationships between semantic entities.
4. Map metrics to Gold tables and source lineage.
5. Define metric owner, certification status, and change process.
6. Define row-level security and column-level restrictions.
7. Choose semantic implementation pattern: Power BI model, dbt semantic layer, warehouse views, Looker-style model, Cube, MetricFlow, or platform-native semantic model.

## Output File

Write the final artifact to:

`.agents/des-skill/output/16-semantic-model-design.md`

Use the matching template from:

`.agents/des-skill/templates/semantic_model_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Semantic model specification.
- Certified metric catalog.
- Dimension and hierarchy catalog.
- Semantic relationship map.
- Security rules for semantic access.

## Quality Checklist

- Each certified metric has one definition and owner.
- Metrics include grain, filters, and allowed dimensions.
- Semantic entities map to Gold tables.
- Security rules are explicit.
- Dashboards and APIs can reuse the model without redefining metrics.

## Common Mistakes To Avoid

- Repeating metric formulas in every dashboard.
- Certifying metrics without ownership.
- Ignoring hierarchy and drill behavior.
- Exposing unrestricted sensitive dimensions.

## Handoff To The Next Skill

Next use `de-serving-layer-design` to expose the semantic model and trusted data products through dashboards, APIs, exports, feature stores, reverse ETL, or AI agents.

## Example Output Format

```markdown
# Semantic Model
## Certified Metrics
| Metric | Definition | Grain | Dimensions | Owner | Source Gold Table |
## Dimensions And Hierarchies
## Relationships
## Security Rules
```
