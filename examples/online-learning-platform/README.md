# Online Learning Platform — DES-SKILL Example Project

## Mục Đích

Đây là example project hoàn chỉnh minh họa cách sử dụng DES-SKILL cho một dự án data engineering thực tế — từ business discovery đến project evaluation. Mỗi artifact được tạo bởi skill tương ứng và là input cho skill tiếp theo.

Domain: **Nền tảng học trực tuyến** (Online Learning Platform) — giảng viên, khóa học, học viên, enrollment, kết quả học tập.

---

## Cấu Trúc Example

```text
examples/online-learning-platform/
├── README.md                               # File này
├── 01-business-discovery-brief.md         # Phase 01: Khám phá nghiệp vụ
├── 02-business-question-catalog.md        # Phase 02: Câu hỏi nghiệp vụ
├── 03-requirements-and-kpi-catalog.md            # Phase 03: KPI và yêu cầu
├── 04-data-product-specification.md          # Phase 04: Định nghĩa data product
├── 05-data-source-assessment.md           # Phase 05: Đánh giá nguồn dữ liệu
├── 06-conceptual-domain-model.md          # Phase 06: Domain model
├── 07-architecture-design.md             # Phase 07: Kiến trúc
├── 08-ingestion-design.md                 # Phase 08: Ingestion design
├── 09-bronze-layer-design.md              # Phase 09: Bronze layer
├── 10-silver-layer-design.md              # Phase 10: Silver layer
├── 11-gold-layer-design.md               # Phase 11: Gold layer
├── 12-data-contracts.md                   # Phase 12: Data contracts
├── 14-data-quality.md                     # Phase 14: Data quality rules
└── workflow-status.md                     # Trạng thái workflow tổng thể
```

---

## Tóm Tắt Domain

| Thực thể | Mô tả | Nguồn |
| :--- | :--- | :--- |
| `Instructor` | Giảng viên tạo và dạy khóa học | `lms_db.instructors` |
| `CoursePlatform` | Nền tảng phân phối (Udemy, Coursera, Skillshare) | `lms_db.platforms` |
| `Course` | Khóa học với topic và giảng viên | `lms_db.courses` |
| `Module` | Bài học thuộc khóa học (có thứ tự) | `lms_db.modules` |
| `Student` | Học viên đăng ký khóa học | `lms_db.students` |
| `Enrollment` | Bản ghi đăng ký (Student ↔ Course) | `lms_db.enrollments` |
| `LearningEvent` | Sự kiện học tập (video play, quiz submit) | `event_stream.learning_events` |

---

## Luồng DES-SKILL

```text
01-business-discovery
    ↓
02-business-question-catalog
    ↓
03-requirements-and-kpi-catalog      ← HALT: Metric conflict giải quyết ở đây
    ↓
04-data-product-specification
    ↓
05-data-source-assessment     ← HALT: Xác nhận binlog retention CDC
    ↓
06-conceptual-domain-model    ← HALT: Grain declaration per dataset
    ↓
07-architecture-design        ← HALT: Irreversible decisions (storage format)
    ↓
08-ingestion-design
    ↓
09 → 10 → 11 (Medallion layers)
    ↓
12-data-contracts             ← HALT: Producer + consumer ký contract
    ↓
14-data-quality
    ↓
[15-22: Orchestration → Serving → Governance → Evaluation]
```

---

## Bài Học Từ Example Này

1. **HALT tại metric conflict**: "Completion Rate" có 3 định nghĩa khác nhau giữa Product, Sales, và Analytics — phải resolve trước khi viết SQL
2. **Write Pattern quyết định ingestion mode**: `enrollments` là CRUD (có UPDATE khi student pause) → phải dùng CDC, không phải Incremental Watermark
3. **Grain declaration**: `fact_learning_progress` không phải "mỗi event" mà là "mỗi student-course-date" — quyết định này thay đổi toàn bộ schema
4. **Storage format là One-way door**: Chọn Delta Lake vì ACID + time travel — nếu cần Iceberg sau này phải full rewrite
5. **P1 Hard SLA drives architecture**: Instructor revenue report by 6AM daily → batch pipeline phải hoàn thành trước 5AM
