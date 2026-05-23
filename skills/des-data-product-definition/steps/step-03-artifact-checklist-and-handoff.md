# Step 03 - Artifact, Checklist, and Handoff

## Goal

Create or update the Data Product Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Product definition draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Data Product Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved product decisions as `Draft`, `Open`, `Deferred`, or `Blocked`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-data-source-assessment`.

## Hints

- The artifact should describe the product promise, not the implementation.
- Keep physical schema, ingestion, transformation, and serving mechanics for later phases.
- Use requirements and KPIs from Phase 3 as traceability anchors.
- Keep data contract expectations high-level; contract details belong to Phase 12.
- If multiple outputs exist, clearly mark first release versus future release.
- If service expectations are unknown, keep product status as Draft or Experimental.
- Product definition should enable Phase 5 to assess which sources are needed.

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
22. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- no primary consumer is defined;
- no supported use case is defined;
- product boundary is vague;
- first release output is unclear;
- service expectations are missing for a P1 output;
- owner/steward is missing;
- lifecycle status is missing;
- artifact contains physical table design or implementation code prematurely.

### Options

A. Fix the specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 product decisions  
D. Route back to `des-requirements-and-kpis`  
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_04_data_product_definition:
  skill: des-data-product-definition
  artifact: _des-output/planning-artifacts/04-data-product-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  data_products:
    - name: ...
      lifecycle_status: Experimental | Draft | MVP | Internal shared | Production | Deprecated
      primary_consumer: ...
      first_release_output: ...
  open_questions:
    - ...
  next_recommended_skill: des-data-source-assessment
```

## Completion Criteria

This step is complete when:

- artifact is created or updated;
- checklist result is recorded;
- workflow status is updated;
- next skill is recommended;
- the agent has not proceeded into Phase 5 without user approval.
