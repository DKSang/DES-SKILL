# des-implementation-plan

## Purpose

Use this support skill to create an implementation execution plan from ready stories and dev task breakdowns.

This skill sequences implementation work across one or more stories, defines checkpoints, validation order, dependency handling, test timing, documentation updates, status updates, and coding-agent handoff guidance.

The goal is to turn ready task breakdowns into a safe, ordered, executable implementation plan.

## When To Use

Use this skill when:

- `des-dev-task-breakdown` has created task breakdowns for one or more ready stories;
- the user wants an implementation plan before coding;
- multiple stories or tasks need sequencing;
- the user asks for execution order, implementation roadmap, agent handoff plan, coding workflow, or implementation checklist;
- the workflow router selects `des-implementation-plan`.

Use this skill before:

- coding;
- Codex implementation;
- notebook/pipeline/model development;
- pull request creation;
- code review.

Do not use this skill to create new epics, create new stories, plan sprint scope, break stories into tasks, write production code, run tests, deploy, or review code.

## Required Inputs

The agent should look for:

```text
.agents/des-skill/output/support/sprint-plan.md
.agents/des-skill/output/support/story-readiness-report.md
.agents/des-skill/output/support/dev-task-breakdown.md
```

Recommended:

```text
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/output/support/story-catalog.md
```

Useful DES artifacts:

```text
.agents/des-skill/output/07-architecture-decision-record.md
.agents/des-skill/output/13-transformation-specification.md
.agents/des-skill/output/14-data-quality-specification.md
.agents/des-skill/output/15-orchestration-observability-specification.md
.agents/des-skill/output/18-lineage-metadata-specification.md
.agents/des-skill/output/19-governance-security-specification.md
.agents/des-skill/output/20-cost-performance-optimization-specification.md
.agents/des-skill/output/21-cicd-testing-specification.md
```

The most important inputs are:

* selected sprint stories;
* stories marked ready;
* dev task breakdown;
* task dependencies;
* test tasks;
* quality/contract/security tasks;
* CI/CD expectations;
* implementation risks;
* repo/folder context, if available.

If no dev task breakdown exists, stop and route back to `des-dev-task-breakdown`.

## Output

Create or update:

```text
.agents/des-skill/output/support/implementation-plan.md
```

The Implementation Plan must include:

* implementation summary;
* implementation scope;
* selected stories/tasks;
* execution strategy;
* dependency sequence;
* parallelization opportunities;
* implementation phases;
* checkpoint plan;
* validation and test execution order;
* quality/contract/security gate timing;
* documentation and metadata update plan;
* status update plan;
* rollback or abort conditions;
* coding agent handoff prompt;
* implementation readiness decision.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-implementation-scope.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not write implementation code.
8. Do not invent completed tests, repository state, or deployment evidence.
9. Do not schedule blocked tasks as executable work.
10. Do not ignore quality, contract, security, documentation, and CI/CD checkpoints.
11. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check sprint plan, story readiness report, and dev task breakdown.
2. Select implementation scope.
3. Extract ready stories and tasks.
4. Sequence tasks by dependency.
5. Identify parallelizable work.
6. Define validation checkpoints.
7. Define test, quality, contract, security, and CI/CD timing.
8. Define docs/status update points.
9. Define abort/rollback conditions.
10. Create implementation handoff prompt.
11. Recommend implementation or `des-code-review` after implementation.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat implementation plan as code;
* include blocked tasks as normal executable work;
* skip tests until the very end if early validation is possible;
* ignore quality/contract/security tasks;
* ignore docs/metadata/status updates;
* claim implementation is complete;
* create code review before implementation exists;
* over-parallelize tasks with hard dependencies.

## Implementation Planning Principles

A good implementation plan should:

* be dependency-aware;
* be checkpoint-driven;
* validate early and often;
* include test/quality/security work in the flow;
* identify safe parallel work;
* keep scope tied to selected stories;
* define when to stop and ask for clarification;
* provide a clear coding-agent handoff prompt.

## HALT Policy

This skill must stop when implementation sequencing cannot be safely determined.

Stop especially when:

* dev task breakdown is missing;
* no ready story/task exists;
* implementation scope is unclear;
* task dependencies are missing;
* tests or validation checks are missing;
* quality/security checkpoints are missing;
* repo context is required but absent;
* user asks to write code immediately.
