# Step 03 - Artifact, Checklist, and Handoff

## Goal

Create or update the Business Discovery Brief, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Decisions and draft content from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Business Discovery Brief using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved decisions as `Open Question`, not as assumed facts.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-business-questions`.

## Hints

- The artifact should be readable by a business stakeholder, not only a data engineer.
- Avoid implementation detail unless it is a constraint.
- Capture technology preferences as constraints, not as business value.
- Do not design physical tables, architecture, ingestion, contracts, semantic models, or CI/CD.
- The artifact should enable Phase 2 to generate business questions.
- If the user provides incomplete answers, create a Draft artifact and list open questions.

## Artifact Sections

The Business Discovery Brief should contain:

1. Project Intent
2. Business Problem
3. Stakeholders and Consumers
4. Target Decisions or Use Cases
5. Expected Value
6. Data Maturity Context
7. Scope
8. Non-Scope
9. Constraints
10. Assumptions
11. Risks
12. Initial Success Criteria
13. Open Questions
14. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- project intent is unknown;
- primary consumer is unknown;
- target decision or use case is unknown;
- expected value is unclear;
- MVP scope is undefined;
- success criteria are missing;
- artifact contains technical design before business discovery is approved.

### Options

A. Fix the artifact now
B. Mark artifact as Draft with blockers
C. Return to Step 02 decisions
D. Stop workflow

### Required response

Choose A/B/C/D.

## Workflow Status Update

Update the status file with:

```yaml
phase_01_business_discovery:
  skill: des-business-discovery
  artifact: .agents/des-skill/output/01-business-discovery-brief.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  open_questions:
    - ...
  next_recommended_skill: des-business-questions
```

## Completion Criteria

This step is complete when:

- artifact is created or updated;
- checklist result is recorded;
- workflow status is updated;
- next skill is recommended;
- the agent has not proceeded into Phase 2 without user approval.
