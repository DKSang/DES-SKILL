# DuckDB + dbt Local-First

## Purpose

Use this reference when DuckDB supports dbt development.

## Good Pattern

```text
profile raw files with DuckDB
→ define source assumptions
→ prototype SQL
→ convert prototype into dbt models
→ run dbt-duckdb locally
→ capture evidence
→ promote to Fabric/cloud runtime if needed
```

## Handoff to dbt

Pass these to `des-dbt-engineering`:

```text
source files:
inferred schema:
confirmed schema:
grain:
candidate keys:
quality issues:
prototype SQL:
known limitations:
```

## Rules

* Do not make dbt models before source grain is understood.
* Keep DuckDB prototype SQL readable enough to translate to dbt.
* Document dialect assumptions.
* Validate again when moving from DuckDB to another runtime.
