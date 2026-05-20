# Soạn Thảo Contracts và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 12 completed nếu contract thiếu semver, owner, SLA, quality guarantees, breaking-change policy, hoặc test suite.
- HALT nếu contract-required dataset bị bỏ qua mà không có rationale.

## Hướng dẫn

### 1. Nạp template
Đọc: `12-data-contracts-template.md`, scope từ step-01, contract definitions từ step-02.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Contract inventory | dataset, producer, consumers, criticality |
| Schema contract | fields, types, nullable, enum, PII flag |
| Semantic contract | grain, metric formulas, business definitions |
| SLA/quality guarantees | freshness, availability, completeness, uniqueness |
| Semver policy | MAJOR/MINOR/PATCH examples |
| Change management | notice period, approval, deprecation path |
| Contract tests | schema/freshness/quality/semantic/compatibility tests |

### 3. Contract quality gate

| Gate | Pass condition |
| :--- | :--- |
| Scope coverage | Every required dataset has contract or documented exclusion |
| Ownership | Producer, consumer, owner, steward named |
| Testability | Every guarantee has a test or monitor |
| Semver | Breaking vs compatible changes classified |
| Notification | Notice period and sign-off path defined |
| Security | PII fields explicitly flagged |

Nếu gate fail, HALT và không update status completed.

### 4. Transformation handoff package

| Transformation handoff item | Required value |
| :--- | :--- |
| Contracted schemas |  |
| Required quality guarantees |  |
| Semantic rules to implement |  |
| Backward compatibility constraints |  |
| Contract tests to wire into CI/CD |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve `checklist_file` từ `customize.toml`.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.

### 6. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `12-data-contracts.md`.
- Update workflow status cho Phase 12 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-transformation-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[T] Bổ sung tests/policy**: Quay lại step-02.

HALT và chờ người dùng chọn.