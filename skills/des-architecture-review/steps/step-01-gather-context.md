# Bước 1: Thu Thập Context Và Chuẩn Bị Review

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại các checkpoint và chờ người dùng xác nhận.
- Không đưa ra findings ở bước này — chỉ thu thập context.

---

## 1. Nạp Artifact Đầu Vào

Tìm và nạp tài liệu kiến trúc từ các đường dẫn sau theo thứ tự ưu tiên:

1. `{project-root}/_des-output/planning-artifacts/07-architecture-design.md`
2. File do người dùng chỉ định trực tiếp

Nếu không tìm thấy, **HALT** và hỏi: "Vui lòng cung cấp đường dẫn đến Architecture Design Document cần review."

Cũng nạp (nếu có):
- ADR files: `{project-root}/_des-output/planning-artifacts/07b-*.md`
- Requirements: `{project-root}/_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`

---

## 2. Trích Xuất Thông Tin Nền

Từ artifact đã nạp, trích xuất và xác nhận:

| Thông tin | Giá trị (điền từ artifact) |
| :--- | :--- |
| Data Maturity Level | ? |
| Team size & skills | ? |
| Budget constraint | ? |
| P1 Hard SLAs | ? |
| One-way door decisions | ? (liệt kê tất cả) |
| Storage format | ? |
| Cloud platform | ? |

---

## 3. Xác Nhận Scope Review

Hỏi người dùng:

> "Tôi sẽ review architecture document này theo 3 lớp adversarial:
> - **Layer 1 — FDE Alignment Hunter**: Kiểm tra alignment với FDE fundamentals
> - **Layer 2 — Failure Mode Hunter**: Tìm failure modes và single points of failure
> - **Layer 3 — Implementation Auditor**: Đánh giá tính khả thi với team thực tế
>
> Bạn muốn:
> - **[A] Review toàn bộ** — cả 3 layers
> - **[1] Chỉ Layer 1** — FDE Alignment
> - **[2] Chỉ Layer 2** — Failure Modes
> - **[3] Chỉ Layer 3** — Implementation feasibility"

HALT và chờ người dùng chọn.

- On **[A]**: Lưu scope = "all", chuyển sang `./step-02-run-three-layers.md`.
- On **[1]**, **[2]**, hoặc **[3]**: Lưu scope = layer tương ứng, chuyển sang `./step-02-run-three-layers.md`.
