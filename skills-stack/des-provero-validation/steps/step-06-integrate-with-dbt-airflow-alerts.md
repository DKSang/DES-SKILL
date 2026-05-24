# Step 06 - Integrate with dbt, Airflow, and Alerts

Use this step when validation must be embedded into workflows.

## dbt Interop

Use dbt export when Provero checks should become dbt schema tests.

Use this only for model-level checks that belong in the dbt transformation layer.

Do not export checks that belong to source assessment, operational monitoring, or cross-system SLA monitoring.

## Airflow Integration

Use Airflow integration when validation should run on schedule or as a pipeline gate.

Document:

```text
DAG:
task:
config path:
suite:
upstream dependency:
downstream dependency:
retry behavior:
failure behavior:
alert:
```

## Alerts

Use webhook alerts only after severity and failure policy are agreed.

Document:

```text
trigger:
target:
secret handling:
expected audience:
incident policy:
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/provero-monitoring-plan.md
```
