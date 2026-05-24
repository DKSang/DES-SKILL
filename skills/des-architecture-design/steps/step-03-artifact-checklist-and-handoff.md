# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Architecture Decision Record, validate it through Phase 07 support work, update workflow status, and prepare a safe handoff to Phase 08.

This step completes Phase 07 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Architecture decision draft from Step 02
- Architecture evidence mapping from Step 02
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

1. Create or update the Architecture Decision Record using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved decisions as `Proposed`, `Deferred`, `Open`, `Risk`, or `Blocked`.
4. Create or update the Phase 07 Support Plan.
5. Create or update the Phase 07 Evidence Pack.
6. Record which platform, environment, storage, compute, latency, layer, serving, orchestration, observability, security, governance, cost, and reversibility decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Architecture Decision Record based on the evidence pack.
8. Create or update the Phase 07 Artifact Revision Report.
9. Run the configured Architecture Design checklist.
10. Run the Phase 07 Done Gate checklist.
11. Create or update the Phase 07 to Phase 08 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should be an architecture blueprint, not a tool shopping list.
- Keep implementation details for later phases.
- Capture why rejected options were rejected.
- Use reversible decisions where uncertainty remains.
- If architecture depends on a platform choice not yet approved, mark the ADR as Draft or Proposed.
- If architecture impacts security, cost, or operations heavily, mark explicit follow-up for governance/security, cost/performance, and CI/CD phases.
- This artifact should enable ingestion design and layer design.
- Phase 08 needs high-level architecture constraints, not detailed ingestion steps.

---

## Artifact Sections

The Architecture Decision Record should contain:

1. Architecture Summary
2. Decision Context
3. Architecture Goals
4. Architecture Principles
5. Target Architecture Overview
6. Lifecycle Alignment
7. Environment Strategy
8. Storage Strategy
9. Compute Strategy
10. Batch Streaming and Event Strategy
11. Integration Pattern
12. Layer Strategy
13. Serving Strategy
14. Orchestration Boundary
15. Observability Direction
16. Security and Privacy Posture
17. Governance and Metadata Direction
18. DataOps and Software Engineering Direction
19. Build Versus Buy Considerations
20. Technology Constraints and Options
21. Architecture Options Considered
22. Architecture Decisions
23. Trade-Offs
24. Reversibility Classification
25. Architecture Evidence Summary
26. Risks
27. Assumptions
28. Open Questions
29. Phase 07 Evidence Summary
30. Phase 07 Handoff Notes
31. Next Skill Recommendation

---

## Phase 07 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-07-support-plan.md
```

Minimum sections:

1. Phase context
2. Upstream inputs reviewed
3. Initial artifact summary
4. What must be validated
5. Required support work
6. Evidence output locations
7. Waivers and deferrals
8. HALT conditions
9. Completion criteria
10. Next support action

Use:

```text
templates/phase/phase-07-support-plan-template.md
```

if available.

---

## Phase 07 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-07/phase-07-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                             | Required? |
| ----------- | ----------------------------------------- | --------: |
| E-001       | Phase 06 handoff evidence                 |       Yes |
| E-002       | Architecture driver traceability evidence |       Yes |
| E-003       | Option comparison evidence                |       Yes |
| E-004       | Platform feasibility evidence             |       Yes |
| E-005       | Environment strategy evidence             |       Yes |
| E-006       | Storage/compute fit evidence              |       Yes |
| E-007       | Batch/streaming/event fit evidence        |       Yes |
| E-008       | Layer strategy evidence                   |       Yes |
| E-009       | Serving strategy evidence                 |       Yes |
| E-010       | Security/privacy evidence                 |       Yes |
| E-011       | Governance/metadata evidence              |       Yes |
| E-012       | Cost/operational burden evidence          |       Yes |
| E-013       | Reversibility/lock-in evidence            |       Yes |

For each evidence item, record status:

```text
Confirmed
Partial
Assumed
Missing
Waived with reason
Conflicting
Accepted with risk
```

Use:

```text
templates/phase/phase-07-evidence-pack-template.md
```

if available.

---

## Phase 07 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-07-artifact-revision.md
```

Record:

* what changed in the Architecture Decision Record after evidence review;
* which architecture drivers were added or revised;
* which options were rejected and why;
* which decisions were approved, proposed, deferred, or blocked;
* which hard-to-reverse decisions were approved or deferred;
* which source/domain/product caveats were carried forward;
* whether Phase 08 can safely use the ADR for ingestion design.

---

## Phase 07 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-07-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 07 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 07 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-07-to-08-handoff.md
```

The handoff must tell Phase 08:

* architecture scope;
* target platform direction;
* environment strategy;
* storage strategy;
* compute strategy;
* batch/streaming/event strategy;
* layer strategy;
* integration pattern;
* serving strategy;
* orchestration boundary;
* observability direction;
* security/privacy posture;
* governance/metadata direction;
* DataOps/software engineering direction;
* build-versus-buy decisions;
* approved architecture decisions;
* proposed/deferred architecture decisions;
* hard-to-reverse decisions;
* source/domain/product caveats;
* ingestion-relevant constraints;
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 08 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 08 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Architecture Design checklist or Phase 07 Done Gate fails.

### Blocking examples

* architecture scope is unclear;
* target architecture is only a list of tools;
* environment strategy is missing;
* storage or compute strategy is missing;
* batch/streaming/event strategy conflicts with freshness/source evidence;
* security/privacy posture is missing;
* serving direction is missing for P1 outputs;
* hard-to-reverse decisions are made without approval;
* architecture conflicts with requirements, source realities, domain constraints, or product expectations;
* artifact contains detailed ingestion pipeline or physical schema design prematurely;
* Phase 07 evidence pack is missing and not waived;
* Phase 07 handoff is missing;
* Phase 08 would rely on hidden architecture assumptions.

### Options

A. Fix the ADR now
B. Mark Phase 07 as Draft with blockers
C. Return to Step 02 architecture decisions
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
phase_07_architecture_design:
  skill: des-architecture-design
  artifact: _des-output/planning-artifacts/07-architecture-decision-record.md
  support_plan: _des-output/phase-support-plans/phase-07-support-plan.md
  evidence_pack: _des-output/evidence/phase-07/phase-07-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-07-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-07-done-gate.md
  handoff: _des-output/phase-handoffs/phase-07-to-08-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  architecture_scope: ...
  target_architecture: ...
  decisions:
    - id: ADR-001
      decision: ...
      status: Proposed | Approved | Deferred | Rejected | Superseded
      reversibility: Easy to reverse | Moderate to reverse | Hard to reverse
  deferred_decisions:
    - ...
  hard_to_reverse_decisions:
    - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-ingestion-design
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

* Architecture Decision Record is created or updated;
* Phase 07 Support Plan is created or updated;
* Phase 07 Evidence Pack is created or updated;
* Architecture Decision Record is revised from evidence or evidence is explicitly waived;
* Phase 07 Artifact Revision Report is created or updated;
* Phase 07 Done Gate result is recorded;
* Phase 07 to Phase 08 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 08 without user approval.
