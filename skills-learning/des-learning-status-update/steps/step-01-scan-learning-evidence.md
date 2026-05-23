# Step 01 — Scan Learning Evidence

## Goal

Scan available DES artifacts and learning outputs to determine current learning evidence.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-learning-status-update/customize.toml
```

---

## Directories To Inspect

Inspect:

```text
_des-output/planning-artifacts/
_des-output/learning-artifacts/
_des-output/learning-artifacts/
_des-output/implementation-artifacts/
```

If `_des-output/learning-artifacts/` does not exist, prepare to create it.

---

## Evidence Types

Identify evidence for each phase:

```text
main artifact
learning notes
artifact quiz
quiz answers if available
learning gap report
socratic coaching session
learning review
workflow status evidence
```

---

## Phase Detection

Use the 22 DES phase artifact names:

```text
01-business-discovery-brief.md
02-business-question-catalog.md
03-requirements-and-kpi-catalog.md
04-data-product-specification.md
05-data-source-inventory.md
06-conceptual-domain-model.md
07-architecture-decision-record.md
08-ingestion-specification.md
09-bronze-layer-specification.md
10-silver-layer-specification.md
11-gold-layer-specification.md
12-data-contract-specification.md
13-transformation-specification.md
14-data-quality-specification.md
15-orchestration-observability-specification.md
16-semantic-model-specification.md
17-serving-layer-specification.md
18-lineage-metadata-specification.md
19-governance-security-specification.md
20-cost-performance-optimization-specification.md
21-cicd-testing-specification.md
22-project-evaluation-report.md
```

---

## HALT Conditions

Stop if:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* existing learning status conflicts with evidence and cannot be safely merged;
* user asks to mark phases Ready without evidence.

---

## Output From This Step

Produce:

```md
## Learning Evidence Scan

- Main artifacts found:
- Learning notes found:
- Quizzes found:
- Gap reports found:
- Coaching sessions found:
- Existing learning status:
- Conflicts:
- Missing evidence:
- Status:
```

Then continue to:

```text
steps/step-02-update-learning-status.md
```
