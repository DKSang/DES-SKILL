# Step 01 - Detect dbt Context

Use this step before writing or modifying dbt code.

## Goal

Identify the DES phase, dbt project state, runtime, existing conventions, and task type.

## Checks

- Find the relevant DES phase and artifact.
- Check whether `dbt_project.yml` exists.
- Inspect `models/`, `macros/`, `seeds/`, `snapshots/`, `tests/`, and `packages.yml` when present.
- Identify adapter/runtime, such as DuckDB, Fabric, Spark, Synapse, Snowflake, BigQuery, Postgres, or Redshift.
- Read existing naming, folder, YAML, materialization, source, selector, and package conventions.
- Classify the task as model planning, model modification, source onboarding, test addition, documentation, troubleshooting, CI, or operations.

## Stop Conditions

Stop before implementation when model grain, business meaning, source ownership, or downstream impact is unclear.

## Output

Create a short context note containing:

```text
DES phase:
dbt project present:
runtime/adapter:
existing conventions:
task type:
risks/blockers:
next step guide:
```
