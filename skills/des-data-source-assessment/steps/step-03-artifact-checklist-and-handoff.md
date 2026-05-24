# Step 03 - Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Data Source Inventory, validate it through Phase 05 support work, update workflow status, and prepare a safe handoff to Phase 06.

This step completes Phase 05 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Source inventory draft from Step 02
- Source decision evidence mapping from Step 02
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

1. Create or update the Data Source Inventory using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved source decisions as `Unknown`, `Risk`, `Deferred`, or `Blocked`.
4. Create or update the Phase 05 Support Plan.
5. Create or update the Phase 05 Evidence Pack.
6. Record which source mapping, owner, access, schema, quality, freshness, licensing, security, source of truth, and feasibility decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Data Source Inventory based on the evidence pack.
8. Create or update the Phase 05 Artifact Revision Report.
9. Run the configured Data Source Assessment checklist.
10. Run the Phase 05 Done Gate checklist.
11. Create or update the Phase 05 to Phase 06 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- Do not design ingestion pipelines in this phase.
- The inventory should describe the real source characteristics and evidence, not production design.
- Keep physical tables, Silver transformations, and production pipelines for later phases.
- Use product outputs and source needs from Phase 04 as traceability anchors.
- If a source is blocked technically or legally, keep the status as Blocked or draft.
- The next phase (Phase 06 Domain Modeling) uses these conformed sources and conformed keys to build the conceptual model.
- If conformed source keys or source of truth are unknown, Phase 06 will struggle with conformed entities.

---

## Artifact Sections

The Data Source Inventory should contain:

1. Source Inventory Summary
2. Source-to-Product Mapping
3. Source-to-Requirement and KPI Mapping
4. Source-to-Source-Need Mapping
5. Source System Inventory
6. Source Type and Generation Pattern
7. Ownership and Contacts
8. Access Method and Permissions
9. Source of Truth Decisions
10. Data Format and Schema
11. Sample and Probe Evidence
12. Update Frequency and Freshness
13. Volume and Growth
14. History and Retention
15. Quality Profile
16. Reliability and Availability
17. Schema Change and Evolution
18. Security and Privacy Classification
19. Compliance and Regulatory Concerns
20. Cost, Licensing, and Usage Limits
21. Operational Dependencies
22. Contract and SLA Expectations
23. Ingestion Feasibility
24. Risks
25. Assumptions
26. Open Questions
27. Phase 05 Evidence Summary
28. Phase 05 Handoff Notes
29. Next Skill Recommendation

---

## Phase 05 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-05-support-plan.md
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
templates/phase/phase-05-support-plan-template.md
```

if available.

---

## Phase 05 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-05/phase-05-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area | Required? |
|---|---|---:|
| E-001 | Phase 04 handoff evidence | Yes |
| E-002 | Source need mapping evidence | Yes |
| E-003 | Candidate source evidence | Yes |
| E-004 | Access probe evidence | Yes |
| E-005 | Schema inspection evidence | Yes |
| E-006 | Sample data evidence | Yes |
| E-007 | Data quality profile evidence | Yes |
| E-008 | Freshness/update pattern evidence | Yes |
| E-009 | License/terms evidence | Yes |
| E-010 | Security/privacy evidence | Yes |
| E-011 | Source of truth evidence | Yes |
| E-012 | Ingestion feasibility evidence | Yes |

For each evidence item, record status:

```text
Confirmed
Assumed
Missing
Waived with reason
Blocked
Accepted with risk
```

Use:

```text
templates/phase/phase-05-evidence-pack-template.md
```

if available.

---

## Phase 05 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-05-artifact-revision.md
```

Record:

* what changed in the Data Source Inventory after evidence review;
* which connectivity or schema claims were verified;
* which quality or freshness guarantees were corrected;
* which source of truth conflicts were resolved;
* which risks were carried forward;
* whether Phase 06 can safely start.

---

## Phase 05 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-05-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 05 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 05 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-05-to-06-handoff.md
```

The handoff must tell Phase 06:

* candidate conformed sources;
* source of truth per key business concept;
* access method and tested connectivity status;
* schema format and key fields;
* freshness, reliability, and quality risks;
* security, privacy, and sensitive fields;
* ingestion feasibility ratings;
* conformed key hints (essential for domain modeling conformed entities);
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 06 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 06 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked

Stop if the Data Source Assessment checklist or Phase 05 Done Gate fails.

### Blocking examples

* P1 product outputs have no mapped sources.
* P1 sources lack technical/legal access tested or accepted as risk.
* P1 source owner is unknown and not accepted as risk.
* Source of truth is conflicting and unresolved.
* No sample, schema, documentation, or connectivity probe evidence exists for P1 source and not waived.
* Upstream license/terms block usage.
* Ingestion feasibility is unknown.
* Artifact contains production ingestion code or Medallion schemas prematurely.
* Phase 05 evidence pack is missing.
* Phase 05 handoff is missing.

### Options

A. Fix the inventory now
B. Mark Phase 05 as Draft with blockers
C. Return to Step 02 source decisions
D. Route back to `des-data-product-definition`
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_05_data_source_assessment:
  skill: des-data-source-assessment
  artifact: _des-output/planning-artifacts/05-data-source-inventory.md
  support_plan: _des-output/phase-support-plans/phase-05-support-plan.md
  evidence_pack: _des-output/evidence/phase-05/phase-05-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-05-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-05-done-gate.md
  handoff: _des-output/phase-handoffs/phase-05-to-06-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  sources:
    - name: ...
      type: ...
      feasibility: Ready | Viable with risks | Blocked | Unknown | Deferred
      access_status: ...
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-domain-modeling
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

* Data Source Inventory is created or updated;
* Phase 05 Support Plan is created or updated;
* Phase 05 Evidence Pack is created or updated;
* Data Source Inventory is revised from evidence or evidence is explicitly waived;
* Phase 05 Artifact Revision Report is created or updated;
* Phase 05 Done Gate result is recorded;
* Phase 05 to Phase 06 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 06 without user approval.
