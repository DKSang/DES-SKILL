# Phase 09 Done Gate Checklist — Bronze Layer Design

Use this checklist before marking Phase 09 Bronze Layer Design as Done.

Phase 09 is not Done only because `09-bronze-layer-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/09-bronze-layer-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-09-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-09/phase-09-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-09-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-09-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-09-to-10-handoff.md` exists.
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
- [ ] Phase 08 to Phase 09 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 08 ingestion metadata expectations are carried forward.
- [ ] Phase 08 schema drift and replay decisions are carried forward.
- [ ] Phase 08 open questions are carried forward.
- [ ] Phase 08 do-not-assume items are respected.

---

## Bronze Layer Specification

- [ ] Bronze layer summary is documented.
- [ ] Bronze scope is documented.
- [ ] Bronze non-scope is documented.
- [ ] Bronze design principles are documented.
- [ ] Source-to-Bronze mapping is documented.
- [ ] Ingestion-to-Bronze mapping is documented.
- [ ] Each P1 ingestion source maps to a Bronze dataset or is marked blocked/deferred.
- [ ] Bronze dataset inventory is documented.
- [ ] Raw preservation strategy is documented.
- [ ] Storage format decision is documented.
- [ ] File/table organization is documented.
- [ ] Partitioning strategy is documented or explicitly not applicable.
- [ ] Mandatory metadata columns are documented.
- [ ] Ingestion audit metadata is documented.
- [ ] Source traceability metadata is documented.
- [ ] Schema drift and evolution handling is documented.
- [ ] Replay and backfill support is documented.
- [ ] Idempotency and deduplication boundary is documented.
- [ ] Quarantine and rejected data handling is documented.
- [ ] Retention and lifecycle policy is documented.
- [ ] Access control and sensitivity classification is documented.
- [ ] Bronze boundary data quality expectations are documented.
- [ ] Lineage and traceability expectations are documented.
- [ ] Operational evidence requirements are documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact does not design Silver conformance, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, CI/CD files, or code.

---

## Evidence

- [ ] Phase 08 handoff evidence is recorded.
- [ ] Source-to-Bronze mapping evidence is recorded.
- [ ] Ingestion-to-Bronze alignment evidence is recorded.
- [ ] Bronze dataset boundary evidence is recorded.
- [ ] Raw preservation evidence is recorded.
- [ ] Storage format evidence is recorded.
- [ ] File/table organization evidence is recorded.
- [ ] Partitioning strategy evidence is recorded or marked not applicable.
- [ ] Mandatory metadata evidence is recorded.
- [ ] Ingestion audit metadata evidence is recorded.
- [ ] Schema drift handling evidence is recorded.
- [ ] Replay/backfill support evidence is recorded.
- [ ] Idempotency/dedup boundary evidence is recorded.
- [ ] Quarantine/rejected data evidence is recorded.
- [ ] Retention/lifecycle evidence is recorded.
- [ ] Access/sensitivity evidence is recorded.
- [ ] Bronze boundary quality evidence is recorded.
- [ ] Lineage/traceability evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Bronze Layer Specification reflects available evidence.
- [ ] Unsupported Bronze decisions are marked Draft/Open/Risk/Deferred/Blocked.
- [ ] P1 source Bronze datasets are source-aligned.
- [ ] Raw preservation and traceability are explicit.
- [ ] Mandatory metadata is clear enough for Silver inheritance decisions.
- [ ] Schema drift/rescued/quarantine policy is visible.
- [ ] Sensitive raw access rules are visible.
- [ ] Phase 10 can distinguish approved Bronze decisions from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Bronze Layer Specification exists.
- [ ] P1 ingestion sources map to Bronze datasets.
- [ ] Bronze datasets have raw preservation, storage format, organization, metadata, drift, replay, quarantine, retention, and access decisions documented.
- [ ] Bronze boundary quality expectations are technical/source-level, not business conformance.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Blocked/deferred Bronze datasets are clearly marked.
- [ ] Risks are carried into the Phase 09 to Phase 10 handoff.

Fail or Blocked if:

- [ ] P1 ingestion source has no Bronze dataset.
- [ ] Raw preservation strategy is missing.
- [ ] Mandatory metadata is missing.
- [ ] Schema drift policy is missing.
- [ ] Replay/backfill support is missing.
- [ ] Sensitive raw access policy is unresolved.
- [ ] Quarantine policy is missing.
- [ ] Lineage/traceability expectation is missing.
- [ ] Artifact includes Silver/Gold business transformations.
- [ ] Handoff is missing.
- [ ] Phase 10 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 09 to Phase 10 handoff lists Bronze scope and non-scope.
- [ ] Handoff lists approved/deferred/blocked Bronze datasets.
- [ ] Handoff lists source-to-Bronze mapping.
- [ ] Handoff lists ingestion-to-Bronze mapping.
- [ ] Handoff lists raw preservation strategy.
- [ ] Handoff lists storage format and organization.
- [ ] Handoff lists partitioning strategy.
- [ ] Handoff lists mandatory metadata columns.
- [ ] Handoff lists ingestion audit metadata.
- [ ] Handoff lists source traceability metadata.
- [ ] Handoff lists schema drift/evolution handling.
- [ ] Handoff lists replay/backfill support.
- [ ] Handoff lists idempotency/deduplication boundary.
- [ ] Handoff lists quarantine/rejected data handling.
- [ ] Handoff lists retention/lifecycle policy.
- [ ] Handoff lists access/sensitivity classification.
- [ ] Handoff lists Bronze boundary quality expectations.
- [ ] Handoff lists lineage/traceability expectations.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-silver-layer-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 10 starts.

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
