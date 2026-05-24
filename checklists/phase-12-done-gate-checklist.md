# Phase 12 Done Gate Checklist — Data Contracts

Use this checklist before marking Phase 12 Data Contracts as Done.

Phase 12 is not Done only because `12-data-contract-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/12-data-contract-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-12-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-12/phase-12-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-12-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-12-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-12-to-13-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 11 Gold Layer Specification exists or missing context is accepted as risk.
- [ ] Phase 11 to Phase 12 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 11 contract expectations are carried forward.
- [ ] Phase 11 Gold grain/metric/consumer/serving constraints are carried forward.
- [ ] Phase 11 open questions are carried forward.
- [ ] Phase 11 do-not-assume items are respected.

---

## Data Contract Specification

- [ ] Data contract summary is documented.
- [ ] Contract scope is documented.
- [ ] Contract non-scope is documented.
- [ ] Contract design principles are documented.
- [ ] Contract inventory is documented.
- [ ] Producer and consumer mapping is documented.
- [ ] Contract level is documented.
- [ ] Dataset/output identity is documented.
- [ ] Business meaning and grain are documented.
- [ ] Schema expectations are documented.
- [ ] Field-level expectations are documented or Draft with reason.
- [ ] Metric and KPI expectations are documented where metrics exist.
- [ ] Freshness and SLA expectations are documented.
- [ ] Quality expectations are documented.
- [ ] Volume and completeness expectations are documented where relevant.
- [ ] Security and access expectations are documented.
- [ ] Lineage and metadata expectations are documented.
- [ ] Compatibility and versioning policy is documented.
- [ ] Change management policy is documented.
- [ ] Deprecation policy is documented where relevant.
- [ ] Incident and escalation policy is documented for Standard+ contracts.
- [ ] Acceptance and validation criteria are documented.
- [ ] Contract ownership and approval are documented.
- [ ] Risks are documented.
- [ ] Assumptions are documented.
- [ ] Open questions are documented.
- [ ] Artifact does not implement tests, transformations, dashboards, APIs, orchestration, CI/CD files, or code.

---

## Evidence

- [ ] Phase 11 handoff evidence is recorded.
- [ ] Contract scope evidence is recorded.
- [ ] Contract inventory evidence is recorded.
- [ ] Producer/consumer/owner evidence is recorded.
- [ ] Contract level evidence is recorded.
- [ ] Dataset/output identity evidence is recorded.
- [ ] Business meaning/grain evidence is recorded.
- [ ] Schema expectation evidence is recorded.
- [ ] Field-level expectation evidence is recorded for Standard+ contracts.
- [ ] Metric/KPI expectation evidence is recorded where metrics exist.
- [ ] Freshness/SLA evidence is recorded for P1 outputs.
- [ ] Quality expectation evidence is recorded.
- [ ] Volume/completeness evidence is recorded where relevant.
- [ ] Security/access evidence is recorded.
- [ ] Lineage/metadata evidence is recorded.
- [ ] Compatibility/versioning evidence is recorded.
- [ ] Change management evidence is recorded.
- [ ] Deprecation policy evidence is recorded where relevant.
- [ ] Incident/escalation evidence is recorded for Standard+ contracts.
- [ ] Acceptance/validation evidence is recorded.
- [ ] Ownership/approval evidence is recorded.
- [ ] Missing evidence is marked as open question, assumption, waived item, blocked item, conflict, or accepted risk.
- [ ] Agent inferences are not presented as confirmed facts.

---

## Artifact Revision

- [ ] Data Contract Specification reflects available evidence.
- [ ] Unsupported contract decisions are marked Draft/Open/Risk/Deferred/Blocked.
- [ ] P1 contracted outputs have producer, consumer, owner, grain, schema, freshness, quality, security, lineage, and change policy.
- [ ] Metric/KPI expectations align with Phase 03 or are marked Draft/Conflict.
- [ ] Validation criteria are clear enough for Phase 14/15/21.
- [ ] Phase 13 can distinguish approved contracts from assumptions.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Data Contract Specification exists.
- [ ] P1 contracted outputs have contracts or are marked deferred/blocked.
- [ ] Contracts have producer, consumer, owner, contract level, meaning, grain, schema expectation, freshness, quality, access, lineage, versioning/change policy, validation criteria, and status.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked contracts are clearly marked.
- [ ] Risks are carried into the Phase 12 to Phase 13 handoff.

Fail or Blocked if:

- [ ] P1 system-facing output has no contract.
- [ ] Contract has no producer or consumer.
- [ ] Contract has no owner or approver.
- [ ] Contract level is missing.
- [ ] Schema expectation is missing.
- [ ] Grain is missing.
- [ ] Freshness/SLA is missing for P1 output.
- [ ] Quality expectations are missing.
- [ ] Access/security classification is unresolved.
- [ ] Change/versioning policy is missing.
- [ ] Incident/escalation policy is missing for Standard+ contract.
- [ ] Validation criteria are missing.
- [ ] Contract includes metric definitions that conflict with Phase 03.
- [ ] Handoff is missing.
- [ ] Phase 13 would rely on hidden contract assumptions.

---

## Handoff Readiness

- [ ] Phase 12 to Phase 13 handoff lists contract scope and non-scope.
- [ ] Handoff lists approved/proposed/risky/blocked/deprecated contracts.
- [ ] Handoff lists producer and consumer mapping.
- [ ] Handoff lists contract level.
- [ ] Handoff lists dataset/output identity.
- [ ] Handoff lists business meaning and grain.
- [ ] Handoff lists schema expectations.
- [ ] Handoff lists field-level expectations.
- [ ] Handoff lists metric and KPI expectations.
- [ ] Handoff lists freshness and SLA expectations.
- [ ] Handoff lists quality expectations.
- [ ] Handoff lists volume and completeness expectations.
- [ ] Handoff lists security and access expectations.
- [ ] Handoff lists lineage and metadata expectations.
- [ ] Handoff lists compatibility and versioning policy.
- [ ] Handoff lists change management policy.
- [ ] Handoff lists deprecation policy.
- [ ] Handoff lists incident and escalation policy.
- [ ] Handoff lists acceptance and validation criteria.
- [ ] Handoff lists ownership and approval expectations.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-transformation-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 13 starts.

---

## Workflow Status

- [ ] Phase Artifact Progress is updated.
- [ ] Phase Execution Status is updated.
- [ ] Phase Support Plan Progress is updated.
- [ ] Phase Evidence Pack Progress is updated.
- [ ] Phase Artifact Revision Progress is updated.
- [ ] Phase Done Gate Progress is updated.
- [ ] Phase Handoff Register is updated.
- [ ] Current Phase Operating Notes is updated.
- [ ] Active Blockers are updated if needed.
- [ ] Risk Register is updated if needed.
- [ ] Open Questions are updated if needed.
