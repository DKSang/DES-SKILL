---
name: des-skill
description: Use when starting, planning, reviewing, or delivering a data engineering project that needs business discovery, requirements, source assessment, architecture, medallion layers, quality, governance, CI/CD, or release readiness.
---

# DES-SKILL

DES-SKILL is an end-to-end data engineering delivery workflow. Use it as the coordinating skill for projects that need a disciplined path from business discovery to release readiness.

## When To Use

Use when starting, planning, reviewing, or delivering a data engineering project that needs business discovery, requirements, source assessment, architecture, medallion layers, quality, governance, CI/CD, or release readiness.

## Purpose

To act as the master coordinator for the Data Engineering Superpowers (DES) workflow, ensuring all deliverables align with architectural, quality, and operational standards.

## Core Rule

Do not jump directly into coding. Establish business context, measurable outcomes, source readiness, architecture choices, quality expectations, serving needs, ownership, and release criteria before implementation.

## Workflow

Start with `references/DES-WORKFLOW.md`.

Determine the current project phase, then activate the matching installed phase skill. Produce the expected artifact using the matching template from `assets/templates/` when a template is useful.

If upstream artifacts are missing, stop and produce the missing artifact first or ask only for the minimum missing input.

Every phase skill declares its concrete output path under `{project-root}/_des-output/planning-artifacts/`. Write each final artifact to that file, then summarize the path and recommend the next skill.

## Phase Order

1. `de-business-discovery`
2. `de-business-questions`
3. `de-requirements-and-kpis`
4. `de-data-product-definition`
5. `de-data-source-assessment`
6. `de-domain-modeling`
7. `de-architecture-design`
8. `de-ingestion-design`
9. `de-bronze-layer-design`
10. `de-silver-layer-design`
11. `de-gold-layer-design`
12. `de-data-contracts`
13. `de-transformation-design`
14. `de-data-quality`
15. `de-orchestration-and-observability`
16. `de-serving-layer-design`
17. `de-semantic-model-design`
18. `de-lineage-and-metadata`
19. `de-governance-and-security`
20. `de-cost-and-performance-optimization`
21. `de-cicd-and-testing`
22. `de-project-evaluation`

## Bundled Resources

- Phase skills: install this pack with `npx @dksang/des-skill install` so each `de-*` skill is available directly.
- Templates: `assets/templates/`
- Checklists: `references/checklists/`
- Workflow examples: `references/workflows/`
- Project examples: `references/examples/`

## Completion

At the end of each phase, name the produced artifact, summarize unresolved assumptions, and recommend the next phase skill.

## Quality Checklist

- The project flows sequentially from discovery to evaluation.
- No coding is performed without an approved upstream design artifact.
- Deliverables are validated against the quality checklists.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Skipping business context to write pipelines first | Technical solutions without business alignment produce unused or wrong outputs |
| Implementing transformations without quality gates | Data errors reach consumers silently; trust in the platform erodes |
| Coding without data contracts for downstream consumers | Implicit contracts break without warning; consumers have no recourse |
| Jumping to Phase 3 without completed Phase 1–2 artifacts | Architecture decisions made without source assessment are speculative and high-risk |
| Treating DES-SKILL phases as optional steps to skip | Each phase gate prevents a class of production failure |

## Undercurrent Coverage

Every phase skill in DES-SKILL is anchored to the 6 Undercurrents from *Fundamentals of Data Engineering*:

| Undercurrent | Phases Where It Is Enforced |
| :--- | :--- |
| Security | Phases 1, 5, 7, 12, 19, 22 |
| Data Management | Phases 6, 10, 11, 12, 18, 19 |
| DataOps | Phases 8, 13, 14, 15, 21, 22 |
| Data Architecture | Phases 7, 9, 10, 11, 16 |
| Orchestration | Phases 8, 14, 15, 19, 20 |
| Software Engineering | Phases 7, 8, 13, 14, 21, 22 |

## Handoff To The Next Skill

Next, use `using-des-skill` to begin routing and running specific phase workflows for your project.
