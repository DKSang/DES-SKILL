---
name: using-des-skill
description: Use when starting, resuming, auditing, or coordinating any data engineering project with DES-SKILL installed.
---

# using-des-skill

## Purpose

Act as the DES-SKILL router and workflow coordinator. Use this skill before selecting any other DES-SKILL skill.

## Core Rule

Do not jump directly to coding, pipeline implementation, table design, or tool selection until the required upstream artifacts exist or the minimum missing input is collected.

## Operating Loop

1. Read `.agents/des-skill/DES-WORKFLOW.md`.
2. Read `.agents/des-skill/sprint-status/des-workflow-status.md` if it exists.
3. Detect the current project phase from the user request and existing artifacts.
4. Check whether required upstream artifacts exist and are good enough.
5. If an upstream artifact is missing, produce that artifact first using the matching skill.
6. If the current phase is ready, activate the matching DES-SKILL skill.
7. Write the required artifact to `.agents/des-skill/output/`.
8. Update `.agents/des-skill/sprint-status/des-workflow-status.md`.
9. Summarize what changed, where the artifact was written, and which skill should run next.

## Phase Routing

| Situation | Route To |
| --- | --- |
| Project idea is vague, tool-first, or missing business context | `de-business-discovery` |
| Business context exists but decision questions are unclear | `de-business-questions` |
| Questions exist but KPIs, SLA, grain, or metric ownership are unclear | `de-requirements-and-kpis` |
| Data product scope or consumers are unclear | `de-data-product-definition` |
| Data sources are unknown, risky, or not assessed | `de-data-source-assessment` |
| Business concepts, entities, or relationships are unclear | `de-domain-modeling` |
| Platform/tooling/layer architecture is undecided | `de-architecture-design` |
| Source ingestion strategy is unclear | `de-ingestion-design` |
| Raw/replayable dataset design is missing | `de-bronze-layer-design` |
| Cleaned/conformed dataset design is missing | `de-silver-layer-design` |
| Business-ready facts, dimensions, marts, or metrics are missing | `de-gold-layer-design` |
| Producer/consumer guarantees are missing | `de-data-contracts` |
| Transformation logic is not specified before coding | `de-transformation-design` |
| Data quality rules, severity, or actions are unclear | `de-data-quality` |
| Scheduling, dependencies, monitoring, alerts, or runbooks are missing | `de-orchestration-and-observability` |
| Semantic model design is missing | `de-semantic-model-design` |
| BI/API/AI/export serving design is missing | `de-serving-layer-design` |
| Lineage, metadata, or catalog expectations are missing | `de-lineage-and-metadata` |
| Ownership, security, retention, or governance is unclear | `de-governance-and-security` |
| Cost or performance needs review | `de-cost-and-performance-optimization` |
| Tests, CI/CD, release, rollback, or promotion are missing | `de-cicd-and-testing` |
| Project needs go/no-go review | `de-project-evaluation` |

## Artifact Gate

Before running a skill, check whether the expected upstream artifacts exist in `.agents/des-skill/output/`. If not, stop and create the earliest missing artifact.

Minimum recommended order:

```text
01-business-discovery.md
02-business-questions.md
03-requirements-and-kpis.md
04-data-product-definition.md
05-data-source-assessment.md
06-domain-modeling.md
07-architecture-design.md
08-ingestion-design.md
09-bronze-layer-design.md
10-silver-layer-design.md
11-gold-layer-design.md
12-data-contracts.md
13-transformation-design.md
14-data-quality.md
15-orchestration-and-observability.md
16-semantic-model-design.md
17-serving-layer-design.md
18-lineage-and-metadata.md
19-governance-and-security.md
20-cost-and-performance-optimization.md
21-cicd-and-testing.md
22-project-evaluation.md
```

## Status File

Use this file to keep agent sessions aligned:

`.agents/des-skill/sprint-status/des-workflow-status.md`

Use this template when creating the status file:

`.agents/des-skill/templates/workflow_status_template.md`

## Quality Checklist

- The selected skill matches the current project phase.
- Missing upstream artifacts are handled before downstream work.
- The output path is explicit.
- The workflow status is updated after each completed artifact.
- The next skill is recommended.
- The agent explains blockers instead of guessing.

## Common Mistakes To Avoid

- Treating DES-SKILL as a prompt library instead of a gated workflow.
- Skipping business discovery because a tool or platform has already been chosen.
- Designing Bronze/Silver/Gold tables before assessing source grain, ownership, and quality.
- Writing pipeline code before transformation logic, quality rules, and contract expectations are clear.
- Forgetting to update workflow status after producing an artifact.
