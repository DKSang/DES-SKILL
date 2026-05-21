---
name: des-architecture-review
description: Use when cần rà soát kiến trúc data engineering theo 3 lớp đối nghịch (FDE Alignment, Failure Mode Hunter, Implementation Auditor). Dùng khi cần review ADR, architecture design document, hoặc tech stack decision trước khi đưa vào production.
---

# des-architecture-review

## When To Use

Dùng sau `des-architecture-design` và trước khi bắt đầu implementation. Dùng khi:
- Cần validate architecture document (template 07) trước khi commit công nghệ
- Cần review ADR (Architecture Decision Record) trước khi approve
- Có One-way door decision cần phê duyệt độc lập
- Có stakeholder muốn adversarial review trước khi go-live

## Purpose

Phát hiện các lỗ hổng kiến trúc bằng 3 lớp review song song độc lập, sau đó triage findings thành hành động cụ thể — trước khi tốn chi phí implementation.

## Conventions

- Bare paths (e.g. `steps/step-01-gather-context.md`) resolve từ skill root.
- `{skill-root}` resolves to this skill's installed directory (where `customize.toml` lives).
- `{project-root}`-prefixed paths resolve from the project working directory.
- `{skill-name}` resolves to the skill directory's basename.

## WORKFLOW ARCHITECTURE

Sử dụng **step-file architecture** cho disciplined execution:

- **Micro-file Design**: Mỗi step tự chứa và được follow chính xác.
- **Just-In-Time Loading**: Chỉ load step file hiện tại.
- **Sequential Enforcement**: Hoàn thành steps theo thứ tự, không skip.
- **State Tracking**: Persist progress qua workflow status file.
- **Human-in-the-Loop**: HALT tại decision points và chờ xác nhận.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load nhiều step files cùng lúc.
- 📖 **ALWAYS** đọc toàn bộ step file trước khi thực thi.
- 🚫 **NEVER** skip steps hoặc optimize sequence.
- ⏸️ **ALWAYS** halt tại menu và chờ user input.

## On Activation

### Step 1: Resolve the Workflow Block

Run: `python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow`

**Nếu script fail**, resolve `workflow` block bằng cách đọc theo thứ tự:
1. `{skill-root}/customize.toml` — defaults
2. `{project-root}/_des/custom/{skill-name}.toml` — team overrides
3. `{project-root}/_des/custom/{skill-name}.user.toml` — personal overrides

### Step 2: Load Persistent Facts

Treat every entry in `{workflow.persistent_facts}` as foundational context. Entries prefixed `file:` — load the referenced contents.

### Step 3: Load Config

Load config từ `{project-root}/_des/des/config.yaml` và resolve:
- `project_name`, `user_name`, `communication_language`, `document_output_language`
- Fallback về tiếng Việt nếu config thiếu.

### Step 4: Greet and Begin

Greet `user_name`. Activation complete.

## Next Step

Đọc toàn bộ và follow: `./steps/step-01-gather-context.md`

## Inputs Required

- Architecture Design Document (`07-architecture-design.md` hoặc tương đương).
- ADR(s) liên quan (nếu có).
- Data Maturity Level của tổ chức.
- Team constraints (kinh nghiệm, quy mô).
- Business SLAs từ `03-requirements-and-kpi-catalog.md`.

## 3-Layer Adversarial Review Framework

Mỗi review layer chạy **độc lập**, không ảnh hưởng lẫn nhau:

| Layer | Tên | Vai trò | Tập trung vào |
| :--- | :--- | :--- | :--- |
| **Layer 1** | FDE Alignment Hunter | FDE expert — kiểm tra alignment với fundamentals | Data Maturity mismatch, Over-engineering, Wrong ingestion mode, Missing undercurrents |
| **Layer 2** | Failure Mode Hunter | Senior DE — tìm failure modes và single points of failure | SPOF, DLQ thiếu, retry chưa có, disaster recovery, late data handling |
| **Layer 3** | Implementation Auditor | Pragmatist — kiểm tra tính khả thi với team thực tế | Team skill gap, ops burden, cost overrun, tool complexity |

## Finding Triage Categories

| Category | Định nghĩa | Action |
| :--- | :--- | :--- |
| 🔴 **BLOCKER** | Phải fix trước khi implementation bắt đầu | HALT, revise architecture |
| 🟡 **HIGH** | Nên fix trước go-live; có thể proceed nhưng phải track | ADR update hoặc mitigation plan |
| 🟢 **LOW** | Cải thiện nhỏ, có thể fix trong sprint đầu | Backlog |
| ℹ️ **INFO** | Observation không cần action | Ghi nhận |

## Step-By-Step Process

Refer to individual step files trong `steps/` folder:
1. `steps/step-01-gather-context.md` — Thu thập architecture doc, ADRs, constraints, SLAs.
2. `steps/step-02-run-three-layers.md` — Chạy 3 review layers song song; tổng hợp raw findings.
3. `steps/step-03-triage-and-report.md` — Triage findings, viết review report, present hành động.

## Output File

The output_file path is configured in customize.toml. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/07b-architecture-review.md`

After writing, summarize path and recommend: nếu có BLOCKER → quay lại `des-architecture-design`; nếu không → tiếp tục `des-ingestion-design`.

## Required Outputs

- Finding catalog với layer, category, description, và action đề xuất.
- Danh sách BLOCKER items cần resolve trước implementation.
- Updated ADRs nếu có quyết định thay đổi.
- Architecture health score (số lượng BLOCKER / HIGH / LOW).

## Quality Checklist

- [ ] Cả 3 layers đã được run độc lập.
- [ ] Mỗi finding có category rõ ràng (BLOCKER/HIGH/LOW/INFO).
- [ ] Data Maturity mismatch đã được check.
- [ ] Tất cả One-way door decisions đã được challenge.
- [ ] Six Undercurrents đều được kiểm tra coverage.
- [ ] Team skill gap đã được đánh giá.
- [ ] Cost estimate đã được validate với budget constraint.

## Anti-Patterns to Avoid

| Anti-Pattern | Hệ quả |
| :--- | :--- |
| Review chỉ 1 layer (kiêm tất cả vai trò) | Blind spots từ perspective thiếu |
| Chỉ review tech stack, không review maturity fit | Over-engineer Level 2 team với Level 3 solution |
| Không challenge One-way door decisions | Lock-in không cần thiết |
| Findings không có category | Không biết ưu tiên fix cái gì trước |
| Approve architecture với BLOCKER open | Implementation sẽ fail hoặc phải refactor tốn kém |

## Undercurrent Coverage

| Undercurrent | Layer kiểm tra chính |
| :--- | :--- |
| Security | Layer 2 (SPOF) + Layer 3 (credential management thực tế) |
| Data Management | Layer 1 (catalog, lineage thiếu trong architecture) |
| DataOps | Layer 2 (CI/CD, testing missing) + Layer 3 (ops burden) |
| Data Architecture | Layer 1 (FDE alignment) + Layer 2 (failure modes) |
| Orchestration | Layer 2 (retry, backoff, dead letter) |
| Software Engineering | Layer 3 (team skill gap, code quality) |

## Handoff To The Next Skill

- Nếu có BLOCKER → quay lại `des-architecture-design` để revise, rồi chạy lại review.
- Nếu chỉ có HIGH/LOW → proceed với `des-ingestion-design`, track HIGH items trong ADR backlog.
