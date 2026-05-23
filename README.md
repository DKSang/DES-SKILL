# DES-SKILL

[![npm](https://img.shields.io/npm/v/@dksang/des-skill?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@dksang/des-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-8%2F8%20pass-22c55e)](test/)
[![Main Skills](https://img.shields.io/badge/main%20skills-22-7c3aed)](skills/)
[![Support Skills](https://img.shields.io/badge/support%20skills-11-0ea5e9)](skills-support/)

**DES-SKILL** là bộ skill dành cho các AI agent như Codex, ChatGPT, Cursor, Claude Code hoặc các coding/data agent khác để hỗ trợ triển khai dự án **Data Engineering** theo quy trình có cấu trúc.

DES-SKILL được thiết kế theo phong cách workflow giống **BMAD-Method**, nhưng tập trung riêng cho vòng đời dự án data engineering. Mục tiêu là giúp agent không chỉ trả lời rời rạc, mà có thể làm việc theo từng phase, tạo artifact rõ ràng, kiểm tra checklist, cập nhật trạng thái workflow và chuyển tiếp sang bước phù hợp.

> **DES-SKILL không chỉ là bộ skill thiết kế data engineering.**
> **DES-SKILL là workflow system kiểu BMAD cho data engineering end-to-end.**

---

## 1. DES-SKILL giải quyết vấn đề gì?

Trong nhiều dự án data engineering, agent thường mắc các lỗi như:

- Nhảy vào viết code quá sớm
- Chưa rõ business question nhưng đã thiết kế schema
- Chưa rõ KPI nhưng đã tạo Gold layer
- Chưa rõ source nhưng đã viết pipeline
- Thiếu data contract, data quality rule, governance/security
- Thiếu CI/CD và release checklist
- Không biết workflow đang ở phase nào
- Không có epic/story/task rõ ràng để triển khai

DES-SKILL giải quyết bằng cách chia workflow thành **22 main skills + 12 support skills**.

---

## 2. Hai nhóm skill chính

### 2.1. Main skills — Thiết kế vòng đời data engineering

Main skills dùng để thiết kế toàn bộ vòng đời data engineering project, từ business problem đến project evaluation.

```text
Business → Requirements → Data Product → Source → Domain
→ Architecture → Ingestion → Bronze → Silver → Gold
→ Contract → Transformation → Quality → Orchestration
→ Semantic → Serving → Lineage → Governance
→ Cost/Performance → CI/CD → Evaluation
```

Main skills tạo ra các artifact thiết kế:

```text
01-business-discovery-brief.md
02-business-question-catalog.md
03-requirements-and-kpi-catalog.md
...
22-project-evaluation-report.md
```

### 2.2. Support skills — Triển khai thực tế

Support skills dùng sau khi đã có artifact thiết kế để chuyển sang backlog, sprint, task, review và release.

```text
des-create-epics
→ des-create-stories
→ des-sprint-planning
→ des-story-readiness-check
→ des-dev-task-breakdown
→ des-implementation-plan
→ des-code-review
→ des-release-readiness-review
→ des-retrospective
→ des-correct-course
→ des-workflow-status-update
```

Support skills tạo ra các artifact:

```text
epic-catalog.md
story-catalog.md
sprint-plan.md
story-readiness-report.md
dev-task-breakdown.md
implementation-plan.md
code-review-report.md
release-readiness-report.md
retrospective-report.md
correct-course-plan.md
des-workflow-status.md
```

---

## 3. Workflow tổng quan

```text
22 DES Main Skills (phases 01–22)
           ↓
  des-create-epics
           ↓
  des-create-stories
           ↓
  des-sprint-planning
           ↓
  des-story-readiness-check
           ↓
  des-dev-task-breakdown
           ↓
  des-implementation-plan
           ↓
  Implementation by agent/developer
           ↓
  des-code-review
           ↓
  des-release-readiness-review
           ↓
  des-retrospective
           ↓
  des-correct-course
           ↓
  des-workflow-status-update
```

---

## 4. Khi nào dùng DES-SKILL?

Dùng DES-SKILL khi bạn muốn:

- Xây dựng data engineering project từ đầu
- Thiết kế data platform có Bronze/Silver/Gold
- Chuẩn hóa requirement, KPI, data product
- Tạo data contracts và data quality rules
- Thiết kế orchestration, observability, governance, CI/CD
- Chuyển design thành epic/story/task có thể triển khai
- Dùng Codex hoặc coding agent triển khai theo story
- Review code theo acceptance criteria
- Kiểm tra release readiness
- Giữ trạng thái workflow giống BMAD

---

## 5. Cách sử dụng nhanh

### Cài đặt

```bash
# Full project scaffold
npx @dksang/des-skill

# Full project scaffold (explicit)
npx @dksang/des-skill init

# Skill pack only (existing project)
npx @dksang/des-skill install

# Pinned version
npx @dksang/des-skill@0.2.0
```

### Prompt mẫu — Main skill

```text
Use DES skill: des-business-discovery

Project context:
Tôi đang xây dựng dự án data engineering cho climate-smart agriculture.

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

### Prompt mẫu — Support skill

```text
Use DES support skill: des-create-epics

Project context:
Tôi đã có output của 22 main skills.

Objective:
Tạo Epic Catalog để chuẩn bị triển khai dự án.

Instructions:
1. Read `skills-support/des-create-epics/SKILL.md`.
2. Read `skills-support/des-create-epics/customize.toml`.
3. Load only step-01.
4. Use DES main artifacts as input.
5. Do not create stories.
6. Create `epic-catalog.md`.
7. Recommend `des-create-stories`.
```

---

## 6. Danh mục Main Skills

| STT | Skill | Output Artifact |
|---:|:---|:---|
| 01 | `des-business-discovery` | `01-business-discovery-brief.md` |
| 02 | `des-business-questions` | `02-business-question-catalog.md` |
| 03 | `des-requirements-and-kpis` | `03-requirements-and-kpi-catalog.md` |
| 04 | `des-data-product-definition` | `04-data-product-specification.md` |
| 05 | `des-data-source-assessment` | `05-data-source-inventory.md` |
| 06 | `des-domain-modeling` | `06-conceptual-domain-model.md` |
| 07 | `des-architecture-design` | `07-architecture-decision-record.md` |
| 08 | `des-ingestion-design` | `08-ingestion-specification.md` |
| 09 | `des-bronze-layer-design` | `09-bronze-layer-specification.md` |
| 10 | `des-silver-layer-design` | `10-silver-layer-specification.md` |
| 11 | `des-gold-layer-design` | `11-gold-layer-specification.md` |
| 12 | `des-data-contracts` | `12-data-contract-specification.md` |
| 13 | `des-transformation-design` | `13-transformation-specification.md` |
| 14 | `des-data-quality` | `14-data-quality-specification.md` |
| 15 | `des-orchestration-observability` | `15-orchestration-observability-specification.md` |
| 16 | `des-semantic-model-design` | `16-semantic-model-specification.md` |
| 17 | `des-serving-layer-design` | `17-serving-layer-specification.md` |
| 18 | `des-lineage-metadata-design` | `18-lineage-metadata-specification.md` |
| 19 | `des-governance-security-design` | `19-governance-security-specification.md` |
| 20 | `des-cost-and-performance-optimization` | `20-cost-performance-optimization-specification.md` |
| 21 | `des-cicd-and-testing` | `21-cicd-testing-specification.md` |
| 22 | `des-project-evaluation` | `22-project-evaluation-report.md` |

---

## 7. Danh mục Support Skills

| STT | Skill | Mục tiêu | Output Artifact |
|---:|:---|:---|:---|
| 01 | `des-create-epic` | Tạo epic từ 22 artifact chính | `epic-catalog.md` |
| 02 | `des-create-story` | Tạo story từ epic và DES artifacts | `story-catalog.md` |
| 03 | `des-sprint-planning` | Chọn story cho sprint | `sprint-plan.md` |
| 04 | `des-story-readiness-check` | Kiểm tra story đã ready chưa | `story-readiness-report.md` |
| 05 | `des-dev-task-breakdown` | Chia story thành dev task | `dev-task-breakdown.md` |
| 06 | `des-implementation-plan` | Sắp xếp trình tự triển khai | `implementation-plan.md` |
| 07 | `des-code-review` | Review code so với story/task/artifact | `code-review-report.md` |
| 08 | `des-release-readiness-review` | Kiểm tra sẵn sàng release/handoff/demo | `release-readiness-report.md` |
| 09 | `des-retrospective` | Tổng kết sprint/release cycle | `retrospective-report.md` |
| 10 | `des-correct-course` | Điều hướng khi workflow bị lệch | `correct-course-plan.md` |
| 11 | `des-workflow-status-update` | Cập nhật trạng thái workflow | `des-workflow-status.md` |
| 12 | `des-wise` | Help users choose the right DES skill, understand workflow position, and get next-step recommendations | Direct response or `des-wise-recommendation.md` |

---

## DES Learning Skills

DES-SKILL also supports a learning layer.

Learning skills help users understand the Data Engineering concepts behind DES artifacts. Instead of only producing project documentation, DES-SKILL can explain why each artifact exists, which lifecycle concept it teaches, which decisions it forces, and what mistakes it helps prevent.

The learning layer is guided by:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/
```

### Learning Skills Catalog

| Skill | Purpose | Output |
|---|---|---|
| `des-explain-artifact` | Explain a DES artifact as a learning object | `*-learning-notes.md` |
| `des-artifact-quiz` | Generate a quiz from an artifact or learning notes | `*-artifact-quiz.md` |
| `des-learning-path` | Build a structured learning path across 22 DES phases | `des-learning-path.md` |
| `des-gap-teacher` | Diagnose the user's learning gaps from an artifact, quiz answer, or explanation | `*-learning-gap-report.md` |
| `des-socratic-coach` | Teach a DES concept through guided Socratic questions | `*-socratic-coaching-session.md` |
| `des-learning-status-update` | Update phase-by-phase learning progress and readiness | `des-learning-status.md` |
| `des-learning-review` | Summarize learning progress, weak concepts, gaps, and next actions | `des-learning-review.md` |

### Example — Generate Quiz

```text
Use DES learning skill: des-artifact-quiz

Artifact:
.agents/des-skill/output/08-ingestion-specification.md

Objective:
Create a quiz to check whether I understand ingestion design.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-artifact-quiz/SKILL.md.
4. Load only step-01.
5. Generate concept-check, applied, trade-off, and common-mistake questions.
6. Include answer key and explanations.
```

### Example — Build Learning Path

```text
Use DES learning skill: des-learning-path

Objective:
Create a project-based Data Engineering learning path from the 22 DES phases.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-learning-path/SKILL.md.
4. Scan available DES artifacts.
5. Group phases into learning modules.
6. Recommend next learning actions.
```

### Example — Diagnose Learning Gaps

```text
Use DES learning skill: des-gap-teacher

Context:
I answered the quiz for Phase 10 Silver Layer.

Objective:
Diagnose what I understand correctly, what I misunderstand, and what I should review before moving to Gold Layer.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-gap-teacher/SKILL.md.
4. Load only step-01.
5. Diagnose gaps from my answers.
6. Recommend study actions and artifact corrections.
```

### Example — Socratic Coaching

```text
Use DES learning skill: des-socratic-coach

Topic:
Silver Layer vs Gold Layer

Objective:
Teach me through questions, one question at a time.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-socratic-coach/SKILL.md.
4. Load only step-01.
5. Use interactive Socratic mode.
6. Do not give the final answer too early.
```

## DES Wise Help

`des-wise` is the DES-SKILL help and routing assistant.

Use it when you are not sure which skill to run next.

Example:

```text
Use DES skill: des-wise

Objective:
Tôi không chắc nên dùng skill nào tiếp theo.

Context:
Tôi đã có Business Discovery và Data Source Inventory, nhưng chưa biết nên thiết kế architecture trước hay ingestion trước.

Instructions:
1. Read skills-support/des-wise/SKILL.md.
2. Read DES-WORKFLOW.md.
3. Inspect workflow status if available.
4. Recommend one next skill.
5. Explain why.
6. Provide a copy-paste prompt.
```

### Example — Update Learning Status

```text
Use DES learning skill: des-learning-status-update

Objective:
Cập nhật trạng thái học tập của tôi qua các DES phases.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-learning-status-update/SKILL.md.
4. Load only step-01.
5. Scan .agents/des-skill/output and .agents/des-skill/output/learning.
6. Create or update .agents/des-skill/learning-status/des-learning-status.md.
```

### Example — Review Learning Progress

```text
Use DES learning skill: des-learning-review

Objective:
Tổng kết tôi đã học đến đâu, còn yếu concept nào, và nên học gì tiếp.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read .agents/des-skill/learning-status/des-learning-status.md.
4. Read skills-learning/des-learning-review/SKILL.md.
5. Load only step-01.
6. Summarize progress, weak concepts, gaps, and next actions.
```

---

## 8. Nguyên tắc hoạt động của agent

Mỗi skill trong DES-SKILL tuân theo nguyên tắc:

1. Đọc `SKILL.md`
2. Đọc `customize.toml`
3. Chỉ load `step-01` trước
4. Không load step sau khi chưa được hướng dẫn
5. Dừng tại mọi `HALT`
6. Tạo hoặc cập nhật artifact
7. Chạy checklist
8. Cập nhật workflow status
9. Đề xuất skill tiếp theo

> **Code implements approved data artifacts. Code does not replace discovery, requirements, architecture, contracts, or quality design.**

---

## 9. Trạng thái workflow

DES-SKILL sử dụng file trạng thái trung tâm:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Quy trình hỗ trợ bốn chế độ workflow thích ứng (workflow modes):
- **Quick Fix**: Sửa đổi nhỏ, sửa tài liệu, thay đổi cấu hình hoặc dọn dẹp ít rủi ro.
- **Standard Feature**: Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model hoặc cập nhật hợp đồng/DQ.
- **Enterprise Data Product**: Sản phẩm dữ liệu sản xuất mới, dữ liệu được quản lý, hoặc quyết định kiến trúc không thể đảo ngược.
- **Correct Course**: Điều chỉnh khi artifact thực tế bị lệch so với thực tế repo, phát hiện qua review hoặc sự cố.

Hệ thống cũng sử dụng các vai trò (personas) khác nhau để thực hiện các nhiệm vụ cụ thể, xem thêm chi tiết tại [docs/personas.md](docs/personas.md).

File này giúp agent biết:

- Phase nào đã xong
- Support skill nào đã chạy
- Story nào ready
- Sprint nào đang active
- Blocker nào còn mở
- Release có sẵn sàng không
- Skill tiếp theo nên chạy là gì

---

## 10. Cấu trúc repo

```text
DES-SKILL/
├── README.md
├── docs/
│   ├── overview.md
│   ├── workflow.md
│   ├── skill-catalog.md
│   ├── support-skills.md
│   ├── quick-start.md
│   ├── usage-examples.md
│   ├── repo-structure.md
│   ├── agent-rules.md
│   └── contributing.md
├── skills/
│   ├── des-business-discovery/
│   ├── des-business-questions/
│   └── ...  (22 main lifecycle skills)
├── skills-support/
│   ├── des-create-epic/
│   ├── des-create-story/
│   └── ...  (12 support skills)
├── templates/
├── checklists/
└── .agents/des-skill/
    ├── output/
    ├── sprint-status/
    │   └── des-workflow-status.md
    └── templates/
```

---

## 11. Ai nên dùng repo này?

Repo này phù hợp cho:

- Sinh viên học data engineering
- Data engineer muốn chuẩn hóa workflow dự án
- Người xây dựng portfolio project
- Team nhỏ muốn dùng AI agent hỗ trợ phân tích và triển khai
- Dự án Microsoft Fabric, Databricks, dbt, DuckDB, lakehouse, ELT/ETL
- Người muốn xây dựng quy trình giống BMAD nhưng cho data engineering

---

## 12. Validation

```bash
npm test
npm run validate:skills
node tools/validate-artifacts.js
```

---

## 13. Contributing

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết tiêu chuẩn skill, tiêu chuẩn step, quy trình validation và hướng dẫn pull request.

---

## 14. Changelog

Xem [CHANGELOG.md](CHANGELOG.md) để biết lịch sử phát hành.

---

## 15. License

MIT License. Xem [LICENSE](LICENSE).
