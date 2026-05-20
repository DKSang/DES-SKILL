# Step 03 - Draft Implementation Plan

Write executable tasks and create the implementation story packet.

For each task include:

- Artifact traceability.
- Acceptance criteria.
- Files/modules likely to change.
- Tests or validation commands.
- Review checkpoint.
- Rollback or safety note when data can be modified.

Keep tasks independently reviewable. Mark out-of-scope work explicitly.

Also draft `_des-output/implementation-artifacts/implementation-story.md` from `templates/implementation-story-template.md`.

The implementation story must include:

- Status set to Draft or Ready for Dev.
- Source Artifact Map linking every requirement to its source artifact.
- Acceptance Criteria in Given/When/Then when possible.
- Tasks / Subtasks with checkbox syntax.
- Dev Notes with architecture, source, contract, DQ, lineage, security, and non-goal context.
- Data Engineering Guardrails for source grain/time, idempotency, replay/backfill, contracts, DQ, security, cost, and rollback.
- Test Plan mapping acceptance criteria to commands or evidence.
- Empty Dev Agent Record, File List, Review Findings, and Change Log sections for the build skill to update.
