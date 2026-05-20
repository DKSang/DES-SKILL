---
name: de-data-source-assessment
description: Use when identifying, profiling, comparing, or approving source systems before ingestion, architecture, modeling, or transformation design.
---

# de-data-source-assessment

## When To Use

Use after KPIs and requirements are known. Use before ingestion or architecture decisions when source reliability, ownership, schema, access, volume, or quality are uncertain.

## Purpose

Create a source inventory and readiness assessment that shows which systems can support the data product, where risks remain, and what agreements must be in place before building.

## Inputs Required

- KPI catalog and requirements from `03-requirements-and-kpis.md`.
- Candidate source systems (DB names, API endpoints, file paths, SaaS exports).
- Source system owners or DBA contacts.
- Sample payloads, schemas, or data dictionaries when available.

## Decision Matrix

Use these rules to select the right characterization strategy per source:

| Source Write Pattern | Ingestion Approach | Risk If Misidentified |
| :--- | :--- | :--- |
| Insert-only (events, logs) | Append incremental by timestamp | Low — straightforward watermark |
| CRUD (orders, customers) | Full snapshot OR log-based CDC | High — missing deletes silently corrupts Silver |
| SaaS export (Salesforce, HubSpot) | API polling + cursor pagination | Medium — rate limits and API latency spikes |
| File drop (CSV, Parquet landing) | File arrival sensor + manifest tracking | Medium — duplicate files if sensor not idempotent |
| Event stream (Kafka, Kinesis) | Consumer group offset commit | High — replaying offsets without dedup corrupts Bronze |

## Step-By-Step Process

1. List all candidate source systems; map each to at least one business KPI or data product requirement.
2. Identify the source **write pattern** (Insert-Only / CRUD / SaaS Export / File / Stream) for each source.
3. Capture owner, access method, credentials path, format, license, and PII classification.
4. Profile grain, daily volume (rows + GB), peak throughput (TPS), schema stability, history depth.
5. Identify watermark / change-tracking keys (`updated_at`, `sequence_id`, CDC log position).
6. Confirm upstream SLA: notification lead time for schema changes; maintenance window schedule.
7. Rate each source on: Reliability, Coverage, Completeness, Cost, Operational Risk (1–5 scale).
8. Decide: Accept / Reject / Defer / Replace — with written rationale.
9. Document gaps and mitigation options.

## Output File

Write the final artifact to:

`.agents/des-skill/output/05-data-source-assessment.md`

Use the matching template from:

`.agents/des-skill/templates/05-data-source-assessment-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Source inventory with write patterns, owners, and access paths.
- Source-to-requirement traceability map.
- Source readiness score per candidate.
- Upstream SLA agreement status.
- Identified PII fields per source.

## Quality Checklist

- [ ] Every source has an owner, access path, and confirmed write pattern.
- [ ] Grain and daily volume (rows + GB) are measured — not estimated from documentation.
- [ ] All PII and regulated columns are flagged.
- [ ] Upstream SLA agreement (schema change notice, maintenance windows) is confirmed.
- [ ] CDC log retention ≥ 24 hours is verified for any CDC-based source.
- [ ] Accepted sources map to at least one business requirement.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Trusting API docs as ground truth | Docs often lag reality; validate with live sample data |
| Treating CRUD sources as append-only | Missing deletes will silently corrupt Silver dedup logic |
| Accepting sources without ownership | Schema changes with no notice = pipeline breakage with no accountability |
| Deferring history assessment to later | Backfill cost grows exponentially; assess history depth at discovery |
| Querying production OLTP primary DB directly | Read load impacts source system; always use read replica for high-volume extraction |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Confirm least-privilege read-only access; secrets stored in Key Vault |
| Data Management | Flag PII columns; record data classification per source |
| DataOps | Document schema change notification agreement with source owner |
| Data Architecture | Map source write pattern to correct ingestion mode before architecture decisions |
| Orchestration | Record upstream SLA windows that constrain pipeline schedule choices |
| Software Engineering | Access credentials must never appear in code; parameterize connection strings |

## Handoff To The Next Skill

Next use `de-domain-modeling` to define business entities, events, relationships, glossary terms, and fact/dimension grain candidates — using confirmed source schemas as input.
