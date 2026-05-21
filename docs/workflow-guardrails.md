# Các Chốt Chặn Quy trình & Kịch bản Kiểm thử (Workflow Guardrails & Scenario Tests)

Tài liệu này mô tả các kịch bản kiểm thử (scenario tests) và các chốt chặn (guardrails) mà Batch F đưa vào nhằm ngăn ngừa lỗi lùi (workflow regressions).

Các kịch bản cốt lõi (các test cần ánh xạ theo các kịch bản này):

- "code now, skip docs" (viết code ngay, bỏ qua tài liệu): Router/build sẽ dừng lại (HALT) trừ khi có một implementation story được phê duyệt hoặc xác nhận ghi đè rõ ràng (explicit override).
- Thiếu đánh giá nguồn dữ liệu (Missing source assessment): Quy trình ingestion/architecture sẽ tự động chuyển hướng quay trở lại skill đánh giá nguồn dữ liệu (`des-data-source-assessment`).
- Xung đột chỉ số (Metric conflict): Skill xác định KPI/product sẽ dừng lại khi có các định nghĩa chỉ số mâu thuẫn nhau.
- Test bị lỗi (Tests fail): Skill verify/build chặn việc đánh dấu hoàn thành và đưa ra bằng chứng test bị lỗi.
- Tồn tại blocker khi review (Review blocker exists): Skill verify chặn việc phát hành (release) trừ khi blocker được chấp thuận rõ ràng.
- Phát hiện thiết kế lệch (Artifact drift found): Retrospective tạo ra các task theo dõi và ghi nhận sự sai lệch giữa thiết kế và thực tế code.

Tên test khuyến nghị và kỳ vọng:

- `workflow-guardrails/code-now-skip-docs.test.js` — kiểm tra xem bộ định tuyến (router) hoặc build step có từ chối chạy khi thiếu bằng chứng story hay không.
- `workflow-guardrails/missing-source.test.js` — kiểm tra xem ingestion có chuyển hướng ngược lại source assessment hay không.
- `workflow-guardrails/metric-conflict.test.js` — kiểm tra xem KPI có dừng lại và phát ra bằng chứng xung đột hay không.
- `workflow-guardrails/tests-fail.test.js` — kiểm tra xem verification thất bại có chặn Definition of Done (DoD) hay không.

Hợp đồng kiểm thử tối thiểu (những gì các bài kiểm thử xác nhận):

- Sự hiện diện của các cụm từ chốt chặn trong tài liệu hướng dẫn skill: ví dụ: "must have approved implementation story", "readiness gates", "do not mark complete until evidence".
- Các skill có tham chiếu đến file checklist/template: `checklists/implementation-readiness-checklist.md`, `checklists/definition-of-done-checklist.md`.
- Router tôn trọng ngữ nghĩa của `mode` (`quick`, `standard`, `enterprise`) và liệt kê các artifact còn thiếu khi dừng lại.

Lưu ý khi triển khai:

- Đây là các kiểm thử hành vi/unit test của tài liệu hướng dẫn skill và chỉ dẫn của router (không phải kiểm thử tích hợp đầy đủ). Triển khai chúng dưới thư mục `test/workflow-guardrails.test.js` hoặc phân chia theo từng kịch bản.
- Mỗi bài kiểm thử phải lỗi (fail) nếu một cụm từ chốt chặn quan trọng biến mất khỏi văn bản hướng dẫn của skill — điều này giữ cho tài liệu và hành vi của agent luôn vững chắc trước các áp lực thay đổi.
