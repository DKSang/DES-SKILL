# Step 01 — Context and Readiness

## Goal

Confirm that Data Quality Design is the correct next step and that upstream transformation, contract, Gold, Silver, Bronze, and requirement context is available.

## Required Inputs

Look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/08-ingestion-specification.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/13-transformation-specification.md`;
- workflow status file;
- contracted outputs;
- transformation validation expectations;
- Bronze technical quality expectations;
- Silver conformance quality expectations;
- Gold boundary quality expectations;
- freshness/SLA expectations;
- metric reconciliation requirements;
- security/access constraints;
- consumer acceptance criteria.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Data Source Inventory;
   - Conceptual Domain Model;
   - Architecture Decision Record;
   - Ingestion Specification;
   - Bronze Layer Specification;
   - Silver Layer Specification;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Transformation Specification.
4. Extract:
   - P1/P2 datasets and outputs;
   - P1 contracted outputs;
   - contract quality expectations;
   - transformation validation expectations;
   - layer-specific quality rules already proposed;
   - metric/KPI reconciliation expectations;
   - freshness/SLA expectations;
   - source quality risks;
   - consumer acceptance expectations;
   - unresolved quality risks and open questions.
5. Check whether existing `14-data-quality-specification.md` exists.
6. Decide whether to create a new data quality specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Quality design should be risk-based, not rule-spam.
- Bronze quality is mostly technical and ingestion evidence.
- Silver quality is mostly conformance, identity, validity, standardization, and trust.
- Gold quality is mostly consumer, metric, contract, freshness, reconciliation, and serving readiness.
- Contract quality rules should become strong candidates for blocking gates.
- Not every warning should block publish.
- Not every rule needs the same severity.
- Quality failures should have owners and expected action.
- If no one owns a rule, it is hard to operate.
- If no evidence is captured, the rule is not auditable.

## Quality Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Dataset | Which dataset/output is being validated? |
| Purpose | Which contract, requirement, KPI, or transformation does the rule protect? |
| Dimension | What quality dimension does the rule measure? |
| Threshold | What value means pass/fail/warning? |
| Severity | Is failure blocking, warning, or informational? |
| Action | What happens when the rule fails? |
| Owner | Who resolves failure? |
| Evidence | What evidence is recorded? |
| Timing | When does the rule run? |
| Consumer | Does consumer acceptance depend on this rule? |

## HALT - Readiness Check Failed

Stop if upstream transformation or contract context is missing or too weak to design quality safely.

### Trigger

Use this HALT if:

- `13-transformation-specification.md` is missing;
- `12-data-contract-specification.md` is missing for contracted outputs;
- transformation validation expectations are missing;
- Gold/Silver/Bronze quality expectations are missing;
- P1 outputs cannot be mapped to quality rules;
- quality expectations conflict with contracts.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-transformation-design`  
B. Route back to `des-data-contracts`  
C. Route back to `des-gold-layer-design` or layer design that owns missing quality context  
D. Continue Phase 14 as Draft using current context  
E. User provides missing quality context now  
F. Stop workflow  

### Recommendation

Choose A if transformation validation is missing.  
Choose B if contract quality expectations are missing.  
Choose D only if the user accepts that quality design remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT - Quality Scope Required

Stop if quality design scope is unclear.

### Decision needed

What quality scope should Phase 14 cover?

### Options

A. P1 contracted Gold outputs only  
B. P1 Bronze, Silver, and Gold datasets  
C. All P1 transformation outputs  
D. P1 + P2 datasets and outputs  
E. Only rules needed for release gates  
F. Full project quality framework  
G. Custom scope  

### Recommendation

Choose B for first-release reliability. Choose E if the project is close to implementation/release.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- quality scope is selected or marked unresolved;
- P1/P2 datasets and contracted outputs are identified;
- existing quality expectations are extracted;
- missing thresholds, owners, severity, and evidence are documented;
- the agent knows whether to create, update, or defer the quality specification.

## Next Step

After completion, load only:

```text
steps/step-02-quality-rules-and-gates.md
```
