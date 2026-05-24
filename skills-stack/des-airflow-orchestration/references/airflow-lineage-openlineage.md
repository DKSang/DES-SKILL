# Airflow Lineage and OpenLineage

## Purpose

Use lineage when outputs are shared, contractual, or consumed downstream.

## Lineage Design

Document:

```text
input datasets:
output datasets:
task producing output:
downstream consumers:
manual lineage annotation:
OpenLineage extractor need:
```

## DES Usage

Lineage supports:

* impact analysis;
* Data Contract validation;
* release readiness;
* incident response;
* downstream communication.

## Rule

If a Gold dataset feeds dashboards, APIs, semantic models, or ML, lineage should be captured or explicitly waived.