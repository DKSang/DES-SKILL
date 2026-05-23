---
name: des-business-questions
description: Use when Phase 1 context exists and business questions are vague, duplicated, unprioritized, unmapped to consumers, or needed before KPI and data product design.
---

# des-business-questions

## Purpose

Use this skill to create the Business Question Catalog for any data engineering project.

This skill converts the approved business discovery context into explicit, prioritized, answerable business questions or use-case questions. These questions guide requirements, KPIs, source assessment, domain modeling, Gold table design, semantic modeling, serving design, and release evaluation.

## When To Use

Use this skill when:

- Phase 1 Business Discovery is complete or available as a draft;
- stakeholders, consumers, target decisions, or expected value are known enough to derive questions;
- the user wants dashboards, reports, APIs, ML datasets, data products, or analytics but the exact questions are unclear;
- existing questions are vague, duplicated, unprioritized, or not mapped to consumers;
- the workflow router selects Phase 2.

Do not use this skill to define final KPI formulas, design tables, choose data sources, write SQL, design dashboards, create data contracts, or implement pipelines.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- workflow status file, if present;
- known consumers and stakeholders;
- target decisions or use cases;
- expected value and initial success criteria;
- scope and non-scope from Phase 1.

If the Phase 1 artifact is missing, stale, or incomplete, stop and ask whether to route back to `des-business-discovery`.

## Output File

Create or update the configured `output_file`:

```text
_des-output/planning-artifacts/02-business-question-catalog.md
```

The artifact must capture:

- business questions;
- consumer or stakeholder for each question;
- decision or use case supported;
- question type;
- priority;
- expected answer format;
- candidate metrics, not final KPI definitions;
- freshness expectation;
- grain hints;
- source hints, if known;
- dependencies;
- assumptions;
- open questions;
- next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent stakeholder priorities, consumer needs, target decisions, or business questions without evidence.
8. Do not define final KPI formulas in this phase.
9. Do not design tables, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm Phase 1 context is available.
2. Extract consumers, target decisions, expected value, scope, and constraints.
3. Generate candidate business questions.
4. Classify and prioritize questions.
5. Identify question dependencies, freshness expectations, and candidate answer formats.
6. Ask HALT questions for priority, ambiguity, unsupported questions, and scope conflicts.
7. Draft the Business Question Catalog.
8. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- turn vague desires into approved questions without confirmation;
- assume every stakeholder request is in scope;
- prioritize questions without user or artifact evidence;
- define final KPI formulas;
- design Gold tables or metrics layer logic;
- choose sources before source assessment;
- mark the artifact Done if top-priority questions are unresolved.

## HALT Policy

This skill must stop when a required question decision cannot be safely inferred.

Stop especially when:

- the Phase 1 business discovery artifact is missing or inconsistent;
- primary consumer is unclear;
- question priority is unclear;
- a question is not answerable with plausible data;
- a question conflicts with Phase 1 scope or non-scope;
- a question implies KPI, ML, recommendation, compliance, or operational behavior that needs explicit approval.

Detailed HALT checkpoints are defined in `steps/`.

## Conventions

- Bare paths such as `steps/step-01-context-and-readiness.md` resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.
- Document output language follows project config.

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

- read only the current step file;
- execute steps in order;
- stop at every HALT checkpoint;
- keep unresolved questions as Draft/Open/Deferred/Out of Scope, not approved facts;
- run the configured checklist before status advances.

## Quality Checklist

- [ ] Phase 1 Business Discovery exists or Draft continuation is explicitly accepted.
- [ ] Each P1 question maps to a consumer.
- [ ] Each P1 question maps to a decision or use case.
- [ ] Each P1 question has clear business value and priority.
- [ ] Candidate metrics, source hints, and grain hints are clearly marked as hints.
- [ ] The catalog does not define final KPI formulas, sources, tables, dashboards, APIs, ML models, pipelines, contracts, or code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating dashboard names as business questions | A dashboard is a possible serving surface, not the question itself |
| Treating metrics as questions | Metrics are defined in Phase 3 after questions are approved |
| Treating table names as questions | Table design belongs downstream |
| Prioritizing all stakeholder requests equally | Downstream phases need MVP tradeoffs |
| Choosing data sources in Phase 2 | Source assessment belongs in Phase 5 |

## Handoff To The Next Skill

Recommend `des-requirements-and-kpis` only after the Business Question Catalog is complete or explicitly marked Draft with open questions and accepted risk.
