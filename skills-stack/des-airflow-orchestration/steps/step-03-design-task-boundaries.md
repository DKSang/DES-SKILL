# Step 03 - Design Task Boundaries

Use this step when decomposing a workflow into Airflow tasks.

## Rule

Each task should have one clear responsibility.

## Good Task Boundaries

```text
extract source
load Bronze
validate Bronze
build Silver
validate Silver
build Gold
validate Gold
publish
notify
```

## Stack Mapping

| Stack   | Airflow task role                     |
| ------- | ------------------------------------- |
| dlt     | run ingestion pipeline                |
| DuckDB  | run local/file profiling or SQL check |
| dbt     | run selected models/tests             |
| Provero | run validation suite                  |
| Fabric  | trigger notebook/pipeline/job         |
| MCP     | inspect/trigger/debug Airflow runtime |

## Task Design Fields

```text
task_id:
responsibility:
input:
output:
command/call:
idempotent:
retry safe:
timeout:
upstream:
downstream:
evidence:
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/airflow-task-matrix.md
```