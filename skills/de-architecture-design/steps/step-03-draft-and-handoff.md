# Soạn Thảo ADR và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không ghi artifact là completed nếu còn ADR one-way-door chưa được xác nhận ở Step 2.
- HALT trước khi bàn giao nếu architecture thiếu ADR, thiếu rollback/exit strategy, hoặc thiếu coverage cho Six Undercurrents.

## Hướng dẫn

### 1. Nạp template và quyết định đã chốt
Đọc:
- `07-architecture-design-template.md`
- `07b-architecture-decision-record-template.md`
- Kết quả scoring và HALT approval từ `step-02-decide-pattern.md`

### 2. Soạn `07-architecture-design.md`

Artifact chính phải có đủ:

| Section | Nội dung bắt buộc | Không chấp nhận |
| :--- | :--- | :--- |
| Business context | SLA, data volume, maturity level, team constraints | Tool list không gắn business need |
| Architecture summary | Storage, compute, ingestion, transformation, serving, orchestration | Chỉ vẽ diagram không có rationale |
| Data flow | Source -> ingestion -> Bronze -> Silver -> Gold -> serving | Bỏ qua storage hoặc serving |
| Compute-storage separation | Storage location, compute engine, network/region, access method | Credentials hoặc path mơ hồ |
| Six Undercurrents | Security, Data Management, DataOps, Architecture, Orchestration, Software Engineering | Chỉ ghi "addressed" không có decision/owner |
| Risk register | Risk, impact, mitigation, owner | Risk không có owner |

### 3. Soạn `07b-architecture-decision-records.md`

Tạo 1 ADR cho mỗi major decision:

| ADR required? | Decision area | Minimum ADR fields |
| :--- | :--- | :--- |
| Có | Storage platform/format | classification, alternatives, TCO, rollback/exit strategy |
| Có | Compute/transformation engine | team-fit rationale, rejected options, migration cost |
| Có | Deployment path | local-first/cloud-first/hybrid rationale, compliance impact |
| Có | Serving pattern | consumer SLA, access pattern, security implication |
| Có nếu đã chọn | Orchestration/catalog/DQ tool | operational owner, reversibility, integration risk |

Mỗi ADR phải có:
- Status: Proposed/Approved/Rejected
- Reversibility: Reversible / Partially reversible / Irreversible
- Alternatives considered: tối thiểu 2 nếu là irreversible
- Consequences: positive và negative
- Rollback/exit strategy: effort estimate hoặc lý do không thể rollback

### 4. Artifact quality gate

Trước khi ghi file, tự kiểm tra:

| Gate | Pass condition |
| :--- | :--- |
| One-way-door approval | Mọi irreversible ADR có approval hoặc vẫn để Proposed và không mark phase completed |
| SLA alignment | Mọi hard SLA có architecture decision hỗ trợ |
| FDE lifecycle coverage | Storage, ingestion, transformation, serving đều có vai trò rõ |
| Undercurrent coverage | 6 undercurrents đều có decision + owner |
| Handoff readiness | Next skill có đủ storage pattern, destination convention, freshness SLA, source access constraints |

Nếu gate fail, ghi danh sách gap và HALT thay vì cập nhật status completed.

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
- Lưu `07-architecture-design.md`
- Lưu `07b-architecture-decision-records.md`
- Update workflow status cho Phase 07 là completed
- Ghi rõ artifact paths và decisions quan trọng nhất

### 7. Menu bàn giao

Trình bày handoff package cho `de-ingestion-design`:

| Handoff item | Value |
| :--- | :--- |
| Storage destination pattern |  |
| Bronze landing convention |  |
| Freshness/SLA constraints |  |
| Source access constraints |  |
| Irreversible assumptions to preserve |  |

Menu:
- **[C] Hoàn thành**: Gợi ý `de-ingestion-design`.
- **[R] Soạn lại**: Quay lại step-01 hoặc step-02 tùy gap.
- **[A] Bổ sung ADR**: Thêm ADR còn thiếu trước khi bàn giao.

HALT và chờ người dùng chọn.
