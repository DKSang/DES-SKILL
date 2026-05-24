# Step 03 - Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Data Product Specification, validate it through Phase 04 support work, update workflow status, and prepare a safe handoff to Phase 05.

This step completes Phase 04 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Product definition draft from Step 02
- Product decision evidence mapping from Step 02
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

1. Create or update the Data Product Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved product decisions as `Draft`, `Open`, `Deferred`, `Risk`, or `Blocked`.
4. Create or update the Phase 04 Support Plan.
5. Create or update the Phase 04 Evidence Pack.
6. Record which product intent, consumer, use case, output, boundary, service, trust, owner, lifecycle, and source-need decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Data Product Specification based on the evidence pack.
8. Create or update the Phase 04 Artifact Revision Report.
9. Run the configured Data Product Definition checklist.
10. Run the Phase 04 Done Gate checklist.
11. Create or update the Phase 04 to Phase 05 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should describe the product promise, not the implementation.
- Keep physical schema, ingestion, transformation, and serving mechanics for later phases.
- Use requirements and KPIs from Phase 03 as traceability anchors.
- Keep data contract expectations high-level; contract details belong to Phase 12.
- If multiple outputs exist, clearly mark first release versus future release.
- If service expectations are unknown, keep product status as Draft or Experimental.
- Product definition should enable Phase 05 to assess which sources are needed.
- If Phase 04 lacks source-need clarity, Phase 05 will become a blind source search.

---

## Artifact Sections

The Data Product Specification should contain:

1. Data Product Summary
2. Product Intent
3. Primary and Secondary Consumers
4. Supported Use Cases
5. Business Question and Requirement Mapping
6. Product Outputs
7. Product Boundary
8. Non-Scope
9. Service Expectations
10. Freshness and SLA Expectations
11. Quality and Trust Expectations
12. Access and Serving Expectations
13. Ownership and Stewardship
14. Lifecycle Status
15. Dependencies
16. Data Contract Expectations
17. Governance and Security Considerations
18. Success Criteria
19. Assumptions
20. Risks
21. Open Questions
22. Phase 04 Evidence Summary
23. Phase 04 Handoff Notes
24. Next Skill Recommendation

---

## Phase 04 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-04-support-plan.md
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
templates/phase/phase-04-support-plan-template.md
```

if available.

---

## Phase 04 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-04/phase-04-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                        | Required? |
| ----------- | ------------------------------------ | --------: |
| E-001       | Phase 03 handoff evidence            |       Yes |
| E-002       | Product boundary evidence            |       Yes |
| E-003       | Consumer/use-case alignment evidence |       Yes |
| E-004       | Product output evidence              |       Yes |
| E-005       | Service expectation evidence         |       Yes |
| E-006       | Trust expectation evidence           |       Yes |
| E-007       | Ownership/stewardship evidence       |       Yes |
| E-008       | Lifecycle status evidence            |       Yes |
| E-009       | Source need readiness evidence       |       Yes |

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
templates/phase/phase-04-evidence-pack-template.md
```

if available.

---

## Phase 04 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-04-artifact-revision.md
```

Record:

* what changed in the Data Product Specification after evidence review;
* which product boundary decisions were confirmed;
* which output/service/trust decisions remained Draft;
* which owner/lifecycle decisions remained unresolved;
* which source needs were clarified for Phase 05;
* which risks were carried forward;
* whether Phase 05 can safely assess sources.

---

## Phase 04 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-04-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 04 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 04 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-04-to-05-handoff.md
```

The handoff must tell Phase 05:

* data product name and intent;
* primary and secondary consumers;
* supported use cases;
* product outputs;
* first release output;
* product boundary and non-scope;
* business questions and requirements to support;
* approved KPIs and candidate metrics;
* freshness/SLA expectations;
* quality/trust expectations;
* access/serving expectations;
* ownership and stewardship;
* lifecycle status;
* governance/security considerations;
* source needs to assess;
* source hints, if any, clearly marked as hints;
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 05 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 05 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked

Stop if the Data Product Definition checklist or Phase 04 Done Gate fails.

### Blocking examples

* no primary consumer is defined;
* no supported use case is defined;
* product boundary is vague;
* first release output is unclear;
* service expectations are missing for a P1 output;
* trust expectation is unclear for decision-support/ML/operational output;
* owner/steward is missing and not accepted as risk;
* lifecycle status is missing;
* source needs for Phase 05 are unclear;
* artifact contains physical table design or implementation code prematurely;
* Phase 04 evidence pack is missing and not waived;
* Phase 04 handoff is missing;
* Phase 05 would become a blind source search.

### Options

A. Fix the specification now
B. Mark Phase 04 as Draft with blockers
C. Return to Step 02 product decisions
D. Route back to `des-requirements-and-kpis`
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_04_data_product_definition:
  skill: des-data-product-definition
  artifact: _des-output/planning-artifacts/04-data-product-specification.md
  support_plan: _des-output/phase-support-plans/phase-04-support-plan.md
  evidence_pack: _des-output/evidence/phase-04/phase-04-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-04-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-04-done-gate.md
  handoff: _des-output/phase-handoffs/phase-04-to-05-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  data_products:
    - name: ...
      lifecycle_status: Experimental | Draft | MVP | Internal shared | Production | Deprecated
      primary_consumer: ...
      first_release_output: ...
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-data-source-assessment
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

* Data Product Specification is created or updated;
* Phase 04 Support Plan is created or updated;
* Phase 04 Evidence Pack is created or updated;
* Data Product Specification is revised from evidence or evidence is explicitly waived;
* Phase 04 Artifact Revision Report is created or updated;
* Phase 04 Done Gate result is recorded;
* Phase 04 to Phase 05 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 05 without user approval.
