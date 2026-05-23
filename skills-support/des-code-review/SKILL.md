# des-code-review

## Purpose

Use this support skill to review implemented code, notebooks, SQL, pipeline configuration, tests, documentation, or changed files against the selected story, dev task breakdown, implementation plan, and DES lifecycle artifacts.

This skill evaluates whether the implementation satisfies story acceptance criteria, follows scope, includes required tests, respects data contracts, quality expectations, governance/security rules, CI/CD expectations, and does not introduce unsafe or unreviewed changes.

The goal is to produce a structured code review report before merge, release, or handoff.

## When To Use

Use this skill when:

- implementation exists for one or more DES stories;
- the user provides code, a diff, changed files, PR summary, notebook, SQL, dbt model, pipeline config, test output, or implementation summary;
- the user asks for code review, PR review, implementation review, merge readiness, or quality/security review;
- the workflow router selects `des-code-review`.

Use this skill after:

- `des-implementation-plan`;
- implementation by Codex/agent/developer;
- test execution, if available.

Do not use this skill to create new stories, plan sprints, break down tasks, write implementation code, deploy, or approve production release.

## Required Inputs

The agent should look for:

```text
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/implementation-plan.md
```

Recommended:

```text
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/epic-catalog.md
```

Useful DES artifacts depend on implementation type:

```text
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
```

The agent also needs implementation evidence, such as:

* changed files;
* code diff;
* PR description;
* notebook content;
* SQL/dbt/Python/Spark code;
* pipeline configuration;
* test files;
* test results;
* CI/CD result;
* implementation summary from coding agent.

If no implementation evidence is available, stop and ask the user to provide changed files, diff, or implementation summary.

## Output

Create or update:

```text
_des-output/implementation-artifacts/code-review-report.md
```

The Code Review Report must include:

* code review summary;
* review scope;
* reviewed story/tasks;
* implementation evidence reviewed;
* acceptance criteria review;
* task completion review;
* architecture and design alignment review;
* transformation logic review;
* contract review;
* data quality review;
* test coverage review;
* orchestration/observability review;
* governance/security review;
* cost/performance review;
* documentation/metadata/status review;
* findings;
* required changes;
* optional improvements;
* merge readiness decision;
* next recommended support skill.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-review-scope.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not rewrite implementation code unless explicitly requested outside this skill.
8. Do not approve merge if blocking findings remain.
9. Do not ignore missing tests, missing quality checks, secret exposure, sensitive data exposure, or contract breakage.
10. Before marking the report as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check implementation evidence.
2. Identify reviewed story, tasks, and acceptance criteria.
3. Identify relevant DES artifacts.
4. Review implementation against story scope.
5. Review tests, quality, contracts, governance, CI/CD, docs, and metadata.
6. Classify findings by severity.
7. Decide merge readiness.
8. Create Code Review Report.
9. Recommend the next support skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* approve code without seeing implementation evidence;
* approve implementation that does not map to story acceptance criteria;
* approve implementation with hardcoded secrets;
* approve sensitive data exposure without governance policy;
* approve P1 output without required quality/contract checks;
* approve code that silently changes KPI definitions or grain;
* approve release based only on code review;
* perform production release;
* hide blockers as optional improvements.

## Finding Severity

Use these severities:

```text
Blocker
Major
Minor
Suggestion
Question
```

## Review Decision

Use these decisions:

```text
Approved
Approved with minor comments
Changes requested
Blocked
Needs more evidence
```

## HALT Policy

This skill must stop when review cannot be safely performed.

Stop especially when:

* implementation evidence is missing;
* target story is unclear;
* acceptance criteria are unavailable;
* task breakdown is missing;
* test results are missing for test-critical changes;
* sensitive/security implications are unclear;
* code appears to change contract/KPI/grain without approval;
* user asks to release/deploy instead of review.
