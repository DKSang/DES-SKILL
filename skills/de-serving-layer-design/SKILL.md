---
name: de-serving-layer-design
description: Use when designing dashboards, APIs, exports, reverse ETL, feature stores, application datasets, or AI agent tools that consume trusted data products.
---

# de-serving-layer-design

## When To Use

Use after semantic model design. Use when the project must deliver trusted data to BI users, applications, operational systems, ML workflows, or AI/data agents.

## Purpose

Design concrete serving channels with consumers, interfaces, access controls, freshness, performance expectations, and validation criteria.

## Inputs Required

- Data product definitions.
- Semantic model specification.
- Gold table specifications.
- Consumer requirements.
- Security, SLA, and performance requirements.

## Step-By-Step Process

1. Identify serving channels: dashboard, API, extract, reverse ETL, feature store, application table, semantic endpoint, or AI agent tool.
2. Define consumer, use case, interface, and output contract for each channel.
3. Choose tools: Power BI, Superset, warehouse views, REST API, GraphQL, Kafka topic, feature store, vector index, dbt exposures, or custom agent tools.
4. Define access controls, authentication, caching, pagination, and rate limits.
5. Define freshness and performance expectations.
6. Define validation against business questions and certified metrics.
7. Define support owner and incident path.

## Output File

Write the final artifact to:

`.agents/des-skill/output/17-serving-layer-design.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Serving layer specification.
- Consumer access matrix.
- Interface contracts for dashboards, APIs, exports, or agents.
- Serving validation checklist.

## Quality Checklist

- Every serving channel maps to a data product.
- Interfaces use certified metrics where applicable.
- Access and authentication are defined.
- Freshness and performance expectations are explicit.
- AI agents use governed tools and trusted semantic context.

## Common Mistakes To Avoid

- Letting serving channels bypass Gold and semantic definitions.
- Designing APIs without pagination, freshness, or ownership.
- Treating dashboard layout as a substitute for metric design.
- Giving AI agents direct access to raw or ungoverned datasets.

## Handoff To The Next Skill

Next use `de-lineage-and-metadata` to document source-to-serving lineage, ownership, metadata, and catalog entries.

## Example Output Format

```markdown
# Serving Layer Spec
| Channel | Consumer | Data Product | Interface | SLA | Security | Owner |
## API Contracts
## Dashboard Inventory
## AI Agent Tools
## Validation Criteria
```
