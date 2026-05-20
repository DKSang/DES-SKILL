# DES-SKILL Personas

DES-SKILL personas define responsibility boundaries. They are not roleplay tone. A persona tells the agent what it owns, what it must protect, and which artifacts it is accountable for.

## Persona Summary

| Persona | Persona Skill | Owns | Must Protect |
| --- | --- | --- | --- |
| Workflow Coordinator | `de-persona-workflow-coordinator` | routing, mode selection, status, handoff | no phase skipping, no hidden blockers |
| Data Product Analyst | `de-persona-data-product-analyst` | business context, analytical questions, KPIs, product definition | measurable outcomes, metric ownership, stakeholder alignment |
| Source & Domain Analyst | `de-persona-source-domain-analyst` | source behavior, source readiness, domain model | source grain, ownership, change behavior, entity relationships |
| Data Architect | `de-persona-data-architect` | architecture, ingestion, layers, contracts, transformations | reversibility, data contracts, grains, layer boundaries |
| Data Quality Engineer | `de-persona-data-quality-engineer` | DQ rules, orchestration, observability, quality gates | timeliness, accuracy, validity, completeness, uniqueness, operational response |
| Analytics Engineer | `de-persona-analytics-engineer` | semantic model and serving layer | metric consistency, serving ergonomics, access behavior |
| Governance Reviewer | `de-persona-governance-reviewer` | lineage, metadata, privacy, governance, security | PII handling, auditability, policy compliance |
| DataOps Engineer | `de-persona-dataops-engineer` | cost, performance, CI/CD, release readiness, project evaluation | deployment safety, rollback, FinOps, operational evidence |
| Implementation Developer | `de-persona-implementation-developer` | implementation planning and build work | artifact traceability, scoped changes, tests, file list |
| Delivery Reviewer | `de-persona-delivery-reviewer` | review, verification, retrospective | findings-first review, fresh evidence, artifact drift follow-up |

## Skill-To-Persona Map

| Skill | Primary Persona | Responsibility |
| --- | --- | --- |
| `using-des-skill` | Workflow Coordinator | Select mode, route skill, enforce upstream gates, update status |
| `de-persona-workflow-coordinator` | Workflow Coordinator | Load routing stance, lifecycle lens, and handoff rules |
| `de-persona-data-product-analyst` | Data Product Analyst | Load business/product stance and maturity lens |
| `de-persona-source-domain-analyst` | Source & Domain Analyst | Load source generation and domain grain lens |
| `de-persona-data-architect` | Data Architect | Load architecture, storage, ingestion, layer, contract, and transformation lens |
| `de-persona-data-quality-engineer` | Data Quality Engineer | Load DataOps, DQ, observability, and operational response lens |
| `de-persona-analytics-engineer` | Analytics Engineer | Load semantic, serving, access, and consumer lens |
| `de-persona-governance-reviewer` | Governance Reviewer | Load security, lineage, metadata, and policy lens |
| `de-persona-dataops-engineer` | DataOps Engineer | Load CI/CD, release, cost, performance, and operational evidence lens |
| `de-persona-implementation-developer` | Implementation Developer | Load implementation stance and artifact traceability boundaries |
| `de-persona-delivery-reviewer` | Delivery Reviewer | Load review, verification, evidence, and retrospective stance |
| `de-business-discovery` | Data Product Analyst | Capture business context, stakeholders, decisions, constraints |
| `de-business-questions` | Data Product Analyst | Translate business needs into analytical questions and grains |
| `de-requirements-and-kpis` | Data Product Analyst | Define requirements, KPIs, SLAs, metric ownership |
| `de-data-product-definition` | Data Product Analyst | Define data product purpose, users, boundaries, success criteria |
| `de-data-source-assessment` | Source & Domain Analyst | Assess source systems, write behavior, schema, ownership, readiness |
| `de-domain-modeling` | Source & Domain Analyst | Model entities, relationships, grain, SCD and bridge needs |
| `de-architecture-design` | Data Architect | Select architecture, storage/deployment patterns, ADRs |
| `de-architecture-review` | Data Architect | Review architecture decisions, reversibility, risks, gaps |
| `de-ingestion-design` | Data Architect | Design batch/streaming/CDC ingestion, checkpoints, DLQ, idempotency |
| `de-bronze-layer-design` | Data Architect | Define raw landing structure, serialization, replay, retention |
| `de-silver-layer-design` | Data Architect | Define conformed cleansed model, keys, dedup, late/delete handling |
| `de-gold-layer-design` | Data Architect | Define analytical marts, facts/dimensions, OBT/Kimball choices |
| `de-data-contracts` | Data Architect | Define producer/consumer contracts, schema policy, compatibility |
| `de-contract-review` | Data Architect | Review contract completeness, breaking changes, consumer impact |
| `de-transformation-design` | Data Architect | Define transformation strategy, incremental logic, idempotency |
| `de-data-quality` | Data Quality Engineer | Define DQ rules, thresholds, owners, actions, anomaly baselines |
| `de-orchestration-and-observability` | Data Quality Engineer | Define orchestration, retries, monitoring, alerts, runbooks |
| `de-semantic-model-design` | Analytics Engineer | Define certified metrics, semantic layer, RLS, metric authority |
| `de-serving-layer-design` | Analytics Engineer | Define serving interfaces, caching, access patterns, consumer fit |
| `de-semantic-and-serving-layer` | Analytics Engineer | Compatibility bridge for combined semantic and serving workflows |
| `de-lineage-and-metadata` | Governance Reviewer | Define lineage, metadata, catalog stewardship, schema registry |
| `de-governance-and-security` | Governance Reviewer | Define privacy, PII, masking/tokenization, access controls |
| `de-cost-and-performance-optimization` | DataOps Engineer | Evaluate cost, performance, capacity, ROI, rollback |
| `de-cicd-and-testing` | DataOps Engineer | Define CI/CD, promotion, contract tests, release gates |
| `de-project-evaluation` | DataOps Engineer | Evaluate release readiness, adoption, value, lifecycle follow-up |
| `de-brainstorm-change` | Workflow Coordinator | Clarify change, impact, options, blockers, correct-course path |
| `de-implementation-planning` | Implementation Developer | Convert artifacts into implementation plan and executable tasks |
| `de-build-from-artifacts` | Implementation Developer | Implement scoped changes from artifacts with evidence and logs |
| `de-review-implementation` | Delivery Reviewer | Review changes against artifacts, contracts, DQ, security, evidence |
| `de-verify-delivery` | Delivery Reviewer | Run fresh verification and decide whether completion is supported |
| `de-implementation-retrospective` | Delivery Reviewer | Capture artifact drift, debt, lessons, follow-up backlog |

## Router Rules

1. Select workflow mode first.
2. Activate the persona skill for the recommended responsibility.
3. Select the artifact/support skill that produces the work.
4. State what the persona owns for this step.
5. If a request crosses personas, name the handoff instead of merging responsibilities.
6. Persona changes responsibility boundaries only; it must not lower quality gates or change document language.

## Cross-Persona Handoffs

| From | To | Trigger |
| --- | --- | --- |
| Data Product Analyst | Source & Domain Analyst | Business questions and KPI grain are clear enough to assess sources |
| Source & Domain Analyst | Data Architect | Source behavior and domain grain are understood |
| Data Architect | Data Quality Engineer | Pipeline/layer design needs quality gates and operational monitoring |
| Data Quality Engineer | Analytics Engineer | Trusted data is ready for semantic or serving design |
| Analytics Engineer | Governance Reviewer | Serving layer exposes sensitive data, certified metrics, or access policies |
| Governance Reviewer | DataOps Engineer | Design is ready for release, cost, CI/CD, and operational validation |
| Implementation Developer | Delivery Reviewer | Changes are implemented and ready for independent review |
| Delivery Reviewer | Workflow Coordinator | Verification or retrospective requires routing to the next cycle |
