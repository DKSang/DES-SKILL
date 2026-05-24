# Phase 15 Done Gate Checklist — Orchestration and Observability

Use this checklist before marking Phase 15 Orchestration and Observability as Done.

Phase 15 is not Done only because `15-orchestration-observability-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/15-orchestration-observability-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-15-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-15/phase-15-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-15-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-15-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-15-to-16-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 14 Data Quality Specification exists or missing context is accepted as risk.
- [ ] Phase 14 to Phase 15 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 14 quality gates are carried forward.
- [ ] Phase 14 severity/failure behavior is carried forward.
- [ ] Phase 14 monitoring expectations are carried forward.
- [ ] Phase 14 open questions are carried forward.
- [ ] Phase 14 do-not-assume items are respected.

---

## Orchestration and Observability Specification

- [ ] Orchestration and observability summary is documented.
- [ ] Orchestration scope is documented.
- [ ] Orchestration non-scope is documented.
- [ ] Orchestration design principles is documented.
- [ ] Workflow inventory exists.
- [ ] Dependency graph is documented.
- [ ] Schedule and trigger strategy is documented.
- [ ] Source readiness checks are documented where relevant.
- [ ] Ingestion orchestration is documented.
- [ ] Bronze/Silver/Gold transformation orchestration is documented.
- [ ] Quality gate integration is documented.
- [ ] Publish and release gates are documented.
- [ ] Retry and timeout policy is documented.
- [ ] Failure handling and recovery policy is documented.
- [ ] Backfill and replay operations are documented.
- [ ] Late data and correction operations are documented where relevant.
- [ ] Alerting and notification policy is documented.
- [ ] Incident and escalation policy is documented.
- [ ] Observability signal inventory exists.
- [ ] Freshness and SLA monitoring is documented.
- [ ] Volume and completeness monitoring is documented where relevant.
- [ ] Quality result monitoring is documented.
- [ ] Runtime and performance monitoring is documented.
- [ ] Cost and usage monitoring is documented where relevant.
- [ ] Run evidence and audit metadata are documented.
- [ ] Operational ownership is documented.
- [ ] Artifact does not implement Airflow, Fabric, Databricks, Dagster, Prefect, GitHub Actions, SQL, Python, monitoring dashboards, CI/CD, or infrastructure code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Orchestration and Observability Specification exists.
- [ ] P1 workflows have trigger/schedule, dependencies, gates, retry/timeout, failure handling, observability signals, alert owner, and evidence.
- [ ] P1 quality gate behavior is clear.
- [ ] Consumer-facing publish behavior is clear.
- [ ] Freshness/SLA monitoring is clear for SLA-bound outputs.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked workflows are clearly marked.
- [ ] Risks are carried into the Phase 15 to Phase 16 handoff.

Fail or Blocked if:

- [ ] P1 workflow has no trigger/schedule.
- [ ] P1 workflow has no dependency order.
- [ ] P1 quality gate behavior is missing.
- [ ] Publish behavior is missing for consumer-facing outputs.
- [ ] Retry is allowed for non-idempotent step without approval.
- [ ] Failure recovery is missing.
- [ ] Alert owner is missing.
- [ ] Freshness/SLA monitoring is missing.
- [ ] Run evidence/audit metadata is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains orchestration/monitoring implementation code prematurely.
- [ ] Phase 16 would rely on hidden operational assumptions.

---

## Handoff Readiness

- [ ] Phase 15 to Phase 16 handoff lists approved/risky/blocked/deferred workflows.
- [ ] Handoff lists publish behavior for semantic/consumer-facing outputs.
- [ ] Handoff lists freshness/SLA monitoring assumptions.
- [ ] Handoff lists quality gate behavior affecting semantic model readiness.
- [ ] Handoff lists run evidence/audit metadata.
- [ ] Handoff lists operational ownership.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-semantic-model-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 16 starts.

---

## Workflow Status

- [ ] Phase Artifact Progress is updated.
- [ ] Phase Execution Status is updated.
- [ ] Phase Support Plan Progress is updated.
- [ ] Phase Evidence Pack Progress is updated.
- [ ] Phase Artifact Revision Progress is updated.
- [ ] Phase Done Gate Progress is updated.
- [ ] Phase Handoff Register is updated.
- [ ] Current Phase Operating Notes are updated.
- [ ] Active Blockers are updated if needed.
- [ ] Risk Register is updated if needed.
- [ ] Open Questions are updated if needed.
