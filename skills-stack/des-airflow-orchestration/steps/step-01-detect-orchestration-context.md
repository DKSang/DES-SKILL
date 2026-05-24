# Step 01 - Detect Orchestration Context

Use this step before designing or editing Airflow Dags.

## Goal

Understand what needs orchestration and which DES phase the Dag supports.

## Checks

- Identify active DES phase.
- Identify pipeline scope:
  - ingestion
  - transformation
  - validation
  - publishing
  - monitoring
- Identify stack tools involved:
  - dlt
  - DuckDB
  - dbt
  - Provero
  - Fabric
  - external API/file scripts
- Identify deployment target:
  - local Airflow
  - open-source Airflow
  - Astro
  - Docker Compose
  - Kubernetes
- Identify freshness requirement.
- Identify owner and alert target.
- Identify backfill/catchup expectations.

## Stop Conditions

Stop before implementation when:

- source/layer artifacts are missing;
- freshness requirement is unknown;
- task idempotency is unclear;
- secrets strategy is missing;
- production runtime is unknown;
- non-idempotent tasks are expected to be retried.

## Output

Create a context note:

```text
DES phase:
Dag purpose:
pipeline scope:
stack tasks:
deployment target:
schedule:
freshness:
owner:
risks/blockers:
next step:
```