# des-correct-course

## Purpose

Use this support skill when a DES implementation workflow, sprint, story, artifact, or release path has gone off track and needs correction.

This skill diagnoses the issue, identifies the root cause, determines the correct route back to a DES main phase or support skill, and creates a correction action plan.

The goal is to safely realign the project without blindly continuing implementation on weak assumptions.

## When To Use

Use this skill when:

- retrospective recommends correction;
- release readiness is blocked;
- code review finds major design mismatch;
- story readiness fails due to missing upstream artifact;
- sprint plan is overloaded or dependency order is wrong;
- implementation reveals missing requirement, KPI, contract, quality rule, governance rule, or architecture decision;
- the user says the workflow is wrong, unclear, blocked, or needs adjustment;
- the workflow router selects `des-correct-course`.

Use this skill after:

- `des-retrospective`;
- `des-release-readiness-review`;
- `des-code-review`;
- `des-story-readiness-check`;
- failed implementation attempt;
- major blocker discovery.

Do not use this skill to write code, fix code directly, deploy, create a full new sprint plan, or rewrite all artifacts blindly.

## Required Inputs

The agent should look for one or more of:

```text
_des-output/implementation-artifacts/retrospective-report.md
_des-output/implementation-artifacts/release-readiness-report.md
_des-output/implementation-artifacts/code-review-report.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/epic-catalog.md
_des-output/implementation-artifacts/des-workflow-status.md
```

Useful DES main artifacts:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
_des-output/planning-artifacts/02-business-question-catalog.md
_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
_des-output/planning-artifacts/04-data-product-specification.md
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/planning-artifacts/06-conceptual-domain-model.md
_des-output/planning-artifacts/07-architecture-decision-record.md
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/planning-artifacts/13-transformation-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/16-semantic-model-specification.md
_des-output/planning-artifacts/17-serving-layer-specification.md
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/planning-artifacts/22-project-evaluation-report.md
```

If no issue/blocker is provided, stop and ask the user to identify the symptom or failed decision.

## Output

Create or update:

```text
_des-output/implementation-artifacts/correct-course-plan.md
```

The Correct Course Plan must include:

* correction summary;
* issue scope;
* current workflow state;
* symptom register;
* root cause analysis;
* impacted artifacts;
* impacted epics/stories/sprint items;
* correction route;
* required artifact updates;
* required support skill reruns;
* implementation/release impact;
* risk of not correcting;
* action plan;
* workflow status update recommendation;
* next support skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and relevant upstream artifacts.
4. Load only `steps/step-01-context-and-issue-triage.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not fix implementation directly.
8. Do not rewrite upstream artifacts without identifying which artifact and why.
9. Do not continue implementation if root cause is a missing P1 requirement, KPI, contract, quality gate, or governance rule.
10. Before marking the plan as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Identify the issue or blocker.
2. Classify the issue type.
3. Determine root cause.
4. Identify impacted artifacts, epics, stories, sprint items, and release scope.
5. Select correction route.
6. Define action plan.
7. Update workflow status recommendation.
8. Recommend next support skill or DES main phase.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* continue delivery on unresolved upstream ambiguity;
* downgrade blockers to minor risks without reason;
* fix symptoms without root cause;
* route everything to implementation by default;
* route back to a main DES phase unless the missing context belongs there;
* rerun all 22 phases unnecessarily;
* erase previous evidence;
* claim correction is complete before affected artifacts are updated.

## Correction Route Types

Use these route types:

```text
Route back to DES main phase
Route back to support skill
Refine story
Replan sprint
Update implementation plan
Request evidence
Block release
Downgrade release target
Close issue as accepted risk
```

## HALT Policy

This skill must stop when correction cannot be safely determined.

Stop especially when:

* issue symptom is unclear;
* root cause is unknown;
* impacted artifact is unclear;
* correction route is unclear;
* blocker severity is unclear;
* release impact is unclear;
* user asks to fix code directly.
