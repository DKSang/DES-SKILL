# Chọn Pattern Modeling (Kimball/Inmon/OBT)

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Domain model (06), Data products (04), KPI catalog (03).

### 2. Dùng Decision Matrix chọn pattern
Kimball / Inmon / OBT — dựa trên: use case, query complexity, team skill.

### 3. HALT: Xác nhận pattern với stakeholder
Gold pattern là quyết định Irreversible quan trọng. Phải được confirm trước khi thiết kế table.

- **[C] Xác nhận**: Tiếp tục thiết kế Gold tables.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-design-gold.md`.
