# Step 04 - Design Incremental State

Use this step when the source should load only new or changed data.

## Goal

Avoid full reloads when source data can be extracted incrementally.

## Required Questions

```text
Is the data stateful or stateless?
Can the source return changes since a cursor?
What is the cursor field?
Is the cursor monotonic?
Is there late-arriving data?
Is a lag/attribution window needed?
How is state reset safely?
What happens on failed run?
```

## Incremental Design

Document:

```text
resource:
cursor field:
initial value:
last value storage:
lag window:
deduplication strategy:
full refresh strategy:
state reset strategy:
backfill strategy:
failure behavior:
```

## DES Evidence

Capture:

```text
incremental run result:
state before:
state after:
rows extracted:
rows loaded:
cursor min/max:
late-arriving handling:
```

## Stop Conditions

Stop if the source requires incremental loading but no reliable cursor, key, or state strategy exists.
