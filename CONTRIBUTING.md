# Đóng Góp vào DES-SKILL

Cảm ơn bạn quan tâm đến DES-SKILL! Đây là hướng dẫn để đóng góp một cách nhất quán với triết lý của dự án.

## Triết Lý Cốt Lõi

> **Sách → Notes tóm tắt bằng lời của mình → Gap analysis → Update skill/template/checklist.**

DES-SKILL không sao chép nội dung sách. Mỗi đóng góp phải là kiến thức được tiêu hóa và áp dụng vào luồng làm việc thực tế của data engineer — không phải trích dẫn hay paraphrase tài liệu gốc.

---

## Cấu Trúc Repo

```text
skills/                     # 22 phase skills + 2 meta skills
├── des-business-discovery/
│   ├── SKILL.md            # Skill definition (bắt buộc)
│   ├── customize.toml      # Workflow configuration surface
│   └── steps/              # Step-file architecture
│       ├── step-01-*.md
│       └── step-02-*.md
templates/                  # Numbered output templates (00-23)
checklists/                 # Phase-specific quality checklists
tools/                      # Validation và scaffolding scripts
test/                       # Node.js test suite
docs/                       # Tài liệu nội bộ và backlogs
```

---

## Tiêu Chuẩn SKILL.md

Mỗi `SKILL.md` phải có các sections sau (theo đúng thứ tự):

1. **YAML frontmatter** — `name` và `description`
2. **`## When To Use`** — Điều kiện kích hoạt, không phải mô tả chung
3. **`## Purpose`** — 1-2 câu, không lặp lại tên skill
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

## Tiêu Chuẩn Step Files

Step files trong `steps/` phải:

- **Viết bằng tiếng Việt** (ngoại trừ tên kỹ thuật như `HALT`, `FAIL`, `WARN`)
- Có **HALT bắt buộc** tại các điểm quyết định nghiệp vụ — không tự ý tiến tới
- Dùng **bảng Markdown** cho phân loại và so sánh — không dùng bullet points chung chung
- Có **menu tương tác** với các tùy chọn `[C] / [R] / [E]` rõ ràng
- Trỏ đến step tiếp theo qua `./step-0X-*.md`
- Không chứa thông tin có thể load từ artifact đã có — load artifact, đừng lặp lại nội dung

### Tiêu chí "Chất Lượng Cao" cho Step

Xem [`docs/step-upgrade-backlog.md`](docs/step-upgrade-backlog.md) để hiểu tiêu chí phân biệt step chất lượng cao vs. scaffold.

---

## Tiêu Chuẩn customize.toml

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

## Quy Trình Đóng Góp

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
npm test                    # Node.js test suite (phải pass 100%)
node tools/validate-skills.js   # Custom validator (phải PASS)
```

### 4. Commit

```bash
git add .
git commit -m "feat(des-architecture-design): upgrade step-02 with Irreversible HALT and ADR scoring matrix"
```

Commit message format: `<type>(<scope>): <description tiếng Anh ngắn>`

### 5. Pull Request

- Tiêu đề PR rõ ràng
- Mô tả: Thay đổi gì? Tại sao? Skill nào được nâng cấp?
- Test pass screenshot (hoặc output từ `npm test`)

---

## Những Gì KHÔNG Nên Đóng Góp

| Không nên | Lý do |
| :--- | :--- |
| Sao chép nội dung từ sách | Vi phạm bản quyền; không phù hợp với triết lý "tiêu hóa" knowledge |
| Thêm tool-specific steps (ví dụ: "cách dùng Airflow 2.8") | Tool thay đổi liên tục; skill phải vendor-neutral |
| Step không có HALT | Agent sẽ chạy qua mà không có human oversight |
| Template không có số thứ tự | Templates phải được đánh số 00-23 |
| SKILL.md thiếu `output_file` text | Test sẽ fail |
| Step viết bằng tiếng Anh (ngoại trừ thuật ngữ kỹ thuật) | Standards yêu cầu tiếng Việt |

---

## Liên Hệ

Mở GitHub Issue nếu bạn có câu hỏi hoặc đề xuất trước khi viết code.
