# Provero Airflow and Alerting

## Airflow Use

Use Provero in Airflow when validation is a scheduled pipeline gate.

Document:

```text
DAG:
task:
suite:
upstream:
downstream:
retry:
failure policy:
alert:
```

## Alerting Use

Use webhook alerts when:

* severity is critical or blocker;
* owner is known;
* response policy exists;
* alert destination is secure.

## DES Rule

A failing Provero check should either block a pipeline, create a review item, or update evidence. It should not be ignored.
