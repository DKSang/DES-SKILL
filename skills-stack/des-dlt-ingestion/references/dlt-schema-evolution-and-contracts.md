# dlt Schema Evolution and Contracts

## Purpose

Use this reference when source structure may change.

## Schema Evolution Risks

- new columns;
- missing fields;
- type changes;
- nested field changes;
- new nested tables;
- bad data types.

## dlt Controls

Consider:

```text
schema inference
column hints
primary_key
merge_key
nested_hints
schema_contract
Pydantic model schema
```

## DES Distinction

```text
dlt schema contract protects implementation behavior.
DES Data Contract defines consumer/business expectations.
```

## Evidence

Capture:

```text
schema before:
schema after:
new columns:
type changes:
contract mode:
load result:
blocked changes:
accepted changes:
```
