# Bước 1: Thu Thập Contract và Context

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại các checkpoint và chờ người dùng xác nhận.
- Không đưa ra findings ở bước này — chỉ thu thập context.

---

## 1. Nạp Data Contract Document

Tìm và nạp contract từ:
1. `{project-root}/_des-output/planning-artifacts/12-data-contracts.md`
2. File do người dùng chỉ định

Nếu không tìm thấy, **HALT** và hỏi: "Vui lòng cung cấp đường dẫn đến Data Contract cần review."

Cũng nạp (nếu có):
- `{project-root}/_des-output/planning-artifacts/05-data-source-assessment.md` — cross-check SLAs
- `{project-root}/_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` — cross-check freshness

---

## 2. Trích Xuất Thông Tin Contract

Từ contract document, trích xuất:

| Thông tin | Giá trị |
| :--- | :--- |
| Contract name / ID | ? |
| Producer (team/system) | ? |
| Consumer(s) | ? |
| Schema version | ? |
| SLA Freshness | ? |
| SLA Uptime | ? |
| Review/Expiry date | ? |
| Số columns trong schema | ? |
| Có PII columns không? | ? |
| Schema evolution policy có không? | ? |

---

## 3. Xác Nhận Scope

Hỏi người dùng:

> "Tôi sẽ review data contract theo 3 lớp adversarial:
> - **Layer 1 — Schema Auditor**: Kiểm tra schema completeness, PII, nullable, evolution plan
> - **Layer 2 — SLA Challenger**: Kiểm tra SLA có khả thi với infrastructure thực tế không
> - **Layer 3 — Consumer Safety Hunter**: Tìm điểm contract không bảo vệ consumer
>
> Bạn muốn:
> - **[A] Review toàn bộ** — cả 3 layers
> - **[S] Chỉ Schema** — Layer 1
> - **[L] Chỉ SLA** — Layer 2
> - **[C] Chỉ Consumer Safety** — Layer 3"

HALT và chờ người dùng chọn.

- On any choice: Lưu scope và chuyển sang `./step-02-run-three-layers.md`.
