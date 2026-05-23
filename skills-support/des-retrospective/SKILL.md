# des-retrospective

## Purpose

Use this support skill to create a retrospective report for a DES implementation sprint, release cycle, demo cycle, internal review, handoff, or workflow iteration.

This skill evaluates what was planned, what was completed, what was blocked, what went well, what did not go well, which DES artifacts or support skills caused friction, and what should be improved in the next iteration.

The goal is to create a feedback loop for continuous improvement across data engineering delivery, artifact quality, implementation workflow, testing, release readiness, and stakeholder value.

## When To Use

Use this skill when:

- a sprint, implementation cycle, release readiness review, demo, or handoff has completed;
- the user wants to summarize lessons learned;
- the user asks for retrospective, sprint review, post-mortem, learning report, next sprint recommendations, or improvement plan;
- the workflow router selects `des-retrospective`.

Use this skill after:

- `des-release-readiness-review`;
- `des-code-review`;
- implementation cycle;
- stakeholder review;
- sprint closeout.

Do not use this skill to create new stories, implement fixes, rewrite DES artifacts directly, deploy, or perform code review.

## Required Inputs

The agent should look for:

```text
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/code-review-report.md
_des-output/implementation-artifacts/release-readiness-report.md
_des-output/implementation-artifacts/des-workflow-status.md
```

Recommended:

```text
_des-output/implementation-artifacts/epic-catalog.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/implementation-plan.md
```

Useful DES artifacts:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
_des-output/planning-artifacts/02-business-question-catalog.md
_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/planning-artifacts/22-project-evaluation-report.md
```

Optional evidence:

* completed stories;
* incomplete stories;
* blockers;
* code review findings;
* release readiness decision;
* test failures;
* quality failures;
* stakeholder feedback;
* usage feedback;
* incident notes;
* implementation notes;
* team/agent notes.

If sprint or release evidence is missing, the agent can continue as a lightweight retrospective, but must mark evidence gaps explicitly.

## Output

Create or update:

```text
_des-output/implementation-artifacts/retrospective-report.md
```

The Retrospective Report must include:

* retrospective summary;
* retrospective scope;
* planned vs completed review;
* story outcome review;
* release/readiness outcome;
* what went well;
* what did not go well;
* blockers and root causes;
* artifact quality feedback;
* support skill workflow feedback;
* technical lessons learned;
* data quality/contract lessons learned;
* governance/security lessons learned;
* CI/CD/release lessons learned;
* stakeholder/user feedback;
* action items;
* next sprint recommendations;
* correct-course recommendations;
* workflow status update recommendations.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-retro-scope.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not invent completed stories, test results, stakeholder feedback, or release outcomes.
8. Do not hide blockers.
9. Do not rewrite upstream artifacts directly.
10. Before marking the report as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check sprint/release/workflow evidence.
2. Define retrospective scope.
3. Compare planned vs completed work.
4. Analyze blockers and causes.
5. Extract lessons learned.
6. Identify process/artifact/support-skill improvements.
7. Recommend next sprint or correct-course actions.
8. Create Retrospective Report.
9. Recommend next support skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* claim completion without evidence;
* treat blockers as minor if they blocked release/sprint goal;
* blame individuals;
* skip root cause analysis;
* skip action items;
* skip next iteration recommendation;
* convert retro into implementation plan;
* silently change story/sprint status without status update workflow.

## Retrospective Decision Options

Use these outcomes:

```text
Continue to next sprint
Run des-correct-course
Update workflow status
Route back to main DES phase
Close iteration
Blocked pending evidence
```

## HALT Policy

This skill must stop when retrospective cannot be grounded.

Stop especially when:

* retrospective scope is unclear;
* planned work is unknown;
* completed work is unknown;
* release/readiness outcome is unknown;
* blocker handling is unclear;
* next iteration direction is unclear;
* user asks to fix implementation directly.
