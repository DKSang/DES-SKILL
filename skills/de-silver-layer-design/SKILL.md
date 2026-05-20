---
name: de-silver-layer-design
description: Use when designing cleaned, standardized, conformed, typed, deduplicated, and validated Silver datasets before business-ready Gold modeling.
---

# de-silver-layer-design

## When To Use

Use after Bronze design and before Gold modeling. Use when raw source data must be standardized into reliable, deduplicated, and validated datasets that serve as the single source of truth for business entities.

## Purpose

Design Silver datasets that normalize schemas, types, timestamps, business codes, and deduplication logic while preserving full lineage back to Bronze. Silver is the "conformed" layer — no aggregation yet.

## Inputs Required

- Bronze table specifications (`09-bronze-layer-design.md`).
- Source schemas and sample payloads.
- Domain model and entity grain decisions (`06-domain-modeling.md`).
- Business requirements (`03-requirements-and-kpis.md`).

## Decision Matrix — Deduplication Strategy

| Source Behavior | Deduplication Approach |
| :--- | :--- |
| Insert-only events (no updates) | `ROW_NUMBER() OVER (PARTITION BY event_id ORDER BY ingestion_timestamp DESC) = 1` — deduplicate replayed Bronze events |
| CRUD source (updates + deletes via CDC) | `MERGE INTO silver.table ON primary_key MATCHED → UPDATE / NOT MATCHED → INSERT` |
| CDC with deletes | Include `_op = 'D'` handling — set `is_deleted = TRUE`, do not physically delete Silver rows |
| Late-arriving records | Define lookback window (e.g., 7-day merge window); flag records older than window as `is_late_arrival = TRUE` |
| SaaS export with no change tracking | Full snapshot comparison using hash diff to identify changed rows |

## Decision Matrix — SCD Type Selection

| Business Need | SCD Type | Implementation |
| :--- | :--- | :--- |
| Only current value matters (no history) | **SCD Type 1** — Overwrite | `UPDATE SET column = new_value` in MERGE |
| Full history of changes required | **SCD Type 2** — Track history | Add `valid_from`, `valid_to`, `is_current` columns |
| Partial history (e.g., last N changes) | **SCD Type 3** — Limited history | Add `previous_value` column alongside current |

**Default**: Use SCD Type 1 unless business users explicitly need to analyze historical attribute changes.

## Step-By-Step Process

1. Define Silver dataset grain and merge key (the unique business identifier).
2. Apply standardization rules (see Required Outputs).
3. Choose deduplication strategy using the Decision Matrix above.
4. Determine SCD type for slowly changing dimensions.
5. Define late-arriving data lookback window and handling.
6. Define invalid record quarantine path and failure action.
7. Map source codes to canonical reference values (e.g., country codes → ISO 3166, currency → ISO 4217).
8. Define schema evolution policy (new columns / removed columns / type changes).
9. Define Silver quality gates (blocking before Gold advancement).

## Output File

Write the final artifact to:

`.agents/des-skill/output/10-silver-layer-design.md`

Use the matching template from:

`.agents/des-skill/templates/10-silver-layer-design-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Silver table specifications with grain, merge key, and write mode.
- Standardization rules: timezone (→ UTC), naming (→ snake_case), types (explicit cast), currency (→ USD).
- Deduplication strategy and SCD type per table.
- Late-arriving data policy with lookback window.
- Invalid record quarantine path and action (FAIL / QUARANTINE).
- Schema evolution policy.

## Quality Checklist

- [ ] Grain and merge key are explicitly defined for every Silver table.
- [ ] All timestamps converted to UTC; timezone source is documented.
- [ ] All column names are `snake_case`; source-specific naming is mapped.
- [ ] Null policy is defined per column: default value / quarantine / fail.
- [ ] Deduplication strategy handles both CDC replays and late-arriving events.
- [ ] SCD type is decided for every slowly changing attribute.
- [ ] Invalid records route to `[table]_quarantine` with `dq_rule_id` and `dq_failure_reason`.
- [ ] No business aggregation in Silver — only standardization and deduplication.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Mixing business aggregates into Silver | Silver is a conformed source layer, not a reporting layer; aggregates belong in Gold |
| Hiding invalid records (silent drop) | Invisible data loss; no way to audit or fix root cause |
| Leaving source-specific naming (e.g., `tbl_ord_id`) | Downstream consumers inherit technical debt; cross-domain joins break |
| Ignoring late-arriving data | Late CDC events silently create duplicates if not handled in the merge window |
| SCD Type 2 for every dimension by default | Over-complicates data model; only use SCD2 when history is explicitly required |
| Re-running Silver without idempotency | Multiple runs create duplicate rows; partition overwrite or MERGE must be confirmed idempotent |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | PII masking applied at Silver transformation (hash/redact/tokenize) before Silver write |
| Data Management | Silver is the first layer with business-ready column names; catalog entries created here |
| DataOps | Silver MERGE logic must be idempotent to enable safe CI/CD redeployments |
| Data Architecture | SCD design decisions are architectural; document in ADR if SCD2 chosen |
| Orchestration | Silver quality gates integrated as blocking tasks in orchestration DAG |
| Software Engineering | Dedup logic and standardization rules are version-controlled; tested in CI/CD pipeline |

## Handoff To The Next Skill

Next use `de-gold-layer-design` to model business-ready facts, dimensions, marts, and certified metrics.
