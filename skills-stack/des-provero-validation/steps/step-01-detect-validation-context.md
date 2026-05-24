# Step 01 - Detect Validation Context

Use this step before creating or editing Provero checks.

## Goal

Identify what needs validation, which DES phase it supports, and what data access method is available.

## Checks

- Identify active DES phase.
- Identify dataset/table/file.
- Identify DES artifact expectation.
- Identify runtime/source:
  - DuckDB
  - PostgreSQL
  - DataFrame
  - Snowflake/BigQuery/MySQL/Redshift if configured
- Identify validation type:
  - source profile
  - Bronze load validation
  - Silver conformance
  - Gold KPI validation
  - contract validation
  - monitoring
  - CI/Airflow gate
- Identify required severity level.

## Stop Conditions

Stop before implementation when:

- dataset identity is unclear;
- source connector is unknown;
- check expectation is not tied to DES artifact;
- business-approved ranges or accepted values are missing;
- contract owner/consumer is unknown;
- source access requires secrets not yet configured.

## Output

Create a context note:

```text
DES phase:
artifact:
dataset:
table/file:
connector:
validation type:
severity approach:
risks/blockers:
next step:
```
