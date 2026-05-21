# Step 01 — Context and Ready Story Selection

## Goal

Confirm that `des-dev-task-breakdown` is the correct support skill and select stories that are ready for development task decomposition.

## Required Inputs

Required:

```text
.agents/des-skill/output/support/story-catalog.md
.agents/des-skill/output/support/story-readiness-report.md
```

Recommended:

```text
.agents/des-skill/output/support/sprint-plan.md
.agents/des-skill/output/support/epic-catalog.md
```

Relevant DES artifacts depend on selected story type.

Existing output to check:

```text
.agents/des-skill/output/support/dev-task-breakdown.md
```

## Actions

1. Read `customize.toml`.
2. Check whether `story-catalog.md` exists.
3. Check whether `story-readiness-report.md` exists.
4. Extract stories marked:

```text
Ready for Task Breakdown
```

5. If sprint plan exists, prioritize sprint-selected stories.
6. Extract for each ready story:

   * story ID;
   * title;
   * epic ID;
   * story type;
   * priority;
   * acceptance criteria;
   * test expectations;
   * quality/contract expectations;
   * governance/security expectations;
   * dependencies;
   * risks.
7. Identify target story or stories for task breakdown.
8. Check repository/folder structure context from architecture/CI/CD artifacts if available.
9. Check existing `dev-task-breakdown.md` if updating.
10. Decide whether to continue, draft with gaps, route back, or stop.

## HALT — Ready Story Availability

Stop if no story is ready.

### Trigger

Use this HALT if:

* `story-readiness-report.md` is missing;
* no story is marked `Ready for Task Breakdown`;
* selected story is `Blocked`, `Needs Refinement`, or `Deferred`.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-story-readiness-check`
B. User selects a story and accepts risk
C. Continue with Draft task breakdown
D. Stop workflow

### Recommendation

Choose A for clean workflow.

### Required response

Choose A/B/C/D.

## HALT — Story Selection

Stop if multiple ready stories exist and selection is unclear.

### Decision needed

Which story should be broken down?

### Options

A. First ready story in sprint plan
B. All ready stories in sprint plan
C. One user-specified story
D. All ready P1 stories
E. Stories from one epic
F. Custom selection

### Recommendation

Choose A for focused task breakdown. Choose B only if stories are closely related.

### Required response

Choose A/B/C/D/E/F.

## HALT — Task Breakdown Scope

Stop if task breakdown depth is unclear.

### Decision needed

How detailed should the task breakdown be?

### Options

A. High-level developer checklist
B. Standard dev tasks with validation checks
C. Detailed agent-executable task plan
D. Implementation plan with file-level guidance
E. Custom depth

### Recommendation

Choose C for Codex/agent workflows.

### Required response

Choose A/B/C/D/E.

## HALT — Code Implementation Request Detected

Stop if the user asks to write code immediately.

### Trigger

Use this HALT if the user asks:

* write code now;
* implement the story;
* create files;
* modify repo;
* run tests;
* deploy.

### Decision needed

Continue task planning or move to implementation?

### Options

A. Continue task breakdown only
B. Finish task breakdown first, then hand off to implementation
C. Stop planning and implement directly
D. Create implementation prompt for coding agent only

### Recommendation

Choose B or D.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* Story Catalog and Readiness Report are available;
* selected ready story/stories are identified;
* task breakdown scope is selected;
* relevant DES artifacts are identified;
* repo/folder context is checked;
* the agent is ready to decompose story into tasks.

## Next Step

After completion, load only:

```text
steps/step-02-dev-task-decomposition.md
```
