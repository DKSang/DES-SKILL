# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Gold Layer Specification, validate it through Phase 11 support work, update workflow status, and prepare a safe handoff to Phase 12.

This step completes Phase 11 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Gold design draft from Step 02
- Gold evidence mapping from Step 02
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

1. Create or update the Gold Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Gold decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 11 Support Plan.
5. Create or update the Phase 11 Evidence Pack.
6. Record which business question mapping, KPI alignment, product output mapping, Silver mapping, grain, aggregation, serving, model pattern, freshness, quality, security, contract, lineage, and performance decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Gold Layer Specification based on the evidence pack.
8. Create or update the Phase 11 Artifact Revision Report.
9. Run the configured Gold Layer Design checklist.
10. Run the Phase 11 Done Gate checklist.
11. Create or update the Phase 11 to Phase 12 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should describe serving-ready data design, not transformation code.
- Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.
- Do not hide metric definition conflicts.
- Do not create one vague Gold table for every possible use case.
- Do not skip consumer and business question mapping.
- If Gold depends on unresolved Silver identity/source-of-truth risk, mark it as Risk.
- If Gold will feed dashboards, APIs, ML, or external consumers, contract expectations should be explicit.
- This artifact should enable Phase 12 data contracts and Phase 13 transformation design.

---

## Artifact Sections

The Gold Layer Specification should contain:

1. Gold Layer Summary
2. Gold Scope
3. Gold Non-Scope
4. Gold Design Principles
5. Business Question to Gold Mapping
6. Requirement and KPI to Gold Mapping
7. Data Product Output to Gold Mapping
8. Silver to Gold Mapping
9. Gold Dataset Inventory
10. Gold Output Type
11. Consumer and Serving Alignment
12. Grain and Aggregation Rules
13. Metric and KPI Definitions Used
14. Dimension Fact Aggregate and Output Model Decisions
15. Filtering and Slicing Expectations
16. History and Slowly Changing Behavior
17. Freshness and SLA Expectations
18. Gold Boundary Data Quality Rules
19. Access Control and Security Handling
20. Contract Expectations
21. Lineage and Traceability
22. Performance and Cost Considerations
23. Gold Evidence Summary
24. Risks
25. Assumptions
26. Open Questions
27. Phase 11 Evidence Summary
28. Phase 11 Handoff Notes
29. Next Skill Recommendation

---

## Phase 11 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-11-support-plan.md
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
templates/phase/phase-11-support-plan-template.md
```

if available.

---

## Phase 11 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-11/phase-11-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                                |                                   Required? |
| ----------- | -------------------------------------------- | ------------------------------------------: |
| E-001       | Phase 10 handoff evidence                    |                                         Yes |
| E-002       | Business question to Gold mapping evidence   |                                         Yes |
| E-003       | KPI/requirement to Gold mapping evidence     |                Yes where metrics/KPIs exist |
| E-004       | Data product output to Gold mapping evidence |                          Yes for P1 outputs |
| E-005       | Silver-to-Gold mapping evidence              |                                         Yes |
| E-006       | Gold dataset boundary evidence               |                                         Yes |
| E-007       | Consumer/serving alignment evidence          |                                         Yes |
| E-008       | Grain/aggregation evidence                   |                                         Yes |
| E-009       | Metric definition alignment evidence         |                     Yes where metrics exist |
| E-010       | Modeling pattern evidence                    |                                         Yes |
| E-011       | Filtering/slicing evidence                   |         Required for BI/reporting/analytics |
| E-012       | History/SCD behavior evidence                | Required when history/current/as-of matters |
| E-013       | Freshness/SLA evidence                       |                                  Yes for P1 |
| E-014       | Gold boundary quality evidence               |                                         Yes |
| E-015       | Access/security evidence                     |                                         Yes |
| E-016       | Contract expectation evidence                |                                         Yes |
| E-017       | Lineage/traceability evidence                |                                         Yes |
| E-018       | Performance/cost evidence                    |                                         Yes |

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
templates/phase/phase-11-evidence-pack-template.md
```

if available.

---

## Phase 11 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-11-artifact-revision.md
```

Record:

* what changed in the Gold Layer Specification after evidence review;
* which Gold datasets were approved, risky, blocked, or deferred;
* which business question/product output mappings were changed;
* which metric/grain/aggregation decisions were clarified;
* which consumer/serving decisions remained open;
* which contract expectations were added;
* whether Phase 12 can safely use the Gold specification for data contracts.

---

## Phase 11 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-11-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 11 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 11 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-11-to-12-handoff.md
```

The handoff must tell Phase 12:

* Gold scope and non-scope;
* approved/deferred/blocked Gold datasets;
* business question to Gold mapping;
* KPI/requirement to Gold mapping;
* data product output to Gold mapping;
* Silver to Gold mapping;
* Gold dataset inventory;
* Gold output type;
* consumer and serving alignment;
* grain and aggregation rules;
* metric and KPI definitions used;
* dimension/fact/aggregate/output model decisions;
* filtering and slicing expectations;
* history/SCD behavior;
* freshness/SLA expectations;
* Gold boundary data quality rules;
* access control and security handling;
* contract expectations;
* lineage and traceability;
* performance and cost considerations;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 12 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 12 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Gold Layer Design checklist or Phase 11 Done Gate fails.

### Blocking examples

* P1 business question has no Gold output.
* P1 product output has no Gold dataset.
* Gold output has no consumer or serving path.
* Gold grain is missing.
* KPI definition conflicts with Phase 03.
* Aggregation rule is unclear.
* Model type is unclear.
* Required slices/filters are missing.
* Freshness/SLA is missing for P1 output.
* Gold quality rules are missing.
* Access/security handling is unresolved.
* Contract expectation is missing for downstream system-facing output.
* Lineage back to Silver/Bronze/source is incomplete.
* Artifact includes transformation code, semantic model internals, dashboard/API implementation, full contract, orchestration implementation, CI/CD files, or code prematurely.
* Phase 11 evidence pack is missing and not waived.
* Phase 11 handoff is missing.
* Phase 12 would rely on hidden Gold assumptions.

### Options

A. Fix the Gold specification now
B. Mark Phase 11 as Draft with blockers
C. Return to Step 02 Gold decisions
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
phase_11_gold_layer_design:
  skill: des-gold-layer-design
  artifact: _des-output/planning-artifacts/11-gold-layer-specification.md
  support_plan: _des-output/phase-support-plans/phase-11-support-plan.md
  evidence_pack: _des-output/evidence/phase-11/phase-11-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-11-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-11-done-gate.md
  handoff: _des-output/phase-handoffs/phase-11-to-12-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  gold_datasets:
    - dataset: ...
      output_type: ...
      consumer: ...
      serving_direction: ...
      business_questions:
        - ...
      kpis:
        - ...
      silver_inputs:
        - ...
      grain: ...
      aggregation_rules:
        - ...
      contract_expectation: None | Minimal | Standard | Full | External/Regulated | Deferred
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-data-contracts
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

* Gold Layer Specification is created or updated;
* Phase 11 Support Plan is created or updated;
* Phase 11 Evidence Pack is created or updated;
* Gold Layer Specification is revised from evidence or evidence is explicitly waived;
* Phase 11 Artifact Revision Report is created or updated;
* Phase 11 Done Gate result is recorded;
* Phase 11 to Phase 12 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 12 without user approval.
