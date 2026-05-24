# dlt SQL Database Ingestion

## Design Checks

Document:

```text
source database:
schema:
tables:
primary keys:
incremental columns:
row volume:
CDC availability:
permissions:
load strategy:
```

## Strategy

Use:

* append for log/event tables;
* merge for mutable entity tables;
* replace for small reference snapshots.

## Safety

* Do not run unbounded extraction without filters for large tables.
* Separate dev/test/prod credentials.
* Document source query filters.
* Capture row counts and cursor ranges.
