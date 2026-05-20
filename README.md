# DES-SKILL

[![npm](https://img.shields.io/npm/v/@dksang/des-skill?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@dksang/des-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-21%2F21%20pass-22c55e)](test/)
[![Skills](https://img.shields.io/badge/skills-42-7c3aed)](skills/)
[![Step Files](https://img.shields.io/badge/step%20files-89-0ea5e9)](skills/)

Reusable Agent Skills for end-to-end Data Engineering project delivery.

This repository is a vendor-neutral Agent Skills pack for professional data engineering projects across domains such as agriculture, finance, retail, healthcare, logistics, SaaS analytics, and IoT.

It supports local-first development with SQL, Python, DuckDB, and dbt, and cloud-first development with platforms such as Databricks, Snowflake, BigQuery, Microsoft Fabric, Azure Data Factory, Airflow, Dagster, Kafka, Great Expectations, Soda, Power BI, Superset, and GitHub Actions.

## Quick Evaluation

> **Dành cho người muốn đánh giá nhanh trước khi dùng.**

DES-SKILL giải quyết vấn đề gì? Agent AI thường nhảy thẳng vào viết code khi được giao một data project. DES-SKILL buộc agent phải đi qua **22 phases có kiểm soát** — từ business discovery đến project evaluation — với **human-in-the-loop HALT** tại mọi điểm quyết định quan trọng.

| Đặc điểm | DES-SKILL | Agent không có skill |
| :--- | :--- | :--- |
| Bắt đầu từ đâu | Business questions → KPI → Source → Architecture | Thường bắt đầu từ code |
| Quyết định nghiệp vụ | HALT bắt buộc, chờ người dùng xác nhận | Agent tự quyết định |
| Metric conflicts | Phải được business owner giải quyết | Engineer tự chọn một định nghĩa |
| Grain declaration | Khai báo "Mỗi hàng là một ___" trước khi thiết kế bảng | Schema được copy từ source |
| SLA classification | P1 Cứng / P2 Mềm / P3 Tùy chọn có hệ quả cụ thể | "refresh daily" không có thời gian cụ thể |
| Output | Artifact có thể review và track (`.md` files có số thứ tự) | Code và comments |

**Thử ngay**: Cài đặt và dùng prompt Quick Start bên dưới.



### Option 1: npm installer

Install the full DES-SKILL pack:

```bash
npx @dksang/des-skill install
```

Install into a custom directory:

```bash
npx @dksang/des-skill install --dir .agents/skills
```

Overwrite existing installed skills:

```bash
npx @dksang/des-skill install --force
```

The npm installer creates a project structure:

```text
_des-output/
├── planning-artifacts/     # 01-business-discovery.md → 06-domain-modeling.md
└── implementation-artifacts/
    ├── 07-architecture-design.md → ...
    └── des-workflow-status.md
.agents/
└── skills/
    ├── using-des-skill/
    ├── de-business-discovery/
    │   ├── SKILL.md
    │   ├── customize.toml
    │   └── steps/
    └── ...
```

### Option 2: GitHub CLI

Use GitHub CLI when you want to install one skill at a time:

```bash
gh skill install DKSang/DES-SKILL using-des-skill
```

If you run this without a skill name, GitHub CLI may prompt you to select one:

```bash
gh skill install DKSang/DES-SKILL
```

### Option 3: One-command manual install

Install globally for agents that read `~/.agents/skills`:

```bash
git clone https://github.com/DKSang/DES-SKILL.git
cd DES-SKILL
bash install.sh
```

Install into the current project:

```bash
bash install.sh .agents/skills
```

### Option 4: Manual copy

Project-local install:

```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

Personal/global install:

```bash
mkdir -p ~/.agents/skills
cp -r skills/* ~/.agents/skills/
```

After installation, restart your agent or run its skill refresh command if supported.

## Quick Start Prompt

```text
I want to use DES-SKILL for a new data engineering project.

Project idea:
[describe your project here]

Please follow the DES-SKILL workflow:
1. Start with using-des-skill.
2. Read DES-WORKFLOW.md and des-workflow-status.md if it exists.
3. Detect the current project phase.
4. Select the workflow mode: Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
5. Check whether required upstream artifacts exist.
6. Use the matching skill from the installed skills.
7. Do not jump to coding before business context, requirements, data sources, architecture, and quality expectations are clear.
8. Produce the required artifact using the templates/ directory.
9. Update .agents/des-skill/sprint-status/des-workflow-status.md.
10. Recommend the next skill when the current artifact is complete.
```

Short version:

```text
Install DES-SKILL, then start with using-des-skill.
Act as a Data Engineering delivery agent.
Detect the current phase, check missing upstream artifacts, activate the matching skill.
Read the skill's step files one at a time — do NOT skip steps.
Produce the required artifact from templates, update workflow status, and hand off.
Do not jump to coding until business context, KPIs, data sources, architecture, and quality expectations are clear.
```

## Architecture — Step-File Workflow

Every phase skill uses **step-file architecture** for disciplined agent execution:

```text
skill/
├── SKILL.md            # Activates On Activation protocol → loads step-01
├── customize.toml      # Configures output_file, template, checklist paths
└── steps/
    ├── step-01-*.md    # Loaded first; HALT at decision points
    ├── step-02-*.md    # Loaded only after step-01 completes
    └── step-03-*.md    # Draft artifact + quality checklist + hand off
```

Key rules the agent follows:
- **NEVER** load multiple step files at once
- **ALWAYS** HALT at menus and wait for user input
- **NEVER** proceed past unresolved metric conflicts, unsigned contracts, or unconfirmed irreversible decisions

## Workflow Entrypoint

Use [skills/using-des-skill/SKILL.md](skills/using-des-skill/SKILL.md) as the router skill and [DES-WORKFLOW.md](DES-WORKFLOW.md) as the phase map.

The router supports four adaptive workflow modes:

| Mode | Use When |
| --- | --- |
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk cleanup |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update |
| Enterprise Data Product | New production data product, regulated data, cross-team work, or irreversible architecture choice |
| Correct Course | Existing artifacts conflict with repo reality, review findings, verification failures, incidents, or new constraints |

See [docs/workflow-modes.md](docs/workflow-modes.md) for routing rules.

The router also uses persona skills so each artifact skill has a clear responsibility boundary. Example: activate `de-persona-data-architect` for stance, then use `de-ingestion-design` for the artifact. See [docs/personas.md](docs/personas.md).

Track progress in:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Create the status file from:

```text
.agents/des-skill/templates/workflow_status_template.md
```

## Validation

Run repository checks before publishing or changing skills:

```bash
npm test
npm run validate:skills
```

The validation script checks required skill files, frontmatter, key headings, package metadata, and workflow references.

## Operating Principle

Do not jump directly into coding. A production-oriented data project starts with business context, measurable outcomes, source readiness, architecture choices, quality expectations, and clear serving needs. Code should implement agreed artifacts, not replace discovery.

## Skill Index

| Skill | Main Artifact |
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
| `de-orchestration-and-observability` | Pipeline and monitoring spec |
| `de-semantic-model-design` | Semantic model specification |
| `de-serving-layer-design` | Serving layer specification |
| `de-semantic-and-serving-layer` | Compatibility bridge for semantic and serving work |
| `de-lineage-and-metadata` | Lineage and metadata catalog |
| `de-governance-and-security` | Governance checklist |
| `de-cost-and-performance-optimization` | Cost and performance review |
| `de-cicd-and-testing` | CI/CD and test plan |
| `de-project-evaluation` | Release readiness review |

## Support Skill Index

These optional skills help move from approved planning artifacts into implementation, review, verification, and retrospective work. They follow a BMad-style support loop: brainstorm change, plan implementation, build from artifacts, review, verify with fresh evidence, then capture follow-up.

| Skill | Main Artifact |
| --- | --- |
| `de-brainstorm-change` | Change brief |
| `de-implementation-planning` | Implementation plan + implementation story |
| `de-build-from-artifacts` | Implementation log |
| `de-review-implementation` | Review report |
| `de-verify-delivery` | Verification report |
| `de-implementation-retrospective` | Implementation retrospective |

Implementation support uses two delivery gates:

- `checklists/implementation-readiness-checklist.md` before build handoff.
- `checklists/definition-of-done-checklist.md` before ready-for-review, complete, release, or completion claims.

Build/review/verify support also enforces red-green-refactor for behavior changes, layered findings-first review, and fresh evidence before completion claims.

## Release Pinning

Create a git tag and npm release before recommending pinned installs:

```bash
git tag v0.1.1
git push origin v0.1.1
npm publish --access public
```

Then publish the matching GitHub Release from the `v0.1.1` tag. Users can pin npm installs with:

```bash
npx @dksang/des-skill@0.1.1 install
```

## Repository Metadata

Recommended GitHub description:

```text
Reusable Agent Skills for end-to-end Data Engineering project delivery.
```

Recommended topics:

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

See [CONTRIBUTING.md](CONTRIBUTING.md) for skill standards, step quality criteria, and PR process.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.
