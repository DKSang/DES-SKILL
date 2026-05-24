# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Semantic Model Specification, validate it through Phase 16 support work, update workflow status, and prepare a safe handoff to Phase 17.

This step completes Phase 16 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Semantic model design draft from Step 02
- Semantic evidence mapping from Step 02
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

1. Create or update the Semantic Model Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved semantic decisions as `Draft`, `Risk`, `Blocked`, `Deprecated`, `Open`, or `Unknown`.
4. Create or update the Phase 16 Support Plan.
5. Create or update the Phase 16 Evidence Pack.
6. Record which semantic scope, consumer, Gold mapping, glossary, entity, measure, dimension, hierarchy, relationship, aggregation, filter, time, ownership, naming, security, trust, freshness, lineage, testing, and contract/quality alignment decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Semantic Model Specification based on the evidence pack.
8. Create or update the Phase 16 Artifact Revision Report.
9. Run the configured Semantic Model Design checklist.
10. Run the Phase 16 Done Gate checklist.
11. Create or update the Phase 16 to Phase 17 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Semantic Model Specification should contain:

1. Semantic Model Summary
2. Semantic Scope
3. Semantic Non-Scope
4. Semantic Design Principles
5. Semantic Model Inventory
6. Consumer and Use Case Mapping
7. Gold to Semantic Mapping
8. Business Glossary Alignment
9. Semantic Entities
10. Measures and KPIs
11. Dimensions and Attributes
12. Hierarchies
13. Relationships and Join Behavior
14. Grain and Aggregation Behavior
15. Filters and Slicers
16. Time Intelligence Expectations
17. Calculation Ownership
18. Naming and Display Conventions
19. Security and Access Model
20. Certification and Trust Status
21. Freshness and Quality Display Expectations
22. Lineage and Metadata Expectations
23. Semantic Testing Expectations
24. Semantic Evidence Summary
25. Risks
26. Assumptions
27. Open Questions
28. Phase 16 Evidence Summary
29. Phase 16 Handoff Notes
30. Next Skill Recommendation

---

## Phase 16 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-16-support-plan.md
```

Use:

```text
templates/phase/phase-16-support-plan-template.md
```

if available.

---

## Phase 16 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-16/phase-16-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                         |                              Required? |
| ----------- | ------------------------------------- | -------------------------------------: |
| E-001       | Phase 15 handoff evidence             |                                    Yes |
| E-002       | Semantic scope evidence               |                                    Yes |
| E-003       | Consumer/use-case mapping evidence    |                                    Yes |
| E-004       | Gold-to-semantic mapping evidence     |                                    Yes |
| E-005       | Business glossary alignment evidence  |                                    Yes |
| E-006       | Semantic entity evidence              |                                    Yes |
| E-007       | Measure/KPI definition evidence       |                Yes where metrics exist |
| E-008       | Dimension/attribute evidence          |                                    Yes |
| E-009       | Hierarchy evidence                    |       Required where drill paths exist |
| E-010       | Relationship/join behavior evidence   | Required where multiple entities exist |
| E-011       | Grain/aggregation behavior evidence   |                Yes where metrics exist |
| E-012       | Filter/slicer evidence                |           Required for self-service/BI |
| E-013       | Time intelligence evidence            |    Required where time analysis exists |
| E-014       | Calculation ownership evidence        |               Yes where measures exist |
| E-015       | Naming/display convention evidence    |                                    Yes |
| E-016       | Security/access model evidence        |                                    Yes |
| E-017       | Certification/trust status evidence   |                                    Yes |
| E-018       | Freshness/quality display evidence    |       Required for P1 semantic outputs |
| E-019       | Lineage/metadata evidence             |                                    Yes |
| E-020       | Semantic testing expectation evidence |                                    Yes |
| E-021       | Contract/quality alignment evidence   |                                    Yes |

---

## Phase 16 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-16-artifact-revision.md
```

Record:

* what changed in the Semantic Model Specification after evidence review;
* which semantic models were Draft, Promoted, Certified, Risk, Blocked, or Deprecated;
* which measures were approved, certified, blocked, or draft;
* which relationships, aggregation rules, security rules, and trust statuses were clarified;
* which freshness/quality display expectations were added;
* whether Phase 17 can safely design serving layer outputs from the semantic model.

---

## Phase 16 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-16-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 16 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 16 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-16-to-17-handoff.md
```

The handoff must tell Phase 17:

* semantic scope and non-scope;
* approved/risky/blocked/deferred semantic models;
* consumer and use-case mapping;
* Gold-to-semantic mapping;
* certified/promoted/draft measures;
* semantic entities;
* dimensions and attributes;
* hierarchies;
* relationships and join behavior;
* grain and aggregation behavior;
* filters and slicers;
* time intelligence expectations;
* calculation ownership;
* naming/display conventions;
* security and access constraints;
* certification and trust status;
* freshness and quality display expectations;
* lineage and metadata expectations;
* semantic testing expectations;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 17 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 17 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Semantic Model Design checklist or Phase 16 Done Gate fails.

### Blocking examples

* P1 semantic model has no consumer/use case.
* Gold dataset mapping is missing.
* Measure definition conflicts with Phase 03 or Phase 11.
* Measure aggregation behavior is missing.
* Relationship/join behavior is unclear.
* Semantic model exposes fields that violate security constraints.
* Certified status is assigned without owner/quality/lineage/contract/freshness support.
* Freshness or quality display expectation is missing.
* Phase 16 evidence pack is missing and not waived.
* Phase 16 handoff is missing.
* Artifact includes DAX/SQL/LookML/Power BI/Cube/dbt implementation code prematurely.
* Phase 17 would rely on hidden semantic assumptions.

### Options

A. Fix the semantic model specification now
B. Mark Phase 16 as Draft with blockers
C. Return to Step 02 semantic decisions
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
phase_16_semantic_model_design:
  skill: des-semantic-model-design
  artifact: _des-output/planning-artifacts/16-semantic-model-specification.md
  support_plan: _des-output/phase-support-plans/phase-16-support-plan.md
  evidence_pack: _des-output/evidence/phase-16/phase-16-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-16-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-16-done-gate.md
  handoff: _des-output/phase-handoffs/phase-16-to-17-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  semantic_models:
    - model: ...
      consumer: ...
      trust_status: Draft | Promoted | Certified | Risk | Blocked | Deprecated
      status: Draft | Approved | Risk | Blocked | Deferred
  measures:
    - measure: ...
      definition_source: ...
      status: Draft | Approved | Certified | Deprecated | Blocked
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-serving-layer-design
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

* Semantic Model Specification is created or updated;
* Phase 16 Support Plan is created or updated;
* Phase 16 Evidence Pack is created or updated;
* Semantic Model Specification is revised from evidence or evidence is explicitly waived;
* Phase 16 Artifact Revision Report is created or updated;
* Phase 16 Done Gate result is recorded;
* Phase 16 to Phase 17 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 17 without user approval.
