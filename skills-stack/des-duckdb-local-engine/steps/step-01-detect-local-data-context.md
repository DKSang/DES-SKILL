# Step 01 - Detect Local Data Context

Use this step before running DuckDB exploration or profiling.

## Goal

Understand what data exists locally, what DES phase is active, and what evidence is needed.

## Checks

- Identify the active DES phase.
- Identify the relevant DES artifact.
- Locate candidate files or DuckDB database.
- Identify file format.
- Estimate data size if possible.
- Determine whether the task is:
  - source profiling;
  - schema inspection;
  - quality assessment;
  - grain validation;
  - SQL prototype;
  - file conversion;
  - dbt-duckdb support;
  - Fabric handoff.

## Stop Conditions

Stop before producing conclusions if:

- the file cannot be found;
- the file format is ambiguous;
- the sample is too small for the claim being made;
- source ownership or business meaning is unknown;
- sensitive data may be present and handling rules are unclear.

## Output

Write a short context note:

```text
DES phase:
source artifact:
file/database path:
format:
estimated size:
task type:
risk/blockers:
next step:
```
