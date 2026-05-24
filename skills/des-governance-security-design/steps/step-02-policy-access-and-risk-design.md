# Step 02 — Policy, Access, Risk, and Evidence Design

## Goal

Define governance policy, classification, sensitivity handling, access control, security controls, privacy, retention, sharing, audit, approvals, accountability, compliance, incident response, exception handling, and supporting evidence.

This step prepares the Governance and Security Specification and identifies which governance/security decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 18 to Phase 19 handoff, if available
- Phase 18 evidence pack, if available
- Lineage and Metadata Specification
- Serving Layer Specification
- Semantic Model Specification
- Data Contract Specification
- Data Quality Specification, if available
- Bronze/Silver/Gold Layer Specifications
- Data Source Inventory
- User answers from HALT points
- Existing security/governance standards if available

---

## Actions

1. Define governance scope and non-scope.
2. Define governance design principles.
3. Define data classification policy.
4. Create asset sensitivity inventory.
5. Define field-level sensitivity handling.
6. Define access control model.
7. Define role and persona access matrix.
8. Define row-level security policy.
9. Define column-level security policy.
10. Define masking, tokenization, and anonymization policy.
11. Define encryption and secret handling expectations.
12. Define privacy and consent considerations.
13. Define retention lifecycle and deletion policy.
14. Define data sharing and external access policy.
15. Define API/application and AI-agent access policy.
16. Define reverse ETL governance.
17. Define audit logging and access monitoring.
18. Define approval workflow and exception handling.
19. Define ownership, stewardship, and accountability.
20. Define compliance and regulatory considerations.
21. Define incident response and escalation.
22. Map each critical governance/security decision to evidence.
23. Mark unsupported governance/security claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
24. Identify required Phase 19 support work.
25. Use HALT checkpoints for unresolved decisions.
26. Prepare draft Governance and Security Specification content.
27. Prepare content for the Phase 19 Support Plan.

---

## Governance Design Principles

Use these default principles unless overridden:

| Principle | Meaning |
|---|---|
| Least privilege | Grant only necessary access |
| Purpose limitation | Access should match intended use |
| Data minimization | Expose only fields needed |
| Defense in depth | Combine access, masking, audit, monitoring, and incident response |
| Privacy by design | Handle privacy lifecycle from the start |
| Govern raw data strictly | Raw data may contain sensitive or unstable fields |
| Certify before broad serving | Trusted access requires quality/contract/lineage |
| Review exceptions | Exceptions must expire or be reviewed |
| Monitor access | Access should be auditable and reviewed |
| No implementation here | Design policy and controls, do not implement IAM/security code |

---

## Classification Levels

Use these generic classification levels:

| Classification | Meaning |
|---|---|
| Public | Safe for open sharing |
| Internal | Internal use, low sensitivity |
| Confidential | Business-sensitive, restricted |
| PII | Personal identifiable information |
| Sensitive / Regulated | Legal, health, financial, contractual, or regulated data |
| Secret-bearing | Credentials, tokens, keys, or payloads containing secrets |
| Unknown | Must be reviewed before broad access |

---

## Governance Evidence Mapping

For every P1 governed asset, capture evidence status.

| Governance Field | Evidence Status | Allowed Output |
|---|---|---|
| Phase 18 handoff | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Governance scope | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Data classification | Confirmed / Assumed / Unknown / Waived | Approved / Draft / Risk / Blocked |
| Asset sensitivity inventory | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Field-level sensitivity handling | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| Access control model | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Role/persona access matrix | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Row-level security | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Column-level security | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Masking/tokenization/anonymization | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Encryption/secret handling | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Privacy/consent | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Retention/deletion | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| External sharing | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| API/application/AI-agent access | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| Reverse ETL governance | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| Audit/access monitoring | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Approval/exception handling | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Ownership/accountability | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |
| Compliance/regulatory | Confirmed / Assumed / Unknown / Not applicable | Approved / Draft / Risk |
| Incident response/escalation | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |

---

## HALT — Data Classification Approval

Stop if classification is unclear.

### Options

A. Public  
B. Internal  
C. Confidential  
D. PII  
E. Sensitive / Regulated  
F. Secret-bearing  
G. Unknown — block or restrict until reviewed  

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Asset Sensitivity Inventory

Stop if asset-level classification is incomplete.

### Options

A. Classify all P1 datasets  
B. Classify all P1 fields/columns  
C. Classify all P1 metrics/KPIs  
D. Classify all P1 semantic objects  
E. Classify all P1 serving outputs  
F. Classify API/export/data sharing/AI-agent outputs  
G. Unknown assets remain restricted until reviewed  

### Required response

Choose one or more options.

---

## HALT — Sensitive Field Handling

Stop if sensitive fields exist but handling is unclear.

### Options

A. Retain with restricted access  
B. Mask in serving layer  
C. Tokenize or pseudonymize  
D. Hash identifiers  
E. Drop from curated/serving outputs  
F. Split into restricted dataset  
G. Quarantine or block secret-bearing payloads  
H. Custom handling  

### Required response

Choose one or more options.

---

## HALT — Access Control Model

Stop if access model is unclear.

### Options

A. Role-based access control  
B. Attribute-based access control  
C. Row-level security  
D. Column-level security  
E. Object-level security  
F. Purpose-based access  
G. Just-in-time access  
H. Manual approval access  
I. Custom model  

### Required response

Choose one or more options.

---

## HALT — Role and Persona Access

Stop if persona access is unclear.

### Required fields

- persona/role;
- allowed assets;
- denied assets;
- conditions;
- approver;
- review cadence.

### Options

A. Business analyst curated-only access  
B. Data analyst Silver/Gold access  
C. Data engineer raw + curated access  
D. Executive semantic/dashboard access  
E. Application identity restricted output access  
F. AI/data-agent restricted semantic access  
G. External partner controlled sharing access  
H. Custom persona access  

### Required response

Choose and define applicable personas.

---

## HALT — Row and Column Security

Stop if RLS/CLS may be required.

### Options

A. No RLS/CLS required  
B. Row-level security by region/business unit/customer/tenant  
C. Column-level security for sensitive fields  
D. Object-level restriction by dataset/model  
E. Measure-level restriction in semantic layer  
F. Unknown — block broad serving until reviewed  
G. Custom policy  

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Masking, Tokenization, and Anonymization Policy

Stop if protected fields require transformation before exposure.

### Options

A. Static masking  
B. Dynamic masking by role  
C. Tokenization  
D. Pseudonymization  
E. Hashing  
F. Aggregation-only exposure  
G. Anonymization before external sharing  
H. No masking needed  
I. Custom policy  

### Required response

Choose one or more options.

---

## HALT — Encryption and Secret Handling

Stop if encryption or secret-bearing data handling is unclear.

### Options

A. Encryption at rest required  
B. Encryption in transit required  
C. Managed secrets store required  
D. Secret-bearing payloads blocked or quarantined  
E. Credentials/tokens must never be persisted in data layers  
F. Key rotation expectation documented  
G. Platform default encryption accepted  
H. Custom policy  

### Required response

Choose one or more options.

---

## HALT — Privacy and Consent

Stop if personal data or consent-sensitive data may exist.

### Options

A. No known personal data  
B. Personal data requires privacy review  
C. Consent/purpose limitation required  
D. Data minimization required  
E. De-identification required before serving  
F. Deletion/anonymization on privacy request required  
G. Unknown — restrict until privacy review  

### Required response

Choose one or more options.

---

## HALT — Retention Lifecycle and Deletion Policy

Stop if retention or deletion is unclear.

### Options

A. Retain according to business need  
B. Retain according to contract  
C. Retain according to compliance/legal requirement  
D. Hot/warm/cold lifecycle  
E. Delete raw data after fixed period  
F. Delete or anonymize on privacy request  
G. Keep only aggregates after retention period  
H. Unknown — block production approval  

### Required response

Choose one or more options and specify duration where relevant.

---

## HALT — Data Sharing and External Access

Stop if external sharing or partner/customer access is planned.

### Options

A. No external sharing in MVP  
B. External sharing requires governance approval  
C. Contracted external sharing only  
D. Aggregated/anonymized sharing only  
E. Data sharing with audit logging  
F. Region/data residency review required  
G. Legal/security review required  
H. Custom policy  

### Required response

Choose one or more options.

---

## HALT — API Application and AI-Agent Access

Stop if application/API/AI-agent access is planned.

### Options

A. Application identity with least privilege  
B. API contract and rate limit required  
C. AI/data-agent restricted to certified semantic objects  
D. AI/data-agent audit logging required  
E. No sensitive fields exposed to AI/data-agent  
F. Human approval required for agent actions/writeback  
G. Security review required  
H. Custom policy  

### Required response

Choose one or more options.

---

## HALT — Reverse ETL Governance

Stop if reverse ETL or writeback is planned.

### Options

A. No reverse ETL in MVP  
B. Manual approval before writeback  
C. Dry-run before production activation  
D. Limited approved fields/entities only  
E. Monitoring and rollback/disable switch required  
F. Writeback owner and destination owner approval required  
G. Feedback-loop risk review required  
H. Custom policy  

### Required response

Choose one or more options.

---

## HALT — Audit Logging and Access Monitoring

Stop if audit monitoring is unclear.

### Options

A. Access logs required  
B. Permission change logs required  
C. Data sharing/export logs required  
D. API/agent usage logs required  
E. Sensitive field access logs required  
F. Failed access attempt logs required  
G. Periodic access review required  
H. Custom monitoring  

### Required response

Choose one or more options.

---

## HALT — Approval Workflow and Exceptions

Stop if access/change/security exceptions are unclear.

### Options

A. Owner approval required for access  
B. Steward approval required for sensitive fields  
C. Governance/security approval required for external sharing  
D. Time-bound exception with expiry  
E. Emergency access with post-review  
F. Change request approval for policy change  
G. Custom approval workflow  

### Required response

Choose one or more options.

---

## HALT — Ownership, Stewardship, and Accountability

Stop if governance ownership is unclear.

### Options

A. Data product owner approves product-level access  
B. Data steward approves definitions and sensitive field handling  
C. Data engineering owns technical enforcement design  
D. Platform/security team owns platform controls  
E. Governance owner approves exceptions and external sharing  
F. Shared RACI required  
G. Unknown — keep Draft/Risk/Blocked  

### Required response

Choose one or more options.

---

## HALT — Compliance Requirement

Stop if compliance/regulatory needs may apply but are unclear.

### Options

A. No known special compliance requirement  
B. Privacy regulation review required  
C. Data residency/sovereignty review required  
D. Financial/health/regulated data review required  
E. Contractual/customer obligation review required  
F. Internal audit requirement  
G. Unknown — keep governance status Risk/Blocked  

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Incident Response and Escalation

Stop if misuse, breach, policy violation, or data exposure handling is unclear.

### Options

A. Security incident path required  
B. Data breach escalation required  
C. Access misuse review required  
D. External sharing violation escalation required  
E. AI-agent misuse review required  
F. Reverse ETL writeback incident handling required  
G. Post-incident review required  
H. Custom incident response  

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

- governance scope and principles are defined;
- data classification policy is defined;
- asset sensitivity inventory is created;
- field-level sensitivity handling is documented;
- access model and persona matrix are documented;
- RLS/CLS/masking/tokenization expectations are documented;
- encryption and secret handling expectations are documented;
- privacy, retention, deletion, sharing, API/AI, reverse ETL, audit, approval, compliance, incident response, and ownership policies are documented;
- evidence mapping is prepared;
- required support work is identified;
- risks and assumptions are explicit;
- draft governance/security specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
