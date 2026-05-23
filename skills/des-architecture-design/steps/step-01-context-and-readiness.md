# Step 01 — Context and Readiness

## Goal

Confirm that Architecture Design is the correct next step and that upstream business, product, source, and domain context is available.

## Required Inputs

Look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- workflow status file;
- known platform constraints;
- known team capabilities;
- known cloud/on-prem/hybrid constraints;
- known security, privacy, compliance, and governance constraints;
- known cost/capacity constraints;
- known data freshness and latency expectations;
- known serving expectations;
- known existing architecture if this is a brownfield project.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Business Discovery Brief;
   - Business Question Catalog;
   - Requirements and KPI Catalog;
   - Data Product Specification;
   - Data Source Inventory;
   - Conceptual Domain Model.
4. Extract:
   - product outputs;
   - P1/P2 requirements;
   - freshness/SLA expectations;
   - security/privacy constraints;
   - source types and access patterns;
   - source reliability and schema risks;
   - core domain concepts and grains;
   - serving expectations;
   - quality/trust expectations;
   - cost/performance constraints;
   - known platform/tool constraints;
   - open questions.
5. Check whether existing `07-architecture-decision-record.md` exists.
6. Decide whether to create a new ADR, update an existing ADR, continue as Draft, or route back to an upstream phase.

## Hints

- Architecture is strategic; tools are tactical.
- Architecture should explain what, why, and when. Tools explain how.
- Do not choose tools before clarifying architecture goals and constraints.
- Use domain model and source assessment as architecture evidence.
- If source patterns include streaming/events, evaluate streaming/event architecture, but do not assume it is required.
- If freshness requirements are batch-friendly, do not over-engineer streaming.
- If the project is brownfield, understand existing constraints before recommending replacement.
- Prefer reversible decisions when uncertainty is high.
- Treat security, governance, observability, and cost as architecture concerns, not add-ons.
- Do not design physical schemas, detailed ingestion pipelines, transformations, dashboards, APIs, CI/CD files, or code in this phase.

## Architecture Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Business fit | Which business questions and product outputs drive architecture? |
| Source fit | What source types, generation patterns, volumes, and risks must be supported? |
| Domain fit | Which domain concepts, grains, and identity rules affect architecture? |
| Freshness | Are requirements batch, near-real-time, streaming, or mixed? |
| Serving | How will consumers access outputs? |
| Security | What sensitivity, access, and compliance constraints exist? |
| Operations | How will orchestration, monitoring, failure handling, and change management work? |
| Cost | What cost/capacity limits exist? |
| Team | What skills and operational burden can the team handle? |
| Reversibility | Which decisions are safe to change later, and which are costly? |

## HALT - Readiness Check Failed

Stop if upstream domain or source context is missing or too weak to design architecture safely.

### Trigger

Use this HALT if:

- `06-conceptual-domain-model.md` is missing;
- source inventory is missing or P1 sources are unknown;
- data product outputs are unclear;
- P1 requirements are unclear;
- freshness/security/serving expectations are missing;
- architecture drivers conflict with unresolved upstream decisions.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-domain-modeling`  
B. Route back to another upstream skill that owns the missing context  
C. Continue Phase 7 as Draft using current context  
D. User provides missing architecture context now  
E. Stop workflow  

### Recommendation

Choose A or B if missing context affects P1 architecture decisions.  
Choose C only if the user accepts that the ADR remains Draft.

### Required response

Choose A/B/C/D/E.

## HALT - Architecture Scope Required

Stop if the architecture boundary is unclear.

### Decision needed

What scope should this architecture cover?

### Options

A. First-release data product only  
B. P1 and P2 data product roadmap  
C. Project-wide data platform foundation  
D. Organization-wide data architecture pattern  
E. Migration/modernization target architecture  
F. Custom scope  

### Recommendation

Choose A for MVP speed. Choose C if the project is explicitly a platform foundation.

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- architecture scope is selected or marked unresolved;
- architecture drivers and constraints are extracted;
- known platform/tool constraints are separated from architecture decisions;
- open risks are documented;
- the agent knows whether to create, update, or defer the ADR.

## Next Step

After completion, load only:

```text
steps/step-02-architecture-options-and-decisions.md
```
