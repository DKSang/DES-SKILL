# 06 — Conceptual Domain Model
# Online Learning Platform

## Metadata

| Field | Value |
| --- | --- |
| Project | Online Learning Platform |
| Domain | Learning |
| Skill | des-domain-modeling |
| Phase | 06 — Domain Modeling |
| Status | Approved |
| Owner | Data Lead |
| Last Updated | 2026-05-22 |
| Upstream Artifact | 05-data-source-inventory.md |
| Next Skill | des-architecture-design |

## 1. Domain Model Summary

```text
Online Learning Platform domain bao gồm course lifecycle, enrollment, và learning progress. KHÔNG bao gồm payment processing (đó là Payment Domain riêng) và user authentication (đó là Identity Domain). Dự án ưu tiên độ tin cậy của mô hình quan hệ nghiệp vụ trước khi triển khai schema vật lý.
```

## 2. Domain Scope

In scope:

* Đăng ký học (Enrollment) của Student vào Course.
* Tiến độ học tập của học viên (Learning Progress) dựa trên sự kiện học tập (LearningEvent).
* Thông tin khóa học (Course), bài học (Module) và giảng viên (Instructor).

Out of scope for this model:

* Thanh toán và hoàn tiền (Payment/Checkout).
* Đăng nhập và bảo mật tài khoản học viên (Authentication/Identity).

Scope rationale:

```text
Tập trung vào trải nghiệm học tập và phân tích hiệu quả của giảng viên để đáp ứng trực tiếp các câu hỏi nghiệp vụ P1.
```

## 3. Business Glossary

| Term | Definition | Synonyms | Status | Notes |
| ---- | ---------- | -------- | ------ | ----- |
| `Active Student` | Student có ít nhất 1 LearningEvent trong 7 ngày qua | "Engaged learner", "Returning user" | Approved | 7-ngày = canonical window |
| `Completion Rate` | % students submit quiz cuối VÀ mark Complete trong LMS | "Course finish rate", "Graduate rate" | Approved | Xem conflict log Phase 02 |
| `At-Risk Student` | Student không có LearningEvent trong 14 ngày kể từ enrolled_date | "Inactive student", "Churn risk" | Approved | 14 ngày = threshold |
| `Revenue` | Net revenue sau platform fee, trước thuế | "Earnings", "Income" | Approved | Gross revenue được track riêng |

## 4. Core Entities

| Entity | Business Definition | Conceptual Grain | Identity Rule | Status |
| ------ | ------------------- | ---------------- | ------------- | ------ |
| `Instructor` | Người tạo và dạy khóa học; có tài khoản instructor | one instance per real-world instructor | Email và Instructor ID từ LMS | Approved |
| `CoursePlatform` | Nền tảng phân phối khóa học (Udemy, Coursera, etc.) | one instance per platform | Platform Name và code | Approved |
| `Course` | Nội dung học có title, topic, giảng viên | one instance per course | Course ID từ LMS | Approved |
| `Module` | Đơn vị nội dung trong course (có thứ tự order_num) | one instance per module | Module ID từ LMS | Approved |
| `Student` | Người đăng ký học; có email (PII) | one instance per student | Student ID từ LMS | Approved |
| `Enrollment` | Bản ghi đăng ký của Student vào Course, tại một Platform | one instance per enrollment | Enrollment ID | Approved |

## 5. Domain Events

| Event | Definition | Event Subject | Event Time Meaning | Mutability | Status |
| ----- | ---------- | ------------- | ------------------ | ---------- | ------ |
| `LearningEvent` | Sự kiện học tập tức thời (video play, quiz submit, module complete) | Student & Module | Event time từ client/message | Immutable | Approved |

## 6. Value Objects and Attributes

This section describes important conceptual attributes without designing physical columns.

| Concept | Attribute / Value Object | Meaning | Notes |
| ------- | ------------------------ | ------- | ----- |
| `Course` | `topic` | Chủ đề của khóa học | Dùng để phân loại báo cáo |
| `Module` | `order_num` | Thứ tự bài học | Xác định tiến trình học |

## 7. Relationships

| Relationship | From Concept | To Concept | Cardinality | Temporal? | Notes |
| ------------ | ------------ | ---------- | ----------- | --------- | ----- |
| teaches | Instructor | Course | 1:N | No | Một giảng viên dạy nhiều khóa học |
| publishedOn | Course | CoursePlatform | N:1 | No | Một khóa học được phân phối trên 1 platform |
| hasModule | Course | Module | 1:N | No | Một khóa học có nhiều modules |
| hasEnrollment | Student | Enrollment | 1:N | Yes | Một học viên đăng ký nhiều lần |
| enrolledIn | Enrollment | Course | N:1 | No | Bridge entity M:N giữa Student và Course |
| generates | Student | LearningEvent | 1:N | Yes | Học viên sinh ra nhiều sự kiện |

## 8. Conceptual Grains

| Concept | Grain | Why It Matters | Downstream Impact |
| ------- | ----- | -------------- | ----------------- |
| `fact_enrollment` | one instance per enrollment (student + course + platform + enrolled_date) | Tracking enrollment lifecycle | Silver / Gold / Contract |
| `fact_learning_progress` | one instance per student + course + calendar_date | Daily snapshot báo cáo tiến độ | Silver / Gold / semantic / DQ |
| `fact_instructor_revenue` | one instance per instructor + platform + year_month | Báo cáo doanh thu định kỳ | Gold / semantic / contract |

## 9. Identifiers and Identity Rules

| Entity | Known Identifiers | Identity Rule | Cross-Source Mapping Needed? | Status |
| ------ | ----------------- | ------------- | ---------------------------- | ------ |
| `Student` | `student_id`, `email` | Unique by `email` | No | Approved |
| `Course` | `course_id` | Unique by `course_id` | No | Approved |

## 10. Source Alignment

| Concept | Candidate Sources | Evidence | Notes |
| ------- | ----------------- | -------- | ----- |
| `Student` | `lms_db.students` | Source schema | Authoritative for student profiles |
| `LearningEvent` | `kafka.learning_events` | Kafka stream schema | Clickstream events source |

## 11. Source of Truth Mapping

| Concept | Source of Truth Strategy | Source(s) | Status | Risk |
| ------- | ------------------------ | --------- | ------ | ---- |
| Profile | Authoritative source | LMS DB | Approved | None |
| Progress | Conformed merge | LMS DB + Kafka | Approved | Sync delay between DB and Kafka |

## 12. Terminology Conflicts

| Term / Concept | Conflict | Options | Owner | Status |
| -------------- | -------- | ------- | ----- | ------ |
| `Completion Rate` | Định nghĩa khác nhau giữa Product và Marketing | quiz cuối submit vs mark complete | Product Manager | Resolved |

## 13. Domain Rules

| Rule ID | Domain Rule | Affected Concept | Source / Owner | Status |
| ------- | ----------- | ---------------- | -------------- | ------ |
| DR-001 | Student đăng ký lại sau refund tạo enrollment_id mới | Enrollment | LMS DB / PM | Approved |

## 14. Lifecycle and State Definitions

| Concept | State / Lifecycle | Meaning | Source Mapping | Status |
| ------- | ----------------- | ------- | -------------- | ------ |
| `Enrollment` | `active`, `paused`, `completed`, `refunded` | Trạng thái học tập của học viên | `lms_db.enrollments.status` | Approved |

## 15. Temporal Concepts

| Temporal Concept | Meaning | Applies To | Notes |
| ----------------- | ------- | ---------- | ----- |
| Event time | Thời điểm học viên tương tác trên client | `LearningEvent` | UTC |
| Ingestion time | Thời điểm data đi vào system | All layers | UTC |

## 16. Ownership and Stewardship

| Concept | Business Owner / Steward | Technical Owner | Notes |
| ------- | ------------------------ | --------------- | ----- |
| Revenue | Finance Lead | Lead Data Engineer | |
| Learning Progress | Head of Product | Data Platform Lead | |

## 17. Downstream Use Case Mapping

| Concept | Business Questions | Requirements / KPIs | Product Outputs |
| ------- | ------------------ | ------------------- | --------------- |
| `LearningEvent` | BQ-001 | KPI-001 | OUT-001 |

## 18. Modeling Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
| Student identity unique by email | Sinh ra trùng lặp nếu 1 người dùng nhiều email | Enforce authentication rules |

## 19. Risks

| Risk | Affected Concept | Impact | Mitigation | Owner |
| ---- | ---------------- | ------ | ---------- | ----- |
| GDPR Deletion requirement | `Student` profile (PII) | Legal compliance issue | Mask email at Silver layer | Data Lead |

## 20. Open Questions

| Open Question | Why It Matters | Owner | Needed By |
| ------------- | -------------- | ----- | --------- |
| Module có thể thuộc nhiều courses không? | Ảnh hưởng đến cardinality của module | LMS Team | Phase 7 |

## 21. Next Skill Recommendation

Recommended next skill:

```text
des-architecture-design
```

Reason:

```text
Khi mô hình khái niệm (conceptual domain model) và các grain phân tích đã được đồng thuận, bước tiếp theo là thiết kế hạ tầng vật lý và lưu trữ tương ứng.
```
