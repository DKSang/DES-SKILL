# Business Discovery Brief

This template is used during Phase 01 (Business Discovery) to define the business problem, identify stakeholders, map downstream decisions, and scope the first iteration of data products.

> **Discovery Principle**: Start with the *problem*, not the tool. Every data product must trace back to a specific human decision or business action it enables.

---

## 1. Project Context

*   **Project Name**: (e.g., `Sales Analytics Platform`)
*   **Organization Data Maturity**: Level 1 (Ad-hoc) / Level 2 (Scaling) / Level 3 (Data-Led) *(shapes recommended solution complexity)*
*   **Discovery Date**: YYYY-MM-DD
*   **Data Engineering Contact**: (Lead DE)
*   **Business Sponsor**: (Executive or product owner)

---

## 2. Business Problem Statement

*   **Problem Description**: (e.g., "The sales team cannot reliably track regional revenue trends because reports are manually compiled from 3 different spreadsheets, resulting in inconsistent numbers being presented in weekly executive reviews.")
*   **Cost of Inaction**: (e.g., "Sales leadership makes incorrect resource allocation decisions approximately 2x/quarter, estimated at $200K lost revenue.")
*   **What decisions will this project enable?**: (Specific, concrete human decisions — not abstract analytics goals)

---

## 3. Stakeholders & Decision Mapping

For each stakeholder, define exactly what decision or action they will take based on the data:

| Stakeholder | Role | Decision / Action Enabled | Current Pain Point | Success Signal |
| :--- | :--- | :--- | :--- | :--- |
| *Regional Sales Manager* | Consumer | "Reallocate team headcount to underperforming regions before end of quarter" | "Revenue report is 5 days late and inconsistent" | "Dashboard available by 8AM Monday showing last-week actuals" |
| *CFO* | Approver | "Approve or revise quarterly revenue forecast" | "Finance revenue differs from Sales revenue in executive review" | "Single certified revenue number used across all reports" |
| *ML Engineer* | Consumer | "Retrain churn prediction model weekly" | "Customer feature data refreshed manually — unreliable" | "Daily feature refresh < 30 min, documented schema" |

---

## 4. Scope

### In Scope (Phase 1)
*   (e.g., Daily ingestion of order data from `sales_db` into a Bronze → Gold pipeline)
*   (e.g., Revenue and Active Customer metrics in a certified Power BI dashboard)

### Out of Scope (Deferred to Later Phases)
*   (e.g., Real-time streaming ingestion — current SLA is daily; not justified yet)
*   (e.g., ML feature store integration — Phase 2 after Phase 1 is stable)
*   (e.g., Integration with third-party marketing data — source team not ready)

---

## 5. Initial Data Products

| Data Product | Consumer | Decision Supported | Priority (High/Med/Low) | Target Delivery Date |
| :--- | :--- | :--- | :--- | :--- |
| *Regional Revenue Dashboard* | Sales Managers, CFO | Weekly resource allocation; quarterly forecast | High | YYYY-MM-DD |
| *Customer Churn Feature Table* | ML Engineer | Weekly model retrain | Medium | YYYY-MM-DD |

---

## 6. Constraints & Assumptions

*   **Technical Constraints**: (e.g., Must deploy on Azure; Databricks already licensed; no new SaaS tools without security review)
*   **Budget Constraints**: (e.g., Maximum $3K/month additional cloud spend)
*   **Timeline**: (e.g., Phase 1 must be live within 8 weeks)
*   **Assumptions**:
    - (e.g., Source DB admin will provision a read-only replica for ingestion within 1 week)
    - (e.g., Business definitions for "Active Customer" and "Gross Revenue" are agreed before Silver layer design begins)

---

## 7. Open Questions

| Question | Owner | Next Action | Due Date |
| :--- | :--- | :--- | :--- |
| *What is the agreed definition of "Gross Revenue" — before or after discount?* | finance-director | Decision needed by end of sprint | YYYY-MM-DD |
| *Does the sales_db source have a read replica available for CDC?* | source-db-admin | Check log retention and replica availability | YYYY-MM-DD |
