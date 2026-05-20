---
name: de-semantic-and-serving-layer
description: Use when exposing trusted data through dashboards, APIs, semantic models, metrics layers, reverse ETL, feature stores, or AI/data agents.
---

# de-semantic-and-serving-layer

## When To Use

Use as a compatibility bridge when a task combines semantic model design and serving layer design. For new work, prefer `de-semantic-model-design` first, then `de-serving-layer-design`.

## Purpose

Route combined semantic and serving requests into the two narrower skills so metric logic and delivery-channel design do not get mixed.

## Inputs Required

- Gold table specifications.
- KPI and metric catalog.
- Consumer requirements.
- Governance and security constraints.
- Performance and freshness requirements.

## Step-By-Step Process

1. If metric definitions, dimensions, hierarchies, glossary, or row-level security are unclear, run `de-semantic-model-design`.
2. If dashboards, APIs, exports, reverse ETL, feature stores, or AI agent tools are unclear, run `de-serving-layer-design`.
3. Confirm that serving channels use certified semantic definitions.
4. Confirm that access, freshness, and performance expectations are consistent across both artifacts.

## Required Outputs

- Semantic model specification from `de-semantic-model-design`.
- Serving layer specification from `de-serving-layer-design`.
- Cross-check notes for consistency between the two artifacts.

## Quality Checklist

- Metrics are defined once and reused.
- Serving channels map to user decisions.
- Access controls match governance requirements.
- Dashboards or APIs do not redefine core metrics.
- AI agents use trusted datasets and documented semantics.

## Common Mistakes To Avoid

- Letting every dashboard create its own metric logic.
- Exposing Silver data as business truth.
- Ignoring row-level security.
- Building an AI agent without trusted semantic context.

## Handoff To The Next Skill

Next use `de-lineage-and-metadata` to document source-to-serving lineage, column-level lineage, ownership, and catalog metadata.

## Example Output Format

```markdown
# Semantic And Serving Layer
| Consumer | Channel | Data Product | Metrics | Security | SLA |
## Certified Metrics
## Access Rules
```
