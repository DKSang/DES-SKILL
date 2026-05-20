# Storage Design Checklist

This checklist is used during Phase 07 (Architecture Design) and Phase 09 (Bronze Layer Design) to ensure storage systems are cost-effective, scalable, and optimized for query performance.

---

## 1. Storage Abstraction & Decoupling
- [ ] **Decoupled compute and storage**: Compute clusters can be shut down without losing stored data. Storage is managed on durable services (e.g., Object Storage, Cloud Warehouses).
- [ ] **Consistency models mapped**: Multi-writer scenarios are evaluated to ensure target storage supports necessary ACID constraints.
- [ ] **Access security isolated**: Storage access uses IAM roles or scoped access keys (e.g., SAS tokens) rather than administrative credentials.

## 2. File Format & Serialization
- [ ] **Appropriate formats selected**:
  - `Raw Landing`: Raw payload preserved (JSON, CSV, XML, Avro).
  - `Bronze/Silver/Gold`: Columnar, compressed formats (Parquet, Delta Lake, Iceberg, ORC).
- [ ] **Compression configured**: Optimal compression algorithms selected (e.g., Snappy for fast read/write, Gzip/Zstd for cold storage archiving).
- [ ] **Small file problem addressed**: Compact processes are designed to merge small files (under 128MB) into larger files to prevent catalog scanning lag.

## 3. Partitioning & Clustering
- [ ] **Partition column selected**: Partitioning is based on columns frequently used in query filters (e.g., `event_date`, `region`).
- [ ] **Partition size optimized**: Individual partition sizes range between 100MB and 1GB. Avoid high-cardinality partitions (e.g., partitioning by `user_id` or `timestamp`).
- [ ] **Clustering / Z-Ordering defined**: Secondary query filters are mapped to clustering keys (e.g., sorting within partitions by `customer_id` or `category`).

## 4. Lifecycle & Retention Management
- [ ] **Retention policy implemented**: Automated lifecycle rules are set to transition files from Hot -> Cool -> Archive tiers.
- [ ] **Delete windows configured**: Processes to hard-delete records according to privacy policies (GDPR/CCPA) are automated.
- [ ] **FinOps storage review completed**: High-cost directories are identified, and storage growth is monitored.
