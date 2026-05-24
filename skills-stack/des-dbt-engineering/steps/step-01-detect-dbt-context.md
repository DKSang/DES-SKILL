# Step 01 - Detect dbt Context

Use this step before writing or modifying dbt code.

## Goal

Identify the DES phase, dbt project state, runtime, existing conventions, and task type.

## Checks

- Find the relevant DES phase and artifact.
- Check whether `dbt_project.yml` exists.
- Inspect `models/`, `macros/`, `seeds/`, `snapshots/`, `tests/`, and `packages.yml` when present.
<<<<<<< HEAD
- Identify adapter/runtime:
  - DuckDB
  - Fabric
  - Spark
  - Synapse
  - Snowflake
  - BigQuery
  - Postgres
  - Redshift
  - other
- Read existing naming, folder, YAML, materialization, source, selector, and package conventions.
- Classify the task as:
  - model planning
  - model modification
  - source onboarding
  - test addition
  - documentation
  - troubleshooting
  - CI
  - operations

## Stop Conditions

Stop before implementation when:

- model grain is unknown;
- business meaning is missing;
- source ownership is unclear;
- downstream impact is unclear;
- requested output conflicts with existing Gold or Data Contract artifacts.

## Output

Create a short context note:

```text
DES phase:
DES artifact used:
=======
- Identify adapter/runtime, such as DuckDB, Fabric, Spark, Synapse, Snowflake, BigQuery, Postgres, or Redshift.
- Read existing naming, folder, YAML, materialization, source, selector, and package conventions.
- Classify the task as model planning, model modification, source onboarding, test addition, documentation, troubleshooting, CI, or operations.

## Stop Conditions

Stop before implementation when model grain, business meaning, source ownership, or downstream impact is unclear.

## Output

Create a short context note containing:

```text
DES phase:
>>>>>>> 903800048bdd5063eed38441a6e571febb34ded2
dbt project present:
runtime/adapter:
existing conventions:
task type:
risks/blockers:
next step guide:
```
