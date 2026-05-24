---
name: des-project-evaluation
description: Use when creating the Project Evaluation Report to evaluate business value, technical readiness, release readiness, adoption evidence, risks, lessons learned, and final closeout for data products.
---

# des-project-evaluation

## Purpose

Use this skill to create and validate the Project Evaluation Report for any data engineering project.

This skill evaluates whether the project achieved its business goals, answered approved business questions, delivered required data products, met KPI/SLA/quality/security/cost expectations, created release evidence, gained stakeholder acceptance or usage/adoption evidence, and produced a sustainable path for future improvement.

The goal is to close the data engineering lifecycle with evidence, stakeholder feedback, lessons learned, risks, limitations, readiness decisions, and next-iteration recommendations.

Project Evaluation should answer:

```text
Did the project solve the original business problem?
Can approved business questions be answered?
Were the required data products delivered?
Are contracts, quality, governance, lineage, and CI/CD gates ready?
Is the product ready for production, MVP/demo, internal review, or only design completion?
What evidence supports the decision?
What evidence is missing?
What risks remain?
What should happen next?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Project Evaluation Report is first written.

Phase 22 is Done only when:

```text
Project Evaluation Report exists
+ Phase 21 artifact and handoff are reviewed
+ evaluation validation work is identified
+ evaluation evidence is collected or marked missing
+ artifact is revised from evidence
+ Phase 22 Done Gate passes
+ final closeout or next-iteration decision exists
```

---

## When To Use

Use this skill when:

* Phase 21 CI/CD and Testing Specification exists;
* Phase 21 handoff exists or the user explicitly accepts the risk of continuing without it;
* the project needs release review, final evaluation, retrospective, or handoff;
* stakeholders need to know whether the data product is ready, useful, trusted, maintainable, releasable, or only design-complete;
* the project team needs to identify lessons learned and next iteration priorities;
* the workflow router selects Phase 22.

Do not use this skill to redesign the full platform, implement fixes, write deployment code, create production evidence, execute releases, or create new phase artifacts directly.

Allowed in this phase:

```text
evaluation scope design
success criteria review
evidence availability assessment
business goal evaluation
business question coverage evaluation
requirement and KPI evaluation
data product delivery evaluation
source and ingestion evaluation
domain model evaluation
architecture evaluation
Bronze/Silver/Gold layer evaluation
contract evaluation
transformation evaluation
data quality evaluation
orchestration and observability evaluation
semantic and serving evaluation
lineage and metadata evaluation
governance and security evaluation
cost and performance evaluation
CI/CD and testing evaluation
stakeholder feedback assessment
usage and adoption evidence assessment
readiness scorecard
risk and limitation documentation
lessons learned
next iteration recommendations
final decision and closeout
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
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/planning-artifacts/19-governance-security-specification.md`;
* `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md`;
* `_des-output/planning-artifacts/21-cicd-testing-specification.md`;
* `_des-output/phase-handoffs/phase-21-to-22-handoff.md`;
* `_des-output/evidence/phase-21/phase-21-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-21-done-gate.md`, if available;
* workflow status file, if present;
* release evidence;
* test results;
* quality results;
* contract validation results;
* operational metrics;
* cost/performance metrics;
* stakeholder feedback;
* adoption/usage evidence;
* open risks and known limitations.

If Phase 21 or evaluation evidence is missing, stop and ask whether to continue as Draft, evaluate design readiness only, or route back to `des-cicd-and-testing`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/22-project-evaluation-report.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-22-support-plan.md
_des-output/evidence/phase-22/phase-22-evidence-pack.md
_des-output/implementation-artifacts/phase-22-artifact-revision.md
_des-output/implementation-artifacts/phase-22-done-gate.md
_des-output/phase-handoffs/phase-22-final-closeout.md
```

The main artifact must capture:

* project evaluation summary;
* evaluation scope;
* evaluation non-scope;
* evaluation design principles;
* evidence availability summary;
* business goal evaluation;
* business question coverage;
* requirement and KPI evaluation;
* data product delivery evaluation;
* source and ingestion evaluation;
* domain model evaluation;
* architecture evaluation;
* Bronze/Silver/Gold layer evaluation;
* contract evaluation;
* transformation evaluation;
* data quality evaluation;
* orchestration and observability evaluation;
* semantic and serving evaluation;
* lineage and metadata evaluation;
* governance and security evaluation;
* cost and performance evaluation;
* CI/CD and testing evaluation;
* stakeholder feedback;
* usage and adoption evidence;
* readiness scorecard;
* risks and known limitations;
* lessons learned;
* next iteration recommendations;
* final decision and handoff;
* Phase 22 evidence summary;
* workflow closeout.

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
   * `phase_closeout_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent test results, stakeholder feedback, adoption metrics, quality pass rates, cost savings, release evidence, or production readiness.
9. Do not mark the project successful without evidence.
10. Do not hide unresolved risks.
11. Before marking Phase 22 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, final closeout, and workflow status.

---

## Phase-Orchestrated Support Model

Phase 22 uses evaluation validation support work.

The purpose is not implementation. The purpose is to make final evaluation honest, evidence-based, auditable, and useful for either workflow closeout or next iteration planning.

### Required Support Work

| Support Work                                 | Purpose                                                       | Output                       |
| -------------------------------------------- | ------------------------------------------------------------- | ---------------------------- |
| Phase 21 Handoff Review                      | Check evaluation uses release-readiness handoff.              | Evidence pack section        |
| Upstream Artifact Completeness Check         | Check Phase 01–21 artifact coverage.                          | Evidence pack section        |
| Evaluation Scope Check                       | Confirm what is being evaluated.                              | Evidence pack section        |
| Success Criteria Check                       | Identify success criteria source.                             | Evidence pack section        |
| Business Goal Evaluation Check               | Evaluate against original goals.                              | Evidence pack section        |
| Business Question Coverage Check             | Evaluate answerability.                                       | Evidence pack section        |
| Requirement/KPI Evaluation Check             | Evaluate KPI and acceptance criteria readiness.               | Evidence pack section        |
| Data Product Delivery Evaluation Check       | Evaluate output delivery.                                     | Evidence pack section        |
| Source/Ingestion Evaluation Check            | Evaluate source and ingestion readiness.                      | Evidence pack section        |
| Domain Model Evaluation Check                | Evaluate conceptual/domain fit.                               | Evidence pack section        |
| Architecture Evaluation Check                | Evaluate architecture coherence.                              | Evidence pack section        |
| Bronze/Silver/Gold Evaluation Check          | Evaluate layer correctness and boundaries.                    | Evidence pack section        |
| Contract Evaluation Check                    | Evaluate producer-consumer protection.                        | Evidence pack section        |
| Transformation Evaluation Check              | Evaluate transformation readiness.                            | Evidence pack section        |
| Data Quality Evaluation Check                | Evaluate DQ rules and evidence.                               | Evidence pack section        |
| Orchestration/Observability Evaluation Check | Evaluate run, monitor, alert, recovery readiness.             | Evidence pack section        |
| Semantic/Serving Evaluation Check            | Evaluate consumer-facing readiness.                           | Evidence pack section        |
| Lineage/Metadata Evaluation Check            | Evaluate traceability and discoverability.                    | Evidence pack section        |
| Governance/Security Evaluation Check         | Evaluate policy, access, privacy, audit readiness.            | Evidence pack section        |
| Cost/Performance Evaluation Check            | Evaluate cost/performance guardrails.                         | Evidence pack section        |
| CI/CD/Testing Evaluation Check               | Evaluate release safety system.                               | Evidence pack section        |
| Stakeholder Feedback Check                   | Evaluate acceptance or mark missing.                          | Evidence pack section        |
| Usage/Adoption Evidence Check                | Evaluate adoption or mark missing.                            | Evidence pack section        |
| Readiness Scorecard Check                    | Produce final readiness ratings.                              | Evidence pack section        |
| Risk/Limitation Check                        | Make known risks explicit.                                    | Evidence pack section        |
| Lessons Learned Check                        | Capture learning.                                             | Evidence pack section        |
| Next Iteration Recommendation Check          | Recommend focused next steps.                                 | Evidence pack section        |
| Final Decision Check                         | Decide closeout / release / internal review / next iteration. | Evidence pack section        |
| Phase 22 Done Gate                           | Decide whether Phase 22 is Done, Done with risks, or Blocked. | `phase-22-done-gate.md`      |
| Phase 22 Final Closeout                      | Close workflow or route to next iteration.                    | `phase-22-final-closeout.md` |

---

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

Stop especially when:

* upstream contexts are unknown;
* required inputs are missing.

Detailed HALT checkpoints are defined in steps/.

---

## Guardrails

The agent must not:

* treat completion of artifacts as proof of business success;
* claim business value without business evidence;
* claim quality readiness without quality results or clearly documented design-readiness limitation;
* claim production readiness without release evidence;
* claim adoption without usage or stakeholder evidence;
* convert missing evidence into Green status;
* hide known limitations;
* hide open questions;
* recommend production release if blocking security, quality, contract, CI/CD, or release evidence issues remain;
* skip lessons learned and feedback loop;
* create new phase artifacts directly as part of evaluation;
* implement fixes, deploy releases, or write code in this phase.

---

## Final Handoff / Closeout

Recommend one of:

```text
workflow-complete
workflow-complete-with-risks
ready-for-implementation-handoff
ready-for-mvp-demo
ready-for-internal-review
not-ready-blocked
next-iteration-required
route-back-to-specific-phase
learning-portfolio-complete
```

If the project is not production-ready, do not frame it as failure by default.

Separate:

```text
Design readiness
Implementation readiness
Release readiness
Business value evidence
Adoption evidence
Production readiness
```

A project can be:

```text
Design complete, implementation pending
```

while not being:

```text
Production ready
```
