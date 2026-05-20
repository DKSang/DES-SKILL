---
name: de-data-quality
description: Use when defining or implementing data quality checks, validation gates, anomaly detection, freshness tests, schema tests, and failure actions.
---

# de-data-quality

## When To Use

Use before productionizing pipelines and after core datasets or transformations are defined. Use whenever trust, correctness, freshness, or data incident handling is unclear or undefined.

## Purpose

Create a data quality rule catalog and validation strategy that protects Bronze, Silver, Gold, contracts, and serving outputs from silent data corruption.

## Inputs Required

- Dataset specifications from Bronze, Silver, and Gold layer designs.
- Data contracts (`12-data-contracts.md`).
- Transformation design (`13-transformation-design.md`).
- SLA and freshness requirements (`03-requirements-and-kpis.md`).
- Known quality risks from source assessment (`05-data-source-assessment.md`).

## Decision Matrix — 6 DQ Dimensions

Every dataset must be evaluated against all 6 dimensions:

| DQ Dimension | What to Check | Example Rule | Recommended Severity |
| :--- | :--- | :--- | :--- |
| **Completeness** | Null rates in required columns | `order_id` null ratio = 0% | Critical → FAIL |
| **Uniqueness** | Duplicate primary keys | No duplicate `order_id` in Silver | Critical → FAIL |
| **Accuracy** | Values within valid business ranges | `total_amount > 0` | High → QUARANTINE |
| **Validity** | Format and enum constraints | Email regex, ISO country code | High → QUARANTINE |
| **Timeliness** | Data latency vs SLA | `MAX(ingestion_ts - event_ts) < 15 min` | High → WARN |
| **Consistency** | Cross-table metric alignment | `SUM(order_lines.subtotal) == orders.total` | High → WARN |

## Decision Matrix — Failure Action Selection

| Failure Impact | Recommended Action | When to Use |
| :--- | :--- | :--- |
| Data corruption of primary keys or FKs | **FAIL** — halt pipeline immediately | Zero tolerance violations: null PK, null FK, security breach |
| Invalid format or out-of-range values | **QUARANTINE** — separate bad rows, continue loading clean rows | Format errors, enum mismatches, range violations |
| Timeliness SLA breach, distribution drift | **WARN** — load all rows, alert to monitoring | Low-severity anomalies, SLA degradation without data loss |

**Rule**: Never create a WARN for something that causes business decisions to be wrong. If the downstream user would be misled by bad data, it must be QUARANTINE or FAIL.

## Step-By-Step Process

1. List all datasets that need DQ rules (Bronze quality gates, Silver critical columns, Gold metrics).
2. For each dataset, write rules across all 6 DQ dimensions.
3. Assign severity (Critical / High / Low) and failure action (FAIL / QUARANTINE / WARN).
4. Define anomaly baselines: rolling window (e.g., 7-day average ± 3 standard deviations for row counts).
5. Choose implementation tool: dbt tests, Great Expectations, Soda, or SQL assertions.
6. Define DQ audit log target: store all test run results in a queryable `dq_audit_log` table.
7. Assign an owner and alert channel per rule.
8. Design the quarantine path: `[table]_quarantine` with columns `dq_rule_id`, `dq_failure_reason`, `dq_failed_at`.

## Output File

Write the final artifact to:

`.agents/des-skill/output/14-data-quality.md`

Use the matching template from:

`.agents/des-skill/templates/14-data-quality-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- DQ rule catalog covering all 6 dimensions per dataset.
- Layer quality gates (Bronze, Silver, Gold) with blocking / non-blocking status.
- Failure action protocol (FAIL / QUARANTINE / WARN per rule).
- Anomaly detection baseline configuration.
- DQ audit log and alert path.

## Quality Checklist

- [ ] All 6 DQ dimensions are represented in the rule catalog.
- [ ] Primary key uniqueness and not-null checks exist for all Silver and Gold tables.
- [ ] Bronze, Silver, and Gold each have at least one blocking quality gate.
- [ ] Anomaly detection row count baseline window is defined.
- [ ] Every FAIL or QUARANTINE rule has an owner and Slack/PagerDuty alert path.
- [ ] DQ audit log stores all test results (not just failures) for trending.
- [ ] No silent failures: every rule produces a log entry on every run.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Only checking schema (not values) | Schema can be valid while data is completely wrong (nulls, zeros, wrong ranges) |
| Creating WARNs nobody monitors | Warnings without owners and dashboards are noise — they desensitize teams to real problems |
| Blocking pipelines on low-severity checks | Timeliness SLAs should WARN, not halt a pipeline — blocking creates outage-level incidents for minor delays |
| Skipping cross-table reconciliation | Fact table totals drift from Silver source silently; reports show different numbers than source |
| Hard-coded thresholds without historical baseline | Static thresholds break during business seasonality (e.g., Black Friday volume spike triggers false alerts) |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | DQ audit logs must not expose PII column values in log entries |
| Data Management | DQ rules are part of the data contract — changes to rules must follow contract versioning |
| DataOps | DQ checks must run automatically in CI/CD pipeline (not only in production) |
| Data Architecture | Layer gates enforce the Medallion architecture principle: bad data cannot advance to next layer |
| Orchestration | DQ gate results must be integrated into pipeline DAG as blocking or non-blocking tasks |
| Software Engineering | DQ tests should be version-controlled alongside pipeline code; reviewed in PRs |

## Handoff To The Next Skill

Next use `de-orchestration-and-observability` to schedule, monitor, alert, and define runbooks for operating pipelines in production.
