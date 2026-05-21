# Bước 3: Triage Findings và Viết Review Report

## Quy tắc
- Mỗi finding phải được gán đúng category.
- BLOCKER phải có action cụ thể và owner.
- Report phải ngắn gọn — không padding, không filler.
- HALT trước khi ghi file và chờ người dùng confirm.

---

## 1. Triage Findings

Với mỗi raw finding từ bước 2, gán category:

| Category | Định nghĩa | Action bắt buộc |
| :--- | :--- | :--- |
| 🔴 **BLOCKER** | Phải fix trước khi bắt đầu implementation | HALT, revise architecture → chạy lại review |
| 🟡 **HIGH** | Nên fix trước go-live | ADR update hoặc mitigation plan trong sprint đầu |
| 🟢 **LOW** | Cải thiện nhỏ, không blocking | Backlog — fix khi có capacity |
| ℹ️ **INFO** | Observation — không cần action | Ghi nhận để awareness |

Điền bảng triage:

| Finding ID | Layer | Mô tả finding | Category | Action đề xuất | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |
| F-001 | L1 | | 🔴/🟡/🟢/ℹ️ | | |
| F-002 | L2 | | | | |
| ... | | | | | |

---

## 2. Architecture Health Score

Tính:
- Số BLOCKER: **X**
- Số HIGH: **Y**
- Số LOW: **Z**
- Số INFO: **W**

**Verdict**:
- 0 BLOCKER, ≤ 3 HIGH → ✅ **APPROVED** — Có thể proceed với HIGH items tracked trong ADR backlog
- 1-2 BLOCKER → ⚠️ **CONDITIONAL** — Phải resolve BLOCKER trước implementation; HIGH có thể parallel track
- ≥ 3 BLOCKER → 🔴 **REJECTED** — Architecture cần revise đáng kể; quay lại `des-architecture-design`

---

## 3. Tóm Tắt Cho Người Dùng

Trình bày review report ngắn gọn:

```
ARCHITECTURE REVIEW — [Tên project]
Ngày review: [date]
Reviewer: DES-SKILL des-architecture-review

VERDICT: [APPROVED / CONDITIONAL / REJECTED]

BLOCKERS (phải fix ngay):
  F-xxx: [mô tả ngắn] → [action]

HIGH (nên fix trước go-live):
  F-xxx: [mô tả ngắn] → [action]

LOW / INFO:
  [Liệt kê tóm tắt]

HEALTH SCORE: X🔴 Y🟡 Z🟢 Wℹ️
```

---

## 4. Menu Xác Nhận

Hỏi người dùng:

- **[W] Ghi file** — Lưu review report ra `07b-architecture-review.md`
- **[R] Review lại** — Thảo luận thêm về 1 finding cụ thể
- **[X] Không ghi** — Chỉ thảo luận, không lưu

HALT và chờ người dùng chọn.

---

## 5. Ghi Output File (nếu [W])

Ghi review report vào:

`{project-root}/_des-output/planning-artifacts/07b-architecture-review.md`

Format file:
```markdown
# Architecture Review Report — [Project Name]

**Date**: [date]
**Reviewed by**: des-architecture-review
**Architecture Document**: [link to 07-architecture-design.md]

## Verdict: [APPROVED / CONDITIONAL / REJECTED]

## Finding Catalog

[Bảng findings đã triage]

## BLOCKER Action Items

[Chỉ BLOCKER, với action và deadline cụ thể]

## Health Score
[X🔴 Y🟡 Z🟢 Wℹ️]
```

---

## 6. Handoff

- **Verdict APPROVED hoặc CONDITIONAL**: "Review hoàn tất. Tiếp tục với `des-ingestion-design`."
- **Verdict REJECTED**: "Cần revise architecture. Chạy lại `des-architecture-design` với findings này làm input."
