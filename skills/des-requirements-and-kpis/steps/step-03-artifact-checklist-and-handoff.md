# Step 03 - Artifact, Checklist, and Handoff

## Goal

Create or update the Requirements and KPI Catalog, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Requirements and KPI draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Requirements and KPI Catalog using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved requirements and metrics as `Draft`, `Candidate`, `Conflicting`, or `Deferred`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-data-product-definition`.

## Hints

- This artifact should become the measurable bridge between questions and design.
- Keep formulas and grains clear enough for later Gold and semantic design.
- Do not create physical table designs.
- Do not choose final data sources unless already known and approved.
- Do not write test implementation; only define what must be tested later.
- If metric conflict remains unresolved, keep the artifact Draft or Passed with risks.
- The next phase uses these requirements to define the data product boundary.

## Artifact Sections

The Requirements and KPI Catalog should contain:

1. Requirement Summary
2. Functional Requirements
3. Non-Functional Requirements
4. KPI and Metric Catalog
5. Metric Definitions
6. Metric Grain
7. Metric Ownership
8. Business Question Mapping
9. Consumer Mapping
10. Acceptance Criteria
11. Freshness and SLA Expectations
12. Quality Expectations
13. Security and Privacy Constraints
14. Cost and Performance Constraints
15. Requirement Traceability
16. Conflicts
17. Assumptions
18. Open Questions
19. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 business questions have no requirements.
- P1 requirements have no acceptance criteria.
- P1 KPIs lack formula, grain, or owner.
- Freshness expectations are vague.
- Metric conflicts are unresolved.
- Artifact contains table design or implementation code prematurely.

### Options

A. Fix the catalog now  
B. Mark catalog as Draft with blockers  
C. Return to Step 02 requirements/KPI definition  
D. Route back to `des-business-questions`  
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_03_requirements_and_kpis:
  skill: des-requirements-and-kpis
  artifact: .agents/des-skill/output/03-requirements-and-kpi-catalog.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  approved_kpis:
    - ...
  draft_kpis:
    - ...
  conflicts:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-data-product-definition
```

## Completion Criteria

This step is complete when:

- artifact is created or updated;
- checklist result is recorded;
- workflow status is updated;
- next skill is recommended;
- the agent has not proceeded into Phase 4 without user approval.
