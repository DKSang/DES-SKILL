# Thiết Kế Testing Strategy

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: DQ rules (14), Data contracts (12), Transformation design (13).

### 2. Phân loại test types
- Unit tests: từng transformation logic
- Integration tests: Bronze → Silver → Gold pipeline
- Contract tests: schema và SLA compliance
- DQ tests: từng rule trong DQ catalog
- Regression tests: known past failures

### 3. Test coverage targets
- FAIL-severity DQ rules: 100% automated
- Breaking-change contract violations: 100% caught in CI
- Critical Gold table logic: > 90% coverage

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận testing strategy, chuyển sang CI/CD design.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-design-cicd.md`.
