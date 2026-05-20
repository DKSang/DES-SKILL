# Step 1: Phase Routing & Coordination

## Rules
- Speak output in your agent style with the configured `communication_language`.
- Generate all documents in `document_output_language`.
- Always HALT at checkpoints or menus and wait for user selection.

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

### 3. Display Project Status Table
Produce a summary of the current project state using a table like this:

| # | Phase / Skill | Expected Artifact | Status |
|---|---|---|---|
| 01 | `de-business-discovery` | `01-business-discovery.md` | [Completed / Missing / In Progress] |
| 02 | `de-business-questions` | `02-business-questions.md` | ... |
| ... | ... | ... | ... |

### 4. Phase Routing Decision Menu
Present the following choices to the user:

- **[N] Auto-Route**: Automatically select the earliest phase skill that is missing its required artifact.
- **[S] Select Phase**: Manually choose a specific phase to run.
- **[A] Audit**: Review and audit existing artifacts for quality compliance.
- **[Q] Quit**: Exit the routing workspace.

HALT and wait for user selection.

- On **[N]**:
  - Identify the earliest missing file in the order of execution.
  - Advise the user to activate that skill. For example: "Earliest missing artifact is `01-business-discovery.md`. Recommend activating skill `de-business-discovery`."
  - Wait for user confirmation or direct execution.
- On **[S]**:
  - List the available skills and ask the user to input the skill number or name.
  - Check if the selected skill has all its required upstream artifacts. If not, warn the user about missing dependencies but allow override if they confirm.
- On **[A]**:
  - Scan the contents of existing artifacts and run their quality checklists.
  - Output a compliance report.
