# Phân Loại Ingestion Mode Cho Từng Nguồn

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không chọn streaming nếu business freshness SLA không yêu cầu near-real-time.
- HALT bắt buộc nếu source thiếu thông tin write pattern, log retention, hoặc watermark nhưng vẫn được đề xuất CDC/incremental.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Architecture design (07), KPI/SLA catalog (03), Data product definitions (04).

### 2. Phân loại bounded vs unbounded theo FDE ingestion

FDE phân biệt ingestion theo tính chất dữ liệu và freshness. Với mỗi nguồn:

| Source | Data shape | Write pattern | Freshness SLA | Delete/update cần bắt? | Classification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (source) | Bounded file / Unbounded events / Mutable database | Insert-only / CRUD / Append log / API snapshot | P1/P2/P3 | Có/Không | Batch / CDC / Streaming / File landing |

Quy tắc:
- **Bounded data**: file, daily snapshot, export có điểm kết thúc rõ ràng.
- **Unbounded data**: event stream, clickstream, sensor stream, queue topic.
- **Mutable database**: cần xử lý update/delete; không được append đơn giản nếu KPI cần trạng thái hiện tại.

### 3. Dùng decision matrix chọn ingestion mode

| Điều kiện | Recommended mode | Required metadata | Anti-pattern cần tránh |
| :--- | :--- | :--- | :--- |
| SLA > 1 giờ, insert-only | Batch incremental | watermark column, batch_id, source_count | Streaming chỉ vì "hiện đại" |
| SLA > 1 giờ, CRUD có update/delete | Log-based CDC | log offset/LSN, operation type, commit timestamp | Watermark `updated_at` nếu deletes không hiện ra |
| SLA < 5 phút, event source | Streaming | event_time, partition/offset, schema version | Streaming không có late-arrival policy |
| File drop/SFTP/S3 | File landing + manifest | file_name, checksum, row_count, arrival_time | Xử lý file không có manifest/checksum |
| One-time historical load | Full backfill | source range, extraction snapshot time, run_id | Load thủ công không idempotent |

### 4. Kiểm tra điều kiện tối thiểu trước khi chốt mode

| Mode | Điều kiện bắt buộc | HALT nếu thiếu |
| :--- | :--- | :--- |
| CDC | Log retention >= pipeline downtime tolerance + replay window; có quyền đọc log/replica | Không biết log retention hoặc không có CDC access |
| Incremental batch | Watermark monotonic, timezone rõ, late update policy có chủ sở hữu | Watermark có thể null/đi lùi hoặc không bắt deletes |
| Streaming | Ordering key, event-time policy, late-arrival tolerance, DLQ topic/path | SLA không đủ mạnh để biện minh streaming ops |
| File landing | Manifest/checksum, naming convention, duplicate file policy | Không có cách phân biệt resend với file mới |

### 5. Menu tương tác

Trình bày bảng:

| Source | Recommended mode | Rationale | Missing input | Risk if wrong |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận phân loại, chuyển sang thiết kế chi tiết.
- **[E] Điều chỉnh**: Thay đổi mode cho nguồn cụ thể.
- **[B] Bổ sung input**: Quay lại source owner để lấy write pattern/log retention/watermark.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-design-patterns.md`.
- On **[E]** hoặc **[B]**: Cập nhật bảng rồi HALT lại.
