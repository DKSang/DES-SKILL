# 19 — Governance and Security Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-governance-security-design |
| Phase | 19 — Governance and Security Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 18-lineage-metadata-specification.md |
| Next Skill | des-cost-and-performance-optimization |

## 1. Governance and Security Summary

```text
<short summary of governance scope, sensitive assets, access model, and major risks>
```

## 2. Governance Scope

In scope:

*
*
*

Out of scope:

* IAM implementation
* infrastructure security configuration
* encryption key deployment
* governance platform implementation
* CI/CD workflow implementation

## 3. Governance Design Principles

| Principle                    | Decision / Notes |
| ---------------------------- | ---------------- |
| Least privilege              |                  |
| Purpose limitation           |                  |
| Data minimization            |                  |
| Defense in depth             |                  |
| Privacy by design            |                  |
| Govern raw data strictly     |                  |
| Certify before broad serving |                  |
| Review exceptions            |                  |
| Monitor access               |                  |

## 4. Data Classification Policy

| Classification        | Meaning                                          | Default Handling                          |
| --------------------- | ------------------------------------------------ | ----------------------------------------- |
| Public                | safe for open sharing                            | open or broad access                      |
| Internal              | internal use, low sensitivity                    | internal access                           |
| Confidential          | business-sensitive                               | restricted role-based access              |
| PII                   | personal identifiable information                | restricted, masked/tokenized where needed |
| Sensitive / Regulated | legal, financial, health, contractual, regulated | governance/security review                |
| Secret-bearing        | credentials, tokens, keys                        | block/quarantine/remove                   |
| Unknown               | classification not reviewed                      | restrict or block broad access            |

## 5. Asset Sensitivity Inventory

| Asset | Layer / Area                                                                | Classification                                                                          | Status                            |
| ----- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------- |
|       | Source / Bronze / Silver / Gold / Semantic / Serving / API / Export / Agent | Public / Internal / Confidential / PII / Sensitive-Regulated / Secret-bearing / Unknown | Draft / Approved / Risk / Blocked |

## 6. Field Level Sensitivity Handling

| Dataset / Output | Field | Classification | Handling                                                                        |
| ---------------- | ----- | -------------- | ------------------------------------------------------------------------------- |
|                  |       |                | retain restricted / mask / tokenize / hash / drop / split / quarantine / review |

## 7. Access Control Model

| Control Type          | Applies To                            | Decision |
| --------------------- | ------------------------------------- | -------- |
| RBAC                  | datasets / semantic / serving / API   |          |
| ABAC                  | attributes / purpose / classification |          |
| RLS                   | rows by region/customer/tenant        |          |
| CLS                   | sensitive columns                     |          |
| Object-level security | dataset/model/output                  |          |
| Purpose-based access  | limited by business use               |          |
| Manual approval       | sensitive/external access             |          |

## 8. Role and Persona Access Matrix

| Persona / Role       | Allowed Assets | Denied / Restricted Assets | Approver | Review Cadence |
| -------------------- | -------------- | -------------------------- | -------- | -------------- |
| Business analyst     |                |                            |          |                |
| Data analyst         |                |                            |          |                |
| Data engineer        |                |                            |          |                |
| Executive            |                |                            |          |                |
| Application identity |                |                            |          |                |
| AI/data agent        |                |                            |          |                |
| External partner     |                |                            |          |                |

## 9. Row Level Security Policy

| Asset | RLS Needed?    | Rule                                                | Notes |
| ----- | -------------- | --------------------------------------------------- | ----- |
|       | Yes / No / TBD | region / business unit / customer / tenant / custom |       |

## 10. Column Level Security Policy

| Asset | CLS Needed?    | Protected Columns | Rule |
| ----- | -------------- | ----------------- | ---- |
|       | Yes / No / TBD |                   |      |

## 11. Masking Tokenization and Anonymization Policy

| Field / Asset | Protection Method                                                                                                      | Applies In                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|               | static masking / dynamic masking / tokenization / pseudonymization / hashing / aggregation-only / anonymization / none | Silver / Gold / Semantic / Serving / Export / API |

## 12. Encryption and Secret Handling Expectations

| Area                    | Expectation                          |
| ----------------------- | ------------------------------------ |
| Data at rest            |                                      |
| Data in transit         |                                      |
| Secrets and credentials |                                      |
| Secret-bearing payloads | block / quarantine / remove / review |
| Key ownership           |                                      |

## 13. Privacy and Consent Considerations

| Data / Field | Privacy Concern                                                                               | Handling |
| ------------ | --------------------------------------------------------------------------------------------- | -------- |
|              | consent / minimization / deletion request / purpose limitation / anonymization / PII exposure |          |

## 14. Retention Lifecycle and Deletion Policy

| Asset / Layer      | Retention Rule | Deletion / Anonymization Rule |
| ------------------ | -------------- | ----------------------------- |
| Bronze raw         |                |                               |
| Silver             |                |                               |
| Gold               |                |                               |
| Semantic / Serving |                |                               |
| Logs / Audit       |                |                               |

## 15. Data Sharing and External Access Policy

| Sharing Scenario       | Policy | Approval                  |
| ---------------------- | ------ | ------------------------- |
| external partner       |        | governance/security/legal |
| customer-facing output |        |                           |
| public/open dataset    |        |                           |
| data export            |        |                           |

## 16. API Application and AI Agent Access Policy

| Access Type      | Policy                                                                 | Guardrails |
| ---------------- | ---------------------------------------------------------------------- | ---------- |
| API/application  | least privilege / contract / rate limit / audit                        |            |
| AI/data agent    | certified semantic only / no sensitive fields / audit / human approval |            |
| service identity | restricted scopes                                                      |            |

## 17. Reverse ETL Governance

| Destination | Writeback Scope | Guardrails                                                                   |
| ----------- | --------------- | ---------------------------------------------------------------------------- |
|             |                 | dry run / approval / monitoring / rollback / disable switch / owner approval |

## 18. Audit Logging and Access Monitoring

| Audit Event            | Required? | Notes |
| ---------------------- | --------- | ----- |
| access granted         | Yes / No  |       |
| access revoked         | Yes / No  |       |
| sensitive field access | Yes / No  |       |
| export/download        | Yes / No  |       |
| API/agent call         | Yes / No  |       |
| failed access attempt  | Yes / No  |       |
| permission change      | Yes / No  |       |
| external share         | Yes / No  |       |
| policy exception       | Yes / No  |       |

## 19. Approval Workflow and Exception Handling

| Scenario               | Approval Required | Exception Rule          |
| ---------------------- | ----------------- | ----------------------- |
| raw data access        |                   |                         |
| sensitive field access |                   |                         |
| external sharing       |                   |                         |
| AI/agent access        |                   |                         |
| reverse ETL writeback  |                   |                         |
| emergency access       |                   | time-bound, post-review |

## 20. Ownership Stewardship and Accountability

| Area                | Owner / Steward | Responsibility |
| ------------------- | --------------- | -------------- |
| data product owner  |                 |                |
| business steward    |                 |                |
| technical owner     |                 |                |
| security approver   |                 |                |
| governance approver |                 |                |
| incident owner      |                 |                |

## 21. Compliance and Regulatory Considerations

| Requirement                      | Applies?       | Notes |
| -------------------------------- | -------------- | ----- |
| privacy regulation               | Yes / No / TBD |       |
| data residency/sovereignty       | Yes / No / TBD |       |
| financial/health/regulated data  | Yes / No / TBD |       |
| contractual/customer obligations | Yes / No / TBD |       |
| internal audit                   | Yes / No / TBD |       |

## 22. Incident Response and Escalation

| Incident Type               | Trigger | Escalation / Response |
| --------------------------- | ------- | --------------------- |
| unauthorized access         |         |                       |
| sensitive data exposure     |         |                       |
| contract/security violation |         |                       |
| audit failure               |         |                       |
| policy exception misuse     |         |                       |
| reverse ETL writeback issue |         |                       |

## 23. Risks

| Risk | Asset / Policy | Impact | Mitigation | Owner |
| ---- | -------------- | ------ | ---------- | ----- |
|      |                |        |            |       |

## 24. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 25. Open Questions

| Open Question | Why It Matters | Owner | Needed By                     |
| ------------- | -------------- | ----- | ----------------------------- |
|               |                |       | Phase 20 / Phase 21 / Release |

## 26. Next Skill Recommendation

Recommended next skill:

```text
des-cost-and-performance-optimization
```

Reason:

```text
<why cost and performance optimization is the next safe step>
```
