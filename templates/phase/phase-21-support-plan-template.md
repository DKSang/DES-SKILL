# Phase 21 Support Plan — CI/CD and Testing

## 1. Purpose

This support plan defines the validation work required to complete Phase 21 CI/CD and Testing.

Phase 21 does not implement GitHub Actions, Azure DevOps, Fabric deployment pipelines, dbt, pytest, SQL tests, Spark tests, notebook tests, IaC, infrastructure, or deployment code.

It requires evidence that test coverage, release gates, environment promotion, approvals, rollback, release evidence, test data, secrets handling, and breaking change policies are defined before Project Evaluation begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 21 |
| Phase Name | CI/CD and Testing |
| Phase Core Skill | `des-cicd-and-testing` |
| Initial Artifact | `_des-output/planning-artifacts/21-cicd-testing-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-20-to-21-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. What Must Be Validated

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | Phase 20 handoff alignment | Ensures gates include cost/performance constraints | Critical | Phase 20 handoff |
| V-002 | CI/CD scope | Prevents unclear release boundary | Critical | Scope decision |
| V-003 | Repository/artifact inventory | Ensures versioned/tested artifacts are known | Critical | Artifact inventory |
| V-004 | Branch/review strategy | Prevents uncontrolled production changes | Critical | Branch/review decision |
| V-005 | Environment/promotion strategy | Controls release risk | Critical | Environment path |
| V-006 | Test inventory | Ensures test coverage map exists | Critical | Test inventory |
| V-007 | Unit test expectations | Validates small components | Medium/High | Unit test plan |
| V-008 | Integration test expectations | Validates components together | High | Integration plan |
| V-009 | Data contract test gates | Prevents consumer-breaking releases | Critical where contracts exist | Contract spec |
| V-010 | Data quality test gates | Prevents bad data promotion | Critical for P1 | DQ spec |
| V-011 | Transformation test gates | Prevents logic/grain regressions | High | Transform spec |
| V-012 | Orchestration test gates | Prevents bad workflow execution | High | Orchestration spec |
| V-013 | Semantic/serving test gates | Prevents metric/serving regressions | High | Semantic/serving spec |
| V-014 | Security/governance test gates | Prevents unsafe release | Critical | Governance spec |
| V-015 | Cost/performance test gates | Prevents cost/performance regression | High where targets exist | Phase 20 |
| V-016 | Deployment gates | Defines what blocks promotion | Critical | Gate policy |
| V-017 | Release approval workflow | Ensures accountable release | Critical | Approver decision |
| V-018 | Rollback/recovery strategy | Enables safe recovery | Critical | Recovery plan |
| V-019 | Release evidence/audit trail | Makes release auditable | Critical | Evidence requirements |
| V-020 | Test data/fixture strategy | Prevents unsafe/expensive CI data use | High | Fixture strategy |
| V-021 | Secrets/environment config policy | Prevents credential leaks | Critical | Secret policy |
| V-022 | Breaking change policy | Prevents hidden consumer breakage | Critical | Change policy |

---

## 4. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 20 Handoff Review | Validate Phase 21 derives from Phase 20 | Cost/perf spec + handoff | Evidence E-001 | Required | |
| CI/CD Scope Check | Validate release/testing scope | Context | Evidence E-002 | Required | |
| Repository/Artifact Inventory Check | Validate artifacts | Repo/artifact list | Evidence E-003 | Required | |
| Branch/Review Strategy Check | Validate merge/review model | Repo policy | Evidence E-004 | Required | |
| Environment/Promotion Strategy Check | Validate promotion path | Architecture/platform | Evidence E-005 | Required | |
| Test Inventory Check | Validate test coverage categories | Specs/contracts/DQ | Evidence E-006 | Required | |
| Unit Test Expectation Check | Validate unit coverage | Transform/code specs | Evidence E-007 | Required | |
| Integration Test Expectation Check | Validate integration coverage | Pipeline/serving specs | Evidence E-008 | Required | |
| Data Contract Test Gate Check | Validate contract checks | Phase 12 | Evidence E-009 | Required where contracts exist | |
| Data Quality Test Gate Check | Validate DQ gates | Phase 14 | Evidence E-010 | Required for P1 outputs | |
| Transformation Test Gate Check | Validate transform tests | Phase 13 | Evidence E-011 | Required where transformations exist | |
| Orchestration Test Gate Check | Validate workflow tests | Phase 15 | Evidence E-012 | Required where workflows exist | |
| Semantic/Serving Test Gate Check | Validate semantic/serving tests | Phase 16/17 | Evidence E-013 | Required where semantic/serving exists | |
| Security/Governance Test Gate Check | Validate security checks | Phase 19 | Evidence E-014 | Required where governed/sensitive | |
| Cost/Performance Test Gate Check | Validate performance/cost checks | Phase 20 | Evidence E-015 | Required where targets exist | |
| Deployment Gate Check | Validate promotion blockers | Release policy | Evidence E-016 | Required | |
| Release Approval Workflow Check | Validate approvers | Owner/RACI | Evidence E-017 | Required | |
| Rollback/Recovery Strategy Check | Validate recovery | Release/runbook | Evidence E-018 | Required | |
| Release Evidence/Audit Trail Check | Validate evidence retention | Audit needs | Evidence E-019 | Required | |
| Test Data/Fixture Strategy Check | Validate safe test data | Security/governance | Evidence E-020 | Required | |
| Secrets/Environment Config Policy Check | Validate secret/config handling | Security policy | Evidence E-021 | Required | |
| Breaking Change Policy Check | Validate compatibility rules | Contracts/semantic/serving | Evidence E-022 | Required | |
| Phase 21 Done Gate | Decide whether Phase 21 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 21 Handoff | Prepare Phase 22 input | Artifact + Done Gate | Handoff file | Required | |

---

## 5. Evidence Output Location

```text
_des-output/evidence/phase-21/phase-21-evidence-pack.md
```

---

## 6. HALT Conditions

Stop if:

* Phase 20 handoff is missing.
* P1 artifacts are not identified.
* No branch/review strategy exists.
* No environment/promotion strategy exists.
* Contracted output has no contract test gate.
* P1 output has no quality gate.
* Sensitive data has no security/governance gate.
* Cost/performance targets from Phase 20 have no test/monitoring candidate.
* Secrets/config strategy is missing.
* Rollback path is missing.
* Release approval owner is missing.
* Release evidence/audit trail is missing.
* Artifact starts implementing CI/CD or test code.

---

## 7. Next Support Action

```text
Create or update _des-output/evidence/phase-21/phase-21-evidence-pack.md
```

---

## 8. Change Log

| Date | Change | Reason | Updated By |
|---|---|---|---|
| YYYY-MM-DD | Created support plan | Phase 21 validation | |
