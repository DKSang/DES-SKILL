# Checklist — Ingestion Design

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] Phase 7 Architecture Decision Record exists or Draft continuation is explicitly accepted.
- [ ] P1 sources are identified.
- [ ] Architecture layer strategy is considered.
- [ ] Batch/streaming/event architecture direction is considered.
- [ ] Product freshness/SLA expectations are considered.

## Ingestion Design Quality

- [ ] Ingestion Summary is drafted.
- [ ] Ingestion Scope (In scope / Out of scope) is documented.
- [ ] Source-to-Ingestion Mapping maps P1/P2 sources to requirements.
- [ ] Each P1 source has an Ingestion Pattern documented.
- [ ] Each P1 source has batch/streaming/event processing mode documented.
- [ ] Each P1 source has frequency or trigger documented.
- [ ] Each P1 source has access/extraction method documented.
- [ ] Each P1 source has bounded/unbounded classification.
- [ ] Incremental/checkpoint strategy is documented or marked not applicable.
- [ ] Idempotency strategy is documented.
- [ ] Replay/backfill strategy is documented.
- [ ] Late-arriving data handling is documented where relevant.
- [ ] Ordering and deduplication expectations are documented where relevant.
- [ ] Payload/serialization expectations are documented.
- [ ] Schema drift/evolution policy is documented.
- [ ] Error handling/recovery policy is documented.
- [ ] Security and credential handling is documented.
- [ ] Source impact/rate limit/throttling is documented where relevant.
- [ ] Landing target expectations are documented at a high level.
- [ ] Ingestion metadata expectations are documented.
- [ ] Monitoring/evidence expectations are documented.

## Risk and Operational Coverage

- [ ] Blocked sources are marked Blocked.
- [ ] Risky sources are marked Risk.
- [ ] Unknown access, schema, quality, or replay behavior is not hidden.
- [ ] Operational dependencies are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not design detailed Bronze table schemas.
- [ ] The artifact does not design Silver or Gold layer schemas.
- [ ] The artifact does not design physical database transformations.
- [ ] The artifact does not include implementation pipeline code.
- [ ] Streaming is only chosen when business SLA requires low latency or real-time event ingestion.
- [ ] Incremental keys are not assumed if the source has no reliable timestamp or ID.
- [ ] Security secret handling does not expose raw passwords or credentials.

## HALT Validation

- [ ] Missing upstream architecture context HALT resolved or artifact remains Draft.
- [ ] Source access status HALT resolved or artifact remains Draft.
- [ ] Ingestion pattern HALT resolved or artifact remains Draft.
- [ ] Batch/streaming/event choice HALT resolved or artifact remains Draft.
- [ ] Frequency/trigger HALT resolved or artifact remains Draft.
- [ ] Incremental/checkpoint strategy HALT resolved or artifact remains Draft.
- [ ] Idempotency strategy HALT resolved or artifact remains Draft.
- [ ] Replay/backfill strategy HALT resolved or artifact remains Draft.
- [ ] Schema drift policy HALT resolved or artifact remains Draft/Risk.
- [ ] Sensitive data handling HALT resolved or artifact remains Draft/Risk.
- [ ] Error handling/recovery HALT resolved or artifact remains Draft/Risk.
- [ ] API or source limit HALT resolved or artifact remains Draft/Risk.
- [ ] Ingestion design checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
