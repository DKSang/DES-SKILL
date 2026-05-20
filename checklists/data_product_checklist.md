# Data Product Checklist

This checklist is used during Phase 04 (Data Product Definition) to verify that a data product is well-defined, has a formal contract, and is ready for consumer onboarding.

---

## 1. Product Definition Completeness
- [ ] **Business purpose documented**: The data product has a clear, one-sentence description of the business decision it enables.
- [ ] **Grain defined**: The lowest level of detail in the product is explicitly stated (e.g., "one row per order").
- [ ] **All consumers identified**: Every downstream consumer (team, tool, or system) is listed with their use case.
- [ ] **Owner assigned**: A named individual or team is accountable for product accuracy and SLA delivery.

## 2. Data Product Contract
- [ ] **Refresh frequency committed**: Data product has a documented schedule (e.g., daily at 04:00 UTC).
- [ ] **Freshness SLA committed**: Data availability time is committed (e.g., available by 07:00 UTC).
- [ ] **Completeness guarantee set**: Minimum expected record completeness is defined (e.g., ≥ 99.5% of expected daily volume).
- [ ] **Schema versioned**: Schema changes follow semantic versioning (MAJOR.MINOR.PATCH) with consumer notification.

## 3. Security & Access
- [ ] **PII assessment complete**: All PII or sensitive columns are identified and masked before serving.
- [ ] **Access control defined**: RBAC roles are defined; access to raw data restricted; analyst access limited to certified Gold/Semantic layer.
- [ ] **Classification assigned**: Data sensitivity level labeled (Public/Internal/Confidential/PII/Regulated).

## 4. Discoverability & Documentation
- [ ] **Catalog entry created**: Dataset registered in the data catalog with business description, owner, and column definitions.
- [ ] **Consumer onboarding guide available**: A Confluence/Notion page or README documents how to connect, what the data means, and known limitations.
- [ ] **Known limitations documented**: Edge cases, known data gaps, or latency caveats are documented in the product description.

## 5. Success Criteria
- [ ] **Acceptance criteria defined**: Measurable conditions that confirm the data product is working correctly are listed.
- [ ] **Incident response defined**: A notification path exists when the product SLA is breached.
