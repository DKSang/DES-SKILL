# Airflow Data Stack Integration

## dlt

Use Airflow to schedule dlt ingestion.

Capture:

```text
pipeline name
resources
destination
state
write disposition
```

## dbt

Use Airflow to run scoped dbt commands/selectors.

Capture:

```text
selector
target
artifacts
test results
```

## Provero

Use Airflow to run validation gates.

Capture:

```text
suite
severity
result
blocking behavior
```

## Fabric

Use Airflow to trigger or coordinate Fabric jobs only when auth and runtime path are defined.

## DES Rule

Airflow coordinates stack tools; each stack skill owns its internal implementation.