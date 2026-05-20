---
name: de-orchestration-and-observability
description: Use when designing schedules, dependencies, monitoring, logging, alerting, retries, backfills, SLAs, and operational ownership for data pipelines.
---

# de-orchestration-and-observability

## When To Use

Use after ingestion, transformations, and quality gates are known. Use before production release or when pipelines are unreliable or invisible.

## Purpose

Define how pipelines run, recover, alert, and prove they met data freshness and reliability expectations.

## Inputs Required

- Pipeline inventory.
- Ingestion and transformation specs.
- Data quality rules.
- SLA requirements.
- Architecture tooling choices.

## Step-By-Step Process

1. Define DAGs, tasks, dependencies, schedules, and triggers.
2. Choose orchestration tool: Airflow, Dagster, Azure Data Factory, Fabric pipelines, Databricks Workflows, GitHub Actions, Prefect, or cron for simple local prototypes.
3. Define retries, timeouts, backfill, and idempotency behavior.
4. Define monitoring metrics: run status, duration, freshness, row counts, quality pass rate, cost.
5. Define logs, alert routing, escalation, and incident ownership.
6. Define runbooks for failure, rerun, replay, and backfill.
7. Store operational metadata for audit.

## Output File

Write the final artifact to:

`.agents/des-skill/output/15-orchestration-and-observability.md`

Use the matching template from:

`.agents/des-skill/templates/pipeline_spec_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Pipeline specification.
- Orchestration DAG design.
- Observability and alerting plan.
- Runbook outline.

## Quality Checklist

- Dependencies are explicit.
- SLAs map to monitors.
- Alerts have accountable owners.
- Backfill and rerun are documented.
- Quality results are visible with pipeline status.

## Common Mistakes To Avoid

- Scheduling pipelines without dependency logic.
- Alerting to shared channels without ownership.
- Making backfills manual and undocumented.
- Monitoring only infrastructure, not data freshness.

## Handoff To The Next Skill

Next use `de-semantic-model-design` to define certified metrics, dimensions, relationships, and business glossary before exposing data products.

## Example Output Format

```markdown
# Pipeline And Observability Spec
| Pipeline | Schedule | Dependencies | SLA | Alerts | Owner |
## DAG
## Runbook
## Monitoring Metrics
```
