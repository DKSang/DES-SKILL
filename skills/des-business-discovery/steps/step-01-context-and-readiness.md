# Step 01 - Context and Readiness

## Goal

Confirm that Business Discovery is the correct next step and gather enough context to begin the discovery artifact.

## Required Inputs

Look for:

- current user request;
- project idea or problem statement;
- existing README, PRD, notes, proposal, ticket, or prior artifact;
- known stakeholders or consumers;
- known platform/tool constraints;
- workflow status file, if present;
- existing `01-business-discovery-brief.md`, if present.

## Actions

1. Read `customize.toml`.
2. Check whether `output_file` already exists.
3. Check whether workflow status exists.
4. Summarize known project context in 5-10 lines.
5. Identify missing business context.
6. Decide whether to continue, update an existing artifact, or route to another skill.

## Hints

- Start from the problem, not the technology.
- If the user mentions tools, treat them as constraints or preferences, not business goals.
- If the user only provides an idea, continue as Draft and ask targeted HALT questions.
- If code already exists but no business discovery artifact exists, this phase is still valid.
- If the user says "just implement," check whether a discovery artifact already exists before allowing implementation.
- Distinguish stakeholder, consumer, and owner:
  - stakeholder = affected or decision-making party;
  - consumer = person/system using the data output;
  - owner = party accountable for approval or operation.

## Discovery Lens

Use this lens when summarizing context:

| Area | Question |
| --- | --- |
| Why | Why does this data project exist? |
| Who | Who will use or depend on the output? |
| Decision / Use Case | What decision, workflow, analysis, ML task, operation, or product experience will improve? |
| Value | What value should be created? |
| Maturity | Is this ad hoc, MVP, scaling, production-grade, or portfolio/learning? |
| Constraint | What time, cost, platform, compliance, team, or source constraints exist? |
| Risk | What could make the project fail? |

## HALT - Project Intent Required

Stop if there is not enough context to identify the project intent.

### Decision needed

What kind of project is this?

### Options

A. Portfolio / learning project
B. Internal analytics or reporting project
C. MVP data product
D. Production-grade data product
E. Platform or infrastructure foundation
F. Migration / modernization project
G. Custom project type

### Required user response

Choose one option or provide a custom intent.

## Completion Criteria

This step is complete when:

- project intent is known or explicitly marked unresolved;
- available context is summarized;
- missing context is listed;
- blocking HALT questions are answered or artifact remains Draft.

## Next Step

After completion, load only:

```text
steps/step-02-discovery-decisions.md
```
