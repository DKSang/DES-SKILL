# dlt Airflow Deployment

## Purpose

Use this reference when a dlt pipeline must run on a schedule.

## Design Questions

```text
What triggers the pipeline?
What is the schedule?
What is the expected freshness?
What retries are safe?
Is the pipeline idempotent?
Where is state stored?
How are secrets injected?
What is the failure alert?
What is the backfill process?
```

## Handoff to Airflow Skill

Pass:

```text
pipeline script:
resources:
write dispositions:
state behavior:
destination:
schedule:
retry safety:
freshness expectation:
evidence path:
```

## DES Rule

Do not schedule a dlt pipeline before write disposition, state, and retry behavior are understood.
