---
name: des-airflow-orchestration
description: Use when designing, implementing, testing, debugging, deploying, or reviewing Apache Airflow orchestration inside a DES workflow, including Dags, task boundaries, schedules, retries, backfills, data quality gates, dlt/dbt/Provero/Fabric integration, lineage, observability, alerts, MCP usage, and operational evidence.
---

# des-airflow-orchestration

## Purpose

Use this skill to turn DES implementation artifacts into reliable Airflow orchestration.

Airflow is used here as the orchestration and operational coordination layer:

```text
DES phase outputs
→ executable task graph
→ scheduled Dag
→ retries/backfills
→ validation gates
→ lineage/monitoring
→ operational evidence
```

This skill does not replace dlt, dbt, DuckDB, Provero, or Fabric. It coordinates them.

Core principle:

```text
DES defines what must happen and why.
Airflow defines when, in what order, with what retries, and with what operational evidence.
```

---

## When To Use

Use this skill when:

* Phase 08 Ingestion Specification needs scheduled ingestion.
* Phase 13 Pipeline Implementation needs executable orchestration.
* Phase 14 Orchestration and Scheduling is active.
* Phase 15 CI/CD needs Dag validation before deployment.
* Phase 16 Data Quality needs Provero/dbt validation gates.
* Phase 17 Observability needs alerts, lineage, or monitoring design.
* The project needs to coordinate dlt, dbt, DuckDB, Provero, Fabric notebooks, APIs, or file jobs.
* The user asks for Airflow Dag design, authoring, testing, debugging, deployment, backfill, retry, or lineage.
* Airflow MCP or Astronomer agent tooling is available.

Do not use this skill to write heavy business transformation logic inside Airflow tasks. Route transformations to dbt, DuckDB, Fabric, or another execution layer.

---

## Required Inputs

Look for DES artifacts:

```text
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/implementation-artifacts/
_des-output/evidence/
```

Look for project/runtime files:

```text
dags/
airflow_settings.yaml
docker-compose.yml
astro/
Dockerfile
requirements.txt
pyproject.toml
dbt_project.yml
provero.yaml
dlt pipeline scripts
Fabric notebook/pipeline references
OpenLineage config
```

Look for operational context:

```text
schedule
freshness requirement
owner
retry policy
backfill requirement
SLA expectation
alert target
environment: local/dev/test/prod
Airflow version
deployment target: OSS Airflow / Astro / Kubernetes / Docker Compose
```

---

## Activation Protocol

When activated:

1. Identify the DES phase and orchestration goal.
2. Read relevant DES artifacts before designing a Dag.
3. Identify stack tasks:

   * dlt ingestion
   * DuckDB profiling/prototype
   * dbt transformation
   * Provero validation
   * Fabric notebook/pipeline
   * external API/file checks
4. Define Dag boundary.
5. Define task boundaries.
6. Define dependencies.
7. Define schedule, retry, timeout, backfill, and catchup behavior.
8. Define idempotency and safe rerun behavior.
9. Define validation gates.
10. Define lineage, logs, alerting, and evidence capture.
11. Decide whether MCP/Astronomer tooling should be used.
12. Produce DES evidence and handoff.

---

## DES-to-Airflow Mapping

| DES concern             | Airflow concern                                |
| ----------------------- | ---------------------------------------------- |
| Ingestion specification | scheduled source extraction tasks              |
| Bronze layer            | landing/load tasks and raw validation          |
| Silver layer            | transformation task group                      |
| Gold layer              | mart build task group                          |
| Data contracts          | validation gate before downstream consumption  |
| Quality gates           | Provero/dbt/DuckDB checks as blocking tasks    |
| Freshness               | schedule, sensors, freshness checks, alerts    |
| CI/CD                   | Dag parse tests, unit tests, deployment checks |
| Observability           | logs, task status, alerting, history           |
| Lineage                 | inlets/outlets, OpenLineage, task metadata     |
| Operations              | retries, backfill, catchup, manual triggers    |

---

## Stack Best Practices

Apply these practices:

* Keep Airflow tasks thin; call external tools/scripts instead of embedding heavy logic.
* Make tasks idempotent where possible.
* Define clear task boundaries around source, layer, and validation gates.
* Do not make one giant task that does ingestion, transform, validation, and publish together.
* Avoid top-level code that performs network/database calls during Dag parse.
* Use explicit schedules and freshness expectations.
* Define retry policy based on failure type.
* Define backfill behavior before enabling catchup.
* Use validation tasks as gates before publishing downstream outputs.
* Capture run evidence into `_des-output/evidence/`.
* Do not store secrets in Dag files.
* Use environment variables, connections, or secret backends for credentials.
* Add lineage metadata when datasets are important downstream.
* Test Dags locally before deployment.
* Keep Airflow orchestration separate from business logic.

---

## Decision Matrix

| Situation             | Preferred action                                             |
| --------------------- | ------------------------------------------------------------ |
| Need source ingestion | Airflow task calls dlt pipeline                              |
| Need local profiling  | Airflow task calls DuckDB/Provero check or external script   |
| Need transformations  | Airflow task calls dbt/Fabric/notebook job                   |
| Need quality gate     | Airflow task runs Provero/dbt tests and blocks downstream    |
| Need lineage          | Add inlets/outlets or OpenLineage extractor                  |
| Need dbt in Airflow   | Consider Cosmos pattern if project uses dbt heavily          |
| Need human approval   | Consider Airflow HITL pattern if Airflow 3.1+ is available   |
| Need troubleshooting  | Inspect task logs, Dag run state, dependencies, retries      |
| Need deployment       | Validate Dag parse, dependencies, env config, secrets, CI    |
| Need MCP              | Use Airflow MCP for Dag management, triggering, logs, health |

---

## Output Files

Depending on context, create or update:

```text
_des-output/implementation-artifacts/airflow-dag-design.md
_des-output/implementation-artifacts/airflow-task-matrix.md
_des-output/implementation-artifacts/airflow-operational-readiness.md
_des-output/implementation-artifacts/airflow-lineage-plan.md
_des-output/evidence/phase-14/airflow-orchestration-evidence.md
_des-output/evidence/phase-16/airflow-quality-gate-evidence.md
_des-output/evidence/phase-17/airflow-monitoring-evidence.md
```

---

## Quality Checklist

Before marking Airflow-supported work Done, verify:

* DES phase and orchestration goal are identified.
* Dag boundary is clear.
* Each task has one clear responsibility.
* Task dependencies reflect actual data dependencies.
* Schedule matches freshness requirement.
* Retry/catchup/backfill behavior is defined.
* Idempotency and rerun behavior are documented.
* Secrets are not hardcoded.
* Validation gates are included where required.
* Failure behavior and alerting are defined.
* Lineage is documented if outputs are shared.
* Local Dag parse/test strategy exists.
* Deployment target is known.
* Evidence capture is planned or completed.

---

## Common Mistakes To Avoid

* Putting all pipeline logic into one Airflow task.
* Doing heavy work at Dag parse time.
* Treating Airflow as a transformation engine instead of orchestrator.
* Enabling catchup without backfill design.
* Retrying non-idempotent tasks blindly.
* Running validation after publish instead of before publish.
* Hiding data quality failures as warnings when they should block.
* Hardcoding secrets in Dag files.
* Ignoring task logs and operational evidence.
* Deploying Dags without parse/test checks.
* Designing Airflow before DES source/layer artifacts are stable.

---

## Handoff To The Next Skill

After this skill completes:

* hand off to `des-dlt-ingestion` when ingestion task internals need design;
* hand off to `des-dbt-engineering` when dbt execution/modeling needs design;
* hand off to `des-provero-validation` when validation suites need formalization;
* hand off to `des-fabric-engineering` when Fabric jobs/notebooks/pipelines must be orchestrated;
* hand off to `des-mcp-integration` when Airflow MCP server/tool governance is needed;
* hand off to `des-release-readiness-review` when deployment readiness must be reviewed.