# Repo Structure

Cáº¥u trĂºc thÆ° má»¥c cá»§a DES-SKILL repo.

```text
DES-SKILL/
â”œâ”€â”€ README.md                        # HÆ°á»›ng dáº«n chĂ­nh
â”œâ”€â”€ SOUL.md                          # Triáº¿t lĂ½ vĂ  quy táº¯c há»c táº­p cá»§a DES
â”œâ”€â”€ CHANGELOG.md                     # Lá»‹ch sá»­ phiĂªn báº£n
â”œâ”€â”€ CONTRIBUTING.md                  # HÆ°á»›ng dáº«n Ä‘Ă³ng gĂ³p
â”œâ”€â”€ ARTIFACTS.md                     # Map artifact names vĂ  paths
â”œâ”€â”€ DES-WORKFLOW.md                  # Workflow reference dáº¡ng rĂºt gá»n
â”œâ”€â”€ LICENSE
â”œâ”€â”€ package.json
â”œâ”€â”€ install.sh
â”‚
â”œâ”€â”€ docs/                            # TĂ i liá»‡u hÆ°á»›ng dáº«n
â”‚   â”œâ”€â”€ overview.md                  # Tá»•ng quan DES-SKILL
â”‚   â”œâ”€â”€ workflow.md                  # Workflow Ä‘áº§y Ä‘á»§
â”‚   â”œâ”€â”€ skill-catalog.md             # Danh má»¥c 22 main skills
â”‚   â”œâ”€â”€ support-skills.md            # Danh má»¥c 12 support skills
â”‚   â”œâ”€â”€ quick-start.md               # Báº¯t Ä‘áº§u nhanh
â”‚   â”œâ”€â”€ usage-examples.md            # VĂ­ dá»¥ thá»±c táº¿
â”‚   â”œâ”€â”€ repo-structure.md            # File nĂ y
â”‚   â”œâ”€â”€ agent-rules.md               # Quy táº¯c báº¯t buá»™c cho agent
â”‚   â”œâ”€â”€ contributing.md              # HÆ°á»›ng dáº«n Ä‘Ă³ng gĂ³p (docs version)
â”‚   â”œâ”€â”€ workflow-modes.md            # CĂ¡c cháº¿ Ä‘á»™ workflow
â”‚   â””â”€â”€ personas.md                  # DES personas
â”‚
â”œâ”€â”€ knowledge/                       # Há»‡ tri thá»©c cá»‘t lĂµi
â”‚   â””â”€â”€ FUNDAMENTALS-MAP.md          # Báº£n Ä‘á»“ lĂ½ thuyáº¿t Data Engineering
â”‚
â”œâ”€â”€ skills/                          # 22 main lifecycle skills
â”‚   â”œâ”€â”€ using-des-skill/             # Router / entry point skill
â”‚   â”œâ”€â”€ des-business-discovery/
â”‚   â”‚   â”œâ”€â”€ SKILL.md
â”‚   â”‚   â”œâ”€â”€ customize.toml
â”‚   â”‚   â””â”€â”€ steps/
â”‚   â”‚       â”œâ”€â”€ step-01-*.md
â”‚   â”‚       â””â”€â”€ step-02-*.md
â”‚   â”œâ”€â”€ des-business-questions/
â”‚   â””â”€â”€ ...
â”‚
â”œâ”€â”€ skills-support/                  # 12 support skills
â”‚   â”œâ”€â”€ des-create-epic/
â”‚   â”‚   â”œâ”€â”€ SKILL.md
â”‚   â”‚   â”œâ”€â”€ customize.toml
â”‚   â”‚   â””â”€â”€ steps/
â”‚   â”œâ”€â”€ des-create-story/
â”‚   â”œâ”€â”€ des-sprint-planning/
â”‚   â”œâ”€â”€ des-story-readiness-check/
â”‚   â”œâ”€â”€ des-dev-task-breakdown/
â”‚   â”œâ”€â”€ des-implementation-plan/
â”‚   â”œâ”€â”€ des-code-review/
â”‚   â”œâ”€â”€ des-release-readiness-review/
â”‚   â”œâ”€â”€ des-retrospective/
â”‚   â”œâ”€â”€ des-correct-course/
â”‚   â”œâ”€â”€ des-workflow-status-update/
â”‚   â””â”€â”€ des-wise/                    # Wise Help vĂ  Ä‘á»‹nh tuyáº¿n
â”‚
â”œâ”€â”€ skills-learning/                 # 7 learning skills (coaching vĂ  há»c táº­p)
â”‚   â”œâ”€â”€ des-explain-artifact/
â”‚   â”œâ”€â”€ des-artifact-quiz/
â”‚   â”œâ”€â”€ des-learning-path/
â”‚   â”œâ”€â”€ des-gap-teacher/
â”‚   â”œâ”€â”€ des-socratic-coach/
â”‚   â”œâ”€â”€ des-learning-status-update/
â”‚   â””â”€â”€ des-learning-review/
â”‚
â”œâ”€â”€ skills-stack/                    # Stack-specific implementation support skills
â”‚   â””â”€â”€ des-dbt-engineering/
â”‚
â”œâ”€â”€ templates/                       # Output artifact templates
â”‚   â”œâ”€â”€ 00-workflow-status-template.md
â”‚   â”œâ”€â”€ 01-business-discovery-brief-template.md
â”‚   â”œâ”€â”€ ...
â”‚   â”œâ”€â”€ learning/                    # CĂ¡c template dĂ¹ng cho learning layer
â”‚   â”‚   â”œâ”€â”€ artifact-explanation-template.md
â”‚   â”‚   â”œâ”€â”€ artifact-quiz-template.md
â”‚   â”‚   â”œâ”€â”€ learning-path-template.md
â”‚   â”‚   â”œâ”€â”€ learning-gap-report-template.md
â”‚   â”‚   â””â”€â”€ socratic-coaching-session-template.md
â”‚   â””â”€â”€ support/                     # CĂ¡c template dĂ¹ng cho support layer
â”‚       â””â”€â”€ des-wise-response-template.md
â”‚
â”œâ”€â”€ checklists/                      # Quality checklists
â”‚   â”œâ”€â”€ business-discovery-checklist.md
â”‚   â””â”€â”€ ...
â”‚
â”œâ”€â”€ workflows/                       # Workflow reference files
â”‚
â”œâ”€â”€ examples/                        # Example projects
â”‚
â”œâ”€â”€ references/                      # Reference materials
â”‚
â”œâ”€â”€ tools/                           # Validation and scaffolding
â”‚   â”œâ”€â”€ validate-skills.js
â”‚   â”œâ”€â”€ validate-artifacts.js
â”‚   â””â”€â”€ scaffold-skill.js
â”‚
â”œâ”€â”€ test/                            # Test suite
â”‚   â””â”€â”€ *.test.js
â”‚
+-- .agents/                         # Agent integration output (generated)
|   +-- skills/                      # Codex-facing installed skills
|       +-- using-des-skill/
|       +-- des-business-discovery/
|       +-- des-create-epic/
|       +-- des-artifact-quiz/
|       +-- ...
|
+-- _des/                            # DES runtime/config, BMAD-style
|   +-- config.toml
|   +-- config.user.toml
|   +-- _config/
|   +-- method/
|   +-- support/
|   +-- learning/
|   +-- templates/
|   +-- checklists/
|   +-- docs/
|   +-- workflows/
|   +-- examples/
|   +-- knowledge/
|
+-- _des-output/                     # Project artifacts (generated)
    +-- planning-artifacts/
    +-- implementation-artifacts/
    +-- learning-artifacts/
    +-- test-artifacts/
```

---

## Vai trĂ² tá»«ng thÆ° má»¥c

### `skills/`

Chá»©a 22 main lifecycle skills. Má»—i skill lĂ  má»™t thÆ° má»¥c cĂ³:
- `SKILL.md` â€” Skill definition, activation protocol, decision matrix
- `customize.toml` â€” Cáº¥u hĂ¬nh paths, template, checklist
- `steps/` â€” Step files, load tá»«ng cĂ¡i má»™t, khĂ´ng load háº¿t cĂ¹ng lĂºc

### `skills-support/`

Chá»©a 12 support skills (bao gá»“m cáº£ `des-wise`), cĂ¹ng cáº¥u trĂºc vá»›i `skills/`. Support skills dĂ¹ng sau khi cĂ³ Ä‘á»§ main artifacts.

### `skills-learning/`

Chá»©a 7 learning skills (coaching vĂ  há»c táº­p) giĂºp giáº£i thĂ­ch khĂ¡i niá»‡m, cháº©n Ä‘oĂ¡n lá»— há»•ng kiáº¿n thá»©c, táº¡o quiz tá»± Ä‘Ă¡nh giĂ¡ vĂ  dáº¡y báº±ng há»i Ä‘Ă¡p gá»£i má»Ÿ (Socratic coaching).

### `skills-stack/`

Chá»©a cĂ¡c stack-specific implementation support skills (vĂ­ dá»¥: dbt, Airflow, Spark). DĂ¹ng Ä‘á»ƒ há»— trá»£ triá»ƒn khai chi tiáº¿t sau khi cĂ³ cĂ¡c DES artifacts.

### `knowledge/` vĂ  `SOUL.md`

- `SOUL.md` chá»©a triáº¿t lĂ½ giĂ¡o dá»¥c vĂ  chá»‰ dáº«n cá»‘t lĂµi cá»§a DES learning layer.
- `knowledge/FUNDAMENTALS-MAP.md` chá»©a báº£n Ä‘á»“ cĂ¡c khĂ¡i niá»‡m Data Engineering.

### `templates/`

Template cho output artifacts. Bao gá»“m thÆ° má»¥c `templates/learning/` cho lá»›p há»c táº­p vĂ  `templates/support/` chá»©a response template cho `des-wise`. Agent dĂ¹ng cĂ¡c template nĂ y Ä‘á»ƒ khá»Ÿi táº¡o file tÆ°Æ¡ng á»©ng.

### `checklists/`

Checklist dĂ¹ng Ä‘á»ƒ validate artifact trÆ°á»›c khi Ä‘Ă¡nh dáº¥u Done. Má»—i phase cĂ³ checklist riĂªng.

### `.agents/skills/`

Thu muc agent-facing do installer sinh ra cho Codex. No chua ca main skills, support skills va learning skills duoc flatten vao mot danh sach skill.

### `_des/`

Thu muc runtime/config theo BMAD-style, sinh ra khi chay DES-SKILL.
- `config.toml` va `config.user.toml` - cau hinh project
- `method/`, `support/`, `learning/` - ban runtime cua cac nhom skill
- `templates/`, `checklists/`, `docs/`, `workflows/`, `examples/`, `knowledge/` - runtime assets

### `_des-output/` (project-side)

Sau khi install, output artifacts cá»§a project Ä‘Æ°á»£c lÆ°u táº¡i:
```text
_des-output/
+-- planning-artifacts/        # Main skill outputs (01-22)
+-- implementation-artifacts/  # Support skill outputs + workflow status
+-- learning-artifacts/        # Learning outputs
+-- test-artifacts/            # Test/review outputs
```

---

## File quan trá»ng nháº¥t

| File | Vai trĂ² |
|:---|:---|
| `README.md` | Entry point, overview |
| `ARTIFACTS.md` | Map tĂªn artifact â†’ path chĂ­nh xĂ¡c |
| `DES-WORKFLOW.md` | Workflow reference rĂºt gá»n |
| `skills/using-des-skill/SKILL.md` | Router skill â€” entry point cho agent |
| `_des-output/implementation-artifacts/des-workflow-status.md` | Tráº¡ng thĂ¡i workflow hiá»‡n táº¡i |

---

## Conventions

- Skill directories dĂ¹ng prefix `des-` vĂ  kebab-case
- Template files Ä‘Ă¡nh sá»‘ `NN-name-template.md` (NN tá»« 00 Ä‘áº¿n 22)
- Checklist files dĂ¹ng suffix `-checklist.md`
- Output artifacts khĂ´ng cĂ³ prefix `template` â€” chá»‰ `NN-name.md`
- Step files dĂ¹ng format `step-NN-short-name.md`
