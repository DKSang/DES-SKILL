# Step 03 - Artifact, Checklist, and Handoff

## Goal

Create or update the Business Question Catalog, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Prioritized questions from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Business Question Catalog using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved questions as `Draft`, `Open`, `Deferred`, or `Out of Scope`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-requirements-and-kpis`.

## Hints

- The artifact should be understandable by business users and data engineers.
- Use business language first; add technical hints only where helpful.
- Do not turn candidate metrics into final KPI definitions.
- Do not create table designs in the question catalog.
- Do not decide data sources yet; use source hints only as clues for Phase 5.
- Prioritized questions should become the backbone of requirements, KPIs, Gold design, serving design, and release evaluation.

## Artifact Sections

The Business Question Catalog should contain:

1. Question Summary
2. Prioritized Business Questions
3. Question Classification
4. Consumer Mapping
5. Decision Mapping
6. Expected Answer Format
7. Candidate Metrics
8. Freshness Expectations
9. Grain Hints
10. Source Hints
11. Dependencies
12. Out of Scope Questions
13. Assumptions
14. Open Questions
15. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- no questions map to a consumer;
- no questions map to a target decision or use case;
- high-priority questions have no priority approval;
- questions conflict with Phase 1 scope;
- high-priority questions are not plausibly answerable;
- catalog defines final KPI formulas or table designs prematurely.

### Options

A. Fix the catalog now
B. Mark catalog as Draft with blockers
C. Return to Step 02 prioritization
D. Route back to `des-business-discovery`
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_02_business_questions:
  skill: des-business-questions
  artifact: .agents/des-skill/output/02-business-question-catalog.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  top_questions:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-requirements-and-kpis
```

## Completion Criteria

This step is complete when:

- artifact is created or updated;
- checklist result is recorded;
- workflow status is updated;
- next skill is recommended;
- the agent has not proceeded into Phase 3 without user approval.
