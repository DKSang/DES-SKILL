# Map Data Lineage

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Architecture (07), Ingestion (08), Bronze/Silver/Gold designs, Transformation (13).

### 2. Xây dựng lineage graph
Với mỗi Gold table, trace ngược về:
Gold ← Silver ← Bronze ← Source System

Ghi rõ:
- Column-level lineage (tên cột nguồn → tên cột đích)
- Transformation logic tại mỗi bước
- Tool tạo lineage: dbt, OpenLineage, DataHub, Fabric

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận lineage map, chuyển sang metadata catalog.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-catalog-metadata.md`.
