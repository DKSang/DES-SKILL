# Project Evaluation

This template is used during Phase 22 (Project Evaluation) to assess the overall readiness of a data engineering project for production release — evaluating business fit, technical completeness, operational readiness, and governance compliance.

---

## 1. Evaluation Scope

*   **Project Name**: (e.g., `Sales Analytics Platform v1.0`)
*   **Evaluation Date**: YYYY-MM-DD
*   **Evaluation Lead**: (Data Engineering Lead or Architect)
*   **Target Release Date**: YYYY-MM-DD
*   **Business Sponsor**: (Executive or product owner responsible for sign-off)

---

## 2. Production Readiness Checklist

Assess each lifecycle area against the data engineering lifecycle standards:

| Area | Readiness Criteria | Status (✅ / ⚠️ / ❌) | Evidence | Risk if Incomplete |
| :--- | :--- | :--- | :--- | :--- |
| **Business Fit** | Business objective is clearly defined; downstream actions are mapped; stakeholder sign-off obtained | — | Link to business discovery doc | Wasted engineering effort if requirements shift |
| **Source Readiness** | Source SLAs signed; schema contracts active; access provisioned; CDC/log retention confirmed | — | Link to source assessment doc | Pipeline breaks on first schema change |
| **Architecture** | All ADRs logged; reversibility classified; compute-storage separation verified | — | Link to architecture design doc | Lock-in to wrong platform; expensive migration |
| **Data Quality** | DQ rules cover 6 dimensions; thresholds set; FAIL/QUARANTINE/WARN protocols active | — | Link to DQ rule catalog | Bad data silently poisons downstream reports |
| **Orchestration** | DAG parameterized; retries with backoff configured; SLA monitors active; runbook documented | — | Link to orchestration design doc | Silent failures; SLA breach without alert |
| **Serving** | Serving SLAs met in staging; RLS tested; caching configured | — | Staging test evidence | Consumer-facing outage on go-live |
| **Lineage & Metadata** | Column-level lineage complete; catalog registered; steward assigned | — | Link to lineage doc | Cannot trace data issues to root cause |
| **Governance & Security** | PII masking active; RBAC/RLS deployed; audit logs enabled; retention rules set | — | Link to governance doc | Regulatory compliance failure |
| **CI/CD & Testing** | All test stages passing in CI; staging validated; rollback procedure tested | — | CI/CD pipeline run link | Cannot safely roll back a bad deployment |
| **FinOps** | Storage lifecycle rules set; compute idle-suspend configured; cost baseline established | — | Link to cost review doc | Uncontrolled cloud spend post-launch |

---

## 3. Six Undercurrents Compliance Review

| Undercurrent | Implementation Status | Owner | Gap / Risk |
| :--- | :--- | :--- | :--- |
| Security | — | — | — |
| Data Management | — | — | — |
| DataOps | — | — | — |
| Data Architecture | — | — | — |
| Orchestration | — | — | — |
| Software Engineering | — | — | — |

---

## 4. Go / No-Go Decision

| Decision | Rationale | Approver | Date |
| :--- | :--- | :--- | :--- |
| GO | All critical criteria met; risks accepted and mitigated | — | — |
| CONDITIONAL GO | Minor gaps exist; mitigation plan agreed before next sprint | — | — |
| NO-GO | Critical gaps identified; project deferred until resolved | — | — |

*   **Conditions for GO** *(if CONDITIONAL GO)*: (List specific items that must be resolved, with owners and deadlines)

---

## 5. Risk Register

| Risk ID | Risk Description | Probability (H/M/L) | Impact (H/M/L) | Mitigation Plan | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |
| R-001 | Source team modifies schema without notice | Medium | High | Schema contract signed; Slack alert on schema drift | data-lead |
| R-002 | Gold layer query latency exceeds SLA under load | Low | High | Load test with 2x expected concurrency before go-live | data-platform-team |
| | | | | | |

---

## 6. Remediation Backlog

Items identified during evaluation that do not block go-live but must be resolved within 1 sprint post-launch:

| Item | Priority | Owner | Target Date |
| :--- | :--- | :--- | :--- |
| | High / Medium / Low | | |

---

## 7. Lessons Learned

Document key insights for future projects:

*   **What worked well**: (e.g., "Setting up CDC from day 1 prevented the need for full snapshot loads later.")
*   **What to improve**: (e.g., "Source team SLA agreement was informal — needs a written contract next time.")
*   **Anti-patterns encountered**: (e.g., "Started with Kafka before batch requirements were confirmed — over-engineered the ingestion layer.")
