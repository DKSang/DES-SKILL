---
name: des-semantic-model-design
description: Use when designing semantic models, metrics layers, measures, dimensions, hierarchies, relationships, trust status, freshness/quality visibility, and business-friendly data consumption.
---

# des-semantic-model-design

## Purpose

Use this skill to create and validate the Semantic Model Specification for any data engineering project.

This skill defines how trusted Gold outputs are exposed to business users, analysts, BI tools, metrics layers, dashboards, AI agents, or applications through business-friendly semantic concepts.

It covers semantic entities, measures, dimensions, hierarchies, relationships, metric definitions, calculation ownership, naming conventions, filters, security, certification, lineage, usage rules, freshness visibility, quality visibility, and consumer-facing meaning.

The goal is to prevent inconsistent metrics, ambiguous business terms, unsafe joins, unclear dimensions, hidden quality risk, and dashboard-level metric duplication.

Semantic Model Design should answer:

```text
Which business concepts are exposed?
Which Gold outputs feed them?
Which measures are certified?
Which dimensions can slice them?
How do entities relate?
At what grain do measures aggregate?
Who owns calculations?
Who can access rows/columns/measures?
How should freshness and quality be shown to users?
Which semantic objects are Draft, Promoted, Certified, Risk, Blocked, or Deprecated?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Semantic Model Specification is first written.

Phase 16 is Done only when:

```text
Semantic Model Specification exists
+ Phase 15 artifact and handoff are reviewed
+ semantic validation work is identified
+ semantic evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 16 Done Gate passes
+ Phase 16 to Phase 17 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 15 Orchestration and Observability Specification exists;
* Phase 15 handoff exists or the user explicitly accepts the risk of continuing without it;
* Gold outputs are ready or planned for BI, semantic layer, dashboarding, analytics, AI agents, or self-service consumption;
* business users need friendly terms instead of physical table/column names;
* metrics and KPIs need consistent exposure;
* slicing/filtering dimensions need approval;
* semantic relationships and join behavior need clarity;
* row-level, column-level, object-level, or measure-level security affects consumption;
* freshness/quality status should be visible to consumers;
* the workflow router selects Phase 16.

Do not use this skill to build dashboards, write DAX/LookML/SQL/Cube/dbt semantic code, create BI visuals, implement APIs, deploy semantic models, create CI/CD workflows, or create Power BI/Looker/Cube implementation artifacts.

Allowed in this phase:

```text
semantic scope design
semantic model inventory
consumer/use-case mapping
Gold-to-semantic mapping
business glossary alignment
semantic entity design
measure/KPI semantic design
dimension/attribute design
hierarchy design
relationship/join behavior design
grain/aggregation behavior design
filter/slicer design
time intelligence expectation design
calculation ownership design
naming/display convention design
security/access model design
certification/trust status design
freshness/quality display expectation design
lineage/metadata expectation design
semantic testing expectation design
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/phase-handoffs/phase-15-to-16-handoff.md`;
* `_des-output/evidence/phase-15/phase-15-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-15-done-gate.md`, if available;
* workflow status file, if present;
* approved KPIs and metric definitions;
* Gold datasets and grain;
* Gold quality and freshness expectations;
* semantic/BI serving direction;
* consumers and personas;
* access/security requirements;
* glossary/domain concepts.

If the Gold Layer Specification, KPI definitions, or Phase 15 handoff are missing or too weak, stop and ask whether to route back to the owning phase.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/16-semantic-model-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-16-support-plan.md
_des-output/evidence/phase-16/phase-16-evidence-pack.md
_des-output/implementation-artifacts/phase-16-artifact-revision.md
_des-output/implementation-artifacts/phase-16-done-gate.md
_des-output/phase-handoffs/phase-16-to-17-handoff.md
```

The main artifact must capture:

* semantic model summary;
* semantic scope;
* semantic non-scope;
* semantic design principles;
* semantic model inventory;
* consumer and use-case mapping;
* Gold-to-semantic mapping;
* business glossary alignment;
* semantic entities;
* measures and KPIs;
* dimensions and attributes;
* hierarchies;
* relationships and join behavior;
* grain and aggregation behavior;
* filters and slicers;
* time intelligence expectations;
* calculation ownership;
* naming and display conventions;
* security and access model;
* certification and trust status;
* freshness and quality display expectations;
* lineage and metadata expectations;
* semantic testing expectations;
* semantic evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 16 evidence summary;
* Phase 16 handoff notes;
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
8. Do not invent metric formulas, business terms, relationships, hierarchies, security rules, certified status, ownership, or trust claims.
9. Do not write DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboard, API, CI/CD, deployment, or implementation code.
10. Before marking Phase 16 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream transformation, contract, Gold, Silver, Bronze, and requirement context.
2. Confirm Phase 15 handoff readiness.
3. Identify datasets and outputs requiring quality rules.
4. Define data quality dimensions and rule categories.
5. Map rules to datasets, contracts, transformations, and layers.
6. Define thresholds, severity, failure handling, and quality gates.
7. Define evidence, reporting, ownership, and monitoring expectations.
8. Ask HALT questions for unresolved quality decisions.
9. Draft the Data Quality Specification.
10. Create the Phase 14 Support Plan.
11. Collect or reference Phase 14 evidence.
12. Revise the Data Quality Specification using evidence.
13. Run the Phase 14 Done Gate.
14. Create the Phase 14 to Phase 15 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 16 uses semantic validation support work.

The purpose is not BI implementation. The purpose is to make metrics, dimensions, relationships, access, and trust status business-safe before serving-layer design.

### Required Support Work

| Support Work                       | Purpose                                                                | Output                      |
| ---------------------------------- | ---------------------------------------------------------------------- | --------------------------- |
| Phase 15 Handoff Review            | Check semantic design follows operational trust/freshness constraints. | Evidence pack section       |
| Semantic Scope Check               | Validate semantic model boundary.                                      | Evidence pack section       |
| Consumer/Use-Case Mapping Check    | Ensure semantic model exists for real users.                           | Evidence pack section       |
| Gold-to-Semantic Mapping Check     | Ensure semantic objects trace to trusted Gold outputs.                 | Evidence pack section       |
| Business Glossary Alignment Check  | Avoid term ambiguity and synonym drift.                                | Evidence pack section       |
| Semantic Entity Check              | Validate exposed business entities.                                    | Evidence pack section       |
| Measure/KPI Definition Check       | Prevent metric drift from Phase 03/11.                                 | Evidence pack section       |
| Dimension/Attribute Check          | Validate slicing/filtering objects.                                    | Evidence pack section       |
| Hierarchy Check                    | Validate drill paths.                                                  | Evidence pack section       |
| Relationship/Join Behavior Check   | Prevent double counting and ambiguous joins.                           | Evidence pack section       |
| Grain/Aggregation Behavior Check   | Validate measure calculation behavior.                                 | Evidence pack section       |
| Filter/Slicer Check                | Validate user analysis paths.                                          | Evidence pack section       |
| Time Intelligence Check            | Validate date/calendar/as-of behavior.                                 | Evidence pack section       |
| Calculation Ownership Check        | Make measure ownership accountable.                                    | Evidence pack section       |
| Naming/Display Convention Check    | Ensure business-friendly semantic UX.                                  | Evidence pack section       |
| Security/Access Model Check        | Validate RLS/CLS/object/measure access needs.                          | Evidence pack section       |
| Certification/Trust Status Check   | Prevent false Certified labels.                                        | Evidence pack section       |
| Freshness/Quality Display Check    | Ensure consumers see data trust signals.                               | Evidence pack section       |
| Lineage/Metadata Check             | Enable audit/debug and AI-agent explainability.                        | Evidence pack section       |
| Semantic Testing Expectation Check | Prepare validation for later implementation.                           | Evidence pack section       |
| Contract/Quality Alignment Check   | Ensure exposed objects are protected by contracts and quality rules.   | Evidence pack section       |
| Phase 16 Done Gate                 | Decide whether Phase 16 is Done, Done with risks, or Blocked.          | `phase-16-done-gate.md`     |
| Phase 16 Handoff                   | Tell Phase 17 what serving layer can expose.                           | `phase-16-to-17-handoff.md` |

---

## Guardrails

The agent must not:

* define metrics differently from Phase 03 or Phase 11;
* expose ambiguous metrics without status or warning;
* hide grain or aggregation behavior;
* create relationships that cause double counting without warning;
* expose technical names directly when business-friendly naming is needed;
* assume row-level, column-level, object-level, or measure-level security rules;
* mark a semantic model Certified unless quality, ownership, lineage, contract, freshness, and operational expectations support it;
* hide quality/freshness/trust status from consumers where it matters;
* design dashboard visuals in this phase;
* implement semantic model code in this phase;
* mark Phase 16 Done if P1 semantic objects lack Gold mapping, KPI alignment, ownership, trust status, security, freshness/quality visibility, or evidence.

---

## Handoff To The Next Skill

Recommend `des-serving-layer-design` only after:

```text
Semantic Model Specification exists
+ Phase 16 support plan exists or is waived with reason
+ Phase 16 evidence pack exists or evidence is waived with reason
+ Phase 16 Done Gate is Pass or Pass with risks
+ Phase 16 to Phase 17 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-semantic-model-design
return to Step 02 semantic concepts, measures, and relationships
resolve HALT question
route back to des-gold-layer-design
route back to des-requirements-and-kpis
route back to des-data-contracts
route back to des-data-quality
des-wise
des-correct-course
```
