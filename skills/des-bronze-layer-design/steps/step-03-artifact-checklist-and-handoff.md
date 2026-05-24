# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Bronze Layer Specification, validate it through Phase 09 support work, update workflow status, and prepare a safe handoff to Phase 10.

This step completes Phase 09 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Bronze design draft from Step 02
- Bronze evidence mapping from Step 02
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

1. Create or update the Bronze Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Bronze decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 09 Support Plan.
5. Create or update the Phase 09 Evidence Pack.
6. Record which Bronze dataset boundary, raw preservation, storage, partitioning, metadata, schema drift, replay, quarantine, retention, access, and traceability decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Bronze Layer Specification based on the evidence pack.
8. Create or update the Phase 09 Artifact Revision Report.
9. Run the configured Bronze Layer Design checklist.
10. Run the Phase 09 Done Gate checklist.
11. Create or update the Phase 09 to Phase 10 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should preserve source truth and ingestion evidence.
- Do not include detailed Silver/Gold cleaning logic.
- Do not design detailed Silver/Gold tables, physical transformations, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or pipeline code.
- Do not pretend raw sensitive data is safe because it is “only Bronze.”
- If retention is unknown, mark as Risk or Draft.
- If raw preservation conflicts with privacy/compliance, mark as Blocked or route to governance/security review.
- This artifact should enable Phase 10 Silver design.
- Phase 10 needs Bronze dataset inventory, metadata, schema drift, quarantine, raw preservation, and quality boundary.

---

## Artifact Sections

The Bronze Layer Specification should contain:

1. Bronze Layer Summary
2. Bronze Scope
3. Bronze Non-Scope
4. Bronze Design Principles
5. Source to Bronze Mapping
6. Ingestion to Bronze Mapping
7. Bronze Dataset Inventory
8. Raw Preservation Strategy
9. Storage Format Decision
10. File and Table Organization
11. Partitioning Strategy
12. Mandatory Metadata Columns
13. Ingestion Audit Metadata
14. Source Traceability Metadata
15. Schema Drift and Evolution Handling
16. Replay and Backfill Support
17. Idempotency and Deduplication Boundary
18. Quarantine and Rejected Data Handling
19. Retention and Lifecycle Policy
20. Access Control and Sensitivity Classification
21. Bronze Boundary Data Quality Expectations
22. Lineage and Traceability Expectations
23. Operational Evidence Requirements
24. Bronze Evidence Summary
25. Risks
26. Assumptions
27. Open Questions
28. Phase 09 Evidence Summary
29. Phase 09 Handoff Notes
30. Next Skill Recommendation

---

## Phase 09 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-09-support-plan.md
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
templates/phase/phase-09-support-plan-template.md
```

if available.

---

## Phase 09 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-09/phase-09-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                          |                  Required? |
| ----------- | -------------------------------------- | -------------------------: |
| E-001       | Phase 08 handoff evidence              |                        Yes |
| E-002       | Source-to-Bronze mapping evidence      |                        Yes |
| E-003       | Ingestion-to-Bronze alignment evidence |                        Yes |
| E-004       | Bronze dataset boundary evidence       |                        Yes |
| E-005       | Raw preservation evidence              |                        Yes |
| E-006       | Storage format evidence                |                        Yes |
| E-007       | File/table organization evidence       |                        Yes |
| E-008       | Partitioning strategy evidence         | Yes, unless not applicable |
| E-009       | Mandatory metadata evidence            |                        Yes |
| E-010       | Ingestion audit metadata evidence      |                        Yes |
| E-011       | Schema drift handling evidence         |                        Yes |
| E-012       | Replay/backfill support evidence       |                        Yes |
| E-013       | Idempotency/dedup boundary evidence    |                        Yes |
| E-014       | Quarantine/rejected data evidence      |                        Yes |
| E-015       | Retention/lifecycle evidence           |                        Yes |
| E-016       | Access/sensitivity evidence            |                        Yes |
| E-017       | Bronze boundary quality evidence       |                        Yes |
| E-018       | Lineage/traceability evidence          |                        Yes |

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
templates/phase/phase-09-evidence-pack-template.md
```

if available.

---

## Phase 09 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-09-artifact-revision.md
```

Record:

* what changed in the Bronze Layer Specification after evidence review;
* which Bronze datasets were approved, risky, blocked, or deferred;
* which raw preservation decisions were changed;
* which metadata requirements were added or revised;
* which schema drift/quarantine/replay decisions were clarified;
* which access/retention decisions remained open;
* whether Phase 10 can safely use the Bronze specification for Silver design.

---

## Phase 09 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-09-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 09 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 09 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-09-to-10-handoff.md
```

The handoff must tell Phase 10:

* Bronze scope and non-scope;
* approved/deferred/blocked Bronze datasets;
* source-to-Bronze mapping;
* ingestion-to-Bronze mapping;
* raw preservation strategy;
* storage format decision;
* file/table organization;
* partitioning strategy;
* mandatory metadata columns;
* ingestion audit metadata;
* source traceability metadata;
* schema drift/evolution handling;
* replay/backfill support;
* idempotency/deduplication boundary;
* quarantine/rejected data handling;
* retention/lifecycle policy;
* access/sensitivity classification;
* Bronze boundary quality expectations;
* lineage/traceability expectations;
* operational evidence requirements;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 10 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 10 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Bronze Layer Design checklist or Phase 09 Done Gate fails.

### Blocking examples

* P1 ingestion source has no Bronze dataset.
* Bronze dataset boundary is unclear.
* Raw preservation strategy is missing.
* Storage format is missing.
* File/table organization is missing.
* Partitioning strategy is missing or risky without approval.
* Mandatory metadata is missing.
* Ingestion audit metadata is missing.
* Source traceability metadata is missing.
* Schema drift policy is missing.
* Replay/backfill support is missing.
* Retention policy is missing.
* Sensitive raw access policy is unresolved.
* Quarantine policy is missing.
* Lineage/traceability expectation is missing.
* Artifact includes Silver/Gold transformation logic, physical database schemas, semantic model, dashboard, API, orchestration implementation, CI/CD files, or pipeline code prematurely.
* Phase 09 evidence pack is missing and not waived.
* Phase 09 handoff is missing.
* Phase 10 would rely on hidden Bronze assumptions.

### Options

A. Fix the Bronze specification now
B. Mark Phase 09 as Draft with blockers
C. Return to Step 02 Bronze decisions
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
phase_09_bronze_layer_design:
  skill: des-bronze-layer-design
  artifact: _des-output/planning-artifacts/09-bronze-layer-specification.md
  support_plan: _des-output/phase-support-plans/phase-09-support-plan.md
  evidence_pack: _des-output/evidence/phase-09/phase-09-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-09-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-09-done-gate.md
  handoff: _des-output/phase-handoffs/phase-09-to-10-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  bronze_datasets:
    - dataset: ...
      source_id: ...
      source_object: ...
      ingestion_pattern: ...
      raw_preservation_strategy: ...
      storage_format: ...
      partition_strategy: ...
      retention_policy: ...
      access_classification: ...
      status: Draft | Approved | Risk | Blocked | Deferred
  metadata_policy:
    mandatory_metadata:
      - des_source_system
      - des_source_object
      - des_ingestion_run_id
      - des_ingestion_timestamp
      - des_payload_hash
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-silver-layer-design
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

* Bronze Layer Specification is created or updated;
* Phase 09 Support Plan is created or updated;
* Phase 09 Evidence Pack is created or updated;
* Bronze Layer Specification is revised from evidence or evidence is explicitly waived;
* Phase 09 Artifact Revision Report is created or updated;
* Phase 09 Done Gate result is recorded;
* Phase 09 to Phase 10 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 10 without user approval.
