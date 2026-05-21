# Checklist — Governance and Security Design

## Required Context

- [ ] Data Product Specification exists or Draft continuation is accepted.
- [ ] Source Inventory exists or Draft continuation is accepted.
- [ ] Bronze/Silver/Gold specifications are considered.
- [ ] Data Contract Specification is considered.
- [ ] Semantic Model Specification is considered.
- [ ] Serving Layer Specification is considered.
- [ ] Lineage and Metadata Specification exists or Draft continuation is accepted.
- [ ] Asset inventory is available.
- [ ] Field-level metadata is considered.
- [ ] Ownership/stewardship metadata is considered.
- [ ] Serving consumers and access paths are considered.

## Governance Coverage

- [ ] Governance scope is defined.
- [ ] Governance design principles are defined.
- [ ] Data classification policy is defined.
- [ ] Asset sensitivity inventory is created.
- [ ] Field-level sensitivity handling is documented.
- [ ] Access control model is documented.
- [ ] Role/persona access matrix is documented.
- [ ] Row-level security policy is documented or marked not applicable.
- [ ] Column-level security policy is documented or marked not applicable.
- [ ] Masking/tokenization/anonymization policy is documented.
- [ ] Encryption and secret handling expectations are documented.
- [ ] Privacy and consent considerations are documented.
- [ ] Retention lifecycle and deletion policy is documented.
- [ ] Data sharing/external access policy is documented.
- [ ] API/application/AI-agent access policy is documented.
- [ ] Reverse ETL governance is documented where relevant.
- [ ] Audit logging/access monitoring is documented.
- [ ] Approval workflow and exception handling are documented.
- [ ] Ownership/stewardship/accountability is documented.
- [ ] Compliance/regulatory considerations are documented.
- [ ] Incident response/escalation is documented.

## Security and Privacy Safety

- [ ] Least privilege is used as default.
- [ ] Raw Bronze access is restricted or justified.
- [ ] Unknown classification is treated as restricted/risk.
- [ ] PII/sensitive fields have handling policy.
- [ ] Secret-bearing payloads are blocked/quarantined/removed.
- [ ] External sharing requires approval.
- [ ] AI/data-agent access is restricted and auditable.
- [ ] Reverse ETL writeback has guardrails.
- [ ] Retention/deletion policy is not ignored.
- [ ] Audit requirements are defined.

## Guardrails

- [ ] The artifact does not implement IAM/ACL/RLS/CLS configuration.
- [ ] The artifact does not write masking/encryption code.
- [ ] The artifact does not deploy governance tools.
- [ ] The artifact does not create infrastructure/security automation.
- [ ] Broad access is not granted by default.
- [ ] Sensitive fields are not exposed without documented handling.
- [ ] Compliance requirements are not guessed.
- [ ] Owners/approvers are not invented silently.

## HALT Validation

- [ ] Missing lineage/metadata context HALT resolved or artifact remains Draft.
- [ ] Governance scope HALT resolved or artifact remains Draft.
- [ ] Data classification HALT resolved or asset remains Risk/Blocked.
- [ ] Sensitive field handling HALT resolved or field remains Risk/Blocked.
- [ ] Access control model HALT resolved or policy remains Draft.
- [ ] Role/persona access HALT resolved or policy remains Draft.
- [ ] RLS/CLS HALT resolved or policy remains Draft/Risk.
- [ ] Masking/tokenization HALT resolved or policy remains Draft/Risk.
- [ ] Retention/deletion HALT resolved or policy remains Draft/Risk.
- [ ] External sharing HALT resolved or sharing remains Blocked/Risk.
- [ ] AI-agent access HALT resolved or access remains Risk/Blocked.
- [ ] Reverse ETL HALT resolved or writeback remains Risk/Blocked.
- [ ] Audit monitoring HALT resolved or policy remains Draft.
- [ ] Approval/exception HALT resolved or policy remains Draft.
- [ ] Compliance HALT resolved or requirement remains Draft/Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
