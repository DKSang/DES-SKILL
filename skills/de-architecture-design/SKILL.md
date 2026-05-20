---
name: de-architecture-design
description: Use when selecting or documenting a data platform architecture, including storage, compute, orchestration, transformation, serving, and local-first or cloud-first tradeoffs.
---

# de-architecture-design

## When To Use

Use after business requirements and source assessment. Use before designing pipelines, tables, or transformations. Every significant tool or pattern choice at this phase must be documented as an Architectural Decision Record (ADR).

## Purpose

Produce a practical architecture decision record that fits scale, freshness, team capability, cost, governance, and serving needs — without locking the project to a single vendor or pattern prematurely.

## Inputs Required

- KPI and SLA requirements (`03-requirements-and-kpis.md`).
- Source inventory and write patterns (`05-data-source-assessment.md`).
- Domain model and data product definitions.
- Team skills and operational constraints.
- Preferred or required platforms if any.

## Decision Matrix — Storage Pattern

| Scenario | Recommended Pattern | Avoid |
| :--- | :--- | :--- |
| Batch analytics on structured data, team knows SQL | **Data Warehouse** (Snowflake, BigQuery, Synapse) | Lakehouse if team lacks Spark skills |
| Mixed workloads: SQL + Python + ML | **Lakehouse** (Delta/Iceberg on ADLS/S3 + compute) | Warehouse if ML/streaming is required |
| Local development, small data (< 100GB) | **DuckDB + Parquet** | Cloud warehouse for simple local prototypes |
| Event-driven, streaming-first | **Stream Log** (Kafka/Kinesis) + Bronze streaming tables | Batch if SLA > 5 minutes |
| On-premise, regulated, no cloud | **HDFS + Hive / Postgres + dbt** | Cloud-native if data must stay on-prem |

## Decision Matrix — Reversibility Classification

Every major decision must be labeled:

| Label | Definition | How to Treat |
| :--- | :--- | :--- |
| **Reversible (Two-way door)** | Can be changed later with moderate effort | Decide quickly; don't over-engineer |
| **Irreversible (One-way door)** | Changing later is very costly (data migration, vendor lock-in) | Require explicit team approval; document alternatives |

Examples: Storage format choice = **Irreversible**. Cluster size = **Reversible**.

## Step-By-Step Process

1. Identify required architecture capabilities: batch, streaming, ELT, BI, API, ML, AI agent, or reverse ETL.
2. Choose local-first, cloud-first, or hybrid development path.
3. Select storage pattern using the Decision Matrix — document as an ADR with reversibility label.
4. Select compute and transformation pattern: SQL, Python, Spark, dbt, DuckDB, warehouse SQL.
5. Select orchestration tool (documented separately in Phase 15).
6. Define serving layer options: Power BI, Superset, APIs, semantic models, feature store, AI agent.
7. Check all Six Undercurrents (see Undercurrent Coverage below).
8. Document options considered, decisions, tradeoffs, and risks per ADR.

## Output Files

Write the final artifacts to:

- `.agents/des-skill/output/07-architecture-design.md` (primary)
- `.agents/des-skill/output/07b-architecture-decision-records.md` (one ADR per major decision)

Use the matching templates from:

- `.agents/des-skill/templates/07-architecture-design-template.md`
- `.agents/des-skill/templates/07b-architecture-decision-record-template.md`

After writing the files, summarize paths and recommend the next skill.

## Required Outputs

- Architecture decision record with storage, compute, serving, and orchestration choices.
- Reversibility label on every major decision.
- TCO estimate (direct cost + operational overhead) per candidate option.
- Six Undercurrents review confirmation.
- Risk register with owners.

## Quality Checklist

- [ ] Architecture supports all stated Hard SLAs.
- [ ] Storage format choice is labeled as Irreversible with a documented rationale.
- [ ] At least 2 alternatives were considered for each major decision.
- [ ] No tool was chosen purely because it is popular — each choice has a business/technical rationale.
- [ ] Six Undercurrents (Security, Data Management, DataOps, Architecture, Orchestration, Software Engineering) are addressed.
- [ ] Rejected options are documented with reasons in ADRs.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Choosing tools because they are popular | Popular ≠ appropriate for your scale, team, or budget |
| Designing streaming for daily reporting SLAs | Streaming adds Kafka/Kinesis ops burden; batch is sufficient for > 5 min latency |
| Selecting vendor before understanding constraints | Vendor lock-in discovered post-migration; changing storage format = full rewrite |
| Skipping local development path | Engineers cannot develop or test without a working local environment |
| Making irreversible decisions without alternatives documented | No rollback plan if the chosen architecture proves wrong at scale |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Credential management, network topology, and encryption-at-rest strategy confirmed |
| Data Management | Catalog, lineage, and metadata tooling selected |
| DataOps | CI/CD and testing strategy tooling selected (e.g., GitHub Actions + dbt test) |
| Data Architecture | This is the core phase — every storage, compute, and serving decision documented as ADR |
| Orchestration | Orchestration tool selected (full design in Phase 15) |
| Software Engineering | Repository structure, branching strategy, and code review process defined |

## Handoff To The Next Skill

Next use `de-ingestion-design` to define how each source enters the platform, aligned with the confirmed architecture.
