# DES-SKILL CLI — Help

This document lists the user-facing command phrases and short examples for the DES-SKILL CLI surface (document-level help; `bin/des-skill.js` provides the runtime behavior).

Usage (examples):

- `des-skill start [--mode quick|standard|enterprise] [--story <path>]`
  - Start a new workflow run. `--mode` selects the router depth.

- `des-skill resume <story>`
  - Resume a paused implementation story.

- `des-skill check-readiness <story>`
  - Run readiness gates and produce a readiness report.

- `des-skill quick-dev --brief "<short change brief>"`
  - Create a minimal implementation story for a quick fix.

- `des-skill create-implementation-story --plan <plan.md> --out <path>`
  - Convert an implementation plan into an executable story packet.

- `des-skill build-from-artifacts --story <implementation-story.md>`
  - Perform build steps guided by the implementation story.

- `des-skill review-implementation --story <implementation-story.md>`
  - Run layered review and produce a findings-first report.

- `des-skill verify-delivery --story <implementation-story.md>`
  - Run verification commands and collect evidence for DoD.

- `des-skill retro --story <implementation-story.md>`
  - Create retrospective artifacts and follow-ups.

- `des-skill correct-course --story <implementation-story.md>`
  - Produce controlled-scope correction items when artifacts conflict with reality.

- `des-skill --help`
  - Show this help text.

Examples:

`des-skill start --mode quick --story _des-output/implementation-artifacts/impl-123.md`

`des-skill check-readiness _des-output/implementation-artifacts/impl-123.md`

Notes:

- The CLI surface is intentionally shallow: it's a documentation-friendly mapping of router phrases to workflow actions. Implementations may be no-op shims that print recommended next steps.
- For full automation, implement runtime behaviors in `bin/des-skill.js` and ensure the router honors `--mode` HALT rules.
