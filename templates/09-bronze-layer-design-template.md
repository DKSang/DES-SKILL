# Bronze Layer Design

This template is used during Phase 09 (Bronze Layer Design) to design the raw data landing zone — an append-only, schema-on-read replica of upstream source data with full audit traceability.

> **Bronze Layer Principle**: Store data as close to the source as possible. No business logic. No transformations. Only audit columns added.

---

## 1. Bronze Dataset Inventory

| Bronze Dataset Name | Source System | Ingestion Mode (Batch/CDC/Stream) | Write Mode | Grain (row description) | Expected Daily Volume | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `orders_bronze` | `sales_db.orders` | Log-based CDC | Append-only | One row per source event | ~500K rows / 2GB | data-platform-team |
| | | | | | | |

---

## 2. Serialization Format & Storage Configuration

*   **File Format**: (Choose and justify — e.g., `Delta Lake` for ACID + time travel; `Parquet` for portable columnar; `Avro` for schema registry support)
*   **Compression**: (e.g., Snappy for fast read/write on hot data; Zstd for cold archive data)
*   **Small File Strategy**: (e.g., Auto-compact triggered after ingestion if partition file count > 100)
*   **Storage Location**: (e.g., `abfss://raw@storageaccount.dfs.core.windows.net/sales/orders/`)

---

## 3. Partition Design

*   **Primary Partition Key**: (e.g., `ingestion_date = YYYY-MM-DD` — partition by when the record was loaded)
*   **Partition Cardinality Check**: (e.g., Never partition by `user_id` or `order_id` — cardinality too high. Daily date partitions yield ~200MB files at current volume.)
*   **Clustering / Z-Ordering**: (e.g., Z-order by `source_system` within each date partition for faster source-specific queries)
*   **Expected Partition Size**: (e.g., Each daily partition ≈ 2GB after compression — within 1–5GB target range)

---

## 4. Mandatory Audit Metadata Columns

Every Bronze table must include these columns — added by the ingestion pipeline, never from the source:

| Column Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `des_ingestion_timestamp` | `TIMESTAMP` | Yes | UTC time the record was written to Bronze |
| `des_source_system` | `STRING` | Yes | Identifier code of the originating source system |
| `des_source_offset` | `STRING` | Yes | CDC LSN, Kafka offset, or source file path |
| `des_pipeline_run_id` | `STRING` | Yes | Orchestration run ID for full pipeline traceability |
| `des_payload_hash` | `STRING` | Yes | SHA-256 of raw payload to detect source tampering |
| `des_schema_version` | `STRING` | No | Schema version at ingestion time (for drift tracking) |

---

## 5. Schema Drift Policy

*   **New Column Added by Source**: (e.g., Auto-merge into Bronze schema with `NULLABLE` default. Alert data team via Slack.)
*   **Column Removed by Source**: (e.g., Column retained in Bronze with null values. Fail-alert if a non-nullable required column is removed.)
*   **Column Type Changed**: (e.g., Widen type if safe (INT→BIGINT). Quarantine records if type is incompatible. Create a separate Bronze migration table.)
*   **Schema Version Tracking**: (e.g., Every schema change logged in `bronze_schema_history` table with timestamp and diff description.)

---

## 6. Replay, Backfill & Privacy

*   **Replay Safety**: (e.g., Ingestion pipeline uses `REPLACE WHERE ingestion_date = '{{ ds }}'` — safe to re-run for any date)
*   **Backfill Procedure**: (e.g., Source provides historical export; loaded using same Bronze pipeline with `backfill=True` flag)
*   **PII / Privacy Treatment**: (e.g., Bronze stores raw data including PII. Access is restricted to `bronze-raw-readers` role only. PII masking applied in Silver layer.)
*   **Retention Policy**: (e.g., Bronze data retained 90 days in Hot tier; archived to Cold after 30 days; deleted after 90 days per lifecycle rule)
