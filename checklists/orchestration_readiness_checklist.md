# Orchestration Readiness Checklist

This checklist is used during Phase 15 (Orchestration and Observability) to evaluate scheduler designs, task dependencies, retry mechanisms, and operational logging.

---

## 1. DAG & Dependency Structure
- [ ] **Directed Acyclic Graph (DAG) enforced**: Ensure no loop dependencies exist between tasks.
- [ ] **Decoupled tasks**: Each task is a self-contained execution unit. Tasks do not pass massive datasets in-memory; they use storage references (e.g. file paths).
- [ ] **Upstream checks defined**: Downstream tasks verify the completion of upstream jobs before running, rather than assuming success based on time.

## 2. Parameterization & Backfilling
- [ ] **No hardcoded date ranges**: Pipelines use scheduler variables (e.g., execution date, window start/end) instead of system current date (`now()`).
- [ ] **Re-run safety**: Backfilling historical intervals can be executed concurrently without state conflict.
- [ ] **Clear task timeouts**: Maximum execution limit is set for every task to prevent hung queries from blocking resources.

## 3. Retries & Recovery
- [ ] **Automatic retry configured**: Ingestion and connection tasks auto-retry on failure.
- [ ] **Backoff policy specified**: Retries utilize exponential backoff (e.g., wait 5m, then 10m, then 20m) rather than immediate retry.
- [ ] **Randomized jitter added**: Jitter is enabled to prevent multiple failed tasks from hammering source databases simultaneously.
- [ ] **State cleanup on retry**: Failed tasks clear any partial writes before retrying to prevent duplicate rows.

## 4. Observability & SLAs
- [ ] **Logging levels configured**: Tasks log key operational parameters (row counts processed, files loaded, API statuses). Sensitive data is excluded.
- [ ] **SLA thresholds monitored**: Alert is triggered if pipeline duration exceeds P90 historical times.
- [ ] **Alerting channel set**: Failure alerts are sent immediately to operational systems (Slack, Webhook, PagerDuty).
