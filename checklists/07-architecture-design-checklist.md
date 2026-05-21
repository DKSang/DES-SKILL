# Checklist — Architecture Design

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] P1 product outputs are identified.
- [ ] P1 requirements are considered.
- [ ] P1 source patterns and risks are considered.
- [ ] Core domain concepts and grains are considered.

## Architecture Quality

- [ ] Architecture scope is defined.
- [ ] Architecture goals are defined.
- [ ] Architecture principles are defined.
- [ ] Target architecture overview is documented.
- [ ] Architecture aligns with data engineering lifecycle stages.
- [ ] Architecture considers security, data management, DataOps, orchestration, and software engineering.
- [ ] Environment strategy is documented.
- [ ] Storage strategy is documented.
- [ ] Compute strategy is documented.
- [ ] Batch/streaming/event strategy is documented.
- [ ] Layer strategy is documented.
- [ ] Serving strategy is documented.
- [ ] Orchestration boundary is documented.
- [ ] Observability direction is documented.
- [ ] Governance and metadata direction is documented.
- [ ] DataOps/software engineering direction is documented.

## Decision Quality

- [ ] Major architecture decisions are recorded in ADR format.
- [ ] Options considered are documented.
- [ ] Chosen options have rationale.
- [ ] Rejected or deferred options are documented where relevant.
- [ ] Trade-offs are documented.
- [ ] Reversibility is classified for major decisions.
- [ ] Hard-to-reverse decisions are explicitly approved or deferred.
- [ ] Architecture decisions trace to business/product/requirement/source/domain context.

## Risk and Constraint Coverage

- [ ] Security/privacy posture is documented.
- [ ] Cost/FinOps constraint is documented or marked unknown.
- : [ ] Team capability and operational burden are considered.
- [ ] Build-versus-buy direction is considered.
- [ ] Technology constraints are separated from architecture decisions.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact is not only a list of tools.
- [ ] The artifact does not design detailed ingestion pipeline steps.
- [ ] The artifact does not design physical table schemas.
- [ ] The artifact does not design Bronze/Silver/Gold table specs.
- [ ] The artifact does not create full data contracts.
- [ ] The artifact does not design dashboard/API/semantic model internals.
- [ ] The artifact does not include implementation code.
- [ ] The architecture does not over-engineer streaming or distributed compute without requirement evidence.
- [ ] Architecture conflicts with upstream artifacts are documented, not hidden.

## HALT Validation

- [ ] Missing upstream architecture context HALT resolved or artifact remains Draft.
- [ ] Architecture scope HALT resolved or artifact remains Draft.
- [ ] Target platform HALT resolved or artifact remains Draft.
- [ ] Environment strategy HALT resolved or artifact remains Draft.
- [ ] Storage strategy HALT resolved or artifact remains Draft.
- [ ] Compute strategy HALT resolved or artifact remains Draft.
- [ ] Batch/streaming/event strategy HALT resolved or artifact remains Draft.
- [ ] Serving direction HALT resolved or artifact remains Draft.
- [ ] Security/privacy posture HALT resolved or artifact remains Draft.
- [ ] Cost constraint HALT resolved or artifact remains Draft/Risk.
- [ ] Team capability HALT resolved or artifact remains Draft/Risk.
- [ ] Hard-to-reverse decision HALT resolved or decision remains Deferred.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
