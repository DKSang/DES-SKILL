# Checklist — Orchestration and Observability

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] Phase 7 Architecture Decision Record exists or Draft continuation is explicitly accepted.
- [ ] Phase 8 Ingestion Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 9 Bronze Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 10 Silver Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 11 Gold Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 12 Data Contract Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 13 Transformation Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 14 Data Quality Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 workflows are identified.
- [ ] Quality gates are identified.
- [ ] Freshness/SLA expectations are identified.
- [ ] Transformation dependencies are considered.

## Workflow Coverage

- [ ] Orchestration scope is defined.
- [ ] Orchestration design principles are defined.
- [ ] Workflow inventory is created.
- [ ] Dependency graph is documented.
- [ ] Schedule/trigger strategy is documented.
- [ ] Source readiness checks are documented where relevant.
- [ ] Ingestion orchestration is documented.
- [ ] Bronze/Silver/Gold transformation orchestration is documented.
- [ ] Quality gate integration is documented.
- [ ] Publish/release gates are documented for consumer-facing outputs.
- [ ] Retry/timeout policy is documented.
- [ ] Failure/recovery policy is documented.
- [ ] Backfill/replay operations are documented.
- [ ] Late data/correction operations are documented.
- [ ] Alerting and notification policy is documented.
- [ ] Incident and escalation policy is documented.

## Observability Coverage

- [ ] Observability signal inventory is documented.
- [ ] Freshness/SLA monitoring is documented.
- [ ] Volume/completeness monitoring is documented.
- [ ] Quality result monitoring is documented.
- [ ] Runtime/performance monitoring is documented.
- [ ] Cost/usage monitoring is considered.
- [ ] Run evidence and audit metadata are documented.
- [ ] Operational ownership is documented.

## Operational Safety

- [ ] P1 workflows have owners.
- [ ] P1 quality failures have expected behavior.
- [ ] P1 publish behavior is defined.
- [ ] Retry behavior respects idempotency.
- [ ] SLA breach behavior is defined.
- [ ] Alerts are actionable.
- [ ] Previous successful output behavior is defined where needed.
- [ ] Backfill/replay does not conflict with contracts or current outputs.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not include Airflow/Fabric/Databricks/Dagster/Prefect/GitHub Actions implementation code.
- [ ] The artifact does not include infrastructure provisioning code.
- [ ] The artifact does not implement monitoring dashboards.
- [ ] Orchestration is not reduced to scheduling only.
- [ ] Observability includes data signals, not only job status.
- [ ] Alert owner is not assumed silently.
- [ ] Quality gates are not ignored.
- [ ] Non-idempotent retries are not approved without explicit decision.

## HALT Validation

- [ ] Missing quality context HALT resolved or artifact remains Draft.
- [ ] Workflow scope HALT resolved or artifact remains Draft.
- [ ] Schedule/trigger HALT resolved or workflow remains Draft.
- [ ] Dependency order HALT resolved or workflow remains Draft/Risk.
- [ ] Quality gate behavior HALT resolved or gate remains Draft.
- [ ] Publish gate behavior HALT resolved or output remains Draft/Risk.
- [ ] Retry/timeout HALT resolved or workflow remains Draft.
- [ ] Failure/recovery HALT resolved or workflow remains Draft/Risk.
- [ ] Backfill/replay HALT resolved or operation remains Draft/Risk.
- [ ] Late/correction HALT resolved or operation remains Draft/Risk.
- [ ] Alert owner HALT resolved or alert remains Draft/Risk.
- [ ] Incident/escalation HALT resolved or incident policy remains Draft.
- [ ] Freshness/SLA monitoring HALT resolved or monitor remains Draft/Risk.
- [ ] Run evidence/audit HALT resolved or artifact remains Draft/Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
