---
name: des-semantic-model-design
description: Use when designing semantic models, metrics layers, measures, dimensions, hierarchies, and relationships for business-friendly data consumption.
---

# des-semantic-model-design

## Purpose

Use this skill to create the Semantic Model Specification for any data engineering project.

This skill defines how trusted Gold outputs are exposed to business users, analysts, BI tools, metrics layers, dashboards, AI agents, or applications through business-friendly semantic concepts.

It covers semantic entities, measures, dimensions, hierarchies, relationships, metric definitions, calculation ownership, naming conventions, filters, security, certification, lineage, usage rules, and consumer-facing meaning.

The goal is to prevent inconsistent metrics, ambiguous business terms, unsafe joins, unclear dimensions, and dashboard-level metric duplication.

## When To Use

Use this skill when:

- Phase 15 Orchestration and Observability Specification exists;
- Gold outputs are ready or planned for BI, semantic layer, dashboarding, analytics, AI agents, or self-service consumption;
- business users need friendly terms instead of physical table/column names;
- metrics and KPIs need consistent exposure;
- slicing/filtering dimensions need approval;
- semantic relationships and join behavior need clarity;
- row-level or column-level security affects consumption;
- the workflow router selects Phase 16.

Do not use this skill to build dashboards, write DAX/LookML/SQL/Cube/dbt semantic code, create BI visuals, implement APIs, deploy semantic models, or create CI/CD workflows.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/13-transformation-specification.md`;
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
- workflow status file, if present;
- approved KPIs and metric definitions;
- Gold datasets and grain;
- Gold quality and freshness expectations;
- semantic/BI serving direction;
- consumers and personas;
- access/security requirements;
- glossary/domain concepts.

If the Gold Layer Specification or KPI definitions are missing or too weak, stop and ask whether to route back to `des-gold-layer-design` or `des-requirements-and-kpis`.

## Output File

Create or update:

```text
_des-output/planning-artifacts/16-semantic-model-specification.md
```

The artifact must capture:

* semantic model summary;
* semantic scope and non-scope;
* semantic design principles;
* semantic model inventory;
* consumer and use-case mapping;
* Gold-to-semantic mapping;
* business glossary alignment;
* semantic entities;
* measures and KPIs;
* dimensions and attributes;
* hierarchies;
* relationships and join behavior;
* grain and aggregation behavior;
* filters and slicers;
* time intelligence expectations;
* calculation ownership;
* naming and display conventions;
* security and access model;
* certification and trust status;
* freshness and quality display expectations;
* lineage and metadata expectations;
* semantic testing expectations;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent metric formulas, business terms, relationships, hierarchies, security rules, or certified status.
8. Do not write DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboard, API, or deployment code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Gold, KPI, contract, quality, and serving context.
2. Identify semantic consumers and use cases.
3. Map Gold datasets to semantic entities, measures, and dimensions.
4. Define approved measures/KPIs and aggregation behavior.
5. Define dimensions, hierarchies, filters, and time intelligence expectations.
6. Define relationships and join behavior.
7. Define security, certification, ownership, freshness, and quality visibility.
8. Ask HALT questions for unresolved semantic decisions.
9. Draft the Semantic Model Specification.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* define metrics differently from Phase 3 or Phase 11;
* expose ambiguous metrics without status or warning;
* hide grain or aggregation behavior;
* create relationships that cause double counting without warning;
* expose technical names directly when business-friendly naming is needed;
* assume row-level or column-level security rules;
* mark a semantic model Certified unless quality, ownership, lineage, and contract expectations support it;
* design dashboard visuals in this phase;
* implement semantic model code in this phase.

## HALT Policy

This skill must stop when a semantic decision cannot be safely inferred.

Stop especially when:

* Gold outputs or KPI definitions are missing;
* semantic scope is unclear;
* consumer/use case is unclear;
* metric definition is missing or conflicting;
* measure aggregation is unclear;
* relationship/join behavior is unclear;
* dimension hierarchy is unclear;
* time intelligence expectation is unclear;
* row-level or column-level security is unclear;
* certification/trust status is unclear;
* ownership is missing;
* semantic model conflicts with contract or quality expectations.

Detailed HALT checkpoints are defined in `steps/`.

## Quality Checklist

- [ ] Semantic scope and principles are defined.
- [ ] Semantic model inventory is created.
- [ ] Consumer/use-case mapping is documented.
- [ ] Gold-to-semantic mapping is documented.
- [ ] Business glossary alignment is documented.
- [ ] Semantic entities are documented.
- [ ] Measures/KPIs are documented.
- [ ] Dimensions/attributes are documented.
- [ ] Hierarchies are documented where relevant.
- [ ] Relationships/join behavior is documented.
- [ ] Grain/aggregation behavior is documented.
- [ ] Filters/slicers are documented.
- [ ] Time intelligence expectations are documented.
- [ ] Calculation ownership is documented.
- [ ] Naming/display conventions are documented.
- [ ] Security/access model is documented.
- [ ] Certification/trust status is documented.
- [ ] Freshness/quality display expectations are documented.
- [ ] Lineage/metadata expectations are documented.
- [ ] Semantic testing expectations are documented.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Metric duplication across dashboards | Causes inconsistent definitions and business confusion |
| Exposing technical table/column names | Reduces usability for business users and analytics tools |
| Ambiguous relationships/joins | Leads to accidental double counting or wrong results |
| Ignoring row-level or column-level security | Violates governance and privacy requirements |
| Certified metrics without documentation | Reduces trust and makes it harder to audit or debug |
| Designing visuals instead of semantic layer | Prematurely locks design into one BI tool's visualization capabilities |

## Handoff To The Next Skill

Recommend `des-serving-layer-design` only after the Semantic Model Specification is complete or explicitly marked Draft with open questions and accepted risk.
