# Step 05 - Design Schema Evolution and Contracts

Use this step when source schema may drift or downstream consumers require stable expectations.

## Goal

Define how dlt should react to new tables, new columns, type changes, and bad data types.

## Design Questions

```text
Can the source add new fields?
Can the source change data types?
Are nested structures expected?
Should new columns be accepted, warned, or blocked?
Which tables are public/contracted?
Which fields are required for downstream?
Should Pydantic models or column hints be used?
```

## dlt Options To Consider

* schema inference
* column hints
* primary key hints
* merge key hints
* nested hints
* schema contracts
* Pydantic model validation

## DES Rule

A dlt schema contract is not the same as a DES Data Contract.

```text
dlt schema contract = implementation-level schema behavior
DES Data Contract = producer/consumer/business/quality/access/versioning/change agreement
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/dlt-schema-contract-spec.md
_des-output/evidence/phase-12/dlt-schema-contract-evidence.md
```
