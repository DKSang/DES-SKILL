---
name: des-cicd-and-testing
description: Use when designing CI/CD, testing strategy, release gates, deployment promotion, rollback, release evidence, and environment validation for data products.
---

# des-cicd-and-testing

## Purpose

Use this skill to create and validate the CI/CD and Testing Specification for any data engineering project.

This skill defines version control, branch strategy, environment strategy, test strategy, validation gates, contract checks, data quality checks, transformation tests, orchestration tests, semantic and serving tests, security/governance checks, cost/performance checks, deployment promotion, rollback, release evidence, approvals, and operational readiness checks for data engineering artifacts.

The goal is to make data product changes safe, reviewable, testable, repeatable, releasable, auditable, and ready for final project evaluation before production or formal handoff.

CI/CD and Testing Design should answer:

```text
What artifacts are versioned?
What artifacts are tested?
Which environments exist?
How does code move from local/dev to production?
Which tests block release?
Which checks only warn?
Who approves release?
What evidence proves the release is safe?
How are secrets and environment config handled?
How are breaking changes detected and approved?
How do we rollback or recover?
Which release-readiness evidence will Phase 22 evaluate?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the CI/CD and Testing Specification is first written.

Phase 21 is Done only when:

```text
CI/CD and Testing Specification exists
+ Phase 20 artifact and handoff are reviewed
+ CI/CD and testing validation work is identified
+ release/testing evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 21 Done Gate passes
+ Phase 21 to Phase 22 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 20 Cost and Performance Optimization Specification exists;
* Phase 20 handoff exists or the user explicitly accepts the risk of continuing without it;
* the project is close to implementation, release, production promotion, or formal handoff;
* transformations, data contracts, quality rules, orchestration workflows, semantic models, serving outputs, governance policies, or cost/performance targets need test and release gates;
* users ask to create GitHub Actions, Azure DevOps, Fabric deployment pipeline, dbt tests, Great Expectations, pytest, SQL tests, notebook tests, or deployment automation;
* the workflow router selects Phase 21.

Do not use this skill to implement actual CI/CD workflows, write production test code, create deployment YAML, deploy infrastructure, execute releases, or modify environments.

Allowed in this phase:

```text
CI/CD scope design
repository and artifact inventory
branch and review strategy
environment and promotion strategy
test inventory
unit test expectations
integration test expectations
data contract test expectations
data quality test expectations
transformation test expectations
orchestration test expectations
semantic and serving test expectations
security and governance test expectations
cost and performance test expectations
deployment gate design
release approval workflow design
rollback and recovery strategy
release evidence and audit trail design
test data and fixture strategy
secrets and environment configuration policy
breaking change policy
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/planning-artifacts/19-governance-security-specification.md`;
* `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md`;
* `_des-output/phase-handoffs/phase-20-to-21-handoff.md`;
* `_des-output/evidence/phase-20/phase-20-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-20-done-gate.md`, if available;
* workflow status file, if present;
* repository structure;
* environment strategy;
* deployment targets;
* test expectations;
* contract requirements;
* quality gates;
* performance/cost guardrails;
* security/governance gates;
* rollback requirements.

If Phase 20 or required release context is missing, stop and ask whether to route back to the relevant upstream phase.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/21-cicd-testing-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-21-support-plan.md
_des-output/evidence/phase-21/phase-21-evidence-pack.md
_des-output/implementation-artifacts/phase-21-artifact-revision.md
_des-output/implementation-artifacts/phase-21-done-gate.md
_des-output/phase-handoffs/phase-21-to-22-handoff.md
```

The main artifact must capture:

* CI/CD and testing summary;
* CI/CD scope;
* CI/CD non-scope;
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
* breaking change policy;
* CI/CD and testing evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 21 evidence summary;
* Phase 21 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent deployment environments, approval owners, rollback rules, release gates, test tools, or test coverage.
9. Do not write GitHub Actions, Azure DevOps, Fabric deployment pipeline, dbt, pytest, SQL, Spark, notebook, IaC, infrastructure, or deployment implementation code.
10. Before marking Phase 21 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Phase-Orchestrated Support Model

Phase 21 uses CI/CD and testing validation support work.

The purpose is not CI/CD implementation. The purpose is to make release safety explicit and turn design constraints from earlier phases into tests, gates, approvals, rollback plans, and release evidence.

### Required Support Work

| Support Work                            | Purpose                                                            | Output                      |
| --------------------------------------- | ------------------------------------------------------------------ | --------------------------- |
| Phase 20 Handoff Review                 | Check CI/CD derives from cost/performance targets and constraints. | Evidence pack section       |
| CI/CD Scope Check                       | Validate release/testing boundary.                                 | Evidence pack section       |
| Repository/Artifact Inventory Check     | Identify versioned/tested/deployed artifacts.                      | Evidence pack section       |
| Branch/Review Strategy Check            | Validate merge control and review expectations.                    | Evidence pack section       |
| Environment/Promotion Strategy Check    | Validate environment flow.                                         | Evidence pack section       |
| Test Inventory Check                    | Validate full test coverage map.                                   | Evidence pack section       |
| Unit Test Expectation Check             | Validate unit test boundaries.                                     | Evidence pack section       |
| Integration Test Expectation Check      | Validate cross-component checks.                                   | Evidence pack section       |
| Data Contract Test Gate Check           | Validate contract gate behavior.                                   | Evidence pack section       |
| Data Quality Test Gate Check            | Validate DQ gate behavior.                                         | Evidence pack section       |
| Transformation Test Gate Check          | Validate transformation test behavior.                             | Evidence pack section       |
| Orchestration Test Gate Check           | Validate workflow/DAG test behavior.                               | Evidence pack section       |
| Semantic/Serving Test Gate Check        | Validate semantic/BI/API/export/agent checks.                      | Evidence pack section       |
| Security/Governance Test Gate Check     | Validate secret/sensitive/access/compliance checks.                | Evidence pack section       |
| Cost/Performance Test Gate Check        | Validate runtime/cost/SLO checks.                                  | Evidence pack section       |
| Deployment Gate Check                   | Validate what blocks promotion.                                    | Evidence pack section       |
| Release Approval Workflow Check         | Validate approvers and approvals.                                  | Evidence pack section       |
| Rollback/Recovery Strategy Check        | Validate recovery paths.                                           | Evidence pack section       |
| Release Evidence/Audit Trail Check      | Validate release evidence retention.                               | Evidence pack section       |
| Test Data/Fixture Strategy Check        | Validate safe test data.                                           | Evidence pack section       |
| Secrets/Environment Config Policy Check | Validate secrets/config handling.                                  | Evidence pack section       |
| Breaking Change Policy Check            | Validate schema/metric/contract/grain change policy.               | Evidence pack section       |
| Phase 21 Done Gate                      | Decide whether Phase 21 is Done, Done with risks, or Blocked.      | `phase-21-done-gate.md`     |
| Phase 21 Handoff                        | Tell Phase 22 what evidence and readiness must be evaluated.       | `phase-21-to-22-handoff.md` |

---

## Guardrails

The agent must not:

* deploy directly from local to production without review gates;
* treat CI/CD as only code linting;
* skip contract checks for contracted outputs;
* skip data quality gates for P1 outputs;
* skip security/governance checks for sensitive data;
* skip cost/performance checks when Phase 20 says they matter;
* promote to production without release evidence;
* allow schema/metric/grain breaking changes without versioning and approval;
* assume rollback is possible without designing it;
* store secrets in repository or artifacts;
* use production sensitive data in CI without governance approval;
* mark CI/CD ready if tests, gates, environments, approvals, rollback, and evidence are unresolved;
* implement GitHub Actions, Azure DevOps, Fabric deployment pipelines, dbt, pytest, SQL tests, Spark tests, notebook tests, IaC, or deployment code in this phase.

---

## Handoff To The Next Skill

Recommend `des-project-evaluation` only after:

```text
CI/CD and Testing Specification exists
+ Phase 21 support plan exists or is waived with reason
+ Phase 21 evidence pack exists or evidence is waived with reason
+ Phase 21 Done Gate is Pass or Pass with risks
+ Phase 21 to Phase 22 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-cicd-and-testing
return to Step 02 testing, release, and deployment gates
resolve HALT question
route back to des-cost-and-performance-optimization
route back to des-governance-security-design
route back to des-data-quality
route back to des-data-contracts
des-wise
des-correct-course
```
