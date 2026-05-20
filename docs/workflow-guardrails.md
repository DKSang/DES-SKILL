# Workflow Guardrails & Scenario Tests

This document describes the scenario tests and guardrails that Batch F introduces to prevent workflow regressions.

Core scenarios (tests should map to these):

- "code now, skip docs": Router/build halts unless an approved implementation story or explicit override is provided.
- Missing source assessment: Ingestion/architecture workflow routes back to source assessment skill.
- Metric conflict: KPI/product skill halts when conflicting metric definitions exist.
- Tests fail: Verify/build blocks completion claims and surfaces failing evidence.
- Review blocker exists: Verify skill blocks release unless blocker is explicitly accepted.
- Artifact drift found: Retro creates follow-up action and records drift.

Suggested test names and expectations:

- `workflow-guardrails/code-now-skip-docs.test.js` — asserts the router or build step refuses to run without story evidence.
- `workflow-guardrails/missing-source.test.js` — asserts ingestion routes back to source assessment.
- `workflow-guardrails/metric-conflict.test.js` — asserts KPI halts and emits conflict evidence.
- `workflow-guardrails/tests-fail.test.js` — asserts failed verification blocks DoD.

Minimal test contract (what tests assert):

- Presence of guardrail phrases in skill instructions: e.g., "must have approved implementation story", "readiness gates", "do not mark complete until evidence".
- Skills reference the checklist/template files: `checklists/implementation-readiness-checklist.md`, `checklists/definition-of-done-checklist.md`.
- Router honors `mode` semantics (`quick`, `standard`, `enterprise`) and lists missing artifacts when halting.

Implementation notes:

- These are behavioral/unit tests of the skill docs and router guidance (not full integration tests). Implement them under `test/workflow-guardrails.test.js` or split per scenario.
- Each test should fail if a critical guardrail phrase disappears from skill instruction text — this keeps the docs and agent behavior pressure-resistant.
