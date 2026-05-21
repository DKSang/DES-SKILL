# Step 01 — Context and Readiness

## Goal

Confirm that Ingestion Design is the correct next step and that upstream architecture, source, product, requirement, and domain context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- workflow status file;
- P1/P2 source inventory;
- source access status;
- source generation patterns;
- source update frequency and freshness;
- source schema and drift risks;
- source security/privacy classification;
- source reliability, cost, quota, and rate-limit risks;
- approved architecture layer strategy;
- approved batch/streaming/event strategy;
- product freshness/SLA expectations;
- quality/trust expectations.

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
   - Architecture Decision Record.
4. Extract:
   - sources required for P1/P2 outputs;
   - source types and generation patterns;
   - source access and permission status;
   - source freshness and reliability expectations;
   - source schema drift behavior;
   - source security/privacy classification;
   - approved architecture constraints;
   - batch/streaming/event direction;
   - layer strategy;
   - environment strategy;
   - cost/team constraints;
   - open questions.
5. Check whether existing `08-ingestion-specification.md` exists.
6. Decide whether to create a new ingestion specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Ingestion design should be source-specific.
- Do not design one generic ingestion pattern for all sources unless the sources truly share the same behavior.
- Treat architecture decisions as constraints, not suggestions.
- Treat source inventory risk ratings as input to ingestion design.
- If source access is blocked or unknown, do not mark ingestion as ready.
- If source freshness is best-effort, downstream SLA must account for that.
- If source schema change behavior is unknown, schema drift must be treated as a risk.
- If the source is manual or file-based, assess delivery reliability and naming conventions later.
- If the source is API-based, assess authentication, pagination, rate limit, retry, and response schema later.
- If the source is database-based, assess read impact, CDC feasibility, and extraction consistency later.
- If the source is streaming/event-based, assess ordering, replay, retention, and delivery guarantees later.
- Do not design detailed Bronze schemas, Silver or Gold layer schemas, physical transformations, or write pipeline implementation code.

## Ingestion Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Source | Which approved source is being ingested? |
| Need | Which product output, requirement, or KPI needs this data? |
| Access | Is access approved and technically possible? |
| Pattern | Is the data batch, streaming, event, snapshot, CDC, file, API, or manual? |
| Frequency | How often must data be ingested to satisfy downstream needs? |
| Incremental | How will new or changed data be identified? |
| Idempotency | Can the ingestion be safely rerun? |
| Replay | Can historical data be replayed or backfilled? |
| Failure | What happens when ingestion fails? |
| Drift | What happens when source schema changes? |
| Security | How are credentials and sensitive fields handled? |
| Evidence | What metadata proves ingestion happened correctly? |

## HALT - Readiness Check Failed

Stop if upstream architecture, domain, or source context is missing or too weak to design ingestion safely.

### Trigger

Use this HALT if:

- `07-architecture-decision-record.md` is missing;
- source inventory is missing;
- P1 sources have unknown access status;
- architecture layer strategy is unclear;
- batch/streaming/event strategy is unclear;
- source freshness or product SLA expectations conflict;
- source security/privacy classification is unknown for P1 sources.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-architecture-design`  
B. Route back to `des-data-source-assessment`  
C. Continue Phase 8 as Draft using current context  
D. User provides missing ingestion context now  
E. Stop workflow  

### Recommendation

Choose A if architecture direction is missing.  
Choose B if source access, source type, or source risk is missing.  
Choose C only if the user accepts that ingestion design remains Draft.

### Required response

Choose A/B/C/D/E.

## HALT - Source Access Status

Stop if a P1 source has unknown, pending, denied, or untested access.

### Decision needed

How should ingestion design proceed for this source?

### Options

A. Continue only as Draft until access is approved and tested  
B. Design ingestion assuming access will be approved, mark risk  
C. Replace source or route back to source assessment  
D. Defer this source from first release  
E. Stop workflow until access is resolved  

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1/P2 sources are identified;
- access status and architecture constraints are known or marked as blockers;
- Ingestion context gaps are documented;
- the agent knows whether to create, update, or defer the ingestion specification.

## Next Step

After completion, load only:

```text
steps/step-02-ingestion-patterns-and-controls.md
```
