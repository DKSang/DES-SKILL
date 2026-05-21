# Quick Start

Hướng dẫn bắt đầu nhanh với DES-SKILL.

---

## Bước 1 — Cài đặt

### Dự án mới

```bash
npx @dksang/des-skill init
```

Lệnh `init` tạo ra:

```text
_des/
└── config.toml
_des-output/
├── planning-artifacts/
└── implementation-artifacts/
.agents/
├── skills/
│   ├── using-des-skill/
│   ├── des-business-discovery/
│   └── ...
└── des-skill/
    ├── output/
    ├── sprint-status/
    │   └── des-workflow-status.md
    ├── templates/
    └── checklists/
```

### Dự án đang có

```bash
npx @dksang/des-skill install
```

### Custom output directory

```bash
npx @dksang/des-skill init --dir .agents/skills
```

### Ghi đè khi cần

```bash
npx @dksang/des-skill init --force
```

### Pinned version

```bash
npx @dksang/des-skill@0.1.2 install
```

### Clone thủ công

```bash
git clone https://github.com/DKSang/DES-SKILL.git
bash install.sh
```

---

## Bước 2 — Chọn điểm bắt đầu

### Nếu bắt đầu dự án mới từ đầu

```text
Use DES skill: des-business-discovery

Project context:
[Mô tả dự án của bạn]

Objective:
Tạo Business Discovery Brief cho dự án.

Instructions:
1. Read `skills/des-business-discovery/SKILL.md`.
2. Read `skills/des-business-discovery/customize.toml`.
3. Load only step-01.
4. Stop at every HALT point.
5. Create or update the configured output artifact.
6. Run checklist.
7. Update workflow status.
```

### Nếu đã có design artifacts, muốn tạo backlog

```text
Use DES support skill: des-create-epic

Project context:
Tôi đã có output của 22 main skills cho dự án [tên dự án].

Objective:
Tạo Epic Catalog từ DES design artifacts.

Instructions:
1. Read `skills-support/des-create-epic/SKILL.md`.
2. Read `skills-support/des-create-epic/customize.toml`.
3. Load only step-01.
4. Use DES main artifacts as input.
5. Create `epic-catalog.md`.
6. Recommend `des-create-story` as next step.
```

### Nếu đã có story và muốn lập sprint

```text
Use DES support skill: des-sprint-planning

Project context:
Story catalog đã có. Cần lập sprint plan cho sprint 1.

Instructions:
1. Read `skills-support/des-sprint-planning/SKILL.md`.
2. Read the story catalog.
3. Read the workflow status file.
4. Load only step-01.
5. Create `sprint-plan.md`.
```

### Nếu không biết đang ở phase nào

```text
Use DES-SKILL to assess the current state of this project.
Start with `using-des-skill`.
Detect workflow mode: Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
Find missing or stale artifacts.
Recommend the next safe phase.
```

---

## Bước 3 — Nguyên tắc prompt hiệu quả

Mỗi prompt nên có đủ 4 phần:

```text
[Skill name]
[Project context — tóm tắt dự án]
[Objective — mục tiêu cụ thể của lần gọi này]
[Instructions — chỉ dẫn cụ thể cho agent]
```

**Quan trọng:**
- Luôn yêu cầu agent đọc `SKILL.md` và `customize.toml` trước
- Luôn yêu cầu chỉ load `step-01` trước
- Luôn yêu cầu dừng tại HALT
- Luôn yêu cầu cập nhật workflow status

---

## Bước 4 — Theo dõi trạng thái

File trạng thái trung tâm:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Xem file này để biết:
- Phase nào đã xong
- Sprint hiện tại
- Blocker nào còn mở
- Skill tiếp theo nên chạy

---

## Ví dụ workflow hoàn chỉnh cho project nhỏ

### Tuần 1 — Discovery & Design

```text
Day 1: des-business-discovery
Day 2: des-business-questions
Day 3: des-requirements-and-kpis
Day 4: des-data-product-definition + des-data-source-assessment
Day 5: des-domain-modeling
```

### Tuần 2 — Architecture & Layers

```text
Day 1: des-architecture-design
Day 2: des-ingestion-design
Day 3: des-bronze-layer-design
Day 4: des-silver-layer-design + des-gold-layer-design
Day 5: des-data-contracts + des-data-quality
```

### Tuần 3 — Planning

```text
Day 1: des-cicd-and-testing + des-project-evaluation
Day 2: des-create-epic
Day 3: des-create-story
Day 4: des-sprint-planning
Day 5: des-story-readiness-check + des-dev-task-breakdown
```

### Tuần 4 — Implementation

```text
Day 1-3: Implementation (agent/developer)
Day 4: des-code-review
Day 5: des-release-readiness-review + des-retrospective
```

---

## Tips

- **Không cần chạy tất cả 22 skills** nếu project nhỏ. Dùng luồng rút gọn ở [workflow.md](workflow.md).
- **Các skills độc lập** như `des-cost-and-performance-optimization` hay `des-lineage-metadata-design` có thể chạy sau khi đã có layer design.
- **Support skills lặp lại** theo sprint. Sau retrospective, quay lại `des-sprint-planning` cho sprint tiếp theo.
- **Khi workflow bị mất hướng**, dùng `des-correct-course` để tìm recovery path.
