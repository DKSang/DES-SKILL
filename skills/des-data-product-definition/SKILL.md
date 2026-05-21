---
name: des-data-product-definition
description: Use when requirements, KPIs, business questions, dashboards, APIs, semantic models, ML datasets, or data outputs need a clear data product boundary, consumer, owner, lifecycle, trust level, or service expectation.
---

# des-data-product-definition

## Purpose

Use this skill to create the Data Product Specification for any data engineering project.

This skill defines the data product boundary, target consumers, supported use cases, product outputs, service expectations, ownership, freshness, trust expectations, access pattern, and lifecycle status.

The goal is to ensure the project delivers a usable data product rather than a collection of disconnected pipelines, tables, dashboards, or scripts.

## When To Use

Use this skill when:

- Phase 1 Business Discovery exists;
- Phase 2 Business Question Catalog exists;
- Phase 3 Requirements and KPI Catalog exists;
- consumers, business questions, requirements, KPIs, or success criteria need to be packaged into a defined data product;
- the user asks for dashboards, semantic models, APIs, ML datasets, data sharing, operational data outputs, or customer-facing analytics;
- the workflow router selects Phase 4.

Do not use this skill to design physical tables, source ingestion, transformations, data contracts, orchestration, semantic model details, dashboards, APIs, or code.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- workflow status file, if present;
- approved consumers, target decisions, P1/P2 questions, requirements, KPIs, scope, non-scope, constraints, and success criteria.

If the Requirements and KPI Catalog is missing or too weak, stop and ask whether to route back to `des-requirements-and-kpis`.

## Output File

Create or update the configured `output_file`:

```text
.agents/des-skill/output/04-data-product-specification.md
```

The artifact must capture:

- data product name;
- product intent;
- primary and secondary consumers;
- supported use cases;
- product outputs;
- product boundary;
- non-scope;
- service expectations;
- freshness/SLA expectations;
- quality and trust expectations;
- access and serving expectations;
- ownership and stewardship;
- lifecycle status;
- dependencies;
- data contract expectations;
- governance and security considerations;
- success criteria;
- assumptions;
- risks;
- open questions;
- next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent consumers, product outputs, service levels, owners, or product boundaries.
8. Do not design physical tables, sources, pipelines, transformations, full data contracts, dashboards, semantic model internals, APIs, application implementation, or code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream discovery, questions, requirements, and KPI context.
2. Identify the candidate data product and its consumers.
3. Define the product boundary and first release scope.
4. Define supported use cases and product outputs.
5. Define service expectations, trust expectations, and ownership.
6. Identify dependencies, risks, assumptions, and open questions.
7. Ask HALT questions for unresolved product boundary, consumer, output, SLA, and ownership decisions.
8. Draft the Data Product Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- treat every table or dashboard as a data product automatically;
- define a data product without a consumer;
- define a data product without a supported use case;
- define product output without access expectations;
- define SLA without owner or consumer need;
- assume self-service availability without approval;
- design physical schemas or Gold tables in this phase;
- write data contracts in full; only capture contract expectations;
- mark the artifact Done if product owner, consumer, product output, or product boundary is unresolved.

## HALT Policy

This skill must stop when a product definition decision cannot be safely inferred.

Stop especially when:

- primary consumer is unclear;
- product boundary is unclear;
- first release output is unclear;
- product owner or steward is unclear;
- product lifecycle status is unclear;
- service/freshness expectation is unclear;
- supported use case conflicts with scope or requirements;
- the user asks for implementation before data product definition is complete.

## Quality Checklist

- [ ] Upstream discovery, question, and requirements artifacts exist or Draft continuation is explicitly accepted.
- [ ] Data product name and intent are defined.
- [ ] Primary consumer and supported use case are defined.
- [ ] Product outputs and first release output are clear.
- [ ] Product boundary and non-scope are documented.
- [ ] Service, freshness, trust, and access expectations are documented.
- [ ] Owner, steward, and lifecycle status are defined.
- [ ] The artifact does not design physical schemas, ingestion, transformations, full contracts, semantic internals, dashboards, APIs, application implementation, or code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| --- | --- |
| Calling a table or dashboard the data product by default | A product also needs consumer, promise, owner, lifecycle, access, trust, and support expectations. |
| Defining products without consumers | No consumer means no usable scope, success criteria, service level, or prioritization. |
| Combining unrelated consumers and outputs into one vague product | Ownership, contracts, and service expectations become unstable. |
| Treating service expectations as implementation details | Freshness, trust, support, and access expectations drive later architecture, quality, and release gates. |
| Writing full contracts or schemas in Phase 4 | Contract and physical design belong to downstream phases after product boundary is approved. |

## Handoff To The Next Skill

Next use `des-data-source-assessment` after the Data Product Specification is created, checklist result is recorded, workflow status is updated, and unresolved P1 product decisions are either approved or explicitly marked Draft, Open, Deferred, or Blocked.
