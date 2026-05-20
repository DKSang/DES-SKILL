---
name: de-project-evaluation
description: Use when reviewing a data engineering project for production readiness, release approval, quality gaps, operational risks, or continuous improvement planning.
---

# de-project-evaluation

## When To Use

Use at the end of a project phase, before production release, after an incident, or during a platform maturity review.

## Purpose

Evaluate whether the data product is ready to operate, trusted by users, monitored, governed, and maintainable.

## Inputs Required

- All prior project artifacts.
- Test and CI results.
- Data quality results.
- Pipeline run evidence.
- User acceptance feedback.
- Known risks and incidents.

## Step-By-Step Process

1. Review business acceptance against original goals and KPIs.
2. Check source readiness and stability.
3. Check architecture, ingestion, medallion layers, contracts, transformations, and quality gates.
4. Check orchestration, monitoring, alerts, and runbooks.
5. Check serving layer correctness and user acceptance.
6. Check governance, security, lineage, retention, and access.
7. Review CI/CD evidence and rollback readiness.
8. Produce go, no-go, or conditional-go recommendation with remediation actions.

## Required Outputs

- Release readiness review.
- Risk register.
- Remediation plan.
- Go/no-go recommendation.
- Continuous improvement backlog.

## Quality Checklist

- Recommendation is evidence-based.
- Critical risks have owners and deadlines.
- Production blockers are clearly separated from improvements.
- Business users validate outputs.
- Operations team can support the release.

## Common Mistakes To Avoid

- Declaring success because pipelines run once.
- Ignoring support and incident response.
- Treating data quality warnings as harmless without business review.
- Releasing without rollback or owner coverage.

## Handoff To The Next Skill

For a new iteration, return to `de-business-discovery` or the earliest skill affected by the change request.

## Example Output Format

```markdown
# Release Readiness Review
## Decision: Go / No-Go / Conditional Go
| Area | Status | Evidence | Risk | Owner |
## Blockers
## Remediation Plan
## Improvement Backlog
```
