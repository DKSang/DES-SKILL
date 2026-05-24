---
name: des-governance-security-design
description: Use when designing governance policy, data classification, access control, privacy handling, masking, encryption, retention, audit, approval workflow, and security risk controls for data products.
---

# des-governance-security-design

## Purpose

Use this skill to create and validate the Governance and Security Specification for any data engineering project.

This skill defines governance policy, data classification, access control, privacy handling, masking, tokenization, anonymization, encryption expectations, secret handling, retention, deletion, audit, compliance, approval workflow, exception handling, ownership, stewardship, accountability, incident response, and risk management across source, Bronze, Silver, Gold, semantic, and serving layers.

The goal is to make the data product safe, accountable, compliant, reviewable, auditable, and production-ready before cost/performance optimization, testing, release, or operational handoff.

Governance and Security Design should answer:

```text
Which assets are governed?
How sensitive are they?
Who can access what, why, and under what conditions?
Which rows, columns, objects, measures, APIs, exports, or agents need restriction?
Which fields require masking, tokenization, anonymization, or removal?
How are secrets handled?
How long is data retained?
How is deletion handled?
Who approves sharing, exceptions, and access changes?
What must be audited?
What happens on misuse, breach, or policy violation?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Governance and Security Specification is first written.

Phase 19 is Done only when:

```text
Governance and Security Specification exists
+ Phase 18 artifact and handoff are reviewed
+ governance/security validation work is identified
+ governance/security evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 19 Done Gate passes
+ Phase 19 to Phase 20 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 18 Lineage and Metadata Specification exists;
* Phase 18 handoff exists or the user explicitly accepts the risk of continuing without it;
* datasets, fields, metrics, contracts, semantic models, or serving outputs need access/security/governance decisions;
* sensitive, confidential, regulated, personal, customer, financial, health, credential-bearing, or proprietary data may exist;
* row-level security, column-level security, masking, tokenization, encryption, retention, deletion, or audit policy is needed;
* data sharing, external access, AI/data-agent access, reverse ETL, export, or API serving introduces governance risk;
* the workflow router selects Phase 19.

Do not use this skill to implement IAM policies, create security groups, write infrastructure code, configure encryption, build governance tooling, deploy catalog policies, create masking logic, create RLS/CLS implementation, create CI/CD workflows, or write code.

Allowed in this phase:

```text
governance scope design
governance principles
data classification policy
asset sensitivity inventory
field-level sensitivity handling
access control model design
role/persona access matrix design
row-level security policy design
column-level security policy design
masking/tokenization/anonymization policy design
encryption and secret handling expectations
privacy and consent considerations
retention lifecycle and deletion policy
data sharing and external access policy
API/application and AI-agent access policy
reverse ETL governance
audit logging and access monitoring
approval workflow and exception handling
ownership, stewardship, and accountability model
compliance and regulatory considerations
incident response and escalation design
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/phase-handoffs/phase-18-to-19-handoff.md`;
* `_des-output/evidence/phase-18/phase-18-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-18-done-gate.md`, if available;
* workflow status file, if present;
* sensitivity classification;
* field-level metadata;
* ownership and stewardship metadata;
* consumers and access patterns;
* contract access expectations;
* serving channels;
* data sharing or external access needs;
* API/application/AI-agent access needs;
* reverse ETL or writeback needs;
* retention and deletion requirements;
* audit and compliance requirements.

If the Lineage and Metadata Specification or Phase 18 handoff is missing or too weak, stop and ask whether to route back to `des-lineage-metadata-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/19-governance-security-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-19-support-plan.md
_des-output/evidence/phase-19/phase-19-evidence-pack.md
_des-output/implementation-artifacts/phase-19-artifact-revision.md
_des-output/implementation-artifacts/phase-19-done-gate.md
_des-output/phase-handoffs/phase-19-to-20-handoff.md
```

The main artifact must capture:

* governance and security summary;
* governance scope;
* governance non-scope;
* governance design principles;
* data classification policy;
* asset sensitivity inventory;
* field-level sensitivity handling;
* access control model;
* role and persona access matrix;
* row-level security policy;
* column-level security policy;
* masking, tokenization, and anonymization policy;
* encryption and secret handling expectations;
* privacy and consent considerations;
* retention lifecycle and deletion policy;
* data sharing and external access policy;
* API/application and AI-agent access policy;
* reverse ETL governance;
* audit logging and access monitoring;
* approval workflow and exception handling;
* ownership, stewardship, and accountability;
* compliance and regulatory considerations;
* incident response and escalation;
* governance and security evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 19 evidence summary;
* Phase 19 handoff notes;
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
8. Do not invent sensitivity classification, access roles, legal obligations, retention duration, deletion rules, or compliance requirements.
9. Do not implement IAM, ACLs, RLS/CLS policies, masking logic, encryption configuration, governance platform rules, policy engines, CI/CD workflows, infrastructure, or code.
10. Before marking Phase 19 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream dataset, transformation, contract, quality, semantic, serving, and ownership context.
2. Confirm Phase 18 handoff readiness.
3. Identify assets requiring metadata and lineage.
4. Define metadata categories and inventory.
5. Define business, technical, operational, and reference metadata requirements.
6. Define dataset, transformation, and column-level lineage scope.
7. Define trust, quality, contract, usage, version, and audit metadata.
8. Define metadata capture and maintenance policies.
9. Ask HALT questions for unresolved metadata decisions.
10. Draft the Lineage and Metadata Specification.
11. Create the Phase 18 Support Plan.
12. Collect or reference Phase 18 evidence.
13. Revise the Lineage and Metadata Specification using evidence.
14. Run the Phase 18 Done Gate.
15. Create the Phase 18 to Phase 19 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 19 uses governance and security validation support work.

The purpose is not security implementation. The purpose is to make policy, access, privacy, retention, audit, approval, and risk controls explicit before cost/performance optimization and production readiness work.

### Required Support Work

| Support Work                               | Purpose                                                                     | Output                      |
| ------------------------------------------ | --------------------------------------------------------------------------- | --------------------------- |
| Phase 18 Handoff Review                    | Check governance/security design follows metadata and lineage requirements. | Evidence pack section       |
| Governance Scope Check                     | Validate governance boundary.                                               | Evidence pack section       |
| Data Classification Check                  | Validate classification policy and classes.                                 | Evidence pack section       |
| Asset Sensitivity Inventory Check          | Validate classification applied to assets.                                  | Evidence pack section       |
| Field-Level Sensitivity Handling Check     | Validate sensitive field treatment.                                         | Evidence pack section       |
| Access Control Model Check                 | Validate RBAC/ABAC/RLS/CLS/object/purpose access.                           | Evidence pack section       |
| Role/Persona Access Matrix Check           | Validate who can access what and why.                                       | Evidence pack section       |
| Row-Level Security Policy Check            | Validate row filtering policy where relevant.                               | Evidence pack section       |
| Column-Level Security Policy Check         | Validate field hiding/restriction policy.                                   | Evidence pack section       |
| Masking/Tokenization/Anonymization Check   | Validate exposure protection strategy.                                      | Evidence pack section       |
| Encryption/Secret Handling Check           | Validate encryption expectations and secret-bearing data handling.          | Evidence pack section       |
| Privacy/Consent Check                      | Validate privacy lifecycle and consent considerations.                      | Evidence pack section       |
| Retention Lifecycle/Deletion Check         | Validate lifecycle, retention, deletion, anonymization.                     | Evidence pack section       |
| Data Sharing/External Access Check         | Validate external sharing guardrails.                                       | Evidence pack section       |
| API/Application/AI-Agent Access Check      | Validate non-human access governance.                                       | Evidence pack section       |
| Reverse ETL Governance Check               | Validate writeback guardrails.                                              | Evidence pack section       |
| Audit Logging/Access Monitoring Check      | Validate audit and access monitoring.                                       | Evidence pack section       |
| Approval/Exception Handling Check          | Validate access, sharing, and policy exceptions.                            | Evidence pack section       |
| Ownership/Stewardship/Accountability Check | Validate approvers, owners, and stewards.                                   | Evidence pack section       |
| Compliance/Regulatory Check                | Validate legal/regulatory/internal audit needs.                             | Evidence pack section       |
| Incident Response/Escalation Check         | Validate misuse/breach/policy violation response.                           | Evidence pack section       |
| Phase 19 Done Gate                         | Decide whether Phase 19 is Done, Done with risks, or Blocked.               | `phase-19-done-gate.md`     |
| Phase 19 Handoff                          | Tell Phase 20 what governance constraints affect cost/performance.          | `phase-19-to-20-handoff.md` |

---

## Guardrails

The agent must not:

* grant broad access by default;
* ignore least privilege;
* expose raw Bronze data broadly;
* expose sensitive fields in semantic/serving layers without policy;
* treat masking/tokenization as optional when sensitive data is exposed;
* ignore deletion, retention, or privacy lifecycle;
* allow external sharing without governance approval;
* allow AI/data-agent access to sensitive, restricted, or uncertified data without guardrails;
* allow reverse ETL writeback without approval and monitoring;
* hide audit logging/access monitoring requirements;
* treat secrets as ordinary data;
* mark governance design Done if sensitivity, access, audit, retention, ownership, exception policy, and incident response are unresolved;
* implement IAM, ACLs, RLS/CLS policies, masking logic, encryption config, governance tools, CI/CD, infrastructure, or code in this phase.

---

## Handoff To The Next Skill

Recommend `des-cost-and-performance-optimization` only after:

```text
Governance and Security Specification exists
+ Phase 19 support plan exists or is waived with reason
+ Phase 19 evidence pack exists or evidence is waived with reason
+ Phase 19 Done Gate is Pass or Pass with risks
+ Phase 19 to Phase 20 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-governance-security-design
return to Step 02 policy, access, and risk design
resolve HALT question
route back to des-lineage-metadata-design
route back to des-serving-layer-design
route back to des-data-contracts
route back to des-data-quality
des-wise
des-correct-course
```
