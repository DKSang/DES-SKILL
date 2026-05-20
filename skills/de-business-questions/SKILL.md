---
name: de-business-questions
description: Use when translating business discovery into concrete business questions before KPI, data product, domain model, or analytics model design.
---

# de-business-questions

## When To Use

Use after business discovery and before KPI design. Use when goals are known but the exact questions the data platform must answer are still implicit, vague, or mixed with implementation ideas.

## Purpose

Create a business question catalog that connects stakeholder decisions to metrics, entities, sources, data products, and model design — ensuring every analytical output is tied to a real business decision.

## Inputs Required

- Business discovery brief (`01-business-discovery.md`).
- Stakeholders and their decision workflows.
- Initial data product ideas.
- Known constraints and open questions.

## Decision Matrix — Analytical Output Type

| Business Question Type | Analytical Output Required |
| :--- | :--- |
| "What happened / how much?" | **Descriptive** — historical metrics, aggregated KPIs |
| "Why did it happen?" | **Diagnostic** — drill-down, cohort analysis, root cause dashboards |
| "What will happen?" | **Predictive** — ML models, forecast features, trend projections |
| "What should we do?" | **Prescriptive** — optimization recommendations, decision support |
| "What is happening right now?" | **Operational** — near-real-time alerting, live dashboards |

Use this classification to guide the analytical architecture: Descriptive/Diagnostic → Gold batch; Predictive → ML feature store; Operational → streaming aggregate.

## Step-By-Step Process

1. List every stakeholder decision documented in the discovery brief.
2. Convert each decision into one or more answerable business questions.
3. For each question, define: audience, decision enabled, priority, grain, time window, and output type (use Decision Matrix).
4. Identify required measures, dimensions, entities, and filter conditions.
5. Flag ambiguous terms (e.g., "Revenue", "Active User", "Churn") that need glossary resolution.
6. Verify: can the question be answered with existing or acquirable source data?
7. Map each business question to candidate KPIs, data products, and domain entities.

## Output File

Write the final artifact to:

`.agents/des-skill/output/02-business-questions.md`

Use the matching template from:

`.agents/des-skill/templates/02-business-questions-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Business question catalog with grain, time window, and analytical output type.
- Question-to-stakeholder mapping.
- Question-to-KPI candidate mapping.
- Ambiguous term backlog with owner for resolution.

## Quality Checklist

- [ ] Every question is connected to a named stakeholder decision or action.
- [ ] Every question has an explicit grain (e.g., "per region per week") and time window.
- [ ] Analytical output type is assigned (Descriptive / Diagnostic / Predictive / Prescriptive / Operational).
- [ ] No question contains tool names or implementation choices.
- [ ] All ambiguous business terms are captured in the glossary backlog.
- [ ] Questions are validated as answerable from assessed or acquirable sources.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating report titles as questions ("Sales Dashboard") | Not a question — no decision, no grain, no answerability test |
| Writing questions without a named decision or user | Questions without stakeholders have no priority or acceptance criteria |
| Skipping grain and time window | "Revenue by region" could mean daily, monthly, YTD — ambiguity causes wrong Gold model design |
| Jumping from questions directly to table design | Domain modeling and KPI definition must come first to avoid rework |
| Accepting "the business" as the stakeholder | Too vague — name the specific role or team responsible for the decision |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Flag questions that require access to PII or regulated data early |
| Data Management | Ambiguous terms identified here feed the business glossary |
| DataOps | Predictive/Operational questions require streaming or ML pipelines — flag for architecture decisions |
| Data Architecture | Analytical output type directly constrains architecture choices |
| Orchestration | Time window and freshness requirements constrain pipeline schedule design |
| Software Engineering | Questions with conflicting definitions must be resolved before any code is written |

## Handoff To The Next Skill

Next use `de-requirements-and-kpis` to turn prioritized business questions into measurable KPIs, reporting requirements, freshness targets, and SLAs.
