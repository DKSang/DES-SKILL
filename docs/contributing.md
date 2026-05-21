# Đóng Góp vào DES-SKILL

Cảm ơn bạn quan tâm đến DES-SKILL! Đây là hướng dẫn để đóng góp nhất quán với triết lý của dự án.

---

## Triết lý cốt lõi

> **Sách → Notes tóm tắt bằng lời của mình → Gap analysis → Update skill/template/checklist.**

DES-SKILL không sao chép nội dung sách. Mỗi đóng góp phải là kiến thức được tiêu hóa và áp dụng vào luồng làm việc thực tế của data engineer — không phải trích dẫn hay paraphrase tài liệu gốc.

---

## Các loại đóng góp

### Main skills (`skills/`)

- Nâng cấp step files hiện tại (thêm HALT, bảng quyết định, menu tương tác)
- Tạo thêm step files cho phase chưa đủ
- Cập nhật SKILL.md theo chuẩn mới
- Cập nhật template artifact
- Cập nhật checklist

### Support skills (`skills-support/`)

- Nâng cấp step files cho support skills
- Cải thiện readiness check criteria
- Bổ sung code review checklist items
- Cải thiện release readiness gates

### Tài liệu (`docs/`)

- Bổ sung ví dụ sử dụng thực tế
- Cải thiện hướng dẫn
- Fix lỗi chính tả, rõ nghĩa hơn

### Tooling (`tools/`, `test/`)

- Cải thiện validator
- Thêm test cases
- Tạo scaffold tools mới

---

## Tiêu chuẩn SKILL.md

Mỗi `SKILL.md` phải có các sections sau (theo đúng thứ tự):

1. **YAML frontmatter** — `name` và `description`
2. **`## When To Use`** — Điều kiện kích hoạt, không phải mô tả chung
3. **`## Purpose`** — 1–2 câu, không lặp lại tên skill
4. **`## Conventions`** — Path token definitions
5. **`## WORKFLOW ARCHITECTURE`** — Critical rules + On Activation
6. **`## Next Step`** — Trỏ đến step file đầu tiên
7. **`## Inputs Required`** — Artifact inputs cụ thể (tên file)
8. **`## Decision Matrix`** — Ít nhất 1 ma trận quyết định có bảng
9. **`## Step-By-Step Process`** — Trỏ đến step files trong `steps/`
10. **`## Output File`** — Phải chứa text `output_file` (test kiểm tra)
11. **`## Required Outputs`** — Danh sách artifact outputs
12. **`## Quality Checklist`** — Checkboxes `- [ ]`
13. **`## Anti-Patterns to Avoid`** — Bảng 2 cột
14. **`## Undercurrent Coverage`** — Bảng 6 undercurrents
15. **`## Handoff To The Next Skill`** — Gợi ý skill tiếp theo

---

## Tiêu chuẩn step files

Step files trong `steps/` phải:

- Có **HALT bắt buộc** tại các điểm quyết định nghiệp vụ — không tự ý tiến tới
- Dùng **bảng Markdown** cho phân loại và so sánh — không dùng bullet points chung chung
- Có **menu tương tác** với các tùy chọn `[C] / [R] / [E]` rõ ràng
- Trỏ đến step tiếp theo qua `./step-0X-*.md`
- Không chứa thông tin có thể load từ artifact đã có — load artifact, đừng lặp lại nội dung

### Tiêu chí chất lượng cao cho step

| Tiêu chí | Scaffold | Chất lượng cao |
|:---|:---|:---|
| HALT | Không có | Có HALT tại mọi business decision |
| Bảng quyết định | Không có | Có matrix rõ ràng |
| Menu | Không có | `[C] Continue / [R] Revise / [E] Escalate` |
| Artifact reference | Copy nội dung | Load từ file, không duplicate |
| Checklist | Không có | Có checklist items cụ thể |

---

## Tiêu chuẩn `customize.toml`

```toml
# Workflow customization surface for <skill-name>.

[workflow]
activation_steps_prepend = []
activation_steps_append = []
persistent_facts = [
  "file:{project-root}/**/project-context.md",
]
on_complete = ""

[config]
output_file = "{project-root}/_des-output/planning-artifacts/<NN>-<name>.md"
template_file = "{skill-root}/../../templates/<NN>-<name>-template.md"
checklist_file = "{skill-root}/../../checklists/<name>_checklist.md"
status_file = "{project-root}/_des-output/implementation-artifacts/des-workflow-status.md"
```

---

## Những gì KHÔNG nên đóng góp

| Không nên | Lý do |
|:---|:---|
| Sao chép nội dung từ sách | Vi phạm bản quyền; không phù hợp với triết lý |
| Thêm tool-specific steps (ví dụ: "cách dùng Airflow 2.8") | Tool thay đổi liên tục; skill phải vendor-neutral |
| Step không có HALT | Agent sẽ chạy qua mà không có human oversight |
| Template không có số thứ tự | Templates phải được đánh số 00–22 |
| SKILL.md thiếu `output_file` text | Test sẽ fail |
| Step viết bằng tiếng Anh (ngoại trừ thuật ngữ kỹ thuật) | Standards yêu cầu tiếng Việt |
| Support skill tạo production code | Support skills chỉ tạo artifacts và plans |

---

## Quy trình đóng góp

### 1. Fork và clone

```bash
git clone https://github.com/DKSang/DES-SKILL.git
cd DES-SKILL
npm install
```

### 2. Tạo branch

```bash
git checkout -b feat/upgrade-des-architecture-design-steps
```

Naming convention:
- `feat/` — thêm mới skill, step, template
- `fix/` — sửa lỗi trong step logic hoặc template
- `docs/` — cập nhật documentation
- `chore/` — validation, tooling, CI changes

### 3. Thực hiện thay đổi và validate

```bash
npm test                        # Node.js test suite (phải pass 100%)
node tools/validate-skills.js   # Custom validator (phải PASS)
```

### 4. Commit

```bash
git add .
git commit -m "feat(des-architecture-design): upgrade step-02 with Irreversible HALT and ADR scoring matrix"
```

Commit message format: `<type>(<scope>): <mô tả ngắn>`

### 5. Pull Request

- Tiêu đề PR rõ ràng
- Mô tả: Thay đổi gì? Tại sao? Skill nào được nâng cấp?
- Test pass screenshot (hoặc output từ `npm test`)
- Checklist tự review:
  - [ ] SKILL.md có đủ 15 sections không?
  - [ ] Step files có HALT không?
  - [ ] `output_file` có trong SKILL.md không?
  - [ ] `npm test` pass không?
  - [ ] Không có tool-specific content không?

---

## Liên hệ

Mở GitHub Issue nếu bạn có câu hỏi hoặc đề xuất trước khi viết code.
