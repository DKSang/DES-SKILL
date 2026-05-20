# Data Source Assessment

This template is used during Phase 05 (Data Source Assessment) to document the technical characteristics, constraints, write patterns, and organizational agreements for each upstream data source.

---

## 1. Upstream Source Inventory

Document each candidate source system below:

| Source System Name | Tech Stack / DB type | Owner & Contact | Write Pattern (CRUD / Append-only) | Daily Volume (GB) | Peak TPS (Trans/sec) | Access Method (JDBC, API, Stream) | PII Flag (Yes/No) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *e.g., POS Database* | *PostgreSQL 14* | *billing-team@co* | *CRUD (Updates/Deletes)* | *12 GB* | *150 TPS* | *Read-only replica JDBC* | *Yes* |
| | | | | | | | |

## 2. Technical Characteristics & Capabilities

Evaluate the operational limits and behavior of each source:

### Upstream Storage & Log Characteristics (for CDC/Databases)
*   **Write Mode Details**: (e.g., Does the source database delete records physically or logically via `is_deleted` flags?)
*   **Transaction Log Retention**: (e.g., binlog retention period in hours. Must be >= 24h if using Log-based CDC)
*   **Replication Lag/Backup Windows**: (e.g., When does the replica sync? Are there daily resource bottlenecks?)

### API / Event Stream Capabilities
*   **API Pagination Method**: (e.g., Keyset, Offset, Cursor-based pagination)
*   **Rate Limits**: (e.g., maximum 10,000 requests/hour, concurrency limit of 5 sessions)
*   **Payload Format & Serialization**: (e.g., JSON nested, schema register Avro, protobuf)

---

## 3. Organizational SLAs & Schema Evolution Agreements

Establish the operational interface between upstream teams and the data platform:

*   **Change Notification Protocol**: (e.g., Upstream team must notify `#data-ops` channel 5 business days before running DDL migrations)
*   **Upstream SLA Agreements**: (e.g., Source DB replication lag guaranteed under 5 minutes, API uptime SLA 99.9%)
*   **Schema Drift Action Plan**: (e.g., What happens if a source adds a new field? Will the ingestion pipeline auto-map or fail fast?)

---

## 4. Source-to-Requirement Mapping

Map source columns to downstream business metrics or KPIs:

| Downstream KPI / Target | Source Table & Column | Extraction Frequency | Coverage (Full / Partial) | Identifiable Gaps / Latency Issues |
| :--- | :--- | :--- | :--- | :--- |
| *Daily Sales Revenue* | *sales_db.orders.total_amount* | *Hourly Incremental* | *Full* | *Requires timezone conversion from UTC-5 to UTC* |
| | | | | |

---

## 5. Risk Assessment & Mitigations

Identify structural or network risks associated with extracting from this source:

*   **Network Risks**: (e.g., source db behind private subnet, requires bastion host or VPN setup)
*   **Data Quality Risks**: (e.g., source database allows free-form text inputs in email fields, missing foreign key constraints)
*   **Mitigation Actions**: (e.g., apply regex checks in landing zone, schedule off-peak extractions)
