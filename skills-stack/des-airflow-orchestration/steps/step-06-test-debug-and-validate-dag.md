# Step 06 - Test, Debug, and Validate Dag

Use this step before deploying Airflow workflows.

## Test Strategy

Check:

- Dag parses successfully.
- Required dependencies are installed.
- Variables/connections/secrets are available.
- Tasks can run locally or in test environment.
- Validation gates fail correctly when data is bad.
- Logs are sufficient for debugging.
- Backfill/catchup behavior is tested where relevant.

## Debug Strategy

When a task fails, inspect:

```text
task logs
exception type
upstream task state
connection/secret availability
runtime environment
data availability
retry behavior
xcom/outputs
```

## Evidence

Capture:

```text
Dag parse result:
test run:
task status:
failure cases:
logs:
fixes:
remaining risks:
```