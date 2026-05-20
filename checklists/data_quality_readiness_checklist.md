# Data Quality Readiness Checklist

This checklist is used during Phase 14 (Data Quality) to verify that data validation rules cover crucial dimensions and failure recovery actions are explicitly programmed.

---

## 1. Verification of Data Quality Dimensions
Ensure data quality rules cover the six standard dimensions:
- [ ] **Accuracy**: Validate that numerical columns hold logical values (e.g. latitude/longitude within bounding box, prices > 0).
- [ ] **Completeness**: Define maximum allowable null ratios for optional fields, and verify zero nulls in primary/foreign keys.
- [ ] **Timeliness**: Validate that data latency (difference between `event_timestamp` and `ingestion_timestamp`) falls within the required SLA (e.g. < 15 minutes).
- [ ] **Validity**: Check field formats (e.g. email patterns, ISO country codes, zipcode formats) against standard reference regexes.
- [ ] **Consistency**: Validate cross-table metrics (e.g. order item quantity matches total order sum).
- [ ] **Uniqueness**: Enforce unique checks on target table primary keys.

## 2. Thresholds & Anomaly Baseline
- [ ] **Row count anomaly detection defined**: Row count ranges are validated against a moving average (e.g., alert if daily count drops > 3 standard deviations from the 7-day average).
- [ ] **Distribution drift monitored**: Numerical columns track min/max/mean shifts, and categorical columns verify ratio distributions.
- [ ] **Baseline update cycle set**: Training windows for metric thresholds are schedule-controlled.

## 3. Action-on-Failure Protocols
For each data quality test, an action is defined:
- [ ] **FAIL**: Pipeline halts immediately, rolling back current transaction. Used for critical primary key or security checks.
- [ ] **QUARANTINE**: Failed rows are separated into an error table; the pipeline continues loading clean rows.
- [ ] **WARN**: Records are loaded, but alert is written to dashboard and Slack/PagerDuty topic.

## 4. Observability & Auditing
- [ ] **Quality runs logged**: Test execution results (Pass/Fail status, run times, fail row counts) are stored in an audit table.
- [ ] **Owner assigned**: Every test rule has an assigned owner responsible for investigating failures.
