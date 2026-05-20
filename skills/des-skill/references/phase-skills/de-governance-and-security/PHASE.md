---
name: de-governance-and-security
description: Use when defining ownership, stewardship, access control, privacy, lineage, retention, compliance, cost controls, and change management for data products.
---

# de-governance-and-security

## When To Use

Use before production release and whenever sensitive data, shared metrics, external access, compliance, or cross-team ownership is involved.

## Purpose

Create governance and security controls that make the data platform trustworthy, compliant, maintainable, and accountable.

## Inputs Required

- Dataset inventory.
- Data contracts.
- Semantic and serving design.
- Security and regulatory constraints.
- Organization roles and ownership model.

## Step-By-Step Process

1. Assign owners, stewards, and operational contacts.
2. Classify sensitive data: PII, PHI, PCI, confidential, public, internal.
3. Define access controls: role-based access, row-level security, column masking, service accounts.
4. Define retention, deletion, archival, and legal hold policies.
5. Define lineage from source to serving layer.
6. Define change management for schemas, contracts, metrics, and pipelines.
7. Define cost monitoring and usage review.

## Required Outputs

- Governance checklist.
- Access control matrix.
- Data classification register.
- Lineage and retention plan.
- Change management policy.

## Quality Checklist

- Every critical dataset has an owner.
- Sensitive fields are classified.
- Least-privilege access is defined.
- Lineage covers source to serving.
- Retention and deletion policies are explicit.

## Common Mistakes To Avoid

- Treating governance as documentation after release.
- Giving broad access to raw data.
- Ignoring service account permissions.
- Missing metric and contract versioning.

## Handoff To The Next Skill

Next use `de-cost-and-performance-optimization` to review partitioning, compute, query performance, and platform cost before final CI/CD and release controls.

## Example Output Format

```markdown
# Governance And Security Plan
| Dataset | Owner | Classification | Access | Retention | Lineage |
## Change Policy
## Cost Controls
```
