---
name: des-check-implementation-readiness
description: Use when validating that DES artifacts, epics, stories, acceptance criteria, tests, owners, and blockers are ready before implementation starts.
---

# des-check-implementation-readiness

## When To Use

Use before `des-dev-story`, especially for high-risk stories, first stories in an epic, production-grade work, regulated data, or any story generated from incomplete artifacts.

## Purpose

Block implementation until the story has enough artifact traceability, acceptance criteria, file boundaries, test expectations, rollback notes, and owner decisions.

## Workflow

1. Load story, sprint status, implementation plan, and referenced DES artifacts.
2. Validate traceability, acceptance criteria, dependencies, data contracts, quality rules, security controls, and validation commands.
3. Identify blockers versus accepted risks.
4. HALT if implementation would require guessing.
5. Mark the story ready, blocked, or ready with accepted risk.

## Output File

Write readiness notes to the story file and, when useful, `_des-output/implementation-artifacts/readiness-report.md`.

## Quality Checklist

- [ ] Every task traces to an approved artifact or accepted change.
- [ ] Acceptance criteria are testable.
- [ ] Validation commands are known or blocker is recorded.
- [ ] Required owners and approvals are present.
- [ ] Risks are accepted explicitly, not implied.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating a story as ready because it has tasks | Tasks can still hide missing decisions |
| Allowing code to start with unresolved contracts | Implementation may encode wrong assumptions |
| Accepting risk without owner/date | Risk becomes invisible debt |

## Handoff To The Next Skill

Use `des-dev-story` only when readiness passes or the user explicitly accepts the recorded risk.
