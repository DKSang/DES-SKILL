# Step 07 - Design Lineage, Observability, and Alerts

Use this step when Airflow output feeds shared datasets or production consumers.

## Lineage

Document:

```text
input datasets:
output datasets:
task-level lineage:
manual inlets/outlets:
OpenLineage need:
custom extractor need:
```

## Observability

Document:

```text
Dag run status:
task duration:
data freshness:
row counts:
quality result:
failure rate:
backfill status:
```

## Alerts

Document:

```text
alert condition:
severity:
owner:
channel:
response policy:
escalation:
```

## Rule

Do not enable alerts without a known owner and response policy.