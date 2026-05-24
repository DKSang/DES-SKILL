# Step 01 — Context and Readiness

## Goal

Confirm that Governance and Security Design is the correct next step, that upstream lineage, metadata, sensitivity, ownership, serving, contract, and access context is available, and that Phase 18 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 19 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ classification / access / privacy / retention / sharing / audit / exception validation
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/phase-handoffs/phase-18-to-19-handoff.md`;
* `_des-output/evidence/phase-18/phase-18-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-18-done-gate.md`, if available;
* workflow status file;
* asset sensitivity inventory;
* field-level metadata;
* data classification;
* consumers and personas;
* access expectations;
* serving channels;
* data sharing or external access needs;
* API/application access needs;
* AI/data-agent access needs;
* reverse ETL needs;
* retention and deletion expectations;
* audit and compliance expectations;
* ownership and stewardship metadata;
* existing `19-governance-security-specification.md`, if present;
* existing `phase-19-support-plan.md`, if present;
* existing `phase-19-evidence-pack.md`, if present;
* existing `phase-19-to-20-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 18 handoff exists.
5. Check whether Phase 18 Done Gate exists.
6. Read or summarize:

   * Data Product Specification;
   * Data Source Inventory;
   * Bronze Layer Specification;
   * Silver Layer Specification;
   * Gold Layer Specification;
   * Data Contract Specification;
   * Semantic Model Specification;
   * Serving Layer Specification;
   * Lineage and Metadata Specification.
7. Read or summarize Phase 18 to Phase 19 Handoff if available.
8. Extract:

   * data assets requiring governance;
   * field-level sensitivity;
   * sensitivity/access metadata from Phase 18;
   * consumers, personas, systems, and agents;
   * access and sharing paths;
   * raw vs curated exposure;
   * contract access expectations;
   * API/application access paths;
   * AI/data-agent access paths;
   * reverse ETL/writeback paths;
   * retention/deletion risks;
   * audit and compliance metadata;
   * owner, steward, approver gaps;
   * do-not-assume items from Phase 18.
9. Check whether existing `19-governance-security-specification.md` exists.
10. Check whether Phase 19 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new governance/security specification;
* update an existing governance/security specification;
* continue Phase 19 evidence/handoff work;
* route back to Phase 18;
* route back to Phase 17/12/14 if serving, contract, or quality context is missing;
* stop at HALT.

---

## Hints

* Governance should be risk-based and data-product-aware.
* Raw Bronze usually requires stricter access than curated outputs.
* Least privilege should be the default.
* Access policy should consider persona, purpose, asset layer, and sensitivity.
* Security is not only authentication; it includes authorization, masking, audit, retention, deletion, and incident handling.
* Privacy-sensitive data needs lifecycle handling, not just access control.
* External sharing and reverse ETL require explicit approval.
* AI/data-agent access needs semantic restrictions, metadata grounding, and auditability.
* Unknown classification should default to restricted or blocked broad serving.
* Do not implement security controls in this phase.

---

## Phase 18 Handoff Readiness

Before generating Phase 19 governance/security design, classify Phase 18 readiness:

| Item                               | Status                                                   | Action                              |
| ---------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Lineage and Metadata Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 18 Done Gate                 | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 18 Handoff                   | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Sensitivity/access metadata        | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Ownership/stewardship metadata     | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Audit/compliance metadata          | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 18 Do-Not-Assume list        | Found / Missing                                          | Carry forward / Ask user            |
| Phase 18 open questions            | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Lineage/Metadata Context

Stop if upstream lineage/metadata context is missing or too weak to design governance safely.

### Trigger

Use this HALT if:

* `18-lineage-metadata-specification.md` is missing;
* Phase 18 handoff is missing;
* asset inventory is missing;
* field-level sensitivity is missing;
* ownership/stewardship metadata is missing;
* serving outputs and consumers are unclear;
* audit/compliance metadata is missing.

### Options

A. Route back to `des-lineage-metadata-design`
B. Route back to `des-serving-layer-design`
C. Route back to `des-data-contracts` or `des-data-quality`
D. Continue Phase 19 as Draft using current context
E. User provides missing governance context now
F. Stop workflow

### Recommendation

Choose A if asset/sensitivity/ownership metadata is missing.
Choose B if serving exposure or consumers are unclear.
Choose C if contract/quality governance is unclear.
Choose D only if the user accepts that governance/security design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Missing Phase 18 Handoff

Stop if the Lineage and Metadata Specification exists but Phase 18 Done Gate or Phase 18 handoff is missing.

### Options

A. Route back to `des-lineage-metadata-design` to create Done Gate and handoff
B. Continue Phase 19 as Draft with accepted risk
C. Treat current Phase 18 artifact as accepted risk and create a temporary Phase 19 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Governance Scope Required

Stop if governance/security scope is unclear.

### Options

A. P1 serving outputs only
B. P1 Gold and semantic assets
C. P1 Bronze/Silver/Gold + serving outputs
D. All P1 data product assets end-to-end
E. P1 + P2 governance roadmap
F. Full project governance and security framework
G. Custom scope

### Recommendation

Choose D for first-release safety.
Choose F if the project is intended to be production-grade/platform-grade.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 18 handoff is found or missing-handoff risk is accepted;
* governance scope is selected or marked unresolved;
* assets, sensitivity, access paths, retention, sharing, audit, ownership, and compliance gaps are extracted;
* existing Phase 19 files are detected if present;
* the agent knows whether to create, update, or defer the governance/security specification.

## Next Step

After completion, load only:

```text
steps/step-02-policy-access-and-risk-design.md
```
