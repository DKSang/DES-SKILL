# Step 03 - Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Conceptual Domain Model, validate it through Phase 06 support work, update workflow status, and prepare a safe handoff to Phase 07.

This step completes Phase 06 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Domain model draft from Step 02
- Domain decision evidence mapping from Step 02
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

1. Create or update the Conceptual Domain Model using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved concepts as `Ambiguous`, `Open`, `Risk`, `Deferred`, or `Unknown`.
4. Create or update the Phase 06 Support Plan.
5. Create or update the Phase 06 Evidence Pack.
6. Record which business definition, source alignment, source caveat, identity rule, conceptual grain, relationship, source of truth, temporal, and lifecycle state decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Conceptual Domain Model based on the evidence pack.
8. Create or update the Phase 06 Artifact Revision Report.
9. Run the configured Conceptual Domain Model checklist.
10. Run the Phase 06 Done Gate checklist.
11. Create or update the Phase 06 to Phase 07 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should be understandable by business stakeholders and data engineers.
- Keep it conceptual; do not design physical schemas, database tables, column-level implementation, or platform-specific design.
- Use source schemas only as evidence.
- Preserve conflicts and ambiguity rather than forcing false certainty.
- If the model is ontology-ready, note candidate classes, relationships, and controlled vocabularies without requiring RDF/OWL.
- If source-of-truth remains unresolved for P1 concepts, mark downstream design as risk.
- This artifact should enable architecture and later Silver/Gold design.
- Carry Phase 05 caveats forward instead of hiding them.

---

## Artifact Sections

The Conceptual Domain Model should contain:

1. Domain Model Summary
2. Domain Scope
3. Business Glossary
4. Ontology-Lite Concept Map
5. Core Entities
6. Domain Events
7. Value Objects and Attributes
8. Relationships
9. Conceptual Grains
10. Identifiers and Identity Rules
11. Source Alignment
12. Source of Truth Mapping
13. Terminology Conflicts
14. Synonyms and Controlled Vocabulary
15. Domain Rules
16. Lifecycle and State Definitions
17. Temporal Concepts
18. Ownership and Stewardship
19. Downstream Use Case Mapping
20. Source Caveats and Data Reality Constraints
21. Modeling Assumptions
22. Risks
23. Open Questions
24. Phase 06 Evidence Summary
25. Phase 06 Handoff Notes
26. Next Skill Recommendation

---

## Phase 06 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-06-support-plan.md
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
templates/phase/phase-06-support-plan-template.md
```

if available.

---

## Phase 06 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-06/phase-06-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area | Required? |
|---|---|---:|
| E-001 | Phase 05 handoff evidence | Yes |
| E-002 | Business glossary evidence | Yes |
| E-003 | Source to concept mapping evidence | Yes |
| E-004 | Ontology-lite boundary evidence | Yes |
| E-005 | Entity identity evidence | Yes |
| E-006 | Conceptual grain evidence | Yes |
| E-007 | Relationship evidence | Yes |
| E-008 | Source of truth mapping evidence | Yes |
| E-009 | Terminology conflict evidence | Yes |
| E-010 | Temporal concept evidence | Yes |
| E-011 | Lifecycle state evidence | Yes |
| E-012 | Source caveat evidence | Yes |

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
templates/phase/phase-06-evidence-pack-template.md
```

if available.

---

## Phase 06 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-06-artifact-revision.md
```

Record:

* what changed in the Conceptual Domain Model after evidence review;
* which entity/event definitions or grains were corrected;
* which source-to-concept mappings were verified;
* which source-of-truth conflicts were resolved;
* which risks were carried forward;
* whether Phase 07 can safely start.

---

## Phase 06 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-06-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 06 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 06 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-06-to-07-handoff.md
```

The handoff must tell Phase 07:

* candidate domain concepts and entities;
* approved business definition and grain per concept;
* ontology-lite class structure and boundaries;
* source alignment and source-of-truth details;
* terminology conflicts or synonyms carried forward;
* temporal and lifecycle state definitions;
* source caveats and data reality constraints from Phase 05;
* conformed identity rules;
* modeling assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 07 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 07 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked

Stop if the Conceptual Domain Model checklist or Phase 06 Done Gate fails.

### Blocking examples

* domain scope is unclear;
* P1 core entities have no definitions;
* P1 concepts have no conceptual grain;
* entity identity is unclear for P1 outputs;
* source-of-truth conflicts block downstream design;
* important relationships are ambiguous;
* event time or business time is unclear for event-driven outputs;
* artifact copies source schema instead of modeling business concepts;
* artifact includes physical table design prematurely;
* Phase 06 evidence pack is missing;
* Phase 06 handoff is missing.

### Options

A. Fix the conceptual model now
B. Mark Phase 06 as Draft with blockers
C. Return to Step 02 domain decisions
D. Route back to `des-data-source-assessment`
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_06_domain_modeling:
  skill: des-domain-modeling
  artifact: _des-output/planning-artifacts/06-conceptual-domain-model.md
  support_plan: _des-output/phase-support-plans/phase-06-support-plan.md
  evidence_pack: _des-output/evidence/phase-06/phase-06-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-06-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-06-done-gate.md
  handoff: _des-output/phase-handoffs/phase-06-to-07-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  core_entities:
    - name: ...
      status: Draft | Approved | Ambiguous | Deferred
      grain: ...
      source_of_truth_status: Approved | Draft | Open
  domain_events:
    - name: ...
      status: Draft | Approved | Ambiguous | Deferred
  unresolved_ambiguities:
    - ...
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-architecture-design
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

* Conceptual Domain Model is created or updated;
* Phase 06 Support Plan is created or updated;
* Phase 06 Evidence Pack is created or updated;
* Conceptual Domain Model is revised from evidence or evidence is explicitly waived;
* Phase 06 Artifact Revision Report is created or updated;
* Phase 06 Done Gate result is recorded;
* Phase 06 to Phase 07 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 07 without user approval.
