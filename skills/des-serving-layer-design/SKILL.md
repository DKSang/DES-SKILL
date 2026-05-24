---
name: des-serving-layer-design
description: Use when designing how data products are served to consumers via dashboards, BI datasets, semantic models, APIs, ML/AI datasets, reverse ETL, exports, data sharing, embedded analytics, or AI/data agents.
---

# des-serving-layer-design

## Purpose

Use this skill to create and validate the Serving Layer Specification for any data engineering project.

This skill defines how trusted data products, Gold outputs, semantic models, metrics, APIs, ML datasets, exports, reverse ETL feeds, dashboards, embedded analytics, data sharing interfaces, or AI/data-agent interfaces will be served to consumers.

The goal is to design the consumption layer clearly before building dashboards, APIs, apps, ML features, exports, reverse ETL workflows, semantic model implementations, or operational activation workflows.

Serving Layer Design should answer:

```text
Who consumes the output?
Through which channel?
Which Gold or semantic object is exposed?
What trust/freshness/quality status is visible?
What access/security controls apply?
What latency or delivery window is expected?
Is caching or materialization needed?
How do consumers report issues?
How is usage/adoption monitored?
Who supports the serving interface?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Serving Layer Specification is first written.

Phase 17 is Done only when:

```text
Serving Layer Specification exists
+ Phase 16 artifact and handoff are reviewed
+ serving validation work is identified
+ serving evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 17 Done Gate passes
+ Phase 17 to Phase 18 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 16 Semantic Model Specification exists;
* Phase 16 handoff exists or the user explicitly accepts the risk of continuing without it;
* Gold outputs need to be exposed to consumers;
* the project needs dashboards, reports, self-service BI, semantic models, APIs, ML/AI datasets, reverse ETL, exports, embedded analytics, data sharing, or AI-agent access;
* serving latency, access, performance, freshness display, quality display, feedback loop, usage monitoring, or consumer experience is unclear;
* the workflow router selects Phase 17.

Do not use this skill to implement dashboards, APIs, ML pipelines, reverse ETL jobs, UI screens, semantic model code, orchestration code, caching implementation, CI/CD workflows, or deployments.

Allowed in this phase:

```text
serving scope design
consumer/persona mapping
serving channel inventory
Gold/Semantic-to-serving mapping
serving pattern decision
dashboard/reporting expectation design
self-service analytics expectation design
API/application-serving expectation design
ML/AI dataset serving expectation design
reverse ETL/export expectation design
data sharing/federation expectation design
AI/data-agent access expectation design
access control and security model design
freshness and quality visibility design
performance and latency expectation design
caching and materialization expectation design
feedback loop and issue reporting design
usage monitoring and adoption signal design
ownership and support model design
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/phase-handoffs/phase-16-to-17-handoff.md`;
* `_des-output/evidence/phase-16/phase-16-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-16-done-gate.md`, if available;
* workflow status file, if present;
* serving direction from architecture;
* consumer personas;
* Gold outputs;
* semantic models;
* contracts;
* freshness/SLA expectations;
* security/access requirements;
* quality/trust status;
* usage and feedback expectations.

If the Semantic Model Specification or Phase 16 handoff is missing or too weak, stop and ask whether to route back to `des-semantic-model-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/17-serving-layer-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-17-support-plan.md
_des-output/evidence/phase-17/phase-17-evidence-pack.md
_des-output/implementation-artifacts/phase-17-artifact-revision.md
_des-output/implementation-artifacts/phase-17-done-gate.md
_des-output/phase-handoffs/phase-17-to-18-handoff.md
```

The main artifact must capture:

* serving layer summary;
* serving scope;
* serving non-scope;
* serving design principles;
* consumer and persona mapping;
* serving channel inventory;
* Gold and Semantic to Serving mapping;
* serving pattern decision;
* dashboard and reporting expectations;
* self-service analytics expectations;
* API and application-serving expectations;
* ML and AI dataset serving expectations;
* reverse ETL and export expectations;
* data sharing and federation expectations;
* AI and data agent access expectations;
* access control and security model;
* freshness and quality visibility;
* performance and latency expectations;
* caching and materialization expectations;
* feedback loop and issue reporting;
* usage monitoring and adoption signals;
* ownership and support model;
* serving evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 17 evidence summary;
* Phase 17 handoff notes;
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
8. Do not invent consumers, serving channels, access rules, latency expectations, caching decisions, feedback process, or support ownership.
9. Do not build dashboards, APIs, apps, ML jobs, reverse ETL jobs, semantic code, export jobs, data sharing integrations, AI agents, caching layers, or deployment workflows.
10. Before marking Phase 17 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream semantic, Gold, contract, quality, architecture, operational, and consumer context.
2. Confirm Phase 16 handoff readiness.
3. Identify datasets and outputs requiring serving layer design.
4. Define consumer personas and serving channels.
5. Map Gold and semantic objects to serving channels.
6. Define serving patterns, latency, caching, and materialization.
7. Define access, security, freshness visibility, and quality visibility.
8. Define feedback loop, usage monitoring, and support ownership.
9. Ask HALT questions for unresolved serving decisions.
10. Draft the Serving Layer Specification.
11. Create the Phase 17 Support Plan.
12. Collect or reference Phase 17 evidence.
13. Revise the Serving Layer Specification using evidence.
14. Run the Phase 17 Done Gate.
15. Create the Phase 17 to Phase 18 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 17 uses serving validation support work.

The purpose is not serving implementation. The purpose is to make serving decisions consumer-safe, access-controlled, trust-visible, supportable, measurable, and ready for lineage/metadata design.

### Required Support Work

| Support Work                              | Purpose                                                                       | Output                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- | --------------------------- |
| Phase 16 Handoff Review                   | Check serving design follows approved semantic objects and trust constraints. | Evidence pack section       |
| Serving Scope Check                       | Validate serving boundary.                                                    | Evidence pack section       |
| Consumer/Persona Check                    | Ensure serving output has real consumer.                                      | Evidence pack section       |
| Serving Channel Inventory Check           | Ensure serving channels are listed.                                           | Evidence pack section       |
| Gold/Semantic-to-Serving Mapping Check    | Ensure served outputs trace to trusted objects.                               | Evidence pack section       |
| Serving Pattern Check                     | Validate dashboard/API/BI/export/agent/etc. pattern.                          | Evidence pack section       |
| Dashboard/Reporting Expectation Check     | Validate reporting use case where relevant.                                   | Evidence pack section       |
| Self-Service Analytics Expectation Check  | Validate analyst exploration path.                                            | Evidence pack section       |
| API/Application Serving Expectation Check | Validate app/system-facing expectations.                                      | Evidence pack section       |
| ML/AI Dataset Serving Expectation Check   | Validate ML/AI usage expectations.                                            | Evidence pack section       |
| Reverse ETL/Export Expectation Check      | Validate writeback/export guardrails.                                         | Evidence pack section       |
| Data Sharing/Federation Expectation Check | Validate sharing/source-impact risks.                                         | Evidence pack section       |
| AI/Data-Agent Access Expectation Check    | Validate governed agent consumption.                                          | Evidence pack section       |
| Access/Security Model Check               | Validate row/column/object/external access constraints.                       | Evidence pack section       |
| Freshness/Quality Visibility Check        | Validate consumer-visible trust signals.                                      | Evidence pack section       |
| Performance/Latency Check                 | Validate performance expectations.                                            | Evidence pack section       |
| Caching/Materialization Check             | Validate whether serving requires materialized/cached outputs.                | Evidence pack section       |
| Feedback/Issue Reporting Check            | Validate consumer feedback path.                                              | Evidence pack section       |
| Usage Monitoring/Adoption Check           | Validate adoption and usage signals.                                          | Evidence pack section       |
| Ownership/Support Model Check             | Validate accountability.                                                      | Evidence pack section       |
| Phase 17 Done Gate                        | Decide whether Phase 17 is Done, Done with risks, or Blocked.                 | `phase-17-done-gate.md`     |
| Phase 17 Handoff                          | Tell Phase 18 what lineage/metadata must cover.                               | `phase-17-to-18-handoff.md` |

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

* treat serving as dashboard-only;
* expose raw or unstable data directly to consumers without approval;
* expose Draft metrics as Certified;
* bypass semantic model or contracts where they are required;
* ignore access/security restrictions;
* ignore freshness and quality visibility;
* ignore consumer feedback loop;
* design reverse ETL without guardrails and monitoring;
* design federated queries against production systems without source impact review;
* expose AI/data-agent access without governed semantic and metadata boundary;
* mark serving design Done if P1 outputs lack consumer, channel, access, freshness, quality, performance, feedback, ownership, and support expectations;
* implement dashboards, APIs, apps, ML jobs, reverse ETL jobs, exports, agents, caching, deployment, or code in this phase.

---

## Handoff To The Next Skill

Recommend `des-lineage-metadata-design` only after:

```text
Serving Layer Specification exists
+ Phase 17 support plan exists or is waived with reason
+ Phase 17 evidence pack exists or evidence is waived with reason
+ Phase 17 Done Gate is Pass or Pass with risks
+ Phase 17 to Phase 18 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-serving-layer-design
return to Step 02 serving channels and consumer experience
resolve HALT question
route back to des-semantic-model-design
route back to des-data-contracts
route back to des-data-quality
route back to des-orchestration-observability
des-wise
des-correct-course
```
