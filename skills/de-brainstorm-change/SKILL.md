---
name: de-brainstorm-change
description: Use when exploring a new change request, feature idea, scope adjustment, incident follow-up, or implementation pivot for a DES-SKILL data engineering project before planning or coding.
---

# de-brainstorm-change

## When To Use

Use when a request is not yet implementation-ready: new feature, scope change, incident follow-up, optimization idea, governance change, or release blocker. Use before `de-implementation-planning` whenever affected artifacts, downstream consumers, risks, or decision options are unclear.

## Purpose

Turn a vague change into a decision-ready change brief. The skill protects DES artifact traceability by making the agent identify affected artifacts, conflicts, options, and approval gates before planning or coding.

## Workflow Architecture

This is a BMad-style discovery gate, not a coding skill.

1. `step-01-discover-context.md` loads workflow status, planning artifacts, implementation artifacts, and the user's request.
2. `step-02-map-impact-and-options.md` classifies the change, maps affected artifacts, and drafts viable options.
3. `step-03-write-change-brief.md` writes the change brief with decisions, blockers, and next workflow action.

## Execution Rules

- Do not implement code, edit pipeline logic, or change planning artifacts in this skill.
- HALT when the request conflicts with approved contracts, governance/security constraints, or release readiness.
- Name affected artifacts explicitly; "docs", "pipeline", or "model" is too vague.
- Separate facts from assumptions. Assumptions must become open questions or decision log entries.
- If the user asks to proceed immediately, still produce the change brief first.

## Inputs Required

- User request, incident context, or release blocker.
- Workflow status from `_des-output/implementation-artifacts/des-workflow-status.md` when present.
- Relevant planning artifacts under `_des-output/planning-artifacts/`.
- Existing implementation artifacts under `_des-output/implementation-artifacts/` when the change modifies implemented work.
- Repository context only when needed to identify affected files or owners.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/change-brief.md`

## Required Output Sections

- Change summary and motivation.
- Affected artifacts, phases, files, owners, and consumers.
- Decision log with options considered and recommended path.
- Risks, blockers, assumptions, and missing inputs.
- Recommendation: proceed to `de-implementation-planning`, revise a DES planning artifact, or stop.

## Quality Checklist

- [ ] Change is tied to a business outcome, operational risk, or implementation blocker.
- [ ] Affected artifacts are named with paths where possible.
- [ ] Upstream/downstream impact is clear.
- [ ] Decision log explains why the recommended option is preferred.
- [ ] HALT conditions are documented instead of bypassed.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Jumping directly to code | The change may invalidate contracts, lineage, architecture, or DQ rules |
| Treating every request as additive | Some requests require revising earlier artifacts first |
| Asking for approval without options | The user cannot make a useful decision |
| Hiding assumptions in prose | Future implementation treats guesses as requirements |

## Handoff To The Next Skill

Use `de-implementation-planning` only after the change brief is accepted. If the brief says a planning artifact is stale, return to the affected phase skill first.
