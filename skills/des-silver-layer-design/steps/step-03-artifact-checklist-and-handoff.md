# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Silver Layer Specification, validate it through Phase 10 support work, update workflow status, and prepare a safe handoff to Phase 11.

This step completes Phase 10 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Silver design draft from Step 02
- Silver evidence mapping from Step 02
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

1. Create or update the Silver Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Silver decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 10 Support Plan.
5. Create or update the Phase 10 Evidence Pack.
6. Record which domain alignment, grain, identity, key, conformance, normalization, DQ, source-of-truth, privacy, lineage, metadata inheritance, and refresh decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Silver Layer Specification based on the evidence pack.
8. Create or update the Phase 10 Artifact Revision Report.
9. Run the configured Silver Layer Design checklist.
10. Run the Phase 10 Done Gate checklist.
11. Create or update the Phase 10 to Phase 11 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should describe trusted conformed data, not final reporting outputs.
- Do not design detailed Gold tables, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or write pipeline implementation code.
- Do not hide unresolved identity or source-of-truth decisions.
- If domain alignment is unclear, route back to domain modeling.
- If Bronze lineage is insufficient, route back to Bronze design.
- This artifact should enable Phase 11 Gold design.
- Phase 11 needs trusted Silver datasets, grain, quality state, conformed dimensions/events, and lineage constraints.

---

## Artifact Sections

The Silver Layer Specification should contain:

1. Silver Layer Summary
2. Silver Scope
3. Silver Non-Scope
4. Silver Design Principles
5. Bronze to Silver Mapping
6. Silver Dataset Inventory
7. Domain Entity and Event Alignment
8. Conceptual to Logical Mapping
9. Grain and Identity Rules
10. Key Strategy
11. Deduplication and Survivorship Rules
12. Conformance and Standardization Rules
13. Data Type Normalization
14. Timezone and Temporal Normalization
15. Unit and Currency Normalization
16. Code Status and Category Mapping
17. Null and Missing Value Handling
18. Schema Evolution Handling
19. Source of Truth and Cross Source Reconciliation
20. Silver Boundary Data Quality Rules
21. Rejected and Quarantined Record Handling
22. Privacy and Security Handling
23. Lineage and Traceability
24. Metadata Inheritance from Bronze
25. Refresh and Incremental Behavior
26. Silver Evidence Summary
27. Risks
28. Assumptions
29. Open Questions
30. Phase 10 Evidence Summary
31. Phase 10 Handoff Notes
32. Next Skill Recommendation

---

## Phase 10 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-10-support-plan.md
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
templates/phase/phase-10-support-plan-template.md
```

if available.

---

## Phase 10 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-10/phase-10-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                            |                                   Required? |
| ----------- | ---------------------------------------- | ------------------------------------------: |
| E-001       | Phase 09 handoff evidence                |                                         Yes |
| E-002       | Bronze-to-Silver mapping evidence        |                                         Yes |
| E-003       | Domain alignment evidence                |                                         Yes |
| E-004       | Conceptual-to-logical mapping evidence   |                                         Yes |
| E-005       | Grain/identity evidence                  |                                         Yes |
| E-006       | Key strategy evidence                    |                                         Yes |
| E-007       | Dedup/survivorship evidence              |    Required when duplicates/conflicts exist |
| E-008       | Conformance/standardization evidence     |                                         Yes |
| E-009       | Data type normalization evidence         |                                         Yes |
| E-010       | Timezone/temporal normalization evidence |             Required when time fields exist |
| E-011       | Unit/currency normalization evidence     |          Required when units/currency exist |
| E-012       | Code/status/category mapping evidence    | Required when codes/status/categories exist |
| E-013       | Null/missing handling evidence           |                                         Yes |
| E-014       | Schema evolution handling evidence       |                                         Yes |
| E-015       | Source-of-truth/reconciliation evidence  |      Required when multiple sources overlap |
| E-016       | Silver boundary quality evidence         |                                         Yes |
| E-017       | Rejected/quarantine handling evidence    |                                         Yes |
| E-018       | Privacy/security handling evidence       |                                         Yes |
| E-019       | Lineage/traceability evidence            |                                         Yes |
| E-020       | Metadata inheritance evidence            |                                         Yes |
| E-021       | Refresh/incremental behavior evidence    |                                         Yes |

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
templates/phase/phase-10-evidence-pack-template.md
```

if available.

---

## Phase 10 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-10-artifact-revision.md
```

Record:

* what changed in the Silver Layer Specification after evidence review;
* which Silver datasets were approved, risky, blocked, or deferred;
* which domain/grain/identity decisions were changed;
* which conformance and DQ rules were clarified;
* which source-of-truth or survivorship decisions remained open;
* which metadata inheritance and lineage decisions were added;
* whether Phase 11 can safely use the Silver specification for Gold design.

---

## Phase 10 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-10-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 10 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 10 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-10-to-11-handoff.md
```

The handoff must tell Phase 11:

* Silver scope and non-scope;
* approved/deferred/blocked Silver datasets;
* Bronze-to-Silver mapping;
* Silver dataset inventory;
* domain entity/event alignment;
* conceptual-to-logical mapping;
* grain and identity rules;
* key strategy;
* deduplication and survivorship rules;
* conformance and standardization rules;
* data type normalization;
* timezone and temporal normalization;
* unit and currency normalization;
* code/status/category mapping;
* null and missing value handling;
* schema evolution handling;
* source-of-truth and cross-source reconciliation;
* Silver boundary data quality rules;
* rejected/quarantined record handling;
* privacy and security handling;
* lineage and traceability;
* metadata inheritance from Bronze;
* refresh and incremental behavior;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 11 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 11 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Silver Layer Design checklist or Phase 10 Done Gate fails.

### Blocking examples

* P1 Silver dataset has no domain alignment.
* Grain or identity rule is missing.
* Key strategy is missing.
* Source-of-truth conflict is unresolved.
* Deduplication/survivorship rule is missing where duplicates exist.
* Required conformance mapping is missing.
* Timezone/unit/status/category mapping is unclear.
* Null/missing value handling is unclear.
* Schema evolution policy is missing.
* Silver quality rules are missing.
* Rejected record handling is missing.
* Sensitive data handling is unresolved.
* Lineage back to Bronze is incomplete.
* Metadata inheritance is insufficient for traceability.
* Artifact includes Gold mart logic, semantic model, dashboard, API, orchestration implementation, CI/CD files, or transformation code prematurely.
* Phase 10 evidence pack is missing and not waived.
* Phase 10 handoff is missing.
* Phase 11 would rely on hidden Silver assumptions.

### Options

A. Fix the Silver specification now
B. Mark Phase 10 as Draft with blockers
C. Return to Step 02 Silver decisions
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
phase_10_silver_layer_design:
  skill: des-silver-layer-design
  artifact: _des-output/planning-artifacts/10-silver-layer-specification.md
  support_plan: _des-output/phase-support-plans/phase-10-support-plan.md
  evidence_pack: _des-output/evidence/phase-10/phase-10-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-10-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-10-done-gate.md
  handoff: _des-output/phase-handoffs/phase-10-to-11-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  silver_datasets:
    - dataset: ...
      domain_concept: ...
      input_bronze_datasets:
        - ...
      grain: ...
      identity_rule: ...
      key_strategy: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  metadata_inheritance:
    preserve_from_bronze:
      - des_source_system
      - des_source_object
      - des_ingestion_run_id
      - des_ingestion_timestamp
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-gold-layer-design
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

* Silver Layer Specification is created or updated;
* Phase 10 Support Plan is created or updated;
* Phase 10 Evidence Pack is created or updated;
* Silver Layer Specification is revised from evidence or evidence is explicitly waived;
* Phase 10 Artifact Revision Report is created or updated;
* Phase 10 Done Gate result is recorded;
* Phase 10 to Phase 11 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 11 without user approval.
