# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Serving Layer Specification, validate it through Phase 17 support work, update workflow status, and prepare a safe handoff to Phase 18.

This step completes Phase 17 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Serving layer design draft from Step 02
- Serving evidence mapping from Step 02
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

1. Create or update the Serving Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved serving decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 17 Support Plan.
5. Create or update the Phase 17 Evidence Pack.
6. Record which consumer, channel, mapping, pattern, access, freshness, quality, performance, caching, API, ML/AI, reverse ETL, sharing, agent access, feedback, usage, and ownership decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Serving Layer Specification based on the evidence pack.
8. Create or update the Phase 17 Artifact Revision Report.
9. Run the configured Serving Layer checklist.
10. Run the Phase 17 Done Gate checklist.
11. Create or update the Phase 17 to Phase 18 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Serving Layer Specification should contain:

1. Serving Layer Summary
2. Serving Scope
3. Serving Non-Scope
4. Serving Design Principles
5. Consumer and Persona Mapping
6. Serving Channel Inventory
7. Gold and Semantic to Serving Mapping
8. Serving Pattern Decision
9. Dashboard and Reporting Expectations
10. Self Service Analytics Expectations
11. API and Application Serving Expectations
12. ML and AI Dataset Serving Expectations
13. Reverse ETL and Export Expectations
14. Data Sharing and Federation Expectations
15. AI and Data Agent Access Expectations
16. Access Control and Security Model
17. Freshness and Quality Visibility
18. Performance and Latency Expectations
19. Caching and Materialization Expectations
20. Feedback Loop and Issue Reporting
21. Usage Monitoring and Adoption Signals
22. Ownership and Support Model
23. Serving Evidence Summary
24. Risks
25. Assumptions
26. Open Questions
27. Phase 17 Evidence Summary
28. Phase 17 Handoff Notes
29. Next Skill Recommendation

---

## Phase 17 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-17-support-plan.md
```

Use:

```text
templates/phase/phase-17-support-plan-template.md
```

if available.

---

## Phase 17 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-17/phase-17-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                               |               Required? |
| ----------- | ------------------------------------------- | ----------------------: |
| E-001       | Phase 16 handoff evidence                   |                     Yes |
| E-002       | Serving scope evidence                      |                     Yes |
| E-003       | Consumer/persona evidence                   |                     Yes |
| E-004       | Serving channel inventory evidence          |                     Yes |
| E-005       | Gold/Semantic-to-serving mapping evidence   |                     Yes |
| E-006       | Serving pattern evidence                    |                     Yes |
| E-007       | Dashboard/reporting expectation evidence    | Required where relevant |
| E-008       | Self-service analytics expectation evidence | Required where relevant |
| E-009       | API/application serving evidence            | Required where relevant |
| E-010       | ML/AI dataset serving evidence              | Required where relevant |
| E-011       | Reverse ETL/export evidence                 | Required where relevant |
| E-012       | Data sharing/federation evidence            | Required where relevant |
| E-013       | AI/data-agent access evidence               | Required where relevant |
| E-014       | Access/security model evidence              |                     Yes |
| E-015       | Freshness/quality visibility evidence       |                     Yes |
| E-016       | Performance/latency evidence                |         Required for P1 |
| E-017       | Caching/materialization evidence            | Required where relevant |
| E-018       | Feedback/issue reporting evidence           |                     Yes |
| E-019       | Usage monitoring/adoption evidence          |              Yes for P1 |
| E-020       | Ownership/support model evidence            |                     Yes |

---

## Phase 17 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-17-artifact-revision.md
```

Record:

* what changed in the Serving Layer Specification after evidence review;
* which serving outputs were approved, risky, blocked, or deferred;
* which consumers, channels, access policies, visibility expectations, and performance expectations were clarified;
* which API/ML/reverse ETL/data sharing/AI-agent risks remain;
* which metadata and lineage needs must be carried into Phase 18.

---

## Phase 17 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-17-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 17 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 17 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-17-to-18-handoff.md
```

The handoff must tell Phase 18:

* serving scope and non-scope;
* approved/risky/blocked/deferred serving outputs;
* consumer/persona mapping;
* serving channel inventory;
* Gold/Semantic-to-serving mapping;
* serving pattern decisions;
* access/security constraints;
* freshness and quality visibility requirements;
* performance/latency expectations;
* caching/materialization expectations;
* feedback and support process;
* usage monitoring expectations;
* metadata and lineage requirements for each serving channel;
* AI/data-agent metadata needs;
* API/export/data sharing metadata needs;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 18 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 18 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Serving Layer Design checklist or Phase 17 Done Gate fails.

### Blocking examples

* P1 serving output has no consumer.
* P1 serving output has no serving channel.
* Gold/Semantic mapping is missing.
* Access/security policy is missing.
* Freshness/quality visibility is missing for trusted output.
* API/application output has no contract expectation.
* Reverse ETL output has no guardrails.
* Data sharing/federation has no access/source-impact review.
* AI/data-agent access has no semantic/security/metadata boundary.
* Feedback/support owner is missing.
* Phase 17 evidence pack is missing and not waived.
* Phase 17 handoff is missing.
* Artifact includes dashboard/API/ML/reverse ETL implementation code prematurely.
* Phase 18 would rely on hidden serving assumptions.

### Options

A. Fix the serving layer specification now
B. Mark Phase 17 as Draft with blockers
C. Return to Step 02 serving decisions
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
phase_17_serving_layer_design:
  skill: des-serving-layer-design
  artifact: _des-output/planning-artifacts/17-serving-layer-specification.md
  support_plan: _des-output/phase-support-plans/phase-17-support-plan.md
  evidence_pack: _des-output/evidence/phase-17/phase-17-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-17-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-17-done-gate.md
  handoff: _des-output/phase-handoffs/phase-17-to-18-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  serving_outputs:
    - output_id: ...
      consumer: ...
      channel: ...
      source: ...
      trust_status: Draft | Promoted | Certified | Risk | Blocked
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-lineage-metadata-design
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

* Serving Layer Specification is created or updated;
* Phase 17 Support Plan is created or updated;
* Phase 17 Evidence Pack is created or updated;
* Serving Layer Specification is revised from evidence or evidence is explicitly waived;
* Phase 17 Artifact Revision Report is created or updated;
* Phase 17 Done Gate result is recorded;
* Phase 17 to Phase 18 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 18 without user approval.
