---
name: des-business-discovery
description: Use when starting a data engineering project, the project idea is vague or solution-first, business context is missing, or the workflow router selects Phase 1.
---

# des-business-discovery

## Purpose

Use this skill to create the Business Discovery Brief for any data engineering project.

This skill helps the agent understand the business problem, target consumers, downstream use cases, decision context, maturity level, constraints, risks, and initial success criteria before technical design or implementation begins.

## When To Use

Use this skill when:

- starting a new data engineering project;
- the project idea is vague or solution-first;
- the user asks for architecture, ingestion, warehouse/lakehouse, dashboard, ML, API, or implementation before business context is clear;
- existing work lacks a documented business discovery artifact;
- the workflow router selects Phase 1.

Do not use this skill to design schemas, pipelines, transformations, data contracts, dashboards, ML models, or code.

## Required Inputs

The agent should look for:

- project idea or problem statement;
- existing README, PRD, brief, proposal, ticket, or notes;
- known stakeholders or consumers;
- known business goals or decision needs;
- known constraints such as platform, cost, deadline, compliance, or team capability;
- workflow status file, if present.

If these inputs are missing, continue only as Draft and use HALT checkpoints for unresolved decisions.

## Output File

Create or update the configured `output_file`:

```text
.agents/des-skill/output/01-business-discovery-brief.md
```

The artifact must capture:

- project intent;
- business problem;
- stakeholders and downstream consumers;
- target decisions or use cases;
- expected business value;
- data maturity context;
- scope and non-scope;
- constraints;
- assumptions;
- risks;
- initial success criteria;
- open questions;
- recommended next skill.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent business goals, stakeholders, consumer priorities, maturity level, or success criteria.
8. Do not write implementation code.
9. Do not design physical tables, pipelines, architecture, contracts, or serving layers in this phase.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm whether business discovery is the correct next step.
2. Gather available project context and evidence.
3. Identify stakeholders, consumers, business problem, target use cases, and expected value.
4. Assess initial data maturity and delivery constraints.
5. Ask required HALT questions for important decisions.
6. Draft the Business Discovery Brief.
7. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- start from tools or technology;
- assume the primary consumer;
- assume project maturity without evidence;
- define final KPI formulas in this phase;
- design ingestion, Medallion layers, contracts, semantic models, dashboards, or CI/CD;
- mark the artifact Done if project intent, primary consumer, target use case, or success criteria are unresolved.

## HALT Policy

This skill must stop when a required business decision cannot be safely inferred.

Stop especially when:

- project intent is unclear;
- primary consumer is unclear;
- business problem is vague;
- target decision or use case is not defined;
- MVP boundary is not agreed;
- success criteria are missing;
- the user asks for implementation before discovery is complete.

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
- keep unresolved decisions as open questions, not assumptions;
- run the configured checklist before status advances.

## Quality Checklist

- [ ] Project intent is defined or the artifact remains Draft.
- [ ] Business problem is stated in non-technical language.
- [ ] Primary consumer or stakeholder group is identified.
- [ ] At least one target decision or use case is identified.
- [ ] Expected value is documented.
- [ ] MVP or first-release scope is defined or explicitly unresolved.
- [ ] Constraints, assumptions, risks, success criteria, and open questions are captured.
- [ ] The artifact does not design schemas, pipelines, architecture, contracts, dashboards, ML models, or code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Starting from a tool or platform | Technology preference is not business intent |
| Treating dashboard, API, ML, or lakehouse as the business goal | These are possible serving or implementation ideas |
| Inventing the primary consumer | Downstream questions, KPIs, contracts, and quality expectations drift |
| Defining final KPI formulas in discovery | KPI design belongs in `des-requirements-and-kpis` |
| Marking Done with unresolved discovery decisions | Downstream phases inherit hidden assumptions |

## Handoff To The Next Skill

Recommend `des-business-questions` only after the Business Discovery Brief is complete or explicitly marked Draft with open questions and accepted risk.
