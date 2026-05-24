# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Governance and Security Specification, validate it through Phase 19 support work, update workflow status, and prepare a safe handoff to Phase 20.

This step completes Phase 19 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Governance/security design draft from Step 02
- Governance/security evidence mapping from Step 02
- Required support work from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`
- `phase_support_plan_file` from `customize.toml`
- `phase_evidence_pack_file` from `customize.toml`
- `phase_artifact_revision_file` from `customize.toml`
- `phase_done_gate_file` from `customize.toml`
- `phase_handoff_file` from `customize.toml`

---

## Actions

1. Create or update the Governance and Security Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved governance/security decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 19 Support Plan.
5. Create or update the Phase 19 Evidence Pack.
6. Record which classification, sensitivity, access, RLS, CLS, masking, encryption, privacy, retention, sharing, API/AI, reverse ETL, audit, approval, ownership, compliance, and incident decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Governance and Security Specification based on the evidence pack.
8. Create or update the Phase 19 Artifact Revision Report.
9. Run the configured Governance and Security checklist.
10. Run the Phase 19 Done Gate checklist.
11. Create or update the Phase 19 to Phase 20 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Governance and Security Specification should contain:

1. Governance and Security Summary
2. Governance Scope
3. Governance Non-Scope
4. Governance Design Principles
5. Data Classification Policy
6. Asset Sensitivity Inventory
7. Field Level Sensitivity Handling
8. Access Control Model
9. Role and Persona Access Matrix
10. Row Level Security Policy
11. Column Level Security Policy
12. Masking Tokenization and Anonymization Policy
13. Encryption and Secret Handling Expectations
14. Privacy and Consent Considerations
15. Retention Lifecycle and Deletion Policy
16. Data Sharing and External Access Policy
17. API Application and AI Agent Access Policy
18. Reverse ETL Governance
19. Audit Logging and Access Monitoring
20. Approval Workflow and Exception Handling
21. Ownership Stewardship and Accountability
22. Compliance and Regulatory Considerations
23. Incident Response and Escalation
24. Governance and Security Evidence Summary
25. Risks
26. Assumptions
27. Open Questions
28. Phase 19 Evidence Summary
29. Phase 19 Handoff Notes
30. Next Skill Recommendation

---

## Phase 19 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-19-support-plan.md
```

Use:

```text
templates/phase/phase-19-support-plan-template.md
```

if available.

---

## Phase 19 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-19/phase-19-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                                 |                                   Required? |
| ----------- | --------------------------------------------- | ------------------------------------------: |
| E-001       | Phase 18 handoff evidence                     |                                         Yes |
| E-002       | Governance scope evidence                     |                                         Yes |
| E-003       | Data classification evidence                  |                                         Yes |
| E-004       | Asset sensitivity inventory evidence          |                                         Yes |
| E-005       | Field-level sensitivity handling evidence     |       Required where sensitive fields exist |
| E-006       | Access control model evidence                 |                                         Yes |
| E-007       | Role/persona access matrix evidence           |                                         Yes |
| E-008       | Row-level security policy evidence            |       Required where row restrictions exist |
| E-010       | Column-level security policy evidence         |       Required where sensitive fields exist |
| E-011       | Masking/tokenization/anonymization evidence   | Required where sensitive fields are exposed |
| E-012       | Encryption/secret handling evidence           |                                         Yes |
| E-013       | Privacy/consent evidence                      |      Required where personal data may exist |
| E-014       | Retention lifecycle/deletion evidence         |                                         Yes |
| E-015       | Data sharing/external access evidence         |               Required where sharing exists |
| E-016       | API/application/AI-agent access evidence      |      Required where non-human access exists |
| E-017       | Reverse ETL governance evidence               |             Required where writeback exists |
| E-018       | Audit logging/access monitoring evidence      |                                         Yes |
| E-019       | Approval/exception handling evidence          |                                         Yes |
| E-020       | Ownership/stewardship/accountability evidence |                                         Yes |
| E-021       | Compliance/regulatory evidence                |                     Required where relevant |
| E-022       | Incident response/escalation evidence         |                                         Yes |

---

## Phase 19 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-19-artifact-revision.md
```

Record:

* what changed in the Governance and Security Specification after evidence review;
* which assets were classified as Public/Internal/Confidential/PII/Sensitive/Secret-bearing/Unknown;
* which access policies were approved, risky, blocked, or deferred;
* which sensitive fields require masking/tokenization/anonymization/removal;
* which sharing/API/AI/reverse ETL policies remain risky;
* which governance/security constraints must be carried into Phase 20.

---

## Phase 19 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-19-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 19 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 19 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-19-to-20-handoff.md
```

The handoff must tell Phase 20:

* governance scope and non-scope;
* approved/risky/blocked/deferred governed assets;
* classification and sensitivity constraints;
* field-level protection requirements;
* access control constraints;
* RLS/CLS/object/measure-level restrictions;
* masking/tokenization/anonymization requirements;
* encryption and secret handling expectations;
* privacy/consent constraints;
* retention and deletion lifecycle constraints;
* external sharing/API/AI/reverse ETL constraints;
* audit logging and access monitoring requirements;
* approval/exception process;
* incident and escalation constraints;
* constraints that may affect cost, performance, storage, query design, partitioning, caching, serving, or observability;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 20 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 20 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Governance and Security checklist or Phase 19 Done Gate fails.

### Blocking examples

* Asset classification is missing.
* Sensitive field handling is unclear.
* Broad raw access is allowed without approval.
* RLS/CLS/masking is required but missing.
* Secret-bearing data may be persisted.
* Retention/deletion policy is missing.
* External sharing has no governance approval.
* API/AI-agent access has no least-privilege and audit policy.
* Reverse ETL has no approval/rollback/monitoring guardrails.
* Audit logging or access monitoring is missing.
* Owner/approver is missing.
* Phase 19 evidence pack is missing and not waived.
* Phase 19 handoff is missing.
* Artifact implements security controls or infrastructure code prematurely.
* Phase 20 would optimize an unsafe or non-governed design.

### Options

A. Fix the governance/security specification now
B. Mark Phase 19 as Draft with blockers
C. Return to Step 02 policy decisions
D. Route back to the upstream skill that owns the missing context
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_19_governance_security_design:
  skill: des-governance-security-design
  artifact: _des-output/planning-artifacts/19-governance-security-specification.md
  support_plan: _des-output/phase-support-plans/phase-19-support-plan.md
  evidence_pack: _des-output/evidence/phase-19/phase-19-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-19-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-19-done-gate.md
  handoff: _des-output/phase-handoffs/phase-19-to-20-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  governed_assets:
    - asset: ...
      classification: Public | Internal | Confidential | PII | Sensitive / Regulated | Secret-bearing | Unknown
      status: Draft | Approved | Risk | Blocked | Deferred
  access_policies:
    - policy_id: ...
      applies_to: ...
      control: RBAC | ABAC | RLS | CLS | Masking | Tokenization | Manual approval | Purpose-based | JIT
      status: Draft | Approved | Risk | Blocked
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-cost-and-performance-optimization
```

Also update these Workflow Status v2 sections if present:

```text
Phase Artifact Progress
Phase Execution Status
Phase Support Plan Progress
Phase Evidence Pack Progress
Phase Artifact Revision Progress
Phase Done Gate Progress
Phase Handoff Register
Phase Dependency and Readiness Matrix
Current Phase Operating Notes
Active Blockers
Risk Register
Key Decisions Log
Open Questions
```

---

## Completion Criteria

This step is complete when:

* Governance and Security Specification is created or updated;
* Phase 19 Support Plan is created or updated;
* Phase 19 Evidence Pack is created or updated;
* Governance and Security Specification is revised from evidence or evidence is explicitly waived;
* Phase 19 Artifact Revision Report is created or updated;
* Phase 19 Done Gate result is recorded;
* Phase 19 to Phase 20 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 20 without user approval.
