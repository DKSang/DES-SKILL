# Phase 11 Done Gate Checklist — Gold Layer Design

Use this checklist before marking Phase 11 Gold Layer Design as Done.

Phase 11 is not Done only because `11-gold-layer-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/11-gold-layer-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-11-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-11/phase-11-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-11-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-11-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-11-to-12-handoff.md` exists.
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
- [ ] Phase 10 Silver Layer Specification exists or missing context is accepted as risk.
- [ ] Phase 10 to Phase 11 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 10 Silver grain/identity constraints are carried forward.
- [ ] Phase 10 source-of-truth and DQ risks are carried forward.
- [ ] Phase 10 open questions are carried forward.
- [ ] Phase 10 do-not-assume items are respected.

---

## Gold Layer Specification

- [ ] Gold layer summary is documented.
- [ ] Gold scope is documented.
- [ ] Gold non-scope is documented.
- [ ] Gold design principles are documented.
- [ ] Business question to Gold mapping is documented.
- [ ] Requirement and KPI to Gold mapping is documented.
- [ ] Data product output to Gold mapping is documented.
- [ ] Silver to Gold mapping is documented.
- [ ] Gold dataset inventory is documented.
- [ ] Gold output type is documented.
- [ ] Consumer and serving alignment is documented.
- [ ] Grain and aggregation rules are documented.
- [ ] Metric and KPI definitions used are documented.
- [ ] Dimension/fact/aggregate/output model decisions are documented.
- [ ] Filtering and slicing expectations are documented.
- [ ] History and slowly changing behavior is documented.
- [ ] Freshness and SLA expectations are documented.
- [ ] Gold boundary data quality rules are documented.
- [ ] Access control and security handling is documented.
- [ ] Contract expectations are documented.
- [ ] Lineage and traceability are documented.
- [ ] Performance and cost considerations are documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact does not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD files, or code.

---

## Evidence

- [ ] Phase 10 handoff evidence is recorded.
- [ ] Business question to Gold mapping evidence is recorded.
- [ ] KPI/requirement to Gold mapping evidence is recorded.
- [ ] Data product output to Gold mapping evidence is recorded.
- [ ] Silver-to-Gold mapping evidence is recorded.
- [ ] Gold dataset boundary evidence is recorded.
- [ ] Consumer/serving alignment evidence is recorded.
- [ ] Grain/aggregation evidence is recorded.
- [ ] Metric definition alignment evidence is recorded.
- [ ] Modeling pattern evidence is recorded.
- [ ] Filtering/slicing evidence is recorded where relevant.
- [ ] History/SCD behavior evidence is recorded where relevant.
- [ ] Freshness/SLA evidence is recorded.
- [ ] Gold boundary quality evidence is recorded.
- [ ] Access/security evidence is recorded.
- [ ] Contract expectation evidence is recorded.
- [ ] Lineage/traceability evidence is recorded.
- [ ] Performance/cost evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Gold Layer Specification reflects available evidence.
- [ ] Unsupported Gold decisions are marked Draft/Open/Risk/Deferred/Blocked.
- [ ] P1 Gold outputs are question/product/consumer-aligned.
- [ ] KPI/metric definitions align with Phase 03 or are marked Draft/Conflict.
- [ ] Grain, aggregation, quality, security, contract expectation, and lineage are explicit.
- [ ] Contract expectation is clear enough for Phase 12.
- [ ] Phase 12 can distinguish approved Gold decisions from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Gold Layer Specification exists.
- [ ] P1 business questions map to Gold outputs or are marked deferred/blocked.
- [ ] P1 product outputs map to Gold datasets or are marked deferred/blocked.
- [ ] P1 Gold datasets have consumer, serving direction, Silver inputs, grain, DQ rules, access/security, contract expectation, and lineage.
- [ ] Metric/KPI usage aligns with Phase 03.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Blocked/deferred Gold outputs are clearly marked.
- [ ] Risks are carried into the Phase 11 to Phase 12 handoff.

Fail or Blocked if:

- [ ] P1 business question has no Gold output.
- [ ] P1 product output has no Gold dataset.
- [ ] Gold output has no consumer or serving path.
- [ ] Gold grain is missing.
- [ ] KPI definition conflicts with Phase 03.
- [ ] Aggregation rule is unclear.
- [ ] Model type is unclear.
- [ ] Freshness/SLA is missing for P1 output.
- [ ] Gold quality rules are missing.
- [ ] Access/security handling is unresolved.
- [ ] Contract expectation is missing for downstream-facing output.
- [ ] Lineage back to Silver/Bronze/source is incomplete.
- [ ] Artifact includes transformation code, semantic internals, dashboard/API implementation, full contract, orchestration implementation, CI/CD files, or code.
- [ ] Handoff is missing.
- [ ] Phase 12 would rely on hidden Gold assumptions.

---

## Handoff Readiness

- [ ] Phase 11 to Phase 12 handoff lists Gold scope and non-scope.
- [ ] Handoff lists approved/deferred/blocked Gold datasets.
- [ ] Handoff lists business question to Gold mapping.
- [ ] Handoff lists KPI/requirement to Gold mapping.
- [ ] Handoff lists data product output to Gold mapping.
- [ ] Handoff lists Silver to Gold mapping.
- [ ] Handoff lists Gold dataset inventory.
- [ ] Handoff lists Gold output type.
- [ ] Handoff lists consumer and serving alignment.
- [ ] Handoff lists grain and aggregation rules.
- [ ] Handoff lists metric and KPI definitions used.
- [ ] Handoff lists dimension/fact/aggregate/output model decisions.
- [ ] Handoff lists filtering and slicing expectations.
- [ ] Handoff lists history/SCD behavior.
- [ ] Handoff lists freshness/SLA expectations.
- [ ] Handoff lists Gold boundary data quality rules.
- [ ] Handoff lists access control and security handling.
- [ ] Handoff lists contract expectations.
- [ ] Handoff lists lineage and traceability.
- [ ] Handoff lists performance and cost considerations.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-data-contracts`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 12 starts.

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
