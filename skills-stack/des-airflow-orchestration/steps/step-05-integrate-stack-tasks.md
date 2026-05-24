# Step 05 - Integrate Stack Tasks

Use this step when Airflow coordinates DES stack tools.

## dlt

Airflow should call stable dlt pipeline entrypoints.

Document:

```text
pipeline script:
pipeline name:
resources:
destination:
state location:
write disposition:
```

## dbt

Airflow should run scoped dbt selectors, not the full project by default.

Document:

```text
selector:
target:
state/defer:
artifacts:
```

## Provero

Airflow should run validation before downstream publish.

Document:

```text
config path:
suite:
severity behavior:
blocking policy:
```

## Fabric

Airflow should trigger Fabric jobs only when auth/runtime/deployment path is defined.

Document:

```text
workspace:
item:
environment:
trigger:
polling:
failure behavior:
```

## Output

Update the Airflow task matrix with stack-specific commands and handoff artifacts.