# Step 02 — Policy, Access, and Risk Design

## Goal

Define governance policy, classification, sensitivity handling, access control, security controls, privacy, retention, sharing, audit, approvals, accountability, compliance, incident response, and exception handling.

## Required Inputs

- Confirmed context from Step 01
- Lineage and Metadata Specification
- Serving Layer Specification
- Semantic Model Specification
- Data Contract Specification
- Bronze/Silver/Gold Layer Specifications
- Data Source Inventory
- User answers from HALT points
- Existing security/governance standards if available

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
22. Use HALT checkpoints for unresolved decisions.

## Governance Design Principles

Use these default principles unless overridden:

| Principle | Meaning |
| --- | --- |
| Least privilege | Grant only necessary access |
| Purpose limitation | Access should match intended use |
| Data minimization | Expose only fields needed |
| Defense in depth | Combine access, masking, audit, and monitoring |
| Privacy by design | Handle privacy lifecycle from the start |
| Govern raw data strictly | Raw data may contain sensitive or unstable fields |
| Certify before broad serving | Trusted access requires quality/contract/lineage |
| Review exceptions | Exceptions must expire or be reviewed |
| Monitor access | Access should be auditable and reviewed |

## Classification Levels

Use these generic classification levels:

| Classification | Meaning |
| --- | --- |
| Public | Safe for open sharing |
| Internal | Internal use, low sensitivity |
| Confidential | Business-sensitive, restricted |
| PII | Personal identifiable information |
| Sensitive / Regulated | Legal, health, financial, contractual, or regulated data |
| Secret-bearing | Credentials, tokens, keys, or payloads containing secrets |
| Unknown | Must be reviewed before broad access |

## HALT — Data Classification Approval

Stop if classification is unclear.

### Decision needed

Approve classification for `<asset_or_field>`.

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

## HALT — Sensitive Field Handling

Stop if sensitive fields exist but handling is unclear.

### Decision needed

How should sensitive fields be handled?

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

## HALT — Access Control Model

Stop if access model is unclear.

### Decision needed

Approve access control model.

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

## HALT — Role and Persona Access

Stop if persona access is unclear.

### Decision needed

Approve persona access matrix.

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

## HALT — Row and Column Security

Stop if RLS/CLS may be required.

### Decision needed

Approve row/column security.

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

## HALT — Masking, Tokenization, and Anonymization Policy

Stop if protected fields require transformation before exposure.

### Decision needed

Approve protection method.

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

## HALT — Retention Lifecycle and Deletion Policy

Stop if retention or deletion is unclear.

### Decision needed

Approve retention/deletion policy.

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

## HALT — Data Sharing and External Access

Stop if external sharing or partner/customer access is planned.

### Decision needed

Approve external sharing policy.

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

## HALT — API Application and AI-Agent Access

Stop if application/API/AI-agent access is planned.

### Decision needed

Approve non-human access governance.

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

## HALT — Reverse ETL Governance

Stop if reverse ETL or writeback is planned.

### Decision needed

Approve writeback governance.

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

## HALT — Audit Logging and Access Monitoring

Stop if audit monitoring is unclear.

### Decision needed

Approve audit and monitoring requirements.

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

## HALT — Approval Workflow and Exceptions

Stop if access/change/security exceptions are unclear.

### Decision needed

Approve approval and exception process.

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

## HALT — Compliance Requirement

Stop if compliance/regulatory needs may apply but are unclear.

### Decision needed

What compliance requirements apply?

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

## Completion Criteria

This step is complete when:

- governance scope and principles are defined;
- data classification policy is defined;
- asset sensitivity inventory is created;
- access model and persona matrix are documented;
- RLS/CLS/masking/tokenization expectations are documented;
- privacy, retention, deletion, sharing, API/AI, reverse ETL, audit, approval, compliance, incident response, and ownership policies are documented;
- risks and assumptions are explicit;
- draft governance/security specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
