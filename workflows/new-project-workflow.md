# New Data Engineering Project Workflow

This workflow explains how to use each Data Engineering Superpowers skill when starting a new data engineering project.

Use it as the default operating guide for a new project. The goal is to prevent premature coding and make sure every implementation step is backed by a clear artifact.

## Workflow Mindset

A data engineering project should move from business understanding to production readiness:

```text
Business context
→ requirements and KPIs
→ source assessment
→ architecture
→ ingestion
→ Bronze/Silver/Gold design
→ contracts
→ transformations
→ quality
→ orchestration
→ serving
→ governance
→ CI/CD
→ evaluation
```

Do not skip upstream skills unless the required artifact already exists and is good enough.

---

## Quick Decision Guide

| Situation | Use This Skill | Main Function |
| --- | --- | --- |
| The project idea is vague or tool-first | `de-business-discovery` | Clarify business problem, users, decisions, scope |
| The business goal exists but KPIs are unclear | `de-requirements-and-kpis` | Define KPIs, reports, freshness, SLAs |
| Data sources are unknown or unreliable | `de-data-source-assessment` | Evaluate sources, owners, access, quality, risks |
| You need to choose platform/tools/patterns | `de-architecture-design` | Create architecture decision record |
| You need to bring data into the platform | `de-ingestion-design` | Define ingestion mode, schedule, watermark, retry |
| You need raw/replayable storage | `de-bronze-layer-design` | Design raw Bronze datasets and metadata |
| You need cleaned/conformed datasets | `de-silver-layer-design` | Design standardized Silver datasets |
| You need business-ready analytics tables | `de-gold-layer-design` | Design facts, dimensions, marts, metrics |
| Producers/consumers need clear guarantees | `de-data-contracts` | Define schema, freshness, quality and change contract |
| You are ready to implement transformations | `de-transformation-design` | Define source-to-target logic and tests |
| Trust, correctness, or freshness is unclear | `de-data-quality` | Define quality checks and failure actions |
| Pipelines need scheduling and monitoring | `de-orchestration-and-observability` | Define DAGs, alerts, runbooks, observability |
| Data must be consumed by BI/API/AI agents | `de-semantic-and-serving-layer` | Design semantic model and serving channels |
| Access, privacy, lineage, retention matter | `de-governance-and-security` | Define owners, access, classification, lineage |
| You need safe deployments | `de-cicd-and-testing` | Define tests, environments, release, rollback |
| You need release approval or maturity review | `de-project-evaluation` | Produce go/no-go review and improvement backlog |

---

## Phase 1: Discovery And Requirements

### 1. Use `de-business-discovery`

**When to use**

Use this skill at the start of every new project, especially when the request sounds like:

- “Build me a dashboard.”
- “Create a pipeline.”
- “Ingest this API.”
- “Use Spark/dbt/Fabric/Databricks for this data.”
- “I have an idea for a data platform.”

**Function**

This skill turns a vague idea into a business discovery brief. It identifies the real business problem, stakeholders, decisions, scope, non-scope, constraints, and initial data products.

**Inputs**

- Business domain
- Problem statement
- Target users
- Pain points
- Known reports or data products
- Constraints

**Outputs**

- `business_discovery_brief.md`
- Stakeholder and decision matrix
- Scope and non-scope list
- Initial data product list
- Open question log

**Exit criteria**

Continue only when the project has a clear business problem, named stakeholders, and a first-delivery scope.

---

### 2. Use `de-requirements-and-kpis`

**When to use**

Use after discovery, when goals are known but success is not measurable yet.

**Function**

This skill translates business goals into KPIs, reporting questions, data freshness targets, retention needs, and SLAs.

**Inputs**

- Business discovery brief
- Stakeholder decisions
- Expected reports, dashboards, APIs, or data products

**Outputs**

- `requirements_and_kpi_catalog.md`
- KPI catalog
- Reporting requirements matrix
- Freshness and SLA table
- Metric definition backlog

**Exit criteria**

Continue only when each important KPI has a definition, owner, grain, target, and freshness expectation.

---

## Phase 2: Source And Architecture Planning

### 3. Use `de-data-source-assessment`

**When to use**

Use before ingestion or architecture decisions if data sources are not fully understood.

**Function**

This skill evaluates whether the available sources can support the business requirements.

**Inputs**

- KPI catalog
- Candidate data sources
- Source owners
- Sample files, schemas, APIs, databases, or streams

**Outputs**

- `data_source_inventory.md`
- Source-to-requirement mapping
- Source readiness score
- Access and risk notes
- Source gap mitigation plan

**Exit criteria**

Continue only when accepted sources have owner, access path, grain, freshness, history, and risk decision.

---

### 4. Use `de-architecture-design`

**When to use**

Use after source assessment and before designing pipelines or tables.

**Function**

This skill chooses the architecture pattern, storage, compute, orchestration, transformation, and serving strategy.

**Inputs**

- Business discovery brief
- KPI/SLA requirements
- Source inventory
- Team skills
- Budget and platform constraints

**Outputs**

- `architecture_decision_record.md`
- High-level data flow
- Tooling decision matrix
- Architecture risks and tradeoffs

**Exit criteria**

Continue only when the architecture supports freshness, scale, cost, security, and serving needs.

---

## Phase 3: Ingestion And Medallion Layer Design

### 5. Use `de-ingestion-design`

**When to use**

Use when each source needs an ingestion mode, schedule, destination, watermark, retry policy, and backfill plan.

**Function**

This skill makes source collection repeatable, idempotent, observable, and aligned with freshness requirements.

**Inputs**

- Source inventory
- Architecture decision record
- Freshness/SLA requirements
- Source schemas or payload examples

**Outputs**

- `ingestion_spec.md`
- Pipeline inventory
- Backfill plan
- Retry and failure policy

**Exit criteria**

Continue only when every source has ingestion mode, destination, incremental strategy, failure owner, and replay/backfill behavior.

---

### 6. Use `de-bronze-layer-design`

**When to use**

Use after ingestion design when raw data must be safely stored and replayable.

**Function**

This skill designs Bronze datasets that preserve source truth and ingestion metadata with minimal transformation.

**Inputs**

- Ingestion specs
- Source payload samples
- Retention/privacy requirements

**Outputs**

- `bronze_table_specs.md`
- Metadata column standard
- Partition and retention plan
- Schema drift policy

**Exit criteria**

Continue only when Bronze can replay Silver transformations and includes source identity, ingestion time, run ID, and raw traceability.

---

### 7. Use `de-silver-layer-design`

**When to use**

Use when raw data must be cleaned, typed, deduplicated, standardized, and conformed.

**Function**

This skill designs Silver datasets with consistent keys, types, timestamps, units, reference mappings, and quality gates.

**Inputs**

- Bronze table specs
- Source schemas
- Naming/type conventions
- Business requirements

**Outputs**

- `silver_table_specs.md`
- Standardization rules
- Deduplication policy
- Invalid record handling
- Reference mapping requirements

**Exit criteria**

Continue only when each Silver dataset has explicit grain, keys, lineage to Bronze, and invalid record handling.

---

### 8. Use `de-gold-layer-design`

**When to use**

Use when consumers need business-ready datasets, facts, dimensions, marts, or certified metrics.

**Function**

This skill designs the single source of truth for analytics and serving.

**Inputs**

- KPI catalog
- Reporting and serving requirements
- Silver table specs
- Business definitions

**Outputs**

- `gold_table_specs.md`
- Fact and dimension model
- Metric definition catalog
- Consumer mapping

**Exit criteria**

Continue only when every Gold table has declared grain, stable keys, measures, dimensions, owners, and consumer mapping.

---

## Phase 4: Contracts, Transformation, And Quality

### 9. Use `de-data-contracts`

**When to use**

Use when datasets are shared across teams, dashboards, APIs, AI agents, or downstream systems.

**Function**

This skill creates agreements between producers and consumers about schema, semantics, freshness, quality, compatibility, and change management.

**Inputs**

- Dataset specs
- Owners and consumers
- SLA requirements
- Schema and metric definitions

**Outputs**

- `data_contracts.md`
- Schema standard
- Compatibility policy
- Contract test list

**Exit criteria**

Continue only when critical datasets have named producer/consumer, version, testable guarantees, and breaking-change policy.

---

### 10. Use `de-transformation-design`

**When to use**

Use before writing SQL, Python, Spark, dbt, DuckDB, or notebook transformation code.

**Function**

This skill defines source-to-target logic, business rules, edge cases, incremental strategy, and tests.

**Inputs**

- Bronze/Silver/Gold specs
- Data contracts
- Metric definitions
- Data quality requirements

**Outputs**

- `transformation_design.md`
- Source-to-target mapping
- Incremental and backfill strategy
- Transformation test plan

**Exit criteria**

Continue only when every output column has a source or derivation and every business rule is named and testable.

---

### 11. Use `de-data-quality`

**When to use**

Use before productionizing pipelines or when trust, correctness, freshness, or incident handling is unclear.

**Function**

This skill defines quality checks and failure actions across Bronze, Silver, Gold, contracts, and serving outputs.

**Inputs**

- Dataset specs
- Data contracts
- Transformation design
- SLA requirements
- Known source quality risks

**Outputs**

- `data_quality_catalog.md`
- Layer-specific quality gates
- Failure action policy
- Quality reporting plan

**Exit criteria**

Continue only when critical datasets have freshness, uniqueness, validity, referential integrity, severity, owner, and action policy.

---

## Phase 5: Operations And Serving

### 12. Use `de-orchestration-and-observability`

**When to use**

Use when pipelines need scheduling, dependencies, monitoring, alerts, retries, runbooks, or SLA tracking.

**Function**

This skill defines how pipelines run, recover, alert, and prove they met freshness and reliability expectations.

**Inputs**

- Pipeline inventory
- Ingestion specs
- Transformation specs
- Data quality rules
- SLA requirements

**Outputs**

- `pipeline_and_observability_spec.md`
- DAG design
- Alerting plan
- Runbook outline

**Exit criteria**

Continue only when dependencies, SLAs, monitoring metrics, alert owners, rerun, and backfill behavior are documented.

---

### 13. Use `de-semantic-and-serving-layer`

**When to use**

Use when trusted data must be delivered to BI dashboards, APIs, semantic models, reverse ETL, feature stores, exports, or AI/data agents.

**Function**

This skill exposes consistent metrics and governed datasets without duplicating business logic in every consumer.

**Inputs**

- Gold table specs
- KPI/metric catalog
- Consumer requirements
- Governance/security constraints
- Performance and freshness requirements

**Outputs**

- `semantic_and_serving_layer.md`
- Semantic model spec
- Serving channel design
- Certified metric list
- Consumer access matrix

**Exit criteria**

Continue only when serving channels map to user decisions, metrics are defined once, and access controls are clear.

---

## Phase 6: Governance, Deployment, And Evaluation

### 14. Use `de-governance-and-security`

**When to use**

Use before production release or whenever sensitive data, shared metrics, external access, compliance, or cross-team ownership exists.

**Function**

This skill defines ownership, stewardship, access, classification, lineage, retention, change control, and cost review.

**Inputs**

- Dataset inventory
- Data contracts
- Serving design
- Security/regulatory constraints
- Ownership model

**Outputs**

- `governance_and_security_plan.md`
- Access control matrix
- Data classification register
- Lineage and retention plan
- Change management policy

**Exit criteria**

Continue only when every critical dataset has owner, classification, least-privilege access, retention policy, and source-to-serving lineage.

---

### 15. Use `de-cicd-and-testing`

**When to use**

Use before production deployment or when moving from manual scripts/notebooks to maintainable delivery.

**Function**

This skill defines automated tests, environments, review gates, secrets management, deployment, rollback, and release evidence.

**Inputs**

- Repository structure
- Pipeline and transformation specs
- Data quality rules
- Data contracts
- Deployment environments
- Governance requirements

**Outputs**

- `cicd_and_testing_plan.md`
- Test matrix
- Environment promotion policy
- Release checklist
- Rollback plan

**Exit criteria**

Continue only when tests run before production, secrets are externalized, rollback is documented, and release evidence is auditable.

---

### 16. Use `de-project-evaluation`

**When to use**

Use before release, at the end of a phase, after an incident, or during a maturity review.

**Function**

This skill evaluates whether the data product is ready, trusted, monitored, governed, maintainable, and accepted by users.

**Inputs**

- All prior artifacts
- CI/test results
- Data quality results
- Pipeline run evidence
- User acceptance feedback
- Known risks and incidents

**Outputs**

- `release_readiness_review.md`
- Risk register
- Remediation plan
- Go/no-go recommendation
- Continuous improvement backlog

**Exit criteria**

The project can be released only when critical risks are resolved or explicitly accepted with owners and deadlines.

---

## Standard Artifact Folder For A New Project

For every new project, create this folder structure:

```text
project-artifacts/
├── 01_business_discovery/
│   └── business_discovery_brief.md
├── 02_requirements/
│   └── requirements_and_kpi_catalog.md
├── 03_sources/
│   └── data_source_inventory.md
├── 04_architecture/
│   └── architecture_decision_record.md
├── 05_ingestion/
│   └── ingestion_spec.md
├── 06_medallion_layers/
│   ├── bronze_table_specs.md
│   ├── silver_table_specs.md
│   └── gold_table_specs.md
├── 07_contracts/
│   └── data_contracts.md
├── 08_transformations/
│   └── transformation_design.md
├── 09_quality/
│   └── data_quality_catalog.md
├── 10_operations/
│   └── pipeline_and_observability_spec.md
├── 11_serving/
│   └── semantic_and_serving_layer.md
├── 12_governance/
│   └── governance_and_security_plan.md
├── 13_cicd/
│   └── cicd_and_testing_plan.md
└── 14_evaluation/
    └── release_readiness_review.md
```

---

## Example Prompt For Starting A New Project

Use this prompt with a coding/data agent that has access to this skill pack:

```text
We are starting a new data engineering project.
Use the Data Engineering Superpowers workflow.
Start with `de-business-discovery` and do not move to architecture, ingestion, or coding until the required upstream artifacts are clear.

Project idea:
[Describe the domain, problem, users, expected outputs, and known data sources.]

Expected result:
Create the first artifact: business discovery brief.
Then recommend the next skill to use.
```

---

## When To Skip A Skill

You may skip a skill only when:

1. The required artifact already exists.
2. The artifact is current and approved.
3. Downstream decisions do not depend on unresolved questions.
4. The skipped step is explicitly documented in the release review.

If any of these are false, do not skip the skill.

---

## When To Go Back To An Earlier Skill

Return to an earlier skill when:

- A new stakeholder changes the business goal.
- KPI definitions change.
- A source is rejected or replaced.
- Architecture constraints change.
- Gold model grain changes.
- A contract-breaking schema change appears.
- Quality failures reveal wrong assumptions.
- Serving users reject the output.

The workflow is iterative. Going back is normal when new information changes earlier decisions.
