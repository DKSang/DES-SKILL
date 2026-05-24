# Phase 14 Done Gate Checklist — Data Quality Design

Use this checklist before marking Phase 14 Data Quality Design as Done.

Phase 14 is not Done only because `14-data-quality-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/14-data-quality-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-14-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-14/phase-14-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-14-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-14-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-14-to-15-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 13 Transformation Specification exists or missing context is accepted as risk.
- [ ] Phase 13 to Phase 14 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 13 validation/test expectations are carried forward.
- [ ] Phase 13 contract alignment expectations are carried forward.
- [ ] Phase 13 open questions are carried forward.
- [ ] Phase 13 do-not-assume items are respected.

---

## Data Quality Specification

- [ ] Data quality summary is documented.
- [ ] Quality scope is documented.
- [ ] Quality non-scope is documented.
- [ ] Quality design principles are documented.
- [ ] Quality dimensions are documented.
- [ ] Quality rule inventory exists.
- [ ] Dataset-to-rule mapping is documented.
- [ ] Layer-specific quality rules are documented.
- [ ] Contract quality alignment is documented.
- [ ] Transformation validation alignment is documented.
- [ ] Freshness rules are documented.
- [ ] Completeness and volume rules are documented.
- [ ] Uniqueness and grain rules are documented.
- [ ] Validity and domain rules are documented.
- [ ] Referential integrity rules are documented where relevant.
- [ ] Consistency and reconciliation rules are documented where relevant.
- [ ] Accuracy and business reasonableness rules are documented where relevant.
- [ ] Schema and compatibility rules are documented.
- [ ] Null and missing value rules are documented.
- [ ] Anomaly and threshold rules are documented or Draft pending profiling.
- [ ] Severity classification is documented.
- [ ] Failure handling and quality gates are documented.
- [ ] Ownership and stewardship are documented.
- [ ] Evidence and reporting expectations are documented.
- [ ] Monitoring and observability expectations are documented.
- [ ] Release and CI/CD gate candidates are documented.
- [ ] Artifact does not implement SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD files, dashboards, APIs, or code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Data Quality Specification exists.
- [ ] P1 contracted outputs or P1 transformation outputs have quality rules or are marked deferred/blocked.
- [ ] P1 quality rules have dimension, threshold/condition, severity, failure handling, owner/steward or accepted risk, evidence/reporting expectation, and status.
- [ ] Contract and transformation alignment are documented.
- [ ] Monitoring/observability expectations are documented for Phase 15.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked rules are clearly marked.
- [ ] Risks are carried into the Phase 14 to Phase 15 handoff.

Fail or Blocked if:

- [ ] P1 contracted output has no quality rules.
- [ ] Rule has no dataset/output.
- [ ] Rule has no dimension.
- [ ] Threshold or pass/fail condition is missing.
- [ ] Severity is missing.
- [ ] Failure handling is missing.
- [ ] Owner/steward is missing for P1 rule.
- [ ] Contract quality expectations are not mapped.
- [ ] Freshness SLA quality rule is missing for P1 output.
- [ ] Metric reconciliation rule is missing where required.
- [ ] Handoff is missing.
- [ ] Artifact contains test implementation code prematurely.
- [ ] Phase 15 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 14 to Phase 15 handoff lists approved/risky/blocked/deferred rules.
- [ ] Handoff lists severity and failure behavior.
- [ ] Handoff lists observability signal candidates.
- [ ] Handoff lists alerting candidates.
- [ ] Handoff lists quality gate candidates.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-orchestration-observability`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 15 starts.

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
