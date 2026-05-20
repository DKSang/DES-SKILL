# Data Quality Checklist

This checklist is used during Phase 14 (Data Quality) to verify that quality rules are comprehensive, properly configured, and that failure response protocols are in place.

---

## 1. Rule Coverage — Six DQ Dimensions
Confirm at least one test rule exists for each dimension:
- [ ] **Accuracy**: Numerical values are within valid business ranges (e.g., prices > 0, latitudes within ±90).
- [ ] **Completeness**: Null ratios are defined for every column; critical columns (primary/foreign keys) have 0% null tolerance.
- [ ] **Timeliness**: Data latency (event time vs. ingestion time) is measured and compared against SLA thresholds.
- [ ] **Validity**: Format and value constraints are checked (e.g., email regex, ISO country codes, enum values).
- [ ] **Consistency**: Cross-table metric totals are compared (e.g., order sum equals sum of order line items).
- [ ] **Uniqueness**: Primary key uniqueness is enforced on all Silver and Gold tables.

## 2. Layer Quality Gates
- [ ] **Bronze gate configured**: Row count within expected ±20% of 7-day average; metadata audit columns present.
- [ ] **Silver gate configured**: Zero null primary keys; deduplication applied; standardization rules verified.
- [ ] **Gold gate configured**: Fact table row count matches aggregated Silver source; no orphan foreign keys.
- [ ] **Gates are blocking**: Critical failures halt the pipeline and prevent bad data from advancing to the next layer.

## 3. Anomaly Detection & Thresholds
- [ ] **Row count baseline set**: Alert thresholds defined using a rolling historical window (e.g., 7-day moving average ± 3 standard deviations).
- [ ] **Distribution drift monitored**: Key numerical columns track mean/stddev changes; categorical columns track value ratio shifts.
- [ ] **Baseline update schedule**: Thresholds are re-trained on a regular schedule (e.g., monthly).

## 4. Failure Action Protocols
For each critical rule, an explicit action is defined:
- [ ] **FAIL rules defined**: Pipeline halts on primary key, security, and completeness violations.
- [ ] **QUARANTINE rules defined**: Invalid rows separated to a quarantine path; clean rows continue loading.
- [ ] **WARN rules defined**: Rows loaded; alert sent to monitoring channel.
- [ ] **No silent failures**: Every rule generates a log entry regardless of pass/fail status.

## 5. Observability & Ownership
- [ ] **DQ audit log active**: All test run results (rule ID, pass/fail, row counts, run timestamp) stored in a queryable audit table.
- [ ] **Owner assigned per rule**: Each DQ rule has a designated owner responsible for investigation on failure.
- [ ] **Alert path defined**: Critical failures trigger automated notifications to Slack/PagerDuty channels.
