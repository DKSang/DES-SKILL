# Repo Structure

Cấu trúc thư mục của DES-SKILL repo.

```text
DES-SKILL/
├── README.md                        # Hướng dẫn chính
├── CHANGELOG.md                     # Lịch sử phiên bản
├── CONTRIBUTING.md                  # Hướng dẫn đóng góp
├── ARTIFACTS.md                     # Map artifact names và paths
├── DES-WORKFLOW.md                  # Workflow reference dạng rút gọn
├── LICENSE
├── package.json
├── install.sh
│
├── docs/                            # Tài liệu hướng dẫn
│   ├── overview.md                  # Tổng quan DES-SKILL
│   ├── workflow.md                  # Workflow đầy đủ
│   ├── skill-catalog.md             # Danh mục 22 main skills
│   ├── support-skills.md            # Danh mục 11 support skills
│   ├── quick-start.md               # Bắt đầu nhanh
│   ├── usage-examples.md            # Ví dụ thực tế
│   ├── repo-structure.md            # File này
│   ├── agent-rules.md               # Quy tắc bắt buộc cho agent
│   ├── contributing.md              # Hướng dẫn đóng góp (docs version)
│   ├── workflow-modes.md            # Các chế độ workflow
│   └── personas.md                  # DES personas
│
├── skills/                          # 22 main lifecycle skills
│   ├── using-des-skill/             # Router / entry point skill
│   ├── des-business-discovery/
│   │   ├── SKILL.md
│   │   ├── customize.toml
│   │   └── steps/
│   │       ├── step-01-*.md
│   │       └── step-02-*.md
│   ├── des-business-questions/
│   ├── des-requirements-and-kpis/
│   ├── des-data-product-definition/
│   ├── des-data-source-assessment/
│   ├── des-domain-modeling/
│   ├── des-architecture-design/
│   ├── des-ingestion-design/
│   ├── des-bronze-layer-design/
│   ├── des-silver-layer-design/
│   ├── des-gold-layer-design/
│   ├── des-data-contracts/
│   ├── des-transformation-design/
│   ├── des-data-quality/
│   ├── des-orchestration-observability/
│   ├── des-semantic-model-design/
│   ├── des-serving-layer-design/
│   ├── des-lineage-metadata-design/
│   ├── des-governance-security-design/
│   ├── des-cost-and-performance-optimization/
│   ├── des-cicd-and-testing/
│   └── des-project-evaluation/
│
├── skills-support/                  # 11 support skills
│   ├── des-create-epic/
│   │   ├── SKILL.md
│   │   ├── customize.toml
│   │   └── steps/
│   ├── des-create-story/
│   ├── des-sprint-planning/
│   ├── des-story-readiness-check/
│   ├── des-dev-task-breakdown/
│   ├── des-implementation-plan/
│   ├── des-code-review/
│   ├── des-release-readiness-review/
│   ├── des-retrospective/
│   ├── des-correct-course/
│   └── des-workflow-status-update/
│
├── templates/                       # Output artifact templates
│   ├── 00-workflow-status-template.md
│   ├── 01-business-discovery-brief-template.md
│   ├── 02-business-question-catalog-template.md
│   ├── ...
│   └── 22-project-evaluation-report-template.md
│
├── checklists/                      # Quality checklists
│   ├── business-discovery-checklist.md
│   ├── requirements-kpis-checklist.md
│   ├── architecture-design-checklist.md
│   ├── implementation-readiness-checklist.md
│   ├── definition-of-done-checklist.md
│   └── ...
│
├── workflows/                       # Workflow reference files
│
├── examples/                        # Example projects
│
├── references/                      # Reference materials
│
├── tools/                           # Validation and scaffolding
│   ├── validate-skills.js
│   ├── validate-artifacts.js
│   └── scaffold-skill.js
│
├── test/                            # Test suite
│   └── *.test.js
│
└── .agents/                         # Runtime artifacts (generated)
    └── des-skill/
        ├── output/                  # Phase artifacts
        │   ├── 01-business-discovery-brief.md
        │   └── ...
        ├── sprint-status/           # Workflow status
        │   └── des-workflow-status.md
        ├── templates/               # Copied templates
        └── checklists/              # Copied checklists
```

---

## Vai trò từng thư mục

### `skills/`

Chứa 22 main lifecycle skills. Mỗi skill là một thư mục có:
- `SKILL.md` — Skill definition, activation protocol, decision matrix
- `customize.toml` — Cấu hình paths, template, checklist
- `steps/` — Step files, load từng cái một, không load hết cùng lúc

### `skills-support/`

Chứa 11 support skills, cùng cấu trúc với `skills/`. Support skills dùng sau khi có đủ main artifacts.

### `templates/`

Template cho output artifacts, được đánh số 00–22 tương ứng với từng phase. Agent dùng template khi tạo artifact mới.

### `checklists/`

Checklist dùng để validate artifact trước khi đánh dấu Done. Mỗi phase có checklist riêng.

### `.agents/des-skill/`

Thư mục runtime, sinh ra khi chạy DES-SKILL. **Không commit** nếu chứa project-specific data.
- `output/` — Phase artifacts đã được tạo
- `sprint-status/des-workflow-status.md` — File trạng thái trung tâm

### `_des-output/` (project-side)

Sau khi install, output artifacts của project được lưu tại:
```text
_des-output/
├── planning-artifacts/    # Main skill outputs (01–22)
└── implementation-artifacts/  # Support skill outputs
```

---

## File quan trọng nhất

| File | Vai trò |
|:---|:---|
| `README.md` | Entry point, overview |
| `ARTIFACTS.md` | Map tên artifact → path chính xác |
| `DES-WORKFLOW.md` | Workflow reference rút gọn |
| `skills/using-des-skill/SKILL.md` | Router skill — entry point cho agent |
| `.agents/des-skill/sprint-status/des-workflow-status.md` | Trạng thái workflow hiện tại |

---

## Conventions

- Skill directories dùng prefix `des-` và kebab-case
- Template files đánh số `NN-name-template.md` (NN từ 00 đến 22)
- Checklist files dùng suffix `-checklist.md`
- Output artifacts không có prefix `template` — chỉ `NN-name.md`
- Step files dùng format `step-NN-short-name.md`
