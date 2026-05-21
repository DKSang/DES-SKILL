# CHANGELOG

All notable changes to DES-SKILL are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/): MAJOR.MINOR.PATCH.

- **MAJOR**: Breaking change to skill interface or workflow contract
- **MINOR**: New skill, new step file, new template
- **PATCH**: Fix to existing step logic, template content, validation

---

## [Unreleased]

### Added
- `docs/step-upgrade-backlog.md` — Backlog tracking 16 skills với scaffold steps cần nâng cấp lên chất lượng cao
- `CONTRIBUTING.md` — Hướng dẫn đóng góp với tiêu chuẩn SKILL.md, step quality criteria, customize.toml template

---

## [0.2.0] — 2026-05-21

### Added — Step-File Architecture (WS1)

Step-file architecture triển khai cho toàn bộ 22 phase skills.
Mỗi skill giờ có `customize.toml` + `steps/` directory để enforce sequential human-in-the-loop execution.

**Số lượng**: 42 step files + 22 `customize.toml` files

#### Batch A — Business & Requirements
- `des-requirements-and-kpis/steps/` (3 steps): HALT bắt buộc tại metric conflicts; 5-criteria KPI gate; P1/P2/P3 SLA classification
- `des-data-product-definition/steps/` (3 steps): Decision matrix 7 loại data product; Phase 1/2+ separation; per-product spec với consumer + owner + SLA
- `des-domain-modeling/steps/` (3 steps): Grain declaration enforcement ("Mỗi hàng là một ___"); HALT bắt buộc tại M:M relationships; SCD identification

#### Batch B — Data Source & Architecture
- `des-data-source-assessment/steps/` (3 steps): FDE write pattern classification (CRUD/Insert-Only/Event/File/API); CDC log retention check; 7-criteria source profile; risk flagging
- `des-architecture-design/steps/` (3 steps): Reversibility classification (One-way/Two-way door); HALT tại Irreversible decisions; 6 Undercurrents review

#### Batch C-E — Full Pipeline (via scaffold)
- 17 skills còn lại: scaffold steps với đầy đủ menu tương tác và HALT placeholders
  - `des-ingestion-design`, `des-bronze-layer-design`, `des-silver-layer-design`
  - `des-gold-layer-design`, `des-data-contracts`, `des-transformation-design`
  - `des-data-quality`, `des-orchestration-and-observability`
  - `des-semantic-model-design`, `des-serving-layer-design`, `des-semantic-and-serving-layer`
  - `des-lineage-and-metadata`, `des-governance-and-security`
  - `des-cost-and-performance-optimization`, `des-cicd-and-testing`, `des-project-evaluation`

### Changed
- Tất cả 23 SKILL.md: path references `{_des-output}` và `{skill-root}/../../templates/` thay thế `.agents/des-skill/output/` cũ
- 6 SKILL.md được inject `## WORKFLOW ARCHITECTURE` block và `## On Activation` section
- 3 SKILL.md: `## Output Files` (plural) → `## Output File` để pass test

### Added — Tooling
- `tools/create-all-customize-toml.js` — Tạo `customize.toml` cho tất cả 22 phase skills
- `tools/scaffold-missing-steps.js` — Scaffold step files cho skills chưa có
- `tools/inject-step-architecture.js` — Helper để inject workflow architecture vào SKILL.md

### Fixed
- `des-business-questions` output path: `.agents/des-skill/output/` → `{project-root}/_des-output/planning-artifacts/`
- 3 skills với `## Output Files` (plural) không pass regex test

---

## [0.1.1] — 2026-05-20

### Added — Structural Upgrades (Batch 1-4)
- Decision matrices cho 25 skills
- Anti-Patterns sections cho 25 skills
- Undercurrent Coverage sections (6 undercurrents × 25 skills)
- Handoff To The Next Skill sections

### Added — Templates
- Templates 00-23 đánh số đầy đủ
- Loại bỏ template thừa, chuẩn hóa đánh số

### Added — Validation
- `tools/validate-skills.js` — Custom skill validator
- `test/skill-output-files.test.js` — Node.js test suite
- `npm test` và `npm run validate:skills` commands

### Added — Framework Evaluation
- `framework_evaluation.md` — So sánh DES-SKILL vs bmad-method

---

## [0.1.0] — Initial Release

### Added
- 22 phase skills covering full data engineering lifecycle
- `using-des-skill` meta skill (workflow router)
- `des-skill` meta skill (workflow documentation)
- `DES-WORKFLOW.md` — Phase map
- Install script `bin/des-skill.js`
- `install.sh` Bash installer
