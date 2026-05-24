# Phase 07 Done Gate Checklist — Architecture Design

Use this checklist before marking Phase 07 Architecture Design as Done.

Phase 07 is not Done only because `07-architecture-decision-record.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/07-architecture-decision-record.md` exists.
- [ ] `_des-output/phase-support-plans/phase-07-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-07/phase-07-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-07-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-07-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-07-to-08-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 01 Business Discovery Brief exists or missing context is accepted as risk.
- [ ] Phase 02 Business Question Catalog exists or missing context is accepted as risk.
- [ ] Phase 03 Requirements and KPI Catalog exists or missing context is accepted as risk.
- [ ] Phase 04 Data Product Specification exists or missing context is accepted as risk.
- [ ] Phase 05 Data Source Inventory exists or missing context is accepted as risk.
- [ ] Phase 06 Conceptual Domain Model exists or missing context is accepted as risk.
- [ ] Phase 06 to Phase 07 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 06 source/domain caveats are carried forward.
- [ ] Phase 06 open questions are carried forward.
- [ ] Phase 06 do-not-assume list is respected.

---

## Architecture Decision Record

- [ ] Architecture summary is documented.
- [ ] Decision context is documented.
- [ ] Architecture goals are documented.
- [ ] Architecture principles are documented.
- [ ] Target architecture overview is documented.
- [ ] Lifecycle alignment is documented.
- [ ] Environment strategy is documented.
- [ ] Storage strategy is documented.
- [ ] Compute strategy is documented.
- [ ] Batch/streaming/event strategy is documented.
- [ ] Integration pattern is documented.
- [ ] Layer strategy is documented.
- [ ] Serving strategy is documented.
- [ ] Orchestration boundary is documented.
- [ ] Observability direction is documented.
- [ ] Security/privacy posture is documented.
- [ ] Governance/metadata direction is documented.
- [ ] DataOps/software engineering direction is documented.
- [ ] Build-versus-buy considerations are documented.
- [ ] Technology constraints and options are documented.
- [ ] Architecture options considered are documented.
- [ ] Architecture decisions are written in ADR style.
- [ ] Trade-offs are documented.
- [ ] Reversibility classification exists for major decisions.
- [ ] Architecture evidence summary is documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact is not only a tool list.
- [ ] Artifact does not design detailed ingestion pipelines, physical schemas, Bronze/Silver/Gold details, transformations, dashboards, APIs, CI/CD files, or code.

---

## Evidence

- [ ] Phase 06 handoff evidence is recorded.
- [ ] Architecture driver traceability evidence is recorded.
- [ ] Option comparison evidence is recorded.
- [ ] Platform feasibility evidence is recorded.
- [ ] Environment strategy evidence is recorded.
- [ ] Storage/compute fit evidence is recorded.
- [ ] Batch/streaming/event fit evidence is recorded.
- [ ] Layer strategy evidence is recorded.
- [ ] Serving strategy evidence is recorded.
- [ ] Security/privacy evidence is recorded.
- [ ] Governance/metadata evidence is recorded.
- [ ] Cost/operational burden evidence is recorded.
- [ ] Reversibility/lock-in evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Architecture Decision Record reflects available evidence.
- [ ] Unsupported decisions are marked Proposed/Open/Risk/Deferred.
- [ ] Tool choices have rationale and trade-offs.
- [ ] Rejected options are visible.
- [ ] Hard-to-reverse decisions are marked.
- [ ] Source/domain/product caveats are visible.
- [ ] Phase 08 can distinguish approved architecture constraints from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Architecture Decision Record exists.
- [ ] Architecture scope is clear.
- [ ] Architecture drivers are traceable to upstream context.
- [ ] Target architecture is more than a tool list.
- [ ] Major decisions include options, rationale, trade-offs, and reversibility.
- [ ] Environment, storage, compute, layer, serving, security, governance, cost, and operational directions are documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Proposed/deferred decisions are clearly marked.
- [ ] Risks are carried into the Phase 07 to Phase 08 handoff.

Fail or Blocked if:

- [ ] Architecture scope is missing.
- [ ] Target architecture is only a list of tools.
- [ ] Storage or compute strategy is missing.
- [ ] Environment strategy is missing.
- [ ] Batch/streaming/event decision conflicts with source/freshness evidence.
- [ ] Serving direction is missing for P1 outputs.
- [ ] Security/privacy posture is missing for sensitive or decision-support data.
- [ ] Hard-to-reverse decisions are made without approval.
- [ ] Architecture conflicts with requirements, source realities, domain constraints, or product expectations.
- [ ] Handoff is missing.
- [ ] Phase 08 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 07 to Phase 08 handoff lists architecture scope.
- [ ] Handoff lists target platform direction.
- [ ] Handoff lists environment strategy.
- [ ] Handoff lists storage strategy.
- [ ] Handoff lists compute strategy.
- [ ] Handoff lists batch/streaming/event strategy.
- [ ] Handoff lists layer strategy.
- [ ] Handoff lists integration pattern.
- [ ] Handoff lists serving strategy.
- [ ] Handoff lists orchestration boundary.
- [ ] Handoff lists observability direction.
- [ ] Handoff lists security/privacy posture.
- [ ] Handoff lists governance/metadata direction.
- [ ] Handoff lists approved/proposed/deferred architecture decisions.
- [ ] Handoff lists hard-to-reverse decisions.
- [ ] Handoff lists ingestion-relevant constraints.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-ingestion-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 08 starts.

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
