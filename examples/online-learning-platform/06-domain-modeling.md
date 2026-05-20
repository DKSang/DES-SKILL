# 06 — Domain Modeling
# Online Learning Platform

**Skill sử dụng**: `de-domain-modeling`
**Input từ**: `05-data-source-assessment.md`

---

> **FDE Bounded Context**: Online Learning Platform domain bao gồm course lifecycle, enrollment, learning progress. KHÔNG bao gồm payment processing (đó là Payment Domain riêng) và user authentication (đó là Identity Domain).

---

## 1. Domain Scope & Context

- **Domain Name**: `Learning Domain`
- **Bounded Context**: Từ khi học viên đăng ký đến khi hoàn thành (hoặc bỏ học). Không bao gồm checkout/payment và user account management.
- **Data Maturity**: Level 2 (Scaling)
- **Domain Owner**: Product Manager (business) / Instructor Success Manager (ops)
- **Technical Owner**: Data Engineer

---

## 2. Core Business Concepts

| Concept | Business Definition | Source System(s) | Synonyms cần Retire | Owner |
| :--- | :--- | :--- | :--- | :--- |
| `Instructor` | Người tạo và dạy khóa học; có tài khoản instructor | `lms_db.instructors` | "Teacher", "Lecturer", "Creator" → chỉ dùng "Instructor" | instructor-success-team |
| `CoursePlatform` | Nền tảng phân phối khóa học (Udemy, Coursera, Skillshare) | `lms_db.platforms` + API sources | "Marketplace", "Channel" → dùng "Platform" | product-manager |
| `Course` | Nội dung học có title, topic, giảng viên, nền tảng phân phối | `lms_db.courses` | "Class", "Program" → dùng "Course" | instructor |
| `Module` | Đơn vị nội dung trong course (có thứ tự `order_num`) | `lms_db.modules` | "Lesson", "Chapter", "Unit" → dùng "Module" | instructor |
| `Student` | Người đăng ký học; có email (PII) | `lms_db.students` | "User", "Learner", "Account" → dùng "Student" | product-manager |
| `Enrollment` | Bản ghi đăng ký của Student vào Course, tại một Platform | `lms_db.enrollments` | "Registration", "Subscription" → dùng "Enrollment" | product-manager |
| `LearningEvent` | Sự kiện học tập tức thời (video play/pause, quiz submit, module complete) | `kafka.learning_events` | "Activity", "Interaction" → dùng "LearningEvent" | platform-team |

---

## 3. Entities & Relationships

| Entity A | Relationship | Entity B | Cardinality | Business Meaning |
| :--- | :--- | :--- | :--- | :--- |
| Instructor | `teaches` | Course | 1:N | Một giảng viên dạy nhiều khóa học |
| Course | `publishedOn` | CoursePlatform | N:1 (via FK trên Course) | Một khóa học được phân phối trên 1 platform chính |
| Course | `hasModule` | Module | 1:N | Một khóa học có nhiều modules có thứ tự |
| Student | `hasEnrollment` | Enrollment | 1:N | Một học viên có nhiều enrollments |
| Enrollment | `enrolledIn` | Course | N:1 | Bridge entity M:N giữa Student và Course |
| Student | `generates` | LearningEvent | 1:N | Một học viên sinh ra nhiều sự kiện học tập |
| LearningEvent | `relatesTo` | Module | N:1 | Mỗi event gắn với một module cụ thể |

> **⚠️ M:N Bridge**: Student ↔ Course là M:N thông qua `Enrollment`. KHÔNG được model thẳng FK từ Student → Course.

---

## 4. Quyết Định Grain Phân Tích

> **FDE Grain Rule**: "Mỗi hàng trong bảng này là một [X]"

### ⚠️ HALT — Grain Declaration Phải Được Confirm

| Dataset | Grain Declaration | Rationale | Edge Cases |
| :--- | :--- | :--- | :--- |
| `fact_enrollment` | Mỗi hàng là **một enrollment (student + course + platform + enrolled_date)** | Tracking enrollment lifecycle; có UPDATE status | Student đăng ký lại sau refund → new enrollment_id mới |
| `fact_learning_progress` | Mỗi hàng là **một student + course + calendar_date** (daily snapshot) | Báo cáo tiến độ hằng ngày; không phải per-event | Student không hoạt động vẫn có row (với progress = previous day) |
| `fact_instructor_revenue` | Mỗi hàng là **một instructor + platform + year_month** | Revenue report hằng tháng per platform | Revenue được phân bổ khi transaction settled, không phải enrolled_date |
| `dim_student` | Mỗi hàng là **một student theo từng phiên bản (SCD Type 2)** | Track email/name change; GDPR deletion cascade | GDPR right-to-erasure: xóa email, giữ anonymized record |
| `dim_course` | Mỗi hàng là **một course (SCD Type 1)** | Thay đổi title/topic không quan trọng lịch sử | Nếu course bị archive: set `is_active = False` |
| `dim_module` | Mỗi hàng là **một module (static)** | Module hiếm khi thay đổi sau publish | Nếu module bị xóa: soft delete với `deleted_at` |

**Grain `fact_learning_progress` cần confirm**: Product Manager cần quyết định — "mỗi student-course-date" hay "mỗi learning event"?
- Option A (daily snapshot): Dễ query, phù hợp dashboard. Nhược: mất granularity event-level.
- Option B (per event): Granular hơn, phù hợp ML feature. Nhược: bảng khổng lồ; dashboard chậm.

**→ Quyết định đã confirm**: Option A — daily snapshot. ML features sẽ query thẳng Silver event table.

---

## 4b. Lựa Chọn Modeling Pattern (FDE)

| Pattern | Phù hợp khi nào | Trade-off |
| :--- | :--- | :--- |
| **Kimball (Dimensional)** ✅ Chọn | BI reporting, team quen SQL, 2 DE không có Spark | Cần upfront design; ETL complex hơn |
| Inmon | Enterprise-wide consistency | Query chậm; không phù hợp team nhỏ |
| OBT | Dashboard đơn giản | Redundancy quá cao với 7 entities |

**Lý do chọn Kimball**: Team 2 DE + Python/SQL only + Dashboard là primary use case.

---

## 5. Business Glossary

| Term | Agreed Definition | Synonyms Retired | Notes |
| :--- | :--- | :--- | :--- |
| `Active Student` | Student có ít nhất 1 LearningEvent trong 7 ngày qua | "Engaged learner", "Returning user" | 7-ngày = canonical window |
| `Completion Rate` | % students submit quiz cuối VÀ mark Complete trong LMS | "Course finish rate", "Graduate rate" | Xem conflict log Phase 02 |
| `At-Risk Student` | Student không có LearningEvent trong 14 ngày kể từ enrolled_date | "Inactive student", "Churn risk" | 14 ngày = threshold; có thể điều chỉnh |
| `Revenue` | Net revenue sau platform fee, trước thuế | "Earnings", "Income" | Gross revenue được track riêng |

---

## 6. Assumptions & Open Questions

**Assumptions**:
- Student identity = unique bởi `email` — không có dedup bởi phone
- Tất cả monetary values: USD; conversion sang VND chỉ cho display layer
- Module order = `order_num` column; không phải thứ tự insert time

**Open Questions**:
- Khi student đăng ký lại sau refund: cùng enrollment_id cập nhật hay enrollment_id mới? → Cần confirm với lms-team
- Module có thể thuộc nhiều courses không? → Nếu có, cần bridge table Module↔Course

**Handoff**: Chuyển sang `de-architecture-design`.
