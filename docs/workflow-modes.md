# Các Chế độ Quy trình DES-SKILL (DES-SKILL Workflow Modes)

DES-SKILL hỗ trợ bốn chế độ quy trình thích ứng. Hãy sử dụng chế độ nhẹ nhàng nhất có thể nhưng vẫn đảm bảo tính truy vết của thiết kế (traceability), chất lượng dữ liệu (data quality), bảo mật (security), và bằng chứng bàn giao (delivery evidence).

## Tóm tắt Chế độ (Mode Summary)

| Mode | Use When | Required Path |
| --- | --- | --- |
| Quick Fix | Lỗi nhỏ, sửa tài liệu, thay đổi test/config hẹp, hoặc dọn dẹp repo ít rủi ro | `de-build-from-artifacts` -> `de-verify-delivery`; thêm `de-review-implementation` khi có thay đổi hành vi code |
| Standard Feature | Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model, hoặc cập nhật contract/DQ | `de-brainstorm-change` nếu phạm vi chưa rõ ràng -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | Sản phẩm dữ liệu mới, bàn giao liên team, dữ liệu có kiểm soát, rủi ro tuân thủ, hoặc quyết định kiến trúc khó đảo ngược | Hoàn thành tất cả các artifact bắt buộc từ phase 01-22, sau đó chạy luồng hỗ trợ (support loop) |
| Correct Course | Các artifact đã duyệt xung đột với thực tế repo, phát hiện lỗi khi review/verify, sự cố thực tế, hoặc ràng buộc mới | `de-brainstorm-change` -> cập nhật phase skill bị ảnh hưởng -> `de-implementation-planning` |

## Quy tắc Chọn Chế độ (Mode Selection Rules)

### Quick Fix

Chỉ chọn Quick Fix khi tất cả các điều kiện sau đây đều thỏa mãn:

- Thay đổi có phạm vi hẹp và dễ dàng khôi phục (reversible).
- Không làm thay đổi chỉ số nghiệp vụ (business metric), source grain, hợp đồng dữ liệu (data contract), chính sách PII, hoặc quyết định kiến trúc.
- Các artifact hiện tại đã giải thích đầy đủ hành vi đang thay đổi, hoặc người dùng xác nhận ghi đè rõ ràng (explicit override).
- Việc xác thực có thể hoàn thành bằng các lệnh local hoặc kiểm tra thủ công artifact.

**DỪNG LẠI (HALT)** và chuyển hướng sang Standard Feature nếu thay đổi chạm tới data contract, ngưỡng chất lượng DQ, lineage, bảo mật, logic điều phối (orchestration semantics), hoặc các tập dữ liệu cung cấp trực tiếp cho người dùng (consumer-facing datasets).

### Standard Feature

Chọn Standard Feature khi công việc có một mục tiêu bàn giao cụ thể nhưng cần lập kế hoạch rõ ràng trước khi viết code. Đây là chế độ mặc định cho các công việc triển khai thông thường trong DES.

Các gate bắt buộc:

- Có source artifact hoặc change brief.
- Tiêu chí nghiệm thu (acceptance criteria) có thể kiểm thử được.
- Xác định được các file/module có khả năng bị thay đổi.
- Biết rõ các câu lệnh xác thực (validation commands) hoặc ghi nhận lại các trở ngại (blockers).

### Enterprise Data Product

Chọn Enterprise Data Product khi công việc tạo mới hoặc thay đổi lớn một sản phẩm dữ liệu production, lớp metric dùng chung, tập dữ liệu có kiểm soát, hợp đồng dữ liệu bên ngoài, hoặc pipeline liên quan đến nhiều team.

Các gate bắt buộc:

- Các artifact thượng nguồn đầy đủ cho phase mục tiêu.
- Các quyết định khó đảo ngược (irreversible decisions) có sự phê duyệt rõ ràng từ người dùng.
- Không bỏ qua các ảnh hưởng liên quan đến bảo mật (security), quản trị (governance), lineage, DQ, khả năng quan sát (observability), và CI/CD.

### Correct Course

Chọn Correct Course khi bằng chứng thực thi cho thấy kế hoạch hiện tại bị sai hoặc đã cũ.

Các trường hợp kích hoạt (Triggers):

- Thiết kế trong artifact xung đột với thực tế code.
- Kết quả review hoặc verify phát hiện ra các yêu cầu bị thiếu sót.
- Hành vi của hệ thống nguồn thay đổi.
- Xuất hiện lỗi chặn phát hành (release blocker) làm vô hiệu hóa kế hoạch hiện tại.
- Người dùng thay đổi phạm vi nghiệp vụ sau khi đã lập kế hoạch.

Correct Course sẽ tạo mới hoặc cập nhật change brief trước tiên, sau đó chuyển hướng sang phase skill bị ảnh hưởng hoặc lập kế hoạch triển khai.

## Đầu ra của Router (Router Output)

Bộ định tuyến (router) phải luôn báo cáo:

- Chế độ được chọn (Selected mode).
- Lý do tại sao chế độ đó phù hợp.
- Các artifact thượng nguồn bắt buộc (Required upstream artifacts).
- Các artifact còn thiếu hoặc các trở ngại (blockers).
- Skill khuyến nghị tiếp theo.
- Có yêu cầu xác nhận ghi đè rõ ràng hay không.
