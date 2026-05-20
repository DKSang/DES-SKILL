---
name: de-data-contracts
description: Use when defining schema, freshness, ownership, compatibility, and quality agreements between data producers and consumers.
---

# de-data-contracts

## When To Use

Use after important Bronze, Silver, or Gold datasets are identified and before implementation hardens dependencies. Use for datasets consumed across teams, dashboards, APIs, AI agents, or ML features.

## Purpose

Create explicit data contracts so producers and consumers agree on schema, semantics, freshness, quality, change management, and ownership.

## Inputs Required

- Dataset specifications.
- Source owners and consumer owners.
- SLA requirements.
- Schema and metric definitions.
- Governance requirements.

## Step-By-Step Process

1. Identify contract-critical datasets.
2. Define producer, consumer, owner, and steward.
3. Specify schema fields, types, required flags, allowed values, and PII classification.
4. Define freshness, availability, and quality guarantees.
5. Define backward compatibility rules and change notice process.
6. Define contract tests in SQL, Python, dbt, Great Expectations, Soda, or platform-native checks.
7. Version the contract.

## Required Outputs

- Data contract per critical dataset.
- Schema standard.
- Compatibility and change policy.
- Contract test list.

## Quality Checklist

- Contract has named producer and consumer.
- Schema and semantic definitions are explicit.
- Freshness and quality guarantees are testable.
- Breaking change policy is documented.
- Contract version is recorded.

## Common Mistakes To Avoid

- Writing contracts only after consumers break.
- Treating schema as the whole contract.
- Forgetting semantic changes to metrics.
- Defining guarantees without tests.

## Handoff To The Next Skill

Next use `de-transformation-design` to turn layer specs and contracts into implementable transformation logic.

## Example Output Format

```markdown
# Data Contract
## Identity
## Schema
## Guarantees
## Compatibility
## Tests
## Owners
```
