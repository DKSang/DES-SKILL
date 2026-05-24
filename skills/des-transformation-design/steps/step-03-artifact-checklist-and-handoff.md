# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Transformation Specification, validate it through Phase 13 support work, update workflow status, and prepare a safe handoff to Phase 14.

This step completes Phase 13 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Transformation design draft from Step 02
- Transformation evidence mapping from Step 02
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

1. Create or update the Transformation Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved transformation decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 13 Support Plan.
5. Create or update the Phase 13 Evidence Pack.
6. Record which transformation scope, mapping, dependency, grain, rule, join, dedup, SCD, metric, incremental, replay, correction, error, validation, contract, lineage, performance, security, and boundary decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Transformation Specification based on the evidence pack.
8. Create or update the Phase 13 Artifact Revision Report.
9. Run the configured Transformation Design checklist.
10. Run the Phase 13 Done Gate checklist.
11. Create or update the Phase 13 to Phase 14 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Transformation Specification should contain:

1. Transformation Summary
2. Transformation Scope
3. Transformation Non-Scope
4. Transformation Design Principles
5. Transformation Inventory
6. Layer to Layer Transformation Mapping
7. Dependency Graph
8. Input and Output Dataset Mapping
9. Transformation Grain
10. Business Rules
11. Cleaning and Conformance Rules
12. Join and Relationship Rules
13. Deduplication and Survivorship Rules
14. SCD and History Handling
15. Aggregation and Metric Calculation Rules
16. Incremental Processing Strategy
17. Backfill and Replay Strategy
18. Late Arriving and Corrected Data Handling
19. Error Handling and Quarantine Behavior
20. Validation and Test Expectations
21. Contract Alignment
22. Lineage and Metadata Expectations
23. Performance and Cost Considerations
24. Security and Privacy Handling
25. Implementation Boundary
26. Transformation Evidence Summary
27. Risks
28. Assumptions
29. Open Questions
30. Phase 13 Evidence Summary
31. Phase 13 Handoff Notes
32. Next Skill Recommendation

---

## Phase 13 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-13-support-plan.md
```

Use:

```text
templates/phase/phase-13-support-plan-template.md
```

if available.

---

## Phase 13 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-13/phase-13-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                               |                                 Required? |
| ----------- | ------------------------------------------- | ----------------------------------------: |
| E-001       | Phase 12 handoff evidence                   |                                       Yes |
| E-002       | Contract-to-transformation mapping evidence |                                       Yes |
| E-003       | Layer-to-layer mapping evidence             |                                       Yes |
| E-004       | Transformation inventory evidence           |                                       Yes |
| E-005       | Dependency graph evidence                   |                                       Yes |
| E-006       | Input/output mapping evidence               |                                       Yes |
| E-007       | Transformation grain evidence               |                                       Yes |
| E-008       | Business rule evidence                      |                                       Yes |
| E-009       | Cleaning/conformance rule evidence          |                                       Yes |
| E-010       | Join/relationship rule evidence             |                Required where joins exist |
| E-011       | Dedup/survivorship rule evidence            | Required where duplicates/conflicts exist |
| E-012       | SCD/history behavior evidence               |            Required where history matters |
| E-013       | Aggregation/metric rule evidence            |   Required where metrics/aggregates exist |
| E-014       | Incremental processing evidence             |                                       Yes |
| E-015       | Backfill/replay evidence                    |                                       Yes |
| E-016       | Late/corrected data evidence                |                   Required where relevant |
| E-017       | Error/quarantine evidence                   |                                       Yes |
| E-018       | Validation/test expectation evidence        |                                       Yes |
| E-019       | Contract alignment evidence                 |                                       Yes |
| E-020       | Lineage/metadata evidence                   |                                       Yes |
| E-021       | Performance/cost evidence                   |                                       Yes |
| E-022       | Security/privacy evidence                   |                                       Yes |
| E-023       | Implementation boundary evidence            |                                       Yes |

---

## Phase 13 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-13-artifact-revision.md
```

Record:

* what changed in the Transformation Specification after evidence review;
* which transformations were approved, risky, blocked, or deferred;
* which mappings, grains, joins, rules, metric logic, incremental strategies, and contract alignments were clarified;
* which validation/test candidates were added for Phase 14/21;
* whether Phase 14 can safely use the transformation specification for DQ rule design.

---

## Phase 13 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-13-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 13 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 13 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-13-to-14-handoff.md
```

The handoff must tell Phase 14:

* transformation scope and non-scope;
* approved/risky/blocked/deferred transformations;
* layer-to-layer mapping;
* dependency graph;
* input/output mapping;
* transformation grain;
* business rules;
* cleaning and conformance rules;
* join and relationship rules;
* deduplication and survivorship rules;
* SCD/history behavior;
* aggregation and metric calculation rules;
* incremental processing strategy;
* backfill/replay strategy;
* late/corrected data handling;
* error/quarantine behavior;
* validation and test expectations;
* contract alignment;
* lineage and metadata expectations;
* performance and cost considerations;
* security and privacy handling;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 14 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 14 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Transformation Design checklist or Phase 13 Done Gate fails.

### Blocking examples

* P1 contracted output has no transformation path.
* Transformation has no input/output mapping.
* Output grain is missing.
* Business rule is ambiguous.
* Join rule is unclear.
* Metric logic conflicts with Phase 03 or Phase 11.
* Deduplication/survivorship rule is missing where needed.
* Incremental strategy is missing.
* Backfill/replay behavior is missing.
* Error/quarantine behavior is missing.
* Validation expectation is missing.
* Contract alignment is missing.
* Phase 13 evidence pack is missing and not waived.
* Phase 13 handoff is missing.
* Artifact contains implementation code prematurely or orchestration pipeline code (e.g. transformation SQL/Python/dbt/notebook code).
* Phase 14 would rely on hidden transformation assumptions.

### Options

A. Fix the transformation specification now
B. Mark Phase 13 as Draft with blockers
C. Return to Step 02 transformation decisions
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
phase_13_transformation_design:
  skill: des-transformation-design
  artifact: _des-output/planning-artifacts/13-transformation-specification.md
  support_plan: _des-output/phase-support-plans/phase-13-support-plan.md
  evidence_pack: _des-output/evidence/phase-13/phase-13-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-13-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-13-done-gate.md
  handoff: _des-output/phase-handoffs/phase-13-to-14-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  transformations:
    - transformation_id: ...
      input: ...
      output: ...
      grain: ...
      type: ...
      contract_alignment: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-data-quality
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

* Transformation Specification is created or updated;
* Phase 13 Support Plan is created or updated;
* Phase 13 Evidence Pack is created or updated;
* Transformation Specification is revised from evidence or evidence is explicitly waived;
* Phase 13 Artifact Revision Report is created or updated;
* Phase 13 Done Gate result is recorded;
* Phase 13 to Phase 14 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 14 without user approval.
