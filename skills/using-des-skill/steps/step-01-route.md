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
01-business-discovery.md
02-business-questions.md
03-requirements-and-kpis.md
04-data-product-definition.md
05-data-source-assessment.md
06-domain-modeling.md
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
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `de-build-from-artifacts` -> `de-verify-delivery`; add `de-review-implementation` when behavior changes |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update | `de-brainstorm-change` if unclear -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | New data product, cross-team delivery, regulated data, compliance risk, or irreversible architecture choice | Complete required phase artifacts 01-22, then run support skills |
| Correct Course | Approved artifacts conflict with repo reality, review findings, verification failures, incident facts, or new constraints | `de-brainstorm-change` -> affected phase skill update -> `de-implementation-planning` |

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
| 01 | `de-business-discovery` | `01-business-discovery.md` | [Completed / Missing / In Progress] |
| 02 | `de-business-questions` | `02-business-questions.md` | ... |
| ... | ... | ... | ... |

### 5. Select Persona

Read `docs/personas.md` if available and map the recommended skill to its primary persona.

If `docs/personas.md` is missing, use this fallback:

| Persona | Persona Skill | Typical Artifact/Support Skills |
|---|---|---|
| Workflow Coordinator | `de-persona-workflow-coordinator` | `using-des-skill`, `de-brainstorm-change` |
| Data Product Analyst | `de-persona-data-product-analyst` | `de-business-discovery`, `de-business-questions`, `de-requirements-and-kpis`, `de-data-product-definition` |
| Source & Domain Analyst | `de-persona-source-domain-analyst` | `de-data-source-assessment`, `de-domain-modeling` |
| Data Architect | `de-persona-data-architect` | `de-architecture-design`, `de-architecture-review`, `de-ingestion-design`, `de-bronze-layer-design`, `de-silver-layer-design`, `de-gold-layer-design`, `de-data-contracts`, `de-contract-review`, `de-transformation-design` |
| Data Quality Engineer | `de-persona-data-quality-engineer` | `de-data-quality`, `de-orchestration-and-observability` |
| Analytics Engineer | `de-persona-analytics-engineer` | `de-semantic-model-design`, `de-serving-layer-design`, `de-semantic-and-serving-layer` |
| Governance Reviewer | `de-persona-governance-reviewer` | `de-lineage-and-metadata`, `de-governance-and-security` |
| DataOps Engineer | `de-persona-dataops-engineer` | `de-cost-and-performance-optimization`, `de-cicd-and-testing`, `de-project-evaluation` |
| Implementation Developer | `de-persona-implementation-developer` | `de-implementation-planning`, `de-build-from-artifacts` |
| Delivery Reviewer | `de-persona-delivery-reviewer` | `de-review-implementation`, `de-verify-delivery`, `de-implementation-retrospective` |

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
- **[I] Implementation Support**: Route into `de-brainstorm-change`, `de-implementation-planning`, `de-build-from-artifacts`, `de-review-implementation`, or `de-verify-delivery`.
- **[A] Audit**: Review and audit existing artifacts for quality compliance.
- **[Q] Quit**: Exit the routing workspace.

HALT and wait for user selection.

- On **[N]**:
  - Identify the earliest missing file in the order of execution.
  - Advise the user to activate that skill. For example: "Earliest missing artifact is `01-business-discovery.md`. Recommend activating skill `de-business-discovery`."
  - Wait for user confirmation or direct execution.
- On **[M]**:
  - Ask the user to choose Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
  - Explain required artifacts and recommended next skill for the selected mode.
  - HALT if the selected mode is blocked by missing upstream artifacts.
- On **[S]**:
  - List the available skills and ask the user to input the skill number or name.
  - Check if the selected skill has all its required upstream artifacts. If not, warn the user about missing dependencies and require explicit override before proceeding.
- On **[I]**:
  - If scope is unclear or artifacts conflict, recommend `de-brainstorm-change`.
  - If the work is scoped but not planned, recommend `de-implementation-planning`.
  - If an implementation plan exists and status is ready, recommend `de-build-from-artifacts`.
  - If changes are implemented, recommend `de-review-implementation`.
  - If review is complete or accepted, recommend `de-verify-delivery`.
- On **[A]**:
  - Scan the contents of existing artifacts and run their quality checklists.
  - Output a compliance report.
