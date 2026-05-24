# Phase 18 Done Gate Checklist — Lineage and Metadata Design

Use this checklist before marking Phase 18 Lineage and Metadata Design as Done.

Phase 18 is not Done only because `18-lineage-metadata-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/18-lineage-metadata-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-18-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-18/phase-18-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-18-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-18-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-18-to-19-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 17 Serving Layer Specification exists or missing context is accepted as risk.
- [ ] Phase 17 to Phase 18 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 17 serving output inventory is carried forward.
- [ ] Phase 17 metadata/lineage needs are carried forward.
- [ ] Phase 17 open questions are carried forward.
- [ ] Phase 17 do-not-assume items are respected.

---

## Lineage and Metadata Specification

- [ ] Lineage and metadata summary is documented.
- [ ] Metadata scope is documented.
- [ ] Metadata non-scope is documented.
- [ ] Metadata design principles are documented.
- [ ] Metadata categories are documented.
- [ ] Metadata inventory exists.
- [ ] Business metadata is documented.
- [ ] Technical metadata is documented.
- [ ] Operational metadata is documented.
- [ ] Reference metadata is documented or explicitly waived.
- [ ] Dataset catalog requirements are documented.
- [ ] Field and schema metadata are documented.
- [ ] Metric and KPI metadata are documented.
- [ ] Contract metadata is documented.
- [ ] Transformation lineage is documented.
- [ ] Dataset lineage is documented.
- [ ] Column-level lineage expectations are documented and scoped.
- [ ] Semantic and serving lineage is documented.
- [ ] Quality and trust metadata is documented.
- [ ] Ownership and stewardship metadata is documented.
- [ ] Usage and consumer metadata is documented.
- [ ] Change and version metadata is documented.
- [ ] Audit and compliance metadata is documented where relevant.
- [ ] Metadata capture responsibilities are documented.
- [ ] Metadata freshness and maintenance policy is documented.
- [ ] Artifact does not implement catalog tools, scanners, metadata crawlers, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD, or code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Lineage and Metadata Specification exists.
- [ ] Metadata asset inventory exists for P1 sources/datasets/metrics/contracts/transformations/quality rules/workflows/semantic objects/serving outputs.
- [ ] P1 serving outputs can trace to Gold or are marked Draft/Risk/Blocked.
- [ ] Metadata categories are covered or explicitly waived.
- [ ] Ownership/stewardship metadata is documented or risk accepted.
- [ ] Operational metadata and run evidence expectations are documented.
- [ ] Quality/trust metadata is documented for trusted outputs.
- [ ] Metadata maintenance policy is documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked metadata assets are clearly marked.
- [ ] Risks are carried into the Phase 18 to Phase 19 handoff.

Fail or Blocked if:

- [ ] P1 serving outputs cannot trace to Gold.
- [ ] Business definitions have no owner.
- [ ] Operational run evidence is missing.
- [ ] Metadata categories are not covered or waived.
- [ ] Column lineage is claimed but no scope or capture method exists.
- [ ] Quality/trust metadata is missing for trusted outputs.
- [ ] Contract metadata is missing for governed/system-facing outputs.
- [ ] Ownership/stewardship metadata is missing.
- [ ] Metadata maintenance owner is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains lineage/catalog implementation code prematurely.
- [ ] Phase 19 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 18 to Phase 19 handoff lists approved/risky/blocked/deferred metadata assets.
- [ ] Handoff lists governance-relevant metadata.
- [ ] Handoff lists security-relevant metadata.
- [ ] Handoff lists audit/compliance metadata.
- [ ] Handoff lists lineage depth and sensitive/critical lineage needs.
- [ ] Handoff lists ownership/stewardship metadata.
- [ ] Handoff lists sensitivity/access metadata needs.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-governance-security-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 19 starts.

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
