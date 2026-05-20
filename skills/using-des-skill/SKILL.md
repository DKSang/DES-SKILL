---
name: using-des-skill
description: Use when starting, resuming, auditing, or coordinating any data engineering project with DES-SKILL installed.
---

# using-des-skill

## When To Use

Use this skill whenever a user starts, resumes, audits, or coordinates a data engineering project with DES-SKILL installed. Use it before selecting any phase-specific DES-SKILL skill.

## Purpose

Act as the DES-SKILL router and workflow coordinator to ensure disciplined agent execution, scan for upstream dependencies, and guide the user through the project phases.

## Workflow Modes

DES-SKILL uses adaptive workflow modes so small work does not require full lifecycle ceremony, while high-risk data products still receive full governance.

| Mode | Use When | Default Route |
| :--- | :--- | :--- |
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk cleanup | `de-build-from-artifacts` -> `de-verify-delivery`; add `de-review-implementation` when behavior changes |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update | `de-brainstorm-change` if unclear -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | New data product, cross-team delivery, regulated data, compliance risk, or irreversible architecture choice | Complete required phase artifacts 01-22, then run support skills |
| Correct Course | Approved artifacts conflict with repo reality, review findings, verification failures, incident facts, or new constraints | `de-brainstorm-change` -> affected phase skill update -> `de-implementation-planning` |

The router must name the selected mode, explain the reason, list missing upstream artifacts, and identify the next skill before implementation starts.

## Persona Layer

DES-SKILL uses personas to define responsibility boundaries for each skill. Read `docs/personas.md` when routing if available.

The router must identify the primary persona and persona skill for the selected artifact/support skill, state what that persona owns, and name any cross-persona handoff. Persona changes responsibility boundaries only; it must not change quality gates, document language, or evidence requirements.

Example: activate `de-persona-data-architect` for stance, then use `de-ingestion-design` for the artifact.

## Conventions

- Bare paths (e.g. `steps/step-01-route.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `customize.toml` lives).
- `{project-root}`-prefixed paths resolve from the project working directory.
- `{skill-name}` resolves to the skill directory's basename.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Micro-file Design**: Each step is self-contained and followed exactly.
- **Just-In-Time Loading**: Only load the current step file.
- **Sequential Enforcement**: Complete steps in order, no skipping.
- **State Tracking**: Persist progress via spec frontmatter and status files.
- **Append-Only Building**: Build artifacts incrementally.

### Step Processing Rules

1. **READ COMPLETELY**: Read the entire step file before acting.
2. **FOLLOW SEQUENCE**: Execute sections in order.
3. **WAIT FOR INPUT**: Halt at checkpoints and wait for human.
4. **LOAD NEXT**: When directed, read fully and follow the next step file.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously.
- 📖 **ALWAYS** read entire step file before execution.
- 🚫 **NEVER** skip steps or optimize the sequence.
- 🎯 **ALWAYS** follow the exact instructions in the step file.
- ⏸️ **ALWAYS** halt at menus and wait for user input.

## On Activation

### Step 1: Resolve the Workflow Block

Run: `python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow`

**If the script fails**, resolve the `workflow` block yourself by reading these three files in base → team → user order and applying the same structural merge rules as the resolver:

1. `{skill-root}/customize.toml` — defaults
2. `{project-root}/_des/custom/{skill-name}.toml` — team overrides
3. `{project-root}/_des/custom/{skill-name}.user.toml` — personal overrides

Any missing file is skipped. Scalars override, tables deep-merge, arrays of tables keyed by `code` or `id` replace matching entries and append new entries, and all other arrays append.

### Step 2: Execute Prepend Steps

Execute each entry in `{workflow.activation_steps_prepend}` in order before proceeding.

### Step 3: Load Persistent Facts

Treat every entry in `{workflow.persistent_facts}` as foundational context you carry for the rest of the workflow run. Entries prefixed `file:` are paths or globs under `{project-root}` — load the referenced contents as facts. All other entries are facts verbatim.

### Step 4: Load Config

Load config from `{project-root}/_des/des/config.yaml` or `{project-root}/_des/config.toml` and resolve:
- `project_name`, `planning_artifacts`, `implementation_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- If DES config is missing, fall back to:
  - `user_name` = "User"
  - `project_name` = "DES-Project"
  - `communication_language` = "Vietnamese"
  - `document_output_language` = "Vietnamese"

- CLAUDE.md / memory files (load if exist).
- Speak output in your agent style with the configured `communication_language`.
- Generate all documents in `document_output_language`.

### Step 5: Greet the User

Greet `user_name`, speaking in `communication_language`.

### Step 6: Execute Append Steps

Execute each entry in `{workflow.activation_steps_append}` in order.

Activation is complete. Begin the workflow by reading and executing the routing step.

## Next Step

Read fully and follow: `./steps/step-01-route.md`

## Quality Checklist

- [ ] The selected skill matches the current project phase.
- [ ] Missing upstream artifacts are handled before downstream work.
- [ ] The output path is explicit.
- [ ] The workflow status is updated after each completed artifact.
- [ ] The next skill is recommended.
- [ ] The agent explains blockers instead of guessing.
- [ ] The selected workflow mode is explicit: Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
- [ ] The selected persona is explicit and matches `docs/personas.md`.
- [ ] Missing artifacts require HALT or explicit override before build work.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating DES-SKILL as a prompt library instead of a gated workflow | Ungated use produces inconsistent, phase-skipped outputs |
| Skipping business discovery because a tool or platform is already chosen | Architecture constraints do not substitute for business requirements |
| Designing Bronze/Silver/Gold tables before source grain and ownership are assessed | Table design built on assumed grain produces wrong analytical models |
| Writing pipeline code before transformation logic and contracts are clear | Implicit contracts break without warning; code must implement agreed artifacts |
| Forgetting to update workflow status after producing an artifact | Session continuity breaks; the agent cannot resume accurately |

## Undercurrent Coverage

As the router, this skill ensures undercurrent checks are triggered at every phase transition:

| Undercurrent | Router Responsibility |
| :--- | :--- |
| Security | Confirm governance and security phase is completed before serving layer goes live |
| Data Management | Confirm catalog, lineage, and contract phases are not skipped for production data products |
| DataOps | Confirm CI/CD and DQ phases are completed before project evaluation |
| Data Architecture | Confirm architecture ADR is complete before any layer design phase begins |
| Orchestration | Confirm orchestration spec is complete before serving layer design |
| Software Engineering | Confirm transformation design and tests are complete before CI/CD phase |
