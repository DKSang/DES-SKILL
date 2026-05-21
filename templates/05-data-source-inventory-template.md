# 05 — Data Source Inventory and Assessment

## Metadata

| Field | Value |
| --- | --- |
| Project | |
| Domain | |
| Skill | des-data-source-assessment |
| Phase | 05 — Data Source Assessment |
| Status | Draft |
| Owner | |
| Last Updated | |
| Upstream Artifact | 04-data-product-specification.md |
| Next Skill | des-domain-modeling |

## 1. Source Inventory Summary

```text
<short summary of candidate sources, readiness, risks, and blockers>
```

## 2. Source-to-Product Mapping

| Product Output | Required Data Concept | Candidate Source | Feasibility | Notes |
| --- | --- | --- | --- | --- |
| OUT-001 | | | Ready / Viable with risks / Blocked / Unknown / Deferred | |

## 3. Source-to-Requirement and KPI Mapping

| Source | Requirements Supported | KPIs / Metrics Supported | Business Questions Supported |
| --- | --- | --- | --- |
| | FR-001, NFR-001 | KPI-001 | BQ-001 |

## 4. Source System Inventory

| Source ID | Source Name | Description | Status |
| --- | --- | --- | --- |
| SRC-001 | | | Candidate / Approved / Risk / Blocked / Deferred |

## 5. Source Type and Generation Pattern

| Source ID | Source Type | Generation Pattern | Notes |
| --- | --- | --- | --- |
| SRC-001 | Application DB / API / File / Stream / SaaS / Third-party / Manual / Warehouse / Other | CRUD / Insert-only / Snapshot / CDC / Stream / Batch file / API pull / Webhook / Manual / Unknown | |

## 6. Ownership and Contacts

| Source ID | Owner / Team | Contact Path | Support Expectation | Status |
| --- | --- | --- | --- | --- |
| SRC-001 | | | | Known / Unknown / Risk |

## 7. Access Method and Permissions

| Source ID | Access Method | Permission Status | Credential Handling | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | API / DB connection / File share / Data sharing / Connector / Manual / Other | Approved / Pending / Denied / Unknown | Secret manager / SSO / Key / Token / Unknown | |

## 8. Source of Truth Decisions

| Business Concept | Candidate Sources | Decision | Status | Owner |
| --- | --- | --- | --- | --- |
| | | Authoritative source / Conformed merge / Priority order / Separate definitions / Deferred | Approved / Draft / Open | |

## 9. Data Format and Schema

| Source ID | Format | Schema Available? | Schema Owner | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | CSV / JSON / Parquet / Avro / DB tables / XML / Excel / Events / Other | Yes / No / Partial / Unknown | | |

## 10. Update Frequency and Freshness

| Source ID | Update Pattern | Expected Freshness | Upstream SLA/SLO | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | Real-time / Hourly / Daily / Weekly / Monthly / Ad hoc / Unknown | | Formal / Informal / Best effort / Unknown | |

## 11. Volume and Growth

| Source ID | Current Volume | Growth Expectation | Throughput Concern | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | | | Yes / No / Unknown | |

## 12. History and Retention

| Source ID | Historical Data Available? | Retention Period | Backfill Possible? | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | Yes / No / Partial / Unknown | | Yes / No / Unknown | |

## 13. Quality Profile

| Source ID | Known Quality Issues | Profiling Needed? | Severity | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | | Yes / No | P1 / P2 / P3 / Unknown | |

## 14. Reliability and Availability

| Source ID | Reliability Expectation | Known Failure Modes | Incident Contact | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | Formal SLA / Informal / Best effort / Unknown | | | |

## 15. Schema Change and Evolution

| Source ID | Change Process | Notification Method | Drift Risk | Notes |
| --- | --- | --- | --- | --- |
| SRC-001 | Versioned / Schema registry / Owner notification / No process / Unknown | | Low / Medium / High / Unknown | |

## 16. Security and Privacy Classification

| Source ID | Classification | Sensitive Fields | Access Restrictions | Status |
| --- | --- | --- | --- | --- |
| SRC-001 | Public / Internal / Confidential / PII / Regulated / Secret-bearing / Unknown | | | Draft / Approved / Needs Review |

## 17. Compliance and Regulatory Concerns

| Source ID | Concern | Impact | Required Review |
| --- | --- | --- | --- |
| SRC-001 | | | Legal / Security / Privacy / Compliance / None / Unknown |

## 18. Cost, Licensing, and Usage Limits

| Source ID | Cost / License / Limit | Impact | Mitigation |
| --- | --- | --- | --- |
| SRC-001 | | | |

## 19. Operational Dependencies

| Source ID | Dependency | Impact on Data Product | Notes |
| --- | --- | --- | --- |
| SRC-001 | Upstream deployment / API uptime / File delivery / Vendor availability / Manual process / Other | | |

## 20. Contract and SLA Expectations

This section captures expectations only. Full contracts are created later.

| Source ID | Contract Needed? | SLA/SLO Needed? | Reason | Status |
| --- | --- | --- | --- | --- |
| SRC-001 | Yes / No / Later | Yes / No / Later | | Draft / Approved / Open |

## 21. Ingestion Feasibility

| Source ID | Feasibility Rating | Reason | Required Follow-Up |
| --- | --- | --- | --- |
| SRC-001 | Ready / Viable with risks / Blocked / Unknown / Deferred | | |

## 22. Risks

| Risk | Source | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| | | | | |

## 23. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| --- | --- | --- |
| | | |

## 24. Open Questions

| Open Question | Why It Matters | Owner | Needed By |
| --- | --- | --- | --- |
| | | | Phase 6 / Phase 7 / Phase 8 / Later |

## 25. Next Skill Recommendation

Recommended next skill:

```text
des-domain-modeling
```

Reason:

```text
<why domain modeling is the next safe step>
```
