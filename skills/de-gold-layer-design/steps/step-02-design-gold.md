# Thiết Kế Fact và Dimension Tables

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi fact table phải khai báo lại grain bằng câu nghiệp vụ rõ ràng trước khi liệt kê columns.
- HALT bắt buộc nếu grain mơ hồ, mixed-grain, hoặc measure không additive nhưng được đặt trong fact table.

## Hướng dẫn

### 1. Re-declare grain cho từng Gold table

Không copy grain từ domain model một cách máy móc. Viết lại theo format:

> Mỗi dòng trong `[fact_table]` đại diện cho **một [business event/process]** tại **[time grain]**, cho **[entity grain]**, sau khi **[business condition/filter]**.

Ví dụ:
> Mỗi dòng trong `fact_order_line_daily` đại diện cho một order line đã thanh toán, theo ngày đặt hàng, cho từng product và customer.

### 2. Thiết kế Fact tables

| Fact table | Grain statement | Business process | Additive measures | FK dimensions | Degenerate dimensions | Source Silver |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Quy tắc:
- Additive measures như amount, quantity, duration có thể lưu trong fact.
- Ratios/averages như conversion_rate, average_order_value phải ở semantic/metric layer trừ khi có numerator + denominator rõ.
- FK dùng surrogate key; natural key chỉ dùng làm degenerate dimension khi cần trace.
- Orphan FK dùng sentinel key `-1 = Unknown`, không dùng NULL FK.

### 3. Thiết kế Dimension tables

| Dimension | Business definition | Natural key | Surrogate key | SCD type | Tracked attributes | Conformed? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

SCD decision:
- Type 1: sửa đè khi lịch sử không quan trọng cho phân tích.
- Type 2: giữ lịch sử khi attribute thay đổi làm thay đổi interpretation của KPI theo thời gian.
- Type 0: không thay đổi, dùng cho immutable reference.

### 4. Metric traceability và certified metric check

| Metric | Formula | Grain | Gold source | Owner | Business question |
| :--- | :--- | :--- | :--- | :--- | :--- |

HALT nếu metric không có owner hoặc formula có thể hiểu theo nhiều cách.

### 5. HALT bắt buộc — grain và measure review

Trình bày:

| Table | Grain clear? | Mixed-grain risk | Non-additive measure risk | Conformed dimension risk |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.
- **[G] Sửa grain**: Làm rõ grain cho fact cụ thể.
- **[M] Sửa measure**: Chuyển ratio/average sang semantic layer hoặc tách numerator/denominator.
- **[D] Sửa dimension**: Giải quyết conformed dimension hoặc SCD type.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
