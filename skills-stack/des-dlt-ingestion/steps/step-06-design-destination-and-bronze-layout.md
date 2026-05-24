# Step 06 - Design Destination and Bronze Layout

Use this step when deciding where dlt loads data.

## Goal

Make dlt output compatible with DES Bronze and downstream stack choices.

## Destination Questions

```text
Is this local prototype or production ingestion?
Is the first destination DuckDB, filesystem, warehouse, or Fabric-related?
Should output be raw-preserving or normalized?
Should nested tables be kept or flattened later?
What metadata fields are required?
How are environments separated?
```

## Bronze Design

Document:

```text
pipeline name:
dataset name:
destination:
resource-to-table mapping:
Bronze table/file naming:
metadata columns:
load package location:
state location:
schema location:
environment:
```

## Rules

* Keep Bronze raw-preserving where possible.
* Do not hide source metadata.
* Preserve source file/API path where possible.
* Document normalization of nested structures.
* Keep environment separation explicit.
* Do not share dev/test/prod state accidentally.
