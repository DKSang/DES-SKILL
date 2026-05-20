---
name: de-transformation-design
description: Use when designing SQL, Python, Spark, dbt, DuckDB, or warehouse transformations from raw and standardized data into validated analytics models.
---

# de-transformation-design

## When To Use

Use after layer designs and data contracts. Use before writing transformation code or dbt models — design first, then implement.

## Purpose

Create an implementable transformation plan that maps inputs to outputs, defines business rules explicitly, handles edge cases, and supports automated testing and safe backfill.

## Inputs Required

- Bronze, Silver, and Gold specifications.
- Data contracts (`12-data-contracts.md`).
- Certified metric definitions (`03-requirements-and-kpis.md`).
- Data quality requirements.
- Tooling choices from architecture (`07-architecture-design.md`).

## Decision Matrix — Transformation Tool Selection

| Scenario | Recommended Tool | When to Override |
| :--- | :--- | :--- |
| SQL-native warehouse (Snowflake, BigQuery, Synapse) | **dbt (SQL)** | Use Python models for ML features or complex logic |
| Spark/Databricks lakehouse | **dbt + dbt-spark / Databricks SQL** | PySpark for complex window logic or ML pipelines |
| Local development, small data (< 50GB) | **DuckDB + SQL or dbt-duckdb** | Spark if data grows beyond local capacity |
| Complex Python/ML transformation | **PySpark / Pandas on Spark** | dbt for simpler SQL-based transformations |
| Simple one-time historical backfill | **SQL or Python script** | dbt for production pipelines that must be tested |

**Default**: Use dbt where possible — it enforces documentation, testing, and lineage by design.

## Decision Matrix — Incremental Strategy

| Source Behavior | Incremental Strategy |
| :--- | :--- |
| Append-only events | `WHERE event_date >= '{{ ds }}'` — filter by partition date |
| CRUD with watermark (`updated_at`) | `WHERE updated_at > last_watermark` — merge on primary key |
| Full replacement (small tables < 1M rows) | `--full-refresh` on schedule; mark explicitly in dbt config |
| Partitioned fact tables | `INSERT OVERWRITE PARTITION` by `ingestion_date` |

**Rule**: Every incremental transformation must be **idempotent** — running it twice for the same date window must produce the same output with no duplicates.

## Step-By-Step Process

1. Map every output table to its input tables (source-to-target mapping).
2. Define transformation logic stage by stage: Clean → Conform → Enrich → Aggregate → Serve.
3. Choose implementation tool using the Decision Matrix.
4. Define incremental strategy using the Incremental Strategy matrix.
5. Define edge case handling explicitly: nulls, duplicates, late records, deletes, type changes.
6. Write testable business rules with named rule IDs (e.g., `BR-001: total_amount = unit_price * quantity`).
7. Sequence transformations by dependency graph (upstream → downstream).
8. Document backfill behavior and estimated backfill duration.

## Output File

Write the final artifact to:

`.agents/des-skill/output/13-transformation-design.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Source-to-target mapping per output table.
- Transformation logic per stage with named business rules.
- Incremental strategy and idempotency confirmation.
- Edge case handling (nulls, duplicates, deletes, late records).
- Dependency graph (DAG order).
- Backfill plan with estimated duration.

## Quality Checklist

- [ ] Every output column has a documented source or derivation formula.
- [ ] Incremental logic is idempotent — running twice for the same date produces the same result.
- [ ] Business rules are named and testable (not embedded in anonymous CASE expressions).
- [ ] Backfill behavior is explicitly documented and tested in staging.
- [ ] Transformations respect all data contract schema and quality guarantees.
- [ ] Dependency graph orders all transformations correctly — no circular dependencies.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Encoding undocumented business logic in code | Logic without a name cannot be tested, reviewed, or explained to the business |
| Non-idempotent incremental logic | Re-runs create duplicate rows; backfills produce wrong historical aggregates |
| Using notebooks as production transformation logic | No CI/CD integration, no lineage, no unit tests, no parameterization |
| Ignoring deletes and late-arriving data | Silent data errors accumulate; downstream KPIs become unreliable |
| Complex CASE chains without named rules | Engineers cannot explain what the logic does; changes introduce regressions |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | PII masking transformations applied at Silver layer documented here |
| Data Management | Source-to-target column mapping is the foundation of column-level lineage |
| DataOps | All business rules must have corresponding dbt tests or DQ assertions in CI/CD |
| Data Architecture | Incremental strategy must be aligned with storage format capabilities (Delta MERGE vs. partition overwrite) |
| Orchestration | Dependency graph drives DAG task ordering in orchestration design |
| Software Engineering | Named business rules are unit-testable; reviewed in PRs; documented in dbt schema.yml |

## Handoff To The Next Skill

Next use `de-data-quality` to define and implement checks that validate transformation outputs at every layer.

## Example Output Format

```markdown
# Transformation Design
| Output Table | Input Tables | Stage | Logic Summary | Incremental Key | Business Rules |
| `silver.orders` | `bronze.raw_orders` | Conform | Deduplicate by order_id, standardize timestamps | `ingestion_date` | BR-001, BR-002 |
## Business Rules
| Rule ID | Rule | Implementation |
| BR-001 | total_amount = unit_price * quantity | `total_amount = unit_price * quantity` |
## Dependency Graph
bronze.raw_orders → silver.orders → gold.fact_orders
## Backfill Plan
```
