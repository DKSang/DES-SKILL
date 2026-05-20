# Thiết Kế Bronze Tables

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Ingestion design (08).

### 2. Thiết kế Bronze table cho mỗi nguồn
- Giữ nguyên raw schema từ nguồn — KHÔNG transform
- Thêm metadata columns: _ingested_at, _source_id, _batch_id, _file_path (nếu file)
- Quyết định serialization format: Parquet / Delta / Iceberg
- Quyết định partition strategy: by ingestion date
- Retention policy: bao lâu giữ raw data?

### 3. FDE Checklist
- [ ] Compute và Storage tách biệt
- [ ] Partition cardinality phù hợp (không quá high)
- [ ] Serialization format match với downstream query pattern

### 4. Menu tương tác
- **[C] Tiếp tục**: Chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
