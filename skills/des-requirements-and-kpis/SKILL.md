---
name: des-requirements-and-kpis
description: Use when Phase 2 business questions need to become measurable data engineering requirements, KPI definitions, SLA expectations, acceptance criteria, or metric ownership decisions.
---

# des-requirements-and-kpis

## Purpose

Use this skill to create the Requirements and KPI Catalog for any data engineering project.

This skill converts approved business questions into functional requirements, non-functional requirements, candidate KPIs, metric definitions, SLA expectations, quality expectations, and acceptance criteria.

The goal is to ensure that later phases design sources, domain models, architecture, Gold tables, semantic layers, serving layers, tests, and release gates from explicit business and technical requirements rather than vague assumptions.

## When To Use

Use this skill when:

- Phase 2 Business Question Catalog exists;
- business questions need to become measurable requirements;
- stakeholders have asked for dashboards, reports, data products, ML datasets, APIs, or operational outputs but success criteria are unclear;
- KPI definitions are vague, conflicting, or undocumented;
- freshness, reliability, quality, security, or latency expectations are not explicit;
- the workflow router selects Phase 3.

Do not use this skill to design physical schemas, source ingestion, transformations, Gold tables, contracts, dashboards, semantic models, APIs, orchestration, or code.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- workflow status file, if present;
- approved or draft business questions;
- known consumers, decisions, scope, non-scope, constraints, and success criteria.

If the Business Question Catalog is missing or incomplete, stop and ask whether to route back to `des-business-questions`.

## Output File

Create or update the configured `output_file`:

```text
.agents/des-skill/output/03-requirements-and-kpi-catalog.md
```

The artifact must capture:

- requirement summary;
- functional requirements;
- non-functional requirements;
- KPI and metric catalog;
- metric definitions and formulas;
- metric grain;
- metric owner;
- business question mapping;
- consumer mapping;
- acceptance criteria;
- freshness/SLA expectations;
- quality expectations;
- security/privacy constraints;
- cost/performance constraints;
- assumptions;
- conflicts;
- open questions;
- next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent KPI formulas, metric owners, SLA levels, acceptance criteria, or quality thresholds.
8. Do not design tables, sources, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm Phase 1 and Phase 2 context.
2. Extract approved business questions, consumers, decisions, scope, and value drivers.
3. Convert questions into functional and non-functional requirements.
4. Define candidate KPIs and metrics.
5. Capture metric definition, formula, grain, owner, acceptance criteria, and conflicts.
6. Ask HALT questions for unresolved metric or SLA decisions.
7. Draft the Requirements and KPI Catalog.
8. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- define a metric without business meaning;
- define a KPI without grain;
- define a KPI without owner or approval status;
- assume freshness/SLA from vague words like "daily", "real-time", or "fast";
- resolve conflicting metric definitions by guessing;
- turn candidate metrics into approved KPIs without confirmation;
- design Gold tables or semantic model logic in this phase;
- mark the artifact Done if P1 business questions have no measurable requirement or success criterion.

## Quality Checklist

- [ ] Phase 1 and Phase 2 artifacts are available or Draft continuation is explicitly accepted.
- [ ] P1/P2 business questions are mapped to requirements.
- [ ] P1 functional requirements have consumers, priority, status, and acceptance criteria.
- [ ] Approved KPIs have business meaning, formula, grain, owner, and approval status.
- [ ] Candidate metrics are clearly marked as Candidate or Draft.
- [ ] Freshness/SLA expectations are explicit or marked unresolved.
- [ ] Metric conflicts are documented and not silently resolved.
- [ ] The artifact does not design sources, tables, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| --- | --- |
| Treating a candidate metric as an approved KPI | Later phases may encode an unapproved formula into Gold tables, semantic models, and tests. |
| Writing "daily", "fast", or "trusted" as a requirement | These words are not measurable until time, threshold, evidence, and severity are defined. |
| Defining KPI formulas without grain | The same formula can produce different values at event, entity, period, or segment grain. |
| Assigning no metric owner | No one can approve, change, or resolve conflicts in the KPI definition. |
| Designing tables in this phase | Physical design belongs to downstream phases after requirements are approved. |

## HALT Policy

This skill must stop when a requirement or metric decision cannot be safely inferred.

Stop especially when:

- upstream business questions are missing or unapproved;
- KPI formula is unclear;
- metric grain is unclear;
- metric owner is unclear;
- freshness/SLA expectation is unclear;
- acceptance criteria are missing;
- two stakeholders define the same metric differently;
- a requirement implies security, privacy, cost, or operational behavior that needs explicit approval.

## Handoff To The Next Skill

Next use `des-data-product-definition` after the Requirements and KPI Catalog is created, checklist result is recorded, workflow status is updated, and unresolved P1 metric decisions are either approved or explicitly marked Draft, Conflicting, or Deferred.
