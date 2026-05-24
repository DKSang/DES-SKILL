# Step 02 — Domain Concepts, Ontology-Lite, and Relationships

## Goal

Define the conceptual domain model: glossary, ontology-lite concept map, entities, events, value objects, relationships, grains, identity rules, source alignment, source caveats, domain rules, lifecycle states, and temporal concepts.

This step prepares the Conceptual Domain Model and identifies which domain decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- Requirements and KPI Catalog
- Data Product Specification
- Data Source Inventory
- Phase 05 to Phase 06 handoff, if available
- Phase 05 do-not-assume list
- User answers from HALT points
- Existing glossary, ontology, ERD, data dictionary, source schema, or business definitions if available

---

## Actions

1. Draft the domain scope.
2. Build a business glossary of core terms.
3. Build an ontology-lite concept map:
   - concept/class candidates;
   - relationship candidates;
   - controlled vocabulary candidates;
   - synonym candidates;
   - concept boundaries.
4. Identify core entities.
5. Identify domain events.
6. Identify value objects and important attributes at conceptual level.
7. Define relationships between concepts.
8. Define conceptual grains.
9. Define identity and identifier rules.
10. Map domain concepts to candidate sources.
11. Map domain concepts to source-of-truth decisions.
12. Carry Phase 05 source caveats into the model.
13. Identify terminology conflicts, synonyms, and ambiguous concepts.
14. Define domain rules.
15. Define lifecycle/state concepts.
16. Define temporal concepts.
17. Map domain concepts to downstream use cases, requirements, KPIs, and product outputs.
18. Map each critical domain decision to evidence.
19. Mark unsupported domain claims as `Ambiguous`, `Open`, `Risk`, `Deferred`, `Unknown`, or `Waived with reason`.
20. Identify required Phase 06 support work.
21. Use HALT checkpoints for decisions the agent cannot safely infer.
22. Prepare draft content for the Conceptual Domain Model.
23. Prepare content for the Phase 06 Support Plan.

---

## Hints

- Core entities are stable business concepts, not necessarily database tables.
- Domain events are things that happen and usually have time.
- Value objects describe properties or measurements that may not need independent identity.
- Relationships should be business relationships, not foreign keys.
- Conceptual grain should answer “one instance of this concept represents what?”
- Identity rules should answer “how do we know this is the same real-world thing?”
- Source alignment should record where evidence comes from, not lock implementation.
- Source caveats should remain visible for architecture, ingestion, Silver/Gold, semantic, quality, and governance phases.
- Do not decide physical key strategy here.
- Do not design physical schemas or database tables here.
- Do not design star schema, Data Vault, normalized model, or wide table here.
- Keep unresolved ambiguity visible instead of forcing a model.
- Ontology-lite means glossary/classes/relationships/controlled vocabularies, not mandatory RDF/OWL implementation.

---

## Concept Types

Classify each concept as one or more:

| Concept Type | Description |
| --- | --- |
| Entity | A business object with identity |
| Event | Something that happens at a point or interval in time |
| Value object | A descriptive or measured object without independent identity |
| Metric concept | A business measurement needing later KPI/semantic definition |
| Reference concept | Controlled list, category, status, code, hierarchy, mapping |
| Actor | Person, organization, system, customer, team, or role |
| Location concept | Place, region, facility, address, coordinate, zone |
| Temporal concept | Date, period, event time, processing time, validity interval |
| Relationship | Business association between concepts |
| State / lifecycle | Status or stage that changes over time |

---

## Ontology-Lite Modeling Standard

Each ontology-lite concept should have:

| Field | Required? |
| --- | --- |
| Concept name | Required |
| Concept type | Required |
| Business definition | Required |
| Synonyms / aliases | Recommended |
| Related concepts | Recommended |
| Controlled vocabulary values | Required when statuses/categories/codes matter |
| Source alignment | Required for P1 |
| Source caveats | Required when Phase 05 risk exists |
| Owner/steward | Recommended |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Ambiguous | Deferred
```

---

## Core Entity Definition Standard

Each core entity must have:

| Field                       | Required?                          |
| --------------------------- | ---------------------------------- |
| Name                        | Required                           |
| Business definition         | Required                           |
| Conceptual grain            | Required                           |
| Identity rule               | Required for P1                    |
| Source alignment            | Required for P1                    |
| Source-of-truth status      | Required for P1                    |
| Downstream use case mapping | Required for P1                    |
| Source caveats              | Required when Phase 05 risk exists |
| Owner/steward               | Recommended                        |
| Status                      | Required                           |

Allowed statuses:

```text
Draft | Approved | Ambiguous | Deferred
```

---

## Domain Evidence Mapping

For every P1 concept, capture the evidence status.

| Domain Field        | Evidence Status                        | Allowed Output               |
| ------------------- | -------------------------------------- | ---------------------------- |
| Business definition | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |
| Source alignment    | Confirmed / Partial / Missing / Waived | Approved / Risk / Open       |
| Source caveat       | Confirmed / None / Missing / Waived    | Carry forward / None / Risk  |
| Identity rule       | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |
| Conceptual grain    | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |
| Relationship        | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |
| Source of truth     | Approved / Draft / Conflict / Missing  | Approved / Risk / Open       |
| Temporal meaning    | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |
| Lifecycle/state     | Confirmed / Assumed / Missing / Waived | Approved / Draft / Ambiguous |

---

## Phase 06 Required Support Work

Based on the domain model above, prepare a support plan using these categories:

| Support Work                    | Required When                             | Output           |
| ------------------------------- | ----------------------------------------- | ---------------- |
| Phase 05 Handoff Review         | Always                                    | Evidence pack    |
| Business Glossary Check         | Always                                    | Evidence pack    |
| Source-to-Concept Mapping Check | Always                                    | Evidence pack    |
| Ontology-Lite Boundary Check    | Ontology-lite concept map exists          | Evidence pack    |
| Core Entity Identity Check      | P1 entities exist                         | Evidence pack    |
| Conceptual Grain Check          | P1 entities/events/metrics exist          | Evidence pack    |
| Relationship Cardinality Check  | Important relationships exist             | Evidence pack    |
| Source-of-Truth Mapping Check   | P1 concepts map to sources                | Evidence pack    |
| Terminology Conflict Check      | Ambiguous terms/synonyms exist            | Evidence pack    |
| Temporal Concept Check          | Events, snapshots, or time concepts exist | Evidence pack    |
| Lifecycle State Check           | Status/state concepts exist               | Evidence pack    |
| Source Caveat Propagation Check | Phase 05 source risks exist               | Evidence pack    |
| Done Gate                       | Always before marking Done                | Done Gate result |
| Handoff to Phase 07             | Always before Phase 07                    | Handoff file     |

---

## Decision Area 1 - Business Glossary and Terminology

Approve the business definition and clarify any terms that might have multiple meanings.

### HALT — Business Term Ambiguity

Stop if a business term has multiple possible meanings.

#### Why this matters

Ambiguous terms create inconsistent metrics, schemas, contracts, dashboards, and consumer trust issues.

#### Trigger examples

* “Customer” may mean account, user, payer, organization, or contact.
* “Order” may mean cart checkout, paid order, shipped order, or completed order.
* “Revenue” may mean gross, net, recognized, collected, or invoiced.
* “Active” may mean logged in, purchased, subscribed, or not churned.
* “Location” may mean address, region, coordinate, branch, site, or market.
* “Region” may mean administrative region, sales territory, province, district, climate zone, or service area.

#### Decision needed

Approve the meaning of `<term>` for this project.

#### Options

A. Choose one canonical definition
B. Keep multiple named definitions
C. Split into separate concepts
D. Defer term from first release
E. Escalate to owner/steward

#### Required response

Choose A/B/C/D/E and provide the definition if known.

---

## Decision Area 2 - Ontology Boundary

Stop if the ontology-lite boundary is unclear.

### HALT — Ontology Boundary

#### Why this matters

If the ontology is too broad, it becomes academic and hard to implement.
If it is too narrow, downstream semantic and Gold design may miss key concepts.

#### Decision needed

What should the ontology-lite layer include?

#### Options

A. Glossary only
B. Glossary + core entities + relationships
C. Glossary + entities + events + relationships + controlled vocabularies
D. Product-bounded ontology-lite for first release only
E. Defer ontology-lite and keep conceptual model only

#### Recommendation

Choose C for balanced DES usage.
Choose D for MVP delivery.

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 3 - Core Entity Identity Rules

Establish the rules for identifying unique instances of core entities across source systems.

### HALT — Core Entity Identity Required

Stop if identity for a P1 entity is unclear.

#### Why this matters

Identity affects deduplication, source conformance, Silver design, Gold grain, contracts, lineage, and quality tests.

#### Decision needed

How should identity be understood for `<entity>`?

#### Options

A. Source natural identifier is sufficient
B. Multiple source identifiers need crosswalk/mapping
C. Business identifier differs from source identifier
D. Entity is source-specific and should not be conformed yet
E. Identity unknown — keep entity as Ambiguous

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 4 - Conceptual Grain Definition

Formally define the grain of entities and metrics to prevent downstream fan-out issues.

### HALT — Conceptual Grain Approval

Stop if grain for a P1 concept is unclear.

#### Why this matters

Grain controls what one instance represents and prevents incorrect aggregation or duplicate logic later.

#### Decision needed

Approve the conceptual grain for `<concept>`.

#### Options

A. One instance per business object
B. One instance per business object per time period
C. One instance per event occurrence
D. One instance per relationship between entities
E. One instance per measurement/observation
F. Custom grain

#### Required response

Choose A/B/C/D/E/F and describe the grain.

---

## Decision Area 5 - Source of Truth Mapping Strategy

Establish which source system owns or acts as the source of truth for each core business concept.

### HALT — Source of Truth Mapping

Stop if multiple sources define a P1 concept differently.

#### Why this matters

Later source conformance and data contracts depend on the approved source-of-truth strategy.

#### Decision needed

Choose source-of-truth strategy for `<concept>`.

#### Options

A. One authoritative source
B. Conformed merge across sources
C. Priority order by use case
D. Keep separate source-specific concepts
E. Defer concept from first release

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 6 - Concept Association and Cardinality

Identify and define relationships between business concepts, avoiding physical key design.

### HALT — Relationship Ambiguity

Stop if the relationship between two P1 concepts is unclear.

#### Why this matters

Relationship ambiguity affects domain model, joins, aggregations, semantic model, and consumer interpretation.

#### Decision needed

Define relationship between `<concept_a>` and `<concept_b>`.

#### Options

A. One-to-one relationship
B. One-to-many relationship
C. Many-to-many relationship
D. Temporal relationship changes over time
E. Relationship exists but is source-specific
F. Unknown — keep as open question

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 7 - Domain Event Definition

Clarify domain events including subjects, timing, and mutability.

### HALT — Domain Event Definition

Stop if an event concept is unclear.

#### Why this matters

Events often drive ingestion, time-based modeling, facts, metrics, replay, and auditability.

#### Decision needed

Define event `<event_name>`.

#### Required fields

* What happened?
* Who/what did it happen to?
* When did it happen?
* What source records it?
* Is it immutable or can it be corrected?
* Does it have event time and processing time?

#### Options

A. Approve current event definition
B. Revise event definition
C. Split into multiple event concepts
D. Defer event from first release

#### Required response

Choose A/B/C/D.

---

## Decision Area 8 - Temporal Definitions

Establish canonical definitions for key dates, timestamps, and business effective intervals.

### HALT — Temporal Concept Approval

Stop if time meaning is ambiguous.

#### Trigger examples

* Event time vs ingestion time
* Created time vs updated time
* Effective date vs processing date
* Business date vs calendar date
* Valid-from/valid-to interval
* Snapshot date vs observation date

#### Decision needed

Approve the meaning of `<time_field_or_concept>`.

#### Options

A. Event time
B. Processing/ingestion time
C. Business effective date
D. Validity interval
E. Snapshot/as-of date
F. Updated/corrected time
G. Unknown — keep as risk

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 9 - Entity State and Lifecycle States

Identify critical statuses or stages that describe how a business concept evolves.

### HALT — Lifecycle or State Definition

Stop if entity state/status is important but undefined.

#### Why this matters

Lifecycle state affects filtering, metrics, history, slowly changing dimensions, and consumer interpretation.

#### Decision needed

Define states for `<entity_or_process>`.

#### Options

A. Use source-provided states as-is
B. Map source states to canonical states
C. Keep source-specific state definitions
D. Defer state modeling
E. Unknown — keep as open question

#### Required response

Choose A/B/C/D/E.

---

## HALT — Source Concept Conflict

Stop if source schema/sample evidence conflicts with business terminology or requirements.

### Trigger examples

* Source field name suggests one meaning but business glossary uses another.
* Same concept appears under different names across sources.
* Same source field is overloaded for multiple meanings.
* Source uses codes without controlled vocabulary.
* Business-needed concept has no source evidence.

### Options

A. Keep business concept and mark source mapping caveat
B. Rename/split concept based on evidence
C. Keep source-specific concepts
D. Route back to Phase 05 source assessment
E. Escalate to owner/steward

### Required response

Choose A/B/C/D/E.

---

## Completion Criteria

This step is complete when:

* domain scope is drafted;
* glossary terms are drafted;
* ontology-lite concept map is drafted or explicitly waived;
* P1 entities have definitions, grain, identity rule, source alignment, source caveats, and status;
* P1 events have definitions and temporal meaning;
* important relationships are documented;
* source-of-truth mappings are recorded or marked open;
* domain rules and lifecycle states are captured where relevant;
* downstream use-case mapping exists;
* source caveats from Phase 05 are carried forward;
* unresolved ambiguities are explicit;
* draft conceptual model content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
