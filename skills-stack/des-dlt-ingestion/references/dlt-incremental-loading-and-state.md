# dlt Incremental Loading and State

## Purpose

Use incremental loading to reduce latency, cost, and unnecessary reprocessing.

## Cursor Options

Common cursor fields:

```text
updated_at
created_at
id
version
sequence_number
date
```

## State Risks

* shared pipeline names can share state;
* dev/test/prod must not accidentally share pipeline state;
* full refresh can reset state;
* source cursor may be non-monotonic;
* late-arriving data may require lag window.

## DES Evidence

Capture:

```text
cursor field:
initial value:
state before:
state after:
rows loaded:
full refresh behavior:
backfill plan:
```

dlt pipelines store extracted files, load packages, inferred schemas, execution traces, and pipeline state in local working folders, with default under `~/.dlt/pipelines/<pipeline_name>`; this matters for DES repeatability and environment separation.
