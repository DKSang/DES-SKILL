# Phase 21 Done Gate Checklist — CI/CD and Testing

Use this checklist before marking Phase 21 CI/CD and Testing as Done.

Phase 21 is not Done only because `21-cicd-testing-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/21-cicd-testing-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-21-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-21/phase-21-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-21-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-21-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-21-to-22-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 20 Cost and Performance Optimization Specification exists or missing context is accepted as risk.
- [ ] Phase 20 to Phase 21 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 20 test/release gate candidates are carried forward.
- [ ] Phase 20 cost/performance guardrails are carried forward.
- [ ] Phase 20 open questions are carried forward.
- [ ] Phase 20 do-not-assume items are respected.

---

## CI/CD and Testing Specification

- [ ] CI/CD and testing summary is documented.
- [ ] CI/CD scope is documented.
- [ ] CI/CD non-scope is documented.
- [ ] CI/CD design principles are documented.
- [ ] Repository and artifact inventory is documented.
- [ ] Branch and review strategy is documented.
- [ ] Environment and promotion strategy is documented.
- [ ] Test inventory is documented.
- [ ] Unit test expectations are documented.
- [ ] Integration test expectations are documented.
- [ ] Data contract test gates are documented.
- [ ] Data quality test gates are documented.
- [ ] Transformation test expectations are documented.
- [ ] Orchestration test expectations are documented.
- [ ] Semantic and serving test expectations are documented.
- [ ] Security and governance test gates are documented.
- [ ] Cost and performance test gates are documented.
- [ ] Deployment gates are documented.
- [ ] Release approval workflow is documented.
- [ ] Rollback and recovery strategy is documented.
- [ ] Release evidence and audit trail are documented.
- [ ] Test data and fixture strategy is documented.
- [ ] Secrets and environment configuration policy is documented.
- [ ] Breaking change policy is documented.
- [ ] Artifact does not implement GitHub Actions, Azure DevOps, Fabric deployment pipelines, dbt, pytest, SQL tests, Spark tests, notebook tests, IaC, infrastructure, deployment scripts, or release execution code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] CI/CD and Testing Specification exists.
- [ ] P1 deployable/testable artifacts are identified.
- [ ] Branch/review strategy is documented.
- [ ] Environment/promotion strategy is documented.
- [ ] Contracted outputs have contract test gate expectations or are explicitly risk accepted.
- [ ] P1 outputs have quality gate expectations.
- [ ] Sensitive/governed outputs have security/governance gate expectations.
- [ ] Rollback/recovery is documented.
- [ ] Release evidence/audit trail is documented.
- [ ] Secrets/config strategy is documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked release gates are clearly marked.
- [ ] Risks are carried into the Phase 21 to Phase 22 handoff.

Fail or Blocked if:

- [ ] P1 artifacts are not identified.
- [ ] No branch/review strategy exists.
- [ ] No environment/promotion strategy exists.
- [ ] Contracted output has no contract test gate.
- [ ] P1 output has no quality gate.
- [ ] Sensitive data has no security/governance gate.
- [ ] Cost/performance targets from Phase 20 have no test/monitoring candidate.
- [ ] Secrets/config strategy is missing.
- [ ] Rollback path is missing.
- [ ] Release approval owner is missing.
- [ ] Release evidence/audit trail is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains CI/CD implementation code prematurely.
- [ ] Phase 22 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 21 to Phase 22 handoff lists approved/risky/blocked/deferred release framework items.
- [ ] Handoff lists repository and artifact inventory.
- [ ] Handoff lists branch/review strategy.
- [ ] Handoff lists environment/promotion strategy.
- [ ] Handoff lists test inventory.
- [ ] Handoff lists blocking/warning/info release gates.
- [ ] Handoff lists contract, DQ, transformation, orchestration, semantic/serving, security, cost/performance expectations.
- [ ] Handoff lists release approval workflow.
- [ ] Handoff lists rollback and recovery strategy.
- [ ] Handoff lists release evidence and audit trail.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-project-evaluation`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 22 starts.

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
