# 21 — CI/CD and Testing Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-cicd-and-testing |
| Phase | 21 — CI/CD and Testing |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 20-cost-performance-optimization-specification.md |
| Next Skill | des-project-evaluation |

## 1. CI CD and Testing Summary

```text
<short summary of release scope, environments, tests, gates, and risks>
```

## 2. CI CD Scope

In scope:

*
*
*

Out of scope:

* CI/CD workflow implementation
* deployment YAML/code
* test implementation code
* infrastructure provisioning
* production deployment execution

## 3. CI CD Design Principles

| Principle                       | Decision / Notes |
| ------------------------------- | ---------------- |
| Version everything important    |                  |
| Review before merge             |                  |
| Test before deploy              |                  |
| Promote through environments    |                  |
| Protect contracts               |                  |
| Quality gates are release gates |                  |
| Secure by default               |                  |
| Rollback is designed            |                  |
| Evidence is retained            |                  |

## 4. Repository and Artifact Inventory

| Artifact | Type                                                                                   | Versioned? | Test Needed? |
| -------- | -------------------------------------------------------------------------------------- | ---------- | ------------ |
|          | code / pipeline / contract / schema / quality rule / semantic / serving / infra / docs | Yes / No   | Yes / No     |

## 5. Branch and Review Strategy

| Area                   | Decision                                                                    |
| ---------------------- | --------------------------------------------------------------------------- |
| Branching model        | trunk-based / feature branches / GitFlow / environment branches / prototype |
| Protected branches     |                                                                             |
| Pull request required? | Yes / No                                                                    |
| Reviewer requirement   |                                                                             |
| Breaking change review |                                                                             |

## 6. Environment and Promotion Strategy

| Environment | Purpose                    | Promotion Rule |
| ----------- | -------------------------- | -------------- |
| local       | developer validation       |                |
| dev         | integration/dev validation |                |
| test        | formal tests               |                |
| staging     | production-like validation |                |
| prod        | production serving         |                |

## 7. Test Inventory

| Test ID  | Test Type                                                                                                   | Applies To | Gate Behavior                         |
| -------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------- |
| TEST-001 | static / unit / integration / contract / quality / security / performance / smoke / regression / acceptance |            | block / warn / info / manual approval |

## 8. Unit Test Expectations

| Component                    | Unit Test Expectation |
| ---------------------------- | --------------------- |
| transformation function/rule |                       |
| utility/config logic         |                       |
| mapping logic                |                       |

## 9. Integration Test Expectations

| Integration Area        | Expectation |
| ----------------------- | ----------- |
| ingestion to Bronze     |             |
| Bronze to Silver        |             |
| Silver to Gold          |             |
| quality gate to publish |             |
| semantic/serving output |             |

## 10. Data Contract Test Expectations

| Contract ID | Required Checks                                                                 | Gate Behavior                  |
| ----------- | ------------------------------------------------------------------------------- | ------------------------------ |
|             | schema / required fields / grain / freshness / metric version / breaking change | block / warn / manual approval |

## 11. Data Quality Test Expectations

| Quality Rule / Gate | Required in CI/CD? | Gate Behavior       |
| ------------------- | ------------------ | ------------------- |
|                     | Yes / No / Later   | block / warn / info |

## 12. Transformation Test Expectations

| Transformation ID | Test Expectation                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------- |
|                   | input-output fixture / grain uniqueness / metric reconciliation / incremental behavior / edge cases |

## 13. Orchestration Test Expectations

| Workflow | Test Expectation                                                                                |
| -------- | ----------------------------------------------------------------------------------------------- |
|          | dependency graph validation / parameter validation / retry behavior / gate behavior / smoke run |

## 14. Semantic and Serving Test Expectations

| Object / Output                                   | Test Expectation                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| semantic model / dashboard / API / export / agent | measure correctness / relationship safety / freshness display / access check / smoke test |

## 15. Security and Governance Test Expectations

| Control          | Test / Review Expectation     |
| ---------------- | ----------------------------- |
| secrets          | scan, block release           |
| sensitive fields | exposure check                |
| access policy    | approval/review               |
| external sharing | governance approval           |
| AI-agent access  | restricted object check       |
| reverse ETL      | approval and guardrail review |

## 16. Cost and Performance Test Expectations

| Workload / Output | Check                                                                                | Gate Behavior          |
| ----------------- | ------------------------------------------------------------------------------------ | ---------------------- |
|                   | runtime / query latency / dashboard load / API latency / cost spike / storage growth | block / warn / monitor |

## 17. Deployment Gates

| Gate              | Required Checks                           | Behavior                |
| ----------------- | ----------------------------------------- | ----------------------- |
| PR gate           | static, unit, contract diff, secret scan  | block / warn            |
| Dev deploy gate   | integration, config validation            | block / warn            |
| Test/Staging gate | quality, contract, security, smoke        | block / warn            |
| Prod release gate | approval, rollback plan, release evidence | block / manual approval |

## 18. Release Approval Workflow

| Release Type       | Approval Required | Approver |
| ------------------ | ----------------- | -------- |
| normal release     |                   |          |
| breaking change    |                   |          |
| emergency release  |                   |          |
| production release |                   |          |

## 19. Rollback and Recovery Strategy

| Failure Scenario       | Rollback / Recovery |
| ---------------------- | ------------------- |
| code release fails     |                     |
| contract/schema issue  |                     |
| data quality failure   |                     |
| semantic/serving issue |                     |
| performance regression |                     |
| security issue         |                     |

## 20. Release Evidence and Audit Trail

| Evidence                   | Required?                  |
| -------------------------- | -------------------------- |
| commit SHA                 | Yes                        |
| pull request link          | Recommended                |
| reviewer/approver          | Yes                        |
| test results               | Yes                        |
| contract validation result | Yes for contracted outputs |
| quality gate result        | Yes                        |
| security scan result       | Yes                        |
| deployment environment     | Yes                        |
| release timestamp          | Yes                        |
| rollback status            | Conditional                |
| known issues               | Recommended                |

## 21. Test Data and Fixture Strategy

| Test Data Type           | Usage                    | Sensitivity Handling |
| ------------------------ | ------------------------ | -------------------- |
| synthetic fixture        | unit tests               | safe                 |
| sanitized sample         | integration tests        | no PII               |
| golden dataset           | regression/metric tests  | controlled           |
| contract example payload | contract tests           | safe                 |
| mock source/API          | CI                       | safe                 |
| production data          | restricted / avoid in CI | governed             |

## 22. Secrets and Environment Configuration Policy

| Area                  | Policy                                |
| --------------------- | ------------------------------------- |
| secrets in repo       | forbidden                             |
| secret source         | env vars / secret manager / key vault |
| config by environment | separate config files or variables    |
| config validation     | required in CI                        |
| secret scan           | required                              |
| rotation              | according to policy                   |

## 23. Risks

| Risk | Impact | Mitigation | Owner |
| ---- | ------ | ---------- | ----- |
|      |        |            |       |

## 24. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 25. Open Questions

| Open Question | Why It Matters | Owner | Needed By          |
| ------------- | -------------- | ----- | ------------------ |
|               |                |       | Phase 22 / Release |

## 26. Next Skill Recommendation

Recommended next skill:

```text
des-project-evaluation
```

Reason:

```text
<why project evaluation is the next safe step>
```
