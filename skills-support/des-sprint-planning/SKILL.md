# des-sprint-planning

## Purpose

Use this support skill to create a Sprint Plan from the Epic Catalog, Story Catalog, and available DES workflow status.

This skill selects implementation stories for a sprint based on sprint goal, priority, dependency order, readiness, risk, release group, and capacity.

The goal is to turn the story backlog into a focused, realistic, dependency-aware sprint plan.

## When To Use

Use this skill when:

- `des-create-story` has produced a Story Catalog;
- `des-create-epic` has produced an Epic Catalog;
- the user wants to plan a sprint;
- the project needs selected sprint stories before readiness check;
- the user asks to choose stories for sprint, create sprint backlog, define sprint goal, or plan the next implementation iteration;
- the workflow router selects `des-sprint-planning`.

Use this skill before:

- `des-story-readiness-check`;
- `des-dev-task-breakdown`;
- implementation by Codex/agent/developer.

Do not use this skill to:

- create new epics;
- create new stories;
- perform story readiness check;
- break stories into developer tasks;
- write code;
- perform code review;
- approve release.

## Required Inputs

The agent should look for:

```text
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/output/support/story-catalog.md
```

Recommended:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Useful DES artifacts when available:

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

The most important inputs are:

* epic priorities;
* story priorities;
* story dependencies;
* story statuses;
* blockers;
* release group;
* sprint duration;
* sprint capacity;
* sprint goal;
* implementation constraints.

If `story-catalog.md` is missing, stop and ask whether to route back to `des-create-story`.

## Output

Create or update:

```text
.agents/des-skill/output/support/sprint-plan.md
```

The Sprint Plan must include:

* sprint plan summary;
* sprint planning scope;
* sprint goal;
* planning inputs;
* sprint capacity and assumptions;
* candidate story pool;
* selected sprint stories;
* deferred stories;
* blocked stories;
* dependency order;
* sprint backlog;
* readiness check plan;
* sprint acceptance criteria;
* definition of ready;
* definition of done;
* risks and mitigations;
* execution guidance;
* assumptions;
* open questions;
* next support skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not create new stories unless routing back to `des-create-story`.
8. Do not break stories into developer tasks.
9. Do not write implementation code.
10. Do not include blocked stories as committed sprint work unless explicitly marked as unblock work or stretch work.
11. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check Epic Catalog and Story Catalog.
2. Check workflow status if available.
3. Determine sprint scope, sprint goal, duration, and capacity.
4. Build candidate story pool.
5. Rank stories by priority, dependency, readiness, risk, and value.
6. Select sprint stories.
7. Identify deferred and blocked stories.
8. Define dependency order.
9. Define readiness check plan.
10. Create Sprint Plan.
11. Recommend `des-story-readiness-check`.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* overload sprint with too many stories;
* ignore dependency order;
* choose Gold stories before required Silver prerequisites unless explicitly planned as mock/design work;
* choose serving stories before Gold/Semantic prerequisites are available;
* include blocked stories as committed work without clear blocker handling;
* ignore CI/CD, testing, quality, contract, or governance work;
* treat sprint planning as task breakdown;
* mark sprint plan Done if sprint goal, selected stories, capacity, dependency order, risks, and readiness plan are missing.

## Sprint Planning Principles

A good sprint plan should:

* have one clear sprint goal;
* contain a realistic number of stories;
* prioritize P1 and dependency-unblocking work;
* avoid mixing too many unrelated themes;
* include testing, quality, and CI/CD work where needed;
* clearly separate committed, stretch, blocked, and deferred work;
* prepare selected stories for `des-story-readiness-check`.

## HALT Policy

This skill must stop when sprint planning cannot be safely inferred.

Stop especially when:

* Story Catalog is missing;
* sprint goal is unclear;
* sprint scope is unclear;
* sprint duration or capacity is unknown and cannot be assumed;
* story selection strategy is unclear;
* selected stories have dependency conflicts;
* blocked stories are being committed without risk handling;
* user asks for task breakdown instead of sprint planning.
