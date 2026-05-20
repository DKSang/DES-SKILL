# Data Source Assessment

Template này được dùng trong Phase 05 để đánh giá các hệ thống nguồn trước khi thiết kế ingestion. Người dùng tự điền vào phần placeholder; xóa các dòng ví dụ khi hoàn thành.

> **Nguyên tắc FDE**: Nguồn dữ liệu CRUD có thể xóa records — Full Snapshot sẽ bỏ qua lịch sử xóa. Khi lịch sử thay đổi quan trọng, phải dùng CDC hoặc Logical Delete Flag.

---

## 1. Kiểm Kê Nguồn Dữ Liệu

### 1a. Phân loại Write Pattern (FDE)

Phân loại trước khi chọn ingestion mode:

| Write Pattern | Định nghĩa | Hệ quả đối với ingestion | Ví dụ |
| :--- | :--- | :--- | :--- |
| **CRUD** | Create + Update + Delete xảy ra | Full Snapshot bỏ qua deletes; CDC an toàn hơn | OLTP databases (PostgreSQL, MySQL, SQL Server) |
| **Insert-Only (Append-Only)** | Chỉ thêm rows mới, không xóa | Watermark incremental an toàn | Event logs, audit trails, IoT sensor readings |
| **Event Stream** | Mỗi sự kiện là 1 immutable record | Streaming ingestion phù hợp nhất | Kafka, Kinesis, Pub/Sub, EventHub |
| **File Landing** | Files được drop theo lịch | File-based batch, trigger on file arrival | SFTP exports, S3 drops, Azure Blob |
| **API Pull** | Query endpoint theo yêu cầu | Pagination + rate limit phải xử lý | REST APIs, GraphQL, SaaS connectors |

### 1b. Source Inventory

| Tên nguồn | Tech Stack | Owner & Contact | Write Pattern | Volume/ngày (GB) | Peak TPS | Phương thức Access | PII? | Ingestion Mode đề xuất |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *Ví dụ: POS Database* | *PostgreSQL 14* | *billing-team@co* | *CRUD* | *12 GB* | *150 TPS* | *Read-only replica JDBC* | *Có* | *Log-based CDC* |
| *Ví dụ: Event Stream* | *Kafka 3.x* | *platform-team@co* | *Event Stream* | *5 GB* | *2000 TPS* | *Kafka consumer* | *Không* | *Streaming (micro-batch)* |
| | | | | | | | | |

## 2. Đặc Điểm Kỹ Thuật và Giới Hạn

### 2a. Ba Loại Thời Gian (FDE Time Types)

Với mỗi nguồn, xác định rõ loại thời gian nào có sẵn — đây ảnh hưởng trực tiếp đến watermark và late-arrival handling:

| Loại thời gian | Định nghĩa | Cột tiêu biểu |
| :--- | :--- | :--- |
| **Event Time** | Thời điểm sự kiện xảy ra trong thế giới thực | `order_placed_at`, `sensor_reading_at` |
| **Database Log Time** | Thời điểm record được ghi vào DB transaction log | `created_at`, `updated_at` (server timestamp) |
| **Ingestion Time** | Thời điểm pipeline đọc được record | `des_ingestion_timestamp` (thêm khi landing) |

> **Quan trọng**: Watermark nên dùng **Database Log Time** (không phải Event Time) nếu nguồn là CRUD — Event Time có thể đến trễ (late arrival). Chỉ dùng Event Time khi nguồn là Insert-Only hoặc Event Stream.

### 2b. Cơ sở dữ liệu (CRUD / CDC)
- **Write Mode chi tiết**: (Records bị xóa lý như thế nào? Physical DELETE hay logical `is_deleted` flag?)
- **Transaction Log Retention**: (binlog/WAL retention period. Phải >= 24h nếu dùng Log-based CDC. Ghi rõ: x giờ.)
- **Replication Lag**: (Replica sync delay? Có maintenance window không?)

### 2c. API / Event Stream
- **Pagination Method**: (Keyset / Offset / Cursor / Seek)
- **Rate Limits**: (X requests/giờ, concurrency limit)
- **Payload Format**: (JSON / Avro / Protobuf / Parquet)
- **Schema Registry**: (Có Confluent Schema Registry / Glue Schema Registry không?)

---

## 3. Thỏa Thuận SLA và Schema với Team Nguồn

- **Chính sách thông báo schema change**: (Ví dụ: Source team phải thông báo `#data-ops` 5 business days trước DDL migration)
- **Uptime SLA của nguồn**: (Ví dụ: DB replica lag đảm bảo < 5 phút; API uptime 99.9%)
- **Schema Drift Action**: (Nếu nguồn thêm cột mới: pipeline tự map hay fail fast? Ai quyết định?)

---

## 4. Ánh Xạ Nguồn → KPI và Đề Xuất Ingestion Mode

| KPI / Target Downstream | Bảng & Cột Nguồn | Tần suất cần | Ingestion Mode đề xuất | Lý do | Gap / Vấn đề |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Doanh thu hằng ngày* | *sales_db.orders.total_amount* | *Hằng giờ* | *Log-based CDC* | *Có DELETE; cần lịch sử chính xác* | *Xác nhận binlog retention* |
| | | | | | |

---

## 5. Đánh Giá Rủi Ro và Kế Hoạch Giảm Nhẹ

- **Rủi ro mạng**: (Ví dụ: Source DB sau private subnet, cần bastion host hoặc VPN)
- **Rủi ro chất lượng**: (Ví dụ: Source DB không có FK constraints, cho phép free-form text trong trường email)
- **Nguồn có cờ đỏ 🚩**: Liệt kê các risk chưa được giải quyết với action cụ thể và deadline
- **Kế hoạch giảm rủi ro**: (Ví dụ: áp dụng regex checks ở landing zone, schedule off-peak)

