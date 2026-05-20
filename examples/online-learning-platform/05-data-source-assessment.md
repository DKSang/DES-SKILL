# 05 — Data Source Assessment
# Online Learning Platform

**Skill sử dụng**: `de-data-source-assessment`
**Input từ**: `03-requirements-and-kpis.md`

---

## 1. Kiểm Kê Nguồn Dữ Liệu

### 1a. Phân loại Write Pattern (FDE)

| Write Pattern | Định nghĩa | Hệ quả ingestion |
| :--- | :--- | :--- |
| **CRUD** | Create + Update + Delete | Full Snapshot bỏ qua deletes; CDC an toàn hơn |
| **Insert-Only** | Chỉ append, không xóa | Watermark incremental an toàn |
| **Event Stream** | Immutable events | Streaming ingestion |
| **API Pull** | Query endpoint | Pagination + rate limit |

### 1b. Source Inventory

| Tên nguồn | Tech Stack | Owner | Write Pattern | Volume/ngày | Peak TPS | Access | PII? | Ingestion Mode đề xuất |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LMS Database | PostgreSQL 14 | lms-team | **CRUD** (có UPDATE enrollment status, DELETE khi refund) | 2 GB | 80 TPS | Read-only replica JDBC | **Có** (email, name) | **Log-based CDC** |
| Learning Event Stream | Kafka 3.x | platform-team | **Event Stream** (immutable) | 8 GB | 1,500 TPS | Kafka consumer group | Không (chỉ student_id) | **Streaming (micro-batch)** |
| Payment Database | MySQL 8 | finance-team | **CRUD** (UPDATE transaction status) | 500 MB | 20 TPS | Read-only replica JDBC | **Có** (payment info) | **Log-based CDC** |
| Udemy API | REST API | external | **API Pull** | ~50K records | N/A | REST API + API Key | Có (email) | **Batch incremental daily** |
| Coursera API | REST API | external | **API Pull** | ~30K records | N/A | REST API + OAuth2 | Có (email) | **Batch incremental daily** |
| Skillshare API | REST API | external | **API Pull** | ~20K records | N/A | REST API + API Key | Có (email) | **Batch incremental daily** |

---

## 2. Đặc Điểm Kỹ Thuật

### 2a. Ba Loại Thời Gian (FDE Time Types)

| Nguồn | Event Time | Database Log Time | Ingestion Time | Watermark nên dùng |
| :--- | :--- | :--- | :--- | :--- |
| LMS Database | `enrolled_at` (user action time) | `updated_at` (server timestamp) | `des_ingestion_timestamp` | **Database Log Time** (`updated_at`) — vì CRUD có thể UPDATE sau |
| Learning Events | `event_timestamp` (client time) | N/A (Kafka topic timestamp) | `des_ingestion_timestamp` | **Event Time** — vì Insert-Only, CDC không cần |
| Payment DB | `paid_at` (payment time) | `updated_at` | `des_ingestion_timestamp` | **Database Log Time** — vì có VOID/REFUND updates |

### 2b. LMS Database (CRUD / CDC)

- **Write Mode chi tiết**: Records bị xóa logically qua `deleted_at` timestamp (không phải physical DELETE). Tuy nhiên enrollment có thể bị UPDATE status khi refund → cần CDC.
- **Transaction Log Retention**: WAL (Write-Ahead Log) retention **= 72 giờ** ✅ Đủ cho log-based CDC
- **Replication Lag**: Read replica lag thường < 30 giây; maintenance window 2AM-3AM UTC+7

### 2c. Kafka Learning Events

- **Topic**: `learning.events.v2` — partitioned by `student_id` (12 partitions)
- **Payload Format**: JSON (schema sẽ migrate sang Avro trong Q3)
- **Consumer Group**: `des-pipeline-consumer-group`
- **Retention**: 7 ngày trên Kafka

### 2d. External APIs

- **Udemy Rate Limit**: 1,000 requests/ngày ⚠️ — với 45K enrollments và keyset pagination 50 items/page = 900 requests → **sát giới hạn**
- **Coursera**: Cursor-based pagination, 100 items/page, không có rate limit document
- **Skillshare**: Offset pagination (deprecated) + keyset pagination (mới) — phải dùng keyset

---

## 3. Thỏa Thuận SLA và Schema với Team Nguồn

| Nguồn | Schema change notification | Uptime SLA | Schema Drift Action |
| :--- | :--- | :--- | :--- |
| LMS Database | lms-team thông báo `#data-ops` 5 business days trước DDL | 99.9% | Pipeline fail fast; alert on-call |
| Payment DB | finance-team: 2 tuần notice | 99.9% | Fail fast; không load partial |
| Udemy API | Không có SLA; monitor version header | Thương mại | Schema drift → quarantine + alert |

---

## 4. Ánh Xạ Nguồn → KPI và Đề Xuất Ingestion Mode

| KPI / Target | Bảng & Cột Nguồn | Tần suất cần | Ingestion Mode | Lý do | Gap / Vấn đề |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Instructor Monthly Revenue | `payment_db.transactions.net_revenue` | Hằng ngày | Log-based CDC | CRUD có VOID/REFUND | Confirm timezone: MySQL lưu UTC hay UTC+7? |
| Course Completion Rate | `lms_db.enrollments.status` + `lms_db.completions` | Hằng ngày | Log-based CDC | Status có UPDATE | Cần join logic giữa 2 bảng |
| Student At-Risk Count | `kafka.learning_events.event_timestamp` | 30 phút | Streaming micro-batch | Insert-Only events | Late arrival window: 5 phút |
| Platform Revenue Share | `payment_db.transactions` + `lms_db.enrollments.platform_source` | Hằng ngày | CDC | Cần join | `platform_source` hiện lưu string tự do → cần chuẩn hóa |

---

## 5. Đánh Giá Rủi Ro và Kế Hoạch Giảm Nhẹ

| Rủi ro | Mức độ | Kế hoạch giảm nhẹ |
| :--- | :--- | :--- |
| 🚩 **Udemy rate limit sát ngưỡng** | Cao | Thực hiện rate limit test trước go-live; nếu không đủ → yêu cầu Udemy Business API |
| 🚩 **Schema drift từ Udemy API** | Trung bình | Monitor `X-API-Version` header; quarantine records có unknown fields |
| **LMS maintenance window 2-3AM** | Thấp | Schedule ingestion batch sau 3AM; CDC không bị ảnh hưởng (log-based) |
| **Payment DB timezone không rõ** | Trung bình | Query `SHOW VARIABLES LIKE 'time_zone'`; normalize về UTC khi landing |
| **Kafka schema migration Q3** | Thấp | Chuẩn bị Avro consumer; backward-compatible change |

---

## ⚠️ HALT — Xác Nhận Trước Khi Tiếp Tục

**Câu hỏi 1 — Udemy rate limit**: Với 45K enrollments hiện tại + 30% growth dự kiến = ~58.5K enrollments → 1,170 requests/ngày > 1,000 limit.
→ **Yêu cầu**: Product team confirm với Udemy về nâng tier API trước khi lên kiến trúc.

**Câu hỏi 2 — PII handling**: Email học viên từ Udemy/Coursera/Skillshare cần được mask ngay tại landing zone hay tại Silver?
→ **Yêu cầu**: Security team confirm policy trước khi thiết kế Bronze schema.

**Handoff**: Sau khi 2 câu hỏi trên được resolve → chuyển sang `de-domain-modeling`.
