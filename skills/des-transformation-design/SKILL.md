---
name: des-transformation-design
description: Use when designing transformation logic, dependency flow, model boundaries, incremental behavior, business rules, conformance rules, metric logic, validation expectations, and contract-aligned outputs across Bronze, Silver, Gold, and serving-ready layers.
---

# des-transformation-design

## Purpose

Use this skill to create and validate the Transformation Specification for any data engineering project.

This skill defines transformation logic, dependency flow, model boundaries, incremental behavior, business rules, conformance rules, aggregation rules, metric logic, error handling, lineage, validation expectations, and implementation boundaries for moving data across Bronze, Silver, Gold, and serving-ready outputs.

The goal is to design transformation behavior clearly before writing SQL, Python, dbt models, notebooks, Spark jobs, stored procedures, orchestration workflows, or pipeline implementation code.

Transformation Design should answer:

```text
What transformations are needed?
What inputs do they consume?
What outputs do they produce?
At what grain?
Using what rules?
In what dependency order?
How do they run incrementally?
How do they handle errors, corrections, and backfills?
How do they satisfy contracts?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Transformation Specification is first written.

Phase 13 is Done only when:

```text
Transformation Specification exists
+ Phase 12 artifact and handoff are reviewed
+ transformation validation work is identified
+ transformation evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 13 Done Gate passes
+ Phase 13 to Phase 14 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 12 Data Contract Specification exists;
* Phase 12 handoff exists or the user explicitly accepts the risk of continuing without it;
* Bronze, Silver, and Gold layer designs exist;
* transformation logic needs to be made explicit before implementation;
* business rules, joins, filters, deduplication, conformance, aggregation, SCD, or metric logic need approval;
* incremental transformation, backfill, replay, rollback, or dependency order is unclear;
* the user asks to write SQL, dbt models, notebooks, Spark jobs, stored procedures, or transformation code;
* the workflow router selects Phase 13.

Do not use this skill to implement transformation code, run data quality tests, create orchestration workflows, build dashboards, implement APIs, create semantic model internals, or create CI/CD workflow files.

Allowed in this phase:

```text
transformation inventory design
Bronze-to-Silver mapping
Silver-to-Gold mapping
Gold-to-serving design-level mapping
dependency graph design
input/output dataset mapping
output grain definition
business rule definition
cleaning and conformance rule definition
join and relationship rule definition
deduplication and survivorship rule definition
SCD/history behavior definition
aggregation and metric calculation rule definition
incremental/backfill/replay strategy definition
late/corrected data behavior definition
error/quarantine behavior definition
validation/test expectation definition
contract alignment definition
lineage/metadata expectation definition
implementation boundary definition
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/phase-handoffs/phase-12-to-13-handoff.md`;
* `_des-output/evidence/phase-12/phase-12-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-12-done-gate.md`, if available;
* workflow status file, if present;
* Bronze/Silver/Gold dataset inventory;
* data contracts;
* metric and KPI definitions;
* grain and identity rules;
* source-of-truth decisions;
* quality expectations;
* freshness/SLA expectations;
* access/security constraints;
* architecture compute/tool constraints.

If the Data Contract Specification or Phase 12 handoff is missing or too weak, stop and ask whether to route back to `des-data-contracts`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/13-transformation-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-13-support-plan.md
_des-output/evidence/phase-13/phase-13-evidence-pack.md
_des-output/implementation-artifacts/phase-13-artifact-revision.md
_des-output/implementation-artifacts/phase-13-done-gate.md
_des-output/phase-handoffs/phase-13-to-14-handoff.md
```

The main artifact must capture:

* transformation summary;
* transformation scope;
* transformation non-scope;
* transformation design principles;
* transformation inventory;
* layer-to-layer transformation mapping;
* dependency graph;
* input and output dataset mapping;
* transformation grain;
* business rules;
* cleaning and conformance rules;
* join and relationship rules;
* deduplication and survivorship rules;
* SCD and history handling;
* aggregation and metric calculation rules;
* incremental processing strategy;
* backfill and replay strategy;
* late-arriving and corrected data handling;
* error handling and quarantine behavior;
* validation and test expectations;
* contract alignment;
* lineage and metadata expectations;
* performance and cost considerations;
* security and privacy handling;
* implementation boundary;
* transformation evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 13 evidence summary;
* Phase 13 handoff notes;
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
8. Do not invent transformation rules, joins, metric formulas, incremental keys, SCD behavior, or error handling.
9. Do not write SQL, Python, dbt, Spark, notebook, stored procedure, orchestration, test, CI/CD, dashboard, API, or semantic model code.
10. Before marking Phase 13 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream contracts, Gold, Silver, Bronze, architecture, and KPI context.
2. Confirm Phase 12 handoff readiness.
3. Identify transformation scope across Bronze → Silver and Silver → Gold.
4. Define transformation inventory and dependencies.
5. Define business rules, cleaning rules, conformance rules, joins, deduplication, SCD, aggregation, and metric logic.
6. Define incremental, backfill, replay, late data, and correction behavior.
7. Define validation, test, lineage, security, and performance expectations.
8. Define contract alignment.
9. Ask HALT questions for unresolved transformation decisions.
10. Draft the Transformation Specification.
11. Create the Phase 13 Support Plan.
12. Collect or reference Phase 13 evidence.
13. Revise the Transformation Specification using evidence.
14. Run the Phase 13 Done Gate.
15. Create the Phase 13 to Phase 14 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 13 uses transformation validation support work.

The purpose is not implementation. The purpose is to make transformation rules implementable, testable, contract-aligned, and traceable.

### Required Support Work

| Support Work                             | Purpose                                                       | Output                      |
| ---------------------------------------- | ------------------------------------------------------------- | --------------------------- |
| Phase 12 Handoff Review                  | Check transformations follow approved contracts.              | Evidence pack section       |
| Contract-to-Transformation Mapping Check | Ensure contracted outputs map to transformation paths.        | Evidence pack section       |
| Layer-to-Layer Mapping Check             | Validate Bronze→Silver→Gold mapping.                          | Evidence pack section       |
| Transformation Inventory Check           | Ensure required transformations are listed.                   | Evidence pack section       |
| Dependency Graph Check                   | Validate order and circular dependency risk.                  | Evidence pack section       |
| Input/Output Mapping Check               | Validate each transformation has clear inputs and output.     | Evidence pack section       |
| Transformation Grain Check               | Validate output grain.                                        | Evidence pack section       |
| Business Rule Check                      | Validate named, approved, testable business rules.            | Evidence pack section       |
| Cleaning/Conformance Rule Check          | Validate cleaning/standardization/conformance rules.          | Evidence pack section       |
| Join/Relationship Rule Check             | Validate keys, cardinality, join type, unmatched handling.    | Evidence pack section       |
| Dedup/Survivorship Rule Check            | Validate duplicate and conflict handling.                     | Evidence pack section       |
| SCD/History Behavior Check               | Validate current/history/as-of behavior.                      | Evidence pack section       |
| Aggregation/Metric Rule Check            | Validate metric logic against Phase 03/11.                    | Evidence pack section       |
| Incremental Processing Check             | Validate full/incremental/upsert/window strategy.             | Evidence pack section       |
| Backfill/Replay Check                    | Validate historical recomputation support.                    | Evidence pack section       |
| Late/Corrected Data Check                | Validate correction behavior.                                 | Evidence pack section       |
| Error/Quarantine Check                   | Validate invalid record and failure behavior.                 | Evidence pack section       |
| Validation/Test Expectation Check        | Validate test candidates for Phase 14/21.                     | Evidence pack section       |
| Contract Alignment Check                 | Validate contract clauses are satisfied or handed off.        | Evidence pack section       |
| Lineage/Metadata Check                   | Validate metadata production/preservation.                    | Evidence pack section       |
| Performance/Cost Check                   | Validate transformation shape is feasible.                    | Evidence pack section       |
| Security/Privacy Check                   | Validate sensitive handling.                                  | Evidence pack section       |
| Implementation Boundary Check            | Prevent premature code/orchestration.                         | Evidence pack section       |
| Phase 13 Done Gate                       | Decide whether Phase 13 is Done, Done with risks, or Blocked. | `phase-13-done-gate.md`     |
| Phase 13 Handoff                         | Tell Phase 14 what DQ rules must formalize.                   | `phase-13-to-14-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
dbt_model_spike
python_transform_spike
lineage_check
test_case_generation
metric_reconciliation_review
incremental_logic_review
join_cardinality_review
performance_risk_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 13 discovers that contracts, Gold grain, Silver identity, metric definitions, or source-of-truth decisions are too weak to design transformations safely.

---

## Evidence Required

Phase 13 evidence should prove that transformation design is implementable, testable, traceable, and contract-aligned.

Acceptable evidence includes:

* Phase 12 Data Contract Specification;
* Phase 12 to Phase 13 handoff;
* Phase 12 evidence pack;
* Bronze/Silver/Gold specifications;
* Phase 03 KPI definitions;
* join/grain/key rules;
* source-to-target mapping;
* business rule catalog;
* sample profiling or rule evidence;
* existing prototype or spike notes;
* architecture/tool constraints;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_12_handoff_evidence
contract_to_transformation_mapping_evidence
layer_to_layer_mapping_evidence
transformation_inventory_evidence
dependency_graph_evidence
input_output_mapping_evidence
transformation_grain_evidence
business_rule_evidence
cleaning_conformance_rule_evidence
join_relationship_rule_evidence
dedup_survivorship_rule_evidence
scd_history_behavior_evidence
aggregation_metric_rule_evidence
incremental_processing_evidence
backfill_replay_evidence
late_corrected_data_evidence
error_quarantine_evidence
validation_test_expectation_evidence
contract_alignment_evidence
lineage_metadata_evidence
performance_cost_evidence
security_privacy_evidence
implementation_boundary_evidence
```

If evidence is missing, mark the item as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.

---

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

Stop especially when:

* upstream layer designs are unknown;
* transformation logic is blocked.

Detailed HALT checkpoints are defined in steps/.

---

## Guardrails

The agent must not:

* write implementation code in this phase;
* turn vague business logic into approved transformation logic without confirmation;
* define metric logic that conflicts with Phase 03 or Phase 11;
* join datasets without approved grain and relationship rules;
* deduplicate without approved rules;
* aggregate without approved grain;
* ignore contract expectations;
* ignore lineage and testability;
* ignore incremental and replay behavior;
* silently drop invalid records;
* hide performance, cost, or operational risks;
* mark transformation design Done if P1 outputs lack transformation mapping, dependencies, validation expectations, or contract alignment;
* implement SQL, Python, dbt, Spark, notebooks, stored procedures, orchestration, tests, CI/CD, dashboards, APIs, or semantic model code.

---

## Handoff To The Next Skill

Recommend `des-data-quality` only after:

```text
Transformation Specification exists
+ Phase 13 support plan exists or is waived with reason
+ Phase 13 evidence pack exists or evidence is waived with reason
+ Phase 13 Done Gate is Pass or Pass with risks
+ Phase 13 to Phase 14 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-transformation-design
return to Step 02 transformation logic and dependencies
resolve HALT question
route back to des-data-contracts
route back to des-gold-layer-design
route back to des-silver-layer-design
route back to des-requirements-and-kpis
des-wise
des-correct-course
```
