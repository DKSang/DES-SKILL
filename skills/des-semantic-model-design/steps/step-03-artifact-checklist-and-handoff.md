# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Semantic Model Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Semantic model design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Semantic Model Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved semantic decisions as `Draft`, `Risk`, `Blocked`, `Deprecated`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-serving-layer-design`.

## Hints

- This artifact should define semantic meaning, not implement BI model code.
- Do not hide Draft measures inside Certified semantic models.
- Do not mark a model Certified unless contract, quality, owner, lineage, and freshness are strong enough.
- If metric definition is missing, route back to KPI or Gold design.
- If security is unresolved, mark semantic model as Risk or Blocked.
- This artifact should enable dashboard/API/app serving design.

## Artifact Sections

The Semantic Model Specification should contain:

1. Semantic Model Summary
2. Semantic Scope
3. Semantic Design Principles
4. Semantic Model Inventory
5. Consumer and Use Case Mapping
6. Gold to Semantic Mapping
7. Business Glossary Alignment
8. Semantic Entities
9. Measures and KPIs
10. Dimensions and Attributes
11. Hierarchies
12. Relationships and Join Behavior
13. Grain and Aggregation Behavior
14. Filters and Slicers
15. Time Intelligence Expectations
16. Calculation Ownership
17. Naming and Display Conventions
18. Security and Access Model
19. Certification and Trust Status
20. Freshness and Quality Display Expectations
21. Lineage and Metadata Expectations
22. Semantic Testing Expectations
23. Risks
24. Assumptions
25. Open Questions
26. Next Skill Recommendation

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 semantic model has no consumer/use case.
- Gold dataset mapping is missing.
- Measure definition conflicts with Phase 3 or Phase 11.
- Measure aggregation behavior is missing.
- Relationship/join behavior is unclear.
- Semantic model exposes fields that violate security constraints.
- Certified status is assigned without owner/quality/lineage/contract support.
- Freshness or quality display expectation is missing.
- Artifact includes DAX/SQL/LookML/Power BI/Cube/dbt implementation code prematurely.

### Options

A. Fix the semantic model specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 semantic decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_16_semantic_model_design:
  skill: des-semantic-model-design
  artifact: _des-output/planning-artifacts/16-semantic-model-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  semantic_models:
    - model: ...
      consumer: ...
      trust_status: Draft | Promoted | Certified | Risk | Blocked | Deprecated
      status: Draft | Approved | Risk | Blocked | Deferred
  measures:
    - measure: ...
      definition_source: ...
      status: Draft | Approved | Certified | Deprecated | Blocked
  open_questions:
    - ...
  next_recommended_skill: des-serving-layer-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 17 without user approval.
