# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Conceptual Domain Model, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Domain model draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Conceptual Domain Model using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved concepts as `Ambiguous`, `Open`, `Risk`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-architecture-design`.

## Hints

- The artifact should be understandable by business stakeholders and data engineers.
- Keep it conceptual; avoid table schemas, column-level implementation, and platform-specific design.
- Use source schemas only as evidence.
- Preserve conflicts and ambiguity rather than forcing false certainty.
- If the model is ontology-ready, note candidate classes, relationships, and controlled vocabularies without requiring RDF/OWL.
- If source-of-truth remains unresolved for P1 concepts, mark downstream design as risk.
- This artifact should enable architecture and later Silver/Gold design.

## Artifact Sections

The Conceptual Domain Model should contain:

1. Domain Model Summary
2. Domain Scope
3. Business Glossary
4. Core Entities
5. Domain Events
6. Value Objects and Attributes
7. Relationships
8. Conceptual Grains
9. Identifiers and Identity Rules
10. Source Alignment
11. Source of Truth Mapping
12. Terminology Conflicts
13. Domain Rules
14. Lifecycle and State Definitions
15. Temporal Concepts
16. Ownership and Stewardship
17. Downstream Use Case Mapping
18. Modeling Assumptions
19. Risks
20. Open Questions
21. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- domain scope is unclear;
- P1 core entities have no definitions;
- P1 concepts have no conceptual grain;
- entity identity is unclear for P1 outputs;
- source-of-truth conflicts block downstream design;
- important relationships are ambiguous;
- event time or business time is unclear for event-driven outputs;
- artifact copies source schema instead of modeling business concepts;
- artifact includes physical table design prematurely.

### Options

A. Fix the conceptual model now  
B. Mark model as Draft with blockers  
C. Return to Step 02 domain decisions  
D. Route back to `des-data-source-assessment`  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_06_domain_modeling:
  skill: des-domain-modeling
  artifact: .agents/des-skill/output/06-conceptual-domain-model.md
  status: Done | Draft | Blocked
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
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-architecture-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 7 without user approval.
