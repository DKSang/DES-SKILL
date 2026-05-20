# Định Nghĩa DQ Rules với Threshold Cụ Thể

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Với mỗi DQ rule, định nghĩa đầy đủ
- Threshold số cụ thể (không phải "check for nulls" — phải là "null_rate < 0.01")
- Dimension (Accuracy/Completeness/Timeliness/Validity/Uniqueness)
- Severity (FAIL/QUARANTINE/WARN)
- Baseline window cho anomaly detection (e.g., "30-day rolling average ±3σ")
- Tool implementation (dbt test / Soda / Great Expectations / custom)

### 2. Anomaly detection baseline
Với rules dựa trên distribution (không phải fixed threshold):
- Window size: bao nhiêu ngày?
- Alert khi nào: mean ±2σ? ±3σ?

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận rules, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
