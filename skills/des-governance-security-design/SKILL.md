---
name: des-governance-security-design
description: Use when creating the Governance and Security Specification to define access control, data classification, and security policies for data products.
---

# des-governance-security-design

## Purpose

Use this skill to create the Governance and Security Specification for any data engineering project.

This skill defines governance policy, data classification, access control, privacy handling, masking, encryption, retention, deletion, audit, compliance, approval workflow, ownership, stewardship, and risk management across source, Bronze, Silver, Gold, semantic, and serving layers.

The goal is to make the data product safe, accountable, compliant, reviewable, and production-ready before optimization, testing, release, or operational handoff.

## When To Use

Use this skill when:

- Phase 18 Lineage and Metadata Specification exists;
- datasets, fields, metrics, contracts, semantic models, or serving outputs need access/security/governance decisions;
- sensitive, confidential, regulated, personal, customer, financial, health, credential-bearing, or proprietary data may exist;
- row-level security, column-level security, masking, tokenization, encryption, retention, deletion, or audit policy is needed;
- data sharing, external access, AI/data-agent access, reverse ETL, or API serving introduces governance risk;
- the workflow router selects Phase 19.

Do not use this skill to implement IAM policies, create security groups, write infrastructure code, configure encryption, build governance tooling, deploy catalog policies, or create CI/CD workflows.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/16-semantic-model-specification.md`;
- `_des-output/planning-artifacts/17-serving-layer-specification.md`;
- `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
- workflow status file, if present;
- sensitivity classification;
- field-level metadata;
- ownership and stewardship metadata;
- consumers and access patterns;
- contract access expectations;
- serving channels;
- data sharing or external access needs;
- retention and deletion requirements;
- audit and compliance requirements.

If the Lineage and Metadata Specification is missing or too weak, stop and ask whether to route back to `des-lineage-metadata-design`.

## Output

Create or update:

```text
_des-output/planning-artifacts/19-governance-security-specification.md
```

The artifact must capture:

* governance and security summary;
* governance scope and non-scope;
* governance design principles;
* data classification policy;
* asset sensitivity inventory;
* field-level sensitivity handling;
* access control model;
* role and persona access matrix;
* row-level security policy;
* column-level security policy;
* masking tokenization and anonymization policy;
* encryption and secret handling expectations;
* privacy and consent considerations;
* retention lifecycle and deletion policy;
* data sharing and external access policy;
* API application and AI-agent access policy;
* reverse ETL governance;
* audit logging and access monitoring;
* approval workflow and exception handling;
* ownership stewardship and accountability;
* compliance and regulatory considerations;
* incident response and escalation;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent sensitivity classification, access roles, legal obligations, retention duration, deletion rules, or compliance requirements.
8. Do not implement IAM, ACLs, RLS/CLS policies, masking logic, encryption configuration, governance platform rules, or CI/CD workflows.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Guardrails

The agent must not:

* grant broad access by default;
* ignore least privilege;
* expose raw Bronze data broadly;
* expose sensitive fields in semantic/serving layers without policy;
* treat masking/tokenization as optional when sensitive data is exposed;
* ignore deletion, retention, or privacy lifecycle;
* allow external sharing without governance approval;
* allow AI/data-agent access to sensitive or uncertified data without guardrails;
* allow reverse ETL writeback without approval and monitoring;
* mark governance design Done if sensitivity, access, audit, retention, ownership, and exception policy are unresolved.

## HALT Policy

This skill must stop when a governance or security decision cannot be safely inferred.

Stop especially when:

* data classification is missing;
* sensitive data handling is unclear;
* access roles are unclear;
* row-level or column-level security is required but unspecified;
* masking/tokenization rule is unclear;
* retention/deletion policy is unclear;
* external sharing is requested;
* AI/data-agent access is requested;
* reverse ETL writeback is requested;
* audit logging or access monitoring is missing;
* owner/approver is missing;
* compliance requirement is unclear.

## Quality Checklist

- [ ] Governance scope and principles are clearly defined.
- [ ] Data classification policy is established and applied to all assets.
- [ ] Asset sensitivity inventory is complete for all layers.
- [ ] Field-level sensitivity handling (masking, hashing, etc.) is documented for PII.
- [ ] Access control model (RBAC, ABAC, etc.) and persona matrix are approved.
- [ ] Retention and deletion policies are defined for each data layer.
- [ ] Audit logging and access monitoring requirements are specified.
- [ ] External sharing and AI-agent access have explicit guardrails.
- [ ] Owners and stewards are assigned for accountability.
- [ ] Compliance and regulatory requirements are identified and addressed.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Granting "admin" or broad access by default | Violates least privilege; increases blast radius of credentials leak or misuse. |
| Treating PII masking as a "later" implementation detail | Masking is a design decision; deferring it leads to accidental exposure in semantic layers. |
| No retention policy for raw data | Storing raw data indefinitely increases legal liability and storage costs without value. |
| Governing only the Gold layer | Security must start at ingestion (Bronze); unprotected raw data is the biggest risk. |
| Ignoring AI/data-agent access patterns | Agents can bypass human UI restrictions; they need explicit semantic-level governance. |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Primary focus: Least privilege, RLS/CLS, masking, encryption, and audit logging. |
| Data Management | Data classification, retention policy, and stewardship are core data management pillars. |
| DataOps | Approval workflows and access reviews are integrated into operational processes. |
| Data Architecture | Access models (RBAC/ABAC) and masking strategies are key architectural decisions. |
| Orchestration | Audit logs capture execution context; reverse ETL guardrails prevent operational data corruption. |
| Software Engineering | API and application access are governed via service identities and restricted scopes. |

## Handoff To The Next Skill

Next use `des-cost-and-performance-optimization` to optimize the governed and secured data product for production scale, cost efficiency, and performance targets.
