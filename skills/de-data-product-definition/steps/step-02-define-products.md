# Bước 2: Định Nghĩa Chi Tiết Từng Data Product

## Quy tắc
- Mỗi product phải có consumer, owner, và tiêu chí thành công có thể đo lường.
- HALT khi thiếu thông tin quan trọng.

## Hướng dẫn

### 1. Định nghĩa per-product spec

Với mỗi Phase 1 data product, điền đầy đủ:

**Consumer**: Ai dùng? (Tên vai trò, không phải "tất cả mọi người")
**Input**: Dataset đầu vào cụ thể (Gold table? Silver? API?)
**Output**: Schema, format, interface (ví dụ: "Power BI dataset có 5 measures")
**Owner**: Ai chịu trách nhiệm nếu product bị lỗi? (1 người cụ thể)
**SLA**: Thời gian làm mới + availability (ví dụ: "cập nhật hằng ngày lúc 7h, 99.5% uptime")
**Access Policy**: Ai được truy cập? (vai trò cụ thể, không phải "nội bộ")
**Tiêu chí thành công**: Làm sao biết product đang được dùng tốt?
  - Ví dụ: "50 analyst view mỗi tuần", "dashboard load < 5 giây", "không có complaint về số sai"

### 2. Kiểm tra tính nhất quán SLA

So sánh SLA của mỗi product với Hard SLA đã định nghĩa trong KPI catalog.
Nếu mâu thuẫn → **HALT** và yêu cầu giải quyết trước khi tiếp tục.

### 3. Đánh dấu dependency

Liệt kê các products phụ thuộc vào nhau (Product B cần Product A hoàn thành trước).
Dependency này sẽ ảnh hưởng thứ tự triển khai.

### 4. Menu tương tác

- **[C] Tiếp tục**: Xác nhận tất cả product spec, chuyển sang soạn thảo.
- **[F] Điền thiếu**: Bổ sung thông tin còn thiếu cho product cụ thể.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
