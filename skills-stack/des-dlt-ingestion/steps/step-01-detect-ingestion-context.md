# Step 01 - Detect Ingestion Context

Use this step before designing or writing dlt pipeline code.

## Goal

Understand the DES phase, source type, target destination, and ingestion risk.

## Checks

- Identify the active DES phase.
- Read the Data Source Inventory and Ingestion Specification if available.
- Identify source type:
  - REST API
  - SQL database
  - filesystem/cloud storage
  - Python iterable/dataframe
  - verified dlt source
- Identify target destination:
  - DuckDB
  - filesystem
  - database/warehouse
  - Fabric-related target
  - staging area
- Identify auth and secrets requirements.
- Identify expected freshness.
- Identify data volume and update pattern.
- Identify nested data and schema drift risk.

## Stop Conditions

Stop before implementation when:

- source owner is unknown;
- auth/secrets handling is unclear;
- target destination is not chosen;
- source update behavior is unknown;
- mutable data has no key or merge strategy;
- source terms/rate limits make ingestion unsafe.

## Output

Create a short context note:

```text
DES phase:
source name:
source type:
source owner:
auth method:
freshness expectation:
target destination:
data volume:
update behavior:
known risks:
next step:
```
