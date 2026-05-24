# dbt-duckdb Local-First Pattern

## Purpose

Use dbt-duckdb for local-first development, profiling, and fast feedback before cloud execution.

## Good Use Cases

- CSV, JSON, or Parquet exploration;
- local Silver/Gold prototype;
- dbt model development;
- unit tests;
- small-to-medium data validation;
- CI checks with sample data;
- evidence generation before Fabric/Spark execution.

## DES Pattern

```text
source files/API extracts
→ DuckDB local validation
→ dbt-duckdb transformation prototype
→ evidence pack
→ Fabric/lakehouse promotion
```

## Checks

Before relying on local results:

* confirm sample representativeness;
* confirm schema parity with cloud;
* confirm SQL dialect differences;
* document any unsupported Fabric/Spark behavior;
* avoid claiming production equivalence without cloud validation.

## Output

Local-first evidence should include:

```text
input files:
row counts:
schema:
model selector:
test results:
known differences vs cloud runtime:
```
