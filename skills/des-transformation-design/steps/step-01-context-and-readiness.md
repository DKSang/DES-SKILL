# Step 01 — Context and Readiness

## Goal

Confirm that Transformation Design is the correct next step and that upstream contracts, layer specifications, KPI definitions, architecture, and requirements are available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- workflow status file;
- Bronze, Silver, and Gold dataset inventories;
- data contracts;
- P1/P2 requirements and KPIs;
- approved metric definitions;
- grain and identity rules;
- conformance rules;
- Gold aggregation rules;
- freshness/SLA expectations;
- contract validation expectations;
- architecture compute/tool constraints.

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
   - Data Contract Specification.
4. Extract:
   - P1/P2 transformation paths;
   - Bronze → Silver mappings;
   - Silver → Gold mappings;
   - contracted outputs;
   - grain and key rules;
   - business rules;
   - conformance and standardization rules;
   - metric and aggregation rules;
   - quality expectations;
   - freshness/SLA expectations;
   - lineage requirements;
   - security/privacy constraints;
   - unresolved risks and open questions.
5. Check whether existing `13-transformation-specification.md` exists.
6. Decide whether to create a new transformation specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Transformation design should be traceable from source layer to contracted output.
- Do not start writing SQL or Python yet.
- If a rule is not approved in upstream artifacts, mark it Draft instead of implementing it.
- If a Gold metric depends on an unapproved KPI formula, route back to Phase 3 or keep as Risk.
- If a transformation depends on unresolved Silver identity, mark downstream Gold transformation as Risk.
- If contract expectations cannot be validated by transformation outputs, record a contract alignment risk.
- Every P1 contracted output should have a transformation path.
- Every transformation should have input, output, grain, dependency, and validation expectation.

## Transformation Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Input | Which Bronze/Silver datasets are consumed? |
| Output | Which Silver/Gold/serving dataset is produced? |
| Purpose | Which business question, requirement, KPI, or contract does it support? |
| Grain | What is the transformation output grain? |
| Logic | What rules are applied? |
| Dependency | What must run before this transformation? |
| Incremental | Can it run incrementally? How does it detect changes? |
| Correction | How are late/corrected records handled? |
| Failure | What happens if input quality or rule validation fails? |
| Validation | What checks prove the output is correct enough? |
| Contract | Which contract clauses does the output satisfy? |

## HALT - Readiness Check Failed

Stop if upstream contracts or layer specs are missing or too weak to design transformations safely.

### Trigger

Use this HALT if:

- `12-data-contract-specification.md` is missing;
- Gold contracts are missing for P1 downstream outputs;
- Bronze/Silver/Gold specs are missing;
- transformation paths cannot be mapped;
- contract expectations conflict with Gold/Silver specs;
- KPI definitions or grain are unresolved.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-contracts`  
B. Route back to `des-gold-layer-design`  
C. Route back to `des-silver-layer-design`  
D. Continue Phase 13 as Draft using current context  
E. User provides missing transformation context now  
F. Stop workflow  

### Recommendation

Choose A if contracts are missing or inconsistent.  
Choose B if Gold output/grain/metric logic is unclear.  
Choose C if Silver identity/conformance is unclear.  
Choose D only if the user accepts that transformation design remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT - Transformation Scope Required

Stop if transformation scope is unclear.

### Decision needed

What transformation scope should this phase cover?

### Options

A. P1 Bronze → Silver transformations only  
B. P1 Silver → Gold transformations only  
C. All P1 Bronze → Silver → Gold transformations  
D. P1 + P2 transformations  
E. Only transformations needed by contracted outputs  
F. Custom scope  

### Recommendation

Choose C for complete first-release design. Choose E if contracts define the first implementation boundary.

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- transformation scope is selected or marked unresolved;
- P1/P2 transformation paths are identified;
- contract, Gold, Silver, Bronze, KPI, and quality dependencies are extracted;
- unresolved transformation risks are documented;
- the agent knows whether to create, update, or defer the transformation specification.

## Next Step

After completion, load only:

```text
steps/step-02-transformation-logic-and-dependencies.md
```
