# Giao diện dòng lệnh DES-SKILL CLI — Trợ giúp (Help)

Tài liệu này liệt kê các cụm lệnh dòng lệnh dành cho người dùng và ví dụ ngắn cho giao diện DES-SKILL CLI (hướng dẫn tài liệu; `bin/des-skill.js` cung cấp hành vi runtime).

Cách sử dụng (ví dụ):

- `des-skill start [--mode quick|standard|enterprise] [--story <path>]`
  - Bắt đầu một tiến trình chạy quy trình mới. `--mode` chọn chiều sâu của bộ định tuyến.

- `des-skill resume <story>`
  - Tiếp tục một câu chuyện triển khai (implementation story) đang bị tạm dừng.

- `des-skill check-readiness <story>`
  - Chạy các readiness gates và xuất báo cáo độ sẵn sàng.

- `des-skill quick-dev --brief "<short change brief>"`
  - Tạo một implementation story tối giản cho chế độ Quick Fix.

- `des-skill create-implementation-story --plan <plan.md> --out <path>`
  - Chuyển đổi kế hoạch triển khai (implementation plan) thành một gói tài liệu story thực thi.

- `des-skill build-from-artifacts --story <implementation-story.md>`
  - Thực hiện các bước build dưới sự hướng dẫn của implementation story.

- `des-skill review-implementation --story <implementation-story.md>`
  - Chạy review phân tầng (layered review) và xuất báo cáo ưu tiên phát hiện lỗi.

- `des-skill verify-delivery --story <implementation-story.md>`
  - Chạy các lệnh xác thực và thu thập bằng chứng cho Definition of Done (DoD).

- `des-skill retro --story <implementation-story.md>`
  - Tạo các retrospective artifacts và các việc cần theo dõi (follow-ups).

- `des-skill correct-course --story <implementation-story.md>`
  - Tạo các hạng mục sửa đổi trong phạm vi được kiểm soát khi artifact xung đột với thực tế code.

- `des-skill --help`
  - Hiển thị văn bản trợ giúp này.

Ví dụ:

`des-skill start --mode quick --story _des-output/implementation-artifacts/impl-123.md`

`des-skill check-readiness _des-output/implementation-artifacts/impl-123.md`

Lưu ý:

- Giao diện CLI được thiết kế đơn giản: đây là ánh xạ thân thiện với tài liệu của các cụm từ định tuyến sang hành động quy trình. Triển khai thực tế có thể là các lệnh in ra các bước khuyến nghị tiếp theo.
- Để tự động hóa hoàn toàn, hãy triển khai hành vi runtime trong `bin/des-skill.js` và đảm bảo bộ định tuyến (router) tuân thủ quy tắc dừng (HALT) của `--mode`.
