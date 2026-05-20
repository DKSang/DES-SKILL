# Requirements and KPI Catalog

Template này được dùng trong Phase 03 để xác định và cấp phép các business metrics, yêu cầu reporting, và non-functional requirements. Người dùng tự điền; xóa ví dụ khi hoàn thành.

> **Nguyên tắc**: Mọi mâu thuẫn mế́̆ trước khi viết bất kỳ dòng code nào — HALT bắt buộc tại bước này.

---

## 1. Business Goals

*   (e.g., "Provide a single, trusted source of revenue data used by Sales, Finance, and Executive Leadership.")
*   (e.g., "Enable the ML team to train customer churn models weekly using fresh, reliable feature data.")

---

## 2. Certified KPI Catalog

Xác định mỗi KPI với một định nghĩa nghiệp vụ được đồng thuận trước khi implement. **Không được phép viết code khi còn Conflicting Definitions chưa được giải quyết.**

| Tên KPI | Định nghĩa Certified | Công thức | Grain | Data Owner | Freshness SLA | Nguồn | Loại Output | Conflicting Definitions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Gross Revenue` | Tổng giá trị đơn hàng chưa hủy, đơn vị USD | `SUM(total_amount_usd) WHERE status != 'CANCELLED'` | Hằng ngày / Region | finance-director | Có mặt by 7AM | `sales_db.orders` | Analytical | Finance: "Net Sales"; Sales: "Bookings" — đồng bộ trước |
| `Active Customers` | Khách có ≥1 đơn chưa hủy trong 30 ngày | `COUNT(DISTINCT customer_id) WHERE order_date >= TODAY()-30` | Monthly snapshot | product-owner | Hằng ngày | `sales_db.orders` | Analytical | Marketing dùng 60-ngày; Product dùng 30-ngày — cần canonical window |
| `Order Fill Rate` (thời gian thực) | Tỷ lệ đơn được giao đúng hạn | `COUNT(on_time) / COUNT(all_orders)` | Hằng ngày | ops-team | Streaming, lag < 5 phút | `fulfillment_events` | Operational | — |

> **Loại Output (FDE Serving)**: Analytical (batch, BI dashboard) / Operational (real-time API, reverse ETL, feature store).
> Chọn loại đúng trước khi quyết định ingestion mode — Operational output yêu cầu streaming; Analytical thường đủ với batch.

---

## 3. Reporting & Product Requirements

Define the deliverables each stakeholder expects:

| Requirement ID | Requirement Description | Requesting Stakeholder | Priority (High/Med/Low) | Acceptance Criteria | Delivery SLA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| REQ-001 | Weekly regional revenue dashboard available every Monday by 8AM | Regional Sales Managers | High | Dashboard loads in < 5 seconds; data is from last week's actuals; no "#ERROR" cells | Every Monday by 8AM |
| REQ-002 | Customer feature table refreshed daily for ML model retraining | ML Engineer | Medium | ≤30 min refresh time; schema documented; no nulls in feature columns | By 6AM daily |
| REQ-003 | Monthly finance revenue report (CSV export) delivered to CFO | CFO | High | Revenue matches certified KPI definition; file delivered by 6AM on 1st of each month | 1st of every month by 6AM |

---

## 4. Non-Functional Requirements (NFRs)

### Phân loại SLA theo FDE

| Loại SLA | Định nghĩa | Hệ quả kỹ thuận |
| :--- | :--- | :--- |
| **P1 Hard SLA** | Vi phạm = impact nghiệp vụ trực tiếp (báo cáo sáng cho CFO lúc 8AM) | Pipeline FAIL phải alert on-call ngay lập tức |
| **P2 Soft SLA** | Vi phạm = khó chịu nhưng không dừng business (dashboard thường bị trễ 30 phút) | Alert Slack, tự sửa trong 2 giờ |
| **P3 Best-effort** | Vi phạm = OK trong ngưỡng cho phép | Log-only, review hằng sprint |

| NFR Type | Yêu cầu | Target Metric | SLA Class | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Freshness** | Gold layer data làm mới đúng giờ | By 7AM hằng ngày | P1 Hard | Sales review dashboard buổi sáng |
| **Latency** | Query response time BI | < 5 giây với bộ lọc chuẩn | P2 Soft | Performance kém = mất tin tưởng |
| **Availability** | Platform uptime | 99.5% monthly | P1 Hard | Executive reports Monday 8AM |
| **Retention** | Retention period dữ liệu khách hàng | 3 năm (GDPR) | P1 Hard | Legal compliance |
| **Security** | PII columns masked for non-authorized | 0 PII exposed to `analyst-group` | P1 Hard | GDPR + data policy |
| **Scalability** | Pipeline xử lý 2x volume | Không vi phạm SLA | P3 Best-effort | Business growth 30% YoY |
| **Cost** | Monthly cloud infra cost | < $3,000/tháng | P2 Soft | Budget được duyệt |

---

## 5. Metric Ambiguities & Resolution Log

Document every conflicting definition encountered and its resolution:

| Ambiguous Metric | Conflicting Interpretations | Agreed Resolution | Agreed By | Date |
| :--- | :--- | :--- | :--- | :--- |
| `Revenue` | Finance says "before tax"; Sales says "after discount, before tax" | Use "after discount, before tax, before returns" as standard definition | CFO + Sales Director | YYYY-MM-DD |
| `Active Customer` | Marketing uses 60-day window; Product uses 30-day | Use 30-day window as canonical; Marketing can use 60-day custom view | product-owner | YYYY-MM-DD |

---

## 6. Open Questions

| Question | Owner | Next Action | Due Date |
| :--- | :--- | :--- | :--- |
| *Should cancelled orders be included in Active Customer window or not?* | product-owner | Decision in next business review | YYYY-MM-DD |
| *Is there a legal requirement to retain financial data for 7 years (PCI-DSS) or 3 years (GDPR)?* | legal-team | Confirm with compliance officer | YYYY-MM-DD |
