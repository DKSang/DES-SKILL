# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Lineage and Metadata Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Lineage/metadata design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Lineage and Metadata Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved lineage/metadata decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-governance-security-design`.

## Hints

- This artifact should define metadata requirements, not implement a catalog.
- Do not claim lineage depth that tooling/process cannot support.
- Keep column-level lineage scoped and justified.
- If ownership is missing, mark metadata item as Risk.
- If business definition is missing, mark asset as Draft.
- If AI/data-agent serving exists, metadata quality matters more.

## Artifact Sections

The Lineage and Metadata Specification should contain:

1. Lineage and Metadata Summary
2. Metadata Scope
3. Metadata Design Principles
4. Metadata Categories
5. Metadata Inventory
6. Business Metadata
7. Technical Metadata
8. Operational Metadata
9. Reference Metadata
10. Dataset Catalog Requirements
11. Field and Schema Metadata
12. Metric and KPI Metadata
13. Contract Metadata
14. Transformation Lineage
15. Dataset Lineage
16. Column Level Lineage Expectations
17. Semantic and Serving Lineage
18. Quality and Trust Metadata
19. Ownership and Stewardship Metadata
20. Usage and Consumer Metadata
21. Change and Version Metadata
22. Audit and Compliance Metadata
23. Metadata Capture Responsibilities
24. Metadata Freshness and Maintenance Policy
25. Risks
26. Assumptions
27. Open Questions
28. Next Skill Recommendation

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 serving outputs cannot trace to Gold.
- Business definitions have no owner.
- Operational run evidence is missing.
- Metadata categories are not fully covered.
- Column lineage is claimed but no capture method exists.

### Options

A. Fix the lineage/metadata specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 metadata decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

```yaml
phase_18_lineage_metadata_design:
  skill: des-lineage-metadata-design
  artifact: _des-output/planning-artifacts/18-lineage-metadata-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  metadata_assets:
    - asset: ...
      type: dataset | metric | contract | transformation | quality_rule | workflow | semantic_object | serving_output
      status: Draft | Approved | Risk | Blocked | Deferred
  lineage_scope: ...
  open_questions:
    - ...
  next_recommended_skill: des-governance-security-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 19 without user approval.
