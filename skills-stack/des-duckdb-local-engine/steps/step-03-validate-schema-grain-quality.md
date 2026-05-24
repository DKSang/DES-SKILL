# Step 03 - Validate Schema, Grain, and Quality

Use this step when DuckDB is supporting Phase 05, 10, 11, 12, or 16.

## Schema Validation

Check:

- expected columns;
- unexpected columns;
- missing columns;
- data types;
- nullable fields;
- metadata fields;
- source file path fields where relevant.

## Grain Validation

Define the target sentence:

```text
One row represents one ______.
```

Then test:

* candidate primary key uniqueness;
* composite key uniqueness;
* duplicate records;
* join cardinality;
* aggregation consistency.

## Quality Validation

Check:

* nulls in required fields;
* invalid categorical values;
* impossible numeric ranges;
* impossible dates;
* orphan foreign keys;
* duplicate source records;
* inconsistent units;
* inconsistent administrative names/codes.

## Output

Produce a validation summary:

```text
schema result:
grain result:
quality result:
blocking issues:
non-blocking issues:
DES artifact impact:
```
