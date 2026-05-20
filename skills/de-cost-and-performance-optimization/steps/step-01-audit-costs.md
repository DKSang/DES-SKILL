# Audit Chi Phí và Performance

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Thu thập metrics hiện tại
- Query execution times (P50, P95, P99)
- Storage costs per tier (Bronze/Silver/Gold)
- Compute costs per pipeline
- Scan volume per query

### 2. Xác định top bottlenecks
- Queries chậm nhất
- Pipelines tốn compute nhất
- Storage tiers không được tối ưu

### 3. Đề xuất optimization
- Partitioning / Clustering improvements
- Query optimization (reduce full scans)
- Storage format tuning
- Compute scheduling (off-peak)
- FinOps: reserved capacity vs. on-demand

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận optimization plan, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
