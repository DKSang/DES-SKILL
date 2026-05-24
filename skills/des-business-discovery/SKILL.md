---
name: des-business-discovery
description: Use when starting a data engineering project, the project idea is vague or solution-first, business context is missing, or the workflow router selects Phase 1.
---

# des-business-discovery

## Purpose

Use this skill to create and validate the Business Discovery Brief for any data engineering project.

This skill helps the agent understand the business problem, target consumers, downstream use cases, decision context, maturity level, constraints, risks, and initial success criteria before technical design or implementation begins.

In the Phase-Orchestrated Support Model, this phase is not Done when the Business Discovery Brief is first written.

Phase 01 is Done only when:

```text
Business Discovery Brief exists
+ required discovery support work is identified
+ business-context evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 01 Done Gate passes
+ Phase 01 to Phase 02 handoff exists
```

---

## When To Use

Use this skill when:

* starting a new data engineering project;
* the project idea is vague or solution-first;
* the user asks for architecture, ingestion, warehouse/lakehouse, dashboard, ML, API, or implementation before business context is clear;
* existing work lacks a documented business discovery artifact;
* existing work has technical artifacts but no validated business context;
* the workflow router selects Phase 1.

Do not use this skill to design schemas, pipelines, transformations, data contracts, dashboards, ML models, or code.

---

## Required Inputs

The agent should look for:

* project idea or problem statement;
* existing README, PRD, brief, proposal, ticket, or notes;
* known stakeholders or consumers;
* known business goals or decision needs;
* known constraints such as platform, cost, deadline, compliance, or team capability;
* workflow status file, if present;
* previous conversation context, if available;
* existing `01-business-discovery-brief.md`, if present.

If these inputs are missing, continue only as Draft and use HALT checkpoints for unresolved decisions.

Phase 01 has no required upstream phase artifact.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-01-support-plan.md
_des-output/evidence/phase-01/phase-01-evidence-pack.md
_des-output/implementation-artifacts/phase-01-artifact-revision.md
_des-output/implementation-artifacts/phase-01-done-gate.md
_des-output/phase-handoffs/phase-01-to-02-handoff.md
```

The main artifact must capture:

* project intent;
* business problem;
* stakeholders and downstream consumers;
* target decisions or use cases;
* expected business value;
* data maturity context;
* scope and non-scope;
* constraints;
* assumptions;
* risks;
* initial success criteria;
* open questions;
* Phase 01 evidence summary;
* Phase 01 handoff notes;
* recommended next skill.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every `HALT` point and wait for user input.
8. Do not invent business goals, stakeholders, consumer priorities, maturity level, or success criteria.
9. Do not write implementation code.
10. Do not design physical tables, pipelines, architecture, contracts, or serving layers in this phase.
11. Before marking Phase 01 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm whether Business Discovery is the correct next step.
2. Gather available project context and business-context evidence.
3. Identify stakeholders, consumers, business problem, target use cases, and expected value.
4. Assess initial data maturity and delivery constraints.
5. Ask required HALT questions for important decisions.
6. Draft the Business Discovery Brief.
7. Create the Phase 01 Support Plan.
8. Collect or reference Phase 01 evidence.
9. Revise the Business Discovery Brief using evidence.
10. Run the Phase 01 Done Gate.
11. Create the Phase 01 to Phase 02 Handoff.
12. Update workflow status.
13. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 01 uses lightweight support work.

The purpose is not technical validation. The purpose is to prevent downstream phases from relying on vague or invented business context.

### Required Support Work

| Support Work                   | Purpose                                                       | Output                      |
| ------------------------------ | ------------------------------------------------------------- | --------------------------- |
| Context Source Review          | Identify where business context came from.                    | Evidence pack section       |
| Business Intent Validation     | Check whether the project intent is clear.                    | Evidence pack section       |
| Stakeholder and Consumer Check | Verify or mark unknown primary users.                         | Evidence pack section       |
| Scope Boundary Check           | Confirm MVP scope and non-scope.                              | Evidence pack section       |
| Success Criteria Check         | Ensure success criteria exist before Phase 02.                | Evidence pack section       |
| Phase 01 Done Gate             | Decide whether Phase 01 is Done, Done with risks, or Blocked. | `phase-01-done-gate.md`     |
| Phase 01 Handoff               | Tell Phase 02 what can safely be used.                        | `phase-01-to-02-handoff.md` |

### Optional Support Skills

Existing support or learning skills may be used when helpful:

```text
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if evidence shows that existing business discovery content conflicts with the real project direction.

---

## Evidence Required

Phase 01 evidence may be lightweight, but it must be explicit.

Acceptable evidence includes:

* user-provided project statement;
* README, PRD, proposal, ticket, or notes;
* stakeholder/user statement;
* prior artifact;
* business constraints provided by the user;
* explicit user choices at HALT points;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
project_intent_evidence
primary_consumer_evidence
target_use_case_evidence
mvp_scope_evidence
success_criteria_evidence
```

If evidence is missing, mark the item as `Open Question`, `Assumption`, `Risk`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* start from tools or technology;
* assume the primary consumer;
* assume project maturity without evidence;
* define final KPI formulas in this phase;
* design ingestion, Medallion layers, contracts, semantic models, dashboards, or CI/CD;
* mark the artifact Done if project intent, primary consumer, target use case, or success criteria are unresolved without accepted risk;
* mark Phase 01 Done if the Business Discovery Brief exists but the handoff to Phase 02 is missing;
* hide missing evidence by writing confident business claims.

---

## HALT Policy

This skill must stop when a required business decision cannot be safely inferred.

Stop especially when:

* project intent is unclear;
* primary consumer is unclear;
* business problem is vague;
* target decision or use case is not defined;
* MVP boundary is not agreed;
* success criteria are missing;
* the user asks for implementation before discovery is complete;
* Phase 02 would depend on an unvalidated or invented business assumption.

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
* keep unresolved decisions as open questions, not assumptions;
* create initial artifact before phase completion evidence is finalized;
* run or document required support work before Done Gate;
* create a handoff before recommending the next phase;
* update workflow status before status advances.

---

## Quality Checklist

* [ ] Project intent is defined or the artifact remains Draft.
* [ ] Business problem is stated in non-technical language.
* [ ] Primary consumer or stakeholder group is identified.
* [ ] At least one target decision or use case is identified.
* [ ] Expected value is documented.
* [ ] MVP or first-release scope is defined or explicitly unresolved.
* [ ] Constraints, assumptions, risks, success criteria, and open questions are captured.
* [ ] Phase 01 support plan exists or is explicitly waived with reason.
* [ ] Phase 01 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 01 artifact revision notes exist.
* [ ] Phase 01 Done Gate result is recorded.
* [ ] Phase 01 to Phase 02 handoff exists.
* [ ] The artifact does not design schemas, pipelines, architecture, contracts, dashboards, ML models, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                                   | Why It Fails                                                          |
| :------------------------------------------------------------- | :-------------------------------------------------------------------- |
| Starting from a tool or platform                               | Technology preference is not business intent                          |
| Treating dashboard, API, ML, or lakehouse as the business goal | These are possible serving or implementation ideas                    |
| Inventing the primary consumer                                 | Downstream questions, KPIs, contracts, and quality expectations drift |
| Defining final KPI formulas in discovery                       | KPI design belongs in `des-requirements-and-kpis`                     |
| Marking Done with unresolved discovery decisions               | Downstream phases inherit hidden assumptions                          |
| Skipping handoff because Phase 01 feels simple                 | Phase 02 needs clear boundaries for business question generation      |
| Treating user guesses as validated facts                       | Missing evidence must remain visible                                  |

---

## Handoff To The Next Skill

Recommend `des-business-questions` only after:

```text
Business Discovery Brief exists
+ Phase 01 support plan exists or is waived with reason
+ Phase 01 evidence pack exists or evidence is waived with reason
+ Phase 01 Done Gate is Pass or Pass with risks
+ Phase 01 to Phase 02 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-business-discovery
return to Step 02 decisions
resolve HALT question
des-wise
des-correct-course
```
