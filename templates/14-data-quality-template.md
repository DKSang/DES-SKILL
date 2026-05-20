# Data Quality Rule Catalog

Template này được dùng trong Phase 14 để định nghĩa validation rules, detection thresholds, và failure response protocols. Người dùng tự điền; xóa ví dụ khi hoàn thành.

> **FDE Data Quality Dimensions**: Accuracy / Completeness / Timeliness / Validity / Uniqueness.
> Mỗi layer trong Medallion architecture có focus khác nhau (xem bảng 1a bên dưới).

---

## 1. Quality Scope & Coverage

- **Pipeline / Domain**: (Ví dụ: `sales_pipeline`, `customer_domain`)
- **Target Layers**: Bronze / Silver / Gold *(chọn tất cả các layer áp dụng)*
- **Rule Owner**: (Team hoặc người chịu trách nhiệm cho DQ outcomes)
- **Review Frequency**: (Ví dụ: Review mỗi sprint, cập nhật sau mỗi data incident)

### 1a. FDE DQ Dimensions theo Layer

| Layer | Focus DQ chính | Rules nên áp dụng | Rules KHOONG nên áp dụng |
| :--- | :--- | :--- | :--- |
| **Bronze** | **Timeliness** + **Completeness** | Volume check ±X%; ingestion lag < SLA; schema conformance | Business logic rules (chưa biết nghiệp vụ context) |
| **Silver** | **Validity** + **Uniqueness** | Null PK check; dedup; format validation; FK integrity | Accuracy rules phụ thuộc vào Gold context |
| **Gold** | **Accuracy** + **Completeness** | Business rule checks; metric cross-validation; grain integrity | Volume-only checks (đã dùng ở Bronze) |

### 1b. Severity Classification (FDE)

| Severity | Khi nào dùng | Failure Action | Ví dụ |
| :--- | :--- | :--- | :--- |
| **FAIL** | PK/FK violation; security breach; grain collapse | Pipeline dừng. Không ghi record. Incident ticket. | `order_id IS NULL`; PII exposed to wrong role |
| **QUARANTINE** | Format error; business rule violation cho một số rows | Bad rows → `[layer]_quarantine/`; clean rows tiếp tục | Invalid email format; amount < 0 |
| **WARN** | Timeliness drift; distribution shift; soft threshold | Load all rows. Log + Slack alert. Không dừng. | Ingestion lag > 15 phút; null_rate tăng từ 2% lên 8% |

---

## 2. Data Quality Rules

Với mỗi rule, điền đủ 9 cột — **không được để threshold trống** ("check for nulls" không đủ rõ; phải là "null_rate = 0%"):

| Rule ID | Target Dataset | Column / Metric | DQ Dimension | Rule Description | Threshold cụ thể | Severity | Failure Action | Rule Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DQ-001 | `orders_silver` | `order_id` | Uniqueness | Không có duplicate PK | 0 duplicates | FAIL | FAIL | data-platform-team |
| DQ-002 | `orders_silver` | `total_amount` | Validity | Amount phải dương | > 0.00 | FAIL | QUARANTINE | data-platform-team |
| DQ-003 | `events_bronze` | `event_timestamp` | Timeliness | Latency trong SLA | Ingested < 15 phút sau event_time | WARN | WARN | streaming-team |
| DQ-004 | `customers_silver` | `email` | Validity | Format email hợp lệ | Khớp `^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$` | WARN | QUARANTINE | — |
| DQ-005 | `orders_silver` | `customer_id` | Completeness | FK không được null | null_rate = 0% | FAIL | FAIL | — |
| DQ-006 | `orders_gold` | `gross_revenue` | Accuracy | Revenue match Silver aggregate | orders_gold.revenue = SUM(orders_silver.amount) ±0.01% | FAIL | FAIL | finance-team |

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
