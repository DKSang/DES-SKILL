---
name: de-semantic-and-serving-layer
description: Use when exposing trusted data through dashboards, APIs, semantic models, metrics layers, reverse ETL, feature stores, or AI/data agents.
---

# de-semantic-and-serving-layer

## When To Use

Use as a routing bridge when a task combines semantic model design and serving layer design. For new work, prefer running `de-semantic-model-design` first, then `de-serving-layer-design` separately.

## Purpose

Route combined semantic and serving requests into the two narrower skills so metric logic and delivery-channel design are never mixed — and ensure serving channels always consume certified semantic definitions.

## Inputs Required

- Gold table specifications.
- KPI and certified metric catalog.
- Consumer requirements and data product definitions.
- Governance, security, and RLS requirements.
- Performance and freshness SLA targets.

## Decision Matrix — Routing Logic

| Task Type | Use This Skill |
| :--- | :--- |
| Defining metric formulas, KPI hierarchies, dimensions, RLS, or glossary | Use `de-semantic-model-design` |
| Configuring dashboards, APIs, exports, reverse ETL, or AI agent context | Use `de-serving-layer-design` |
| Both tasks needed in a single session | Use this routing skill; complete Semantic first, Serving second |

**Rule**: Always complete semantic model design before serving layer design. Serving channels must consume certified metric definitions — not define their own.

## Step-By-Step Process

1. Determine which tasks are needed using the Routing Logic matrix.
2. **If metric design is needed**: run `de-semantic-model-design` fully first.
3. **If serving design is needed**: run `de-serving-layer-design` against the completed semantic model.
4. Cross-check: every metric used in a serving channel must be defined in the semantic model.
5. Cross-check: every serving channel has access control matching governance requirements.
6. Cross-check: every AI agent tool uses structured context from a trusted semantic dataset.

## Output File

Write the final artifact to:

`.agents/des-skill/output/16-17-semantic-and-serving-layer.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Semantic model specification (from `de-semantic-model-design`).
- Serving layer specification (from `de-serving-layer-design`).
- Cross-check notes confirming consistency between metric definitions and serving channels.

## Quality Checklist

- [ ] Metrics are defined once in the semantic layer — not redefined per dashboard.
- [ ] No serving channel queries Silver or Bronze directly — all consumption via Gold + semantic layer.
- [ ] Every consumer interface has a documented access control policy (RBAC/RLS).
- [ ] AI agents use structured context from a trusted semantic source — not free-form SQL.
- [ ] Ratio and derived metrics are in the semantic layer, not materialized in Gold SQL.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Each dashboard defining its own metric logic | Divergent numbers across dashboards; no single source of truth |
| Exposing Silver tables directly to BI consumers | Silver lacks business-level metric certification; consumers get raw/partial data |
| Skipping row-level security on serving layer | Tenants or regions see each other's data; GDPR/compliance breach |
| Building AI agent context from unvalidated Gold queries | Hallucination risk if underlying data has quality issues; agent gives wrong answers |
| Completing serving design before semantic design | Serving channels cannot reference metrics that don't exist yet |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | RLS confirmed at semantic layer; verified that serving channels inherit security rules |
| Data Management | Certified metric catalog is the authoritative source for both semantic and serving |
| DataOps | Semantic model and serving layer changes tested in staging; metric totals reconciled |
| Data Architecture | Semantic layer is the architectural boundary — documented in ADR |
| Orchestration | Serving layer refresh triggered after semantic model refresh completes |
| Software Engineering | Metric definitions version-controlled; breaking changes require consumer re-certification |

## Handoff To The Next Skill

Next use `de-lineage-and-metadata` to document source-to-serving lineage, column-level PII lineage, ownership, and data catalog metadata.

## Example Output Format

```markdown
# Semantic And Serving Layer
| Consumer | Channel | Data Product | Certified Metrics | Security | SLA |
## Certified Metrics (from de-semantic-model-design)
## Serving Channels (from de-serving-layer-design)
## Cross-Check Notes
```
