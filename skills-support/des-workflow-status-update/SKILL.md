# des-workflow-status-update

## Purpose

Use this support skill to update the DES workflow status file after main lifecycle phases, support skills, sprint planning, story readiness, implementation planning, code review, release readiness, retrospective, or correct-course decisions.

This skill creates or updates a single workflow status artifact that records current progress, artifact states, open blockers, active stories, release decisions, correction routes, and next recommended skill.

The goal is to provide continuity across agents, sessions, support skills, and implementation cycles.

## When To Use

Use this skill when:

- a DES main phase completes;
- a support skill completes;
- a sprint plan changes;
- a story status changes;
- a release readiness decision changes;
- a correct-course plan changes the route;
- the user asks “đang ở đâu rồi”, “cập nhật trạng thái”, “workflow status”, “next step là gì”;
- another support skill recommends `des-workflow-status-update`.

Use this skill after:

- `des-create-epic`;
- `des-create-story`;
- `des-sprint-planning`;
- `des-story-readiness-check`;
- `des-dev-task-breakdown`;
- `des-implementation-plan`;
- `des-code-review`;
- `des-release-readiness-review`;
- `des-retrospective`;
- `des-correct-course`;
- any DES main phase.

Do not use this skill to create new epics, stories, sprint plans, tasks, implementation plans, code reviews, or release reviews.

## Required Inputs

The agent should inspect available status sources:

```text
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/output/support/story-catalog.md
.agents/des-skill/output/support/sprint-plan.md
.agents/des-skill/output/support/story-readiness-report.md
.agents/des-skill/output/support/dev-task-breakdown.md
.agents/des-skill/output/support/implementation-plan.md
.agents/des-skill/output/support/code-review-report.md
.agents/des-skill/output/support/release-readiness-report.md
.agents/des-skill/output/support/retrospective-report.md
.agents/des-skill/output/support/correct-course-plan.md
```

It should also inspect DES main phase outputs where available:

```text
.agents/des-skill/output/01-business-discovery-brief.md
.agents/des-skill/output/02-business-question-catalog.md
.agents/des-skill/output/03-requirements-and-kpi-catalog.md
.agents/des-skill/output/04-data-product-specification.md
.agents/des-skill/output/05-data-source-inventory.md
.agents/des-skill/output/06-conceptual-domain-model.md
.agents/des-skill/output/07-architecture-decision-record.md
.agents/des-skill/output/08-ingestion-specification.md
.agents/des-skill/output/09-bronze-layer-specification.md
.agents/des-skill/output/10-silver-layer-specification.md
.agents/des-skill/output/11-gold-layer-specification.md
.agents/des-skill/output/12-data-contract-specification.md
.agents/des-skill/output/13-transformation-specification.md
.agents/des-skill/output/14-data-quality-specification.md
.agents/des-skill/output/15-orchestration-observability-specification.md
.agents/des-skill/output/16-semantic-model-specification.md
.agents/des-skill/output/17-serving-layer-specification.md
.agents/des-skill/output/18-lineage-metadata-specification.md
.agents/des-skill/output/19-governance-security-specification.md
.agents/des-skill/output/20-cost-performance-optimization-specification.md
.agents/des-skill/output/21-cicd-testing-specification.md
.agents/des-skill/output/22-project-evaluation-report.md
```

Existing output to update:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

## Output

Create or update:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

The workflow status file must include:

* project metadata;
* main DES phase status;
* support skill status;
* current workflow state;
* active epic;
* active stories;
* sprint status;
* readiness status;
* implementation status;
* code review status;
* release readiness status;
* retrospective status;
* correct-course status;
* open blockers;
* open risks;
* required next actions;
* next recommended skill;
* routing decision.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `status_file`, `template_file`, `checklist_file`, and status sources.
4. Load only `steps/step-01-context-and-status-scan.md`.
5. Do not load step-02 or step-03 until instructed by the current step.
6. Stop at every `HALT` point.
7. Do not invent completed statuses without evidence.
8. Mark unknown items as `Unknown`, not `Done`.
9. Mark missing artifact as `Missing`, not `Blocked`, unless blocker evidence exists.
10. Do not silently overwrite existing status history.
11. Before marking the status update Done, run the configured checklist.

## Process Overview

This skill will:

1. Scan available DES main outputs.
2. Scan available support outputs.
3. Read existing workflow status if present.
4. Determine current workflow state.
5. Update statuses.
6. Identify blockers and next actions.
7. Recommend next skill or route.
8. Save updated workflow status.
9. Run checklist.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* claim Done without artifact/checklist evidence;
* mark blocked items as done;
* delete history unless explicitly instructed;
* confuse Draft with Blocked;
* route to implementation when story readiness is not passed;
* route to release when code review or release evidence is missing;
* route to next sprint while correct-course blocker is open.

## Status Values

Use these values:

```text
Not Started
Draft
In Progress
Done
Done with Risks
Blocked
Deferred
Missing
Unknown
Not Applicable
```

## Workflow States

Use these states:

```text
Main Lifecycle Design
Epic Planning
Story Planning
Sprint Planning
Story Readiness
Task Breakdown
Implementation Planning
Implementation In Progress
Code Review
Release Readiness
Retrospective
Correct Course
Ready for Next Sprint
Closed
Blocked
Unknown
```

## HALT Policy

This skill must stop when status cannot be safely updated.

Stop especially when:

* existing status conflicts with artifact evidence;
* user wants to overwrite history;
* next route is ambiguous;
* blocker severity is unclear;
* artifact evidence is missing but user wants Done;
* correction route conflicts with release readiness.
