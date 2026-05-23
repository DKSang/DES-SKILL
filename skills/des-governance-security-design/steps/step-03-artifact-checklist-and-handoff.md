# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Governance and Security Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Governance/security design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Governance and Security Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved governance/security decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-cost-and-performance-optimization`.

## Hints

- This artifact should define policy and decisions, not implement controls.
- Do not hide unknown classification.
- Unknown sensitivity should default to restricted or blocked broad access.
- Raw data access should be intentionally justified.
- External sharing, AI-agent access, and reverse ETL require explicit guardrails.
- Retention and deletion policy should be documented before production release.

## Workflow Status Update

```yaml
phase_19_governance_security_design:
  skill: des-governance-security-design
  artifact: _des-output/planning-artifacts/19-governance-security-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  governed_assets:
    - asset: ...
      classification: Public | Internal | Confidential | PII | Sensitive / Regulated | Secret-bearing | Unknown
      status: Draft | Approved | Risk | Blocked | Deferred
  access_policies:
    - policy_id: ...
      applies_to: ...
      control: RBAC | ABAC | RLS | CLS | Masking | Tokenization | Manual approval
  open_questions:
    - ...
  next_recommended_skill: des-cost-and-performance-optimization
```
