# DuckDB Medallion Local-First Pattern

## Purpose

Use DuckDB to prototype Bronze, Silver, and Gold logic locally.

## Pattern

```text
raw files
→ DuckDB inspection
→ local Bronze profile
→ local Silver prototype
→ local Gold prototype
→ evidence
→ dbt/Fabric implementation
```

## Bronze

DuckDB can inspect:

* raw schema;
* file format;
* row count;
* source metadata;
* parse issues.

## Silver

DuckDB can prototype:

* renaming;
* casting;
* deduplication;
* null handling;
* code normalization;
* joins to reference data.

## Gold

DuckDB can validate:

* fact grain;
* dimension keys;
* bridge logic;
* KPI aggregation;
* advisory/risk rules.

## Limitation

DuckDB local results are not automatically production evidence for Spark/Fabric. They are local evidence and must be promoted or revalidated in the production runtime.
