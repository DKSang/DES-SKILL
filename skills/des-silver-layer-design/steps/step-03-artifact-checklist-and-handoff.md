# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Silver Layer Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Silver design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Silver Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Silver decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-gold-layer-design`.

## Hints

- The artifact should describe trusted conformed data, not final reporting outputs.
- Do not clean, conform, or design detailed Gold tables, semantic models, dashboards, APIs, or write pipeline implementation code.
- Do not hide unresolved identity or source-of-truth decisions.
- If domain alignment is unclear, route back to domain modeling.
- If Bronze lineage is insufficient, route back to Bronze design.
- This artifact should enable Phase 11 Gold design.

## Artifact Sections

The Silver Layer Specification should contain:

1. Silver Layer Summary
2. Silver Scope
3. Silver Design Principles
4. Bronze to Silver Mapping
5. Silver Dataset Inventory
6. Domain Entity and Event Alignment
7. Conceptual to Logical Mapping
8. Grain and Identity Rules
9. Key Strategy
10. Deduplication and Survivorship Rules
11. Conformance and Standardization Rules
12. Data Type Normalization
13. Timezone and Temporal Normalization
14. Unit and Currency Normalization
15. Code Status and Category Mapping
16. Null and Missing Value Handling
17. Schema Evolution Handling
18. Source of Truth and Cross Source Reconciliation
19. Silver Boundary Data Quality Rules
20. Rejected and Quarantined Record Handling
21. Privacy and Security Handling
22. Lineage and Traceability
23. Refresh and Incremental Behavior
24. Risks
25. Assumptions
26. Open Questions
27. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 Silver dataset has no domain alignment.
- Grain or identity rule is missing.
- Key strategy is missing.
- Source-of-truth conflict is unresolved.
- Deduplication/survivorship rule is missing where duplicates exist.
- Required conformance mapping is missing.
- Timezone/unit/status/category mapping is unclear.
- Silver quality rules are missing.
- Rejected record handling is missing.
- Sensitive data handling is unresolved.
- Lineage back to Bronze is incomplete.
- Artifact includes Gold mart logic or transformation code prematurely.

### Options

A. Fix the Silver specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 Silver decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_10_silver_layer_design:
  skill: des-silver-layer-design
  artifact: .agents/des-skill/output/10-silver-layer-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  silver_datasets:
    - dataset: ...
      domain_concept: ...
      grain: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-gold-layer-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 11 without user approval.
