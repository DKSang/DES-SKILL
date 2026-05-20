---
name: de-business-discovery
description: Use when beginning any data engineering project, before requirements, architecture, data modeling, ingestion, or implementation work has enough business context.
---

# de-business-discovery

## When To Use

Use this skill at project start, when a user describes a data idea, dashboard, pipeline, AI agent, data platform, migration, analytics need, or operational reporting problem without a clear business brief.

## Purpose

Create a practical business discovery brief that prevents premature coding and anchors the project in decisions, users, scope, and measurable outcomes.

## Conventions

- Bare paths (e.g. `steps/step-01-clarify.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `customize.toml` lives).
- `{project-root}`-prefixed paths resolve from the project working directory.
- `{skill-name}` resolves to the skill directory's basename.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Micro-file Design**: Each step is self-contained and followed exactly.
- **Just-In-Time Loading**: Only load the current step file.
- **Sequential Enforcement**: Complete steps in order, no skipping.
- **State Tracking**: Persist progress via spec frontmatter and status files.
- **Append-Only Building**: Build/refine artifacts incrementally.

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
- If DES config is missing, fall back to defaults (Vietnamese).
- Speak output in your agent style with the configured `communication_language`.
- Generate all documents in `document_output_language`.

### Step 5: Greet the User

Greet `user_name`, speaking in `communication_language`.

### Step 6: Execute Append Steps

Execute each entry in `{workflow.activation_steps_append}` in order.

Activation is complete. Begin the workflow by reading and executing the first step.

## Next Step

Read fully and follow: `./steps/step-01-clarify.md`

## Inputs Required

- Business domain and problem statement.
- Target users or stakeholder groups.
- Current pain points.
- Known data products or reports.
- Known constraints, deadlines, or systems.

## Step-By-Step Process

Refer to the individual step files in the `steps/` folder:
1. `steps/step-01-clarify.md` - Clarify business domain, problems, and decisions.
2. `steps/step-02-scope.md` - Define scope, operational constraints, and data products.
3. `steps/step-03-draft.md` - Draft and compile the final business brief, quality check, and handoff.

## Output File

Write the final artifact to the configured `output_file` path (default: `{project-root}/_bmad-output/planning-artifacts/01-business-discovery.md`).

## Required Outputs

- Business discovery brief.
- Stakeholder and decision matrix.
- Scope and non-scope list.
- Initial data product list.
- Open question log.

## Quality Checklist

- The problem is stated without tool names.
- Every stakeholder has a decision or workflow.
- Scope is narrow enough for a first delivery.
- Open questions have owners or next actions.
- No implementation technology is selected yet unless it is a hard constraint.

## Common Mistakes To Avoid

- Starting with Spark, dbt, Airflow, or cloud services before understanding the business decision.
- Treating a dashboard request as the business problem.
- Ignoring non-functional constraints.
- Accepting vague users such as "the business" without naming roles.

## Handoff To The Next Skill

Next use `de-business-questions` to translate the discovery brief into business questions that guide data product, model, and metric design.

## Example Output Format

```markdown
# Business Discovery Brief
## Problem
## Stakeholders And Decisions
| Stakeholder | Decision | Pain Point | Success Signal |
## Scope
## Initial Data Products
## Assumptions
## Open Questions
```
