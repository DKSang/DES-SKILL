# DES-SKILL Workflow Modes

DES-SKILL supports four adaptive workflow modes. Use the lightest mode that still protects artifact traceability, data quality, security, and delivery evidence.

## Mode Summary

| Mode | Use When | Required Path |
| --- | --- | --- |
| Quick Fix | Small bug, doc correction, narrow test/config change, or low-risk repo cleanup | `de-build-from-artifacts` -> `de-verify-delivery`; add `de-review-implementation` when behavior changes |
| Standard Feature | One cohesive data feature, pipeline change, model change, or contract/DQ update | `de-brainstorm-change` if scope is unclear -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | New data product, cross-team delivery, regulated data, compliance risk, or irreversible architecture choice | Complete required phase artifacts 01-22, then run the support loop |
| Correct Course | Approved artifacts conflict with repo reality, review findings, verification failures, incident facts, or new business constraints | `de-brainstorm-change` -> affected phase skill update -> `de-implementation-planning` |

## Mode Selection Rules

### Quick Fix

Choose Quick Fix only when all conditions are true:

- The change is narrow and reversible.
- No business metric, source grain, data contract, PII policy, or architecture decision changes.
- Existing artifacts already explain the behavior being changed, or the user gives an explicit override.
- Verification can be completed with local commands or artifact inspection.

HALT and route to Standard Feature if the fix touches contracts, DQ thresholds, lineage, security, orchestration semantics, or consumer-facing datasets.

### Standard Feature

Choose Standard Feature when the work has one shippable goal but needs planning before code. This is the default implementation mode for normal DES work.

Required gates:

- Source artifact or change brief exists.
- Acceptance criteria are testable.
- Files/modules likely to change are identified.
- Validation commands are known or blockers are recorded.

### Enterprise Data Product

Choose Enterprise Data Product when the work creates or materially changes a production data product, shared metric layer, governed dataset, external contract, or multi-team pipeline.

Required gates:

- Upstream phase artifacts are complete enough for the target phase.
- Irreversible decisions have explicit approval.
- Security, governance, lineage, DQ, observability, and CI/CD implications are not skipped.

### Correct Course

Choose Correct Course when implementation evidence shows the plan is wrong or stale.

Triggers:

- Artifact conflicts with code reality.
- Review or verification exposes missing requirements.
- Source system behavior changed.
- A release blocker invalidates the current plan.
- User changes scope after planning.

Correct Course produces or updates a change brief first, then routes to the affected phase skill or implementation planning.

## Router Output

The router should always report:

- Selected mode.
- Why that mode fits.
- Required upstream artifacts.
- Missing artifacts or blockers.
- Recommended next skill.
- Whether an explicit override is required.
