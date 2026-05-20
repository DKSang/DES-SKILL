# Business Readiness Checklist

This checklist is used during Phase 01 (Business Discovery) and Phase 03 (Requirements & KPIs) to validate that business requirements are mature enough to begin technical design work.

---

## 1. Problem Definition Quality
- [ ] **Problem stated without tool names**: The business objective describes a human decision or workflow pain point — not a technology request.
- [ ] **Cost of inaction quantified**: The impact of NOT solving this problem is documented (e.g., wasted hours, missed revenue, compliance risk).
- [ ] **Downstream actions mapped**: Each data product is linked to a specific decision or action a consumer will take based on the data.

## 2. Stakeholder Alignment
- [ ] **Primary business sponsor identified**: An executive or product owner has signed off on the problem statement.
- [ ] **All data consumers identified**: Every team or system that will consume the output is listed with their use case.
- [ ] **KPI definitions agreed**: All business metrics are defined with a single, certified formula approved by the relevant business owner.
- [ ] **Metric ambiguities resolved**: Conflicting definitions (e.g., "Revenue" vs. "GMV" vs. "Bookings") are resolved and documented in the KPI catalog.

## 3. Scope Clarity
- [ ] **In-scope items listed**: Clear list of features and data products in Phase 1.
- [ ] **Out-of-scope items explicitly stated**: Items deliberately excluded are documented to prevent scope creep.
- [ ] **Phase 2+ deferred items noted**: Identified future work is captured as a backlog — not added to current sprint.

## 4. Non-Functional Requirements
- [ ] **Freshness SLA defined**: Required data availability time is specified (e.g., "by 7AM daily").
- [ ] **Retention period defined**: How long data must be retained is specified, accounting for regulatory requirements (GDPR, PCI-DSS).
- [ ] **Security classification stated**: Data sensitivity level (Public/Internal/Confidential/PII/Regulated) is agreed.
- [ ] **Budget constraints documented**: Maximum infrastructure spend is approved.

## 5. Open Questions Resolved
- [ ] **No critical open questions remaining**: All business questions that block architecture design are answered.
- [ ] **Next actions assigned**: Remaining minor questions have an owner and a due date.
