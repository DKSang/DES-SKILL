---
name: de-cost-and-performance-optimization
description: Use when reviewing or improving data platform cost, query performance, compute sizing, partitioning, clustering, file layout, caching, materialization, or incremental strategy.
---

# de-cost-and-performance-optimization

## When To Use

Use after governance and before final CI/CD release, or whenever pipelines, queries, dashboards, APIs, or jobs are too slow or too expensive.

## Purpose

Create a practical optimization plan that improves performance and cost without breaking data correctness, governance, or maintainability.

## Inputs Required

- Architecture decision record.
- Table specifications and pipeline specs.
- Query patterns and serving requirements.
- Pipeline duration, compute, storage, and cost metrics.
- Platform context such as DuckDB, Spark, dbt, Databricks, Snowflake, BigQuery, Fabric, warehouse SQL, or object storage.

## Step-By-Step Process

1. Identify high-cost and high-latency workloads.
2. Review table grain, partitioning, clustering, indexing, file size, compression, and statistics.
3. Review incremental processing, pruning, watermarks, and backfill strategy.
4. Review query plans, joins, aggregations, materialized views, and caching.
5. Review compute sizing, autoscaling, concurrency, job scheduling, and idle resources.
6. Review dashboard/API access patterns and semantic model performance.
7. Propose changes with expected impact, risk, validation method, and rollback plan.

## Required Outputs

- Cost and performance review.
- Optimization backlog.
- Query and pipeline tuning recommendations.
- Cost monitoring plan.
- Validation and rollback plan.

## Quality Checklist

- Optimizations are tied to measured bottlenecks.
- Correctness tests protect tuned logic.
- Partitioning and clustering match access patterns.
- Materialization choices have owners and refresh rules.
- Cost controls are observable after release.

## Common Mistakes To Avoid

- Optimizing before measuring.
- Partitioning by high-cardinality fields blindly.
- Creating materialized tables without refresh ownership.
- Reducing cost by weakening data quality or lineage.

## Handoff To The Next Skill

Next use `de-cicd-and-testing` to automate tests, deployment checks, and release controls for the optimized platform.

## Example Output Format

```markdown
# Cost And Performance Review
| Area | Finding | Evidence | Recommendation | Expected Impact | Risk | Validation |
## Optimization Backlog
## Cost Monitors
## Rollback Plan
```
