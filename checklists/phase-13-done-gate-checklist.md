# Phase 13 Done Gate Checklist — Transformation Design

Use this checklist before marking Phase 13 Transformation Design as Done.

Phase 13 is not Done only because `13-transformation-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/13-transformation-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-13-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-13/phase-13-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-13-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-13-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-13-to-14-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 12 Data Contract Specification exists or missing context is accepted as risk.
- [ ] Phase 12 to Phase 13 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 12 contract expectations are carried forward.
- [ ] Phase 12 open questions are carried forward.
- [ ] Phase 12 do-not-assume items are respected.

---

## Transformation Specification

- [ ] Transformation summary is documented.
- [ ] Transformation scope and non-scope are documented.
- [ ] Transformation design principles are documented.
- [ ] Transformation inventory is documented.
- [ ] Layer-to-layer transformation mapping is documented.
- [ ] Dependency graph is documented.
- [ ] Input and output dataset mapping is documented.
- [ ] Transformation grain is documented.
- [ ] Business rules are documented.
- [ ] Cleaning and conformance rules are documented.
- [ ] Join and relationship rules are documented where joins exist.
- [ ] Deduplication and survivorship rules are documented where needed.
- [ ] SCD/history behavior is documented where relevant.
- [ ] Aggregation and metric calculation rules are documented where relevant.
- [ ] Incremental processing strategy is documented.
- [ ] Backfill and replay strategy is documented.
- [ ] Late-arriving/corrected data behavior is documented where relevant.
- [ ] Error/quarantine behavior is documented.
- [ ] Validation and test expectations are documented.
- [ ] Contract alignment is documented.
- [ ] Lineage and metadata expectations are documented.
- [ ] Performance and cost considerations are documented.
- [ ] Security and privacy handling is documented.
- [ ] Implementation boundary is explicit.
- [ ] Artifact does not implement SQL, Python, dbt, Spark, notebooks, orchestration, tests, CI/CD files, dashboards, APIs, or code.

---

## Evidence

- [ ] Phase 12 handoff evidence is recorded.
- [ ] Contract-to-transformation mapping evidence is recorded.
- [ ] Layer-to-layer mapping evidence is recorded.
- [ ] Transformation inventory evidence is recorded.
- [ ] Dependency graph evidence is recorded.
- [ ] Input/output mapping evidence is recorded.
- [ ] Transformation grain evidence is recorded.
- [ ] Business rule evidence is recorded.
- [ ] Cleaning/conformance rule evidence is recorded.
- [ ] Join/relationship evidence is recorded where joins exist.
- [ ] Dedup/survivorship evidence is recorded where needed.
- [ ] SCD/history evidence is recorded where relevant.
- [ ] Aggregation/metric evidence is recorded where relevant.
- [ ] Incremental processing evidence is recorded.
- [ ] Backfill/replay evidence is recorded.
- [ ] Late/corrected data evidence is recorded where relevant.
- [ ] Error/quarantine evidence is recorded.
- [ ] Validation/test expectation evidence is recorded.
- [ ] Contract alignment evidence is recorded.
- [ ] Lineage/metadata evidence is recorded.
- [ ] Performance/cost evidence is recorded.
- [ ] Security/privacy evidence is recorded.
- [ ] Implementation boundary evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Transformation Specification exists.
- [ ] P1 contracted outputs have transformation paths or are marked deferred/blocked.
- [ ] Transformations have input/output mapping, output grain, dependency order, validation expectations, contract alignment, and status.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked transformations are clearly marked.
- [ ] Risks are carried into the Phase 13 to Phase 14 handoff.

Fail or Blocked if:

- [ ] P1 contracted output has no transformation path.
- [ ] Input/output mapping is missing.
- [ ] Output grain is missing.
- [ ] Business rule is ambiguous.
- [ ] Join rule is unclear.
- [ ] Metric logic conflicts with Phase 03 or Phase 11.
- [ ] Deduplication/survivorship rule is missing where needed.
- [ ] Incremental strategy is missing.
- [ ] Backfill/replay behavior is missing.
- [ ] Error/quarantine behavior is missing.
- [ ] Validation expectation is missing.
- [ ] Contract alignment is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains implementation code prematurely.
- [ ] Phase 14 would rely on hidden transformation assumptions.

---

## Handoff Readiness

- [ ] Phase 13 to Phase 14 handoff lists approved/risky/blocked/deferred transformations.
- [ ] Handoff lists transformation rules that need DQ coverage.
- [ ] Handoff lists validation/test candidates.
- [ ] Handoff lists contract-alignment checks.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-data-quality`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 14 starts.

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
