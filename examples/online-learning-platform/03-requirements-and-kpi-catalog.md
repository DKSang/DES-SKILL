# 03 — Requirements and KPI Catalog
# Online Learning Platform

**Skill sử dụng**: `des-requirements-and-kpis`
**Input từ**: `02-business-question-catalog.md`

---

## 1. Business Goals

- Cung cấp cho giảng viên 1 nguồn dữ liệu đáng tin cậy về hiệu suất khóa học và doanh thu — có mặt trước 6AM hằng ngày.
- Theo dõi tiến độ học tập của học viên trong gần thời gian thực để kích hoạt can thiệp kịp thời.
- Hợp nhất dữ liệu từ 3 nền tảng vào 1 data product có thể audit được.

---

## 2. Certified KPI Catalog

| Tên KPI | Định nghĩa Certified | Công thức | Grain | Data Owner | Freshness SLA | Nguồn | Loại Output | Conflicting Definitions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Instructor Monthly Revenue` | Tổng doanh thu thực nhận của giảng viên sau khi trừ phí nền tảng, theo tháng và nền tảng | `SUM(net_revenue) GROUP BY instructor_id, month, platform` | instructor × month × platform | instructor-success-team | By 6AM ngày 1 hằng tháng | `payment_db.transactions` | Analytical | — |
| `Course Completion Rate` | % học viên submit quiz cuối VÀ đánh dấu Complete trong LMS, trên tổng enrolled | `COUNT(completed) / COUNT(enrolled) * 100` | course × cohort_month | product-manager | By 6AM daily | `lms_db.enrollments + lms_db.completions` | Analytical | ✅ Resolved: xem BQ-002 conflict log |
| `Student At-Risk Count` | Số học viên không có learning event nào trong 14 ngày kể từ ngày enroll | `COUNT(student_id) WHERE last_event_date < enroll_date + 14 AND status != 'completed'` | daily snapshot | product-manager | Refresh mỗi 30 phút | `event_stream.learning_events` | Operational | — |
| `Module Drop-off Rate` | % học viên bắt đầu module nhưng không hoàn thành, theo thứ tự module | `1 - COUNT(module_complete) / COUNT(module_start)` | course × module | product-manager | By 6AM daily | `event_stream.learning_events` | Analytical | — |
| `Platform Revenue Share` | Doanh thu gross theo nền tảng, trước khi chia cho giảng viên | `SUM(gross_amount) GROUP BY platform, month` | month × platform | CFO | By 6AM ngày 1 hằng tháng | `payment_db.transactions` | Analytical | — |

---

## 3. Reporting & Product Requirements

| REQ ID | Mô tả | Stakeholder | Acceptance Criteria | SLA |
| :--- | :--- | :--- | :--- | :--- |
| REQ-001 | Instructor dashboard: doanh thu, completion rate, số học viên hoạt động | Giảng viên | Load < 5 giây; dữ liệu từ ngày hôm trước; không có #ERROR | Hằng ngày by 6AM |
| REQ-002 | At-risk student list API: trả về danh sách student cần intervention | Product | Response < 2 giây; refresh không quá 30 phút; có `last_activity_date` | Mỗi 30 phút |
| REQ-003 | Monthly revenue report (PDF/CSV) gửi cho CFO | CFO | Revenue match certified KPI; gửi by 6AM ngày 1 | Ngày 1 hằng tháng by 6AM |
| REQ-004 | Cross-platform enrollment view: hợp nhất từ 3 platforms | Analytics | Không có duplicates; có `platform_source` column | By 6AM daily |

---

## 4. Non-Functional Requirements (NFRs)

### Phân loại SLA theo FDE

| Loại SLA | Định nghĩa |
| :--- | :--- |
| **P1 Hard** | Vi phạm = tác động nghiệp vụ trực tiếp |
| **P2 Soft** | Vi phạm = khó chịu nhưng không dừng operations |
| **P3 Best-effort** | Vi phạm = ok trong ngưỡng cho phép |

| NFR Type | Yêu cầu | Target | SLA Class | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Freshness** | Instructor dashboard data | By 6AM hằng ngày | **P1 Hard** | Giảng viên check mỗi sáng trước khi dạy |
| **Freshness** | At-risk student list | Lag < 30 phút | **P1 Hard** | Can thiệp kịp thời trong 14 ngày |
| **Latency** | Dashboard query response | < 5 giây | **P2 Soft** | UX requirement |
| **Latency** | At-risk API response | < 2 giây | **P1 Hard** | Operational system |
| **Availability** | Platform uptime | 99.5% monthly | **P2 Soft** | Không phải financial system |
| **Security** | Student email PII | Masked for `analyst-group` | **P1 Hard** | Privacy policy + PDPD Vietnam |
| **Cost** | Monthly infra | < $2,500/tháng | **P2 Soft** | Budget constraint |
| **Scalability** | Handle 2x students | Không breach SLA | **P3 Best-effort** | Growth projection |

---

## 5. Metric Ambiguities & Resolution Log

| Metric | Conflict | Resolution | Agreed By | Ngày |
| :--- | :--- | :--- | :--- | :--- |
| `Completion Rate` | 3 definitions (Product/Instructor/Analytics) | = submit quiz cuối + mark Complete trong LMS UI | Product Manager + CFO | 2026-05-21 |
| `Active Student` | Marketing: 30 ngày; Product: 7 ngày | Product 7-ngày = canonical; Marketing sẽ dùng custom view 30-ngày | product-manager | 2026-05-21 |

---

## 6. Open Questions

| Câu hỏi | Owner | Next Action | Due |
| :--- | :--- | :--- | :--- |
| Udemy API rate limit 1,000 req/ngày có đủ cho sync 45K enrollments không? | Data Engineer | Thử nghiệm với Udemy sandbox | 2026-05-28 |
| PDPD Vietnam có yêu cầu data residency không? | Legal team | Confirm với compliance officer | 2026-05-28 |

**Handoff**: Chuyển sang `des-data-product-definition`.
