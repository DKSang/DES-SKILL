# Requirements and KPI Catalog

This template is used during Phase 03 (Requirements and KPIs) to formally define and certify the business metrics, reporting requirements, and non-functional requirements (NFRs) that the data platform must satisfy.

---

## 1. Business Goals

*   (e.g., "Provide a single, trusted source of revenue data used by Sales, Finance, and Executive Leadership.")
*   (e.g., "Enable the ML team to train customer churn models weekly using fresh, reliable feature data.")

---

## 2. Certified KPI Catalog

Define each KPI with a single, agreed business definition before any technical implementation begins:

| KPI Name | Certified Definition | Formula | Grain | Data Owner | Freshness SLA | Source System Candidate | Conflicting Definitions (to resolve) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Gross Revenue` | Sum of all non-cancelled order totals in USD | `SUM(total_amount_usd) WHERE status != 'CANCELLED'` | Daily / Regional / Product | finance-director | Available by 7AM daily | `sales_db.orders` | Finance calls it "Net Sales"; Sales calls it "Bookings" — align terminology first |
| `Active Customers` | Customers with ≥1 non-cancelled order in the last 30 calendar days | `COUNT(DISTINCT customer_id) WHERE order_date >= TODAY()-30` | Monthly snapshot | product-owner | Refreshed daily | `sales_db.orders` | Some reports use 60-day window — confirm canonical window |
| `Average Order Value` | Mean revenue per confirmed order | `[Gross Revenue] / COUNT(DISTINCT order_id)` | Daily | product-owner | Available by 7AM daily | Derived from `orders` | — |

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

| NFR Type | Requirement | Target Metric | Priority | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Freshness** | Gold layer data refreshed on schedule | Available by 7AM daily | High | Sales team reviews dashboards during morning standups |
| **Latency** | BI dashboard query response time | < 5 sec for standard filters | High | Poor performance = users stop trusting the tool |
| **Availability** | Data platform uptime | 99.5% monthly | High | Executive reports generated Monday 8AM — downtime unacceptable |
| **Retention** | Customer data retention period | 3 years (GDPR compliant) | Critical | Legal compliance requirement |
| **Security** | PII columns masked for non-authorized roles | 0 PII columns exposed to `analyst-group` | Critical | GDPR and internal data policy |
| **Scalability** | Pipeline handles 2x data volume growth | No SLA breach at 2x current volume | Medium | Business is growing 30% YoY |
| **Cost** | Monthly cloud infrastructure cost | < $3,000/month | Medium | Budget approved for this project |

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
