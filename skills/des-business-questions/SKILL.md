---
name: des-business-questions
description: Use when Phase 1 context and handoff exist, and business questions are vague, duplicated, unprioritized, unmapped to consumers, or needed before KPI and data product design.
---

# des-business-questions

## Purpose

Use this skill to create and validate the Business Question Catalog for any data engineering project.

This skill helps the agent understand the business problem, target consumers, downstream use cases, decision context, maturity level, constraints, risks, and initial success criteria before technical design or implementation begins.

In the Phase-Orchestrated Support Model, this phase is not Done when the Business Question Catalog is first written.

Phase 02 is Done only when:

```text
Business Question Catalog exists
+ Phase 01 artifact and handoff are reviewed
+ required question validation work is identified
+ question evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 02 Done Gate passes
+ Phase 02 to Phase 03 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 01 Business Discovery is complete or available as a draft with accepted risk;
* Phase 01 handoff exists or the user explicitly accepts the risk of continuing without it;
* stakeholders, consumers, target decisions, or expected value are known enough to derive questions;
* the user wants dashboards, reports, APIs, ML datasets, data products, or analytics but the exact questions are unclear;
* existing questions are vague, duplicated, unprioritized, or not mapped to consumers;
* the workflow router selects Phase 02.

Do not use this skill to define final KPI formulas, design tables, choose data sources, write SQL, design dashboards, create data contracts, or implement pipelines.

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/phase-handoffs/phase-01-to-02-handoff.md`;
* `_des-output/evidence/phase-01/phase-01-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-01-done-gate.md`, if available;
* workflow status file, if present;
* known consumers and stakeholders;
* target decisions or use cases;
* expected value and initial success criteria;
* scope and non-scope from Phase 01.

If the Phase 01 artifact or handoff is missing, stale, or incomplete, stop and ask whether to route back to `des-business-discovery`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/02-business-question-catalog.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-02-support-plan.md
_des-output/evidence/phase-02/phase-02-evidence-pack.md
_des-output/implementation-artifacts/phase-02-artifact-revision.md
_des-output/implementation-artifacts/phase-02-done-gate.md
_des-output/phase-handoffs/phase-02-to-03-handoff.md
```

The main artifact must capture:

* business questions;
* consumer or stakeholder for each question;
* decision or use case supported;
* question type;
* priority;
* expected answer format;
* candidate metrics, not final KPI definitions;
* freshness expectation;
* grain hints;
* source hints, if known;
* dependencies;
* out-of-scope questions;
* assumptions;
* risks;
* open questions;
* Phase 02 evidence summary;
* Phase 02 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent stakeholder priorities, consumer needs, target decisions, or business questions without evidence.
9. Do not define final KPI formulas in this phase.
10. Do not design tables, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.
11. Before marking Phase 02 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm Phase 01 context and handoff are available.
2. Extract consumers, target decisions, expected value, scope, and constraints.
3. Generate candidate business questions.
4. Rewrite vague asks into answerable questions.
5. Classify and prioritize questions.
6. Map questions to consumers and decisions.
7. Identify dependencies, freshness expectations, grain hints, and candidate answer formats.
8. Mark candidate metrics as candidates only.
9. Ask HALT questions for priority, ambiguity, unsupported questions, and scope conflicts.
10. Draft the Business Question Catalog.
11. Create the Phase 02 Support Plan.
12. Collect or reference Phase 02 evidence.
13. Revise the Business Question Catalog using evidence.
14. Run the Phase 02 Done Gate.
15. Create the Phase 02 to Phase 03 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 02 uses business-question validation support work.

The purpose is not technical implementation. The purpose is to prevent downstream phases from designing KPIs, sources, marts, and contracts from vague or unprioritized questions.

### Required Support Work

| Support Work             | Purpose                                                                    | Output                      |
| ------------------------ | -------------------------------------------------------------------------- | --------------------------- |
| Phase 01 Handoff Review  | Check that questions are derived from validated Phase 01 context.          | Evidence pack section       |
| Question Quality Review  | Ensure questions are answerable, useful, scoped, and business-readable.    | Evidence pack section       |
| Consumer Mapping Check   | Ensure each P1 question maps to a consumer.                                | Evidence pack section       |
| Decision Mapping Check   | Ensure each P1 question maps to a decision or use case.                    | Evidence pack section       |
| Scope Alignment Check    | Ensure questions fit Phase 01 MVP scope or are marked future/out-of-scope. | Evidence pack section       |
| Priority Validation      | Ensure top questions are prioritized or marked Draft.                      | Evidence pack section       |
| Answerability Risk Check | Flag questions that may not be answerable with plausible data.             | Evidence pack section       |
| Phase 02 Done Gate       | Decide whether Phase 02 is Done, Done with risks, or Blocked.              | `phase-02-done-gate.md`     |
| Phase 02 Handoff         | Tell Phase 03 what can safely be used.                                     | `phase-02-to-03-handoff.md` |

### Optional Support Skills

Existing support or learning skills may be used when helpful:

```text
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 02 questions reveal that Phase 01 scope, consumer, or target use case is wrong.

---

## Evidence Required

Phase 02 evidence may be lightweight, but it must be explicit.

Acceptable evidence includes:

* Phase 01 Business Discovery Brief;
* Phase 01 to Phase 02 handoff;
* user-approved question priority;
* stakeholder/user-provided question list;
* existing dashboard/report/analytics request;
* explicit user choices at HALT points;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_01_handoff_evidence
consumer_mapping_evidence
decision_mapping_evidence
priority_evidence
scope_alignment_evidence
answerability_risk_evidence
```

If evidence is missing, mark the item as `Open Question`, `Assumption`, `Risk`, `Deferred`, `Out of Scope`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* turn vague desires into approved questions without confirmation;
* assume every stakeholder request is in scope;
* prioritize questions without user or artifact evidence;
* define final KPI formulas;
* design Gold tables or metrics layer logic;
* choose sources before source assessment;
* mark the artifact Done if top-priority questions are unresolved without accepted risk;
* mark Phase 02 Done if the handoff to Phase 03 is missing;
* hide missing evidence by writing confident business claims.

---

## HALT Policy

This skill must stop when a required question decision cannot be safely inferred.

Stop especially when:

* the Phase 01 Business Discovery artifact is missing or inconsistent;
* Phase 01 handoff is missing and the user has not accepted the risk;
* primary consumer is unclear;
* question priority is unclear;
* a question is not answerable with plausible data;
* a question conflicts with Phase 01 scope or non-scope;
* a question implies KPI, ML, recommendation, compliance, or operational behavior that needs explicit approval;
* Phase 03 would depend on unapproved candidate metrics or vague questions.

Detailed HALT checkpoints are defined in `steps/`.

---

## Conventions

* Bare paths such as `steps/step-01-context-and-readiness.md` resolve from the skill root.
* `{skill-root}` resolves to this skill's installed directory.
* `{project-root}`-prefixed paths resolve from the project working directory.
* Document output language follows project config.
* Phase support outputs use paths from `customize.toml`.

---

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

* read only the current step file;
* execute steps in order;
* stop at every HALT checkpoint;
* keep unresolved questions as Draft/Open/Deferred/Out of Scope, not approved facts;
* create initial artifact before phase completion evidence is finalized;
* run or document required support work before Done Gate;
* create a handoff before recommending the next phase;
* update workflow status before status advances.

---

## Quality Checklist

* [ ] Phase 01 Business Discovery exists or Draft continuation is explicitly accepted.
* [ ] Phase 01 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each P1 question maps to a consumer.
* [ ] Each P1 question maps to a decision or use case.
* [ ] Each P1 question has clear business value and priority.
* [ ] Each P1 question is inside scope or explicitly marked future/out-of-scope/open/risk.
* [ ] Candidate metrics, source hints, and grain hints are clearly marked as hints.
* [ ] Phase 02 support plan exists or is explicitly waived with reason.
* [ ] Phase 02 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 02 artifact revision notes exist.
* [ ] Phase 02 Done Gate result is recorded.
* [ ] Phase 02 to Phase 03 handoff exists.
* [ ] The catalog does not define final KPI formulas, sources, tables, dashboards, APIs, ML models, pipelines, contracts, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                   | Why It Fails                                                                   |
| :--------------------------------------------- | :----------------------------------------------------------------------------- |
| Treating dashboard names as business questions | A dashboard is a possible serving surface, not the question itself             |
| Treating metrics as questions                  | Metrics are defined in Phase 03 after questions are approved                   |
| Treating table names as questions              | Table design belongs downstream                                                |
| Prioritizing all stakeholder requests equally  | Downstream phases need MVP tradeoffs                                           |
| Choosing data sources in Phase 02              | Source assessment belongs in Phase 05                                          |
| Starting Phase 03 from vague question titles   | KPI design needs approved, answerable, prioritized questions                   |
| Hiding answerability risk                      | Phase 05 source assessment needs to know which questions may be hard to answer |

---

## Handoff To The Next Skill

Recommend `des-requirements-and-kpis` only after:

```text
Business Question Catalog exists
+ Phase 02 support plan exists or is waived with reason
+ Phase 02 evidence pack exists or evidence is waived with reason
+ Phase 02 Done Gate is Pass or Pass with risks
+ Phase 02 to Phase 03 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-business-questions
return to Step 02 prioritization
resolve HALT question
route back to des-business-discovery
des-wise
des-correct-course
```
