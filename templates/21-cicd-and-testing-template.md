# CI/CD and Testing Plan

This template is used during Phase 21 (CI/CD and Testing) to define the automated quality pipeline, test coverage strategy, environment promotion flow, and rollback procedures for data engineering deliverables.

> **DataOps Principle**: Every code change to a data pipeline must pass an automated quality gate before reaching production. Manual deployments without CI/CD checks are an anti-pattern.

---

## 1. Delivery Scope

*   **Pipeline / dbt Project / Job Name**: (e.g., `silver_orders_transform`, `dbt_sales_models`)
*   **Orchestration Tool**: (e.g., GitHub Actions + Airflow)
*   **Deployment Target**: (e.g., Databricks workspace, dbt Cloud, Cloud Function)
*   **Code Repository**: (e.g., `github.com/company/data-platform/sales`)

---

## 2. Test Matrix

Document every test type, tool, and when it runs:

| Test Type | Description | Tool | Scope | Trigger | Blocking? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Unit | Test transformation business rule logic in isolation | pytest / dbt unit tests | Single function or SQL model | PR open | Yes |
| Schema | Validate column types, nullability, and naming convention | dbt schema tests (`not_null`, `unique`, `accepted_values`) | All dbt models | PR merge to dev | Yes |
| Contract | Verify producer dataset schema matches defined contract | dbt `contract: enforced: true` | Silver/Gold models | PR merge to staging | Yes |
| Data Quality | Run DQ dimension checks (completeness, uniqueness, timeliness) | Great Expectations / dbt tests | Staging environment | Post-deployment to staging | Yes |
| Integration | Validate end-to-end pipeline: Bronze → Silver → Gold row counts match | Python + SQL assertions | Full pipeline | Nightly staging run | No (alert only) |
| Performance | Validate pipeline runtime is within P90 SLA limits | Airflow task duration log | Production | Weekly scheduled run | No (alert only) |

---

## 3. Environment Promotion Rules

| Environment | Purpose | Deployment Trigger | Promotion Rule | Owner |
| :--- | :--- | :--- | :--- | :--- |
| Local | Developer testing | Manual | Developer runs `dbt test` locally before push | Developer |
| Dev | Integration testing | PR merge to `dev` branch | Unit + schema tests pass | CI bot |
| Staging | Pre-production validation | PR merge to `main` | All tests pass + tech lead review approved | Data Lead |
| Production | Live serving | Manual release tag or scheduled deploy | Staging validation confirmed + go/no-go sign-off | Data Lead + Manager |

---

## 4. CI/CD Pipeline Stages

```text
Developer Push
    │
    ▼
[Stage 1: Lint & Format Check]  — Black / SQLFluff / ruff
    │  FAIL → Block PR
    ▼
[Stage 2: Unit Tests]           — pytest / dbt unit tests
    │  FAIL → Block PR
    ▼
[Stage 3: Schema Tests]         — dbt schema tests on dev dataset
    │  FAIL → Block PR
    ▼
[Stage 4: Contract Tests]       — dbt contract enforcement on staging
    │  FAIL → Block deployment
    ▼
[Stage 5: DQ Gate]              — Great Expectations on staging data
    │  FAIL → Block deployment, alert data-ops channel
    ▼
[Stage 6: Tech Lead Review]     — Required approval on GitHub PR
    │  NOT APPROVED → Block merge
    ▼
[Stage 7: Production Deploy]    — Automated via CI/CD or manual tag
```

---

## 5. Rollback Plan

*   **Code Rollback**: (e.g., Revert to previous Git tag using `git revert` or GitHub "Revert PR" button. Redeploy via CI/CD pipeline.)
*   **Data Rollback**: (e.g., Delta Lake Time Travel — restore Silver table to snapshot before bad deployment: `RESTORE TABLE silver.orders TO VERSION AS OF <version>`)
*   **Rollback Decision Owner**: (e.g., Data Lead must approve rollback; on-call engineer executes)
*   **Rollback SLA**: (e.g., Rollback initiated within 30 minutes of confirmed data issue in production)

---

## 6. Release Evidence Checklist

Before each production release, confirm all evidence is documented:

- [ ] All CI/CD pipeline stages passed (link to run)
- [ ] Data Quality gate report reviewed (link to GE report or dbt test output)
- [ ] Staging environment validated by at least one non-author engineer
- [ ] Row count check between staging and production datasets passed
- [ ] Downstream consumers notified of any breaking schema changes
- [ ] Rollback procedure tested in staging for this release
- [ ] Release notes updated with changes, impacted datasets, and approver name
