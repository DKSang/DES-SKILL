---
name: de-verify-delivery
description: Use when running final verification for implemented DES-SKILL work before claiming completion, handoff, merge, release, or project evaluation.
---

# de-verify-delivery

## When To Use

Use after implementation review and before any completion claim, handoff, merge, release, or project evaluation. Use when the answer must be backed by fresh command evidence and unresolved review status.

## Purpose

Create an evidence-backed verification report. This skill blocks false completion claims by requiring fresh commands, full result inspection, review-blocker checks, and explicit release/handoff recommendation.

## Workflow Architecture

1. `step-01-define-verification-scope.md` maps acceptance criteria, review findings, and required evidence.
2. `step-02-run-fresh-evidence.md` runs current verification commands and records results.
3. `step-03-write-verification-report.md` writes the report and completion claim decision.

## Execution Rules

- Do not claim done until verification commands have been run in the current workspace.
- Fresh means current command output from this session, not a previous log unless explicitly labeled historical.
- Failed, skipped, or blocked commands must remain visible.
- Stale evidence and failing evidence are blockers for a supported completion claim.
- Review blockers must be resolved, accepted by the user, or called out as release blockers.
- If evidence does not support the completion claim, HALT and route back to `de-build-from-artifacts`.
- Use `checklists/definition-of-done-checklist.md` before supporting any completion claim.

## Inputs Required

- Implementation plan.
- Implementation log.
- Review report.
- Relevant DES planning artifacts and acceptance criteria.
- Repository commands from package scripts, CI config, docs, or implementation plan.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/verification-report.md`

## Required Output Sections

- Verification scope and acceptance criteria.
- Commands run with fresh pass/fail evidence.
- Review finding status.
- Artifact and delivery gate status.
- Unresolved risks and blockers.
- Completion claim: supported, blocked, or partial.

## Quality Checklist

- [ ] Evidence is fresh and command-specific.
- [ ] Failures and skipped commands are visible.
- [ ] Review blockers are resolved or explicitly accepted.
- [ ] Completion claim matches evidence.
- [ ] Next workflow action is clear.
- [ ] Definition of Done is supported, partial, or blocked with reasons.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Saying tests pass from memory | Current workspace may differ |
| Summarizing without command names | Evidence cannot be reproduced |
| Ignoring skipped checks | Missing evidence becomes hidden risk |
| Verifying only code, not artifacts | Delivery may violate DES acceptance criteria |
| Treating stale evidence as fresh | Completion claim may describe a previous state |
| Treating failing evidence as partial success | Known failures must block or be explicitly accepted |

## Handoff To The Next Skill

Use `de-implementation-retrospective` after successful or partial delivery. Use `de-build-from-artifacts` when verification fails.
