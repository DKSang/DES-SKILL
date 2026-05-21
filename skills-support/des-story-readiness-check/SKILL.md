# des-story-readiness-check

## Purpose

Use this support skill to evaluate whether selected implementation stories are ready for development.

This skill checks story clarity, artifact traceability, input/output definition, acceptance criteria, test expectations, data quality expectations, contract alignment, governance/security constraints, dependencies, blockers, and implementation readiness.

The goal is to prevent unclear or unsafe stories from entering implementation.

## When To Use

Use this skill when:

- `des-create-story` has produced a Story Catalog;
- `des-sprint-planning` has selected candidate sprint stories;
- the user wants to check whether a story is ready for development;
- the user asks if a story is ready, blocked, too vague, too large, missing acceptance criteria, or safe to implement;
- the workflow router selects `des-story-readiness-check`.

Use this skill before:

- `des-dev-task-breakdown`;
- implementation by Codex/agent/developer;
- sprint commitment;
- code generation;
- pipeline implementation.

Do not use this skill to create new stories, plan sprints, break stories into detailed tasks, write code, or perform code review.

## Required Inputs

The agent should look for:

```text
.agents/des-skill/output/support/story-catalog.md
.agents/des-skill/output/support/sprint-plan.md
```

Useful supporting artifacts:

```text
.agents/des-skill/output/support/epic-catalog.md
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
```

The most important inputs depend on story type:

* Ingestion story: source inventory, ingestion spec, Bronze spec, quality spec, governance/security, CI/CD.
* Bronze story: ingestion spec, Bronze spec, metadata spec, quality spec, CI/CD.
* Silver story: domain model, Silver spec, transformation spec, contract spec, quality spec, metadata spec, CI/CD.
* Gold story: business questions, KPI catalog, Gold spec, transformation spec, contract spec, quality spec, semantic spec, CI/CD.
* Serving story: semantic spec, serving spec, governance/security, lineage/metadata, CI/CD.
* CI/CD story: CI/CD spec, quality spec, contract spec, governance/security, orchestration spec.

If the Story Catalog is missing, stop and ask whether to route back to `des-create-story`.

## Output

Create or update:

```text
.agents/des-skill/output/support/story-readiness-report.md
```

The Story Readiness Report must include:

* readiness summary;
* selected stories reviewed;
* readiness criteria;
* story-by-story evaluation;
* missing context;
* blockers;
* risks;
* required upstream artifact fixes;
* recommended status per story;
* recommended next action;
* handoff guidance to `des-dev-task-breakdown`.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-story-selection.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not create new stories unless routing back to `des-create-story`.
8. Do not create detailed dev tasks.
9. Do not write implementation code.
10. Do not mark a story Ready if required acceptance criteria, test expectations, dependencies, quality/security expectations, or artifact traceability are missing.
11. Before marking the report as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check Story Catalog and Sprint Plan.
2. Select stories to evaluate.
3. Identify required DES artifacts for each story type.
4. Evaluate story clarity and readiness.
5. Identify blockers, risks, missing context, and dependency conflicts.
6. Assign readiness status.
7. Create Story Readiness Report.
8. Recommend `des-dev-task-breakdown` for Ready stories.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* approve vague stories;
* approve stories without acceptance criteria;
* approve stories without test expectations;
* approve stories with unresolved dependency blockers;
* approve stories that conflict with DES artifacts;
* approve data stories without quality expectations;
* approve serving/API/AI stories without governance/security expectations;
* convert readiness check into task breakdown;
* create sprint plan in this skill;
* write code in this skill.

## Readiness Statuses

Use these statuses:

```text
Ready for Task Breakdown
Needs Refinement
Blocked
Deferred
Route Back to DES Phase
Route Back to Support Skill
```

## HALT Policy

This skill must stop when readiness cannot be safely determined.

Stop especially when:

* story selection is unclear;
* Story Catalog is missing;
* story does not map to an epic;
* story does not map to DES artifacts;
* acceptance criteria are missing;
* test expectations are missing;
* data contract or quality rule is unclear;
* security/governance constraints are unclear;
* dependency is unresolved;
* story is too broad or too task-level.
