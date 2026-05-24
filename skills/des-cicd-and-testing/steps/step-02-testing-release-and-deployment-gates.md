# Step 02 — Testing, Release, Deployment Gates, and Evidence

## Goal

Define test coverage, CI gates, CD gates, environment promotion, approvals, rollback, release evidence, test data, secret/config handling, breaking change policy, and supporting evidence.

This step prepares the CI/CD and Testing Specification and identifies which CI/CD decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 20 to Phase 21 handoff, if available
- Phase 20 evidence pack, if available
- Data Contract Specification
- Transformation Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Governance and Security Specification
- Cost and Performance Optimization Specification
- User answers from HALT points
- Existing repository, branch, environment, or deployment standards if available

---

## Actions

1. Define CI/CD scope and non-scope.
2. Define CI/CD design principles.
3. Create repository and artifact inventory.
4. Define branch and review strategy.
5. Define environment and promotion strategy.
6. Create test inventory.
7. Define unit test expectations.
8. Define integration test expectations.
9. Define data contract test expectations.
10. Define data quality test expectations.
11. Define transformation test expectations.
12. Define orchestration test expectations.
13. Define semantic and serving test expectations.
14. Define security and governance test expectations.
15. Define cost and performance test expectations.
16. Define deployment gates.
17. Define release approval workflow.
18. Define rollback and recovery strategy.
19. Define release evidence and audit trail.
20. Define test data and fixture strategy.
21. Define secrets and environment configuration policy.
22. Define breaking change policy.
23. Map each critical CI/CD and testing decision to evidence.
24. Mark unsupported CI/CD claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
25. Identify required Phase 21 support work.
26. Use HALT checkpoints for unresolved decisions.
27. Prepare draft CI/CD and Testing Specification content.
28. Prepare content for the Phase 21 Support Plan.

---

## CI/CD Design Principles

Use these defaults unless overridden:

| Principle | Meaning |
|---|---|
| Version everything important | Code, contracts, schemas, configs, tests, docs |
| Review before merge | Changes require human or policy review |
| Test before deploy | No promotion without relevant checks |
| Promote through environments | Avoid direct production deployment |
| Protect contracts | Breaking changes require versioning and approval |
| Quality gates are release gates | P1 quality checks block release |
| Secure by default | Secrets and sensitive config are never committed |
| Rollback is designed | Recovery path must be known before release |
| Evidence is retained | Releases must be auditable |
| No implementation here | Design test/release gates, do not write CI/CD code |

---

## Artifact Types

Track CI/CD for:

| Artifact Type | Examples |
|---|---|
| Source code | Python, SQL, Spark, notebooks, dbt models |
| Pipeline definitions | orchestration workflows, DAG configs |
| Data contracts | contract YAML/JSON/Markdown/specs |
| Schemas | table schema, field definitions, schema versions |
| Quality rules | dbt tests, GE suites, SQL checks, validation configs |
| Semantic models | BI model definitions, metric specs |
| Serving configs | API/read model configs, dashboard metadata, export configs |
| Infrastructure configs | IaC, workspace settings, deployment configs |
| Documentation | README, runbooks, architecture/spec artifacts |

---

## Test Types

Use these test categories:

| Test Type | Purpose |
|---|---|
| Static validation | syntax, formatting, linting, config validation |
| Unit test | validate small transformation/function/rule behavior |
| Schema test | validate expected fields, types, compatibility |
| Contract test | validate producer-consumer contract clauses |
| Data quality test | validate freshness, completeness, uniqueness, validity, reconciliation |
| Transformation test | validate input-output logic and grain |
| Integration test | validate multiple components work together |
| Orchestration test | validate dependency graph, parameters, retries, gates |
| Security test | validate access, secrets, sensitive fields |
| Performance test | validate runtime, query latency, cost guardrails |
| Smoke test | lightweight post-deploy check |
| Regression test | ensure old behavior is not broken |
| Acceptance test | consumer/business approval criteria |

---

## CI/CD Evidence Mapping

For every P1 release path, capture evidence status.

| CI/CD Field | Evidence Status | Allowed Output |
|---|---|---|
| Phase 20 handoff | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| CI/CD scope | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Repository/artifact inventory | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Branch/review strategy | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Environment/promotion strategy | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Test inventory | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Unit tests | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Integration tests | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Contract tests | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk / Blocked |
| Quality tests | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk / Blocked |
| Transformation tests | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Orchestration tests | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Semantic/serving tests | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Security/governance tests | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk / Blocked |
| Cost/performance tests | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Deployment gates | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Release approval | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |
| Rollback/recovery | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |
| Release evidence/audit | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Test data/fixtures | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Secrets/config policy | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |
| Breaking change policy | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |

---

## HALT — Repository and Artifact Boundary

Stop if versioned artifacts are unclear.

### Options

A. Transformation code only  
B. Code + contracts + quality rules  
C. Code + contracts + quality + orchestration configs  
D. Full data product artifacts: code, contracts, quality, orchestration, semantic, serving, docs  
E. Custom boundary  

### Required response

Choose A/B/C/D/E.

---

## HALT — Branch and Review Strategy

Stop if merge/review policy is unclear.

### Options

A. Trunk-based development with protected main  
B. Feature branches with pull requests  
C. GitFlow-style branches  
D. Environment branches  
E. Direct commits allowed only for prototype  
F. Custom strategy  

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Environment and Promotion Strategy

Stop if environment path is unclear.

### Options

A. Local → Dev → Prod  
B. Local → Dev → Test → Prod  
C. Local → Dev → Test → Staging → Prod  
D. Dev → Test → Prod only  
E. Single environment for MVP, documented risk  
F. Custom path  

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Test Coverage Scope

Stop if required tests are unclear.

### Options

A. Static validation only  
B. Static + unit tests  
C. Static + unit + contract tests  
D. Static + unit + contract + quality tests  
E. Full release test set: static, unit, integration, contract, quality, security, performance, smoke  
F. Custom coverage  

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Contract Test Gate

Stop if contracted outputs lack test gates.

### Options

A. Schema compatibility check  
B. Grain/uniqueness check  
C. Freshness/SLA check  
D. Required field check  
E. Metric definition/version check  
F. Breaking change detection  
G. Consumer approval for breaking changes  
H. Defer contract gate, mark risk  

### Required response

Choose one or more options.

---

## HALT — Quality Test Gate

Stop if quality gates are unclear.

### Options

A. P1 quality rules block release  
B. P2 quality rules warn but allow release  
C. P3 rules record only  
D. Quality gate follows Phase 14 exactly  
E. Manual approval allowed for selected failures  
F. Defer quality gate, mark risk  

### Required response

Choose one or more options.

---

## HALT — Transformation Test Gate

Stop if transformation tests are unclear.

### Options

A. Input-output fixture tests  
B. Grain preservation tests  
C. Dedup/survivorship tests  
D. Slowly changing dimension tests where relevant  
E. Aggregation/reconciliation tests  
F. Regression tests for changed transformations  
G. Defer transformation tests, mark risk  

### Required response

Choose one or more options.

---

## HALT — Orchestration Test Gate

Stop if orchestration tests are unclear.

### Options

A. DAG/dependency validation  
B. Parameter/config validation  
C. Retry/backoff behavior validation  
D. Failure path and alert simulation  
E. Publish gate validation  
F. Smoke run in lower environment  
G. Defer orchestration tests, mark risk  

### Required response

Choose one or more options.

---

## HALT — Semantic and Serving Test Gate

Stop if semantic/serving tests are unclear.

### Options

A. Measure reconciliation checks  
B. Semantic relationship/cardinality checks  
C. Dashboard/API smoke checks  
D. Freshness/quality display checks  
E. Access policy checks for serving outputs  
F. Consumer acceptance tests  
G. Defer semantic/serving tests, mark risk  

### Required response

Choose one or more options.

---

## HALT — Security and Governance Gate

Stop if security/governance validation is unclear.

### Options

A. Secret scan required  
B. Sensitive field exposure check required  
C. Access policy review required  
D. External sharing approval required  
E. AI-agent access review required  
F. Reverse ETL approval required  
G. Retention/compliance review required  
H. Defer security gate, mark risk  

### Required response

Choose one or more options.

---

## HALT — Cost and Performance Gate

Stop if performance or cost constraints affect release.

### Options

A. Runtime threshold check  
B. Query latency smoke check  
C. Dashboard/API smoke performance check  
D. Cost estimate or cost spike check  
E. Storage growth check  
F. Capacity impact review  
G. Monitor only, no blocking gate for MVP  
H. Defer performance gate, mark risk  

### Required response

Choose one or more options.

---

## HALT — Deployment Gate

Stop if deployment gate is unclear.

### Options

A. Pull request approval  
B. Required tests pass  
C. Contract checks pass  
D. Quality gates pass  
E. Security/governance checks pass  
F. Performance/cost checks pass where applicable  
G. Manual release approval  
H. Custom deployment gate  

### Required response

Choose one or more options.

---

## HALT — Release Approval

Stop if release approval owner is unclear.

### Options

A. Data engineering owner  
B. Data product owner  
C. Business owner/steward  
D. Security/governance approver  
E. Platform owner  
F. Consumer approver for breaking changes  
G. Shared release approval  
H. Unknown — keep release Draft/Risk  

### Required response

Choose one or more options.

---

## HALT — Rollback and Recovery

Stop if rollback/recovery path is unclear.

### Options

A. Code rollback  
B. Contract/schema version rollback  
C. Revert to previous successful dataset version  
D. Re-run previous successful pipeline version  
E. Disable serving output temporarily  
F. Keep previous published output visible  
G. Manual recovery runbook required  
H. No rollback in MVP, documented risk  

### Required response

Choose one or more options.

---

## HALT — Release Evidence and Audit Trail

Stop if release evidence is unclear.

### Options

A. Commit/PR reference  
B. Test result summary  
C. Contract validation result  
D. DQ gate result  
E. Security/governance gate result  
F. Deployment target/environment/version  
G. Approver and approval timestamp  
H. Rollback reference  
I. Release notes/change summary  
J. Custom evidence  

### Required response

Choose one or more options.

---

## HALT — Test Data and Fixture Strategy

Stop if test data strategy is unclear.

### Options

A. Small synthetic fixtures  
B. Sanitized production-like sample  
C. Golden input-output datasets  
D. Contract example payloads  
E. Snapshot of non-sensitive partitions  
F. Mock external sources/APIs  
G. No production data in CI  
H. Custom strategy  

### Required response

Choose one or more options.

---

## HALT — Secrets and Environment Config Policy

Stop if secrets/config handling is unclear.

### Options

A. No secrets committed to repo  
B. Use environment variables  
C. Use secret manager/key vault  
D. Separate configs by environment  
E. Validate config schema in CI  
F. Rotate secrets according to policy  
G. Block release on detected secret  
H. Custom policy  

### Required response

Choose one or more options.

---

## HALT — Breaking Change Policy

Stop if schema/metric/contract breaking change handling is unclear.

### Options

A. Detect breaking changes automatically where possible  
B. Require contract version bump  
C. Require consumer notification  
D. Require migration/deprecation window  
E. Require business/consumer approval  
F. Block release by default  
G. Allow emergency breaking change with post-review  
H. Custom policy  

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

- CI/CD scope and principles are defined;
- repository/artifact inventory is created;
- branch/review strategy is documented;
- environment/promotion path is documented;
- test inventory is created;
- unit, integration, contract, quality, transformation, orchestration, semantic/serving, security/governance, cost/performance test expectations are documented;
- deployment, approval, rollback, evidence, test data, secrets/config, and breaking-change policies are documented;
- evidence mapping is prepared;
- required support work is identified;
- risks and assumptions are explicit;
- draft CI/CD and Testing specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
