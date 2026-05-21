# 14 — Data Quality Rule Catalog
# Online Learning Platform

**Skill sử dụng**: `des-data-quality`
**Input từ**: `05-data-source-assessment.md`, `10-silver-layer-design.md`, `11-gold-layer-design.md`

---

> **FDE DQ Dimensions**: Accuracy / Completeness / Timeliness / Validity / Uniqueness
> Mỗi layer có focus DQ khác nhau — xem bảng bên dưới.

---

## 1. DQ Focus theo Layer

| Layer | Focus DQ chính | Ví dụ rule |
| :--- | :--- | :--- |
| **Bronze** | **Timeliness** + **Completeness** | Volume trong ngưỡng ±20%; ingestion lag < SLA |
| **Silver** | **Validity** + **Uniqueness** | Null PK check; dedup enrollments; email format |
| **Gold** | **Accuracy** + **Completeness** | Revenue cross-check vs Silver; completion rate match |

### Severity Classification

| Severity | Khi nào dùng | Failure Action |
| :--- | :--- | :--- |
| **FAIL** | PK/FK violation; security breach; grain collapse | Pipeline dừng; Incident ticket; không ghi data |
| **QUARANTINE** | Format error; business rule violation cho một số rows | Bad rows → `*_quarantine/`; clean rows tiếp tục |
| **WARN** | Timeliness drift; distribution shift | Load all; Slack alert; không dừng |

---

## 2. Data Quality Rules

| Rule ID | Target Dataset | Column / Metric | DQ Dimension | Rule | Threshold cụ thể | Severity | Failure Action | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bronze Layer** | | | | | | | | |
| DQ-B001 | `bronze_lms_enrollments` | row_count | Completeness | Volume daily phải trong ngưỡng bình thường | > (7-day avg × 0.8) AND < (7-day avg × 1.2) | WARN | WARN | data-platform-team |
| DQ-B002 | `bronze_lms_enrollments` | `des_ingestion_timestamp` | Timeliness | CDC latency phải trong SLA | max(des_ingestion_timestamp) > NOW() - 30 phút | WARN | WARN | data-platform-team |
| DQ-B003 | `bronze_learning_events` | `event_timestamp` | Timeliness | Streaming lag phải trong SLA | max(des_ingestion_timestamp - event_timestamp) < 10 phút | WARN | WARN | streaming-team |
| DQ-B004 | `bronze_api_enrollments` | row_count | Completeness | API sync phải có đủ 3 platforms | COUNT(DISTINCT platform_source) = 3 | FAIL | FAIL | data-platform-team |
| **Silver Layer** | | | | | | | | |
| DQ-S001 | `silver_enrollments` | `enrollment_id` | Uniqueness | Không có duplicate PK | 0 duplicates | FAIL | FAIL | data-platform-team |
| DQ-S002 | `silver_enrollments` | `student_id` | Completeness | FK phải tồn tại trong `silver_students` | null_rate = 0%; orphan_rate = 0% | FAIL | FAIL | data-platform-team |
| DQ-S003 | `silver_students` | `email` | Validity | Email format hợp lệ | Khớp regex `^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$` | WARN | QUARANTINE | data-platform-team |
| DQ-S004 | `silver_enrollments` | `status` | Validity | Status phải thuộc enum | IN ('active', 'completed', 'refunded', 'paused') | FAIL | QUARANTINE | data-platform-team |
| DQ-S005 | `silver_learning_events` | `module_id` | Completeness | FK phải tồn tại trong `silver_modules` | orphan_rate < 0.1% | WARN | QUARANTINE | streaming-team |
| DQ-S006 | `silver_enrollments` | `enrolled_date` | Validity | Ngày hợp lệ, không trong tương lai | enrolled_date <= CURRENT_DATE | FAIL | QUARANTINE | data-platform-team |
| **Gold Layer** | | | | | | | | |
| DQ-G001 | `fact_enrollment` | `enrollment_id` | Uniqueness | Không có duplicate grain | 0 duplicates per (student_id, course_id, platform) | FAIL | FAIL | data-platform-team |
| DQ-G002 | `fact_instructor_revenue` | `net_revenue_usd` | Accuracy | Revenue phải match Silver aggregate | \|gold_revenue - silver_revenue\| / silver_revenue < 0.001% | FAIL | FAIL | finance-team |
| DQ-G003 | `fact_learning_progress` | completion_rate | Accuracy | Completion rate phải trong [0, 100] | 0 ≤ completion_rate ≤ 100 | FAIL | QUARANTINE | data-platform-team |
| DQ-G004 | `fact_learning_progress` | row_count | Completeness | Mỗi ngày phải có đủ records | COUNT per date ≥ COUNT(active_enrollments) × 0.99 | WARN | WARN | data-platform-team |

---

## 3. Layer Quality Gates

| Layer | Gate | Blocking? | Evidence |
| :--- | :--- | :--- | :--- |
| Bronze | Volume trong ±20% avg; có đủ 3 API platforms | DQ-B004 = Yes; DQ-B001 = No | Airflow task: `bronze_quality_gate` |
| Silver | Zero null PK; zero invalid status | Yes | `dbt test --select silver_*` |
| Gold | Revenue cross-check pass; no duplicate grain | Yes | `dbt test --select gold_*` |

**Pipeline chỉ advance layer nếu quality gate PASS.**

---

## 4. Anomaly Detection & Baseline

- **Row Count Baseline**: 7-ngày rolling average; WARN nếu deviation > 20%
- **Completion Rate Baseline**: Historical P50 per course; WARN nếu drop > 15% trong 1 tuần
- **Revenue Baseline**: Month-over-month; WARN nếu drop > 30% (không phải cuối tháng)
- **Baseline Update**: Retrain ngày 1 hằng tháng tự động

---

## 5. Failure Action Protocols

- **FAIL**: Pipeline `xcom_push(fail=True)` → Airflow `on_failure_callback` → Slack `#data-incidents` → PagerDuty on-call nếu không resolve trong 30 phút. Không có data nào được ghi tới layer tiếp theo.
- **QUARANTINE**: Failed rows → `[layer]_quarantine/YYYY/MM/DD/` với columns: `dq_rule_id`, `dq_failure_reason`, `dq_failed_at`, `original_record`. Clean rows tiếp tục.
- **WARN**: Tất cả rows được load. Warning log → Slack `#data-quality`. Review trong sprint.

---

## 6. DQ Audit Log & Ownership

- **Audit Table**: `dq_audit_log` trong Fabric SQL — columns: `run_id`, `rule_id`, `layer`, `pass_count`, `fail_count`, `quarantine_count`, `run_duration_sec`, `run_at`
- **Incident Path**: FAIL → `#data-incidents` (Slack) → PagerDuty on-call → escalate đến Data Lead nếu > 2 giờ
- **DQ Dashboard**: Power BI page "Data Quality Health" với trend per rule per day

**Handoff**: Chuyển sang `des-orchestration-observability`.
