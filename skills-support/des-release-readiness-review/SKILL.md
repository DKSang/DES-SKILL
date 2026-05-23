# des-release-readiness-review

## Purpose

Use this support skill to evaluate whether implemented DES stories, sprint outputs, or a data product increment are ready for release, promotion, demo, handoff, or stakeholder review.

This skill reviews release scope, story completion, acceptance criteria, test evidence, data quality evidence, contract validation, CI/CD gates, governance/security controls, observability, rollback readiness, documentation, metadata, and release risks.

The goal is to prevent unsafe, incomplete, untested, or ungoverned data engineering work from being released.

## When To Use

Use this skill when:

- implementation exists;
- code review has been completed or is available;
- the user wants release readiness review;
- the user asks whether something is ready to merge, deploy, promote, demo, handoff, or release;
- a sprint increment needs final review;
- a data product output is close to release;
- the workflow router selects `des-release-readiness-review`.

Use this skill after:

- `des-code-review`;
- implementation;
- test execution;
- quality gate execution;
- CI/CD run, if available.

Do not use this skill to implement fixes, write code, create stories, plan sprint scope, run deployment, or perform production release directly.

## Required Inputs

The agent should look for:

```text
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/code-review-report.md
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
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/planning-artifacts/22-project-evaluation-report.md
```

The agent also needs release evidence where available:

* changed files;
* implementation summary;
* code review result;
* test results;
* CI/CD run result;
* data quality results;
* contract validation results;
* security/secret scan result;
* deployment or promotion evidence;
* rollback plan;
* release notes;
* known issues;
* stakeholder approval.

If no release evidence exists, stop and ask whether to continue as a design/dry-run readiness review.

## Output

Create or update:

```text
_des-output/implementation-artifacts/release-readiness-report.md
```

The Release Readiness Report must include:

* release readiness summary;
* release scope;
* release candidate inventory;
* story completion review;
* acceptance criteria review;
* code review status;
* test evidence review;
* data quality evidence review;
* data contract evidence review;
* CI/CD gate review;
* governance and security review;
* orchestration and observability review;
* cost/performance risk review;
* documentation and metadata review;
* rollback and recovery review;
* release risks and blockers;
* release decision;
* required actions;
* handoff notes;
* next support skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-release-scope.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not approve release if blocking evidence is missing.
8. Do not claim tests, quality, contracts, security, or deployment passed without evidence.
9. Do not hide known blockers as minor risks.
10. Do not execute deployment or promotion.
11. Before marking the report as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check release scope and evidence.
2. Identify stories/outputs included in release candidate.
3. Review story completion and acceptance criteria.
4. Review code review result.
5. Review tests, quality, contract, security, CI/CD, observability, docs, and rollback evidence.
6. Identify blockers and release risks.
7. Assign release decision.
8. Create Release Readiness Report.
9. Recommend next support skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* approve release without evidence;
* approve release with unresolved Blocker findings;
* approve release if P1 quality gates failed;
* approve release if contract-breaking changes are unresolved;
* approve release if secrets or sensitive data exposure exists;
* approve production release without rollback path;
* confuse demo readiness with production readiness;
* treat code review approval as enough for production release;
* execute deployment.

## Release Decisions

Use these decisions:

```text
Ready for Release
Ready for Demo
Ready for Internal Review
Ready with Risks
Changes Required
Blocked
Needs More Evidence
```

## HALT Policy

This skill must stop when release readiness cannot be safely judged.

Stop especially when:

* release scope is unclear;
* code review result is missing;
* test evidence is missing;
* quality evidence is missing for P1 data outputs;
* contract evidence is missing for contracted outputs;
* security/governance evidence is missing for sensitive or serving outputs;
* rollback path is unclear;
* release target is unclear;
* user asks to deploy directly.
