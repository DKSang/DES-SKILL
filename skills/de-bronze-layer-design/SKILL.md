---
name: de-bronze-layer-design
description: Use when designing raw landing datasets, Bronze tables, raw zones, audit metadata, partitions, retention, and replayable source storage.
---

# de-bronze-layer-design

## When To Use

Use after ingestion design is complete and before Silver layer standardization. Use when raw source records must be stored safely, replayably, and with full audit traceability.

## Purpose

Design Bronze datasets that preserve source truth, support audit and replay, and avoid premature cleaning or business logic.

## Inputs Required

- Ingestion specification (`08-ingestion-design.md`).
- Source schemas or payload samples.
- Retention and privacy requirements (`03-requirements-and-kpis.md`).
- Architecture decision record (`07-architecture-design.md`).

## Decision Matrix — Storage Format Selection

| Scenario | Recommended Format | Rationale |
| :--- | :--- | :--- |
| Need ACID + time travel + schema evolution | **Delta Lake** | Best for Medallion architectures; supports MERGE, Z-ORDER, VACUUM |
| Multi-engine portability (no vendor lock-in) | **Apache Iceberg** | Open standard; supported by Spark, Flink, Athena, BigQuery |
| Simple columnar storage without ACID | **Parquet** | Good for read-heavy, append-only workloads without updates |
| Schema registry + streaming | **Avro** | Best with Kafka + Confluent Schema Registry for event streams |
| Raw JSON fidelity needed | **JSON / NDJSON** | Only for landing zone; always convert to columnar before Bronze |

**Default**: Use **Delta Lake** for Medallion architecture on Databricks/Spark. Use **Iceberg** for multi-engine or cloud-agnostic architectures.

## Partition Design Rules

| Rule | Guidance |
| :--- | :--- |
| Primary partition key | Use `ingestion_date = YYYY-MM-DD` (not event date) — enables safe partition overwrite on replay |
| Target partition file size | 100MB – 1GB per partition file after compression |
| High-cardinality columns | Never partition by `user_id`, `order_id`, or UUID — creates millions of tiny partitions |
| Secondary access optimization | Apply Z-ORDER / clustering on high-frequency filter columns within a partition |

## Step-By-Step Process

1. Define one Bronze dataset per source feed or logical raw object.
2. Select storage format using the Decision Matrix above.
3. Choose partition key (`ingestion_date` default) and validate cardinality.
4. Add 5 mandatory audit metadata columns (see Quality Checklist).
5. Define schema drift handling policy for: new columns / removed columns / type changes.
6. Define replay and backfill behavior (partition overwrite ensures idempotency).
7. Define PII treatment: restrict Bronze access to `bronze-raw-readers` role.
8. Set retention lifecycle rules: Hot → Cool → Archive → Delete.

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/09-bronze-layer-design.md`

Use the matching template from:

`{skill-root}/../../templates/09-bronze-layer-design-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Bronze table specifications (format, partition, compression).
- 5 mandatory metadata columns documented.
- Schema drift policy (new / removed / type-changed columns).
- Retention lifecycle plan.
- PII access restriction policy.

## Quality Checklist

- [ ] Bronze write mode is **append-only** — no in-place updates or deletes of raw records.
- [ ] Source payload is preserved with zero business logic applied.
- [ ] Partition key is `ingestion_date` (not event date) to support safe partition overwrite on backfill.
- [ ] Partition file size is within 100MB – 1GB target range.
- [ ] All 5 audit columns are present: `des_ingestion_timestamp`, `des_source_system`, `des_source_offset`, `des_pipeline_run_id`, `des_payload_hash`.
- [ ] Schema drift policy is defined for: new columns, removed columns, type changes.
- [ ] Bronze access is restricted — PII not masked at this layer, access is role-gated.
- [ ] Retention lifecycle rule is configured (Hot → Archive → Delete).

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Applying business logic in Bronze | Breaks the "raw replay" guarantee; Silver cannot recover if business rules change |
| Dropping raw source fields | Irreversible data loss; fields needed later cannot be recovered |
| Partitioning by `user_id` or `order_id` | Creates millions of tiny partitions; kills query performance and increases metadata overhead |
| Using event date as partition key | Re-processing late-arriving events overwrites wrong partitions |
| No metadata columns | Cannot trace which pipeline run loaded which records; audit is impossible |
| Storing raw JSON at scale without conversion | JSON is row-oriented; analytical queries scan 10–100x more data than Parquet/Delta |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Bronze access restricted to `bronze-raw-readers`; PII masked starting at Silver |
| Data Management | Audit metadata columns enable full lineage from source event to Bronze record |
| DataOps | Partition overwrite strategy makes Bronze replay-safe for CI/CD redeployments |
| Data Architecture | Format selection must be reversible-aware: Delta/Iceberg avoid storage vendor lock-in |
| Orchestration | Retention lifecycle rules defined here; enforced by orchestration lifecycle jobs |
| Software Engineering | Schema drift policy prevents ad-hoc schema changes from breaking downstream pipelines |

## Handoff To The Next Skill

Next use `de-silver-layer-design` to standardize types, timestamps, naming conventions, apply deduplication, and define SCD strategies for slowly changing dimensions.
