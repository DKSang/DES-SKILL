# Phase 08 Done Gate Checklist — Ingestion Design

Use this checklist before marking Phase 08 Ingestion Design as Done.

Phase 08 is not Done only because `08-ingestion-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/08-ingestion-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-08-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-08/phase-08-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-08-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-08-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-08-to-09-handoff.md` exists.
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
- [ ] Phase 07 to Phase 08 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 07 architecture constraints are carried forward.
- [ ] Phase 07 open questions are carried forward.
- [ ] Phase 07 do-not-assume items are respected.

---

## Ingestion Specification

- [ ] Ingestion summary is documented.
- [ ] Ingestion scope and non-scope are documented.
- [ ] Source-to-ingestion mapping is documented.
- [ ] Source-to-requirement and product output mapping is documented.
- [ ] Each P1 source has an ingestion pattern or is marked blocked/deferred.
- [ ] Batch/streaming/event decision is documented.
- [ ] Frequency and trigger are documented.
- [ ] Bounded/unbounded data classification is documented.
- [ ] Access and extraction method are documented.
- [ ] Incremental/checkpoint strategy is documented or marked not applicable.
- [ ] Idempotency strategy is documented.
- [ ] Replay/backfill strategy is documented.
- [ ] Late-arriving data handling is documented where relevant.
- [ ] Ordering and deduplication expectations are documented.
- [ ] Payload and serialization expectations are documented.
- [ ] Schema drift and evolution policy is documented.
- [ ] Error handling and quarantine expectations are documented.
- [ ] Security and credential handling are documented.
- [ ] Source impact, rate limits, throttling, quota, CDC impact, or owner approval are documented where relevant.
- [ ] Landing target expectations are high-level only.
- [ ] Ingestion metadata expectations are documented.
- [ ] Monitoring evidence and audit expectations are documented.
- [ ] Operational dependencies are documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact does not design detailed Bronze/Silver/Gold schemas, transformations, dashboards, APIs, full orchestration workflows, CI/CD files, or code.

---

## Evidence

- [ ] Phase 07 handoff evidence is recorded.
- [ ] Source-to-ingestion mapping evidence is recorded.
- [ ] Architecture constraint alignment evidence is recorded.
- [ ] Ingestion pattern fit evidence is recorded.
- [ ] Batch/streaming/event alignment evidence is recorded.
- [ ] Frequency/trigger evidence is recorded.
- [ ] Access/extraction evidence is recorded for P1 sources.
- [ ] Incremental/checkpoint evidence is recorded unless not applicable.
- [ ] Idempotency evidence is recorded.
- [ ] Replay/backfill evidence is recorded.
- [ ] Schema drift policy evidence is recorded.
- [ ] Error/quarantine/recovery evidence is recorded.
- [ ] Security/credential handling evidence is recorded.
- [ ] Source impact/rate-limit evidence is recorded when relevant.
- [ ] Landing metadata evidence is recorded.
- [ ] Monitoring/audit evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Ingestion Specification reflects available evidence.
- [ ] Unsupported ingestion decisions are marked Draft/Open/Risk/Deferred/Blocked.
- [ ] P1 source ingestion designs are source-specific.
- [ ] Architecture constraints from Phase 07 are preserved.
- [ ] Landing metadata expectations are clear enough for Phase 09.
- [ ] Monitoring/audit expectations are clear enough for Bronze design.
- [ ] Phase 09 can distinguish approved ingestion decisions from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Ingestion Specification exists.
- [ ] P1 sources have ingestion pattern, frequency, access/extraction, idempotency, replay/backfill, schema drift, error handling, and security handling documented.
- [ ] Ingestion design aligns with ADR.
- [ ] Landing metadata expectations are documented.
- [ ] Monitoring/audit expectations are documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Blocked/deferred sources are clearly marked.
- [ ] Risks are carried into the Phase 08 to Phase 09 handoff.

Fail or Blocked if:

- [ ] P1 source has no ingestion pattern.
- [ ] P1 source access is blocked or unknown without accepted risk.
- [ ] Batch/streaming/event choice conflicts with ADR or freshness requirements.
- [ ] Incremental/checkpoint strategy is unknown for incremental ingestion.
- [ ] Idempotency strategy is missing.
- [ ] Replay/backfill strategy is missing.
- [ ] Schema drift policy is missing.
- [ ] Error handling/recovery is missing.
- [ ] Sensitive data or credential handling is unresolved.
- [ ] Landing metadata expectation is missing.
- [ ] Monitoring/audit expectation is missing.
- [ ] Handoff is missing.
- [ ] Phase 09 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 08 to Phase 09 handoff lists ingestion scope.
- [ ] Handoff lists approved/deferred/blocked sources.
- [ ] Handoff lists source-to-ingestion mapping.
- [ ] Handoff lists source-to-product/requirement/KPI mapping.
- [ ] Handoff lists ingestion pattern per source.
- [ ] Handoff lists batch/streaming/event decision.
- [ ] Handoff lists frequency and trigger.
- [ ] Handoff lists bounded/unbounded data classification.
- [ ] Handoff lists access and extraction method.
- [ ] Handoff lists incremental/checkpoint strategy.
- [ ] Handoff lists idempotency strategy.
- [ ] Handoff lists replay/backfill strategy.
- [ ] Handoff lists schema drift/evolution policy.
- [ ] Handoff lists error/quarantine expectations.
- [ ] Handoff lists security and credential handling.
- [ ] Handoff lists source impact/rate-limit constraints.
- [ ] Handoff lists landing target expectations.
- [ ] Handoff lists ingestion metadata expectations.
- [ ] Handoff lists monitoring/audit expectations.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-bronze-layer-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 09 starts.

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
