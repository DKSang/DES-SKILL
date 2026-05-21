# Step 1: Phase Routing & Coordination

## Rules
- Speak output in your agent style with the configured `communication_language`.
- Generate all documents in `document_output_language`.
- Always HALT at checkpoints or menus and wait for user selection.
- Select an adaptive workflow mode before selecting a skill.
- Select the primary persona from `docs/personas.md` before recommending a skill.
- Do not route to implementation when required artifacts are missing unless the user gives an explicit override.

## Instructions

### 1. Ingest Workflow Maps & Status
Scan the following locations for project configuration:
- `{project-root}/_des/des/config.yaml` or `{project-root}/_des/config.toml` to find planning/implementation output folders.
- If not configured, default paths are:
  - Workflow Map: `.agents/des-skill/DES-WORKFLOW.md`
  - Artifacts Map: `.agents/des-skill/ARTIFACTS.md`
  - Status File: `.agents/des-skill/sprint-status/des-workflow-status.md`
  - Output Folder: `.agents/des-skill/output/`

Read the status file if it exists to understand which phases are completed, in-progress, or blocked.

### 2. Detect Project State
Scan the resolved output folder (default `.agents/des-skill/output/` or `{planning_artifacts}`) for existing files:
```text
01-business-discovery-brief.md
02-business-question-catalog.md
03-requirements-and-kpi-catalog.md
04-data-product-specification.md
05-data-source-assessment.md
06-conceptual-domain-model.md
07-architecture-design.md
08-ingestion-design.md
09-bronze-layer-design.md
10-silver-layer-design.md
11-gold-layer-design.md
12-data-contracts.md
13-transformation-design.md
14-data-quality.md
15-orchestration-and-observability.md
16-semantic-model-design.md
17-serving-layer-design.md
18-lineage-and-metadata.md
19-governance-and-security.md
20-cost-and-performance-optimization.md
21-cicd-and-testing.md
22-project-evaluation.md
```

Compare found files against the required upstream dependencies.

### 3. Select Workflow Mode

Classify the request into one of these modes:

| Mode | Use When | Route |
|---|---|---|
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `des-dev-story` -> `des-verify-delivery`; add `des-code-review` when behavior changes |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update | `des-brainstorm-change` if unclear -> `des-create-epic` -> `des-sprint-planning` -> `des-create-story` -> `des-check-implementation-readiness` -> `des-dev-story` -> `des-code-review` -> `des-verify-delivery` |
| Enterprise Data Product | New data product, cross-team delivery, regulated data, compliance risk, or irreversible architecture choice | Complete required phase artifacts 01-22, then run support skills |
| Correct Course | Approved artifacts conflict with repo reality, review findings, verification failures, incident facts, or new constraints | `des-brainstorm-change` -> affected phase skill update -> `des-create-story` or `des-implementation-planning` |

Mode rules:

- Choose Quick Fix only when no business metric, source grain, data contract, PII policy, architecture decision, or consumer-facing dataset changes.
- Choose Standard Feature for the normal implementation path when one shippable data engineering goal needs planning.
- Choose Enterprise Data Product when the work is high-risk, regulated, cross-team, or creates a production data product.
- Choose Correct Course when existing artifacts conflict with implementation evidence or the user changes scope after planning.

HALT if the selected mode needs artifacts that are missing. Continue only after the missing artifact is produced or the user gives an explicit override.

### 4. Display Project Status Table
Produce a summary of the current project state using a table like this:

| # | Phase / Skill | Expected Artifact | Status |
|---|---|---|---|
| 01 | `des-business-discovery` | `01-business-discovery-brief.md` | [Completed / Missing / In Progress] |
| 02 | `des-business-questions` | `02-business-question-catalog.md` | ... |
| ... | ... | ... | ... |

### 5. Select Persona

Read `docs/personas.md` if available and map the recommended skill to its primary persona.

If `docs/personas.md` is missing, use this fallback:

| Persona | Persona Skill | Typical Artifact/Support Skills |
|---|---|---|
| Workflow Coordinator | `des-persona-workflow-coordinator` | `using-des-skill`, `des-brainstorm-change` |
| Data Product Analyst | `des-persona-data-product-analyst` | `des-business-discovery`, `des-business-questions`, `des-requirements-and-kpis`, `des-data-product-definition` |
| Source & Domain Analyst | `des-persona-source-domain-analyst` | `des-data-source-assessment`, `des-domain-modeling` |
| Data Architect | `des-persona-data-architect` | `des-architecture-design`, `des-architecture-review`, `des-ingestion-design`, `des-bronze-layer-design`, `des-silver-layer-design`, `des-gold-layer-design`, `des-data-contracts`, `des-contract-review`, `des-transformation-design` |
| Data Quality Engineer | `des-persona-data-quality-engineer` | `des-data-quality`, `des-orchestration-and-observability` |
| Analytics Engineer | `des-persona-analytics-engineer` | `des-semantic-model-design`, `des-serving-layer-design`, `des-semantic-and-serving-layer` |
| Governance Reviewer | `des-persona-governance-reviewer` | `des-lineage-and-metadata`, `des-governance-and-security` |
| DataOps Engineer | `des-persona-dataops-engineer` | `des-cost-and-performance-optimization`, `des-cicd-and-testing`, `des-project-evaluation` |
| Implementation Developer | `des-persona-implementation-developer` | `des-create-epic`, `des-sprint-planning`, `des-create-story`, `des-check-implementation-readiness`, `des-implementation-planning`, `des-dev-story` |
| Delivery Reviewer | `des-persona-delivery-reviewer` | `des-code-review`, `des-verify-delivery`, `des-retrospective` |

When reporting the next skill, include:

- Selected persona.
- Persona skill to activate.
- What this persona owns.
- Cross-persona handoff, if the next step changes responsibility.

### 6. Phase Routing Decision Menu
Present the following choices to the user:

- **[M] Select Mode**: Manually choose Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
- **[N] Auto-Route**: Automatically select the earliest phase skill that is missing its required artifact.
- **[S] Select Phase**: Manually choose a specific phase to run.
- **[I] Implementation Support**: Route into `des-brainstorm-change`, `des-create-epic`, `des-sprint-planning`, `des-create-story`, `des-check-implementation-readiness`, `des-implementation-planning`, `des-dev-story`, `des-code-review`, or `des-verify-delivery`.
- **[A] Audit**: Review and audit existing artifacts for quality compliance.
- **[Q] Quit**: Exit the routing workspace.

HALT and wait for user selection.

- On **[N]**:
  - Identify the earliest missing file in the order of execution.
  - Advise the user to activate that skill. For example: "Earliest missing artifact is `01-business-discovery-brief.md`. Recommend activating skill `des-business-discovery`."
  - Wait for user confirmation or direct execution.
- On **[M]**:
  - Ask the user to choose Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
  - Explain required artifacts and recommended next skill for the selected mode.
  - HALT if the selected mode is blocked by missing upstream artifacts.
- On **[S]**:
  - List the available skills and ask the user to input the skill number or name.
  - Check if the selected skill has all its required upstream artifacts. If not, warn the user about missing dependencies and require explicit override before proceeding.
- On **[I]**:
  - If scope is unclear or artifacts conflict, recommend `des-brainstorm-change`.
  - If approved artifacts need implementation breakdown, recommend `des-create-epic`.
  - If epics exist but sprint tracking is missing, recommend `des-sprint-planning`.
  - If sprint tracking has backlog stories, recommend `des-create-story`.
  - If a story exists but readiness is uncertain, recommend `des-check-implementation-readiness`.
  - If the work is scoped but needs a legacy implementation plan, recommend `des-implementation-planning`.
  - If a story or implementation plan exists and status is ready, recommend `des-dev-story`.
  - If changes are implemented, recommend `des-code-review`.
  - If review is complete or accepted, recommend `des-verify-delivery`.
- On **[A]**:
  - Scan the contents of existing artifacts and run their quality checklists.
  - Output a compliance report.
