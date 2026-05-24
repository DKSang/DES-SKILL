# Step 03 - Choose Write Disposition

Use this step before running a dlt resource.

## Options

dlt write disposition controls how data is written to the destination.

Use:

```text
append
replace
merge
```

## Decision Guide

Use `append` when:

* data is immutable;
* each record is an event;
* duplicate handling is not required at load time;
* downstream deduplication is acceptable and documented.

Use `replace` when:

* the dataset is small enough for full refresh;
* the source provides full snapshots;
* history is not needed;
* replacement cost is acceptable.

Use `merge` when:

* entities are mutable;
* records may be updated;
* primary key or merge key is known;
* upsert/deduplication is required.

## Required Documentation

For every resource, document:

```text
resource:
write disposition:
why:
primary key:
merge key:
history required:
full refresh behavior:
risk:
```

## Stop Conditions

Stop if mutable data is assigned `append` without duplicate/history strategy.

Stop if `merge` is selected without primary key or merge key.

Stop if `replace` is selected for large datasets without cost/freshness justification.
