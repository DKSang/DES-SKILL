---
name: de-project-evaluation
description: Use when reviewing a data engineering project for production readiness, release approval, quality gaps, operational risks, or continuous improvement planning.
---

# de-project-evaluation

## When To Use

Use at the end of a project phase, before production release, after an incident, or during a platform maturity review.

## Purpose

Evaluate whether the data product is ready to operate, trusted by users, monitored, governed, and maintainable — and produce an evidence-based Go / No-Go / Conditional-Go recommendation.

## Inputs Required

- All prior project artifacts (01–21).
- CI/CD test results and staging run logs.
- Data quality rule pass/fail results.
- Pipeline run evidence (duration, row counts, DQ pass rates).
- User acceptance feedback from consumer teams.
- Known risks and open incidents.

## Decision Matrix — Go / No-Go Classification

| Evaluation Area | Go Criteria | No-Go Trigger |
| :--- | :--- | :--- |
| **Business acceptance** | Business consumer has reviewed and accepted outputs | Consumer has not reviewed; outputs do not match accepted metric definitions |
| **Data quality** | Zero FAIL-severity DQ violations in last 3 staging runs | Any FAIL-severity DQ violation unresolved |
| **Pipeline reliability** | P90 runtime within SLA in staging | SLA breached in staging; no remediation plan |
| **Security** | No credentials in code; RBAC/RLS tested | Credential scan fails; PII exposed in serving layer |
| **Rollback** | Rollback plan tested and < 30 min estimated | No rollback plan or rollback untested |
| **Consumer onboarding** | All consumer teams notified and onboarded | Consumers unaware of go-live; no onboarding guide |

## Risk Severity Classification

Classify every identified risk before issuing the recommendation:

| Severity | Definition | Action Required |
| :--- | :--- | :--- |
| **P1 — Blocker** | Will cause data loss, security breach, or hard SLA failure | Must be resolved before Go |
| **P2 — High** | Will cause significant degradation but not catastrophic | Must have a documented remediation plan with owner and deadline |
| **P3 — Medium** | Will cause minor issues or user confusion | Document in backlog; not a go/no-go gate |
| **P4 — Low** | Minor improvement opportunity | Log in continuous improvement backlog |

## Step-By-Step Process

1. Collect evidence for each evaluation area in the Decision Matrix.
2. Review business acceptance: does output match agreed KPI definitions?
3. Check data quality: run final staging DQ suite; review all FAIL and WARN results.
4. Check orchestration: P90 runtime in staging; retry behavior; DLQ status.
5. Check security: credential scan; RBAC/RLS test results; PII exposure audit.
6. Check rollback readiness: rollback plan tested; estimated duration documented.
7. Classify all identified risks using the Risk Severity Classification.
8. Issue recommendation: **Go** / **No-Go** / **Conditional-Go** (with explicit conditions to resolve).

## Output Files

Write the final artifacts to:

- `.agents/des-skill/output/22-project-evaluation.md`
- `.agents/des-skill/output/23-data-lifecycle-review.md` *(for quarterly post-production reviews)*

Use the matching templates from:

- `.agents/des-skill/templates/22-project-evaluation-template.md`
- `.agents/des-skill/templates/23-data-lifecycle-review-template.md`

After writing the files, summarize the recommendation and any P1/P2 items requiring resolution.

## Required Outputs

- Evidence-based evaluation against all 6 Go/No-Go criteria.
- Risk register with severity classification and owner per risk.
- Remediation plan for all P1 and P2 risks.
- Explicit recommendation: Go / No-Go / Conditional-Go.
- Continuous improvement backlog (P3/P4 items).

## Quality Checklist

- [ ] Recommendation is **evidence-based** — not based on effort or schedule pressure.
- [ ] Every P1 risk has a named owner and a hard deadline.
- [ ] All FAIL-severity DQ violations are resolved or have an accepted Conditional-Go plan.
- [ ] Business consumer has explicitly confirmed acceptance (email, meeting note, or sign-off document).
- [ ] Credential scan is clean — no secrets in code or CI/CD logs.
- [ ] Rollback plan is tested and estimated duration is documented.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Declaring Go because pipelines ran once in staging | One successful run does not prove reliability; SLA must be sustained across multiple runs |
| Ignoring WARN-severity DQ violations at release | WARNs at release often become FATALs in production as data volume grows |
| Releasing without consumer team notification | Consumers discover unexpected changes; trust in data platform erodes |
| Releasing without rollback coverage | First production incident requires manual data repair; estimated days of downtime |
| Treating this as a checklist exercise | Evaluation must include actual evidence (run logs, test results, DQ pass rates) |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Credential scan results, RBAC/RLS test evidence, PII audit output are Go/No-Go inputs |
| Data Management | Catalog entries, lineage documentation, and stewardship assignments verified complete |
| DataOps | CI/CD pipeline run log and test results are primary evidence for the evaluation |
| Data Architecture | Architecture validation: no one-way-door decisions made without alternatives considered |
| Orchestration | Runbook tested; on-call rotation confirmed; SLA monitors live |
| Software Engineering | Code review history verified; all production changes reviewed; no untested code paths |

## Handoff To The Next Skill

For a new iteration, return to `de-business-discovery` or the earliest skill affected by the change request. For quarterly post-production review, use `23-data-lifecycle-review-template.md`.
