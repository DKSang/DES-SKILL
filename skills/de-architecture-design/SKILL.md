---
name: de-architecture-design
description: Use when selecting or documenting a data platform architecture, including storage, compute, orchestration, transformation, serving, and local-first or cloud-first tradeoffs.
---

# de-architecture-design

## When To Use

Use after business requirements and source assessment. Use before designing pipelines, tables, or transformations.

## Purpose

Produce a practical architecture decision record that fits scale, freshness, team capability, cost, governance, and serving needs without locking the project to one vendor.

## Inputs Required

- Business discovery brief.
- KPI and SLA requirements.
- Source inventory.
- Domain model and data product definitions when available.
- Team skills and operational constraints.
- Preferred or required platforms if any.

## Step-By-Step Process

1. Identify required architecture capabilities: batch, streaming, ELT, BI, API, ML, AI agent, or reverse ETL.
2. Choose local-first, cloud-first, or hybrid development path.
3. Select storage pattern: files, warehouse, lakehouse, database, or stream log.
4. Select compute and transformation pattern: SQL, Python, Spark, dbt, DuckDB, warehouse SQL.
5. Select orchestration and monitoring approach: Airflow, Dagster, ADF, Fabric pipelines, Databricks Workflows, GitHub Actions, or cron for prototypes.
6. Define serving layer options: Power BI, Superset, APIs, semantic models, feature store, AI agent.
7. Document options considered, decisions, tradeoffs, and risks.

## Required Outputs

- Architecture decision record.
- High-level data flow.
- Tooling decision matrix.
- Major risks and follow-up decisions.

## Quality Checklist

- Architecture supports stated SLAs.
- Local development path is clear.
- Cloud services are optional unless required.
- Security, lineage, and cost are considered.
- Rejected options are documented.

## Common Mistakes To Avoid

- Choosing tools because they are popular.
- Designing streaming for daily reporting needs.
- Ignoring operational ownership.
- Selecting a vendor before understanding constraints.

## Handoff To The Next Skill

Next use `de-ingestion-design` to define how each source enters the platform.

## Example Output Format

```markdown
# Architecture Decision Record
## Context
## Decision
## Data Flow
## Options Considered
## Consequences
## Risks
```
