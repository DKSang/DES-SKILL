# Step 03 - Write Verification Report

Write `{output_file}`.

Required structure:

- Verification scope.
- Commands run and evidence.
- Acceptance criteria status.
- Review findings status.
- Risks, blockers, and skipped checks.
- Completion claim: supported, blocked, or partial.
- Next workflow.

If any blocker remains, the report must say completion is blocked.

## Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.
