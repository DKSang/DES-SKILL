---
name: des-cicd-and-testing
description: Use when creating the CI/CD and Testing Specification to define version control, test gates, environment promotion, and release procedures for data products.
---

# des-cicd-and-testing

## Purpose

Use this skill to create the CI/CD and Testing Specification for any data engineering project.

This skill defines version control, branch strategy, environment strategy, test strategy, validation gates, contract checks, data quality checks, deployment promotion, rollback, release evidence, approvals, and operational readiness checks for data engineering artifacts.

The goal is to make data product changes safe, reviewable, testable, repeatable, and releasable before production or formal handoff.

## When To Use

Use this skill when:

- Phase 20 Cost and Performance Optimization Specification exists;
- the project is close to implementation, release, or production promotion;
- transformations, data contracts, quality rules, orchestration workflows, semantic models, serving outputs, or governance policies need test and release gates;
- users ask to create GitHub Actions, Azure DevOps, Fabric deployment pipeline, dbt tests, Great Expectations, pytest, SQL tests, notebook tests, or deployment automation;
- the workflow router selects Phase 21.

Do not use this skill to implement actual CI/CD workflows, write production test code, create deployment YAML, deploy infrastructure, or execute releases.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/13-transformation-specification.md`;
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
- `_des-output/planning-artifacts/16-semantic-model-specification.md`;
- `_des-output/planning-artifacts/17-serving-layer-specification.md`;
- `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
- `_des-output/planning-artifacts/19-governance-security-specification.md`;
- `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md`;
- workflow status file, if present;
- repository structure;
- environment strategy;
- deployment targets;
- test expectations;
- contract requirements;
- quality gates;
- performance/cost guardrails;
- security/governance gates;
- rollback requirements.

If Phase 20 or required release context is missing, stop and ask whether to route back to the relevant upstream phase.

## Output

Create or update:

```text
_des-output/planning-artifacts/21-cicd-testing-specification.md
```

The artifact must capture:

* CI/CD and testing summary;
* CI/CD scope and non-scope;
* CI/CD design principles;
* repository and artifact inventory;
* branch and review strategy;
* environment and promotion strategy;
* test inventory;
* unit test expectations;
* integration test expectations;
* data contract test expectations;
* data quality test expectations;
* transformation test expectations;
* orchestration test expectations;
* semantic and serving test expectations;
* security and governance test expectations;
* cost and performance test expectations;
* deployment gates;
* release approval workflow;
* rollback and recovery strategy;
* release evidence and audit trail;
* test data and fixture strategy;
* secrets and environment configuration policy;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent deployment environments, approval owners, rollback rules, or release gates.
8. Do not write GitHub Actions, Azure DevOps, Fabric deployment pipeline, dbt, pytest, SQL, Spark, notebook, or infrastructure implementation code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Guardrails

The agent must not:

* deploy directly from local to production without review gates;
* treat CI/CD as only code linting;
* skip contract checks for contracted outputs;
* skip data quality gates for P1 outputs;
* skip security/governance checks for sensitive data;
* promote to production without release evidence;
* allow schema/metric/grain breaking changes without versioning and approval;
* assume rollback is possible without designing it;
* store secrets in repository or artifacts;
* mark CI/CD ready if tests, gates, environments, approvals, rollback, and evidence are unresolved.

## HALT Policy

This skill must stop when a CI/CD or testing decision cannot be safely inferred.

Stop especially when:

* environment strategy is unclear;
* branch/review strategy is unclear;
* deployment target is unclear;
* P1 test coverage is unclear;
* contract test expectation is missing;
* data quality gate is missing;
* security/governance gate is missing;
* rollback path is unclear;
* release approval owner is missing;
* test data strategy is unclear;
* secret/config handling is unclear;
* breaking change policy is unclear.

## Quality Checklist

- [ ] Repository and artifact inventory is clearly defined.
- [ ] Branching and review strategy (e.g., Pull Requests) is established.
- [ ] Environment and promotion path (Dev -> Test -> Prod) is documented.
- [ ] Test inventory covers unit, integration, contract, and quality tests.
- [ ] P1 contract and quality gates are defined as blocking release gates.
- [ ] Security and governance gates (secret scanning, sensitive field checks) are included.
- [ ] Deployment gates and release approval owners are identified.
- [ ] Rollback and recovery strategy is documented for failure scenarios.
- [ ] Release evidence requirements are specified for audit trails.
- [ ] Test data strategy (synthetic, sanitized samples) avoids production PII in CI.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Deploying directly to production from local | Lacks peer review and automated validation; high risk of "it works on my machine" bugs. |
| Skipping contract tests for shared datasets | Downstream consumers break silently when schema or grain changes. |
| Treating quality checks as optional warnings | Compromises data trust; allows corrupt data to reach Gold/Serving layers. |
| Hardcoding secrets in repository | Critical security vulnerability; exposes credentials to anyone with repo access. |
| No rollback or recovery plan | Leads to extended downtime and manual "panic" fixes during incidents. |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Primary focus: Secret scanning, environment config policy, and governance gates. |
| Data Management | Ensures metadata, lineage, and contracts are validated during promotion. |
| DataOps | The core phase for CI/CD, branch strategy, testing gates, and release evidence. |
| Data Architecture | Promotion path and environment strategy reflect the overall system architecture. |
| Orchestration | Pipeline definitions and DAG configs are version-controlled and tested. |
| Software Engineering | Version control, peer review, and automated testing are applied to data artifacts. |

## Handoff To The Next Skill

Next use `des-project-evaluation` to evaluate the completed design against the original business discovery, success criteria, and value expectations before final delivery.
