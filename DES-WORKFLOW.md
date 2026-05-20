# DES-SKILL Workflow

Use this workflow when starting, resuming, or improving a data engineering project.

## Agent Instruction

You are using DES-SKILL. Start with `using-des-skill` as the workflow router.

Do not jump to coding. Determine the workflow mode, current project phase, upstream artifacts, matching skill, required output artifact, status update, and next handoff.

If a requested task depends on missing upstream artifacts, stop and produce the missing artifact first or ask for the minimum missing input.

## Adaptive Workflow Modes

Use the lightest mode that still protects artifact traceability and delivery evidence. See `docs/workflow-modes.md` for detailed rules.

| Mode | Use When | Default Route |
| :--- | :--- | :--- |
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `de-build-from-artifacts` -> `de-verify-delivery`; add `de-review-implementation` when behavior changes |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update | `de-brainstorm-change` if unclear -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | New data product, cross-team delivery, regulated data, compliance risk, or irreversible architecture choice | Complete required phase artifacts 01-22, then run support skills |
| Correct Course | Approved artifacts conflict with repo reality, review findings, verification failures, incident facts, or new constraints | `de-brainstorm-change` -> affected phase skill update -> `de-implementation-planning` |

## Persona Layer

Use `docs/personas.md` to map each skill to a primary responsibility. Personas are responsibility boundaries, not roleplay tone.

The router should report the selected persona, persona skill, mode, and artifact/support skill. If the work crosses responsibility boundaries, name the handoff instead of merging responsibilities into one vague agent role.

| Persona | Persona Skill | Typical Ownership |
| :--- | :--- | :--- |
| Workflow Coordinator | `de-persona-workflow-coordinator` | routing, mode selection, status, handoff |
| Data Product Analyst | `de-persona-data-product-analyst` | business context, questions, KPIs, product definition |
| Source & Domain Analyst | `de-persona-source-domain-analyst` | source readiness, source behavior, domain model |
| Data Architect | `de-persona-data-architect` | architecture, ingestion, layers, contracts, transformations |
| Data Quality Engineer | `de-persona-data-quality-engineer` | DQ rules, orchestration, observability |
| Analytics Engineer | `de-persona-analytics-engineer` | semantic model and serving layer |
| Governance Reviewer | `de-persona-governance-reviewer` | lineage, metadata, privacy, security |
| DataOps Engineer | `de-persona-dataops-engineer` | cost, performance, CI/CD, release readiness |
| Implementation Developer | `de-persona-implementation-developer` | implementation planning and build work |
| Delivery Reviewer | `de-persona-delivery-reviewer` | review, verification, retrospective |

## Workflow Status

Track progress in:

`.agents/des-skill/sprint-status/des-workflow-status.md`

Create it from:

`.agents/des-skill/templates/workflow_status_template.md`

## Phase 0: Router

0. `using-des-skill`

## Phase 1: Business & Requirements

1. `de-business-discovery`
2. `de-business-questions`
3. `de-requirements-and-kpis`
4. `de-data-product-definition`

## Phase 2: Data & Domain

5. `de-data-source-assessment`
6. `de-domain-modeling`

## Phase 3: Architecture & Layers

7. `de-architecture-design`
8. `de-ingestion-design`
9. `de-bronze-layer-design`
10. `de-silver-layer-design`
11. `de-gold-layer-design`

## Phase 4: Quality, Contracts, Orchestration

12. `de-data-contracts`
13. `de-transformation-design`
14. `de-data-quality`
15. `de-orchestration-and-observability`

## Phase 5: Serving, Governance, Delivery

16. `de-semantic-model-design`
17. `de-serving-layer-design`
18. `de-lineage-and-metadata`
19. `de-governance-and-security`
20. `de-cost-and-performance-optimization`
21. `de-cicd-and-testing`
22. `de-project-evaluation`

## Support Skills

Use these skills outside the numbered phase flow when implementation work, change handling, review, verification, or retrospective capture is needed. They do not replace phases 01-22; they consume approved phase artifacts and preserve traceability from planning to code and delivery evidence.

Recommended support loop:

`de-brainstorm-change` -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` -> `de-implementation-retrospective`

`de-implementation-planning` produces both `implementation-plan.md` and `implementation-story.md`. The story packet is the executable dev handoff for `de-build-from-artifacts`.

| Skill | Use When |
| :--- | :--- |
| `de-brainstorm-change` | Explore a new change request, feature, incident follow-up, or scope adjustment before implementation planning |
| `de-implementation-planning` | Convert approved DES artifacts into a concrete implementation plan |
| `de-build-from-artifacts` | Implement code, config, tests, or docs from an approved implementation plan |
| `de-review-implementation` | Review changed files against planning artifacts, contracts, DQ, and security expectations |
| `de-verify-delivery` | Run final verification and record command evidence before completion or release claims |
| `de-implementation-retrospective` | Capture lessons, artifact drift, technical debt, and follow-up backlog after delivery |

## Compatibility Skill

`de-semantic-and-serving-layer` is retained as a compatibility bridge for projects that combine semantic modeling and serving design in one step. Prefer `de-semantic-model-design` and `de-serving-layer-design` for new work.
