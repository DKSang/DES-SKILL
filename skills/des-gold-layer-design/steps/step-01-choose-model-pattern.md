## HALT - Readiness Check Failed

Stop here before continuing.

### Trigger
Use this HALT if required upstream context is missing, contradictory, stale, or not approved.

Missing or blocked items:
- Required upstream artifact is missing.
- Workflow status says an earlier phase is incomplete.
- Owner, source, KPI, contract, quality rule, security control, or release evidence is unknown.
- Continuing would require the agent to guess.

### Decision needed
Decide whether `des-gold-layer-design` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

### Options
A. Provide missing information now
B. Route back to the recommended upstream skill
C. Continue as draft with explicit assumptions and risks
D. Stop this workflow

### Recommendation
Choose B if the missing item affects downstream design, implementation, governance, or release readiness.

### Impact
- A: workflow can continue after the missing facts are recorded.
- B: preserves artifact quality and prevents downstream rework.
- C: creates a draft only; status must not be marked Done unless risk is explicitly accepted.
- D: no artifact/status change should be made except recording the stop reason.

### Required response
Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds.

# Chọn Pattern Modeling (Kimball/Inmon/OBT)

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không thiết kế Gold table khi chưa chốt modeling pattern và grain policy.
- HALT bắt buộc vì Gold modeling quyết định cách business tiêu thụ dữ liệu; đổi sai pattern thường cần rewrite mart, metric, và dashboard.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Domain model (06), Data products (04), KPI catalog (03), Silver design (10), consumer query patterns nếu có.

### 2. Phân loại analytical output

| Output need | Dấu hiệu | Candidate pattern |
| :--- | :--- | :--- |
| Self-service BI, drill-down theo nhiều dimension | Analysts cần filter/slice theo customer/product/time/region | Kimball star schema |
| Enterprise canonical model, nhiều domain cần chuẩn hóa chặt | Data warehouse cần single integrated model, nhiều normalized relationships | Inmon / 3NF core |
| Dashboard đơn giản, domain nhỏ, team nhỏ | Một vài bảng rộng, query lặp lại, ít dimension thay đổi | OBT / wide mart |
| ML/recommendation/features | Model training/serving cần feature snapshots | Feature table, tách khỏi BI Gold |
| Operational serving near-real-time | SLA query hoặc activation thấp | Aggregate serving table / reverse ETL mart |

### 3. Chấm điểm pattern

Chấm 1-5 theo từng criteria. Loại option nếu vi phạm hard constraint.

| Criteria | Kimball | Inmon | OBT | Feature Table |
| :--- | :---: | :---: | :---: | :---: |
| Fits primary consumer query pattern |  |  |  |  |
| Preserves business process grain clearly |  |  |  |  |
| Handles conformed dimensions |  |  |  |  |
| Query simplicity for target users |  |  |  |  |
| Storage/duplication acceptable |  |  |  |  |
| Easy to govern certified metrics |  |  |  |  |
| Team can maintain it |  |  |  |  |
| **Total** |  |  |  |  |

Default recommendation:
- Kimball cho analytics/BI chuẩn vì fact + dimension giữ grain rõ và hỗ trợ conformed dimensions.
- OBT chỉ dùng khi domain đơn giản hoặc serving cần bảng rộng đã denormalize.
- Inmon chỉ chọn khi tổ chức cần normalized enterprise warehouse trước BI marts.

### 4. Kiểm tra conformed dimensions

Với mọi dimension dùng bởi nhiều fact hoặc data product:

| Dimension | Used by facts/products | Natural key | Surrogate key policy | SCD type | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |

HALT nếu một dimension dùng chung nhưng có nhiều định nghĩa business khác nhau, ví dụ "customer", "active user", "product category".

### 5. HALT: xác nhận pattern và grain policy

Trình bày:

| Decision | Recommendation | Why | Tradeoff | Risk if wrong |
| :--- | :--- | :--- | :--- | :--- |
| Gold modeling pattern | Kimball/Inmon/OBT/etc. |  |  |  |
| Grain policy | One grain per fact table |  |  |  |
| Conformed dimension policy | Shared dimensions with single owner |  |  |  |

Menu:
- **[C] Xác nhận**: Tiếp tục thiết kế Gold tables.
- **[R] Chấm điểm lại**: Điều chỉnh matrix hoặc consumer pattern.
- **[G] Giải quyết grain/dimension conflict**: Dừng để xác nhận grain hoặc conformed dimension với stakeholder.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-design-gold.md`.
- On **[R]** hoặc **[G]**: Cập nhật quyết định rồi HALT lại.
