# dlt Destinations for DES

## Purpose

Select the right dlt destination for the DES phase.

## Local Prototype

Use DuckDB or filesystem when:

- source is being assessed;
- pipeline is experimental;
- local-first validation is needed;
- downstream DuckDB/dbt-duckdb is planned.

## Bronze Landing

Use filesystem or warehouse/lakehouse-compatible destination when:

- raw landing files/tables need to be preserved;
- data will be consumed by Fabric/dbt later;
- evidence must be reproducible.

## Fabric Context

If Fabric is the target runtime, document:

```text
how dlt output reaches Fabric:
local → upload
filesystem → OneLake/Lakehouse
database/warehouse target
notebook or pipeline wrapper
```

## Handoff

Always pass destination, dataset name, table mapping, schema, and load evidence to the next skill.
