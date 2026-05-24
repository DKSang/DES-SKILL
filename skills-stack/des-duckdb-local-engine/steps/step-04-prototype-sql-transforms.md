# Step 04 - Prototype SQL Transforms

Use this step when DuckDB is used to prototype Silver or Gold logic.

## Goal

Create a local SQL prototype before dbt or Fabric implementation.

## Rules

- Start from a clearly defined output grain.
- Keep raw input unchanged.
- Use CTEs for readability.
- Separate cleaning, conformance, joining, and aggregation logic.
- Validate row counts after each major step.
- Check join cardinality before trusting results.
- Save prototype SQL when it supports DES evidence.

## Output

Create or update:

```text
_des-output/implementation-artifacts/duckdb-local-prototype.sql
```

Also summarize:

```text
input tables/files:
output grain:
transformation logic:
validation checks:
known limitations:
recommended handoff:
```
