# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Lineage and Metadata Specification, validate it through Phase 18 support work, update workflow status, and prepare a safe handoff to Phase 19.

This step completes Phase 18 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Lineage/metadata design draft from Step 02
- Lineage/metadata evidence mapping from Step 02
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

1. Create or update the Lineage and Metadata Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved lineage/metadata decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 18 Support Plan.
5. Create or update the Phase 18 Evidence Pack.
6. Record which metadata scope, category, asset inventory, catalog, field, metric, contract, lineage, quality/trust, ownership, usage, version, audit, capture, and maintenance decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Lineage and Metadata Specification based on the evidence pack.
8. Create or update the Phase 18 Artifact Revision Report.
9. Run the configured Lineage and Metadata checklist.
10. Run the Phase 18 Done Gate checklist.
11. Create or update the Phase 18 to Phase 19 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Lineage and Metadata Specification should contain:

1. Lineage and Metadata Summary
2. Metadata Scope
3. Metadata Non-Scope
4. Metadata Design Principles
5. Metadata Categories
6. Metadata Inventory
7. Business Metadata
8. Technical Metadata
9. Operational Metadata
10. Reference Metadata
11. Dataset Catalog Requirements
12. Field and Schema Metadata
13. Metric and KPI Metadata
14. Contract Metadata
15. Transformation Lineage
16. Dataset Lineage
17. Column Level Lineage Expectations
18. Semantic and Serving Lineage
19. Quality and Trust Metadata
20. Ownership and Stewardship Metadata
21. Usage and Consumer Metadata
22. Change and Version Metadata
23. Audit and Compliance Metadata
24. Metadata Capture Responsibilities
25. Metadata Freshness and Maintenance Policy
26. Lineage and Metadata Evidence Summary
27. Risks
28. Assumptions
29. Open Questions
30. Phase 18 Evidence Summary
31. Phase 18 Handoff Notes
32. Next Skill Recommendation

---

## Phase 18 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-18-support-plan.md
```

Use:

```text
templates/phase/phase-18-support-plan-template.md
```

if available.

---

## Phase 18 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-18/phase-18-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                             |                       Required? |
| ----------- | ----------------------------------------- | ------------------------------: |
| E-001       | Phase 17 handoff evidence                 |                             Yes |
| E-002       | Metadata scope evidence                   |                             Yes |
| E-003       | Metadata category coverage evidence       |                             Yes |
| E-004       | Metadata asset inventory evidence         |                             Yes |
| E-005       | Business metadata evidence                |                             Yes |
| E-006       | Technical metadata evidence               |                             Yes |
| E-007       | Operational metadata evidence             |                             Yes |
| E-008       | Reference metadata evidence               |                   Yes or waived |
| E-009       | Dataset catalog requirement evidence      |                             Yes |
| E-010       | Field/schema metadata evidence            |                             Yes |
| E-011       | Metric/KPI metadata evidence              |    Required where metrics exist |
| E-012       | Contract metadata evidence                |  Required where contracts exist |
| E-013       | Transformation lineage evidence           |                             Yes |
| E-014       | Dataset lineage evidence                  |                             Yes |
| E-015       | Column-level lineage expectation evidence |           Required where scoped |
| E-016       | Semantic/serving lineage evidence         |                             Yes |
| E-017       | Quality/trust metadata evidence           |                             Yes |
| E-018       | Ownership/stewardship metadata evidence   |                             Yes |
| E-019       | Usage/consumer metadata evidence          | Required for P1 serving outputs |
| E-020       | Change/version metadata evidence          |                             Yes |
| E-021       | Audit/compliance metadata evidence        |         Required where relevant |
| E-022       | Metadata capture responsibility evidence  |                             Yes |
| E-023       | Metadata freshness/maintenance evidence   |                             Yes |

---

## Phase 18 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-18-artifact-revision.md
```

Record:

* what changed in the Lineage and Metadata Specification after evidence review;
* which metadata assets were approved, risky, blocked, or deferred;
* which lineage depth and column-level lineage expectations were clarified;
* which business/technical/operational/reference metadata categories were added or waived;
* which metadata ownership and maintenance gaps remain;
* which governance/security needs must be carried into Phase 19.

---

## Phase 18 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-18-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 18 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 18 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-18-to-19-handoff.md
```

The handoff must tell Phase 19:

* metadata scope and non-scope;
* approved/risky/blocked/deferred metadata assets;
* metadata category coverage;
* dataset catalog requirements;
* field/schema metadata requirements;
* metric/KPI metadata requirements;
* contract metadata requirements;
* lineage depth and column-level lineage expectations;
* semantic and serving lineage requirements;
* quality/trust metadata requirements;
* ownership/stewardship metadata;
* usage/consumer metadata requirements;
* change/version metadata requirements;
* audit/compliance metadata requirements;
* metadata capture and maintenance responsibilities;
* sensitivity/access metadata needs;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 19 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 19 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Lineage and Metadata checklist or Phase 18 Done Gate fails.

### Blocking examples

* P1 serving outputs cannot trace to Gold.
* Business definitions have no owner.
* Operational run evidence is missing.
* Metadata categories are not covered or waived.
* Column lineage is claimed but no scope or capture method exists.
* Quality/trust metadata is missing for trusted outputs.
* Contract metadata is missing for governed/system-facing outputs.
* Ownership/stewardship metadata is missing.
* Metadata maintenance owner is missing.
* Phase 18 evidence pack is missing and not waived.
* Phase 18 handoff is missing.
* Artifact implements catalog/lineage tooling code prematurely.
* Phase 19 would rely on hidden metadata/security assumptions.

### Options

A. Fix the lineage/metadata specification now
B. Mark Phase 18 as Draft with blockers
C. Return to Step 02 metadata decisions
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
phase_18_lineage_metadata_design:
  skill: des-lineage-metadata-design
  artifact: _des-output/planning-artifacts/18-lineage-metadata-specification.md
  support_plan: _des-output/phase-support-plans/phase-18-support-plan.md
  evidence_pack: _des-output/evidence/phase-18/phase-18-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-18-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-18-done-gate.md
  handoff: _des-output/phase-handoffs/phase-18-to-19-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  metadata_assets:
    - asset: ...
      type: source | dataset | field | metric | contract | transformation | quality_rule | workflow | semantic_object | serving_output | reference_object
      metadata_status: Draft | Approved | Risk | Blocked | Deferred
      lineage_scope: dataset | table | column-critical | full-column | run-level | contract-level
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-governance-security-design
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

* Lineage and Metadata Specification is created or updated;
* Phase 18 Support Plan is created or updated;
* Phase 18 Evidence Pack is created or updated;
* Lineage and Metadata Specification is revised from evidence or evidence is explicitly waived;
* Phase 18 Artifact Revision Report is created or updated;
* Phase 18 Done Gate result is recorded;
* Phase 18 to Phase 19 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 19 without user approval.
