# Business Question Catalog

This template is used during Phase 02 (Business Questions) to enumerate the specific analytical questions that the data platform must answer — and trace each back to a concrete downstream decision or business action.

> **Framing Principle**: A good business question is answerable with data AND connected to a specific decision. "What is our revenue?" is weak. "Which regions are underperforming vs. target this week, so we can reassign field reps?" is strong.

---

## 1. Source Reference

*   **Business Discovery Brief**: (Link to Phase 01 doc)
*   **Domain**: (e.g., Sales, Customer, Finance)
*   **Question Catalog Owner**: (Business stakeholder who signs off on this list)

---

## 2. Business Question Catalog

| ID | Business Question | Asking Stakeholder | Decision / Action Enabled | Priority (High/Med/Low) | Answerable Without New Data? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BQ-001 | *"Which regions missed their weekly revenue target and by how much?"* | Regional Sales Manager | Reallocate sales reps to underperforming territories | High | No — requires regional target data |
| BQ-002 | *"How many new customers were acquired this month vs. last month?"* | CMO | Evaluate and adjust acquisition campaign spend | Medium | Partially — customer table exists but acquisition channel missing |
| BQ-003 | *"Which product categories have the highest return rate?"* | Head of Merchandise | Remove or re-price high-return products | Medium | No — returns data not yet ingested |
| BQ-004 | *"What is the 30-day churn probability for each customer?"* | CRM Team | Trigger retention offers for high-risk customers | High | No — requires ML model feature pipeline |

---

## 3. Analytical Requirements

Map each question to the specific metrics, dimensions, and filters required to answer it:

| Question ID | Required Metric / Measure | Required Dimension / Slice | Filter Conditions | Minimum Grain | Freshness Required |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BQ-001 | `Actual Revenue`, `Revenue Target`, `% vs Target` | Region, Week | Non-cancelled orders only | Weekly by region | Available Monday 8AM |
| BQ-002 | `New Customer Count`, `MoM % change` | Month, Acquisition Channel | First order date = this month | Monthly | Available 1st of month |
| BQ-003 | `Return Rate %` = `returns / orders` | Product Category, Month | All order statuses | Monthly by category | Weekly refresh sufficient |
| BQ-004 | `Churn Probability Score` (0–1) | Individual Customer | Customers with ≥1 order in last 90 days | Per customer | Daily refresh by 6AM |

---

## 4. Acceptance Criteria

Define what "done" looks like for each set of questions:

*   **BQ-001**: A Power BI page showing a bar chart of actual vs. target revenue by region for the current and previous 4 weeks. Color-coded green/red vs. target. Available every Monday by 8AM.
*   **BQ-002**: A monthly KPI card showing new customer count with MoM delta. Data matches CRM system count ±1%.
*   **BQ-003**: A table drillable to product subcategory with return rate sorted descending. Refreshed weekly.
*   **BQ-004**: A feature table in the ML Feature Store with `churn_probability` column, refreshed daily, schema documented.

---

## 5. Assumptions & Open Questions

*   **Assumptions**:
    - (e.g., "BQ-001 targets are stored in a Google Sheet owned by the VP Sales — we will ingest this as a static reference table.")
    - (e.g., "Returns data is available in `returns_db.returns` table — source assessment scheduled for next sprint.")
*   **Open Questions**:

| Question | Owner | Needed For | Next Action | Due Date |
| :--- | :--- | :--- | :--- | :--- |
| *"Is 'Churn' defined as 90-day or 60-day inactivity in BQ-004?"* | product-owner | BQ-004 model feature | Decision in next business review | YYYY-MM-DD |
| *"Are acquisition channels tracked in `sales_db` or only in the marketing platform?"* | marketing-analyst | BQ-002 | Audit `sales_db` schema and check marketing API | YYYY-MM-DD |
