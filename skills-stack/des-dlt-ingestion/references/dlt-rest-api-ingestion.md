# dlt REST API Ingestion

## API Design Checks

Document:

```text
base URL:
endpoints:
auth:
pagination:
rate limits:
retry behavior:
cursor:
response schema:
nested fields:
error format:
```

## DES Rules

* Do not hardcode secrets.
* Preserve request parameters used for evidence.
* Respect source rate limits.
* Record source API caveats.
* Use incremental loading where the API supports it.
* Use append for immutable event endpoints.
* Use merge for mutable entity endpoints.
