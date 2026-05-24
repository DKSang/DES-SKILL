# DuckDB Profiling Patterns

## Basic Profile

Capture:

```text
row count
column count
schema
sample rows
null counts
distinct counts
min/max
top values
duplicate keys
```

## Grain Checks

For a candidate key:

```text
row count
distinct key count
duplicate key count
null key count
```

For a composite key:

```text
group by key columns
count rows per key
find count > 1
```

## Join Checks

Before joining:

```text
left row count
right row count
distinct join keys
unmatched left keys
unmatched right keys
many-to-many risk
```

## DES Usage

Use profiling patterns to revise:

* Phase 05 source inventory;
* Phase 10 Silver rules;
* Phase 11 Gold grain;
* Phase 12 contracts;
* Phase 16 quality gates.
