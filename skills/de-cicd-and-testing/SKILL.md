---
name: de-cicd-and-testing
description: Use when setting up automated tests, CI/CD, environment promotion, code review, deployment checks, data tests, and release controls for data engineering projects.
---

# de-cicd-and-testing

## When To Use

Use before production deployment, when adding automated validation, or when moving from notebooks/manual scripts to maintainable, auditable project delivery.

## Purpose

Define a CI/CD and testing strategy so data pipelines, transformations, contracts, and serving assets can be changed safely — with automated quality gates that catch regressions before production.

## Inputs Required

- Repository structure and tooling choices.
- Transformation and pipeline specs.
- Data quality rules (`14-data-quality.md`).
- Data contracts (`12-data-contracts.md`).
- Governance and deployment environment requirements.

## Decision Matrix — Test Layer Pyramid

| Test Layer | What to Test | Tool Examples | Blocking? |
| :--- | :--- | :--- | :--- |
| **Unit** | Individual transformation logic, business rule formulas | pytest, dbt unit tests | Yes — must pass before PR merge |
| **Schema / Contract** | Column names, types, required fields match contract | dbt schema tests, Great Expectations, Soda | Yes — breaking schema = deployment blocked |
| **Data Quality** | DQ rules: null rate, uniqueness, ranges, distribution | dbt tests, Soda, Great Expectations | Yes (FAIL rules) / No (WARN rules) |
| **Integration** | End-to-end pipeline: source → Bronze → Silver → Gold | Staging environment full run | Yes — staging must pass before production |
| **Backfill / Idempotency** | Re-running for same date window produces identical output | Custom test harness, dbt run + compare | Yes — idempotency is non-negotiable |
| **Metric Reconciliation** | Gold metric totals match Silver source within tolerance | SQL assertion tests | Yes — metric drift = deployment blocked |
| **Performance** | Pipeline P90 runtime within SLA; dashboard P90 latency | Staging run timing, Power BI performance analyzer | No — alert, but don't block |

## Decision Matrix — CI/CD Tool Selection

| Platform | Recommended CI/CD Tool |
| :--- | :--- |
| GitHub repositories | **GitHub Actions** |
| Azure DevOps repositories | **Azure Pipelines** |
| GitLab repositories | **GitLab CI/CD** |
| dbt Cloud | **dbt Cloud Jobs + Slim CI** |
| Databricks | **Databricks Asset Bundles** |
| Microsoft Fabric | **Fabric Deployment Pipelines** |

## Step-By-Step Process

1. Define environments: local → dev → staging → production.
2. Define the test matrix using the Test Layer Pyramid.
3. Choose CI/CD tooling using the Decision Matrix.
4. Configure credential and secrets management (never in code or CI/CD environment variables visible in logs).
5. Define environment promotion rules (e.g., staging must pass all blocking tests before production deploy).
6. Define code review gates (minimum 1 reviewer; DQ and contract changes require data lead approval).
7. Define rollback procedure: git revert + Delta Time Travel or partition restore.
8. Define release evidence: CI/CD run log, staging validation report, approver sign-off.

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/21-cicd-and-testing.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Test matrix (all 7 layers with tool, scope, and blocking status).
- CI/CD pipeline configuration plan.
- Environment promotion policy.
- Secrets management approach.
- Rollback procedure.
- Release evidence requirements.

## Quality Checklist

- [ ] All 7 test layers are defined with a tool and blocking status.
- [ ] No credentials stored in code, CI/CD env vars visible in logs, or config files committed to git.
- [ ] Staging environment runs end-to-end with production-scale representative data.
- [ ] Contract and quality tests are automated — not manual pre-release checks.
- [ ] Rollback plan is documented and rehearsed in staging.
- [ ] Release requires sign-off from Data Lead and business stakeholder.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Testing only code syntax, not data behavior | Syntactically valid SQL can produce wrong results; behavior tests are essential |
| Deploying from notebooks manually | No audit trail, no rollback, no consistent environment — production drift is inevitable |
| Using production credentials in local development | Accidental writes or deletes to production data; security policy violation |
| Skipping backfill/idempotency tests | First backfill in production creates duplicates or corrupted aggregates |
| No credential scanning in CI/CD | Developers accidentally commit secrets; not caught until a breach |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Credential scanning in CI/CD pipeline; secrets management configured; no secrets in code |
| Data Management | Schema and contract tests are automated enforcement of data management policies |
| DataOps | This is the core DataOps phase — full CI/CD automation and environment promotion defined |
| Data Architecture | CI/CD tool choice must be compatible with the selected orchestration and transformation tools |
| Orchestration | Staging deployment triggers a full orchestration test run; production deploy is gated on pass |
| Software Engineering | Code review gates, PR templates, and branching strategy defined; PRs required for production changes |

## Handoff To The Next Skill

Next use `de-project-evaluation` to conduct the final go/no-go evaluation before production release.

## Example Output Format

```markdown
# CI/CD And Testing Plan
| Test Layer | Tool | Scope | Trigger | Blocking |
| Unit | pytest + dbt unit tests | Business rule formulas | PR merge | Yes |
| Schema/Contract | dbt schema tests | All Gold columns vs. contract | PR merge + staging deploy | Yes |
## Environments
Local → Dev → Staging → Production
## Secrets Management
All secrets via Azure Key Vault; GitHub Actions references vault secrets via OIDC
## Rollback Plan
1. Git revert commit; 2. Redeploy via CI/CD; 3. Delta Time Travel to restore previous table state
```
