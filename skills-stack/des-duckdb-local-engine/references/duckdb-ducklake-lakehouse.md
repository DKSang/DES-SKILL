# DuckDB + DuckLake Lakehouse

## Purpose

Use this reference when DuckDB is not only reading files, but managing local/open lakehouse tables.

DuckLake is useful when DES needs:

- Parquet storage;
- SQL catalog metadata;
- table snapshots;
- time travel;
- schema evolution;
- partitioning;
- ACID transactions;
- reproducible local lakehouse evidence.

## Mental Model

```text
DuckDB = execution engine
DuckLake = table/catalog/lakehouse format
Parquet = data storage
SQL database = metadata catalog
```

## DES Usage

DuckLake can support:

* Phase 07 architecture experiments;
* Phase 08 ingestion storage design;
* Phase 09 Bronze table layout;
* Phase 10 Silver local validation;
* Phase 11 Gold local mart prototype;
* Phase 12 schema evolution and contract evidence;
* Phase 16 quality validation with snapshot references.

## Local-First Pattern

```text
raw files
→ DuckDB profile
→ DuckLake Bronze table
→ DuckLake Silver table
→ DuckLake Gold table/view
→ snapshot/time travel validation
→ handoff to dbt/Fabric/Delta/Iceberg decision
```

## Catalog Choice

| Catalog    | Use When                             |
| ---------- | ------------------------------------ |
| DuckDB     | simplest local prototype             |
| SQLite     | lightweight separate catalog         |
| PostgreSQL | shared/multi-client catalog scenario |

## Storage Choice

| Storage             | Use When                           |
| ------------------- | ---------------------------------- |
| local disk          | laptop-first development           |
| project data folder | reproducible project prototype     |
| object storage      | cloud-like architecture experiment |

## What DuckLake Should Not Hide

DuckLake does not automatically solve:

* business meaning;
* source ownership;
* data contracts;
* security classification;
* production deployment choice;
* orchestration;
* observability.

These remain DES responsibilities.

## Evidence To Capture

```text
DuckLake version:
catalog type:
catalog path/connection:
data path:
tables:
snapshot IDs:
schema evolution test:
time travel test:
partitioning:
row counts:
limitations:
```
