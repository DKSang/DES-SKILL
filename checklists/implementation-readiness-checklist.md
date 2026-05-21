# Implementation Readiness Checklist

Use this checklist before `des-dev-story`. If any required item fails, implementation is blocked unless the user gives an explicit override and the risk is recorded.

## Scope Approval

- [ ] Workflow mode is selected: Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
- [ ] Scope is approved in `change-brief.md`, phase artifact, or user instruction.
- [ ] Non-goals are explicit.
- [ ] Owner or responsible persona is named.

## Source Artifact Traceability

- [ ] Every task maps to a DES planning artifact, change brief, or accepted override.
- [ ] Source artifact paths are listed in `implementation-plan.md` and `implementation-story.md`.
- [ ] Conflicting artifacts are resolved or routed to Correct Course.
- [ ] Stale artifacts are named as blockers.

## Acceptance Criteria

- [ ] Acceptance criteria are observable.
- [ ] Given/When/Then format is used when behavior can be tested.
- [ ] Each acceptance criterion maps to a task or blocker.
- [ ] Each acceptance criterion maps to validation evidence.

## Data Contract Impact

- [ ] Schema, grain, semantic metric, or API contract impact is classified.
- [ ] Breaking changes are identified.
- [ ] Consumer impact and notification path are documented.
- [ ] Compatibility or migration strategy is defined.

## Data Quality / Security / Lineage Impact

- [ ] DQ dimensions affected by the change are named.
- [ ] PII/security/access impact is classified.
- [ ] Lineage or metadata impact is recorded.
- [ ] Observability and alerting impact is recorded when pipelines change.

## Validation Commands

- [ ] Test, lint, build, contract, DQ, or artifact validation commands are listed.
- [ ] Expected evidence is specified for each command.
- [ ] Missing commands are recorded as blockers, not left implicit.
- [ ] Manual verification steps are reproducible.

## Rollback / Backfill / Replay

- [ ] Rollback path exists for risky code/config/data changes.
- [ ] Backfill or replay plan exists when historical data can be affected.
- [ ] Idempotency expectations are clear.
- [ ] Operational owner is named for rollback or incident response.

## Readiness Decision

| Decision | Meaning |
| :--- | :--- |
| Ready | All required checks pass |
| Blocked | A required check fails and no explicit override exists |
| Ready with Accepted Risk | User explicitly accepts a named risk |

Final decision:

Accepted risks:
