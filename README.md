# Data Engineering Superpowers

A reusable Superpowers-style skill pack for professional Data Engineering projects across domains such as agriculture, finance, retail, healthcare, logistics, SaaS analytics, and IoT.

The pack is intentionally vendor-neutral. It supports local-first development with SQL, Python, DuckDB, and dbt, and cloud-first development with platforms such as Databricks, Snowflake, BigQuery, Microsoft Fabric, Azure Data Factory, Airflow, Dagster, Kafka, Great Expectations, Soda, Power BI, Superset, and GitHub Actions.

## Recommended Workflow Order

`de-business-discovery`
-> `de-business-questions`
-> `de-requirements-and-kpis`
-> `de-data-product-definition`
-> `de-data-source-assessment`
-> `de-domain-modeling`
-> `de-architecture-design`
-> `de-ingestion-design`
-> `de-bronze-layer-design`
-> `de-silver-layer-design`
-> `de-gold-layer-design`
-> `de-data-contracts`
-> `de-transformation-design`
-> `de-data-quality`
-> `de-orchestration-and-observability`
-> `de-semantic-model-design`
-> `de-serving-layer-design`
-> `de-lineage-and-metadata`
-> `de-governance-and-security`
-> `de-cost-and-performance-optimization`
-> `de-cicd-and-testing`
-> `de-project-evaluation`

## Operating Principle

Do not jump directly into coding. A production-oriented data project starts with business context, measurable outcomes, source readiness, architecture choices, quality expectations, and clear serving needs. Code should implement agreed artifacts, not replace discovery.

## Skill Index

| Skill | Main Artifact |
| --- | --- |
| `de-business-discovery` | Business discovery brief |
| `de-business-questions` | Business question catalog |
| `de-requirements-and-kpis` | Requirements and KPI catalog |
| `de-data-product-definition` | Data product specification |
| `de-data-source-assessment` | Data source inventory |
| `de-domain-modeling` | Conceptual domain model |
| `de-architecture-design` | Architecture decision record |
| `de-ingestion-design` | Ingestion specification |
| `de-bronze-layer-design` | Bronze table specifications |
| `de-silver-layer-design` | Silver table specifications |
| `de-gold-layer-design` | Gold table specifications |
| `de-data-contracts` | Data contracts |
| `de-transformation-design` | Transformation design |
| `de-data-quality` | Data quality rule catalog |
| `de-orchestration-and-observability` | Pipeline and monitoring spec |
| `de-semantic-model-design` | Semantic model specification |
| `de-serving-layer-design` | Serving layer specification |
| `de-semantic-and-serving-layer` | Compatibility bridge for semantic and serving work |
| `de-lineage-and-metadata` | Lineage and metadata catalog |
| `de-governance-and-security` | Governance checklist |
| `de-cost-and-performance-optimization` | Cost and performance review |
| `de-cicd-and-testing` | CI/CD and test plan |
| `de-project-evaluation` | Release readiness review |

## How To Use

Load the skill matching the current project phase. If the requested task depends on missing upstream artifacts, stop and produce the missing artifact first or ask for the minimum missing input.
