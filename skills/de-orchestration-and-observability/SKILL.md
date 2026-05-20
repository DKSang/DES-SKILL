---
name: de-orchestration-and-observability
description: Use when designing schedules, dependencies, monitoring, logging, alerting, retries, backfills, SLAs, and operational ownership for data pipelines.
---

# de-orchestration-and-observability

## When To Use

Use after ingestion, transformations, and quality gates are defined. Use before production release or whenever pipelines are unreliable, undocumented, or invisible to the team.

## Purpose

Define how pipelines run, recover, alert, and prove they met data freshness and reliability SLA expectations — covering DAG structure, retry policies, monitoring signals, and incident runbooks.

## Inputs Required

- Pipeline inventory from ingestion and transformation designs.
- Data quality rules and layer gate specs (`14-data-quality.md`).
- SLA requirements (`03-requirements-and-kpis.md`).
- Architecture tooling choices (`07-architecture-design.md`).

## Decision Matrix — Orchestration Tool Selection

| Scenario | Recommended Tool | When to Override |
| :--- | :--- | :--- |
| Complex multi-pipeline DAG dependencies | **Apache Airflow** | Use Dagster if asset-centric tracking is needed |
| Azure-first, no custom code orchestration | **Azure Data Factory** | Use Airflow if complex Python branching needed |
| Microsoft Fabric ecosystem | **Fabric Pipelines** | — |
| Databricks-centric workloads | **Databricks Workflows** | Use Airflow if cross-platform DAGs needed |
| Simple local prototype, no infrastructure | **cron + shell scripts** | Replace before production — no retry, no observability |
| Event-driven, modern orchestration | **Prefect / Dagster** | Both are good alternatives to Airflow for new projects |

**Default**: If the team has existing Airflow expertise, use Airflow. Do not introduce a new orchestration tool without a justified architectural decision record (ADR).

## DAG Design Rules

| Principle | Implementation |
| :--- | :--- |
| Date parameterization | Always use `{{ ds }}` or `{{ data_interval_start }}` — never `datetime.now()` |
| Upstream dependency checks | Use ExternalTaskSensor or data-availability sensors — never fixed time-based waits |
| Task decoupling | Tasks communicate via storage references (file paths, table names), not in-memory passing |
| Concurrency limits | Set `max_active_runs` and per-task concurrency to prevent overwhelming source systems |
| Task timeouts | Every task has an explicit timeout; no task can run forever |

## Step-By-Step Process

1. Define the full pipeline inventory (name, trigger, schedule, SLA, owner).
2. Map DAG topology: dependency graph, sensors, parallel branches.
3. Choose orchestration tool using the Decision Matrix.
4. Specify retry policy per task: max retries, delay strategy (exponential backoff + jitter), timeout.
5. Define monitoring signals: pipeline duration (P90), row count anomaly, DLQ record count, freshness SLA.
6. Set alert thresholds and notification paths (Slack channel + PagerDuty escalation).
7. Write runbooks for the 3 most common failure scenarios.
8. Define backfill procedure and validate idempotency.

## Output File

The output_file path is configured in `customize.toml`. Default:

Write the final artifacts to:

- `{project-root}/_des-output/planning-artifacts/15-orchestration-and-observability.md` (main design)
- `{project-root}/_des-output/planning-artifacts/15b-pipeline-specs.md` (one spec per pipeline)

Use the matching templates from:

- `{skill-root}/../../templates/15-orchestration-and-observability-template.md`
- `{skill-root}/../../templates/15b-pipeline-spec-template.md`

After writing the files, summarize paths and recommend the next skill.

## Required Outputs

- Pipeline inventory with trigger, schedule, SLA, and owner.
- DAG topology and dependency map.
- Retry policy spec (max retries, backoff, jitter, timeout per task type).
- Monitoring signals with P90 thresholds and alert paths.
- Runbooks for SLA breach, DLQ spike, and source outage scenarios.
- Backfill procedure with idempotency confirmation.

## Quality Checklist

- [ ] All pipelines use scheduler date variables — zero `datetime.now()` calls.
- [ ] DAG dependencies use sensors (not hardcoded time delays).
- [ ] Retry uses exponential backoff with jitter on all connection-facing tasks.
- [ ] SLA alert fires if P90 pipeline duration is exceeded.
- [ ] DLQ count > 0 triggers an alert.
- [ ] Runbook covers at least: SLA breach, DLQ spike, source system outage.
- [ ] Backfill is documented and tested for idempotency.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Hardcoded `datetime.now()` in pipeline code | Breaks backfills; different runs produce different results for the same logical date |
| Fixed delay retries without jitter | Concurrent retries all fire simultaneously, creating thundering-herd on the source |
| Shared alert channels with no owner | Alerts become noise; nobody acts; incidents go unresolved |
| Monitoring only infrastructure (CPU, memory) | Data freshness breaches and DLQ spikes are invisible — users discover problems first |
| Manual, undocumented backfill process | First production backfill takes days; wrong execution order corrupts downstream tables |
| No task timeout configured | A stuck Spark job holds DAG worker slots indefinitely; all pipelines queue behind it |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Audit logs must capture all pipeline execution events; no sensitive data in log output |
| Data Management | DQ gate results integrated into DAG as blocking tasks that enforce Medallion layer promotion |
| DataOps | Retry, timeout, and idempotency specs make pipelines safe to redeploy via CI/CD without side effects |
| Data Architecture | Orchestration tool choice is an architectural decision; log in ADR with justification |
| Orchestration | This is the core phase — full DAG design, dependency, retry, and runbook documentation |
| Software Engineering | Pipeline code is version-controlled; DAG changes reviewed in PRs before production deploy |

## Handoff To The Next Skill

Next use `de-semantic-model-design` to define certified metrics, dimensions, relationships, and business glossary before exposing data products to consumers.
