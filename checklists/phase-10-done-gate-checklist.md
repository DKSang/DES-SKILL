# Phase 10 Done Gate Checklist — Silver Layer Design

Use this checklist before marking Phase 10 Silver Layer Design as Done.

Phase 10 is not Done only because `10-silver-layer-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/10-silver-layer-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-10-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-10/phase-10-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-10-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-10-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-10-to-11-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 01 Business Discovery Brief exists or missing context is accepted as risk.
- [ ] Phase 02 Business Question Catalog exists or missing context is accepted as risk.
- [ ] Phase 03 Requirements and KPI Catalog exists or missing context is accepted as risk.
- [ ] Phase 04 Data Product Specification exists or missing context is accepted as risk.
- [ ] Phase 05 Data Source Inventory exists or missing context is accepted as risk.
- [ ] Phase 06 Conceptual Domain Model exists or missing context is accepted as risk.
- [ ] Phase 07 Architecture Decision Record exists or missing context is accepted as risk.
- [ ] Phase 08 Ingestion Specification exists or missing context is accepted as risk.
- [ ] Phase 09 Bronze Layer Specification exists or missing context is accepted as risk.
- [ ] Phase 09 to Phase 10 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 09 Bronze metadata/lineage constraints are carried forward.
- [ ] Phase 09 schema drift and quarantine decisions are carried forward.
- [ ] Phase 09 open questions are carried forward.
- [ ] Phase 09 do-not-assume items are respected.

---

## Silver Layer Specification

- [ ] Silver layer summary is documented.
- [ ] Silver scope is documented.
- [ ] Silver non-scope is documented.
- [ ] Silver design principles are documented.
- [ ] Bronze-to-Silver mapping is documented.
- [ ] Silver dataset inventory is documented.
- [ ] Each P1 Bronze dataset maps to a Silver dataset or is marked deferred/blocked.
- [ ] Each P1 Silver dataset has domain entity/event/fact alignment.
- [ ] Conceptual-to-logical mapping is documented.
- [ ] Grain and identity rules are documented.
- [ ] Key strategy is documented.
- [ ] Deduplication and survivorship rules are documented where needed.
- [ ] Conformance and standardization rules are documented.
- [ ] Data type normalization is documented.
- [ ] Timezone and temporal normalization is documented where relevant.
- [ ] Unit and currency normalization is documented where relevant.
- [ ] Code/status/category mapping is documented where relevant.
- [ ] Null and missing value handling is documented.
- [ ] Schema evolution handling is documented.
- [ ] Source-of-truth and cross-source reconciliation are documented.
- [ ] Silver boundary data quality rules are documented.
- [ ] Rejected and quarantined record handling is documented.
- [ ] Privacy and security handling is documented.
- [ ] Lineage and traceability are documented.
- [ ] Metadata inheritance from Bronze is documented.
- [ ] Refresh and incremental behavior is documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact does not design Gold marts, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

---

## Evidence

- [ ] Phase 09 handoff evidence is recorded.
- [ ] Bronze-to-Silver mapping evidence is recorded.
- [ ] Domain alignment evidence is recorded.
- [ ] Conceptual-to-logical mapping evidence is recorded.
- [ ] Grain/identity evidence is recorded.
- [ ] Key strategy evidence is recorded.
- [ ] Dedup/survivorship evidence is recorded where needed.
- [ ] Conformance/standardization evidence is recorded.
- [ ] Data type normalization evidence is recorded.
- [ ] Timezone/temporal normalization evidence is recorded where relevant.
- [ ] Unit/currency normalization evidence is recorded where relevant.
- [ ] Code/status/category mapping evidence is recorded where relevant.
- [ ] Null/missing handling evidence is recorded.
- [ ] Schema evolution handling evidence is recorded.
- [ ] Source-of-truth/reconciliation evidence is recorded where needed.
- [ ] Silver boundary quality evidence is recorded.
- [ ] Rejected/quarantine handling evidence is recorded.
- [ ] Privacy/security handling evidence is recorded.
- [ ] Lineage/traceability evidence is recorded.
- [ ] Metadata inheritance evidence is recorded.
- [ ] Refresh/incremental behavior evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Silver Layer Specification reflects available evidence.
- [ ] Unsupported Silver decisions are marked Draft/Open/Risk/Deferred/Blocked.
- [ ] P1 Silver datasets are domain-aligned or explicitly interim source-aligned.
- [ ] Grain, identity, key, conformance, quality, privacy, and lineage are explicit.
- [ ] Source-of-truth conflicts are visible.
- [ ] Metadata inheritance from Bronze is clear enough for Gold traceability decisions.
- [ ] Phase 11 can distinguish approved Silver decisions from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Silver Layer Specification exists.
- [ ] P1 Bronze datasets map to Silver datasets or are marked deferred/blocked.
- [ ] P1 Silver datasets have domain alignment, grain, identity, key strategy, DQ rules, privacy handling, and lineage.
- [ ] Required conformance/normalization/reconciliation rules are documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Blocked/deferred Silver datasets are clearly marked.
- [ ] Risks are carried into the Phase 10 to Phase 11 handoff.

Fail or Blocked if:

- [ ] P1 Silver dataset has no domain alignment.
- [ ] Grain or identity rule is missing.
- [ ] Key strategy is missing.
- [ ] Source-of-truth conflict is unresolved.
- [ ] Required conformance mapping is missing.
- [ ] Timezone/unit/status/category mapping is unclear.
- [ ] Silver quality rules are missing.
- [ ] Sensitive data handling is unresolved.
- [ ] Lineage back to Bronze is incomplete.
- [ ] Metadata inheritance is insufficient for traceability.
- [ ] Artifact includes Gold mart logic, semantic model, dashboard, API, orchestration implementation, CI/CD files, or code.
- [ ] Handoff is missing.
- [ ] Phase 11 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 10 to Phase 11 handoff lists Silver scope and non-scope.
- [ ] Handoff lists approved/deferred/blocked Silver datasets.
- [ ] Handoff lists Bronze-to-Silver mapping.
- [ ] Handoff lists Silver dataset inventory.
- [ ] Handoff lists domain entity/event alignment.
- [ ] Handoff lists conceptual-to-logical mapping.
- [ ] Handoff lists grain and identity rules.
- [ ] Handoff lists key strategy.
- [ ] Handoff lists deduplication and survivorship rules.
- [ ] Handoff lists conformance and standardization rules.
- [ ] Handoff lists data type normalization.
- [ ] Handoff lists timezone and temporal normalization.
- [ ] Handoff lists unit and currency normalization.
- [ ] Handoff lists code/status/category mapping.
- [ ] Handoff lists null and missing value handling.
- [ ] Handoff lists schema evolution handling.
- [ ] Handoff lists source-of-truth and cross-source reconciliation.
- [ ] Handoff lists Silver boundary data quality rules.
- [ ] Handoff lists rejected/quarantined record handling.
- [ ] Handoff lists privacy/security handling.
- [ ] Handoff lists lineage and traceability.
- [ ] Handoff lists metadata inheritance from Bronze.
- [ ] Handoff lists refresh and incremental behavior.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-gold-layer-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 11 starts.

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
