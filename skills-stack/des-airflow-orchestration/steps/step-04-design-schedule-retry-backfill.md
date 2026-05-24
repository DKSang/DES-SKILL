# Step 04 - Design Schedule, Retry, and Backfill

Use this step before enabling a Dag in production.

## Schedule

Define:

```text
schedule:
timezone:
freshness expectation:
source availability:
downstream dependency:
```

## Retry

Define:

```text
retry count:
retry delay:
exponential backoff:
retryable errors:
non-retryable errors:
```

## Backfill / Catchup

Define:

```text
catchup:
backfill range:
data partition:
idempotency:
state reset:
historical source availability:
validation after backfill:
```

## Stop Conditions

Stop if:

* catchup is enabled but historical source behavior is unknown;
* retries may duplicate writes;
* backfill may overwrite curated data;
* downstream consumers are not informed of replay behavior.