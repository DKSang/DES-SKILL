---
name: de-business-questions
description: Use when translating business discovery into concrete business questions before KPI, data product, domain model, or analytics model design.
---

# de-business-questions

## When To Use

Use after business discovery and before KPI design. Use when goals are known but the exact questions the data platform must answer are still implicit, vague, or mixed with implementation ideas.

## Purpose

Create a business question catalog that connects stakeholder decisions to metrics, entities, sources, data products, and model design.

## Inputs Required

- Business discovery brief.
- Stakeholders and decisions.
- Initial data product ideas.
- Known constraints and open questions.

## Step-By-Step Process

1. List stakeholder decisions from the discovery brief.
2. Convert each decision into one or more business questions.
3. Define each question's audience, decision, priority, spatial or organizational grain, time grain, and expected answer format.
4. Identify required measures, dimensions, entities, and filters.
5. Mark whether each question needs descriptive, diagnostic, predictive, prescriptive, or operational output.
6. Flag ambiguous terms that need glossary definitions.
7. Map each business question to candidate KPIs, data products, and domain entities.

## Required Outputs

- Business question catalog.
- Question-to-stakeholder mapping.
- Question-to-KPI candidate mapping.
- Ambiguous term backlog.

## Quality Checklist

- Every question supports a named decision.
- Every question has an audience and priority.
- Grain and time window are explicit.
- Questions avoid tool names and implementation assumptions.
- Ambiguous business terms are captured for definition.

## Common Mistakes To Avoid

- Treating report titles as business questions.
- Writing questions without a decision or user.
- Skipping grain, filters, and time window.
- Jumping from questions directly to tables before domain modeling.

## Handoff To The Next Skill

Next use `de-requirements-and-kpis` to turn prioritized business questions into measurable KPIs, reporting requirements, freshness targets, and SLAs.

## Example Output Format

```markdown
# Business Question Catalog
| ID | Question | Stakeholder | Decision | Grain | Time Window | Measures | Dimensions | Priority |
| BQ-001 | Revenue by channel by week? | Growth Lead | Allocate campaign budget | Channel-week | Last 12 weeks | Revenue | Channel, region | High |
## Ambiguous Terms
## KPI Candidates
```
