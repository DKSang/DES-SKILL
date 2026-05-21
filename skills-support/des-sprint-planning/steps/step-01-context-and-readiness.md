# Step 01 — Context and Readiness

## Goal

Confirm that `des-sprint-planning` is the correct support skill and that the Epic Catalog and Story Catalog are available for sprint planning.

## Required Inputs

Required:

```text
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/output/support/story-catalog.md
```

Recommended:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Useful supporting artifacts:

```text
.agents/des-skill/output/04-data-product-specification.md
.agents/des-skill/output/07-architecture-decision-record.md
.agents/des-skill/output/08-ingestion-specification.md
.agents/des-skill/output/09-bronze-layer-specification.md
.agents/des-skill/output/10-silver-layer-specification.md
.agents/des-skill/output/11-gold-layer-specification.md
.agents/des-skill/output/12-data-contract-specification.md
.agents/des-skill/output/13-transformation-specification.md
.agents/des-skill/output/14-data-quality-specification.md
.agents/des-skill/output/15-orchestration-observability-specification.md
.agents/des-skill/output/19-governance-security-specification.md
.agents/des-skill/output/20-cost-performance-optimization-specification.md
.agents/des-skill/output/21-cicd-testing-specification.md
```

Existing output to check:

```text
.agents/des-skill/output/support/sprint-plan.md
```

## Actions

1. Read `customize.toml`.
2. Check whether `epic-catalog.md` exists.
3. Check whether `story-catalog.md` exists.
4. Check workflow status if available.
5. Extract from Epic Catalog:

   * epic IDs;
   * epic names;
   * priority;
   * release group;
   * dependency;
   * risks/blockers.
6. Extract from Story Catalog:

   * story IDs;
   * story titles;
   * epic mapping;
   * story type;
   * priority;
   * status;
   * acceptance criteria;
   * test expectations;
   * dependencies;
   * risks/blockers.
7. Identify candidate stories.
8. Determine sprint scope.
9. Determine sprint goal.
10. Determine sprint duration and capacity handling.
11. Check whether existing `sprint-plan.md` should be created or updated.
12. Decide whether to continue, draft with gaps, route back, or stop.

## Sprint Readiness Lens

Before selecting stories, check:

| Area       | Question                                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| Goal       | What should the sprint accomplish?                                              |
| Capacity   | How much work can realistically fit?                                            |
| Priority   | Which stories are P1 or unblock P1 delivery?                                    |
| Dependency | What must be completed first?                                                   |
| Readiness  | Which stories are ready or need readiness check?                                |
| Risk       | Which blockers could derail the sprint?                                         |
| Balance    | Does the sprint include test, quality, CI/CD, and governance work where needed? |
| Outcome    | What usable increment should exist at sprint end?                               |

## HALT — Epic Catalog Availability

Stop if Epic Catalog is missing.

### Trigger

Use this HALT if:

```text
.agents/des-skill/output/support/epic-catalog.md
```

does not exist, is empty, or does not contain usable epics.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-create-epic`
B. User provides epic list now
C. Continue with Draft sprint plan using inferred epics
D. Stop workflow

### Recommendation

Choose A for clean workflow.

### Required response

Choose A/B/C/D.

## HALT — Story Catalog Availability

Stop if Story Catalog is missing.

### Trigger

Use this HALT if:

```text
.agents/des-skill/output/support/story-catalog.md
```

does not exist, is empty, or does not contain usable stories.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-create-story`
B. User provides story list now
C. Continue with Draft sprint plan using inferred stories
D. Stop workflow

### Recommendation

Choose A for clean workflow.

### Required response

Choose A/B/C/D.

## HALT — Sprint Scope

Stop if sprint planning scope is unclear.

### Decision needed

What should this sprint cover?

### Options

A. Foundation sprint
B. Ingestion + Bronze sprint
C. Silver transformation sprint
D. Gold + quality sprint
E. Orchestration + observability sprint
F. Semantic + serving sprint
G. CI/CD + release readiness sprint
H. Mixed MVP sprint
I. Correct-course recovery sprint
J. Custom sprint scope

### Recommendation

Choose A for first implementation sprint. Choose B after foundation is ready.

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

## HALT — Sprint Goal

Stop if sprint goal is unclear.

### Decision needed

What is the sprint goal?

### Options

A. Establish project foundation and baseline CI
B. Deliver secure source access and first ingestion path
C. Deliver first Bronze dataset for P1 source
D. Deliver first trusted Silver dataset
E. Deliver first Gold output for P1 business question
F. Deliver quality gates and orchestration around P1 output
G. Deliver semantic/serving output for consumer review
H. Prepare release readiness
I. Resolve blocker/correct-course item
J. User provides custom sprint goal

### Recommendation

Choose A for Sprint 1. Choose B/C for first data delivery sprint.

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

## HALT — Sprint Duration and Capacity

Stop if duration/capacity is needed but missing.

### Decision needed

How should capacity be handled?

### Options

A. Use story count only
B. Use simple T-shirt sizing
C. Use story points
D. Use developer-days
E. Use agent-days
F. Use one-week sprint assumption
G. Use two-week sprint assumption
H. User provides capacity
I. Keep capacity Draft

### Recommendation

Choose A or B for agentic workflows. Choose G for team sprint planning.

### Required response

Choose A/B/C/D/E/F/G/H/I.

## HALT — Task Breakdown Request Detected

Stop if the user wants detailed technical tasks rather than sprint planning.

### Trigger

Use this HALT if the user asks:

* chia task code;
* tạo subtasks;
* tạo checklist cho developer;
* viết implementation task;
* tạo task cho Codex.

### Decision needed

Continue sprint planning or route to task breakdown?

### Options

A. Continue sprint planning
B. Finish sprint plan first, then recommend `des-story-readiness-check`
C. Stop and route to `des-dev-task-breakdown`
D. Create sprint plan with task-breakdown placeholders only

### Recommendation

Choose B unless a sprint plan already exists and a story is ready.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* Epic Catalog and Story Catalog are available or Draft continuation is approved;
* sprint scope is selected;
* sprint goal is selected;
* duration/capacity handling is selected;
* candidate stories are identified;
* existing sprint plan is checked;
* the agent is ready to select stories.

## Next Step

After completion, load only:

```text
steps/step-02-sprint-selection-and-planning.md
```
