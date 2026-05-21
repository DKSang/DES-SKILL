# 02 — Business Questions
# Online Learning Platform

**Skill sử dụng**: `des-business-questions`
**Input từ**: `01-business-discovery-brief.md`

---

## Câu Hỏi Nghiệp Vụ Đã Certified

### Nhóm A: Instructor Performance

| ID | Câu hỏi | Stakeholder | Output Type | Grain | Ưu tiên |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BQ-001 | Mỗi giảng viên kiếm được bao nhiêu doanh thu từng tháng, phân theo nền tảng? | Instructor Success Manager | Analytical (Dashboard) | instructor × month × platform | P1 |
| BQ-002 | Tỷ lệ hoàn thành khóa học trung bình của mỗi giảng viên là bao nhiêu? | Product Manager | Analytical (Dashboard) | instructor × course | P1 |
| BQ-003 | Giảng viên nào có số học viên tăng trưởng cao nhất so với tháng trước? | CEO | Analytical (Report) | instructor × month | P2 |

### Nhóm B: Student Progress & Retention

| ID | Câu hỏi | Stakeholder | Output Type | Grain | Ưu tiên |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BQ-004 | Học viên nào có nguy cơ bỏ học (không hoạt động > 14 ngày sau khi đăng ký)? | Product Manager | Operational (API trigger) | student × enrollment | P1 |
| BQ-005 | Khóa học nào có tỷ lệ drop-off cao nhất ở module nào? | Product Manager | Analytical (Dashboard) | course × module | P2 |
| BQ-006 | Học viên hoàn thành bao nhiêu phần trăm số module của khóa học đã đăng ký? | Giảng viên | Analytical (Dashboard) | student × course × date | P1 |

### Nhóm C: Platform & Revenue

| ID | Câu hỏi | Stakeholder | Output Type | Grain | Ưu tiên |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BQ-007 | Tổng doanh thu từng tháng phân theo platform (Udemy/Coursera/Skillshare)? | CFO | Analytical (Report) | month × platform | P1 |
| BQ-008 | Platform nào có tỷ lệ chuyển đổi enrollment→completion cao nhất? | Product Manager | Analytical (Dashboard) | platform × course_topic | P2 |

---

## ⚠️ Conflict Được Phát Hiện — HALT

**Conflict BQ-001 & BQ-002**: "Completion Rate" có **3 định nghĩa khác nhau** giữa các stakeholders:

| Stakeholder | Định nghĩa của họ |
| :--- | :--- |
| Product Manager | % student xem > 80% tổng thời lượng video |
| Instructor Success | % student submit quiz cuối cùng của khóa học |
| Analytics team | % student đánh dấu "Complete" trong LMS UI |

**→ HALT**: Phải có 1 định nghĩa canonical trước khi thiết kế bất kỳ bảng nào.

**Quyết định** (sau khi confirm với Product Manager + CFO ngày 2026-05-21):
> **Completion Rate = % students đã submit quiz cuối cùng VÀ đánh dấu Complete trong LMS UI** (intersection, không phải union).
> Lý do: Đây là định nghĩa được LMS tracking và có thể audit được.

---

## Analytical vs Operational Classification

| BQ | Loại | Hệ quả ingestion |
| :--- | :--- | :--- |
| BQ-001, 002, 003, 005, 007, 008 | Analytical → Batch pipeline đủ | Daily batch, SLA 6AM |
| BQ-004, BQ-006 | Operational → Cần near-realtime | Micro-batch mỗi 30 phút |

**Handoff**: Chuyển sang `des-requirements-and-kpis` để định nghĩa KPI catalog.
