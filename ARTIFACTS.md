# DES-SKILL Canonical Artifacts

Use this file as the source of truth for artifact names, template names, and skill order.

If an older skill document mentions a legacy artifact filename, prefer the canonical filename in this table.

| Order | Skill | Output Artifact | Template |
| --- | --- | --- | --- |
| 01 | `des-business-discovery` | `.agents/des-skill/output/01-business-discovery.md` | `.agents/des-skill/templates/01-business-discovery-template.md` |
| 02 | `des-business-questions` | `.agents/des-skill/output/02-business-questions.md` | `.agents/des-skill/templates/02-business-questions-template.md` |
| 03 | `des-requirements-and-kpis` | `.agents/des-skill/output/03-requirements-and-kpis.md` | `.agents/des-skill/templates/03-requirements-and-kpis-template.md` |
| 04 | `des-data-product-definition` | `.agents/des-skill/output/04-data-product-definition.md` | `.agents/des-skill/templates/04-data-product-definition-template.md` |
| 05 | `des-data-source-assessment` | `.agents/des-skill/output/05-data-source-assessment.md` | `.agents/des-skill/templates/05-data-source-assessment-template.md` |
| 06 | `des-domain-modeling` | `.agents/des-skill/output/06-domain-modeling.md` | `.agents/des-skill/templates/06-domain-modeling-template.md` |
| 07 | `des-architecture-design` | `.agents/des-skill/output/07-architecture-decision-record.md` | `.agents/des-skill/templates/07-architecture-decision-record-template.md` |
| 08 | `des-ingestion-design` | `.agents/des-skill/output/08-ingestion-specification.md` | `.agents/des-skill/templates/08-ingestion-specification-template.md` |
| 09 | `des-bronze-layer-design` | `.agents/des-skill/output/09-bronze-layer-design.md` | `.agents/des-skill/templates/09-bronze-layer-design-template.md` |
| 10 | `des-silver-layer-design` | `.agents/des-skill/output/10-silver-layer-design.md` | `.agents/des-skill/templates/10-silver-layer-design-template.md` |
| 11 | `des-gold-layer-design` | `.agents/des-skill/output/11-gold-layer-design.md` | `.agents/des-skill/templates/11-gold-layer-design-template.md` |
| 12 | `des-data-contracts` | `.agents/des-skill/output/12-data-contract-specification.md` | `.agents/des-skill/templates/12-data-contract-specification-template.md` |
| 13 | `des-transformation-design` | `.agents/des-skill/output/13-transformation-specification.md` | `.agents/des-skill/templates/13-transformation-specification-template.md` |
| 14 | `des-data-quality` | `.agents/des-skill/output/14-data-quality-specification.md` | `.agents/des-skill/templates/14-data-quality-specification-template.md` |
| 15 | `des-orchestration-observability` | `.agents/des-skill/output/15-orchestration-observability-specification.md` | `.agents/des-skill/templates/15-orchestration-observability-specification-template.md` |
| 16 | `des-semantic-model-design` | `.agents/des-skill/output/16-semantic-model-specification.md` | `.agents/des-skill/templates/16-semantic-model-specification-template.md` |
| 17 | `des-serving-layer-design` | `.agents/des-skill/output/17-serving-layer-specification.md` | `.agents/des-skill/templates/17-serving-layer-specification-template.md` |
| 18 | `des-lineage-metadata-design` | `.agents/des-skill/output/18-lineage-metadata-specification.md` | `.agents/des-skill/templates/18-lineage-metadata-specification-template.md` |
| 19 | `des-governance-security-design` | `.agents/des-skill/output/19-governance-security-specification.md` | `.agents/des-skill/templates/19-governance-security-specification-template.md` |
| 20 | `des-cost-and-performance-optimization` | `.agents/des-skill/output/20-cost-and-performance-optimization.md` | `.agents/des-skill/templates/20-cost-and-performance-optimization-template.md` |
| 21 | `des-cicd-and-testing` | `.agents/des-skill/output/21-cicd-and-testing.md` | `.agents/des-skill/templates/21-cicd-and-testing-template.md` |
| 22 | `des-project-evaluation` | `.agents/des-skill/output/22-project-evaluation.md` | `.agents/des-skill/templates/22-project-evaluation-template.md` |

## Optional Phase Artifacts

These artifacts extend a parent phase when the project needs deeper evidence, repeatable design records, or release-specific sign-off. They are optional but should be tracked in workflow status when used.

| Artifact | Parent Skill | Output Artifact | Template |
| --- | --- | --- | --- |
| 07b | `des-architecture-design` | `.agents/des-skill/output/07b-architecture-decision-records.md` | `.agents/des-skill/templates/07b-architecture-decision-records-template.md` |
| 15b | `des-orchestration-observability` | `.agents/des-skill/output/15b-pipeline-specs.md` | `.agents/des-skill/templates/15b-pipeline-specs-template.md` |
| 21b | `des-cicd-and-testing` | `.agents/des-skill/output/21b-release-readiness.md` | `.agents/des-skill/templates/21b-release-readiness-template.md` |
| 23 | `des-project-evaluation` | `.agents/des-skill/output/23-data-lifecycle-review.md` | `.agents/des-skill/templates/23-data-lifecycle-review-template.md` |

## Support Artifact Map

Support artifacts are produced when implementation work starts from approved DES planning artifacts. They are deliberately separate from phase artifacts so code work, review findings, fresh evidence, and retrospective follow-up can be audited without rewriting upstream planning artifacts.

| Support Skill | Output |
| --- | --- |
| `des-help` | `_des-output/implementation-artifacts/help-note.md` |
| `des-brainstorm-change` | `_des-output/implementation-artifacts/change-brief.md` |
| `des-create-epic` | `_des-output/implementation-artifacts/epics.md` |
| `des-sprint-planning` | `_des-output/implementation-artifacts/sprint-status.yaml` |
| `des-create-story` | `_des-output/implementation-artifacts/<story-key>.md` |
| `des-check-implementation-readiness` | `_des-output/implementation-artifacts/readiness-report.md` |
| `des-implementation-planning` | `_des-output/implementation-artifacts/implementation-plan.md` |
| `des-implementation-planning` | `_des-output/implementation-artifacts/implementation-story.md` |
| `des-dev-story` | `_des-output/implementation-artifacts/implementation-log.md` |
| `des-code-review` | `_des-output/implementation-artifacts/review-report.md` |
| `des-verify-delivery` | `_des-output/implementation-artifacts/verification-report.md` |
| `des-retrospective` | `_des-output/implementation-artifacts/implementation-retrospective.md` |

## Rules

- Write artifacts to the canonical output path.
- Use the canonical template path.
- Use optional phase artifacts only when the parent phase needs deeper supporting evidence.
- Update `.agents/des-skill/sprint-status/des-workflow-status.md` after each artifact.
- Keep implementation support artifacts under `_des-output/implementation-artifacts/`.
- Do not skip earlier artifacts unless they already exist and are good enough.
- If a skill-specific `SKILL.md` conflicts with this table, this table wins.
