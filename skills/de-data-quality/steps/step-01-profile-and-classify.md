# Profile và Phân Loại DQ Rules

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Silver design (10), Gold design (11).

### 2. Profile từng dataset
- Null rates, uniqueness, value ranges, distributions
- Known quality issues từ source assessment

### 3. Phân loại mỗi rule theo FDE 5 Dimensions
Accuracy / Completeness / Timeliness / Validity / Uniqueness

### 4. Phân loại severity (dùng Decision Matrix trong SKILL.md)
FAIL (pipeline stops) / QUARANTINE (move to quarantine table) / WARN (alert only)

### 5. HALT: Xác nhận FAIL-severity rules với business owner
FAIL rules phải được business owner approve — không phải data engineer quyết định.

- **[C] Đã xác nhận**: Chuyển sang định nghĩa thresholds.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-define-rules.md`.
