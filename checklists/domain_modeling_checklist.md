# Domain Modeling Checklist

This checklist is used during Phase 06 (Domain Modeling) to verify that the business domain is correctly bounded, entities are clearly defined, and analytical grain decisions are locked before beginning Silver/Gold layer design.

---

## 1. Domain Boundary Definition
- [ ] **Bounded context defined**: The domain scope is explicitly bounded — what it INCLUDES and EXCLUDES is documented.
- [ ] **Source-to-domain mapping clear**: Every source table/API is mapped to a domain concept (entity or event) — not treated as a raw DB table.
- [ ] **Inter-domain dependencies identified**: Any cross-domain joins or lookups (e.g., Sales domain consuming Customer domain entity) are documented.

## 2. Entity & Relationship Modeling
- [ ] **Core entities named in business language**: Entity names match how the business describes them (e.g., "Order" not "tbl_ord_master").
- [ ] **Synonyms eliminated**: Conflicting names across teams (e.g., "User" vs. "Account" vs. "Customer") are resolved to a single canonical term.
- [ ] **Cardinality documented**: Every entity relationship has a defined cardinality (one-to-one, one-to-many, many-to-many).
- [ ] **Many-to-many bridge entities defined**: Junction/bridge tables are explicitly designed for M:M relationships (e.g., `order_lines` bridges `Orders` and `Products`).

## 3. Analytical Grain Decisions
- [ ] **Grain explicitly stated**: The lowest level of detail required in each analytical dataset is documented (e.g., "one row per order_id").
- [ ] **Grain agreed by business consumer**: The grain decision is confirmed by the primary business stakeholder or BI analyst.
- [ ] **Modeling pattern selected**: Kimball Dimensional / Inmon Normalized / One Big Table (OBT) — with rationale documented.
- [ ] **SCD type decided**: For each slowly changing dimension, SCD1 (overwrite) or SCD2 (track history) is determined.

## 4. Business Glossary
- [ ] **All key terms defined**: A business glossary entry exists for every core concept and metric used in the domain.
- [ ] **Conflicting definitions resolved**: All ambiguous terms (e.g., "Revenue", "Active User", "Churn") have a single agreed definition signed off by business owner.

## 5. Readiness Gate
- [ ] **No unanswered grain questions**: The grain of every target analytical table is finalized before Silver layer design begins.
- [ ] **No naming conflicts remaining**: All synonym conflicts are resolved and documented in the glossary.
