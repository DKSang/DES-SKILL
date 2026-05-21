---
name: des-ingestion-design
description: Use when designing batch, streaming, API, file, CDC, database, or event ingestion pipelines before implementing source-to-raw data movement.
---

# des-ingestion-design

## When To Use

Use after architecture design and source assessment are complete, before Bronze layer design. Use when each source needs an ingestion mode, schedule, destination, retry policy, and backfill plan.

## Purpose

Create ingestion specifications that make source collection repeatable, idempotent, observable, and aligned with freshness SLA requirements.

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

The agent must not continue if any of these are unresolved:

- required upstream artifacts are missing or inconsistent;
- business owner, metric owner, source owner, or release owner is unclear;
- business priority, consumer, or project intent is ambiguous;
- source of truth, access, quality, legal use, cost, or ownership is unknown;
- KPI formula, grain, freshness, SLA, threshold, or acceptance criteria is ambiguous;
- architecture, storage, compute, deployment, or engine trade-off needs approval;
- data contract owner, consumer impact, schema version, or breaking-change policy is missing;
- DQ severity, threshold, remediation, alerting, or escalation is unknown;
- security, access, retention, environment, secret, or release evidence is missing.

Use the detailed HALT checkpoints in `steps/`: readiness HALT in step 01, phase decision HALT in step 02, and validation HALT in the final step. HALT asks for a decision, not permission to continue.


## Inputs Required

- Source assessment (`05-data-source-assessment.md`) with confirmed write patterns.
- Architecture decision record (`07-architecture-design.md`).
- Freshness and SLA requirements (`03-requirements-and-kpi-catalog.md`).
- Access credentials paths, schemas, and sample payloads.

## Decision Matrix

Use this matrix to select the correct ingestion mode per source:

| Business Latency SLA | Source Write Pattern | Recommended Mode | When to Override |
| :--- | :--- | :--- | :--- |
| > 1 hour (daily/hourly batch) | Insert-only or CRUD | **Batch Incremental** (watermark-based) | Never choose streaming for batch-friendly SLAs |
| > 1 hour with deletes | CRUD (orders, accounts) | **Log-based CDC** | Use snapshot if log retention is unavailable |
| < 5 minutes | Events, clickstream | **Event Streaming** (Kafka / Kinesis) | Batch if downstream analytics don't need real-time |
| One-time historical load | Any | **Full Backfill** | Document as idempotent and time-bounded |
| File arrives on schedule | File drop (S3, SFTP) | **File Arrival Sensor** + manifest | Use checksum manifest to detect duplicates |

**Default rule**: Choose **batch** unless business SLA explicitly requires < 5 min latency. Streaming adds operational complexity that must be justified.

## Step-By-Step Process

1. For each source, confirm ingestion mode using the Decision Matrix above.
2. Define schedule or trigger (cron, upstream sensor, event).
3. Specify destination path (Bronze table or landing zone directory).
4. Define **watermark column** and checkpoint storage location.
5. Design **idempotency strategy**: Partition Overwrite / Upsert-Merge / Append with dedup.
6. Specify retry policy: max retries, delay strategy (exponential backoff + jitter), timeout.
7. Define Dead Letter Queue (DLQ) path for malformed or failed records.
8. Specify the 5 mandatory audit metadata columns added by the pipeline.
9. Define backfill procedure and estimated backfill duration.
10. Assign alert channel and pipeline owner.

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/08-ingestion-design.md`

Use the matching template from:

`{skill-root}/../../templates/08-ingestion-design-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Ingestion mode decision per source (with rationale).
- Schedule / trigger specification.
- Idempotency and watermark strategy.
- Retry policy with backoff spec.
- DLQ path and 5 audit metadata columns.
- Backfill plan and estimated duration.

## Quality Checklist

- [ ] Streaming is only chosen when business SLA requires < 5 min latency.
- [ ] All pipelines use scheduler date variables — zero hardcoded `datetime.now()` calls.
- [ ] Idempotency strategy is documented: re-running produces the same Bronze output.
- [ ] Retry uses exponential backoff with jitter — not fixed delay.
- [ ] DLQ path is defined with failure metadata preserved.
- [ ] All 5 audit columns (`des_ingestion_timestamp`, `des_source_system`, `des_source_offset`, `des_pipeline_run_id`, `des_payload_hash`) are present.
- [ ] Backfill is safe: running for any historical date window produces correct output.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Using `datetime.now()` as ingestion date | Non-deterministic; breaks backfills and causes wrong partition writes |
| Fixed retry delays without jitter | Concurrent retries all fire simultaneously, overwhelming the source |
| No DLQ — bad records silently dropped | Data loss is invisible; root cause impossible to debug later |
| Streaming chosen for batch-friendly SLA | Adds Kafka/Kinesis ops overhead, cost, and complexity with no business benefit |
| Querying production DB primary directly | Read load degrades source OLTP performance; use read replica |
| Appending without dedup on CDC sources | Reprocessed CDC events create duplicate rows in Bronze |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Credentials via secrets manager only; least-privilege service account |
| Data Management | 5 mandatory audit columns added to all Bronze targets |
| DataOps | Idempotent pipelines enable safe retries and CI/CD re-deployments |
| Data Architecture | Ingestion mode must match source write pattern (CRUD → CDC, not append) |
| Orchestration | Retry, timeout, and DLQ specs defined before orchestration design phase |
| Software Engineering | No hardcoded dates, credentials, or table names in pipeline code |

## Handoff To The Next Skill

Next use `des-bronze-layer-design` to specify the raw landing table structure, partition design, metadata columns, and schema drift policy.
