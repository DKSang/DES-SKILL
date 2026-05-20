# Step 04 - Final Validation

Before handoff, verify the plan can be executed.

1. Confirm every task has acceptance criteria and artifact traceability.
2. Confirm validation commands are concrete or blockers are named.
3. Confirm risky data changes have rollback, backfill, or replay notes.
4. Confirm `implementation-story.md` exists and includes Status, Source Artifact Map, Acceptance Criteria, Tasks / Subtasks, Dev Notes, Data Engineering Guardrails, Test Plan, Dev Agent Record, File List, Review Findings, and Change Log.
5. Write `{output_file}` and `_des-output/implementation-artifacts/implementation-story.md`.
6. Mark status as ready, blocked, or needs artifact revision.

Only hand off to `de-build-from-artifacts` when both the plan and `implementation-story.md` are ready.
