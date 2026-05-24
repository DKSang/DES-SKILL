# Airflow Testing and Debugging

## Local Testing

Check:

- Dag parse;
- dependency installation;
- task execution;
- environment variables;
- connections;
- secrets;
- validation gates;
- logs.

## Debugging

Inspect:

```text
Dag run state
task instance state
task logs
upstream dependency
retry history
connection error
data availability
operator error
```

## DES Evidence

Testing results should be written to:

```text
_des-output/evidence/phase-14/airflow-orchestration-evidence.md
```