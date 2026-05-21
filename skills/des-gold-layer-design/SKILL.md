---
name: des-gold-layer-design
description: Use when creating the Gold Layer Specification for any data engineering project.
---

# des-gold-layer-design

## Purpose

Use this skill to create the Gold Layer Specification for any data engineering project.

This skill defines curated, consumer-ready Gold datasets, marts, aggregates, metric outputs, feature outputs, reporting outputs, or product-aligned datasets derived from trusted Silver data.

The Gold layer should be designed around approved business questions, KPIs, consumers, requirements, and data product outputs. It should not be a random collection of tables.

## When To Use

Use this skill when:

- Phase 10 Silver Layer Specification exists;
- trusted Silver entities/events need to be packaged for consumer-facing analytics, reports, semantic models, ML/AI datasets, APIs, exports, or product outputs;
- business questions need curated outputs;
- KPIs need metric-ready datasets;
- star schema, wide table, aggregate table, data mart, feature table, or serving dataset design is being discussed;
- the workflow router selects Phase 11.

Do not use this skill to write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- workflow status file, if present;
- P1/P2 business questions;
- approved KPIs and metric definitions;
- data product outputs;
- Silver dataset inventory;
- serving direction from architecture;
- access/security constraints;
- freshness/SLA expectations;
- quality expectations.

If the Silver Layer Specification is missing or too weak, stop and ask whether to route back to `des-silver-layer-design`.

## Output File

The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`.agents/des-skill/output/11-gold-layer-specification.md`

Use the matching template from:

`.agents/des-skill/templates/11-gold-layer-specification-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

The artifact must capture:

- Gold layer summary
- Gold scope and non-scope
- Gold design principles
- Business Question to Gold Mapping
- Requirement and KPI to Gold Mapping
- Silver to Gold Mapping
- Gold Dataset Inventory
- Gold Output Type
- Consumer and Serving Alignment
- Grain and Aggregation Rules
- Metric and KPI Definitions Used
- Dimension Fact Aggregate and Output Model Decisions
- Filtering and Slicing Expectations
- History and Slowly Changing Behavior
- Freshness and SLA Expectations
- Gold Boundary Data Quality Rules
- Access Control and Security Handling
- Contract Expectations
- Lineage and Traceability
- Performance and Cost Considerations
- Risks
- Assumptions
- Open Questions
- Next Skill Recommendation

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent Gold datasets, metric definitions, aggregation rules, grain, or consumer outputs.
8. Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or deploy pipelines.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Silver, KPI, product, and serving context.
2. Identify P1/P2 business questions and product outputs requiring Gold datasets.
3. Define Gold dataset boundaries and output types.
4. Map Silver datasets to Gold outputs.
5. Define grain, aggregation, metric, history, and slicing rules.
6. Define quality, freshness, access, contract, and lineage expectations.
7. Ask HALT questions for unresolved Gold output, metric, grain, aggregation, and serving decisions.
8. Draft the Gold Layer Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- create Gold tables because they are convenient rather than because they serve a question/use case;
- define final metric formulas that conflict with Phase 3;
- invent KPI definitions;
- aggregate data without approved grain and aggregation rules;
- mix unrelated consumers into one unclear Gold output;
- design semantic model internals in this phase;
- design dashboard layout or API implementation;
- hide dependency on unresolved Silver identity/source-of-truth issues;
- mark Gold datasets Ready if business question mapping, grain, KPI mapping, quality rules, lineage, or serving expectation is unresolved.

## HALT Policy

This skill must stop when a Gold design decision cannot be safely inferred.

Stop especially when:

- upstream Silver specification is missing;
- P1 business questions do not map to Gold outputs;
- Gold dataset boundary is unclear;
- consumer or serving path is unclear;
- metric formula conflicts with Phase 3;
- grain or aggregation rule is unclear;
- dimension/fact/aggregate/output type is unclear;
- history or slowly changing behavior is unclear;
- freshness/SLA expectation is unclear;
- Gold quality rule is missing;
- access/security handling is unclear;
- lineage to Silver/Bronze is incomplete.

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

- [ ] Each P1 business question maps to a Gold output or is explicitly deferred.
- [ ] Each P1 product output maps to a Gold dataset or is explicitly deferred.
- [ ] Each P1 Gold dataset has a declared grain, consumer, and serving direction.
- [ ] Star schema, fact/dimension, aggregate table, or other model pattern is chosen.
- [ ] Metric and KPI usage aligns with Phase 3 definitions.
- [ ] History/SCD behavior is explicitly documented.
- [ ] Freshness/SLA expectations are defined.
- [ ] Gold boundary quality rules are established.
- [ ] Access control and security classification are specified.
- [ ] Contract expectation and lineage back to Silver/Bronze are documented.
- [ ] The artifact does not design detailed dashboard visuals, write SQL/Python transformation code, or include pipeline implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Creating Gold tables without a clear consumer/question | Unused datasets create technical debt, waste compute/storage, and confuse users |
| Redefining metrics inconsistently with Phase 3 | Creates conflicting numbers in downstream reports, destroying trust in the platform |
| Designing a single monolithic table for all consumers | Creates a rigid, slow-performing model that is hard to maintain and security-gate |
| Writing SQL/Python transformation logic here | Premature optimization; focus on logical/physical design, not code |
| Ignoring slowly changing dimension history | Causes report metrics to shift or overwrite history incorrectly when dimensions change |

## Handoff To The Next Skill

Recommend `des-data-contracts` only after the Gold Layer Specification is complete or explicitly marked Draft with open questions and accepted risks.
