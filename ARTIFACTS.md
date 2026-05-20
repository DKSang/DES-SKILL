# DES-SKILL Canonical Artifacts

Use this file as the source of truth for artifact names, template names, and skill order.

If an older skill document mentions a legacy artifact filename, prefer the canonical filename in this table.

| Order | Skill | Output Artifact | Template |
| --- | --- | --- | --- |
| 01 | `de-business-discovery` | `.agents/des-skill/output/01-business-discovery.md` | `.agents/des-skill/templates/01-business-discovery-template.md` |
| 02 | `de-business-questions` | `.agents/des-skill/output/02-business-questions.md` | `.agents/des-skill/templates/02-business-questions-template.md` |
| 03 | `de-requirements-and-kpis` | `.agents/des-skill/output/03-requirements-and-kpis.md` | `.agents/des-skill/templates/03-requirements-and-kpis-template.md` |
| 04 | `de-data-product-definition` | `.agents/des-skill/output/04-data-product-definition.md` | `.agents/des-skill/templates/04-data-product-definition-template.md` |
| 05 | `de-data-source-assessment` | `.agents/des-skill/output/05-data-source-assessment.md` | `.agents/des-skill/templates/05-data-source-assessment-template.md` |
| 06 | `de-domain-modeling` | `.agents/des-skill/output/06-domain-modeling.md` | `.agents/des-skill/templates/06-domain-modeling-template.md` |
| 07 | `de-architecture-design` | `.agents/des-skill/output/07-architecture-design.md` | `.agents/des-skill/templates/07-architecture-design-template.md` |
| 08 | `de-ingestion-design` | `.agents/des-skill/output/08-ingestion-design.md` | `.agents/des-skill/templates/08-ingestion-design-template.md` |
| 09 | `de-bronze-layer-design` | `.agents/des-skill/output/09-bronze-layer-design.md` | `.agents/des-skill/templates/09-bronze-layer-design-template.md` |
| 10 | `de-silver-layer-design` | `.agents/des-skill/output/10-silver-layer-design.md` | `.agents/des-skill/templates/10-silver-layer-design-template.md` |
| 11 | `de-gold-layer-design` | `.agents/des-skill/output/11-gold-layer-design.md` | `.agents/des-skill/templates/11-gold-layer-design-template.md` |
| 12 | `de-data-contracts` | `.agents/des-skill/output/12-data-contracts.md` | `.agents/des-skill/templates/12-data-contracts-template.md` |
| 13 | `de-transformation-design` | `.agents/des-skill/output/13-transformation-design.md` | `.agents/des-skill/templates/13-transformation-design-template.md` |
| 14 | `de-data-quality` | `.agents/des-skill/output/14-data-quality.md` | `.agents/des-skill/templates/14-data-quality-template.md` |
| 15 | `de-orchestration-and-observability` | `.agents/des-skill/output/15-orchestration-and-observability.md` | `.agents/des-skill/templates/15-orchestration-and-observability-template.md` |
| 16 | `de-semantic-model-design` | `.agents/des-skill/output/16-semantic-model-design.md` | `.agents/des-skill/templates/16-semantic-model-design-template.md` |
| 17 | `de-serving-layer-design` | `.agents/des-skill/output/17-serving-layer-design.md` | `.agents/des-skill/templates/17-serving-layer-design-template.md` |
| 18 | `de-lineage-and-metadata` | `.agents/des-skill/output/18-lineage-and-metadata.md` | `.agents/des-skill/templates/18-lineage-and-metadata-template.md` |
| 19 | `de-governance-and-security` | `.agents/des-skill/output/19-governance-and-security.md` | `.agents/des-skill/templates/19-governance-and-security-template.md` |
| 20 | `de-cost-and-performance-optimization` | `.agents/des-skill/output/20-cost-and-performance-optimization.md` | `.agents/des-skill/templates/20-cost-and-performance-optimization-template.md` |
| 21 | `de-cicd-and-testing` | `.agents/des-skill/output/21-cicd-and-testing.md` | `.agents/des-skill/templates/21-cicd-and-testing-template.md` |
| 22 | `de-project-evaluation` | `.agents/des-skill/output/22-project-evaluation.md` | `.agents/des-skill/templates/22-project-evaluation-template.md` |

## Rules

- Write artifacts to the canonical output path.
- Use the canonical template path.
- Update `.agents/des-skill/sprint-status/des-workflow-status.md` after each artifact.
- Do not skip earlier artifacts unless they already exist and are good enough.
- If a skill-specific `SKILL.md` conflicts with this table, this table wins.
