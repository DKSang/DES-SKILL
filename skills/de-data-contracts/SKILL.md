---
name: de-data-contracts
description: Use when defining schema, freshness, ownership, compatibility, and quality agreements between data producers and consumers.
---

# de-data-contracts

## When To Use

Use after important Bronze, Silver, or Gold datasets are identified and before implementation hardens dependencies. Use for datasets consumed across teams, dashboards, APIs, AI agents, or ML features.

## Purpose

Create explicit data contracts so producers and consumers agree on schema, semantics, freshness, quality, change management, and ownership — before code is written, not after consumers break.

## Inputs Required

- Gold and Silver dataset specifications.
- Source owners and consumer teams.
- SLA requirements (`03-requirements-and-kpis.md`).
- Schema and metric definitions.
- Governance requirements.

## Decision Matrix — When a Contract Is Required

| Situation | Contract Required? |
| :--- | :--- |
| Dataset consumed by another team (cross-domain) | **Yes** — required |
| Dataset used in production dashboard or report | **Yes** — required |
| Dataset consumed by an API or application | **Yes** — required |
| Dataset used as ML training feature | **Yes** — required |
| Internal staging table used only within the same team | **No** — internal implementation detail |
| Scratch or exploratory dataset | **No** — not yet |

**Rule**: If a consumer outside the producing team depends on it, it needs a contract.

## Decision Matrix — Breaking vs. Compatible Change

| Change Type | Classification | Required Action |
| :--- | :--- | :--- |
| Add a new non-required column | Compatible | Notify consumers; no schema version bump |
| Rename an existing column | **Breaking** | Major version bump; migration guide required |
| Remove an existing column | **Breaking** | Major version bump; deprecation notice ≥ 30 days |
| Change a column data type | **Breaking** | Major version bump; explicit consumer re-certification |
| Change metric formula or grain | **Breaking (Semantic)** | Business owner sign-off + all consumer revalidation |
| Add a new required column | **Breaking** | Major version bump; all consumers must update |

## Step-By-Step Process

1. Identify all contract-required datasets using the Decision Matrix.
2. Define producer, consumer(s), owner, and steward for each contract.
3. Specify schema: fields, types, required flags, allowed values, and PII classification.
4. Define guarantees: freshness, availability SLA, completeness, and quality commitments.
5. Define backward compatibility rules using the Breaking vs. Compatible matrix.
6. Define the change management process: notice period, consumer sign-off, deprecation path.
7. Write contract tests (SQL, dbt tests, Great Expectations, Soda).
8. Version the contract using semantic versioning (MAJOR.MINOR.PATCH).

## Output File

Write the final artifact to:

`.agents/des-skill/output/12-data-contracts.md`

Use the matching template from:

`.agents/des-skill/templates/12-data-contracts-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Data contract per critical dataset (schema, guarantees, SLA, versioning).
- Breaking vs. compatible change classification policy.
- Change management process (notice periods, sign-off flow).
- Contract test suite definition.

## Quality Checklist

- [ ] Every contract has a named producer, consumer(s), and owner.
- [ ] Schema and semantic definitions are explicit — no "similar to X" references.
- [ ] Freshness and quality guarantees are testable — not just aspirational.
- [ ] Breaking change policy specifies minimum notice period and consumer migration support.
- [ ] Contract version is recorded using semantic versioning.
- [ ] Contract tests are implemented or explicitly scheduled.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Writing contracts only after consumers break | Reactive contracts capture the current broken state, not the agreed-upon design |
| Treating schema as the whole contract | Freshness, semantics, and quality guarantees are equally critical |
| Forgetting semantic changes to metrics | Formula changes are breaking changes even if schema is unchanged |
| Defining guarantees without implementing tests | Unverified contracts are just documentation — they provide false confidence |
| No versioning on the contract | Consumers cannot detect when a breaking change occurred |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | PII columns must be explicitly flagged in the contract schema section |
| Data Management | Contracts are the formal boundary of the data product — required in the catalog |
| DataOps | Contract tests must be part of CI/CD pipeline — failing tests block deployment |
| Data Architecture | Contract schema defines the interface; architecture must support schema evolution |
| Orchestration | Contract freshness SLA integrates with monitoring alerts in orchestration design |
| Software Engineering | Schema versioning follows semver — enforce via code review gate |

## Handoff To The Next Skill

Next use `de-transformation-design` to turn layer specs and contracts into implementable transformation logic.
