# Bước 1: Thu Thập Yêu Cầu và Phân Loại SLA

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không thêm công thức KPI nếu stakeholder chưa xác nhận.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn thực hiện

### 1. Nạp artifact đầu vào

Đọc:
- Business question catalog: `{project-root}/_des-output/planning-artifacts/02-business-questions.md`
- Business discovery brief: `{project-root}/_des-output/planning-artifacts/01-business-discovery.md`

Nếu file `02-business-questions.md` không tồn tại, **HALT** và thông báo.

### 2. Chuyển câu hỏi thành KPI ứng viên

Với mỗi câu hỏi nghiệp vụ có trạng thái ✅, tạo KPI ứng viên và điền 5 tiêu chí:

| KPI | Công thức | Grain | Điều kiện lọc | Owner |
| :--- | :--- | :--- | :--- | :--- |
| (tên KPI) | (cách tính) | (mức chi tiết) | (bao gồm/loại trừ gì) | (tên vai trò) |

**Đặt trạng thái "Thiếu"** nếu bất kỳ cột nào trong 5 tiêu chí còn trống.

### 3. Phân loại SLA theo mức độ quan trọng

Với mỗi data product được đề cập trong business questions, phân loại:

| Data Product | Loại SLA | Thời gian làm mới | Thời hạn cụ thể | Hệ quả vi phạm |
| :--- | :--- | :--- | :--- | :--- |
| (tên) | P1 Cứng / P2 Mềm / P3 Tùy chọn | (daily/hourly/...) | (by 7AM, by EOD) | (blocker/alert/log) |

**P1 Cứng**: Nghiệp vụ không hoạt động được nếu thiếu → phải báo động on-call.
**P2 Mềm**: Trì hoãn gây bất tiện nhưng không chặn nghiệp vụ → chỉ cần WARN alert.
**P3 Tùy chọn**: Không có downstream impact → ghi log thôi.

### 4. Menu tương tác

Trình bày danh sách KPI ứng viên và bảng SLA, sau đó:

- **[C] Tiếp tục**: Xác nhận danh sách, chuyển sang kiểm tra xung đột.
- **[F] Điền thiếu**: Bổ sung công thức / grain / điều kiện lọc còn thiếu.
- **[S] Điều chỉnh SLA**: Thay đổi phân loại SLA.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-resolve-conflicts.md`.
