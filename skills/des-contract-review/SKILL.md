---
name: des-contract-review
description: Use when cần rà soát data contracts theo 3 lớp đối nghịch (Schema Auditor, SLA Challenger, Consumer Safety Hunter). Dùng khi cần review data contract trước khi producer và consumer ký kết, hoặc khi contract hiện tại cần được re-validate sau schema change.
---

# des-contract-review

## When To Use

Dùng sau `des-data-contracts` và trước khi contract được ký kết (hoặc trước khi go-live). Dùng khi:
- Cần review data contract document (template 12) trước khi producer team commit
- Schema đã thay đổi và cần validate lại contract
- Consumer team muốn adversarial review trước khi phụ thuộc vào contract
- Có SLA mới cần backward-compatibility check với consumer hiện tại

## Purpose

Phát hiện lỗ hổng trong data contracts (schema gaps, SLA không khả thi, consumer không được bảo vệ đầy đủ) trước khi contract được ký kết — vì breaking contract sau khi ký = production incident.

## Conventions

- Bare paths (e.g. `steps/step-01-gather-contract.md`) resolve từ skill root.
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

Đọc toàn bộ và follow: `./steps/step-01-gather-contract.md`

## Inputs Required

- Data Contract document (`12-data-contracts.md` hoặc tương đương).
- Source Assessment (`05-data-source-assessment.md`) để cross-check SLAs.
- KPI Catalog (`03-requirements-and-kpi-catalog.md`) để cross-check freshness requirements.
- Bronze Layer Design (`09-bronze-layer-design.md`) nếu có.

## 3-Layer Adversarial Contract Review Framework

| Layer | Tên | Vai trò | Tập trung vào |
| :--- | :--- | :--- | :--- |
| **Layer 1** | Schema Auditor | Data modeler — kiểm tra schema completeness | Column types, PII flag, nullable policy, schema evolution plan |
| **Layer 2** | SLA Challenger | Infrastructure expert — kiểm tra SLA có thực tế không | Latency khả thi, volume estimate, uptime khả thi, penalty nếu vi phạm |
| **Layer 3** | Consumer Safety Hunter | Consumer advocate — tìm điểm contract không bảo vệ được consumer | Breaking change policy, backward compatibility, versioning, rollback plan |

## Finding Triage Categories

| Category | Định nghĩa | Action |
| :--- | :--- | :--- |
| 🔴 **BLOCKER** | Contract không thể ký — sẽ gây production failure | HALT, revise contract |
| 🟡 **HIGH** | Contract có thể ký nhưng cần addendum hoặc mitigation | Ghi nhận, track, addendum |
| 🟢 **LOW** | Cải thiện nhỏ cho độ rõ ràng | Backlog revision |
| ℹ️ **INFO** | Observation cho producer/consumer awareness | Ghi nhận |

## Step-By-Step Process

1. `steps/step-01-gather-contract.md` — Thu thập contract document, xác định producer/consumer, load context.
2. `steps/step-02-run-three-layers.md` — Chạy 3 review layers; ghi raw findings.
3. `steps/step-03-triage-and-report.md` — Triage findings, viết contract review report, đề xuất action.

## Output File

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/12b-contract-review.md`

After writing, summarize path. Nếu có BLOCKER → quay lại `des-data-contracts` để revise. Nếu không → contract ready for signing.

## Required Outputs

- Finding catalog với layer, category, description, action.
- Contract health score.
- Danh sách BLOCKER items nếu có.
- Recommended addendums nếu có HIGH items.

## Quality Checklist

- [ ] Cả 3 layers đã được run độc lập.
- [ ] Tất cả PII columns đã được flag và có masking policy.
- [ ] Schema evolution plan đã được kiểm tra (backward/forward compatible).
- [ ] SLA freshness đã được cross-check với infrastructure khả năng thực tế.
- [ ] Breaking change notification window đã được định nghĩa.
- [ ] Versioning strategy (v1, v2, ...) đã có.
- [ ] Consumer có rollback plan nếu producer vi phạm SLA không?

## Anti-Patterns to Avoid

| Anti-Pattern | Hệ quả |
| :--- | :--- |
| Không define nullable policy per column | Consumer sẽ không biết phải handle null như thế nào |
| SLA quá tight so với infrastructure khả năng | Producer vi phạm ngay từ ngày đầu |
| Không có schema version (v1, v2) | Breaking change = production incident không thể roll back |
| Không có penalty clause cho SLA violation | Producer không có động lực maintain SLA |
| PII columns không được flag | Audit, compliance failure |
| Contract không có expiry / review date | Contract stale, schema drift không được phát hiện |

## Undercurrent Coverage

| Undercurrent | Layer kiểm tra chính |
| :--- | :--- |
| Security | Layer 1 (PII flag) + Layer 3 (consumer access control) |
| Data Management | Layer 1 (schema docs, lineage) + Layer 2 (catalog registration) |
| DataOps | Layer 2 (SLA monitoring, alerting) + Layer 3 (breaking change CI/CD) |
| Data Architecture | Layer 2 (volume + performance SLA realistic) |
| Orchestration | Layer 2 (SLA freshness vs. pipeline schedule alignment) |
| Software Engineering | Layer 3 (versioning, backward compatibility implementation) |

## Handoff To The Next Skill

- Nếu có BLOCKER → quay lại `des-data-contracts` để revise contract, rồi chạy lại review.
- Nếu chỉ có HIGH → ghi addendum, proceed với `des-transformation-design`.
- Nếu APPROVED → contract ký kết, proceed với `des-data-quality`.
