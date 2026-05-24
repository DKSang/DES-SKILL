# Airflow Scheduling, Retry, and Backfill

## Schedule

Schedule must be derived from:

- source availability;
- business freshness requirement;
- downstream dependency;
- compute/cost constraints.

## Retry

Retry should be based on failure mode:

| Failure | Retry? |
|---|---|
| temporary API/network error | yes |
| data contract violation | no, unless upstream reload expected |
| syntax/config error | no |
| source rate limit | yes, with delay/backoff |
| duplicate write risk | only with idempotency |

## Backfill

Backfill requires:

- historical source availability;
- partition strategy;
- idempotent writes;
- validation after replay;
- downstream communication.