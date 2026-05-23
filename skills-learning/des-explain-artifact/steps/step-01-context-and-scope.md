# Step 01 — Context and Scope

## Goal

Identify which DES artifact should be explained and determine whether enough context exists to create learning notes.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-explain-artifact/customize.toml
```

Do not continue if `SOUL.md` or `knowledge/FUNDAMENTALS-MAP.md` is missing.

---

## Inputs To Identify

Find or ask for:

1. source artifact path;
2. DES phase number;
3. artifact title;
4. user learning goal;
5. desired explanation language;
6. desired depth.

Default values:

```text
language = user's language
depth = fundamental
mode = learning notes
```

---

## Artifact Detection Rules

If the user provides a file path, use that path.

If the user says a phase number, infer the artifact from this map:

```text
01 -> 01-business-discovery-brief.md
02 -> 02-business-question-catalog.md
03 -> 03-requirements-and-kpi-catalog.md
04 -> 04-data-product-specification.md
05 -> 05-data-source-inventory.md
06 -> 06-conceptual-domain-model.md
07 -> 07-architecture-decision-record.md
08 -> 08-ingestion-specification.md
09 -> 09-bronze-layer-specification.md
10 -> 10-silver-layer-specification.md
11 -> 11-gold-layer-specification.md
12 -> 12-data-contract-specification.md
13 -> 13-transformation-specification.md
14 -> 14-data-quality-specification.md
15 -> 15-orchestration-observability-specification.md
16 -> 16-semantic-model-specification.md
17 -> 17-serving-layer-specification.md
18 -> 18-lineage-metadata-specification.md
19 -> 19-governance-security-specification.md
20 -> 20-cost-performance-optimization-specification.md
21 -> 21-cicd-testing-specification.md
22 -> 22-project-evaluation-report.md
```

Default artifact directory:

```text
_des-output/planning-artifacts/
```

---

## HALT Conditions

Stop if:

* no artifact path or phase can be inferred;
* source artifact does not exist;
* phase number cannot be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* artifact is empty or too incomplete to explain safely.

If stopping, ask for the minimum missing input.

---

## Output From This Step

Produce a short context summary:

```md
## Learning Explanation Context

- Source artifact:
- DES phase:
- Artifact title:
- Learning goal:
- Explanation depth:
- Output file:
- Relevant concept map section:
- Status:
```

Then continue to:

```text
steps/step-02-explain-artifact.md
```
