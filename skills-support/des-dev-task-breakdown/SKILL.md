# des-dev-task-breakdown

## Purpose

Use this support skill to break one or more ready implementation stories into detailed development tasks.

This skill converts a story that has passed readiness checking into an ordered task plan for developers or coding agents.

The goal is to provide enough implementation guidance to begin development without writing the implementation code inside the planning artifact.

## When To Use

Use this skill when:

- `des-story-readiness-check` has marked one or more stories as `Ready for Task Breakdown`;
- the user wants detailed implementation tasks for a story;
- the user asks to break down a story into developer tasks, subtasks, coding steps, implementation checklist, or agent task plan;
- the workflow router selects `des-dev-task-breakdown`.

Use this skill before:

- coding;
- Codex implementation;
- notebook/pipeline/model development;
- implementation plan execution;
- code review.

Do not use this skill to create new stories, plan sprints, write production code, write full tests, execute deployment, or perform code review.

## Required Inputs

The agent should look for:

```text
.agents/des-skill/output/support/story-catalog.md
.agents/des-skill/output/support/story-readiness-report.md
```

Recommended:

```text
.agents/des-skill/output/support/sprint-plan.md
.agents/des-skill/output/support/epic-catalog.md
```

Useful DES artifacts depend on story type:

```text
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
```

The most important input is a story with:

* story ID;
* epic mapping;
* clear scope;
* acceptance criteria;
* test expectations;
* dependencies;
* quality expectations;
* governance/security expectations;
* readiness status.

If no selected story is marked `Ready for Task Breakdown`, stop and route back to `des-story-readiness-check`.

## Output

Create or update:

```text
.agents/des-skill/output/support/dev-task-breakdown.md
```

The Dev Task Breakdown must include:

* task breakdown summary;
* selected ready story;
* implementation context;
* affected artifact/file areas;
* ordered task list;
* task-level acceptance checks;
* test task list;
* quality/contract/security tasks;
* dependency and sequencing notes;
* implementation risks;
* handoff prompt for coding agent;
* ready-for-implementation status.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-ready-story-selection.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Only break down stories marked `Ready for Task Breakdown`, unless the user explicitly accepts risk.
8. Do not write production code.
9. Do not fabricate repository file paths unless the repo structure artifact supports them.
10. Do not remove quality, contract, security, or CI/CD work from the task breakdown.
11. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check Story Catalog and Story Readiness Report.
2. Select ready story or stories.
3. Load relevant DES artifacts.
4. Identify implementation area and likely affected files/folders.
5. Break story into ordered development tasks.
6. Add task-level acceptance checks.
7. Add testing tasks.
8. Add quality, contract, security, metadata, and documentation tasks where needed.
9. Create Dev Task Breakdown.
10. Recommend implementation or `des-implementation-plan`.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* break down blocked stories as if ready;
* write code in this skill;
* invent exact file paths without repo context;
* ignore tests;
* ignore quality/contract/security tasks;
* turn one story into an unbounded implementation plan;
* mix multiple unrelated stories into one task breakdown unless explicitly requested;
* recommend implementation if blockers remain.

## Task Sizing Guidance

A good dev task should:

* be small enough for a developer/agent to complete;
* have a clear output;
* have a check or validation method;
* fit within the story scope;
* not require unresolved upstream decisions;
* not combine unrelated concerns.

## HALT Policy

This skill must stop when task breakdown cannot be safely produced.

Stop especially when:

* no ready story is selected;
* readiness report is missing;
* story has unresolved blockers;
* acceptance criteria are missing;
* test expectations are missing;
* repo/file structure is unknown but exact paths are required;
* security or quality implications are unclear;
* user asks to implement code directly.
