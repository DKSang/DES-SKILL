# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Data Contract Specification, validate it through Phase 12 support work, update workflow status, and prepare a safe handoff to Phase 13.

This step completes Phase 12 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Contract draft from Step 02
- Contract evidence mapping from Step 02
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

1. Create or update the Data Contract Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved contract decisions as `Draft`, `Proposed`, `Risk`, `Blocked`, `Deprecated`, `Open`, or `Unknown`.
4. Create or update the Phase 12 Support Plan.
5. Create or update the Phase 12 Evidence Pack.
6. Record which contract scope, inventory, producer/consumer/owner, level, identity, grain, schema, field, KPI, freshness, quality, access, lineage, versioning, change, incident, validation, and approval decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Data Contract Specification based on the evidence pack.
8. Create or update the Phase 12 Artifact Revision Report.
9. Run the configured Data Contracts checklist.
10. Run the Phase 12 Done Gate checklist.
11. Create or update the Phase 12 to Phase 13 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should describe obligations, not implementation code.
- Use contract levels to avoid over-governance.
- Keep exploratory outputs lightweight.
- Keep production/system-facing outputs strict.
- If schema is not finalized, mark the contract Draft.
- If contract depends on unresolved Gold grain, route back to Gold design.
- If ownership is unclear, mark contract as Risk or Blocked.
- This artifact should enable transformation design, data quality rules, observability, and CI/CD gates.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, implement tests, or write pipeline implementation code.

---

## Artifact Sections

The Data Contract Specification should contain:

1. Data Contract Summary
2. Contract Scope
3. Contract Non-Scope
4. Contract Design Principles
5. Contract Inventory
6. Producer and Consumer Mapping
7. Contract Level
8. Dataset and Output Identity
9. Business Meaning and Grain
10. Schema Expectations
11. Field Level Expectations
12. Metric and KPI Expectations
13. Freshness and SLA Expectations
14. Quality Expectations
15. Volume and Completeness Expectations
16. Security and Access Expectations
17. Lineage and Metadata Expectations
18. Compatibility and Versioning Policy
19. Change Management Policy
20. Deprecation Policy
21. Incident and Escalation Policy
22. Acceptance and Validation Criteria
23. Contract Ownership and Approval
24. Contract Evidence Summary
25. Risks
26. Assumptions
27. Open Questions
28. Phase 12 Evidence Summary
29. Phase 12 Handoff Notes
30. Next Skill Recommendation

---

## Phase 12 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-12-support-plan.md
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
templates/phase/phase-12-support-plan-template.md
```

if available.

---

## Phase 12 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-12/phase-12-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                     |                   Required? |
| ----------- | --------------------------------- | --------------------------: |
| E-001       | Phase 11 handoff evidence         |                         Yes |
| E-002       | Contract scope evidence           |                         Yes |
| E-003       | Contract inventory evidence       |                         Yes |
| E-004       | Producer/consumer/owner evidence  |                         Yes |
| E-005       | Contract level evidence           |                         Yes |
| E-006       | Dataset/output identity evidence  |                         Yes |
| E-007       | Business meaning/grain evidence   |                         Yes |
| E-008       | Schema expectation evidence       |                         Yes |
| E-009       | Field-level expectation evidence  |      Required for Standard+ |
| E-010       | Metric/KPI expectation evidence   | Required when metrics exist |
| E-011       | Freshness/SLA evidence            |             Required for P1 |
| E-012       | Quality expectation evidence      |                         Yes |
| E-013       | Volume/completeness evidence      |      Required when relevant |
| E-014       | Security/access evidence          |                         Yes |
| E-015       | Lineage/metadata evidence         |                         Yes |
| E-016       | Compatibility/versioning evidence |                         Yes |
| E-017       | Change management evidence        |                         Yes |
| E-018       | Deprecation policy evidence       |      Required for Standard+ |
| E-019       | Incident/escalation evidence      |      Required for Standard+ |
| E-020       | Acceptance/validation evidence    |                         Yes |
| E-021       | Ownership/approval evidence       |                         Yes |

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
templates/phase/phase-12-evidence-pack-template.md
```

if available.

---

## Phase 12 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-12-artifact-revision.md
```

Record:

* what changed in the Data Contract Specification after evidence review;
* which contracts were approved, risky, blocked, proposed, or deprecated;
* which schema/grain/freshness/quality/access decisions were clarified;
* which owner/producer/consumer decisions remained open;
* which versioning/change/incident policies were added;
* whether Phase 13 can safely use the contracts for transformation design.

---

## Phase 12 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-12-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 12 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 12 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-12-to-13-handoff.md
```

The handoff must tell Phase 13:

* contract scope and non-scope;
* approved/proposed/risky/blocked/deprecated contracts;
* producer and consumer mapping;
* contract level;
* dataset/output identity;
* business meaning and grain;
* schema expectations;
* field-level expectations;
* metric and KPI expectations;
* freshness and SLA expectations;
* quality expectations;
* volume and completeness expectations;
* security and access expectations;
* lineage and metadata expectations;
* compatibility and versioning policy;
* change management policy;
* deprecation policy;
* incident and escalation policy;
* acceptance and validation criteria;
* contract ownership and approval;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 13 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 13 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Data Contracts checklist or Phase 12 Done Gate fails.

### Blocking examples

* P1 system-facing output has no contract.
* Contract has no producer or consumer.
* Contract has no owner or approver.
* Contract level is missing.
* Schema expectation is missing.
* Grain is missing.
* Freshness/SLA is missing for P1 output.
* Quality expectations are missing.
* Access/security classification is unresolved.
* Change/versioning policy is missing.
* Incident/escalation policy is missing for Standard+ contract.
* Validation criteria are missing.
* Contract includes metric definitions that conflict with Phase 03.
* Phase 12 evidence pack is missing and not waived.
* Phase 12 handoff is missing.
* Phase 13 would rely on hidden contract assumptions.

### Options

A. Fix the contract specification now
B. Mark Phase 12 as Draft with blockers
C. Return to Step 02 contract decisions
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
phase_12_data_contracts:
  skill: des-data-contracts
  artifact: _des-output/planning-artifacts/12-data-contract-specification.md
  support_plan: _des-output/phase-support-plans/phase-12-support-plan.md
  evidence_pack: _des-output/evidence/phase-12/phase-12-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-12-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-12-done-gate.md
  handoff: _des-output/phase-handoffs/phase-12-to-13-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  contracts:
    - contract_id: ...
      dataset_or_output: ...
      level: None | Minimal | Standard | Full | External / Regulated
      producer: ...
      consumer: ...
      owner: ...
      grain: ...
      freshness_sla: ...
      status: Draft | Proposed | Approved | Risk | Blocked | Deprecated
      risks:
        - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-transformation-design
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

* Data Contract Specification is created or updated;
* Phase 12 Support Plan is created or updated;
* Phase 12 Evidence Pack is created or updated;
* Data Contract Specification is revised from evidence or evidence is explicitly waived;
* Phase 12 Artifact Revision Report is created or updated;
* Phase 12 Done Gate result is recorded;
* Phase 12 to Phase 13 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 13 without user approval.
