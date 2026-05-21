# 01 — Business Discovery
# Online Learning Platform

**Skill sử dụng**: `des-business-discovery`
**Ngày thực hiện**: 2026-05-21
**Người phỏng vấn**: Data Engineer (DES-SKILL agent)

---

## 1. Bối Cảnh Tổ Chức

**Tên tổ chức**: EduTech Vietnam Co., Ltd.
**Ngành**: Nền tảng học trực tuyến (EdTech)
**Quy mô**: 45.000 học viên đang hoạt động, 320 giảng viên, 1.200 khóa học
**Data Maturity Level**: **Level 2 (Scaling)** — có pipeline batch cơ bản, nhưng thiếu DQ checks và orchestration chuẩn

---

## 2. Vấn Đề Nghiệp Vụ Hiện Tại

| Vấn đề | Tác động | Mức độ |
| :--- | :--- | :--- |
| Giảng viên không biết học viên của họ học như thế nào | Không cải thiện được nội dung; churn cao | P1 |
| Báo cáo doanh thu chia sẻ cho giảng viên trễ 3-5 ngày | Giảng viên mất niềm tin; tranh chấp thanh toán | P1 |
| Không biết khóa học nào có nguy cơ bị bỏ học cao | Không can thiệp kịp thời; tiền refund tăng | P2 |
| Dashboard học viên load > 30 giây | Trải nghiệm kém; user complain | P2 |
| Dữ liệu enrollment từ 3 platform (Udemy, Coursera, Skillshare) không hợp nhất | Báo cáo tổng không chính xác | P1 |

---

## 3. Stakeholders Chính

| Stakeholder | Vai trò | Nhu cầu data |
| :--- | :--- | :--- |
| CEO / CFO | Executive | Doanh thu tổng, growth rate, platform breakdown |
| Instructor Success Manager | Ops | Instructor performance, completion rates, revenue share |
| Product Manager | Product | Course funnel, drop-off rates, feature adoption |
| Data Analyst team | Analytics | Ad-hoc analysis, cohort analysis |
| Giảng viên (320 người) | End user | Dashboard cá nhân: học viên, tiến độ, doanh thu |

---

## 4. Nguồn Dữ Liệu Sơ Bộ (Preliminary)

| Nguồn | Hệ thống | Loại | Ghi chú |
| :--- | :--- | :--- | :--- |
| LMS Database | PostgreSQL 14 | CRUD | Chứa courses, modules, students, enrollments |
| Learning Event Stream | Kafka 3.x | Event Stream | Video play, pause, quiz submit, completion |
| Payment System | MySQL 8 | CRUD | Transactions, revenue share |
| Udemy/Coursera/Skillshare | REST API | API Pull | Cross-platform enrollment sync |

---

## 5. Định Nghĩa Thành Công

| Tiêu chí | Baseline hiện tại | Target |
| :--- | :--- | :--- |
| Instructor revenue report delay | 3-5 ngày | Có mặt trước 6AM hằng ngày |
| Completion rate accuracy | N/A (chưa track) | < 0.1% sai lệch so với LMS |
| Dashboard load time | > 30 giây | < 5 giây |
| Cross-platform enrollment coverage | 0% (chỉ có LMS) | 100% coverage từ 3 platforms |

---

## 6. Ràng Buộc và Rủi Ro

- **Budget**: $2,500/tháng cloud infra
- **Team**: 2 data engineers, Python/SQL mạnh; không có Spark/Scala experience
- **Regulatory**: Email của học viên là PII — phải mask cho analyst group
- **Rủi ro chính**: Udemy API rate limit 1,000 req/ngày — có thể không đủ cho full sync hằng ngày

---

## 7. Quyết Định Scope

**IN SCOPE (Phase 1)**:
- Instructor performance dashboard (doanh thu, học viên, completion rate)
- Student progress tracking
- Cross-platform enrollment unification

**OUT OF SCOPE (Phase 1)**:
- ML churn prediction (Phase 2)
- Real-time learning event analytics (Phase 2 — cần Level 3 maturity)
- Giảng viên marketplace recommendation (Phase 3)

**Handoff**: Chuyển sang `des-business-questions` để định nghĩa câu hỏi nghiệp vụ cụ thể.
