# Phase 19 Done Gate Checklist — Governance and Security Design

Use this checklist before marking Phase 19 Governance and Security Design as Done.

Phase 19 is not Done only because `19-governance-security-specification.md` exists.

---

## Required Files

- [ ] `_des-output/planning-artifacts/19-governance-security-specification.md` exists.
- [ ] `_des-output/phase-support-plans/phase-19-support-plan.md` exists or is waived with reason.
- [ ] `_des-output/evidence/phase-19/phase-19-evidence-pack.md` exists or evidence is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-19-artifact-revision.md` exists or revision is waived with reason.
- [ ] `_des-output/implementation-artifacts/phase-19-done-gate.md` exists.
- [ ] `_des-output/phase-handoffs/phase-19-to-20-handoff.md` exists.
- [ ] `_des-output/implementation-artifacts/des-workflow-status.md` is updated.

---

## Upstream Readiness

- [ ] Phase 18 Lineage and Metadata Specification exists or missing context is accepted as risk.
- [ ] Phase 18 to Phase 19 handoff exists or missing handoff is accepted as risk.
- [ ] Phase 18 asset/sensitivity/access metadata is carried forward.
- [ ] Phase 18 ownership/stewardship metadata is carried forward.
- [ ] Phase 18 audit/compliance metadata is carried forward.
- [ ] Phase 18 open questions are carried forward.
- [ ] Phase 18 do-not-assume items are respected.

---

## Governance and Security Specification

- [ ] Governance and security summary is documented.
- [ ] Governance scope is documented.
- [ ] Governance non-scope is documented.
- [ ] Governance design principles are documented.
- [ ] Data classification policy is documented.
- [ ] Asset sensitivity inventory is documented.
- [ ] Field-level sensitivity handling is documented.
- [ ] Access control model is documented.
- [ ] Role and persona access matrix is documented.
- [ ] Row-level security policy is documented or marked not applicable.
- [ ] Column-level security policy is documented or marked not applicable.
- [ ] Masking, tokenization, and anonymization policy is documented where needed.
- [ ] Encryption and secret handling expectations are documented.
- [ ] Privacy and consent considerations are documented.
- [ ] Retention lifecycle and deletion policy is documented.
- [ ] Data sharing and external access policy is documented.
- [ ] API/application and AI-agent access policy is documented.
- [ ] Reverse ETL governance is documented where relevant.
- [ ] Audit logging and access monitoring is documented.
- [ ] Approval workflow and exception handling is documented.
- [ ] Ownership, stewardship, and accountability are documented.
- [ ] Compliance and regulatory considerations are documented.
- [ ] Incident response and escalation are documented.
- [ ] Artifact does not implement IAM, ACLs, RLS/CLS policies, masking logic, encryption config, governance tooling, policy engines, CI/CD, infrastructure, or code.

---

## Done Gate Decision

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

Pass only if:

- [ ] Governance and Security Specification exists.
- [ ] P1 assets have classification or are restricted until reviewed.
- [ ] P1 serving outputs have access/security policy.
- [ ] Sensitive fields have handling policy or are blocked from broad exposure.
- [ ] Retention/deletion is documented or risk accepted.
- [ ] Audit/access monitoring is documented.
- [ ] Ownership/approval path is documented.
- [ ] Evidence pack exists or evidence is waived with reason.
- [ ] Handoff exists.
- [ ] Workflow status is updated.

Pass with risks only if:

- [ ] Missing or weak evidence is documented.
- [ ] Risks are accepted explicitly.
- [ ] Draft/risky/blocked governed assets are clearly marked.
- [ ] Risks are carried into the Phase 19 to Phase 20 handoff.

Fail or Blocked if:

- [ ] Asset classification is missing.
- [ ] Sensitive field handling is unclear.
- [ ] Broad raw access is allowed without approval.
- [ ] RLS/CLS/masking is required but missing.
- [ ] Secret-bearing data may be persisted.
- [ ] Retention/deletion policy is missing.
- [ ] External sharing has no governance approval.
- [ ] API/AI-agent access has no least-privilege and audit policy.
- [ ] Reverse ETL has no approval/rollback/monitoring guardrails.
- [ ] Audit logging or access monitoring is missing.
- [ ] Owner/approver is missing.
- [ ] Handoff is missing.
- [ ] Artifact contains security/IAM/infrastructure implementation code prematurely.
- [ ] Phase 20 would optimize an unsafe or non-governed design.

---

## Handoff Readiness

- [ ] Phase 19 to Phase 20 handoff lists approved/risky/blocked/deferred governed assets.
- [ ] Handoff lists classification and sensitivity constraints.
- [ ] Handoff lists field-level protection requirements.
- [ ] Handoff lists access control constraints.
- [ ] Handoff lists RLS/CLS/object/measure restrictions.
- [ ] Handoff lists masking/tokenization/anonymization requirements.
- [ ] Handoff lists encryption and secret handling expectations.
- [ ] Handoff lists retention/deletion lifecycle constraints.
- [ ] Handoff lists audit/access monitoring requirements.
- [ ] Handoff lists constraints that affect cost/performance/storage/query/caching decisions.
- [ ] Handoff lists risks carried forward.
- [ ] Handoff lists open questions.
- [ ] Handoff includes a do-not-assume list.
- [ ] Handoff recommends `des-cost-and-performance-optimization`.
- [ ] Handoff status is `Ready` or `Ready with Risks` before Phase 20 starts.

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
