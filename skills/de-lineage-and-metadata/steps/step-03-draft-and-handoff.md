# Soạn Thảo Lineage & Metadata và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 18 completed nếu PII/certified metric thiếu column-level lineage hoặc managed dataset thiếu steward.
- HALT nếu catalog metadata không đủ để governance/security thiết kế access và retention.

## Hướng dẫn

### 1. Nạp template
Đọc: `18-lineage-and-metadata-template.md`, lineage map từ step-01, catalog decisions từ step-02.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Lineage graph | dataset-level DAG từ source đến serving |
| Column lineage | PII columns, certified metrics, transform rule IDs |
| Tooling integration | OpenLineage/dbt/DataHub/Fabric/Unity setup |
| Catalog entries | dataset and column metadata, owners, classification |
| Stewardship | business steward, technical steward, escalation |
| Schema registry | registry, compatibility mode, breaking-change owner |
| Change history | schema/metadata change log policy |

### 3. Lineage/metadata gate

| Gate | Pass condition |
| :--- | :--- |
| PII lineage | Every PII column traceable source -> serving |
| Metric lineage | Every certified metric traceable formula -> Gold -> source |
| Catalog coverage | Every Silver/Gold/Serving dataset has catalog entry |
| Stewardship | Every managed dataset has named stewards |
| Automation | Production lineage has automated emit/import path where possible |

Nếu gate fail, HALT và không update status completed.

### 4. Governance handoff package

| Governance handoff item | Required value |
| :--- | :--- |
| PII/regulated columns |  |
| Dataset classifications |  |
| Stewards and owners |  |
| Lineage evidence links |  |
| Schema registry compatibility modes |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 6. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `18-lineage-and-metadata.md`.
- Update workflow status cho Phase 18 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-governance-and-security`.
- **[R] Soạn lại**: Quay lại step-01.
- **[M] Bổ sung metadata/lineage**: Quay lại step-02 hoặc step-01 theo gap.

HALT và chờ người dùng chọn.
