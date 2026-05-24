---
name: des-requirements-and-kpis
description: Use when Phase 2 business questions need to become measurable data engineering requirements, KPI definitions, SLA expectations, acceptance criteria, or metric ownership decisions.
---

# des-requirements-and-kpis

## Purpose

Use this skill to create and validate the Requirements and KPI Catalog for any data engineering project.

This skill converts approved business questions into:

- functional requirements;
- non-functional requirements;
- candidate KPIs;
- metric definitions;
- SLA expectations;
- quality expectations;
- acceptance criteria;
- metric ownership decisions.

The goal is to ensure that later phases design sources, domain models, architecture, data products, Gold tables, semantic layers, serving layers, tests, and release gates from explicit requirements rather than vague assumptions.

In the Phase-Orchestrated Support Model, this phase is not Done when the Requirements and KPI Catalog is first written.

Phase 03 is Done only when:

```text
Requirements and KPI Catalog exists
+ Phase 02 artifact and handoff are reviewed
+ requirement and metric validation work is identified
+ requirement/KPI evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 03 Done Gate passes
+ Phase 03 to Phase 04 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 02 Business Question Catalog exists;
* Phase 02 handoff exists or the user explicitly accepts the risk of continuing without it;
* business questions need to become measurable requirements;
* stakeholders have asked for dashboards, reports, data products, ML datasets, APIs, or operational outputs but success criteria are unclear;
* KPI definitions are vague, conflicting, or undocumented;
* freshness, reliability, quality, security, or latency expectations are not explicit;
* the workflow router selects Phase 03.

Do not use this skill to design physical schemas, source ingestion, transformations, Gold tables, contracts, dashboards, semantic models, APIs, orchestration, or code.

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/phase-handoffs/phase-02-to-03-handoff.md`;
* `_des-output/evidence/phase-02/phase-02-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-02-done-gate.md`, if available;
* workflow status file, if present;
* approved or draft business questions;
* known consumers, decisions, scope, non-scope, constraints, and success criteria;
* existing metric/KPI notes, if any.

If the Business Question Catalog or Phase 02 handoff is missing or incomplete, stop and ask whether to route back to `des-business-questions`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-03-support-plan.md
_des-output/evidence/phase-03/phase-03-evidence-pack.md
_des-output/implementation-artifacts/phase-03-artifact-revision.md
_des-output/implementation-artifacts/phase-03-done-gate.md
_des-output/phase-handoffs/phase-03-to-04-handoff.md
```

The main artifact must capture:

* requirement summary;
* functional requirements;
* non-functional requirements;
* KPI and metric catalog;
* metric definitions and formulas;
* metric grain;
* metric owner;
* business question mapping;
* consumer mapping;
* acceptance criteria;
* freshness/SLA expectations;
* quality expectations;
* security/privacy constraints;
* cost/performance constraints;
* requirement traceability;
* conflicts;
* assumptions;
* risks;
* open questions;
* Phase 03 evidence summary;
* Phase 03 handoff notes;
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
8. Do not invent KPI formulas, metric owners, SLA levels, acceptance criteria, or quality thresholds.
9. Do not design tables, sources, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.
10. Before marking Phase 03 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm Phase 01 and Phase 02 context.
2. Confirm Phase 02 handoff readiness.
3. Extract approved business questions, consumers, decisions, scope, and value drivers.
4. Convert questions into functional and non-functional requirements.
5. Define candidate KPIs and metrics.
6. Capture metric definition, formula, grain, owner, acceptance criteria, and conflicts.
7. Validate freshness/SLA, quality, security/privacy, and cost/performance expectations.
8. Ask HALT questions for unresolved metric or SLA decisions.
9. Draft the Requirements and KPI Catalog.
10. Create the Phase 03 Support Plan.
11. Collect or reference Phase 03 evidence.
12. Revise the Requirements and KPI Catalog using evidence.
13. Run the Phase 03 Done Gate.
14. Create the Phase 03 to Phase 04 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 03 uses requirement and metric validation support work.

The purpose is not physical data design. The purpose is to prevent downstream phases from defining data products, source assessments, Gold tables, contracts, and tests from vague or unmeasurable requirements.

### Required Support Work

| Support Work                                        | Purpose                                                                                                             | Output                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Phase 02 Handoff Review                             | Check that requirements are derived from validated business questions.                                              | Evidence pack section       |
| Business Question to Requirement Traceability Check | Ensure each P1/P2 question maps to requirements.                                                                    | Evidence pack section       |
| Functional Requirement Testability Check            | Ensure requirements can become acceptance criteria/tests later.                                                     | Evidence pack section       |
| Non-Functional Requirement Measurability Check      | Make freshness, quality, reliability, performance, security, and cost expectations measurable or marked unresolved. | Evidence pack section       |
| KPI Formula Check                                   | Ensure approved KPIs have clear formulas or remain Candidate/Draft.                                                 | Evidence pack section       |
| Metric Grain Check                                  | Ensure approved KPIs define “one measurement per ___”.                                                              | Evidence pack section       |
| Metric Owner Check                                  | Ensure approved KPIs have owner or remain Draft.                                                                    | Evidence pack section       |
| Acceptance Criteria Check                           | Ensure P1 requirements have evidence-based acceptance criteria.                                                     | Evidence pack section       |
| Freshness/SLA Check                                 | Ensure P1 freshness/SLA expectations are measurable.                                                                | Evidence pack section       |
| Metric Conflict Check                               | Ensure conflicts are documented and not silently resolved.                                                          | Evidence pack section       |
| Phase 03 Done Gate                                  | Decide whether Phase 03 is Done, Done with risks, or Blocked.                                                       | `phase-03-done-gate.md`     |
| Phase 03 Handoff                                    | Tell Phase 04 what can safely be used.                                                                              | `phase-03-to-04-handoff.md` |

### Optional Support Skills

Existing support or learning skills may be used when helpful:

```text
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 03 discovers that Phase 02 questions are wrong, unprioritized, out of scope, or not answerable enough to support KPI/requirement design.

---

## Evidence Required

Phase 03 evidence may be lightweight, but it must be explicit.

Acceptable evidence includes:

* Phase 02 Business Question Catalog;
* Phase 02 to Phase 03 handoff;
* Phase 02 evidence pack;
* user-approved KPI formula, grain, owner, SLA, or acceptance criteria;
* existing KPI dictionary or metric notes;
* stakeholder/user-provided requirement;
* explicit user choices at HALT points;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_02_handoff_evidence
question_requirement_traceability_evidence
functional_requirement_testability_evidence
non_functional_requirement_measurability_evidence
kpi_formula_evidence
metric_grain_evidence
metric_owner_evidence
freshness_sla_evidence
acceptance_criteria_evidence
metric_conflict_evidence
```

If evidence is missing, mark the item as `Candidate`, `Draft`, `Open Question`, `Conflict`, `Risk`, `Deferred`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* define a metric without business meaning;
* define a KPI without grain;
* define a KPI without owner or approval status;
* assume freshness/SLA from vague words like “daily”, “real-time”, or “fast”;
* resolve conflicting metric definitions by guessing;
* turn candidate metrics into approved KPIs without confirmation;
* design Gold tables or semantic model logic in this phase;
* choose final data sources before Phase 05;
* mark the artifact Done if P1 business questions have no measurable requirement or success criterion;
* mark Phase 03 Done if the handoff to Phase 04 is missing;
* hide metric conflicts or unresolved formulas behind confident wording.

---

## Quality Checklist

* [ ] Phase 01 and Phase 02 artifacts are available or Draft continuation is explicitly accepted.
* [ ] Phase 02 handoff exists or missing handoff risk is explicitly accepted.
* [ ] P1/P2 business questions are mapped to requirements.
* [ ] P1 functional requirements have consumers, priority, status, and acceptance criteria.
* [ ] Approved KPIs have business meaning, formula, grain, owner, and approval status.
* [ ] Candidate metrics are clearly marked as Candidate or Draft.
* [ ] Freshness/SLA expectations are explicit or marked unresolved.
* [ ] Quality expectations are explicit or marked unresolved.
* [ ] Metric conflicts are documented and not silently resolved.
* [ ] Phase 03 support plan exists or is explicitly waived with reason.
* [ ] Phase 03 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 03 artifact revision notes exist.
* [ ] Phase 03 Done Gate result is recorded.
* [ ] Phase 03 to Phase 04 handoff exists.
* [ ] The artifact does not design sources, tables, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                           | Why It Fails                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Treating a candidate metric as an approved KPI         | Later phases may encode an unapproved formula into Gold tables, semantic models, and tests. |
| Writing “daily”, “fast”, or “trusted” as a requirement | These words are not measurable until time, threshold, evidence, and severity are defined.   |
| Defining KPI formulas without grain                    | The same formula can produce different values at event, entity, period, or segment grain.   |
| Assigning no metric owner                              | No one can approve, change, or resolve conflicts in the KPI definition.                     |
| Designing tables in this phase                         | Physical design belongs to downstream phases after requirements are approved.               |
| Treating source hints as approved source dependencies  | Source assessment belongs to Phase 05.                                                      |
| Starting Phase 04 from vague KPIs                      | Data product boundaries depend on measurable, prioritized requirements.                     |

---

## HALT Policy

This skill must stop when a requirement or metric decision cannot be safely inferred.

Stop especially when:

* upstream business questions are missing or unapproved;
* Phase 02 handoff is missing and the user has not accepted the risk;
* KPI formula is unclear;
* metric grain is unclear;
* metric owner is unclear;
* freshness/SLA expectation is unclear;
* acceptance criteria are missing;
* two stakeholders define the same metric differently;
* a requirement implies security, privacy, cost, or operational behavior that needs explicit approval;
* Phase 04 would depend on Draft KPIs as if they were Approved.

---

## Handoff To The Next Skill

Recommend `des-data-product-definition` only after:

```text
Requirements and KPI Catalog exists
+ Phase 03 support plan exists or is waived with reason
+ Phase 03 evidence pack exists or evidence is waived with reason
+ Phase 03 Done Gate is Pass or Pass with risks
+ Phase 03 to Phase 04 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-requirements-and-kpis
return to Step 02 requirements/KPI definition
resolve HALT question
route back to des-business-questions
des-wise
des-correct-course
```
