---
name: de-business-questions
description: Use when translating business discovery into concrete business questions before KPI, data product, domain model, or analytics model design.
---

# de-business-questions

## When To Use

Use after business discovery and before KPI design. Use when goals are known but the exact questions the data platform must answer are still implicit, vague, or mixed with implementation ideas.

## Purpose

Create a business question catalog that connects stakeholder decisions to metrics, entities, sources, data products, and model design — ensuring every analytical output is tied to a real business decision.

## Conventions

- Bare paths (e.g. `steps/step-01-convert-decisions.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `customize.toml` lives).
- `{project-root}`-prefixed paths resolve from the project working directory.
- `{skill-name}` resolves to the skill directory's basename.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Micro-file Design**: Each step is self-contained and followed exactly.
- **Just-In-Time Loading**: Only load the current step file.
- **Sequential Enforcement**: Complete steps in order, no skipping.
- **State Tracking**: Persist progress via workflow status file.
- **Human-in-the-Loop**: HALT at decision points and wait for confirmation.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously.
- 📖 **ALWAYS** read entire step file before execution.
- 🚫 **NEVER** skip steps or optimize the sequence.
- ⏸️ **ALWAYS** halt at menus and wait for user input.

## On Activation

### Step 1: Resolve the Workflow Block

Run: `python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow`

**If the script fails**, resolve the `workflow` block by reading in order:
1. `{skill-root}/customize.toml` — defaults
2. `{project-root}/_des/custom/{skill-name}.toml` — team overrides
3. `{project-root}/_des/custom/{skill-name}.user.toml` — personal overrides

### Step 2: Load Persistent Facts

Treat every entry in `{workflow.persistent_facts}` as foundational context. Entries prefixed `file:` — load the referenced contents.

### Step 3: Load Config

Load config from `{project-root}/_des/des/config.yaml` and resolve:
- `project_name`, `user_name`, `communication_language`, `document_output_language`
- Fall back to Vietnamese if config is missing.

### Step 4: Greet and Begin

Greet `user_name`. Activation complete.

## Next Step

Read fully and follow: `./steps/step-01-convert-decisions.md`

## Inputs Required

- Business discovery brief (`01-business-discovery.md`).
- Stakeholders and their decision workflows.
- Initial data product ideas.
- Known constraints and open questions.

## Decision Matrix — Analytical Output Type

| Business Question Type | Analytical Output Required |
| :--- | :--- |
| "What happened / how much?" | **Descriptive** — historical metrics, aggregated KPIs |
| "Why did it happen?" | **Diagnostic** — drill-down, cohort analysis, root cause dashboards |
| "What will happen?" | **Predictive** — ML models, forecast features, trend projections |
| "What should we do?" | **Prescriptive** — optimization recommendations, decision support |
| "What is happening right now?" | **Operational** — near-real-time alerting, live dashboards |

Use this classification to guide the analytical architecture: Descriptive/Diagnostic → Gold batch; Predictive → ML feature store; Operational → streaming aggregate.

## Step-By-Step Process

Refer to the individual step files in the `steps/` folder:
1. `steps/step-01-convert-decisions.md` — Chuyển quyết định kinh doanh thành câu hỏi nghiệp vụ có grain và loại phân tích.
2. `steps/step-02-validate-and-enrich.md` — Xác thực khả năng trả lời, phát hiện thuật ngữ mơ hồ, ánh xạ KPI ứng viên.
3. `steps/step-03-draft-and-handoff.md` — Soạn thảo catalog, kiểm tra chất lượng, ghi artifact, bàn giao.

## Output File

The output_file path is configured in customize.toml. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/02-business-questions.md`

Use the matching template from:

`{skill-root}/../../templates/02-business-questions-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Business question catalog with grain, time window, and analytical output type.
- Question-to-stakeholder mapping.
- Question-to-KPI candidate mapping.
- Ambiguous term backlog with owner for resolution.

## Quality Checklist

- [ ] Every question is connected to a named stakeholder decision or action.
- [ ] Every question has an explicit grain (e.g., "per region per week") and time window.
- [ ] Analytical output type is assigned (Descriptive / Diagnostic / Predictive / Prescriptive / Operational).
- [ ] No question contains tool names or implementation choices.
- [ ] All ambiguous business terms are captured in the glossary backlog.
- [ ] Questions are validated as answerable from assessed or acquirable sources.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating report titles as questions ("Sales Dashboard") | Not a question — no decision, no grain, no answerability test |
| Writing questions without a named decision or user | Questions without stakeholders have no priority or acceptance criteria |
| Skipping grain and time window | "Revenue by region" could mean daily, monthly, YTD — ambiguity causes wrong Gold model design |
| Jumping from questions directly to table design | Domain modeling and KPI definition must come first to avoid rework |
| Accepting "the business" as the stakeholder | Too vague — name the specific role or team responsible for the decision |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Flag questions that require access to PII or regulated data early |
| Data Management | Ambiguous terms identified here feed the business glossary |
| DataOps | Predictive/Operational questions require streaming or ML pipelines — flag for architecture decisions |
| Data Architecture | Analytical output type directly constrains architecture choices |
| Orchestration | Time window and freshness requirements constrain pipeline schedule design |
| Software Engineering | Questions with conflicting definitions must be resolved before any code is written |

## Handoff To The Next Skill

Next use `de-requirements-and-kpis` to turn prioritized business questions into measurable KPIs, reporting requirements, freshness targets, and SLAs.
