# Phase 20 Done Gate Checklist — Cost and Performance Optimization

Use this checklist before marking Phase 20 Cost and Performance Optimization as Done.

Phase 20 is not Done only because `20-cost-performance-optimization-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-20-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-20/phase-20-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-20-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-20-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-20-to-21-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 19 Governance and Security Specification exists or missing context is accepted as risk.
- [ ] Phase 19 to Phase 20 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 19 governance/security constraints are carried forward.
- [ ] Phase 15 orchestration/observability context is carried forward.
- [ ] Phase 17 serving performance expectations are carried forward.
- [ ] Phase 19 open questions are carried forward.
- [ ] Phase 19 do-not-assume items are respected.

---

## Cost and Performance Optimization Specification

- [ ] Cost and performance summary is documented.
- [ ] Optimization scope is documented.
- [ ] Optimization non-scope is documented.
- [ ] Optimization design principles are documented.
- [ ] Workload inventory exists.
- [ ] P1 workload priority is documented.
- [ ] Cost driver inventory is documented.
- [ ] Performance driver inventory is documented.
- [ ] Baseline measurement plan is documented.
- [ ] Storage optimization strategy is documented.
- [ ] Compute optimization strategy is documented.
- [ ] Ingestion optimization strategy is documented.
- [ ] Transformation optimization strategy is documented.
- [ ] Query and semantic model optimization strategy is documented.
- [ ] Serving performance strategy is documented.
- [ ] Orchestration runtime optimization is documented.
- [ ] Data quality cost/performance considerations are documented.
- [ ] Caching and materialization strategy is documented with freshness/security constraints.
- [ ] Partitioning, clustering, and file sizing expectations are documented.
- [ ] Incremental processing and recomputation strategy is documented.
- [ ] Retention lifecycle and storage tiering follows governance constraints.
- [ ] Cost monitoring and budget guardrails are documented.
- [ ] Performance monitoring and SLOs are documented.
- [ ] Scalability and capacity planning is documented.
- [ ] Trade-off decisions are documented.
- [ ] Artifact does not rewrite SQL/Python/dbt code, tune indexes, resize clusters, configure autoscaling, deploy caching, change infrastructure, implement cost controls, or include implementation code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Cost and Performance Optimization Specification exists.
- [ ] P1 workloads have optimization review or are explicitly deferred.
- [ ] Cost and performance drivers are documented.
- [ ] Baseline measurement plan exists.
- [ ] Cost monitoring and budget guardrails are documented.
- [ ] Performance SLOs or best-effort status are documented.
- [ ] Optimization decisions do not weaken governance, security, quality, contract, lineage, or freshness.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked optimization decisions are clearly marked.
- [ ] Risks are carried into the Phase 20 to Phase 21 handoff.

Fail or Blocked if:

- [ ] P1 workload has no optimization review.
- [ ] No baseline measurement plan exists.
- [ ] Cost drivers are unknown.
- [ ] Performance drivers are unknown.
- [ ] SLA-bound workload has no performance target.
- [ ] Optimization conflicts with security/governance.
- [ ] Optimization weakens quality or contract without approval.
- [ ] Caching/materialization bypasses freshness/security constraints.
- [ ] Cost monitoring is missing.
- [ ] Scalability planning is missing for expected growth.
- [ ] Handoff is missing.
- [ ] Artifact contains tuning/code/infrastructure implementation prematurely.
- [ ] Phase 21 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 20 to Phase 21 handoff lists approved/risky/blocked/deferred workloads.
- [ ] Handoff lists workload priorities.
- [ ] Handoff lists cost drivers and performance drivers.
- [ ] Handoff lists baseline measurement plan.
- [ ] Handoff lists cost monitoring and budget guardrails.
- [ ] Handoff lists performance SLOs.
- [ ] Handoff lists optimization decisions that should become tests or release gates.
- [ ] Handoff lists governance/security constraints that cannot be weakened.
- [ ] Handoff lists quality/contract constraints that cannot be weakened.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-cicd-and-testing`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 21 starts.

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
