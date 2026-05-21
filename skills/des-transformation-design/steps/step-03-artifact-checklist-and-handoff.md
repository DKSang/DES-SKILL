# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Transformation Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Transformation design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Transformation Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved transformation decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-data-quality`.

## Hints

- This artifact should be implementable later, but it is not implementation code.
- Keep rule definitions explicit and traceable.
- Do not hide transformation dependencies.
- Do not define transformation outputs that violate contracts.
- If a transformation needs tests, record test expectations; Phase 14 and Phase 21 will formalize them.
- If orchestration order matters, record dependency order; Phase 15 will operationalize it.
- If performance risk exists, record it for Phase 20.

## Artifact Sections

The Transformation Specification should contain:

1. Transformation Summary
2. Transformation Scope
3. Transformation Design Principles
4. Transformation Inventory
5. Layer to Layer Transformation Mapping
6. Dependency Graph
7. Input and Output Dataset Mapping
8. Transformation Grain
9. Business Rules
10. Cleaning and Conformance Rules
11. Join and Relationship Rules
12. Deduplication and Survivorship Rules
13. SCD and History Handling
14. Aggregation and Metric Calculation Rules
15. Incremental Processing Strategy
16. Backfill and Replay Strategy
17. Late Arriving and Corrected Data Handling
18. Error Handling and Quarantine Behavior
19. Validation and Test Expectations
20. Contract Alignment
21. Lineage and Metadata Expectations
22. Performance and Cost Considerations
23. Security and Privacy Handling
24. Implementation Boundary
25. Risks
26. Assumptions
27. Open Questions
28. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 contracted output has no transformation path.
- Transformation has no input/output mapping.
- Output grain is missing.
- Business rule is ambiguous.
- Join rule is unclear.
- Metric logic conflicts with Phase 3 or Phase 11.
- Deduplication/survivorship rule is missing where needed.
- Incremental strategy is missing.
- Backfill/replay behavior is missing.
- Error/quarantine behavior is missing.
- Validation expectation is missing.
- Contract alignment is missing.
- Artifact contains transformation SQL/Python/dbt/notebook code prematurely.
- Artifact contains orchestration pipeline code prematurely.

### Options

A. Fix the transformation specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 transformation decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_13_transformation_design:
  skill: des-transformation-design
  artifact: .agents/des-skill/output/13-transformation-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  transformations:
    - transformation_id: ...
      input: ...
      output: ...
      grain: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-data-quality
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 14 without user approval.
