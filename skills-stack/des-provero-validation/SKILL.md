---
name: des-provero-validation
description: Use when designing, implementing, reviewing, or collecting evidence from Provero data quality checks inside a DES workflow, including source profiling, Bronze/Silver/Gold validation, data contracts, SLA checks, anomaly detection, result history, reports, alerts, dbt interoperability, and Airflow integration.
---

# des-provero-validation

## Purpose

Use this skill to turn DES quality expectations into executable Provero validation suites and evidence packs.

Provero is used here as a declarative validation and evidence engine:

```text
DES artifact expectations
→ provero.yaml
→ checks / contracts / SLAs
→ run results / reports / history
→ DES evidence pack
→ Done Gate decision
```

This skill does not replace DES Data Contracts, dbt tests, or source assessment. It operationalizes them.

Core principle:

```text
DES defines the expectation.
Provero validates the expectation against real data.
Evidence decides whether the phase is Done.
```

---

## When To Use

Use this skill when:

* Phase 05 Source Assessment needs data profiling and suggested checks.
* Phase 09 Bronze Layer needs raw load validation.
* Phase 10 Silver Layer needs conformance checks.
* Phase 11 Gold Layer needs KPI/mart validation.
* Phase 12 Data Contracts need schema/SLA/column-check validation.
* Phase 13 implementation needs validation gates.
* Phase 14 orchestration needs Provero Airflow integration.
* Phase 16 quality and monitoring need formal check suites.
* The project needs reports, alerts, result history, anomaly detection, or continuous monitoring.
* The data can be reached through DuckDB, PostgreSQL, DataFrame, or another supported Provero connector.

Do not use this skill to implement ingestion, heavy transformation logic, dimensional modeling, or dashboard design.

---

## Required Inputs

Look for DES artifacts:

```text
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/implementation-artifacts/
_des-output/evidence/
```

Look for runtime/context files:

```text
provero.yaml
provero*.yaml
dbt_project.yml
models/**/*.yml
dlt pipeline outputs
DuckDB database or Parquet files
Airflow DAGs
CI workflow files
```

Look for available data access:

```text
DuckDB table or file expression
PostgreSQL connection
Pandas/Polars DataFrame
Snowflake/BigQuery/MySQL/Redshift if enabled
```

---

## Activation Protocol

When activated:

1. Identify the DES phase and dataset/output being validated.
2. Read the relevant DES artifact before designing checks.
3. Identify data access method:

   * DuckDB
   * PostgreSQL
   * DataFrame
   * other supported connector
4. Classify validation type:

   * source profile
   * Bronze load validation
   * Silver conformance validation
   * Gold/KPI validation
   * data contract validation
   * anomaly monitoring
   * pipeline/CI gate
   * Airflow scheduled check
5. Design Provero check suite.
6. Decide severity: info, warning, critical, blocker.
7. Decide evidence outputs: CLI result, JSON, HTML report, history, contract diff.
8. Map failed checks to DES artifact revisions or Done Gate blockers.
9. Hand off to dbt, dlt, DuckDB, Airflow, Fabric, or DES phase skill as needed.

---

## DES-to-Provero Mapping

| DES concern       | Provero validation concern                              |
| ----------------- | ------------------------------------------------------- |
| Source assessment | profile, row count, nulls, accepted values, type checks |
| Bronze validation | load presence, row count, freshness, metadata checks    |
| Silver validation | not null, uniqueness, relationships, range, regex, type |
| Gold validation   | KPI ranges, aggregate row counts, anomaly, custom SQL   |
| Data contracts    | schema, column checks, SLA, contract diff               |
| Freshness/SLA     | freshness, latency, availability                        |
| Quality gates     | severity, blocker checks, run result                    |
| Monitoring        | result store, history, anomaly, watch, alerts           |
| Orchestration     | Airflow operator/decorator                              |
| dbt interop       | export dbt tests from Provero checks                    |

---

## Stack Best Practices

Apply these practices:

* Start from DES expectations, not random generic checks.
* Use profiling only to suggest checks; do not treat suggestions as approved requirements.
* Mark phase-critical checks as `blocker`.
* Use `warning` for non-blocking quality concerns.
* Use `info` for exploratory observations.
* Keep Provero config versioned with the project.
* Do not store secrets in `provero.yaml`.
* Prefer DuckDB connector for local-first file/table validation.
* Use custom SQL only when built-in checks are not enough.
* Use result history before enabling anomaly detection.
* Treat Provero data contracts as executable validation, not the full DES Data Contract.
* Capture failures as artifact revision feedback, not only as test failures.
* Use Airflow integration only after check suite semantics are stable.
* Export to dbt only when those checks should live in the dbt modeling layer.

---

## Decision Matrix

| Situation                  | Preferred action                                             |
| -------------------------- | ------------------------------------------------------------ |
| Need quick profile         | Use `provero profile --suggest` and review suggestions       |
| Need Bronze load gate      | row_count, freshness, metadata not_null                      |
| Need Silver conformance    | not_null, unique, accepted_values, range, regex, type        |
| Need Gold/KPI validation   | custom_sql, anomaly, row_count_change, referential_integrity |
| Need contract validation   | Provero contracts with schema, column checks, SLA            |
| Need historical monitoring | result store + history + anomaly                             |
| Need alerting              | webhook alerts on failure                                    |
| Need Airflow schedule      | ProveroCheckOperator or decorator                            |
| Need dbt interop           | export dbt schema tests only for model-level checks          |
| Need evidence pack         | run result + report + history + limitations                  |

---

## Output Files

Depending on context, create or update:

```text
provero.yaml
provero/<dataset>-checks.yaml
_des-output/implementation-artifacts/provero-suite-plan.md
_des-output/implementation-artifacts/provero-monitoring-plan.md
_des-output/evidence/phase-05/provero-source-profile.md
_des-output/evidence/phase-09/provero-bronze-validation.md
_des-output/evidence/phase-10/provero-silver-validation.md
_des-output/evidence/phase-11/provero-gold-validation.md
_des-output/evidence/phase-12/provero-contract-validation.md
_des-output/evidence/phase-16/provero-quality-evidence-pack.md
```

---

## Quality Checklist

Before marking Provero-supported work Done, verify:

* DES phase and dataset are identified.
* Checks map to explicit DES expectations.
* Data connector is defined.
* Source table/file expression is correct.
* Severity levels are justified.
* Required freshness/latency expectations are represented.
* Critical keys have not_null and uniqueness checks where relevant.
* Accepted values/ranges are business-approved.
* Custom SQL checks are documented.
* Contract validation is aligned with DES Data Contract.
* Failures are mapped to artifact revisions or waivers.
* Evidence files are captured.
* Alerts/monitoring are not enabled prematurely.

---

## Common Mistakes To Avoid

* Generating many checks without linking them to DES requirements.
* Treating Provero profile suggestions as approved business rules.
* Using Provero contracts as a substitute for DES Data Contracts.
* Making all failures blockers without business severity logic.
* Ignoring historical baseline requirements for anomaly detection.
* Hiding failed checks behind warnings.
* Putting secrets in YAML.
* Running validation after deployment only instead of using it as a phase gate.
* Exporting every Provero check to dbt when some belong outside dbt.
* Treating local DuckDB validation as final production evidence without runtime caveat.

---

## Handoff To The Next Skill

After this skill completes:

* hand off to `des-duckdb-local-engine` when data access/profiling requires local file inspection;
* hand off to `des-dlt-ingestion` when load failures or source drift require ingestion changes;
* hand off to `des-dbt-engineering` when checks should become dbt tests or model docs;
* hand off to `des-airflow-orchestration` when validation should run on schedule;
* hand off to `des-fabric-engineering` when validation must run against Fabric output;
* hand off to `des-data-contracts` when contract failures require producer/consumer agreement changes.
```