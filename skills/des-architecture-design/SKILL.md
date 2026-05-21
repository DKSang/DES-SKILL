---
name: des-architecture-design
description: Use when designing the global data architecture, including storage, compute, integration patterns, layer strategy, environment promotion, security posture, and decision reversibility.
---

# des-architecture-design

## Purpose

Use this skill to create the Architecture Decision Record for any data engineering project.

This skill defines the target data architecture, architectural principles, lifecycle alignment, environment strategy, storage and compute strategy, integration pattern, serving direction, orchestration boundary, security posture, governance expectations, DataOps expectations, cost/performance considerations, and major trade-off decisions.

The goal is to create a strategic architecture blueprint before detailed ingestion, storage layer, transformation, serving, orchestration, CI/CD, or implementation work begins.

## When To Use

Use this skill when:

- Phase 6 Conceptual Domain Model exists;
- the project needs an architecture blueprint before implementation;
- the user asks for lakehouse, warehouse, data lake, streaming, batch, event-driven, API, ML/AI, semantic layer, data platform, or cloud architecture;
- tool choices are being discussed before architecture trade-offs are clear;
- platform, environment, storage, compute, orchestration, serving, governance, or cost decisions need approval;
- the workflow router selects Phase 7.

Do not use this skill to design ingestion pipeline steps, physical table schemas, Bronze/Silver/Gold details, transformation SQL/Python, full data contracts, CI/CD workflow files, dashboards, APIs, semantic model internals, or implementation code.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- workflow status file, if present;
- known platform constraints;
- known team capability constraints;
- known cost constraints;
- known security/governance constraints;
- known freshness, reliability, and serving expectations.

If the Conceptual Domain Model is missing or too weak, stop and ask whether to route back to `des-domain-modeling`.

## Output File

Create or update the configured `output_file`:

```text
.agents/des-skill/output/07-architecture-decision-record.md
```

The template file `template_file` is located at:

```text
.agents/des-skill/templates/07-architecture-decision-record-template.md
```

The checklist file `checklist_file` is located at:

```text
.agents/des-skill/checklists/07-architecture-design-checklist.md
```

The artifact must capture:

- Architecture Summary
- Decision Context
- Architecture Goals
- Architecture Principles
- Target Architecture Overview
- Lifecycle Alignment
- Environment Strategy
- Storage Strategy
- Compute Strategy
- Batch Streaming and Event Strategy
- Integration Pattern
- Layer Strategy
- Serving Strategy
- Orchestration Boundary
- Observability Direction
- Security and Privacy Posture
- Governance and Metadata Direction
- DataOps and Software Engineering Direction
- Build Versus Buy Considerations
- Technology Constraints and Options
- Architecture Decisions
- Trade-Offs
- Reversibility Classification
- Risks
- Assumptions
- Open Questions
- Next Skill Recommendation

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent platform choices, architecture constraints, environment strategy, security posture, cost limits, or service levels.
8. Do not select tools before architecture decisions are clear.
9. Do not design physical schemas, detailed pipelines, transformations, dashboards, APIs, CI/CD files, or code.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream business, product, source, and domain context.
2. Identify architecture drivers and constraints.
3. Define architecture principles.
4. Evaluate candidate architecture options.
5. Make architecture decisions with trade-offs.
6. Classify decisions as reversible or hard to reverse.
7. Identify risks, assumptions, dependencies, and unresolved questions.
8. Draft the Architecture Decision Record.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- describe tools as the architecture by themselves;
- choose technology because it is trendy;
- ignore business value, consumers, domain, requirements, or source realities;
- ignore security, governance, DataOps, observability, and cost;
- create tightly coupled architecture without justification;
- make hard-to-reverse decisions without explicit approval;
- assume batch, streaming, lakehouse, warehouse, data mesh, or event-driven architecture is required without evidence;
- mark the artifact Done if target architecture, environment strategy, storage/compute direction, security posture, or major trade-offs are unresolved;
- design detailed ingestion pipeline steps, physical table schemas, Bronze/Silver/Gold details, transformation SQL/Python, full data contracts, dashboards, APIs, semantic model internals, or implementation code.

## HALT Policy

This skill must stop when an architecture decision cannot be safely inferred.

Stop especially when:

- upstream domain/source/product context is missing;
- target platform or deployment environment is unclear;
- architecture scope is unclear;
- batch versus streaming/event requirements are unclear;
- storage and compute strategy is unclear;
- environment strategy is unclear;
- security/privacy posture is unclear;
- cost or team capability constraints are unknown;
- a decision is hard to reverse;
- architecture option conflicts with requirements or data product expectations.

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

- [ ] Architecture supports all stated requirements and KPIs.
- [ ] Storage format and platform choices are labeled by reversibility with a documented rationale.
- [ ] At least 2 alternatives were considered for each major decision.
- [ ] No tool was chosen purely because it is popular — each choice has a business/technical rationale.
- [ ] Undercurrents (Security, Data Management, DataOps, Architecture, Orchestration, Software Engineering) are addressed.
- [ ] Rejected options are documented with reasons in ADRs.
- [ ] The artifact does not design physical schemas, detailed ingestion pipelines, transformations, dashboards, APIs, or code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Choosing tools because they are popular | Popular ≠ appropriate for your scale, team, or budget |
| Designing streaming for daily reporting SLAs | Streaming adds Kafka/Kinesis ops burden; batch is sufficient for > 5 min latency |
| Selecting vendor before understanding constraints | Vendor lock-in discovered post-migration; changing storage format = full rewrite |
| Skipping local development path | Engineers cannot develop or test without a working local environment |
| Making irreversible decisions without alternatives documented | No rollback plan if the chosen architecture proves wrong at scale |
| Tightly coupling systems | Makes future changes extremely expensive and slow |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Credential management, network topology, and encryption-at-rest strategy confirmed |
| Data Management | Catalog, lineage, and metadata tooling selected |
| DataOps | CI/CD and testing strategy tooling selected (e.g., GitHub Actions + dbt test) |
| Data Architecture | This is the core phase — every storage, compute, and serving decision documented as ADR |
| Orchestration | Orchestration tool selected (full design in Phase 15) |
| Software Engineering | Repository structure, branching strategy, and code review process defined |

## Handoff To The Next Skill

Recommend `des-ingestion-design` only after the Architecture Decision Record is complete or explicitly marked Draft with open questions and accepted risk.
