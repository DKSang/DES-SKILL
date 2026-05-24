# Phase 17 Done Gate Checklist — Serving Layer Design

Use this checklist before marking Phase 17 Serving Layer Design as Done.

Phase 17 is not Done only because `17-serving-layer-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/17-serving-layer-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-17-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-17/phase-17-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-17-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-17-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-17-to-18-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 16 Semantic Model Specification exists or missing context is accepted as risk.
- [ ] Phase 16 to Phase 17 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 16 semantic object statuses are carried forward.
- [ ] Phase 16 security/access constraints are carried forward.
- [ ] Phase 16 freshness/quality display expectations are carried forward.
- [ ] Phase 16 open questions are carried forward.
- [ ] Phase 16 do-not-assume items are respected.

---

## Serving Layer Specification

- [ ] Serving layer summary is documented.
- [ ] Serving scope is documented.
- [ ] Serving non-scope is documented.
- [ ] Serving design principles are documented.
- [ ] Consumer and persona mapping is documented.
- [ ] Serving channel inventory exists.
- [ ] Gold/Semantic-to-serving mapping is documented.
- [ ] Serving pattern decision is documented.
- [ ] Dashboard/reporting expectations are documented where relevant.
- [ ] Self-service analytics expectations are documented where relevant.
- [ ] API/application-serving expectations are documented where relevant.
- [ ] ML/AI dataset serving expectations are documented where relevant.
- [ ] Reverse ETL/export expectations are documented where relevant.
- [ ] Data sharing/federation expectations are documented where relevant.
- [ ] AI/data-agent access expectations are documented where relevant.
- [ ] Access control and security model is documented.
- [ ] Freshness and quality visibility is documented.
- [ ] Performance and latency expectations are documented.
- [ ] Caching and materialization expectations are documented where relevant.
- [ ] Feedback loop and issue reporting are documented.
- [ ] Usage monitoring and adoption signals are documented.
- [ ] Ownership and support model is documented.
- [ ] Artifact does not implement dashboards, BI models, APIs, apps, ML jobs, reverse ETL jobs, exports, agents, caching, CI/CD, deployments, or code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Serving Layer Specification exists.
- [ ] P1 serving outputs have consumer, channel, source Gold/Semantic object, access policy, freshness/quality visibility, performance expectation, feedback path, support owner, and status.
- [ ] System-facing outputs have contract expectations or are marked Draft/Risk/Blocked.
- [ ] Reverse ETL/export/sharing/agent outputs have guardrails where relevant.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked serving outputs are clearly marked.
- [ ] Risks are carried into the Phase 17 to Phase 18 handoff.

Fail or Blocked if:

- [ ] P1 serving output has no consumer.
- [ ] P1 serving output has no serving channel.
- [ ] Gold/Semantic mapping is missing.
- [ ] Access/security policy is missing.
- [ ] Freshness/quality visibility is missing for trusted output.
- [ ] API/application output has no contract expectation.
- [ ] Reverse ETL output has no guardrails.
- [ ] Data sharing/federation has no access/source-impact review.
- [ ] AI/data-agent access has no semantic/security/metadata boundary.
- [ ] Feedback/support owner is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains serving implementation code prematurely.
- [ ] Phase 18 would rely on hidden assumptions.

---

## Handoff Readiness

- [ ] Phase 17 to Phase 18 handoff lists approved/risky/blocked/deferred serving outputs.
- [ ] Handoff lists Gold/Semantic-to-serving mappings.
- [ ] Handoff lists access/security constraints.
- [ ] Handoff lists freshness and quality visibility requirements.
- [ ] Handoff lists metadata and lineage requirements for each serving channel.
- [ ] Handoff lists AI/data-agent metadata needs where relevant.
- [ ] Handoff lists API/export/data sharing metadata needs where relevant.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-lineage-metadata-design`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 18 starts.

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
