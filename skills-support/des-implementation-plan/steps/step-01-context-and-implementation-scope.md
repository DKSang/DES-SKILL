# Step 01 — Context and Implementation Scope

## Goal

Confirm that `des-implementation-plan` is the correct support skill and select the ready stories/tasks to include in the implementation plan.

## Required Inputs

Required:

```text
_des-output/implementation-artifacts/dev-task-breakdown.md
```

Recommended:

```text
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/epic-catalog.md
```

Useful DES artifacts:

```text
_des-output/planning-artifacts/07-architecture-decision-record.md
_des-output/planning-artifacts/13-transformation-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
```

Existing output to check:

```text
_des-output/implementation-artifacts/implementation-plan.md
```

## Actions

1. Read `customize.toml`.
2. Check whether `dev-task-breakdown.md` exists.
3. Check sprint plan and story readiness report if available.
4. Extract:

   * selected stories;
   * ready stories;
   * ordered task list;
   * task dependencies;
   * test tasks;
   * quality/contract/security tasks;
   * affected areas;
   * implementation risks;
   * coding-agent handoff prompt from task breakdown.
5. Determine implementation scope.
6. Determine whether plan is for:

   * one story;
   * all selected sprint stories;
   * one epic;
   * foundation sprint;
   * full MVP increment.
7. Check existing `implementation-plan.md` if updating.
8. Decide whether to continue, draft with gaps, route back, or stop.

## Implementation Scope Lens

Use this lens:

| Area       | Question                                     |
| ---------- | -------------------------------------------- |
| Story      | Which story/stories are being implemented?   |
| Task       | Which tasks are ready?                       |
| Dependency | What must happen before what?                |
| Test       | When should tests run?                       |
| Quality    | When do quality gates apply?                 |
| Security   | When do security/governance checks apply?    |
| Docs       | When are docs/metadata/status updated?       |
| Parallel   | What can safely run in parallel?             |
| Stop       | What condition should stop implementation?   |
| Handoff    | What prompt should be given to coding agent? |

## HALT — Dev Task Breakdown Availability

Stop if no usable task breakdown exists.

### Trigger

Use this HALT if:

```text
_des-output/implementation-artifacts/dev-task-breakdown.md
```

is missing, empty, or does not contain usable ready tasks.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-dev-task-breakdown`
B. User provides task breakdown now
C. Continue with Draft implementation plan using available context
D. Stop workflow

### Recommendation

Choose A for clean workflow.

### Required response

Choose A/B/C/D.

## HALT — Implementation Scope

Stop if implementation scope is unclear.

### Decision needed

What should this implementation plan cover?

### Options

A. One selected ready story
B. All ready stories in sprint plan
C. One epic’s ready stories
D. Foundation implementation increment
E. Ingestion/Bronze implementation increment
F. Full MVP implementation increment
G. Custom scope

### Recommendation

Choose A for precise agent handoff. Choose B for sprint-level execution plan.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Code Implementation Request Detected

Stop if the user asks to implement immediately.

### Trigger

Use this HALT if the user asks:

* write code;
* modify repo;
* create files;
* run commands;
* execute tests;
* deploy.

### Decision needed

Continue planning or move to implementation?

### Options

A. Continue implementation planning only
B. Finish implementation plan first, then hand off to coding agent
C. Stop planning and start implementation
D. Create only a coding-agent prompt

### Recommendation

Choose B or D.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* dev task breakdown is available or Draft continuation is approved;
* implementation scope is selected;
* ready stories/tasks are identified;
* dependencies and checkpoints are extracted;
* relevant DES/support artifacts are identified;
* existing implementation plan is checked;
* the agent is ready to sequence implementation.

## Next Step

After completion, load only:

```text
steps/step-02-implementation-sequencing.md
```
