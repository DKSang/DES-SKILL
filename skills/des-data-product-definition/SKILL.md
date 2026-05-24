---
name: des-data-product-definition
description: Use when requirements, KPIs, business questions, dashboards, APIs, semantic models, ML datasets, or data outputs need a clear data product boundary, consumer, owner, lifecycle, trust level, or service expectation.
---

# des-data-product-definition

## Purpose

Use this skill to create and validate the Data Product Specification for any data engineering project.

This skill defines:

- data product boundary;
- target consumers;
- supported use cases;
- product outputs;
- service expectations;
- ownership and stewardship;
- freshness expectations;
- trust expectations;
- access and serving expectations;
- lifecycle status.

The goal is to ensure the project delivers a usable data product rather than a collection of disconnected pipelines, tables, dashboards, notebooks, APIs, or scripts.

In the Phase-Orchestrated Support Model, this phase is not Done when the Data Product Specification is first written.

Phase 04 is Done only when:

```text
Data Product Specification exists
+ Phase 03 artifact and handoff are reviewed
+ data product boundary validation work is identified
+ product definition evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 04 Done Gate passes
+ Phase 04 to Phase 05 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 01 Business Discovery exists;
* Phase 02 Business Question Catalog exists;
* Phase 03 Requirements and KPI Catalog exists;
* Phase 03 handoff exists or the user explicitly accepts the risk of continuing without it;
* consumers, business questions, requirements, KPIs, or success criteria need to be packaged into a defined data product;
* the user asks for dashboards, semantic models, APIs, ML datasets, data sharing, operational data outputs, or customer-facing analytics;
* the workflow router selects Phase 04.

Do not use this skill to design physical tables, source ingestion, transformations, data contracts, orchestration, semantic model details, dashboards, APIs, or code.

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/phase-handoffs/phase-03-to-04-handoff.md`;
* `_des-output/evidence/phase-03/phase-03-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-03-done-gate.md`, if available;
* workflow status file, if present;
* approved consumers;
* target decisions/use cases;
* P1/P2 business questions;
* P1/P2 functional and non-functional requirements;
* approved, draft, or candidate KPIs;
* scope and non-scope;
* constraints;
* success criteria.

If the Requirements and KPI Catalog or Phase 03 handoff is missing or too weak, stop and ask whether to route back to `des-requirements-and-kpis`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/04-data-product-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-04-support-plan.md
_des-output/evidence/phase-04/phase-04-evidence-pack.md
_des-output/implementation-artifacts/phase-04-artifact-revision.md
_des-output/implementation-artifacts/phase-04-done-gate.md
_des-output/phase-handoffs/phase-04-to-05-handoff.md
```

The main artifact must capture:

* data product summary;
* product intent;
* primary and secondary consumers;
* supported use cases;
* business question and requirement mapping;
* product outputs;
* product boundary;
* non-scope;
* service expectations;
* freshness and SLA expectations;
* quality and trust expectations;
* access and serving expectations;
* ownership and stewardship;
* lifecycle status;
* dependencies;
* data contract expectations;
* governance and security considerations;
* success criteria;
* assumptions;
* risks;
* open questions;
* Phase 04 evidence summary;
* Phase 04 handoff notes;
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
8. Do not invent consumers, product outputs, service levels, owners, lifecycle status, trust expectations, or product boundaries.
9. Do not design physical tables, sources, pipelines, transformations, full data contracts, dashboards, semantic model internals, APIs, application implementation, or code.
10. Before marking Phase 04 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream discovery, questions, requirements, and KPI context.
2. Confirm Phase 03 handoff readiness.
3. Identify the candidate data product and its consumers.
4. Define the product boundary and first release scope.
5. Define supported use cases and product outputs.
6. Define service expectations, trust expectations, access expectations, and ownership.
7. Identify dependencies, source needs, risks, assumptions, and open questions.
8. Ask HALT questions for unresolved product boundary, consumer, output, SLA, trust, lifecycle, and ownership decisions.
9. Draft the Data Product Specification.
10. Create the Phase 04 Support Plan.
11. Collect or reference Phase 04 evidence.
12. Revise the Data Product Specification using evidence.
13. Run the Phase 04 Done Gate.
14. Create the Phase 04 to Phase 05 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 04 uses data-product boundary validation support work.

The purpose is not technical implementation. The purpose is to prevent Phase 05 source assessment from searching for sources before the data product boundary, outputs, trust expectation, consumer, and first release needs are clear.

### Required Support Work

| Support Work                          | Purpose                                                                                     | Output                      |
| ------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------- |
| Phase 03 Handoff Review               | Check that product definition derives from approved requirements/KPIs.                      | Evidence pack section       |
| Product Boundary Check                | Ensure the product is small enough to own, support, and assess sources for.                 | Evidence pack section       |
| Consumer and Use Case Alignment Check | Ensure consumers and use cases match upstream context.                                      | Evidence pack section       |
| Product Output Check                  | Ensure first release output is explicit.                                                    | Evidence pack section       |
| Service Expectation Check             | Ensure freshness, support, access, reliability, and availability expectations are recorded. | Evidence pack section       |
| Trust Expectation Check               | Ensure quality/trust posture is explicit.                                                   | Evidence pack section       |
| Ownership and Stewardship Check       | Ensure owner/steward exists or is marked Draft/Risk.                                        | Evidence pack section       |
| Lifecycle Status Check                | Ensure Experimental/Draft/MVP/Internal shared/Production/etc. is explicit.                  | Evidence pack section       |
| Phase 05 Source Need Readiness Check  | Ensure Phase 05 knows what source evidence to look for.                                     | Evidence pack section       |
| Phase 04 Done Gate                    | Decide whether Phase 04 is Done, Done with risks, or Blocked.                               | `phase-04-done-gate.md`     |
| Phase 04 Handoff                      | Tell Phase 05 what source needs to assess.                                                  | `phase-04-to-05-handoff.md` |

### Optional Support Skills

Existing support or learning skills may be used when helpful:

```text
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 04 reveals that Phase 03 requirements/KPIs are not sufficient to define a data product boundary.

---

## Evidence Required

Phase 04 evidence may be lightweight, but it must be explicit.

Acceptable evidence includes:

* Phase 03 Requirements and KPI Catalog;
* Phase 03 to Phase 04 handoff;
* Phase 03 evidence pack;
* user-approved product boundary;
* stakeholder/user-provided service expectation;
* explicit user choices at HALT points;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_03_handoff_evidence
product_boundary_evidence
consumer_use_case_alignment_evidence
product_output_evidence
service_expectation_evidence
trust_expectation_evidence
ownership_evidence
lifecycle_status_evidence
source_need_readiness_evidence
```

If evidence is missing, mark the item as `Draft`, `Open Question`, `Risk`, `Deferred`, `Blocked`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* treat every table or dashboard as a data product automatically;
* define a data product without a consumer;
* define a data product without a supported use case;
* define a product output without access expectations;
* define SLA without owner or consumer need;
* assume self-service availability without approval;
* design physical schemas or Gold tables in this phase;
* write data contracts in full; only capture contract expectations;
* choose final source systems before Phase 05;
* mark the artifact Done if product owner, consumer, product output, trust expectation, or product boundary is unresolved without accepted risk;
* mark Phase 04 Done if the handoff to Phase 05 is missing.

---

## Quality Checklist

* [ ] Upstream discovery, question, and requirements artifacts exist or Draft continuation is explicitly accepted.
* [ ] Phase 03 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Data product name and intent are defined.
* [ ] Primary consumer and supported use case are defined.
* [ ] Product outputs and first release output are clear.
* [ ] Product boundary and non-scope are documented.
* [ ] Service, freshness, trust, and access expectations are documented.
* [ ] Owner, steward, and lifecycle status are defined or explicitly marked Draft/Risk.
* [ ] Source needs for Phase 05 are clear enough to assess candidate sources.
* [ ] Phase 04 support plan exists or is explicitly waived with reason.
* [ ] Phase 04 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 04 artifact revision notes exist.
* [ ] Phase 04 Done Gate result is recorded.
* [ ] Phase 04 to Phase 05 handoff exists.
* [ ] The artifact does not design physical schemas, ingestion, transformations, full contracts, semantic internals, dashboards, APIs, application implementation, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                                     | Why It Fails                                                                                             |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Calling a table or dashboard the data product by default         | A product also needs consumer, promise, owner, lifecycle, access, trust, and support expectations.       |
| Defining products without consumers                              | No consumer means no usable scope, success criteria, service level, or prioritization.                   |
| Combining unrelated consumers and outputs into one vague product | Ownership, contracts, and service expectations become unstable.                                          |
| Treating service expectations as implementation details          | Freshness, trust, support, and access expectations drive later architecture, quality, and release gates. |
| Writing full contracts or schemas in Phase 4                    | Contract and physical design belong to downstream phases after product boundary is approved.             |
| Starting Phase 05 with vague product outputs                     | Source assessment needs concrete product outputs and requirements to map source feasibility.             |

---

## HALT Policy

This skill must stop when a product definition decision cannot be safely inferred.

Stop especially when:

* Phase 03 Requirements and KPI Catalog is missing or inconsistent;
* Phase 03 handoff is missing and the user has not accepted the risk;
* primary consumer is unclear;
* product boundary is unclear;
* first release output is unclear;
* product owner or steward is unclear;
* product lifecycle status is unclear;
* service/freshness expectation is unclear;
* trust expectation is unclear;
* supported use case conflicts with scope or requirements;
* Phase 05 would not know what source evidence to assess;
* the user asks for implementation before data product definition is complete.

---

## Handoff To The Next Skill

Recommend `des-data-source-assessment` only after:

```text
Data Product Specification exists
+ Phase 04 support plan exists or is waived with reason
+ Phase 04 evidence pack exists or evidence is waived with reason
+ Phase 04 Done Gate is Pass or Pass with risks
+ Phase 04 to Phase 05 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-data-product-definition
return to Step 02 product boundary and service design
resolve HALT question
route back to des-requirements-and-kpis
des-wise
des-correct-course
```
