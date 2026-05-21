# Step 01 — Context and Readiness

## Goal

Confirm that Serving Layer Design is the correct next step and that upstream semantic, Gold, contract, quality, architecture, and consumer context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- workflow status file;
- consumer personas;
- serving direction;
- Gold outputs;
- semantic models;
- contract levels;
- quality/trust status;
- freshness/SLA expectations;
- access/security constraints;
- feedback and support expectations.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Architecture Decision Record;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Data Quality Specification;
   - Orchestration and Observability Specification;
   - Semantic Model Specification.
4. Extract:
   - P1/P2 consumers;
   - P1/P2 business questions;
   - P1/P2 Gold outputs;
   - semantic models and certified measures;
   - serving paths from architecture and Gold design;
   - contract expectations;
   - quality and freshness visibility needs;
   - security/access requirements;
   - performance/latency needs;
   - feedback/support risks.
5. Check whether existing `17-serving-layer-specification.md` exists.
6. Decide whether to create a new serving specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Serving is the final lifecycle stage where data reaches users or systems.
- Serving should be designed around how consumers actually work.
- Do not assume every serving need is a dashboard.
- BI, ML, APIs, reverse ETL, data sharing, and AI agents have different serving risks.
- Reverse ETL creates feedback loops and needs guardrails.
- Federated query can be useful, but source impact and access control must be considered.
- Users must see trust signals: freshness, certification, warnings, and known limitations.
- Serving should create feedback loops so issues and improvement requests return to the data team.

## Serving Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Consumer | Who will consume the data? |
| Job to be done | What task or decision does the data support? |
| Channel | Dashboard, BI, API, ML, export, reverse ETL, data sharing, or AI agent? |
| Trust | Is the output Draft, Promoted, Certified, or Risk? |
| Freshness | How fresh must the served data be? |
| Access | Who can see what? |
| Performance | What latency or concurrency is expected? |
| Feedback | How will users report issues or request changes? |
| Ownership | Who supports the serving interface? |

## HALT — Missing or Weak Semantic/Serving Context

Stop if upstream semantic or serving context is missing or too weak.

### Trigger

Use this HALT if:

- `16-semantic-model-specification.md` is missing;
- Gold output is missing;
- serving channel is unclear;
- consumer is unclear;
- contract level is missing for system-facing output;
- security/access classification is unknown;
- freshness/quality visibility is missing.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-semantic-model-design`
B. Route back to `des-gold-layer-design`
C. Route back to `des-data-contracts` or `des-data-quality`
D. Continue Phase 17 as Draft using current context
E. User provides missing serving context now
F. Stop workflow

### Recommendation

Choose A if semantic model is missing.  
Choose B if Gold output is unclear.  
Choose D only if the user accepts that serving design remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT — Serving Scope Required

Stop if serving scope is unclear.

### Decision needed

What serving scope should Phase 17 cover?

### Options

A. P1 dashboard/reporting only  
B. P1 semantic/self-service analytics only  
C. P1 API/application outputs only  
D. P1 ML/AI datasets only  
E. All P1 serving channels  
F. P1 + P2 serving roadmap  
G. Full project serving strategy  
H. Custom scope  

### Recommendation

Choose E for a complete first-release serving design. Choose A/B/C/D if the product has one dominant serving path.

### Required response

Choose A/B/C/D/E/F/G/H.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- serving scope is selected or marked unresolved;
- P1/P2 consumers, Gold outputs, semantic models, contracts, quality, access, freshness, and serving risks are extracted;
- the agent knows whether to create, update, or defer the serving specification.

## Next Step

After completion, load only:

```text
steps/step-02-serving-channels-and-consumer-experience.md
```
