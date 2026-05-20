# Production Readiness Checklist

This checklist is used during Phase 22 (Project Evaluation) to gate production deployment — every item must be satisfied or have a documented, time-bound exception approved by the Data Lead.

---

## 1. Pipeline & Data Quality
- [ ] **All CI/CD stages pass**: Lint, unit tests, schema tests, contract tests, and DQ gates are green in the latest pipeline run.
- [ ] **Staging environment validated**: End-to-end pipeline run succeeded in staging with production-representative data volume.
- [ ] **Row count and aggregation totals verified**: Gold layer output matches expected counts and business metric totals within 0.5% variance.
- [ ] **DQ rules cover all 6 dimensions**: Accuracy, Completeness, Timeliness, Validity, Consistency, and Uniqueness checks are active.
- [ ] **No critical DQ failures in staging**: Zero FAIL-severity DQ rule violations in the last 3 staging runs.

## 2. Orchestration & Observability
- [ ] **DAG parameterized**: All pipelines use scheduler date variables — no hardcoded dates or `datetime.now()`.
- [ ] **Retry policies configured**: Retry with exponential backoff + jitter is set on all connection-facing tasks.
- [ ] **SLA monitors active**: Pipeline duration and data freshness monitors are live with alert thresholds set.
- [ ] **On-call runbook published**: Step-by-step incident response guide is documented and shared with the on-call team.
- [ ] **DLQ path configured**: Failed records are routed to a quarantine location with metadata.

## 3. Security & Governance
- [ ] **No hardcoded credentials**: Confirmed via automated credential scanning in CI/CD pipeline.
- [ ] **RBAC/RLS deployed**: Access control roles are configured and tested with role-specific test accounts.
- [ ] **PII masking active**: All PII columns are masked at Silver layer; unmasked PII access restricted to `bronze-raw-readers` only.
- [ ] **Audit logs enabled**: Query history, user access, and data export events are logged.

## 4. Serving & Consumer Readiness
- [ ] **Consumer SLA met in staging**: Dashboard load times, API response times, and file delivery times meet committed SLA targets under load test.
- [ ] **Data catalog updated**: All new datasets registered with business description, owner, and column glossary.
- [ ] **Consumer onboarding completed**: Consumers have been trained or given documentation on how to use the new data product.
- [ ] **No PII exposed in serving layer**: Confirmed via automated column scan and access role test.

## 5. Rollback & Recovery
- [ ] **Rollback procedure documented and tested**: Code rollback (git revert) and data rollback (Delta Time Travel / partition restore) have been rehearsed in staging.
- [ ] **Rollback decision owner named**: A specific individual is designated as the decision authority for initiating rollback.
- [ ] **Rollback estimated duration known**: Time to complete full rollback is documented (e.g., "< 30 minutes").

## 6. Go / No-Go Sign-Off
- [ ] **Data Lead review completed**: Technical sign-off obtained.
- [ ] **Business sponsor notified**: Deployment timeline communicated to the business product owner.
- [ ] **Downstream consumers informed**: All consuming teams notified of go-live date, any breaking changes, and support contact.
