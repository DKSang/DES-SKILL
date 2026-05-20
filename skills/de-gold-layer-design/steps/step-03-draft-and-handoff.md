# Soạn Thảo Gold Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 11 completed nếu còn fact table chưa khai báo grain, metric chưa có owner, hoặc conformed dimension conflict chưa xử lý.
- HALT nếu Gold artifact có mixed-grain fact hoặc non-additive metric đặt sai ở fact table.

## Hướng dẫn

### 1. Nạp template và decisions đã chốt
Đọc:
- `11-gold-layer-design-template.md`
- Modeling pattern decision từ step-01
- Fact/dimension design từ step-02
- KPI catalog và business questions để traceability

### 2. Soạn artifact theo Gold model

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Modeling pattern | Kimball/Inmon/OBT/etc., rationale, tradeoffs |
| Gold table inventory | table, type, grain, source Silver tables, consumer, SLA |
| Fact tables | grain statement, additive measures, FK dimensions, orphan handling |
| Dimension tables | business definition, natural key, surrogate key, SCD type, owner |
| Certified metrics | formula, grain, owner, source table, filter conditions |
| Traceability | every table/metric maps to business question or data product |
| Security/serving notes | PII exclusion, RLS/RBAC assumptions, consumer access mode |

### 3. Gold quality gate

Kiểm tra:

| Gate | Pass condition |
| :--- | :--- |
| Grain | Every fact has one explicit business grain |
| Measures | Fact measures are additive or decomposed into numerator/denominator |
| Dimensions | Shared dimensions are conformed with one owner |
| Keys | Fact FKs use surrogate keys; orphan policy uses sentinel key |
| Metrics | Certified metrics have formula + owner + business question |
| Consumer fit | Gold model supports declared query pattern and SLA |

Nếu gate fail, HALT và không update status completed.

### 4. Contract handoff package

Chuẩn bị thông tin cho `de-data-contracts`:

| Contract handoff item | Required value |
| :--- | :--- |
| Critical Gold datasets |  |
| Dataset owners |  |
| Consumer-facing columns/metrics |  |
| Grain and SLA per dataset |  |
| Breaking-change sensitive fields |  |
| Security/RLS assumptions |  |

### 5. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `11-gold-layer-design.md`
- Update workflow status cho Phase 11 là completed
- Ghi rõ any non-blocking risks hoặc follow-up questions

### 6. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `de-data-contracts`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Sửa grain/metric/dimension**: Quay lại step-02.

HALT và chờ người dùng chọn.
