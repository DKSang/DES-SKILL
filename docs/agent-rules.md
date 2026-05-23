# Agent Rules

Các quy tắc bắt buộc cho mọi agent sử dụng DES-SKILL.

---

## Quy tắc 1 — Đọc SKILL.md trước khi làm gì

Mỗi lần kích hoạt skill, agent phải đọc `SKILL.md` và `customize.toml` trước. Không đoán cấu hình.

**Đúng:**
```text
1. Read SKILL.md
2. Read customize.toml
3. Proceed with step-01
```

**Sai:**
```text
Generate the artifact directly based on the skill name
```

---

## Quy tắc 2 — Chỉ load step-01 trước

Agent không được load toàn bộ step files cùng lúc. Chỉ load step tiếp theo khi được hướng dẫn trong step hiện tại.

**Lý do:** Mỗi step có HALT riêng. Load hết sẽ bỏ qua HALT và nhảy bước.

**Đúng:**
```text
Load step-01 → work → HALT → user input → load step-02 → ...
```

**Sai:**
```text
Load all steps → generate final artifact immediately
```

---

## Quy tắc 3 — Dừng tại mọi HALT

Khi gặp `HALT`, agent **phải dừng** và yêu cầu input từ người dùng trước khi tiếp tục.

HALT không phải suggestion. HALT là blocking gate.

**Ví dụ HALT điển hình:**

| HALT trigger | Phase |
|:---|:---|
| Business owner không rõ | des-business-discovery |
| KPI formula chưa confirm | des-requirements-and-kpis |
| Source system access chưa rõ | des-data-source-assessment |
| Gold grain chưa được approve | des-gold-layer-design |
| Contract owner chưa sign | des-data-contracts |
| Story không có acceptance criteria | des-story-readiness-check |
| Critical bugs chưa fix | des-code-review |
| Test evidence thiếu | des-release-readiness-review |

---

## Quy tắc 4 — Không tự invent artifact

Agent không được giả định artifact đã tồn tại hoặc có nội dung cụ thể nếu chưa đọc file thực tế.

Nếu artifact chưa có, dùng trạng thái:
- `Missing` — chưa được tạo
- `Unknown` — không biết nội dung
- `Draft` — có nhưng chưa approved
- `Blocked` — không thể tạo vì thiếu input

Không tự đánh dấu `Done` khi chưa có artifact.

---

## Quy tắc 5 — Không viết code trong planning skills

Các skill sau **không được phép** viết production code:

- `des-business-discovery`
- `des-requirements-and-kpis`
- `des-architecture-design`
- `des-create-epic`
- `des-create-story`
- `des-sprint-planning`
- `des-story-readiness-check`
- `des-dev-task-breakdown`
- `des-implementation-plan`

Planning skills tạo **design artifacts và plans**. Không tạo code.

---

## Quy tắc 6 — Luôn chạy checklist trước khi đánh dấu Done

Trước khi khai báo artifact là Done, agent phải:

1. Load checklist từ path trong `customize.toml`
2. Chạy qua từng checklist item
3. Đánh dấu Pass / Fail / Blocked cho từng item
4. Chỉ Done khi không có Blocked items

---

## Quy tắc 7 — Luôn cập nhật workflow status

Sau mỗi artifact quan trọng được tạo hoặc cập nhật, agent phải cập nhật:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

File này phải phản ánh:
- Phase nào Done / In Progress / Blocked
- Sprint hiện tại
- Open blockers
- Next recommended skill

---

## Quy tắc 8 — Không nhảy phase vì phase dễ hơn

Agent không được chọn chạy phase dễ hơn để tránh HALT ở phase khó. Phải giải quyết blocker trước.

**Sai:**
```text
Phase 06 bị HALT vì chưa rõ source. Skip sang phase 07.
```

**Đúng:**
```text
Phase 06 HALT. Yêu cầu người dùng cung cấp source information.
Không tiếp tục cho đến khi HALT được resolve.
```

---

## Quy tắc 9 — Không infer business decision

Agent không được tự quyết định:
- KPI formula
- Data grain
- Source authority
- Contract ownership
- PII classification
- Release Go/No-Go

Những quyết định này cần human input tại HALT.

---

## Quy tắc 10 — Đề xuất skill tiếp theo nhưng không tự chạy

Sau mỗi skill, agent nên đề xuất skill tiếp theo phù hợp, nhưng không tự động chạy skill đó mà không có lệnh từ người dùng.

**Đúng:**
```text
Artifact `01-business-discovery-brief.md` đã được tạo và checklist pass.
Recommended next skill: `des-business-questions`.
```

**Sai:**
```text
Starting `des-business-questions` automatically...
```

---

## Tóm tắt quy tắc

| # | Quy tắc | Hành vi đúng |
|:---:|:---|:---|
| 1 | Đọc SKILL.md trước | Luôn read SKILL.md và customize.toml trước |
| 2 | Chỉ load step-01 | Không load toàn bộ steps cùng lúc |
| 3 | Dừng tại HALT | HALT = blocking gate, không phải warning |
| 4 | Không invent artifact | Dùng Missing/Unknown/Draft/Blocked |
| 5 | Không code trong planning | Planning skills → design artifacts only |
| 6 | Chạy checklist | Checklist pass trước khi Done |
| 7 | Cập nhật workflow status | Sau mỗi artifact quan trọng |
| 8 | Không skip phase | Giải quyết blocker trước khi tiến |
| 9 | Không infer business decision | HALT và chờ human input |
| 10 | Đề xuất, không tự chạy | Recommend next skill, wait for instruction |
