# DES-SKILL Canonical Artifacts

Use this file as the source of truth for artifact names, template names, and skill order.

If an older skill document mentions a legacy artifact filename, prefer the canonical filename in this table.

| Order | Skill | Output Artifact | Template |
| --- | --- | --- | --- |
| 01 | `des-business-discovery` | `_des-output/planning-artifacts/01-business-discovery.md` | `_des/templates/01-business-discovery-template.md` |
| 02 | `des-business-questions` | `_des-output/planning-artifacts/02-business-questions.md` | `_des/templates/02-business-questions-template.md` |
| 03 | `des-requirements-and-kpis` | `_des-output/planning-artifacts/03-requirements-and-kpis.md` | `_des/templates/03-requirements-and-kpis-template.md` |
| 04 | `des-data-product-definition` | `_des-output/planning-artifacts/04-data-product-definition.md` | `_des/templates/04-data-product-definition-template.md` |
| 05 | `des-data-source-assessment` | `_des-output/planning-artifacts/05-data-source-assessment.md` | `_des/templates/05-data-source-assessment-template.md` |
| 06 | `des-domain-modeling` | `_des-output/planning-artifacts/06-domain-modeling.md` | `_des/templates/06-domain-modeling-template.md` |
| 07 | `des-architecture-design` | `_des-output/planning-artifacts/07-architecture-decision-record.md` | `_des/templates/07-architecture-decision-record-template.md` |
| 08 | `des-ingestion-design` | `_des-output/planning-artifacts/08-ingestion-specification.md` | `_des/templates/08-ingestion-specification-template.md` |
| 09 | `des-bronze-layer-design` | `_des-output/planning-artifacts/09-bronze-layer-design.md` | `_des/templates/09-bronze-layer-design-template.md` |
| 10 | `des-silver-layer-design` | `_des-output/planning-artifacts/10-silver-layer-design.md` | `_des/templates/10-silver-layer-design-template.md` |
| 11 | `des-gold-layer-design` | `_des-output/planning-artifacts/11-gold-layer-design.md` | `_des/templates/11-gold-layer-design-template.md` |
| 12 | `des-data-contracts` | `_des-output/planning-artifacts/12-data-contract-specification.md` | `_des/templates/12-data-contract-specification-template.md` |
| 13 | `des-transformation-design` | `_des-output/planning-artifacts/13-transformation-specification.md` | `_des/templates/13-transformation-specification-template.md` |
| 14 | `des-data-quality` | `_des-output/planning-artifacts/14-data-quality-specification.md` | `_des/templates/14-data-quality-specification-template.md` |
| 15 | `des-orchestration-observability` | `_des-output/planning-artifacts/15-orchestration-observability-specification.md` | `_des/templates/15-orchestration-observability-specification-template.md` |
| 16 | `des-semantic-model-design` | `_des-output/planning-artifacts/16-semantic-model-specification.md` | `_des/templates/16-semantic-model-specification-template.md` |
| 17 | `des-serving-layer-design` | `_des-output/planning-artifacts/17-serving-layer-specification.md` | `_des/templates/17-serving-layer-specification-template.md` |
| 18 | `des-lineage-metadata-design` | `_des-output/planning-artifacts/18-lineage-metadata-specification.md` | `_des/templates/18-lineage-metadata-specification-template.md` |
| 19 | `des-governance-security-design` | `_des-output/planning-artifacts/19-governance-security-specification.md` | `_des/templates/19-governance-security-specification-template.md` |
| 20 | `des-cost-and-performance-optimization` | `_des-output/planning-artifacts/20-cost-and-performance-optimization.md` | `_des/templates/20-cost-and-performance-optimization-template.md` |
| 21 | `des-cicd-and-testing` | `_des-output/planning-artifacts/21-cicd-and-testing.md` | `_des/templates/21-cicd-and-testing-template.md` |
| 22 | `des-project-evaluation` | `_des-output/planning-artifacts/22-project-evaluation.md` | `_des/templates/22-project-evaluation-template.md` |

## Optional Phase Artifacts

These artifacts extend a parent phase when the project needs deeper evidence, repeatable design records, or release-specific sign-off. They are optional but should be tracked in workflow status when used.

| Artifact | Parent Skill | Output Artifact | Template |
| --- | --- | --- | --- |
| 07b | `des-architecture-design` | `_des-output/planning-artifacts/07b-architecture-decision-records.md` | `_des/templates/07b-architecture-decision-records-template.md` |
| 15b | `des-orchestration-observability` | `_des-output/planning-artifacts/15b-pipeline-specs.md` | `_des/templates/15b-pipeline-specs-template.md` |
| 21b | `des-cicd-and-testing` | `_des-output/planning-artifacts/21b-release-readiness.md` | `_des/templates/21b-release-readiness-template.md` |
| 23 | `des-project-evaluation` | `_des-output/planning-artifacts/23-data-lifecycle-review.md` | `_des/templates/23-data-lifecycle-review-template.md` |

## Support Artifact Map

Support artifacts are produced when implementation work starts from approved DES planning artifacts. They are deliberately separate from phase artifacts so code work, review findings, fresh evidence, and retrospective follow-up can be audited without rewriting upstream planning artifacts.

| Support Skill | Output |
| --- | --- |
| `des-create-epic` | `_des-output/implementation-artifacts/epic-catalog.md` |
| `des-create-story` | `_des-output/implementation-artifacts/story-catalog.md` |
| `des-sprint-planning` | `_des-output/implementation-artifacts/sprint-plan.md` |
| `des-story-readiness-check` | `_des-output/implementation-artifacts/story-readiness-report.md` |
| `des-dev-task-breakdown` | `_des-output/implementation-artifacts/dev-task-breakdown.md` |
| `des-implementation-plan` | `_des-output/implementation-artifacts/implementation-plan.md` |
| `des-code-review` | `_des-output/implementation-artifacts/code-review-report.md` |
| `des-release-readiness-review` | `_des-output/implementation-artifacts/release-readiness-report.md` |
| `des-retrospective` | `_des-output/implementation-artifacts/retrospective-report.md` |
| `des-correct-course` | `_des-output/implementation-artifacts/correct-course-plan.md` |
| `des-workflow-status-update` | `_des-output/implementation-artifacts/des-workflow-status.md` |

## Rules

- Write artifacts to the canonical output path.
- Use the canonical template path.
- Use optional phase artifacts only when the parent phase needs deeper supporting evidence.
- Update `_des-output/implementation-artifacts/des-workflow-status.md` after each artifact.
- Keep implementation support artifacts under `_des-output/implementation-artifacts/`.
- Do not skip earlier artifacts unless they already exist and are good enough.
- If a skill-specific `SKILL.md` conflicts with this table, this table wins.
