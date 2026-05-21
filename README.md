# DES-SKILL

[![npm](https://img.shields.io/npm/v/@dksang/des-skill?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@dksang/des-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-8%2F8%20pass-22c55e)](test/)
[![Skills](https://img.shields.io/badge/skills-32-7c3aed)](skills/)
[![Step Files](https://img.shields.io/badge/step%20files-89-0ea5e9)](skills/)

**DES-SKILL gives data-engineering agents a delivery methodology, not just a bag of prompts.**

DES-SKILL is a vendor-neutral Agent Skills framework for end-to-end Data Engineering projects. It helps agents slow down, understand the business problem, define measurable outcomes, assess sources, design architecture, create reviewable artifacts, and only then implement pipelines, models, contracts, tests, orchestration, serving layers, and release checks.

If BMAD Method brings structured product/software planning to agents, and Superpowers brings disciplined coding workflows to agents, DES-SKILL brings that same kind of structure to **production-grade data engineering delivery**.

## Quickstart

For a new project:

```bash
npx @dksang/des-skill init
```

<<<<<<< HEAD
Tùy chỉnh thư mục lưu trữ các skill cục bộ của dự án:

```bash
npx @dksang/des-skill init --dir .agents/skills
```

Ghi đè lên các file cấu trúc hiện có khi an toàn:

```bash
npx @dksang/des-skill init --force
```

Lệnh `init` sẽ tạo ra:

```text
_des/
└── config.toml
_des-output/
├── planning-artifacts/
└── implementation-artifacts/
docs/
.agents/
├── skills/
│   ├── using-des-skill/
│   ├── des-business-discovery/
│   │   ├── SKILL.md
│   │   ├── customize.toml
│   │   └── steps/
│   └── ...
└── des-skill/
    ├── output/
    ├── planning/
    ├── sprint-status/
    │   └── des-workflow-status.md
    ├── templates/
    ├── checklists/
    ├── docs/
    ├── workflows/
    ├── examples/
    ├── DES-WORKFLOW.md
    └── ARTIFACTS.md
```

### Lựa chọn 2: Chỉ cài đặt gói skill (Skill pack install only)

Sử dụng lệnh này khi bạn chỉ muốn cài đặt hoặc cập nhật các skill DES-SKILL và không gian làm việc hỗ trợ `.agents/des-skill`:
=======
For an existing project:
>>>>>>> a37cba5aeec2e46ac5729ee942f3ed6f9195af7d

```bash
npx @dksang/des-skill install
```

Then tell your agent:

```text
Use DES-SKILL for this data engineering project.
Start with using-des-skill.
Detect the current workflow mode and phase.
Check required upstream artifacts.
Load only the next required step file.
Do not write code until the business context, KPIs, sources, architecture, and quality expectations are clear.
```

The agent should begin from `skills/using-des-skill/SKILL.md`, read `DES-WORKFLOW.md`, check `ARTIFACTS.md`, inspect the workflow status file when present, and produce the next reviewable artifact.

## Why DES-SKILL exists

Most AI agents are eager to write code. That is dangerous for data engineering.

A real data platform fails when the agent guesses the business question, KPI formula, table grain, source authority, freshness requirement, data quality rule, contract owner, or release readiness.

DES-SKILL turns those decisions into explicit workflow checkpoints. The agent creates artifacts, stops at important decisions, runs checklists, tracks status, and asks for human approval when the decision is not safe to infer.

## How it works

DES-SKILL starts when your agent recognizes that it is working on a data project.

Instead of jumping into notebooks, SQL, dbt models, or pipeline code, the agent steps back and asks what the data product is meant to achieve. It moves through controlled phases, produces small reviewable artifacts, and uses human-in-the-loop `HALT` points whenever a business or architecture decision cannot be safely guessed.

Once planning artifacts are approved, DES-SKILL can switch into implementation support: brainstorm a change, write an implementation plan, build from approved artifacts, review the work, verify delivery with evidence, and capture retrospective notes.

> **Code implements approved data artifacts. Code does not replace discovery, requirements, architecture, contracts, or quality design.**

## Basic workflow

DES-SKILL has a 22-phase lifecycle plus optional support skills for implementation.

1. **Business discovery** — clarify problem, stakeholders, decisions, constraints, and success criteria.
2. **Business questions** — turn vague needs into explicit analytical and operational questions.
3. **Requirements and KPIs** — define metrics, owners, grain, formulas, acceptance criteria, and conflicts.
4. **Data product definition** — define consumers, use cases, freshness, service expectations, and outputs.
5. **Source assessment** — inventory sources, ownership, reliability, access, latency, quality, and risks.
6. **Domain modeling** — identify entities, relationships, grain, events, and business vocabulary.
7. **Architecture design** — choose platform pattern, layers, compute, storage, and trade-offs.
8. **Ingestion design** — define batch, streaming, CDC, API, file ingestion, and failure handling.
9. **Bronze layer design** — preserve raw data with traceability, metadata, and replay strategy.
10. **Silver layer design** — standardize, clean, deduplicate, conform, and validate data.
11. **Gold layer design** — model curated marts, facts, dimensions, aggregates, and outputs.
12. **Data contracts** — define schema, ownership, compatibility, change policy, and breaking-change rules.
13. **Transformation design** — specify transformation logic and test strategy.
14. **Data quality** — define rules, severity, thresholds, monitoring, and remediation ownership.
15. **Orchestration and observability** — define schedules, dependencies, retries, alerts, and run evidence.
16. **Semantic model design** — define metrics, dimensions, relationships, and BI behavior.
17. **Serving layer design** — define how data is exposed to BI, apps, APIs, files, or downstream systems.
18. **Lineage and metadata** — record traceability, owners, classifications, and discoverability.
19. **Governance and security** — define access, privacy, compliance, retention, masking, and gates.
20. **Cost and performance optimization** — analyze cost, query patterns, partitioning, and scaling.
21. **CI/CD and testing** — define repository structure, checks, deployment path, and tests.
22. **Project evaluation** — verify release readiness, evidence, risks, decisions, and handover state.

**The agent checks the workflow before moving forward. These are mandatory delivery gates, not suggestions.**

## Workflow modes

| Mode | Use when | Behavior |
| --- | --- | --- |
| `Quick Fix` | Small bounded change | Finds the minimum safe artifact and verification path. |
| `Standard Feature` | Normal feature or pipeline change | Uses relevant planning, design, build, review, and verify steps. |
| `Enterprise Data Product` | New or high-impact data product | Runs the full lifecycle with stronger HALT gates and evidence. |
| `Correct Course` | Existing work is wrong, unclear, or blocked | Reassesses artifacts and routes to the right recovery phase. |

See [docs/workflow-modes.md](docs/workflow-modes.md).

## What makes DES-SKILL different

| Without DES-SKILL | With DES-SKILL |
| --- | --- |
| Agent starts from code. | Agent starts from business context and decisions. |
| KPI definitions are guessed. | KPI formulas, grain, owners, and conflicts are captured. |
| Source schemas drive the model. | Source assessment and domain modeling drive the target design. |
| Freshness is vague. | SLA is classified and tied to delivery consequences. |
| Quality checks are added late. | Quality rules and evidence are designed before release. |
| Review happens after implementation. | Every phase creates reviewable artifacts and checklist evidence. |
| Project state is lost between sessions. | Status is tracked in `.agents/des-skill/sprint-status/des-workflow-status.md`. |

## Installation

### Full project scaffold

```bash
npx @dksang/des-skill init
npx @dksang/des-skill init --dir .agents/skills
npx @dksang/des-skill init --force
```

### Skill pack only

```bash
npx @dksang/des-skill install
npx @dksang/des-skill install --dir .agents/skills
npx @dksang/des-skill install --force
```

<<<<<<< HEAD
Lệnh `install` sẽ tạo mới hoặc cập nhật:

```text
.agents/
├── skills/
│   ├── using-des-skill/
│   ├── des-business-discovery/
│   ├── des-ingestion-design/
│   └── ...
└── des-skill/
    ├── output/
    ├── planning/
    ├── sprint-status/
    │   └── des-workflow-status.md
    ├── templates/
    ├── checklists/
    ├── docs/
    ├── workflows/
    ├── examples/
    ├── DES-WORKFLOW.md
    └── ARTIFACTS.md
```

### Lựa chọn 3: Sử dụng GitHub CLI

Sử dụng GitHub CLI khi bạn muốn cài đặt từng skill một:
=======
### GitHub CLI
>>>>>>> a37cba5aeec2e46ac5729ee942f3ed6f9195af7d

```bash
gh skill install DKSang/DES-SKILL using-des-skill
gh skill install DKSang/DES-SKILL
```

### Manual install

```bash
git clone https://github.com/DKSang/DES-SKILL.git
cd DES-SKILL
bash install.sh
```

Project-local manual install:

```bash
bash install.sh .agents/skills
```

Restart your agent or refresh its skill registry after installation.

## Quick start prompts

### New data engineering project

```text
I want to use DES-SKILL for a new data engineering project.

Project idea:
[describe the project]

Start with using-des-skill.
Detect the correct workflow mode.
Read DES-WORKFLOW.md, ARTIFACTS.md, and the workflow status file if it exists.
Check required upstream artifacts before selecting a phase skill.
Load only one step file at a time.
Create the required artifact from the template.
Run the configured checklist before marking anything Done.
Update .agents/des-skill/sprint-status/des-workflow-status.md.
Do not write code until the business context, KPIs, sources, architecture, and quality expectations are clear.
```

### Existing project or unclear state

```text
Use DES-SKILL to assess the current state of this data engineering project.
Start with using-des-skill.
Detect whether this is Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
Find missing or stale artifacts.
Recommend the next safe phase and explain what must be reviewed before implementation continues.
```

## Step-file architecture

Each skill uses step files so the agent does not load too much context or skip decisions.

```text
skill/
├── SKILL.md
├── customize.toml
└── steps/
    ├── step-01-*.md
    ├── step-02-*.md
    └── step-03-*.md
```

Rules for agents:

- **Never** load all step files at once.
- **Always** start from `SKILL.md` and follow the activation protocol.
- **Always** stop at `HALT` points and wait for the user when a decision is required.
- **Always** run the configured checklist before marking an artifact as Done.
- **Never** continue past unresolved KPI conflicts, unsigned contracts, blocked checklist items, or missing verification evidence.

## Project state and artifacts

| Item | Path |
| --- | --- |
| Router skill | `skills/using-des-skill/SKILL.md` |
| Workflow map | `DES-WORKFLOW.md` |
| Artifact map | `ARTIFACTS.md` |
| Workflow status | `.agents/des-skill/sprint-status/des-workflow-status.md` |
| Status template | `.agents/des-skill/templates/00-workflow-status-template.md` |
| Phase artifacts | `.agents/des-skill/output/` |
| Planning artifacts | `_des-output/planning-artifacts/` |
| Implementation artifacts | `_des-output/implementation-artifacts/` |

When in doubt, follow `ARTIFACTS.md` for exact artifact names and paths.

## Skills library

### Core lifecycle skills

| Skill | Main artifact |
| --- | --- |
| `using-des-skill` | Workflow routing and status coordination |
| `de-business-discovery` | Business discovery brief |
| `de-business-questions` | Business question catalog |
| `de-requirements-and-kpis` | Requirements and KPI catalog |
| `de-data-product-definition` | Data product specification |
| `de-data-source-assessment` | Data source inventory |
| `de-domain-modeling` | Conceptual domain model |
| `de-architecture-design` | Architecture decision record |
| `de-ingestion-design` | Ingestion specification |
| `de-bronze-layer-design` | Bronze table specifications |
| `de-silver-layer-design` | Silver table specifications |
| `de-gold-layer-design` | Gold table specifications |
| `de-data-contracts` | Data contracts |
| `de-transformation-design` | Transformation design |
| `de-data-quality` | Data quality rule catalog |
| `de-orchestration-and-observability` | Orchestration and observability specification |
| `de-semantic-model-design` | Semantic model specification |
| `de-serving-layer-design` | Serving layer specification |
| `de-semantic-and-serving-layer` | Compatibility bridge for semantic and serving work |
| `de-lineage-and-metadata` | Lineage and metadata catalog |
| `de-governance-and-security` | Governance checklist |
| `de-cost-and-performance-optimization` | Cost and performance assessment |
| `de-cicd-and-testing` | CI/CD and testing plan |
| `de-project-evaluation` | Release readiness evaluation |

### Implementation support skills

| Skill | Main artifact |
| --- | --- |
| `de-brainstorm-change` | Change brief |
| `de-implementation-planning` | Implementation plan and implementation story |
| `de-build-from-artifacts` | Implementation log |
| `de-review-implementation` | Review report |
| `de-verify-delivery` | Verification report |
| `de-implementation-retrospective` | Implementation retrospective |

Implementation support uses:

- `checklists/implementation-readiness-checklist.md`
- `checklists/definition-of-done-checklist.md`

Behavioral code changes should follow red-green-refactor. Completion requires fresh evidence, not claims.

## Supported project styles

DES-SKILL is platform-neutral. It can support local-first development with SQL, Python, DuckDB, and dbt; lakehouse projects on Microsoft Fabric, Databricks, Snowflake, BigQuery, or similar platforms; orchestration with Airflow, Dagster, Azure Data Factory, Fabric Data Pipelines, or equivalent tools; quality workflows with Great Expectations, Soda, dbt tests, SQL checks, or Python validation; and serving through Power BI, Superset, semantic models, APIs, warehouse tables, or exported datasets.

The skills should not force a tool choice. They should force the agent to explain the trade-off and capture the decision.

## Philosophy

- **Business first** — Data work starts from decisions, KPIs, and consumers, not tables.
- **Artifacts over vibes** — Every major decision should leave a reviewable file behind.
- **Human checkpoints** — Business definitions, contracts, architecture trade-offs, and release gates need explicit approval.
- **Evidence over claims** — Work is done when checks, logs, tests, and review evidence support it.
- **Small context, strict steps** — Load one step file at a time.
- **Vendor-neutral by default** — The workflow should remain portable across data stacks.

## Validation

```bash
npm test
npm run validate:skills
node tools/validate-artifacts.js
```

## Release pinning

<<<<<<< HEAD
## Nguyên tắc hoạt động (Operating Principle)

Tuyệt đối không nhảy trực tiếp vào viết code. Một dự án dữ liệu hướng tới môi trường production cần bắt đầu với bối cảnh nghiệp vụ, kết quả đo lường được, độ sẵn sàng của nguồn dữ liệu, các lựa chọn kiến trúc, kỳ vọng chất lượng và nhu cầu cung cấp dữ liệu rõ ràng. Code chỉ nên dùng để hiện thực hóa các artifact đã thống nhất, chứ không thay thế bước khám phá (discovery).

## Danh mục Skill (Skill Index)

| Skill | Artifact chính |
| --- | --- |
| `using-des-skill` | Định tuyến quy trình và phối hợp trạng thái |
| `des-business-discovery` | Tài liệu tóm tắt khám phá nghiệp vụ (Business discovery brief) |
| `des-business-questions` | Danh mục câu hỏi nghiệp vụ (Business question catalog) |
| `des-requirements-and-kpis` | Danh mục yêu cầu và KPI (Requirements and KPI catalog) |
| `des-data-product-definition` | Đặc tả sản phẩm dữ liệu (Data product specification) |
| `des-data-source-assessment` | Bản đánh giá nguồn dữ liệu (Data source inventory) |
| `des-domain-modeling` | Mô hình domain khái niệm (Conceptual domain model) |
| `des-architecture-design` | Tài liệu quyết định kiến trúc (Architecture decision record) |
| `des-ingestion-design` | Đặc tả thu thập dữ liệu (Ingestion specification) |
| `des-bronze-layer-design` | Đặc tả bảng Bronze (Bronze table specifications) |
| `des-silver-layer-design` | Đặc tả bảng Silver (Silver table specifications) |
| `des-gold-layer-design` | Đặc tả bảng Gold (Gold table specifications) |
| `des-data-contracts` | Hợp đồng dữ liệu (Data contracts) |
| `des-transformation-design` | Thiết kế chuyển đổi (Transformation design) |
| `des-data-quality` | Danh mục quy tắc chất lượng dữ liệu (Data quality rule catalog) |
| `des-orchestration-observability` | Đặc tả điều phối và giám sát pipeline |
| `des-semantic-model-design` | Đặc tả mô hình semantic (Semantic model specification) |
| `des-serving-layer-design` | Đặc tả lớp cung cấp dữ liệu (Serving layer specification) |
| `des-semantic-and-serving-layer` | Cầu nối tương thích cho các công việc semantic và serving |
| `des-lineage-metadata-design` | Danh mục lineage và metadata |
| `des-governance-security-design` | Checklist quản trị dữ liệu (Governance checklist) |
| `des-cost-and-performance-optimization` | Đánh giá chi phí và hiệu năng |
| `des-cicd-and-testing` | Kế hoạch CI/CD và kiểm thử |
| `des-project-evaluation` | Đánh giá độ sẵn sàng release |

## Danh mục Skill Hỗ trợ (Support Skill Index)

Các skill tùy chọn này giúp chuyển đổi các artifact thiết kế đã duyệt thành sprint status, epic, story, mã nguồn, review, xác thực và retrospective. Chúng tuân theo luồng hỗ trợ kiểu BMad: brainstorm change, tạo epic, tạo sprint-status, tạo story từ artifact, kiểm tra readiness, dev-story, code-review, verify, và retrospective.

| Skill | Artifact chính |
| --- | --- |
| `des-help` | Ghi chú hỗ trợ / định tuyến khi cần |
| `des-brainstorm-change` | Change brief |
| `des-create-epic` | Epics triển khai từ artifact |
| `des-sprint-planning` | Sprint status |
| `des-create-story` | Story triển khai giàu ngữ cảnh |
| `des-check-implementation-readiness` | Báo cáo readiness trước dev |
| `des-implementation-planning` | Kế hoạch triển khai (Implementation plan) + câu chuyện triển khai (implementation story) |
| `des-dev-story` | Nhật ký triển khai (Implementation log) |
| `des-code-review` | Báo cáo review (Review report) |
| `des-verify-delivery` | Báo cáo xác thực (Verification report) |
| `des-retrospective` | Nhật ký đúc rút kinh nghiệm (Implementation retrospective) |

Hỗ trợ triển khai sử dụng hai cổng kiểm soát bàn giao (delivery gates):

- `checklists/implementation-readiness-checklist.md` trước khi bàn giao build.
- `checklists/definition-of-done-checklist.md` trước khi sẵn sàng review, hoàn thành, release hoặc đánh dấu hoàn tất.

Hỗ trợ build/review/verify cũng áp dụng quy tắc red-green-refactor đối với các thay đổi hành vi code, review phân tầng ưu tiên phát hiện lỗi, và bằng chứng mới trước khi đánh dấu hoàn thành.

## Ghim phiên bản phát hành (Release Pinning)

Tạo một thẻ git (git tag) và bản phát hành npm trước khi đề xuất cài đặt ghim phiên bản:

```bash
git tag v0.1.2
git push origin v0.1.2
npm publish --access public
```

Sau đó xuất bản GitHub Release tương ứng từ tag `v0.1.2`. Người dùng có thể ghim phiên bản cài đặt npm bằng cách chạy:
=======
The current package version is `0.1.2`.
>>>>>>> a37cba5aeec2e46ac5729ee942f3ed6f9195af7d

```bash
npx @dksang/des-skill@0.1.2 install
```

Before recommending a new pinned version, update `package.json`, create the git tag, publish to npm, and create the matching GitHub Release.

```bash
npm version patch
npm publish --access public
git push --follow-tags
```

## Repository metadata

Suggested GitHub description:

```text
Reusable Agent Skills for end-to-end Data Engineering project delivery.
```

Suggested topics:

```text
agent-skills
data-engineering
codex-skills
claude-skills
copilot-skills
gemini-cli
bmad-method
data-platform
lakehouse
dbt
duckdb
fabric
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for skill standards, step quality criteria, validation, and pull request guidance.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

MIT License. See [LICENSE](LICENSE).
