# Step 01 - Context and Readiness

## Goal

Confirm that Business Discovery is the correct next step and gather enough context to begin the Business Discovery Brief and Phase 01 Support Plan.

This step does not mark Phase 01 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* current user request;
* project idea or problem statement;
* existing README, PRD, notes, proposal, ticket, or prior artifact;
* known stakeholders or consumers;
* known platform/tool constraints;
* workflow status file, if present;
* existing `01-business-discovery-brief.md`, if present;
* existing `phase-01-support-plan.md`, if present;
* existing `phase-01-evidence-pack.md`, if present;
* existing `phase-01-to-02-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether `output_file` already exists.
4. Check whether workflow status exists.
5. Check whether Phase 01 support/evidence/handoff files already exist.
6. Summarize known project context in 5-10 lines.
7. Identify missing business context.
8. Identify available evidence sources for Phase 01.
9. Decide whether to:

   * create a new Business Discovery Brief;
   * update an existing Business Discovery Brief;
   * continue Phase 01 evidence/handoff work;
   * route to another skill;
   * stop at HALT.

---

## Hints

* Start from the problem, not the technology.
* If the user mentions tools, treat them as constraints or preferences, not business goals.
* If the user only provides an idea, continue as Draft and ask targeted HALT questions.
* If code already exists but no business discovery artifact exists, this phase is still valid.
* If the user says "just implement," check whether a validated discovery handoff already exists before allowing implementation.
* Distinguish stakeholder, consumer, and owner:

  * stakeholder = affected or decision-making party;
  * consumer = person/system using the data output;
  * owner = party accountable for approval or operation.
* Evidence in Phase 01 may be user-provided context, existing docs, explicit HALT answers, or accepted risk.

---

## Discovery Lens

Use this lens when summarizing context:

| Area                | Question                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------ |
| Why                 | Why does this data project exist?                                                          |
| Who                 | Who will use or depend on the output?                                                      |
| Decision / Use Case | What decision, workflow, analysis, ML task, operation, or product experience will improve? |
| Value               | What value should be created?                                                              |
| Maturity            | Is this ad hoc, MVP, scaling, production-grade, or portfolio/learning?                     |
| Constraint          | What time, cost, platform, compliance, team, or source constraints exist?                  |
| Risk                | What could make the project fail?                                                          |
| Evidence            | What source supports this claim?                                                           |

---

## Phase 01 Evidence Sources

Classify available context as evidence.

| Evidence Source           | Examples                                            | Strength                          |
| ------------------------- | --------------------------------------------------- | --------------------------------- |
| Direct user answer        | User chooses project intent, consumer, MVP boundary | Strong                            |
| Existing project document | README, PRD, proposal, ticket, report               | Strong                            |
| Prior DES artifact        | Existing discovery brief or project context file    | Medium to Strong                  |
| Conversation summary      | Prior user discussion summarized by agent           | Medium                            |
| Agent inference           | Reasonable inference from context                   | Weak; must be marked assumption   |
| Missing evidence          | No support available                                | Must become open question or risk |

---

## HALT - Project Intent Required

Stop if there is not enough context to identify the project intent.

### Decision needed

What kind of project is this?

### Options

A. Portfolio / learning project
B. Internal analytics or reporting project
C. MVP data product
D. Production-grade data product
E. Platform or infrastructure foundation
F. Migration / modernization project
G. Custom project type

### Required user response

Choose one option or provide a custom intent.

---

## HALT - Existing Artifact Without Evidence

Stop if an existing `01-business-discovery-brief.md` is marked Done but there is no evidence, Done Gate, or handoff and the user wants to start Phase 02 or later.

### Decision needed

How should the existing artifact be treated?

### Options

A. Treat it as Draft and validate it now
B. Accept it with risk and create a handoff
C. Run Phase 01 Done Gate first
D. Continue to Phase 02 with explicit accepted risk
E. Stop workflow

### Required user response

Choose A/B/C/D/E.

---

## Completion Criteria

This step is complete when:

* project intent is known or explicitly marked unresolved;
* available context is summarized;
* missing context is listed;
* available evidence sources are identified;
* existing Phase 01 files are detected if present;
* blocking HALT questions are answered or artifact remains Draft.

---

## Next Step

After completion, load only:

```text
steps/step-02-discovery-decisions.md
```
