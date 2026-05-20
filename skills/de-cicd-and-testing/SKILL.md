---
name: de-cicd-and-testing
description: Use when setting up automated tests, CI/CD, environment promotion, code review, deployment checks, data tests, and release controls for data engineering projects.
---

# de-cicd-and-testing

## When To Use

Use before production deployment, when adding automated validation, or when moving from notebooks/manual scripts to maintainable project delivery.

## Purpose

Define a CI/CD and testing strategy so data pipelines, transformations, contracts, and serving assets can be changed safely.

## Inputs Required

- Repository structure.
- Transformation and pipeline specs.
- Data quality rules.
- Data contracts.
- Deployment environments.
- Governance requirements.

## Step-By-Step Process

1. Define environments: local, dev, staging, production.
2. Define tests: unit, schema, contract, data quality, integration, backfill, metric reconciliation.
3. Choose CI/CD tooling: GitHub Actions, Azure DevOps, GitLab CI, dbt Cloud, Databricks Asset Bundles, Fabric deployment pipelines, or platform-native deployment.
4. Define code review and approval gates.
5. Define secrets management and environment configuration.
6. Define deployment, rollback, and migration steps.
7. Add release evidence requirements.

## Required Outputs

- CI/CD plan.
- Test matrix.
- Environment promotion policy.
- Release checklist.
- Rollback plan.

## Quality Checklist

- Tests run before production deployment.
- Secrets are not stored in code.
- Contract and quality tests are automated.
- Rollback path is documented.
- Release evidence is auditable.

## Common Mistakes To Avoid

- Testing only code syntax, not data behavior.
- Deploying from notebooks manually.
- Using production credentials in local development.
- Skipping rollback planning.

## Handoff To The Next Skill

Next use `de-project-evaluation` to decide whether the project is ready for production or needs remediation.

## Example Output Format

```markdown
# CI/CD And Testing Plan
| Test Type | Tool | Scope | Trigger | Blocking |
## Environments
## Deployment Steps
## Rollback Plan
```
