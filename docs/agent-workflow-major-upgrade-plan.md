# DES-SKILL Agent Workflow Major Upgrade Plan

> Purpose: combine the known weaknesses of DES-SKILL into one implementation-ready upgrade program, using BMad Method and Superpowers patterns as references while keeping DES-SKILL focused on data engineering delivery.

## Current Diagnosis

DES-SKILL is strongest as a data engineering artifact workflow. It already has:

- 22 phase skills covering business discovery through project evaluation.
- Step-file execution for disciplined agent behavior.
- Canonical markdown artifacts.
- Support skills for change, implementation planning, build, review, verification, and retrospective.
- Validation tests for skill structure and output paths.

The remaining gap is not "more phase content". The next upgrade should make DES-SKILL a stronger agent workflow system:

- adaptive routing instead of one fixed 22-phase path;
- role/persona clarity for data engineering work;
- story-like implementation packets;
- stricter readiness and definition-of-done gates;
- TDD and evidence discipline during build;
- adversarial review and skill behavior tests;
- better command/router UX.

## Reference Patterns To Borrow

### From BMad Method

Local reference folder:

`C:/Users/dksan/Code/data-engineer/CCAV/.agents/skills`

Relevant BMad skills:

| BMad Skill | Pattern To Borrow | DES Target |
| --- | --- | --- |
| `bmad-quick-dev` | clarify-and-route, quick spec, plan, implement, review, present | Add DES quick mode for small changes |
| `bmad-create-story` | exhaustive context packet before dev, previous work intelligence, file-read guardrails | Upgrade `des-implementation-planning` into DES implementation story creation |
| `bmad-dev-story` | exact task order, status transitions, TDD, file list, change log, DoD gates | Upgrade `des-dev-story` |
| `bmad-code-review` | layered review, triage, findings-first reporting | Upgrade `des-code-review` |
| `bmad-check-implementation-readiness` | readiness report, stepsCompleted, document discovery, final assessment | Add DES readiness gates and frontmatter state |
| `bmad-retrospective` | delivery learning, prior action follow-through, next-cycle readiness | Upgrade `des-retrospective` |
| `bmad-correct-course` | controlled scope correction when artifacts conflict | Strengthen `des-brainstorm-change` |

### From Superpowers

Patterns to borrow:

- Brainstorm before implementation.
- Write plans with exact file paths and verification commands.
- TDD red-green-refactor for implementation tasks.
- Verification before completion claims.
- Subagent-driven development where independent work can be delegated.
- Skill authoring with failing tests/pressure scenarios first.

## Target Architecture

### 1. Adaptive Workflow Modes

Add a routing layer so DES-SKILL does not force the same ceremony on every request.

| Mode | Use When | Required Artifacts |
| --- | --- | --- |
| Quick Fix | Small bug, doc correction, narrow test or config change | change brief optional, implementation log, verification report |
| Standard Feature | One cohesive data feature or pipeline change | change brief, implementation plan, implementation log, review report, verification report |
| Enterprise Data Product | New or high-risk data product, compliance-sensitive, multi-team work | full phase artifacts 01-22 plus support loop |
| Correct Course | Approved artifacts conflict with repo reality or new constraints | change brief, affected phase artifact updates, new implementation plan |

Primary files to modify:

- `skills/using-des-skill/SKILL.md`
- `DES-WORKFLOW.md`
- `templates/00-workflow-status-template.md`
- new `docs/workflow-modes.md`

Acceptance criteria:

- Router can classify quick, standard, enterprise, and correct-course work.
- Router names missing upstream artifacts before implementation.
- Router recommends the next skill and artifact path.
- Tests assert that workflow docs mention all modes.

### 2. Data Engineering Personas

Add role clarity without turning DES-SKILL into a generic agile clone.

| DES Persona | Owns | Candidate Skills |
| --- | --- | --- |
| Data Product Analyst | business questions, KPIs, product definition | 01-04 |
| Source & Domain Analyst | source assessment, domain model | 05-06 |
| Data Architect | architecture, layer strategy, contracts | 07-13 |
| Data Quality Engineer | DQ, observability, validation thresholds | 14-15 |
| Analytics Engineer | semantic and serving layer | 16-17 |
| Governance Reviewer | lineage, metadata, privacy, security | 18-19 |
| DataOps Engineer | CI/CD, cost, release readiness | 20-22 |
| Implementation Developer | code/config/test changes from artifacts | support build skill |
| Delivery Reviewer | artifact compliance, evidence, retrospective | support review/verify/retro |

Primary files to modify:

- new `docs/personas.md`
- `README.md`
- `DES-WORKFLOW.md`
- selected `SKILL.md` files to add "Role" or "Agent Stance" sections.

Acceptance criteria:

- Every phase skill maps to one primary persona.
- Support skills map to implementation/reviewer personas.
- Persona text affects responsibilities, not arbitrary tone.

### 3. DES Implementation Story Packet

Create a stronger dev handoff artifact similar to BMad story files, but named for DES.

New artifact:

`_des-output/implementation-artifacts/implementation-story.md`

Candidate sections:

- Status.
- Source artifact map.
- User/data outcome.
- Acceptance criteria in Given/When/Then when possible.
- Tasks/subtasks.
- Dev notes.
- Data engineering guardrails.
- Test plan.
- File list.
- Dev agent record.
- Review findings.
- Change log.

Primary files to modify:

- `skills/des-implementation-planning/SKILL.md`
- `skills/des-implementation-planning/steps/*`
- `skills/des-dev-story/SKILL.md`
- `skills/des-dev-story/steps/*`
- new `templates/implementation-story-template.md`
- `ARTIFACTS.md`
- `test/skill-output-files.test.js`

Acceptance criteria:

- Implementation planning produces a story-like packet for build work.
- Build skill updates only allowed sections: status, tasks, dev record, file list, change log, evidence.
- Build skill HALTs when tasks are ambiguous or acceptance criteria are not testable.

### 4. Readiness And Definition-Of-Done Gates

Add explicit gates before build and before completion.

Readiness gates:

- scope approved;
- source artifacts present;
- acceptance criteria testable;
- data contract impact known;
- DQ/security/lineage impact assessed;
- validation commands known or blocker recorded;
- rollback/backfill/replay path defined for risky data changes.

Definition-of-done gates:

- all planned tasks complete;
- all acceptance criteria satisfied;
- tests/evidence fresh;
- changed file list complete;
- review blockers resolved or explicitly accepted;
- artifact drift recorded;
- next workflow action named.

Primary files to modify:

- new `checklists/implementation-readiness-checklist.md`
- new `checklists/definition-of-done-checklist.md`
- `skills/des-implementation-planning/*`
- `skills/des-dev-story/*`
- `skills/des-verify-delivery/*`
- `templates/00-workflow-status-template.md`

Acceptance criteria:

- Readiness failures block build.
- Verification failures block completion claims.
- Tests assert both checklist files exist and are referenced.

### 5. TDD And Evidence Discipline

Strengthen `des-dev-story` using Superpowers-style TDD and BMad dev-story discipline.

Rules to add:

- If behavior changes, write or identify the failing test first.
- Confirm the test fails for the expected reason before implementation.
- Implement minimal change.
- Run targeted tests.
- Run planned verification.
- Do not mark a task complete until tests and acceptance criteria pass.

Primary files to modify:

- `skills/des-dev-story/SKILL.md`
- `skills/des-dev-story/steps/step-02-implement-task.md`
- `skills/des-dev-story/steps/step-03-run-validation.md`
- `skills/des-verify-delivery/SKILL.md`

Acceptance criteria:

- Build step explicitly uses RED/GREEN/REFACTOR for code behavior changes.
- Non-code changes still require evidence appropriate to the artifact.
- Tests assert `red-green-refactor`, `fresh evidence`, and `do not mark complete` appear in support workflow instructions.

### 6. Review Upgrades

Make review harder to fool.

Review layers:

- Artifact compliance reviewer.
- Blind bug hunter.
- Edge-case and data failure reviewer.
- Governance/security reviewer.
- Test/evidence auditor.

Optional subagent model:

- If subagents are available and the review is high-risk, split artifact compliance and code quality into separate reviews.
- If no subagents are available, the main agent must run the same layers sequentially.

Primary files to modify:

- `skills/des-code-review/SKILL.md`
- `skills/des-code-review/steps/*`
- new `templates/review-report-template.md`

Acceptance criteria:

- Findings always lead the report.
- Each finding has severity, evidence, affected file/artifact, and recommended action.
- "No findings" reports still list residual risk and missing evidence.

### 7. Skill Behavior Tests

Move beyond structural tests.

Add scenario tests that inspect instructions for pressure-resistant guardrails:

| Scenario | Expected Guardrail |
| --- | --- |
| User says "code now, skip docs" | Router/build skill requires approved artifact or explicit override |
| Missing source assessment | Ingestion/architecture workflow blocks or routes back |
| Metric conflict | KPI/product skill HALTs |
| Tests fail | Verify/build skill blocks completion claim |
| Review blocker exists | Verify skill blocks release unless accepted |
| Artifact drift found | Retro creates follow-up item |

Primary files to modify:

- new `test/workflow-guardrails.test.js`
- `tools/validate-skills.js` if needed

Acceptance criteria:

- Tests fail if critical guardrail phrases disappear.
- Tests verify support skills reference checklists/templates once added.

### 8. Command And Help UX

Add BMad-like help affordances without needing a full command runtime.

Recommended commands in docs/help:

- `start DES-SKILL`
- `resume DES-SKILL`
- `check readiness`
- `quick dev`
- `create implementation story`
- `build from artifacts`
- `review implementation`
- `verify delivery`
- `retro`
- `correct course`

Primary files to modify:

- `skills/using-des-skill/SKILL.md`
- `README.md`
- `DES-WORKFLOW.md`
- `bin/des-skill.js` only if adding CLI help/scaffold output.

Acceptance criteria:

- README shows user-facing command phrases.
- `des-skill --help` mentions support workflow if CLI is updated.
- Router skill can map common phrases to the right skill.

## Proposed Implementation Batches

### Batch A: Workflow Mode Router

Goal: stop treating all work as one 22-phase path.

Files:

- `skills/using-des-skill/SKILL.md`
- `DES-WORKFLOW.md`
- `templates/00-workflow-status-template.md`
- `README.md`
- new `docs/workflow-modes.md`
- tests for mode references

Done when:

- Quick/standard/enterprise/correct-course modes are documented.
- Router has explicit mode selection and HALT rules.
- Tests pass.

### Batch B: Persona Layer

Goal: make each skill act from a clear data engineering role.

Files:

- new `docs/personas.md`
- `README.md`
- `DES-WORKFLOW.md`
- selected skill `SKILL.md` files
- tests for persona coverage

Done when:

- Every skill maps to a primary persona.
- Persona table appears in docs.
- Tests validate coverage.

### Batch C: Implementation Story Packet

Goal: convert implementation planning/build into BMad-style story execution.

Files:

- `skills/des-implementation-planning/*`
- `skills/des-dev-story/*`
- new `templates/implementation-story-template.md`
- `ARTIFACTS.md`
- `test/skill-output-files.test.js`

Done when:

- Planning creates or updates `implementation-story.md`.
- Build skill updates allowed sections and status.
- Tests validate template and output paths.

Status: Implemented.

### Batch D: Readiness And DoD Checklists

Goal: create enforceable gates.

Files:

- new `checklists/implementation-readiness-checklist.md`
- new `checklists/definition-of-done-checklist.md`
- `skills/des-implementation-planning/*`
- `skills/des-dev-story/*`
- `skills/des-verify-delivery/*`
- tests for checklist references

Done when:

- Readiness and DoD are referenced by the correct skills.
- Build/verify cannot claim done without evidence.

Status: Implemented.

### Batch E: TDD And Review Hardening

Goal: add Superpowers-style engineering discipline.

Files:

- `skills/des-dev-story/*`
- `skills/des-code-review/*`
- `skills/des-verify-delivery/*`
- new `templates/review-report-template.md`
- tests for TDD/review guardrails

Done when:

- Build requires RED/GREEN/REFACTOR for code behavior changes.
- Review has independent layers and severity triage.
- Verify blocks stale/failing evidence.

Status: Implemented.

### Batch F: Scenario Tests And CLI Help

Goal: keep the workflow from regressing.

Files:

- new `test/workflow-guardrails.test.js`
- `bin/des-skill.js`
- `README.md`
- `DES-WORKFLOW.md`

Done when:

- Guardrail tests cover common agent failure modes.
- CLI/help docs expose support workflow and router phrases.

## Recommended Order

1. Batch A: Workflow Mode Router.
2. Batch C: Implementation Story Packet.
3. Batch D: Readiness and DoD Checklists.
4. Batch E: TDD and Review Hardening.
5. Batch B: Persona Layer.
6. Batch F: Scenario Tests and CLI Help.

Reasoning:

- Router and story packet affect the rest of the system.
- Readiness/DoD must exist before deeper build/review rules become enforceable.
- Persona is valuable but less blocking than execution artifacts.
- Scenario tests should land after the new behavior exists, then become permanent regression protection.

## Non-Goals

- Do not clone BMad naming or agile ceremonies directly.
- Do not turn DES-SKILL into a generic software project framework.
- Do not add persona roleplay that changes tone but not responsibilities.
- Do not require all 22 phase artifacts for quick fixes.
- Do not add checklists that are not referenced by skills or tests.

## Open Decisions

1. Should `implementation-story.md` replace `implementation-plan.md`, or should both exist?
   - Recommendation: keep both for now. `implementation-plan.md` is the planning artifact; `implementation-story.md` is the executable dev packet.

2. Should workflow modes be implemented only in docs, or also in CLI?
   - Recommendation: docs and router skill first, CLI help second.

3. Should support skills use subagents explicitly?
   - Recommendation: optional. Require layered review either way; use subagents only when available.

4. Should all phase skills get persona sections in one batch?
   - Recommendation: add central `docs/personas.md` first, then update phase skills in smaller batches.

## Success Criteria For The Whole Upgrade

- A user can ask for a quick fix, standard feature, or enterprise data product and the router chooses the right depth.
- A developer agent receives an implementation story with enough context to build without inventing requirements.
- Code changes are traceable to DES artifacts and acceptance criteria.
- Review catches artifact drift, not only code style.
- Verification produces fresh command evidence before completion claims.
- Retrospective turns drift/debt into named follow-up.
- Tests protect the workflow against common agent shortcuts.
