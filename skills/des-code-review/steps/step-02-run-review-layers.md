# Step 02 - Run Review Layers

Review through separate named layers. For high-risk work, use subagent review when available: split Artifact Compliance Reviewer and Blind Bug Hunter into separate subagents. If subagents are unavailable, run every layer sequentially.

- Artifact Compliance Reviewer: implementation matches planning artifacts, architecture, contracts, DQ rules, transformations, lineage, and governance.
- Blind Bug Hunter: look for incorrect logic, boundary errors, broken assumptions, and regressions without trusting the plan.
- Edge-Case and Data Failure Reviewer: check empty data, late data, schema drift, retries, backfills, duplicate events, partial failures, and source deletes.
- Governance/Security Reviewer: check PII, RBAC/RLS, masking/tokenization, auditability, retention, lineage, and catalog impact.
- Test/Evidence Auditor: acceptance criteria have fresh evidence, missing tests are named, skipped checks are justified, and Definition of Done evidence is credible.

Record candidate findings with severity and supporting evidence. Findings first: blockers and high-severity issues must lead the final report.
