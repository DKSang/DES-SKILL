# Orchestration and Observability Design

This template is used during Phase 15 (Orchestration and Observability) to document DAG topology, execution parameters, retry policies, SLA monitors, and on-call runbooks for data pipelines.

---

## 1. Pipeline Inventory

| Pipeline Name | Orchestrator (Airflow / Prefect / etc.) | Trigger Type (Schedule / Event / Manual) | Schedule (Cron) | SLA Limit (Max Runtime) | Upstream Dependencies | Pipeline Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `daily_sales_ingest` | Airflow | Schedule | `0 6 * * *` | 60 min | `upstream_db_ready` sensor | data-team |
| | | | | | | |

---

## 2. DAG Dependency Structure

Define the task graph and upstream check logic:

*   **DAG Topology**: (e.g., Source Sensor → Ingestion Task → Validation Task → Transform Task → Notification)
*   **Upstream Readiness Checks**: (e.g., ExternalTaskSensor waits for upstream `upstream_db_ready` to succeed before starting ingestion. No fixed time-based triggers.)
*   **Decoupling Strategy**: (e.g., Tasks communicate via storage references — file paths in blob storage — not in-memory data passing.)
*   **Concurrency Limits**: (e.g., Maximum 3 concurrent DAG runs. Task-level parallelism limited to 10 workers.)

---

## 3. Parameterization & Backfill Strategy

Ensure pipelines are re-runnable for any historical window without side effects:

*   **Date Injection Method**: (e.g., All date ranges use `{{ ds }}` / `{{ data_interval_start }}` scheduler macros. Zero hardcoded dates or `datetime.now()` calls.)
*   **Backfill Safe**: (e.g., Each task clears partial writes and reprocesses from offset checkpoint before writing. Tested manually for 7-day backfill.)
*   **Idempotent Target Writes**: (e.g., Silver table uses `INSERT OVERWRITE PARTITION` by execution date; no append-only paths.)
*   **Task Timeout Policy**: (e.g., Each task has a maximum execution timeout set: `ingestion_task` = 45 min, `validation_task` = 10 min.)

---

## 4. Retry & Failure Recovery Policy

| Pipeline Task | Max Retries | Retry Delay Strategy | Jitter Enabled | On-Final-Failure Action |
| :--- | :--- | :--- | :--- | :--- |
| `extract_api` | 5 | Exponential backoff: 30s → 60s → 120s → 240s → 480s | Yes | PagerDuty alert + Slack #data-incidents |
| `transform_silver` | 2 | Fixed 5 min delay | No | Create JIRA incident, mark pipeline FAILED |
| | | | | |

*   **State Cleanup on Retry**: (e.g., Task marks its target partition as `IN_PROGRESS` on start and clears it before re-ingesting on retry to prevent partial row corruption.)

---

## 5. Observability & SLA Monitors

Define the signals and thresholds tracked per pipeline:

| Signal / Metric | Measurement | Warning Threshold | Critical Threshold | Notification Path |
| :--- | :--- | :--- | :--- | :--- |
| Pipeline Duration | End-to-end runtime | > P75 historical | > P90 historical (SLA breach) | Slack #data-ops |
| Row Count Change | % change vs. 7-day average | > ±20% | > ±50% | Slack #data-incidents |
| Task Failure Rate | Consecutive failures | 2 consecutive | 3 consecutive | PagerDuty on-call |
| DLQ Record Count | Records in quarantine zone | > 0 | > 500 | Slack #data-incidents |

---

## 6. On-Call Runbook

Documented step-by-step response procedures for common failures:

*   **Scenario: Pipeline SLA breach**
    1. Check Airflow logs for the first failing task.
    2. Verify source system availability (run source health check query).
    3. If source issue: engage source system on-call team via escalation channel.
    4. If transform issue: rerun from failed task using Airflow UI "Clear Task" function.
    5. Notify downstream consumers if data will be delayed > 30 minutes.

*   **Scenario: DLQ record spike**
    1. Sample 10 records from the DLQ quarantine path.
    2. Identify the common failure pattern (schema mismatch, null violation, type error).
    3. Patch the ingestion logic; backfill DLQ records manually after fix.

*   **Recovery Notes**: (Document any known manual steps required after automated recovery)
