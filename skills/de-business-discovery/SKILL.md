---
name: de-business-discovery
description: Use when beginning any data engineering project, before requirements, architecture, data modeling, ingestion, or implementation work has enough business context.
---

# de-business-discovery

## When To Use

Use this skill at project start, when a user describes a data idea, dashboard, pipeline, AI agent, data platform, migration, analytics need, or operational reporting problem without a clear business brief.

## Purpose

Create a practical business discovery brief that prevents premature coding and anchors the project in decisions, users, scope, and measurable outcomes.

## Inputs Required

- Business domain and problem statement.
- Target users or stakeholder groups.
- Current pain points.
- Known data products or reports.
- Known constraints, deadlines, or systems.

## Step-By-Step Process

1. Restate the business problem in plain language.
2. Identify decisions the data platform must support.
3. List stakeholders, their roles, and their pain points.
4. Define in-scope and out-of-scope capabilities.
5. Capture operational constraints such as budget, team skills, regulatory limits, and latency needs.
6. Identify initial data products: dashboards, APIs, semantic models, files, reverse ETL, or AI agents.
7. Record assumptions and open questions with owners.

## Required Outputs

- Business discovery brief.
- Stakeholder and decision matrix.
- Scope and non-scope list.
- Initial data product list.
- Open question log.

## Quality Checklist

- The problem is stated without tool names.
- Every stakeholder has a decision or workflow.
- Scope is narrow enough for a first delivery.
- Open questions have owners or next actions.
- No implementation technology is selected yet unless it is a hard constraint.

## Common Mistakes To Avoid

- Starting with Spark, dbt, Airflow, or cloud services before understanding the business decision.
- Treating a dashboard request as the business problem.
- Ignoring non-functional constraints.
- Accepting vague users such as "the business" without naming roles.

## Handoff To The Next Skill

Next use `de-business-questions` to translate the discovery brief into business questions that guide data product, model, and metric design.

## Example Output Format

```markdown
# Business Discovery Brief
## Problem
## Stakeholders And Decisions
| Stakeholder | Decision | Pain Point | Success Signal |
## Scope
## Initial Data Products
## Assumptions
## Open Questions
```
