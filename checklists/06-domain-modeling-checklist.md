# Checklist — Domain Modeling

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] P1 product outputs are identified.
- [ ] P1 business questions and requirements are considered.
- [ ] Candidate sources and source-of-truth decisions are considered.

## Domain Model Quality

- [ ] Domain scope is defined.
- [ ] Business glossary contains core terms.
- [ ] P1 core entities are identified.
- [ ] P1 core entities have business definitions.
- [ ] P1 core entities have conceptual grain.
- [ ] P1 core entities have identity rules or are marked ambiguous.
- [ ] Domain events are identified where relevant.
- [ ] Domain events have time meaning or are marked ambiguous.
- [ ] Important relationships are documented.
- [ ] Conceptual grains are documented.
- [ ] Identifier and identity rules are documented.
- [ ] Domain rules are documented where relevant.
- [ ] Lifecycle/state definitions are documented where relevant.
- [ ] Temporal concepts are documented where relevant.

## Source and Downstream Alignment

- [ ] Core concepts map to candidate sources or are marked source-unconfirmed.
- [ ] Source-of-truth mappings are documented or marked open.
- [ ] Terminology conflicts are documented.
- [ ] Concepts map to downstream business questions, requirements, KPIs, or product outputs.
- [ ] Ownership/stewardship is documented where known.
- [ ] Risks and assumptions are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not copy source schema as the domain model.
- [ ] The artifact does not design physical tables.
- [ ] The artifact does not design Bronze/Silver/Gold schemas.
- [ ] The artifact does not choose star schema, Data Vault, normalized, or wide table patterns.
- [ ] The artifact does not design semantic model internals.
- [ ] The artifact does not design transformations or pipelines.
- [ ] The artifact does not include implementation code.
- [ ] Ambiguous concepts are not silently resolved.

## HALT Validation

- [ ] Missing source context HALT resolved or artifact remains Draft.
- [ ] Domain scope HALT resolved or artifact remains Draft.
- [ ] Business term ambiguity HALT resolved or term remains Ambiguous.
- [ ] Core entity identity HALT resolved or entity remains Ambiguous.
- [ ] Conceptual grain HALT resolved or concept remains Ambiguous.
- [ ] Source-of-truth mapping HALT resolved or mapping remains Open.
- [ ] Relationship ambiguity HALT resolved or relationship remains Open.
- [ ] Domain event definition HALT resolved or event remains Ambiguous.
- [ ] Temporal concept HALT resolved or concept remains Risk/Unknown.
- [ ] Lifecycle/state definition HALT resolved or state remains Ambiguous.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
