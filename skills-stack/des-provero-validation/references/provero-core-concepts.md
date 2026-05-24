# Provero Core Concepts for DES

## Mental Model

```text
provero.yaml = declarative validation config
source = connector/table/file/dataframe
checks = quality expectations
contracts = schema/SLA/quality agreements
result store = historical validation metrics
report = human-readable evidence
alerts = operational notification
```

## DES Usage

Use Provero to validate:

* source assumptions;
* Bronze load outputs;
* Silver conformance;
* Gold KPI/mart expectations;
* data contracts;
* SLA/freshness;
* anomaly and drift;
* operational monitoring.

## Not Provero's Main Role

Provero should not replace:

* ingestion logic;
* transformation modeling;
* DES contract negotiation;
* dashboard development;
* orchestration design.
