# Bước 3: Triage Findings và Viết Contract Review Report

## Quy tắc
- Mỗi finding phải được gán đúng category.
- BLOCKER phải có action cụ thể và owner.
- HALT trước khi ghi file.

---

## 1. Triage Findings

| Category | Định nghĩa | Action bắt buộc |
| :--- | :--- | :--- |
| 🔴 **BLOCKER** | Contract không thể ký — sẽ gây production failure nếu deploy | HALT, revise contract |
| 🟡 **HIGH** | Contract có thể ký nhưng cần addendum hoặc mitigation plan rõ ràng | Addendum bắt buộc trước signing |
| 🟢 **LOW** | Cải thiện tính rõ ràng, không blocking | Backlog revision |
| ℹ️ **INFO** | Awareness cho producer/consumer | Ghi nhận |

**Điền bảng triage**:

| Finding ID | Layer | Mô tả | Category | Action | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CF-001 | L1 | | 🔴/🟡/🟢/ℹ️ | | |
| CF-002 | L2 | | | | |
| ... | | | | | |

---

## 2. Contract Health Score

- Số BLOCKER: **X**
- Số HIGH: **Y**
- Số LOW: **Z**

**Verdict**:
- 0 BLOCKER, 0 HIGH → ✅ **READY TO SIGN** — Contract đủ điều kiện ký kết
- 0 BLOCKER, ≥ 1 HIGH → ⚠️ **SIGN WITH ADDENDUM** — Ký kèm addendum documenting HIGH items và timeline resolve
- ≥ 1 BLOCKER → 🔴 **DO NOT SIGN** — Phải revise contract trước khi ký

---

## 3. Addendum Draft (nếu có HIGH items)

Nếu verdict là "SIGN WITH ADDENDUM", draft addendum:

```
CONTRACT ADDENDUM — [Contract Name] v[version]
Date: [date]

HIGH ITEMS ĐÃ GHI NHẬN:
  CF-xxx: [mô tả] → Producer cam kết resolve trong [sprint/date]
  CF-xxx: ...

ĐIỀU KIỆN: Contract có hiệu lực đầy đủ sau khi HIGH items được resolve và confirm bởi [consumer team].
```

---

## 4. Trình Bày Review Report

```
CONTRACT REVIEW — [Tên contract]
Producer: [producer] → Consumer: [consumer]
Ngày review: [date]

VERDICT: [READY TO SIGN / SIGN WITH ADDENDUM / DO NOT SIGN]

BLOCKERS (phải fix trước khi ký):
  CF-xxx: [mô tả ngắn] → [action]

HIGH (cần addendum):
  CF-xxx: [mô tả ngắn] → [deadline]

LOW / INFO:
  [Liệt kê tóm tắt]

HEALTH SCORE: X🔴 Y🟡 Z🟢 Wℹ️
```

---

## 5. Menu Xác Nhận

- **[W] Ghi file** — Lưu review report ra `12b-contract-review.md`
- **[D] Thảo luận thêm** — Discuss finding cụ thể
- **[X] Không ghi** — Chỉ thảo luận

HALT và chờ người dùng chọn.

---

## 6. Ghi Output File (nếu [W])

Ghi vào:

`{project-root}/_des-output/planning-artifacts/12b-contract-review.md`

---

## 7. Handoff

- **READY TO SIGN**: "Contract sẵn sàng ký kết. Proceed với `des-data-quality`."
- **SIGN WITH ADDENDUM**: "Ký kèm addendum. Track HIGH items trong sprint. Proceed với `des-transformation-design`."
- **DO NOT SIGN**: "Cần revise contract. Chạy lại `des-data-contracts` với findings này làm input."
