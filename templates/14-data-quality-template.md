# Data Quality Rule Catalog

This template is used during Phase 14 (Data Quality) to define and document data validation rules, detection thresholds, and failure response protocols for each layer of the Medallion architecture.

---

## 1. Quality Scope & Coverage

*   **Pipeline / Domain**: (e.g., `sales_pipeline`, `customer_domain`)
*   **Target Layers**: Bronze / Silver / Gold *(select all that apply)*
*   **Rule Owner**: (Team or person accountable for quality outcomes)
*   **Review Frequency**: (e.g., Reviewed every sprint, updated after each data incident)

---

## 2. Data Quality Rules

Document validation rules across all 6 standard DQ dimensions:

| Rule ID | Target Dataset | Column / Metric | DQ Dimension | Rule Description | Threshold / Condition | Severity (Critical / High / Low) | Failure Action (FAIL / QUARANTINE / WARN) | Rule Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DQ-001 | `orders_silver` | `order_id` | Uniqueness | No duplicate primary keys allowed | 0 duplicates | Critical | FAIL | data-platform-team |
| DQ-002 | `orders_silver` | `total_amount` | Accuracy | Amount must be positive | > 0.00 | Critical | QUARANTINE | data-platform-team |
| DQ-003 | `events_bronze` | `event_timestamp` | Timeliness | Record latency within SLA | Ingested within 15 min of event_time | High | WARN | streaming-team |
| DQ-004 | `customers_silver` | `email` | Validity | Email format check | Matches `^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$` | High | QUARANTINE | — |
| DQ-005 | `orders_silver` | `customer_id` | Completeness | FK must not be null | Null ratio = 0% | Critical | FAIL | — |
| — | — | — | Consistency | Cross-table metric match | orders.total == sum(order_items.subtotal) | High | WARN | — |

---

## 3. Layer Quality Gates

Define the minimum quality standards that must pass before data advances to the next layer:

| Layer | Quality Gate Description | Blocking? (Yes/No) | Evidence / Test Command |
| :--- | :--- | :--- | :--- |
| Bronze | Source record count matches expected daily volume ±20% | Yes | `SELECT COUNT(*) FROM raw_orders WHERE date = '{{ ds }}'` |
| Silver | Zero null primary keys; deduplication applied | Yes | `SELECT COUNT(*) FROM orders_silver WHERE order_id IS NULL` |
| Gold | Fact table row count matches Silver source aggregation | Yes | Unit test in dbt |

---

## 4. Anomaly Detection & Baseline Configuration

Define statistical baselines to catch unexpected data drift or volume anomalies:

*   **Row Count Baseline Window**: (e.g., 7-day rolling average; alert if today's count deviates > 3 standard deviations)
*   **Null Ratio Baselines**: (e.g., `payment_method` historically has 2% nulls; alert if exceeds 10%)
*   **Distribution Drift Tracking**: (e.g., Monitor `order_amount` mean/stddev weekly; alert if mean drops > 30%)
*   **Baseline Update Schedule**: (e.g., Retrain baseline window on the 1st of every month)

---

## 5. Failure Action Protocols

Define clearly what happens when a validation rule fails:

*   **FAIL**: Pipeline halts immediately. No partial records are written to the target. Incident ticket opened automatically. *(Use for primary key, foreign key, and security violations.)*
*   **QUARANTINE**: Failed rows are written to `[layer]_quarantine/` path with metadata columns: `dq_rule_id`, `dq_failure_reason`, `dq_failed_at`. Clean rows continue loading. *(Use for format/validity errors.)*
*   **WARN**: All rows are loaded. A warning is logged and sent to monitoring. No pipeline halt. *(Use for timeliness SLAs and low-severity distribution drift.)*

---

## 6. DQ Audit Log & Ownership

*   **Audit Table / Dashboard**: (e.g., All test results are stored in `dq_audit_log` table with `run_id`, `rule_id`, `pass_count`, `fail_count`, `run_duration_sec`)
*   **Incident Escalation Path**: (e.g., FAIL → Slack #data-incidents → PagerDuty on-call if unresolved in 30 min)
*   **Open Questions / Gaps**: (e.g., "DQ-003 timeliness threshold needs calibration after new source system integration")
