---
name: de-implementation-retrospective
description: Use when capturing lessons learned, artifact drift, technical debt, follow-up backlog, or process improvements after DES-SKILL implementation and verification.
---

# de-implementation-retrospective

## When To Use

Use after implementation, review, verification, release, incident follow-up, or partial delivery. Use when the team needs to preserve lessons, artifact drift, follow-up work, and next workflow actions.

## Purpose

Turn delivery outcomes into operational learning and backlog. This skill adapts BMad retrospective discipline for DES: compare plan vs implementation vs review vs verification, identify artifact drift, assign follow-up work, and prepare the next workflow cycle.

## Workflow Architecture

1. `step-01-discover-delivery-record.md` collects plan, log, review, verification, and affected DES artifacts.
2. `step-02-analyze-outcomes.md` compares planned work to actual outcomes and identifies drift, debt, and process gaps.
3. `step-03-plan-follow-up.md` creates prioritized follow-up actions with owner, severity, and next workflow.
4. `step-04-write-retrospective.md` writes the retrospective and handoff.

## Execution Rules

- No blame. Focus on system, artifact, process, and implementation facts.
- Artifact drift must become a named follow-up, not a vague lesson.
- Follow-up items need owner, severity, and next workflow action.
- Unresolved blockers cannot be downgraded into "lessons learned".
- Include next workflow readiness: continue, revise artifacts, brainstorm change, or evaluate project.

## Inputs Required

- Implementation plan.
- Implementation log.
- Review report.
- Verification report.
- Affected DES planning artifacts.
- Release notes, incident notes, or user feedback when available.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/implementation-retrospective.md`

## Required Output Sections

- Delivery summary.
- What changed vs plan.
- Artifact drift.
- Technical debt and operational risks.
- Follow-up backlog with owner/severity/next workflow.
- Process improvements.
- Next workflow recommendation.

## Quality Checklist

- [ ] Artifact drift is explicit and traceable.
- [ ] Follow-up actions include owner, severity, and next workflow.
- [ ] Verification and review outcomes are reflected accurately.
- [ ] Process improvements are actionable.
- [ ] Next workflow action is clear.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating retrospective as praise | It must preserve operational learning |
| Hiding artifact drift | Future agents start from stale docs |
| Follow-up without owner or severity | Debt never gets resolved |
| Ignoring verification failures | The same failure returns next delivery |

## Handoff To The Next Skill

Return to the affected phase skill for artifact updates, use `de-brainstorm-change` for a new change cycle, or use `de-project-evaluation` when delivery is complete enough for release assessment.
