# Step 06 - Design DuckLake Local Lakehouse

Use this step when DuckDB needs to manage datasets as lakehouse-style tables rather than loose files.

## Goal

Design a DuckLake-backed local lakehouse prototype for DES.

DuckLake combines:

```text
Parquet data files
+ SQL database catalog
+ snapshots / time travel
+ schema evolution
+ ACID transactions
```

## When To Use

Use DuckLake when:

* loose Parquet files are no longer enough;
* DES needs table-level history or snapshots;
* schema evolution must be tested;
* multiple related tables must be updated consistently;
* the project needs a local lakehouse prototype before Fabric/Delta/Iceberg;
* the project needs reproducible Bronze/Silver/Gold local tables.

## Design Questions

Answer:

```text
What is the catalog database?
Where are Parquet data files stored?
Which DES layers map to DuckLake tables?
Which tables need snapshots?
Which schema changes are expected?
Which tables require partitioning?
Which operations must be transactional?
Is DuckLake only a prototype or a production candidate?
```

## Catalog Options

Choose one:

```text
DuckDB catalog database
SQLite catalog database
PostgreSQL catalog database
```

Use DuckDB/SQLite for local prototype. Consider PostgreSQL if multiple clients or stronger shared catalog behavior is needed.

## Storage Options

Choose one:

```text
local disk
project data folder
external volume
object storage
```

For DES local-first workflow, prefer:

```text
data/ducklake/
```

or:

```text
_des-output/runtime/ducklake/
```

depending on whether the data is project data or generated evidence.

## Layer Mapping

Suggested mapping:

| DES layer | DuckLake object                               |
| --------- | --------------------------------------------- |
| Bronze    | raw-preserving DuckLake tables                |
| Silver    | cleaned/conformed DuckLake tables             |
| Gold      | mart DuckLake tables or views                 |
| Evidence  | snapshot IDs, validation SQL, profile outputs |

## Example Setup

```sql
INSTALL ducklake;

ATTACH 'ducklake:metadata.ducklake'
AS des_ducklake
(DATA_PATH 'data/ducklake/');

USE des_ducklake;
```

DuckLake also supports using PostgreSQL or SQLite as the catalog database.

## Validation

After creating or updating tables, capture:

```text
catalog path:
data path:
tables:
snapshots:
schema:
partitioning:
row counts:
time travel check:
schema evolution check:
known limitations:
```

## Stop Conditions

Stop and route back to architecture/design if:

* the project already selected Delta/Iceberg/Fabric as the production table format;
* the user expects DuckLake to replace Fabric without an architecture decision;
* catalog location, storage location, or ownership is unclear;
* concurrency or production access expectations are not defined.

## Output

Create or update:

```text
_des-output/implementation-artifacts/ducklake-local-lakehouse-design.md
_des-output/evidence/phase-07/ducklake-architecture-evidence.md
_des-output/evidence/phase-09/ducklake-bronze-evidence.md
_des-output/evidence/phase-10/ducklake-silver-evidence.md
_des-output/evidence/phase-11/ducklake-gold-evidence.md
```
