# Step 01 — Context and Readiness

## Goal

Confirm that Governance and Security Design is the correct next step and that upstream lineage, metadata, sensitivity, ownership, serving, contract, and access context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- `.agents/des-skill/output/18-lineage-metadata-specification.md`;
- workflow status file;
- asset sensitivity inventory;
- field-level metadata;
- data classification;
- consumers and personas;
- access expectations;
- serving channels;
- data sharing or external access needs;
- AI/data-agent access needs;
- reverse ETL needs;
- retention and deletion expectations;
- audit and compliance expectations;
- ownership and stewardship metadata.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Data Product Specification;
   - Data Source Inventory;
   - Bronze Layer Specification;
   - Silver Layer Specification;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Semantic Model Specification;
   - Serving Layer Specification;
   - Lineage and Metadata Specification.
4. Extract:
   - data assets requiring governance;
   - field-level sensitivity;
   - consumers, personas, systems, and agents;
   - access and sharing paths;
   - raw vs curated exposure;
   - contract access expectations;
   - retention/deletion risks;
   - audit and compliance metadata;
   - owner, steward, approver gaps.
5. Check whether existing `19-governance-security-specification.md` exists.
6. Decide whether to create a new governance/security specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Governance should be risk-based and data-product-aware.
- Raw Bronze usually requires stricter access than curated outputs.
- Least privilege should be the default.
- Access policy should consider persona, purpose, asset layer, and sensitivity.
- Security is not only authentication; it includes authorization, masking, audit, retention, deletion, and incident handling.
- Privacy-sensitive data needs lifecycle handling, not just access control.
- External sharing and reverse ETL require explicit approval.
- AI/data-agent access needs both semantic restrictions and auditability.

## Governance Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Asset | Which dataset, field, metric, API, semantic model, or serving output needs governance? |
| Sensitivity | Is it public, internal, confidential, PII, regulated, or secret-bearing? |
| Access | Who needs access and why? |
| Control | Is access controlled by role, row, column, object, or purpose? |
| Privacy | Is consent, deletion, masking, or minimization required? |
| Retention | How long is the data kept and why? |
| Sharing | Is data shared externally or pushed into operational tools? |
| Audit | What access/change/security events must be logged? |
| Owner | Who approves, reviews, and resolves exceptions? |
| Incident | What happens on misuse, breach, or policy violation? |

## HALT — Missing or Weak Lineage/Metadata Context

Stop if upstream lineage/metadata context is missing or too weak to design governance safely.

### Trigger

Use this HALT if:

- `18-lineage-metadata-specification.md` is missing;
- asset inventory is missing;
- field-level sensitivity is missing;
- ownership/stewardship metadata is missing;
- serving outputs and consumers are unclear;
- audit/compliance metadata is missing.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-lineage-metadata-design`  
B. Route back to `des-serving-layer-design`  
C. Continue Phase 19 as Draft using current context  
D. User provides missing governance context now  
E. Stop workflow  

### Recommendation

Choose A if asset/sensitivity/ownership metadata is missing. Choose B if serving exposure or consumers are unclear.

### Required response

Choose A/B/C/D/E.

## HALT — Governance Scope Required

Stop if governance/security scope is unclear.

### Decision needed

What governance scope should Phase 19 cover?

### Options

A. P1 serving outputs only  
B. P1 Gold and semantic assets  
C. P1 Bronze/Silver/Gold + serving outputs  
D. All P1 data product assets end-to-end  
E. P1 + P2 governance roadmap  
F. Full project governance and security framework  
G. Custom scope  

### Recommendation

Choose D for first-release safety. Choose F if the project is intended to be production-grade/platform-grade.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- governance scope is selected or marked unresolved;
- assets, sensitivity, access paths, retention, sharing, audit, ownership, and compliance gaps are extracted;
- the agent knows whether to create, update, or defer the governance/security specification.

## Next Step

After completion, load only:

```text
steps/step-02-policy-access-and-risk-design.md
```
