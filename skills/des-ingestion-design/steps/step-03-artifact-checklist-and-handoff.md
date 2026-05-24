# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Ingestion Specification, validate it through Phase 08 support work, update workflow status, and prepare a safe handoff to Phase 09.

This step completes Phase 08 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Ingestion design draft from Step 02
- Ingestion evidence mapping from Step 02
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

1. Create or update the Ingestion Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved ingestion decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 08 Support Plan.
5. Create or update the Phase 08 Evidence Pack.
6. Record which ingestion pattern, access, frequency, checkpoint, idempotency, replay, backfill, schema drift, error handling, credential, landing metadata, and monitoring decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Ingestion Specification based on the evidence pack.
8. Create or update the Phase 08 Artifact Revision Report.
9. Run the configured Ingestion Design checklist.
10. Run the Phase 08 Done Gate checklist.
11. Create or update the Phase 08 to Phase 09 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should be source-specific.
- Do not write pipeline code.
- Do not design Bronze table schema yet.
- Do not hide blocked source access or unknown incremental strategy.
- Use `Draft` or `Risk` status when ingestion can be designed conceptually but not implemented safely yet.
- Use `Blocked` when access, legal, security, or source owner approval is missing for P1 ingestion.
- This artifact should enable Phase 09 to design Bronze datasets and metadata.
- Phase 09 needs landing expectations, raw preservation rules, metadata expectations, error/quarantine expectations, and ingestion evidence.

---

## Artifact Sections

The Ingestion Specification should contain:

1. Ingestion Summary
2. Ingestion Scope
3. Source-to-Ingestion Mapping
4. Source-to-Requirement and Product Output Mapping
5. Ingestion Pattern per Source
6. Batch Streaming and Event Decision
7. Frequency and Trigger
8. Bounded and Unbounded Data Classification
9. Access and Extraction Method
10. Incremental and Checkpoint Strategy
11. Idempotency Strategy
12. Replay and Backfill Strategy
13. Late Arriving Data Handling
14. Ordering and Deduplication Expectations
15. Payload and Serialization Expectations
16. Schema Drift and Evolution Policy
17. Error Handling and Quarantine
18. Security and Credential Handling
19. Source Impact Rate Limits and Throttling
20. Landing Target Expectations
21. Ingestion Metadata Expectations
22. Monitoring Evidence and Audit Expectations
23. Operational Dependencies
24. Ingestion Evidence Summary
25. Risks
26. Assumptions
27. Open Questions
28. Phase 08 Evidence Summary
29. Phase 08 Handoff Notes
30. Next Skill Recommendation

---

## Phase 08 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-08-support-plan.md
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
templates/phase/phase-08-support-plan-template.md
```

if available.

---

## Phase 08 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-08/phase-08-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                              |                 Required? |
| ----------- | ------------------------------------------ | ------------------------: |
| E-001       | Phase 07 handoff evidence                  |                       Yes |
| E-002       | Source-to-ingestion mapping evidence       |                       Yes |
| E-003       | Architecture constraint alignment evidence |                       Yes |
| E-004       | Ingestion pattern fit evidence             |                       Yes |
| E-005       | Batch/streaming/event alignment evidence   |                       Yes |
| E-006       | Frequency/trigger evidence                 |                       Yes |
| E-007       | Access/extraction evidence                 |        Yes for P1 sources |
| E-008       | Incremental/checkpoint evidence            | Yes unless not applicable |
| E-009       | Idempotency evidence                       |                       Yes |
| E-010       | Replay/backfill evidence                   |                       Yes |
| E-011       | Schema drift policy evidence               |                       Yes |
| E-012       | Error/quarantine/recovery evidence         |                       Yes |
| E-013       | Security/credential handling evidence      |                       Yes |
| E-014       | Source impact/rate limit evidence          |         Yes when relevant |
| E-015       | Landing metadata evidence                  |                       Yes |
| E-016       | Monitoring/audit evidence                  |                       Yes |

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
templates/phase/phase-08-evidence-pack-template.md
```

if available.

---

## Phase 08 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-08-artifact-revision.md
```

Record:

* what changed in the Ingestion Specification after evidence review;
* which P1 sources were approved, risky, blocked, or deferred;
* which ingestion patterns were changed;
* which checkpoint/idempotency/replay decisions were clarified;
* which schema drift/error/security decisions remained open;
* which landing metadata requirements were added for Phase 09;
* whether Phase 09 can safely use the ingestion specification for Bronze design.

---

## Phase 08 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-08-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 08 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 08 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-08-to-09-handoff.md
```

The handoff must tell Phase 09:

* ingestion scope;
* approved/deferred/blocked sources;
* source-to-ingestion mapping;
* source-to-product/requirement/KPI mapping;
* ingestion pattern per source;
* batch/streaming/event decision;
* frequency and trigger;
* bounded/unbounded data classification;
* access and extraction method;
* incremental/checkpoint strategy;
* idempotency strategy;
* replay/backfill strategy;
* late-arriving and ordering expectations;
* payload and serialization expectations;
* schema drift/evolution policy;
* error handling and quarantine expectations;
* security and credential handling;
* source impact/rate-limit/quota constraints;
* landing target expectations;
* ingestion metadata expectations;
* monitoring/audit expectations;
* operational dependencies;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 09 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 09 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Ingestion Design checklist or Phase 08 Done Gate fails.

### Blocking examples

* P1 source has no ingestion pattern.
* P1 source access is blocked or unknown.
* Batch/streaming/event choice conflicts with architecture.
* Frequency does not satisfy downstream freshness/SLA.
* Incremental/checkpoint strategy is unknown for incremental ingestion.
* Idempotency strategy is missing.
* Replay/backfill behavior is missing.
* Schema drift policy is missing.
* Error handling/recovery is missing.
* Sensitive data or credential handling is unresolved.
* Landing metadata expectation is missing.
* Monitoring/audit expectation is missing.
* Artifact contains pipeline implementation code or Bronze schema prematurely.
* Phase 08 evidence pack is missing and not waived.
* Phase 08 handoff is missing.
* Phase 09 would rely on hidden assumptions.

### Options

A. Fix the specification now
B. Mark Phase 08 as Draft with blockers
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
phase_08_ingestion_design:
  skill: des-ingestion-design
  artifact: _des-output/planning-artifacts/08-ingestion-specification.md
  support_plan: _des-output/phase-support-plans/phase-08-support-plan.md
  evidence_pack: _des-output/evidence/phase-08/phase-08-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-08-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-08-done-gate.md
  handoff: _des-output/phase-handoffs/phase-08-to-09-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  ingestion_sources:
    - source_id: SRC-001
      pattern: ...
      frequency: ...
      access_status: Tested | Approved | Pending | Missing | Blocked
      checkpoint_strategy: ...
      idempotency_strategy: ...
      replay_backfill_strategy: ...
      schema_drift_policy: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  blocked_sources:
    - ...
  deferred_sources:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-bronze-layer-design
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

* Ingestion Specification is created or updated;
* Phase 08 Support Plan is created or updated;
* Phase 08 Evidence Pack is created or updated;
* Ingestion Specification is revised from evidence or evidence is explicitly waived;
* Phase 08 Artifact Revision Report is created or updated;
* Phase 08 Done Gate result is recorded;
* Phase 08 to Phase 09 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 09 without user approval.
