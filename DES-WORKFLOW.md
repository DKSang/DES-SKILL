# DES-SKILL Workflow

Use this workflow when starting, resuming, or improving a data engineering project.

## Agent Instruction

You are using DES-SKILL. Start with `using-des-skill` as the workflow router.

Do not jump to coding. Determine the current project phase, check upstream artifacts, activate the matching skill, produce the required artifact from `templates/`, update workflow status, and hand off to the next skill.

If a requested task depends on missing upstream artifacts, stop and produce the missing artifact first or ask for the minimum missing input.

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
