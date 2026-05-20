# Profile và Phân Loại DQ Rules

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi dataset phải được đánh giá theo FDE quality dimensions ở đúng layer Bronze/Silver/Gold.
- HALT bắt buộc khi FAIL-severity rule ảnh hưởng business output vì business owner phải xác nhận tolerance, không phải data engineer tự quyết.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Bronze design (09), Silver design (10), Gold design (11), Transformation design (13), SLA/KPI catalog (03).

### 2. Profile từng dataset theo layer

| Dataset | Layer | Row count baseline | Null hot spots | Duplicate keys | Time range | Known source issue |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Không chỉ ghi "check nulls". Ghi cột nào, tỉ lệ hiện tại, và tác động tới downstream.

### 3. Áp dụng quality dimensions theo layer

FDE nhấn mạnh quality phải gắn với lifecycle. Dùng trọng tâm khác nhau theo layer:

| Layer | Dimension ưu tiên | Mục tiêu | Rule ví dụ | Default action |
| :--- | :--- | :--- | :--- | :--- |
| Bronze | Timeliness, Validity, Completeness | Bảo toàn raw + phát hiện ingest/source issue | file arrived by SLA, schema version recognized, raw payload not empty | WARN/QUARANTINE |
| Silver | Completeness, Uniqueness, Validity, Accuracy | Chuẩn hóa entity/event đáng tin cậy | primary key not null, no duplicate business key, valid enum/timezone | FAIL/QUARANTINE |
| Gold | Accuracy, Consistency, Timeliness | Bảo vệ KPI và consumer trust | metric reconciliation, fact totals match Silver, refresh within SLA | FAIL/WARN |

Dimensions cần xét:
- Completeness: required field coverage.
- Uniqueness: key duplication.
- Accuracy: value matches business reality or reconciled source.
- Validity: type, format, enum, range.
- Timeliness: freshness and latency against SLA.
- Consistency: cross-table/cross-layer agreement.

### 4. Severity decision matrix

| Impact | Example | Severity | Failure action |
| :--- | :--- | :--- | :--- |
| Làm sai primary key, FK, grain, hoặc certified metric | duplicate order_id in Silver, Gold revenue mismatch > tolerance | Critical | FAIL |
| Bad rows có thể tách riêng mà không làm hỏng clean data | invalid email, bad enum, parse error | High | QUARANTINE |
| Freshness/drift cần theo dõi nhưng không làm sai dữ liệu đã load | row count thấp hơn baseline, late file | Medium | WARN |
| Exploratory/non-production dataset | profiling-only finding | Low | WARN/log only |

Quy tắc: nếu downstream user sẽ ra quyết định sai vì rule fail, không được chọn WARN.

### 5. Lập candidate rule catalog

| Rule ID | Dataset | Layer | Dimension | Rule statement | Candidate threshold | Severity | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DQ-001 |  |  | Completeness |  |  |  |  |

### 6. HALT: xác nhận FAIL-severity rules với business owner

Trình bày riêng các rule Critical/FAIL:

| Rule ID | Business impact | Proposed threshold | Why pipeline must stop | Owner approval needed |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Đã xác nhận**: Chuyển sang định nghĩa thresholds chi tiết.
- **[T] Điều chỉnh tolerance**: Sửa threshold hoặc severity.
- **[Q] Chuyển quarantine**: Nếu business chấp nhận load clean rows và tách bad rows.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-define-rules.md`.
