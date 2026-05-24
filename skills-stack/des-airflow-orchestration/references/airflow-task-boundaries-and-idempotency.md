# Airflow Task Boundaries and Idempotency

## Task Boundary Rule

A task should have one reason to fail.

Good:

```text
run_dlt_open_meteo
validate_bronze_weather
run_dbt_silver_weather
run_provero_gold_risk
```

Bad:

```text
run_everything
process_data
daily_pipeline
```

## Idempotency

A task is idempotent when rerunning it produces the same correct state.

Document for every task:

```text
safe to retry:
safe to backfill:
deduplication:
state reset:
output overwrite:
```

## DES Rule

Do not enable retries for non-idempotent tasks without duplicate protection.