# Observability Checklist

This checklist is used during Phase 15 (Orchestration and Observability) to verify that pipelines have sufficient logging, monitoring, alerting, and runbook coverage for reliable production operation.

---

## 1. Logging Standards
- [ ] **Structured logging enabled**: Logs output in structured format (JSON) for machine parsability — not unformatted print statements.
- [ ] **Key operational parameters logged**: Every task logs record counts processed, file/partition IDs loaded, and API response status codes.
- [ ] **No sensitive data in logs**: PII columns, credentials, or access tokens are never written to log output.
- [ ] **Log retention configured**: Pipeline logs are retained for at least 30 days for incident investigation.

## 2. SLA Monitoring
- [ ] **Pipeline duration monitored**: Total end-to-end runtime is tracked per pipeline run.
- [ ] **P90 SLA threshold set**: Alert triggers if pipeline duration exceeds the P90 historical baseline.
- [ ] **Data freshness monitored**: An alert fires if Gold layer data has not been refreshed by the committed SLA time (e.g., not ready by 7AM).
- [ ] **Row count anomaly detection active**: Alerts configured if daily row count drops > 20% below 7-day average.

## 3. Retry & Recovery Configuration
- [ ] **Retry policy on all connection tasks**: Network-facing tasks (API calls, DB queries) have automatic retry enabled.
- [ ] **Exponential backoff configured**: Retry delays use exponential backoff (e.g., 30s → 60s → 120s → 240s) to avoid thundering-herd.
- [ ] **Jitter enabled**: Randomized jitter added to retry backoff to prevent concurrent retries overwhelming the source.
- [ ] **Final failure alert**: After all retries are exhausted, an alert is sent to the on-call channel/PagerDuty.

## 4. DLQ & Quarantine Monitoring
- [ ] **DLQ monitored**: An alert fires if any records land in the Dead Letter Queue (DLQ) or quarantine path.
- [ ] **DLQ cleared within SLA**: A process exists to review, fix, and reprocess DLQ records within a defined SLA window.

## 5. Incident Runbook
- [ ] **Runbook documented**: A step-by-step guide exists for the 3 most common failure scenarios (SLA breach, DLQ spike, source system outage).
- [ ] **On-call contact defined**: A named on-call rotation or team is assigned to respond to production data incidents.
- [ ] **Escalation path clear**: If the primary on-call cannot resolve in 30 minutes, the escalation path to a data lead or manager is documented.
