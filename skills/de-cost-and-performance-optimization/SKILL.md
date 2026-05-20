---
name: de-cost-and-performance-optimization
description: Use when reviewing or improving data platform cost, query performance, compute sizing, partitioning, clustering, file layout, caching, materialization, or incremental strategy.
---

# de-cost-and-performance-optimization

## When To Use

Use after governance and before final CI/CD release, or whenever pipelines, queries, dashboards, APIs, or jobs are too slow or too expensive.

## Purpose

Create a practical, evidence-based optimization plan that improves performance and reduces cost — without breaking data correctness, lineage, or governance.

## Inputs Required

- Architecture decision record (`07-architecture-design.md`).
- Table and pipeline specifications.
- Query patterns and serving SLA requirements.
- Actual pipeline duration, compute size, storage size, and cost metrics.

## Decision Matrix — Storage Optimization Priority

| Problem Observed | Root Cause | Recommended Action |
| :--- | :--- | :--- |
| High storage cost (Hot tier) | Data older than 7 days never queried | Enable lifecycle rule: Hot → Cool after 7 days |
| Slow analytical queries (full table scan) | No partition pruning on filter column | Add `ingestion_date` partition; verify queries use partition filter |
| Many small files (< 50MB per file) | Frequent small batch appends | Run `OPTIMIZE` / `VACUUM` on Delta tables; increase micro-batch interval |
| Inconsistent query speed on same table | No clustering / Z-ordering on high-frequency filter columns | Apply `ZORDER BY (region, order_date)` on Delta; `CLUSTER BY` on BigQuery |

## Decision Matrix — Compute Optimization Priority

| Problem Observed | Root Cause | Recommended Action |
| :--- | :--- | :--- |
| Cluster running at < 30% utilization | Over-provisioned cluster size | Right-size cluster; profile actual CPU/memory usage during peak |
| Cluster costs continue overnight | No auto-suspend configured | Set auto-suspend to 60s for interactive; 300s for scheduled jobs |
| Slow Spark join on large tables | Missing broadcast hint on small dim table | Add `BROADCAST(dim_table)` hint for dimensions < 100MB |
| High cost from daily full-refresh | Unnecessary full scans | Switch to incremental using watermark column |

## Step-By-Step Process

1. Measure before optimizing: collect pipeline P90 runtime, cluster cost/run, storage cost/month, and dashboard P90 latency.
2. Identify top 3 cost drivers and top 3 performance bottlenecks — prioritize by ROI.
3. Apply storage optimizations from the Storage Decision Matrix.
4. Apply compute optimizations from the Compute Decision Matrix.
5. Validate that optimizations maintain data correctness (row count and metric total unchanged).
6. Establish cost monitors and performance alerts to detect regressions.
7. Document estimated saving, validation method, and rollback plan per optimization.

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/20-cost-and-performance-optimization.md`

Use the matching template from:

`{skill-root}/../../templates/20-cost-and-performance-optimization-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Measured baseline: cost/month, P90 pipeline runtime, P90 query latency.
- Top 3 cost drivers and top 3 performance bottlenecks with root cause.
- Optimization backlog with priority, estimated saving, and validation method.
- Cost monitoring plan with alert thresholds.
- Rollback plan per optimization.

## Quality Checklist

- [ ] Every optimization is tied to a measured bottleneck — not applied speculatively.
- [ ] Correctness tests (row count + metric total) run before and after each optimization.
- [ ] Partition pruning is verified with query execution plan (`EXPLAIN`), not just assumed.
- [ ] Auto-suspend is enabled on all clusters (interactive and scheduled).
- [ ] Storage lifecycle rules are active and tested (data actually moves to cool tier).
- [ ] Cost anomaly alerts are configured with budget thresholds.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Optimizing before measuring | Guessing bottlenecks wastes engineering time; correct diagnosis requires evidence |
| Partitioning by UUID or high-cardinality column | Creates millions of tiny partitions; metadata overhead kills query planning speed |
| Creating materialized tables without refresh ownership | Materialized tables go stale; consumers silently get wrong data |
| Reducing cost by weakening data quality gates | Bypassing DQ to save compute creates silent data errors worth far more than the saving |
| Applying Z-ORDER to every column | Z-ORDER on many columns is as slow as no Z-ORDER; apply only to top 2–3 filter columns |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Optimization must not expose cached data to unauthorized roles (e.g., cached BI query results) |
| Data Management | Optimization changes (OPTIMIZE, partition changes) are schema events — log in change history |
| DataOps | Optimization changes tested in staging with correctness validation before production deploy |
| Data Architecture | Partition and clustering changes are architectural — document in ADR; may require backfill |
| Orchestration | OPTIMIZE/VACUUM jobs added to orchestration schedule with appropriate timing |
| Software Engineering | Optimization changes are code-reviewed; correctness tests added to CI/CD pipeline |

## Handoff To The Next Skill

Next use `de-cicd-and-testing` to automate tests, deployment checks, and release controls for the optimized platform.
