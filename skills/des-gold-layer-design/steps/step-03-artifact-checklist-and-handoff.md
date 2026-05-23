# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Gold Layer Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Gold design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Gold Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Gold decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-data-contracts`.

## Hints

- The artifact should describe serving-ready data design, not transformation code.
- Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.
- Do not hide metric definition conflicts.
- Do not create one vague Gold table for every possible use case.
- Do not skip consumer and business question mapping.
- If Gold depends on unresolved Silver identity/source-of-truth risk, mark it as Risk.
- If Gold will feed dashboards, APIs, ML, or external consumers, contract expectations should be explicit.
- This artifact should enable Phase 12 data contracts and Phase 13 transformation design.

## Artifact Sections

The Gold Layer Specification should contain:

1. Gold Layer Summary
2. Gold Scope
3. Gold Design Principles
4. Business Question to Gold Mapping
5. Requirement and KPI to Gold Mapping
6. Silver to Gold Mapping
7. Gold Dataset Inventory
8. Gold Output Type
9. Consumer and Serving Alignment
10. Grain and Aggregation Rules
11. Metric and KPI Definitions Used
12. Dimension Fact Aggregate and Output Model Decisions
13. Filtering and Slicing Expectations
14. History and Slowly Changing Behavior
15. Freshness and SLA Expectations
16. Gold Boundary Data Quality Rules
17. Access Control and Security Handling
18. Contract Expectations
19. Lineage and Traceability
20. Performance and Cost Considerations
21. Risks
22. Assumptions
23. Open Questions
24. Next Skill Recommendation

---

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 business question has no Gold output.
- Gold output has no consumer or serving path.
- Gold grain is missing.
- KPI definition conflicts with Phase 3.
- Aggregation rule is unclear.
- Model type is unclear.
- Required slices/filters are missing.
- Freshness/SLA is missing for P1 output.
- Gold quality rules are missing.
- Access/security handling is unresolved.
- Contract expectation is missing for downstream system-facing output.
- Lineage back to Silver/Bronze/source is incomplete.
- Artifact includes transformation code or dashboard/API implementation prematurely.

### Options

A. Fix the Gold specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 Gold decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_11_gold_layer_design:
  skill: des-gold-layer-design
  artifact: _des-output/planning-artifacts/11-gold-layer-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  gold_datasets:
    - dataset: ...
      output_type: ...
      consumer: ...
      grain: ...
      serving_direction: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-data-contracts
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 12 without user approval.
