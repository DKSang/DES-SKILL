# Định Nghĩa DQ Rules với Threshold Cụ Thể

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi rule phải có công thức threshold, baseline window, failure action, implementation tool, owner, và alert path.
- HALT bắt buộc nếu anomaly detection dùng baseline mơ hồ như "30-day rolling" nhưng không có công thức, minimum sample, hoặc seasonality handling.

## Hướng dẫn

### 1. Định nghĩa rule đầy đủ

Với mỗi rule, điền bảng:

| Rule ID | Dataset | Column/metric | Dimension | Threshold formula | Severity | Action | Tool | Owner | Alert |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Ví dụ threshold cụ thể:
- `null_rate(order_id) = 0`
- `duplicate_count(customer_id) = 0`
- `accepted_values(status) IN ('new','paid','cancelled','refunded')`
- `abs(gold_revenue - silver_revenue) / nullif(silver_revenue, 0) <= 0.001`
- `max(loaded_at) >= scheduled_run_time - interval '2 hours'`

### 2. Chọn baseline/anomaly formula

Với distribution hoặc volume rule, dùng công thức rõ:

| Pattern | Formula | Minimum history | Khi dùng |
| :--- | :--- | :--- | :--- |
| Z-score baseline | `abs(today_value - mean(window)) <= 3 * stddev(window)` | >= 14 observations | row count, amount distribution ổn định |
| Percentage drift | `abs(today_value - median(window)) / median(window) <= tolerance_pct` | >= 7 observations | data có outlier, median ổn hơn mean |
| Day-of-week baseline | compare với cùng weekday trong 4-8 tuần | >= 4 same-weekday observations | traffic có seasonality theo ngày |
| Fixed business threshold | explicit numeric threshold from owner | owner-approved | SLA, legal/compliance, hard business rule |

Nếu chưa đủ history:
- Start as WARN with profiling-only baseline.
- Promote to QUARANTINE/FAIL sau khi đủ minimum history và owner approval.

### 3. Layer-specific gate policy

| Layer | Blocking examples | Non-blocking examples | Required log |
| :--- | :--- | :--- | :--- |
| Bronze | corrupt file, unreadable schema, missing required audit metadata | late file, row count drift | source, run_id, file/offset, error |
| Silver | null/duplicate primary key, invalid FK, invalid type cast | rare invalid optional enum quarantined | rule_id, bad row count, quarantine table |
| Gold | certified metric reconciliation failure, mixed grain detected | refresh delay within accepted grace window | metric, expected, actual, tolerance |

### 4. Quarantine và audit log design

Mọi QUARANTINE rule phải có table/path:

| Quarantine target | Required columns |
| :--- | :--- |
| `[dataset]_quarantine` | `dq_rule_id`, `dq_failure_reason`, `dq_failed_at`, `des_pipeline_run_id`, source key, raw payload/reference |

Mọi rule, kể cả PASS, phải ghi vào audit log:

| Audit field | Meaning |
| :--- | :--- |
| `rule_id` | stable DQ rule ID |
| `dataset` | tested dataset |
| `run_id` | pipeline/test run |
| `status` | PASS/FAIL/QUARANTINE/WARN |
| `observed_value` | measured metric |
| `threshold_value` | expected limit |
| `evaluated_at` | timestamp |

Không log PII raw values trong audit log.

### 5. HALT bắt buộc — baseline và action review

Trình bày:

| Rule ID | Threshold formula | Baseline window/formula | Action | Owner | Residual risk |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận rules, chuyển sang soạn thảo.
- **[B] Sửa baseline**: Làm rõ công thức hoặc seasonality.
- **[A] Sửa action**: Điều chỉnh FAIL/QUARANTINE/WARN.
- **[O] Bổ sung owner/alert**: Không tiếp tục nếu rule Critical chưa có owner.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
