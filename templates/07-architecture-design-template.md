# Architecture Design Document

This template is used during Phase 07 (Architecture Design) to document the overall system design, technology choices, tradeoffs, and data flow for the data engineering solution.

---

## 1. Context & Business Requirements

*   **Project / Domain**: (e.g., `sales_analytics_platform`)
*   **Data Maturity Level of Organization**: Level 1 (Ad-hoc) / Level 2 (Scaling) / Level 3 (Data-Led) *(Choose one — this shapes recommended complexity)*
*   **Business SLA**: (e.g., dashboards refreshed hourly; ML features updated daily; reports delivered by 8AM)
*   **Team Constraints**: (e.g., 2 data engineers, strong Python/SQL skills, no Scala/JVM experience)
*   **Scale Estimates**: (e.g., 50M events/day, 200GB raw/day, 3 years data history = ~200TB total)

---

## 2. Architecture Decision Summary

| Decision Area | Choice Made | Reversibility (Easy / Hard) | Key Rationale | Primary Trade-off |
| :--- | :--- | :--- | :--- | :--- |
| Storage Platform | *e.g., Azure ADLS Gen2* | Hard (platform lock-in) | Cost-effective object storage, native Delta Lake support | Egress costs if migrating to another cloud |
| Compute Engine | *e.g., Databricks / dbt + Snowflake* | Medium | Managed Spark; familiar to the team | Higher cost vs. self-managed clusters |
| Ingestion Tool | *e.g., Azure Data Factory + Kafka* | Medium | Fully managed pipelines + real-time streaming | Kafka requires ops expertise |
| Orchestration | *e.g., Apache Airflow on AKS* | Easy | OSS, portable DAGs | Self-hosted maintenance burden |
| Transformation | *e.g., dbt Core* | Easy | SQL-native, version controlled, testable | Requires Spark for large-scale transforms |
| Serving | *e.g., Power BI + FastAPI* | Easy | Analyst-familiar BI; API for operational consumers | Multiple serving tools to maintain |

---

## 3. High-Level Data Flow

```text
Source Systems (OLTP / APIs / IoT / SaaS)
        │
        ▼
[Ingestion Layer]  ── (Batch / CDC / Stream) ──► Object Storage (Raw Landing Zone)
        │
        ▼
[Bronze Layer]     ── Append-only raw replica with audit columns ──► Delta Lake / Iceberg
        │
        ▼
[Silver Layer]     ── Standardized, deduplicated, validated ──► Delta Lake
        │
        ▼
[Gold Layer]       ── Kimball Dimensional Model (Facts + Dims) ──► Delta Lake / Warehouse
        │
        ▼
[Serving Layer]    ── BI Dashboards / REST API / ML Features / Reverse ETL
```

---

## 4. Compute-Storage Separation Design

*   **Storage**: (e.g., All data persisted in Azure ADLS Gen2 using open Delta Lake format — compute-agnostic)
*   **Compute**: (e.g., Databricks cluster auto-scales; suspended when idle. Separately managed from storage.)
*   **Network**: (e.g., Storage account and compute in same region to avoid egress costs)
*   **Access Security**: (e.g., Compute accesses storage via managed identity/service principal — no credentials in code)

---

## 5. Six Undercurrents Coverage

Confirm that all six undercurrents are addressed at the architecture level:

| Undercurrent | Design Decision | Owner |
| :--- | :--- | :--- |
| **Security** | All credentials in Azure Key Vault; column-level encryption for PII in Silver+ | security-team |
| **Data Management** | Unity Catalog for column lineage and dataset discovery | data-platform-team |
| **DataOps** | GitHub Actions CI/CD for dbt models; Great Expectations for DQ tests | data-platform-team |
| **Data Architecture** | Medallion architecture; all decisions logged as ADRs | data-lead |
| **Orchestration** | Airflow DAGs with ExternalTaskSensor for inter-domain dependencies | data-platform-team |
| **Software Engineering** | dbt models version-controlled; modular ingestion functions; reviewed PRs | all engineers |

---

## 6. Platform & Tooling Decision Matrix

| Component | Candidate A | Candidate B | Selected | Key Reason | Reversibility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Warehouse | Snowflake | Databricks SQL | — | — | — |
| Orchestration | Airflow | Prefect | — | — | — |
| Transformation | dbt | Spark SQL | — | — | — |
| DQ / Testing | Great Expectations | dbt tests | — | — | — |
| Catalog | Datahub | Unity Catalog | — | — | — |

---

## 7. Risks, Anti-patterns & Mitigations

| Risk / Anti-pattern | Impact | Mitigation |
| :--- | :--- | :--- |
| Tool-first design (choosing tools before problem) | Wrong stack; rework | Finalize ADRs only after business requirements are locked |
| Over-engineered streaming for batch-friendly problems | High cost, complexity | Batch unless SLA < 5 min latency is explicitly required |
| Single-region deployment | Disaster recovery failure | Plan multi-region or cross-zone replication from day 1 |
| Hardcoded credentials in pipeline code | Security breach | Enforce secrets manager check in PR pipeline |
