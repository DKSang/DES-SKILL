# Step 01 — Context and Readiness

## Goal

Confirm that Orchestration and Observability Design is the correct next step and that upstream quality, transformation, contract, architecture, and SLA context is available.

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
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- workflow status file;
- architecture orchestration boundary;
- ingestion schedules/triggers;
- transformation dependency graph;
- quality rules and severity;
- quality gate behavior;
- freshness/SLA expectations;
- contract expectations;
- backfill/replay requirements;
- late/corrected data handling;
- incident/escalation expectations;
- operational owners.

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
   - Transformation Specification;
   - Data Quality Specification.
4. Extract:
   - P1/P2 workflows;
   - ingestion triggers and frequencies;
   - transformation dependency graph;
   - contracted outputs;
   - quality gates and severity;
   - publish requirements;
   - SLA/freshness expectations;
   - retry/idempotency constraints;
   - backfill/replay constraints;
   - alert owners and escalation paths;
   - monitoring signals required;
   - evidence required for audit.
5. Check whether existing `15-orchestration-observability-specification.md` exists.
6. Decide whether to create a new orchestration/observability specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Orchestration should follow dependency and quality gate design, not just chronological order.
- Do not retry non-idempotent steps unless rerun behavior is approved.
- P1 Blocking quality failures should usually block publish.
- Freshness SLA needs a measurable timestamp.
- Observability should include data signals, not only job success/failure.
- Alerting should have owner and severity, otherwise it becomes noise.
- Backfill and replay should be designed as operations, not ad hoc manual hacks.
- The previous successful output may need to remain available when publish is blocked.
- If source readiness is uncertain, design pre-checks.
- If contract violation occurs, align with Phase 12 incident policy.

## Orchestration Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Workflow | Which end-to-end workflow is being orchestrated? |
| Trigger | What starts the workflow? |
| Dependency | What must complete before each step runs? |
| Quality gate | Which rule blocks, warns, or records info? |
| Publish gate | When is an output safe to publish? |
| Retry | Which steps can be safely retried? |
| Recovery | What happens after failure? |
| Backfill | How are historical periods reprocessed? |
| SLA | What freshness/delivery target is monitored? |
| Alert | Who is notified and when? |
| Evidence | What run metadata proves what happened? |

## HALT — Missing or Weak Quality Context

Stop if upstream quality or transformation context is missing or too weak to design orchestration safely.

### Trigger

Use this HALT if:

- `14-data-quality-specification.md` is missing;
- `13-transformation-specification.md` is missing;
- quality gate behavior is missing;
- transformation dependency graph is missing;
- freshness/SLA expectation is unclear;
- P1 contracted outputs lack validation/failure behavior.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-quality`
B. Route back to `des-transformation-design`
C. Route back to `des-data-contracts` if contract incident behavior is missing
D. Continue Phase 15 as Draft using current context
E. User provides missing orchestration context now
F. Stop workflow

### Recommendation

Choose A if quality gate behavior is missing.
Choose B if transformation dependencies are missing.
Choose D only if the user accepts that orchestration design remains Draft.

### Required response

Choose A/B/C/D/E/F.

## HALT — Workflow Scope Required

Stop if orchestration scope is unclear.

### Decision needed

What workflow scope should Phase 15 cover?

### Options

A. P1 end-to-end workflow only
B. All P1 ingestion → Bronze → Silver → Gold workflows
C. P1 + P2 workflows
D. Only contracted output workflows
E. Only operational monitoring and alerting design
F. Full project orchestration framework
G. Custom scope

### Recommendation

Choose B for first-release reliability. Choose D if contracts define the release boundary.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- workflow scope is selected or marked unresolved;
- workflow candidates, dependencies, triggers, gates, SLAs, alert owners, and evidence needs are extracted;
- unresolved orchestration/observability risks are documented;
- the agent knows whether to create, update, or defer the orchestration/observability specification.

## Next Step

After completion, load only:

```text
steps/step-02-workflow-scheduling-and-monitoring.md
```
