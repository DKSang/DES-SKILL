# Architecture Decision Record (ADR)

This template is used during Phase 07 (Architecture Design) to log and communicate major technical design decisions across storage, compute, modeling, and tool selections.

---

## ADR-[ID]: [Title of Decision]

*   **Status**: Draft / Proposed / Approved / Rejected / Superseded
*   **Decider(s)**: [Name of authors/architects]
*   **Date**: YYYY-MM-DD

---

## 1. Decision Class & Reversibility
Evaluate the lock-in risk of this choice:
*   **Classification**: [Reversible (Two-way door) / Irreversible (One-way door)]
*   **Reversibility Justification**: (e.g., "Choosing Snowflake is an irreversible platform decision due to high migration costs. Utilizing Delta Lake on blob storage is reversible as data remains in open formats.")
*   **Rollback / Exit Strategy**: (e.g., If this choice fails, how do we migrate away? Expected migration effort in developer-months)

---

## 2. Context & Requirements
Define the problem statement and operational boundaries:
*   **Business Objective**: (e.g., Reduce dashboards latency to under 3 seconds)
*   **Data Domains & Volume**: (e.g., Customer interactions, 50 million events/day)
*   **Freshness / Latency Target**: (e.g., Hourly updates, near-real-time ingestion)
*   **Team Constraints**: (e.g., Team has strong SQL and python skills, but no Scala/JVM experience)

---

## 3. Storage & Compute Trade-off Factors
Analyze the hardware/software engineering constraints:
*   **Compute-Storage Separation**: (e.g., Yes, compute nodes scale up/down dynamically while data is stored in object storage)
*   **Concurrency Capability**: (e.g., Expected maximum concurrent users query volume)
*   **Maintenance Overhead**: (e.g., Managed Cloud Service vs. Self-hosted Open Source Cluster)

---

## 4. Options Considered

Compare the candidate solutions:

| Option Name | Pros | Cons | Estimated Monthly Cost (USD) | Reversibility Level |
| :--- | :--- | :--- | :--- | :--- |
| **Option A** | *SaaS, low dev cost, fast* | *Vendor lock-in, high query cost* | *$2,500 / month* | *Low (Hard to migrate)* |
| **Option B** | *Open Source, standard format* | *High dev maintenance, complex setups* | *$800 / month* | *High (Open formats)* |
| | | | | |

---

## 5. FinOps & Total Cost of Ownership (TCO)
Provide cost forecasts:
*   **Direct Infrastructure Cost**: (e.g., CPU, RAM, Storage, Network egress charges)
*   **Indirect Operational Cost**: (e.g., Expected developer hours to maintain, patch, and monitor the solution)
*   **Opportunity Cost**: (e.g., Time-to-market advantage of using pre-built services vs. custom built code)

---

## 6. Decision & Consequences
State the final choice and its impact:
*   **Chosen Option**: [Name of chosen option]
*   **Rationale**: (Why this option won over the others)
*   **Consequences (Positive & Negative)**:
    - **Benefits**: (e.g., Scale capacity increases 10x, zero database patching needed)
    - **Risks & Mitigation**: (e.g., Risk of network egress charges if querying from other cloud regions; mitigated by placing compute and storage in the same zone)
