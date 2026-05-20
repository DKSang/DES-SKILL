# Cost and Performance Checklist

This checklist is used during Phase 20 (Cost and Performance Optimization) to verify that cost reduction opportunities have been identified and that pipeline performance meets SLA targets.

---

## 1. Storage Cost Efficiency
- [ ] **Storage tiers configured**: Lifecycle rules transition data Hot → Cool → Archive based on last-access patterns.
- [ ] **Small files consolidated**: No storage path contains > 10,000 files smaller than 100MB without a compaction schedule.
- [ ] **Retention limits enforced**: Automated delete rules are active for all datasets beyond their retention window.
- [ ] **Compression validated**: Columnar formats (Parquet/Delta/Iceberg) used for Bronze+; uncompressed CSV/JSON only in raw landing zone.

## 2. Compute Cost Efficiency
- [ ] **Cluster right-sized**: Cluster core/memory count validated against actual peak utilization (< 85% peak, > 40% average).
- [ ] **Auto-scale enabled**: Compute clusters auto-scale up/down based on load instead of running fixed size 24/7.
- [ ] **Auto-suspend configured**: Interactive and scheduled clusters suspend within 60 seconds of inactivity.
- [ ] **Idle compute identified**: No compute cluster runs > 2 hours/day at < 20% utilization.

## 3. Query Performance
- [ ] **Partition pruning verified**: Analytical queries use partition filter columns (e.g., `WHERE order_date = '...'`) to avoid full table scans.
- [ ] **Broadcast join used**: Small dimension tables (< 100MB) use broadcast join instead of shuffle join in Spark/Databricks.
- [ ] **Z-ordering/clustering applied**: High-frequency filter columns are used as clustering keys in Delta/Iceberg tables.
- [ ] **Slow query identified**: Top 5 slowest queries (P90 > SLA) have been profiled and have an optimization plan.

## 4. FinOps Governance
- [ ] **Monthly cost baseline established**: Total cloud infrastructure cost is tracked and baselined.
- [ ] **Top 3 cost drivers identified**: Largest spend sources are documented with optimization options.
- [ ] **Cost anomaly alerts active**: Unexpected spend spikes trigger automatic alerts to the engineering lead.
- [ ] **Budget compliance confirmed**: Current spend is within approved project budget.
