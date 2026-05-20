# Cost and Performance Optimization

This template is used during Phase 20 (Cost and Performance Optimization) to systematically identify, prioritize, and track cost reduction and performance improvement opportunities across the data platform.

---

## 1. Review Scope & Baseline

*   **Review Date**: YYYY-MM-DD
*   **Review Owner**: (e.g., Data Engineering Lead + FinOps Analyst)
*   **Scope**: (e.g., All pipelines in `sales_domain`; Bronze/Silver/Gold storage on ADLS Gen2; Databricks compute)
*   **Total Monthly Cloud Spend (Baseline)**: $X,XXX / month
*   **Spend Trend**: (e.g., Up 25% MoM due to new streaming pipeline; down 10% after partition optimization)

---

## 2. Storage Cost Drivers

| Table / Directory | Tier | Size (TB) | Cost/Month | Key Issue | Optimization Option | Estimated Saving |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `events_bronze/` | Hot | 45 TB | $900 | 95% of data older than 3 days never queried | Move data > 7 days to Cool tier | ~$500/month |
| `logs_raw/` | Hot | 20 TB | $400 | No lifecycle rule; data accumulates indefinitely | Enable auto-delete after 90 days | ~$200/month |
| All Silver tables | Hot | 12 TB | $240 | 50K small Parquet files (< 50MB each) | Run Delta OPTIMIZE weekly | ~$80/month |

*   **Small Files Audit**: (e.g., Run `SELECT COUNT(*) / SUM(size_bytes/1e9) FROM delta.`table_files WHERE size_bytes < 100MB` to identify small file problem)

---

## 3. Compute Cost Drivers

| Pipeline / Cluster | Avg Runtime | Cluster Size | Idle Time | Cost/Run | Key Issue | Optimization | Estimated Saving |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `daily_sales_ingest` | 45 min | 8x Standard_DS4_v2 | 1.5 hr/day idle | $28 | Oversized cluster; data is only 2GB | Resize to 4x Standard_DS3_v2 | ~$14/day = $420/month |
| `silver_transform_job` | 30 min | 16x large | Peak 85%, off-peak 20% | $45 | No auto-scaling enabled | Enable auto-scale (4–16 workers) | ~$15/day = $450/month |

*   **Idle Cluster Policy**: (e.g., Auto-suspend threshold reduced from 10 min to 60 sec for all interactive clusters)

---

## 4. Query Performance Drivers

| Query / Dashboard | Current P90 Latency | SLA Target | Root Cause | Optimization Option | Expected Improvement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Regional Revenue Dashboard* | 22 sec | < 5 sec | Full table scan on `fact_orders` (no partition pruning) | Add `order_date` partition + cluster by `region` | Estimated < 3 sec |
| *Customer Churn API endpoint* | 800ms | < 200ms | No caching; queries live warehouse on every API call | Add Redis cache TTL=5min | Estimated < 150ms |

---

## 5. Optimization Decision Register

Prioritize and document decisions:

| Priority | Optimization Action | Expected Benefit | Tradeoff / Risk | Owner | Target Date | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| P1 | Enable Cool tier lifecycle rule on `events_bronze` > 7 days | ~$500/month saving | Slight latency increase for rare historical queries | data-platform-team | YYYY-MM-DD | Open |
| P1 | Resize `daily_sales_ingest` cluster | ~$420/month saving | Must validate runtime doesn't exceed SLA after resize | data-platform-team | YYYY-MM-DD | Open |
| P2 | Run weekly OPTIMIZE on Silver tables | ~$80/month + query speedup | Requires off-hours maintenance window | data-platform-team | YYYY-MM-DD | Open |
| P3 | Add partition on `fact_orders.order_date` | Dashboard < 3sec (vs. 22sec now) | Requires partition backfill — 4hr estimated | data-platform-team | YYYY-MM-DD | Open |

---

## 6. Metrics to Track

| Metric | Measurement Method | Alert Threshold | Review Frequency |
| :--- | :--- | :--- | :--- |
| Total monthly cloud spend | Cost management dashboard | > $3,500/month | Monthly |
| Pipeline P90 runtime | Airflow task duration logs | > SLA limit | Weekly |
| Storage size growth rate | Delta table size stats | > 20% MoM growth | Monthly |
| Small files count per table | `delta.detail()` row count | > 10,000 files | Weekly |
| Dashboard query P90 latency | Power BI query diagnostics | > 10 sec | Weekly |
