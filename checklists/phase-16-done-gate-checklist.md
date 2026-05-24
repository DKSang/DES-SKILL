# Phase 16 Done Gate Checklist — Semantic Model Design

Use this checklist before marking Phase 16 Semantic Model Design as Done.

Phase 16 is not Done only because `16-semantic-model-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/16-semantic-model-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-16-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-16/phase-16-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-16-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-16-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-16-to-17-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 15 Orchestration and Observability Specification exists or missing context is accepted as risk.
- [ ] Phase 15 to Phase 16 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 11 Gold Layer Specification exists or missing context is accepted as risk.
- [ ] Phase 03 KPI definitions exist where measures are exposed.
- [ ] Phase 12 contract expectations are carried forward.
- [ ] Phase 14 quality expectations are carried forward.
- [ ] Phase 15 freshness/publish/quality gate assumptions are carried forward.
- [ ] Phase 15 open questions are carried forward.
- [ ] Phase 15 do-not-assume items are respected.

---

## Semantic Model Specification

- [ ] Semantic model summary is documented.
- [ ] Semantic scope is documented.
- [ ] Semantic non-scope is documented.
- [ ] Semantic design principles are documented.
- [ ] Semantic model inventory exists.
- [ ] Consumer and use-case mapping is documented.
- [ ] Gold-to-semantic mapping is documented.
- [ ] Business glossary alignment is documented.
- [ ] Semantic entities are documented.
- [ ] Measures and KPIs are documented.
- [ ] Measures trace to approved KPI/Gold definitions.
- [ ] Dimensions and attributes are documented.
- [ ] Hierarchies are documented where relevant.
- [ ] Relationships and join behavior are documented.
- [ ] Grain and aggregation behavior are documented.
- [ ] Filters and slicers are documented.
- [ ] Time intelligence expectations are documented where relevant.
- [ ] Calculation ownership is documented.
- [ ] Naming and display conventions are documented.
- [ ] Security and access model is documented.
- [ ] Certification and trust status is documented.
- [ ] Freshness and quality display expectations are documented.
- [ ] Lineage and metadata expectations are documented.
- [ ] Semantic testing expectations are documented.
- [ ] Contract and quality alignment is documented.
- [ ] Artifact does not implement DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboard, API, CI/CD, deployment, or code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Semantic Model Specification exists.
- [ ] P1 semantic models have consumer/use case, Gold mapping, measures/dimensions, trust status, security, freshness/quality visibility, and ownership.
- [ ] Measures trace to approved KPI/Gold definitions or are marked Draft/Blocked.
- [ ] Relationships and aggregation behavior are explicit.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked semantic objects are clearly marked.
- [ ] Risks are carried into the Phase 16 to Phase 17 handoff.

Fail or Blocked if:

- [ ] P1 semantic model has no consumer/use case.
- [ ] Gold dataset mapping is missing.
- [ ] Measure definition conflicts with Phase 03 or Phase 11.
- [ ] Measure aggregation behavior is missing.
- [ ] Relationship/join behavior is unclear.
- [ ] Semantic model exposes fields that violate security constraints.
- [ ] Certified status is assigned without owner/quality/lineage/contract/freshness support.
- [ ] Freshness or quality display expectation is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains semantic implementation code prematurely.
- [ ] Phase 17 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 16 to Phase 17 handoff lists approved/risky/blocked/deferred semantic models.
- [ ] Handoff lists certified/promoted/draft measures.
- [ ] Handoff lists semantic entities, dimensions, hierarchies, and relationships.
- [ ] Handoff lists security/access constraints.
- [ ] Handoff lists freshness/quality display expectations.
- [ ] Handoff lists trust/certification status.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-serving-layer-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 17 starts.

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
