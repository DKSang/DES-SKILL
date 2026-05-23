---
name: des-explain-artifact
description: Use when the user wants to learn from a DES artifact, understand the Data Engineering concepts behind an artifact, or generate learning notes for a completed DES phase.
---

# des-explain-artifact

## Purpose

Use this learning skill to explain any DES artifact as a learning object.

This skill helps the user understand the purpose, reasoning, Data Engineering concepts, trade-offs, common mistakes, upstream dependencies, and downstream impact of a DES lifecycle artifact.

The goal is not only to summarize the artifact, but to teach the user how to think like a Data Engineer.

---

## When To Use

Use this skill when:

- the user asks to learn from a DES artifact;
- the user asks “artifact này dùng để làm gì?”;
- the user asks “phase này học được gì?”;
- the user wants textbook-like explanation;
- a DES main phase has produced an artifact and Learning Mode is enabled;
- the workflow router selects `des-explain-artifact`;
- the user wants to connect a DES artifact to *Fundamentals of Data Engineering* concepts.

Use this skill after any DES main lifecycle skill from Phase 01 to Phase 22.

Do not use this skill to create or modify the main DES artifact itself unless explicitly requested.

---

## Required Inputs

The agent should look for:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
```

The agent should also inspect one DES artifact, such as:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
_des-output/planning-artifacts/02-business-question-catalog.md
_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
_des-output/planning-artifacts/04-data-product-specification.md
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/planning-artifacts/06-conceptual-domain-model.md
_des-output/planning-artifacts/07-architecture-decision-record.md
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/planning-artifacts/13-transformation-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/16-semantic-model-specification.md
_des-output/planning-artifacts/17-serving-layer-specification.md
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/planning-artifacts/22-project-evaluation-report.md
```

If the artifact is not provided and cannot be inferred, stop and ask the user which artifact to explain.

---

## Output File

Create or update the configured learning output file.

Default output pattern:

```text
_des-output/learning-artifacts/{phase-number}-{artifact-name}-learning-notes.md
```

Examples:

```text
_des-output/learning-artifacts/08-ingestion-learning-notes.md
_des-output/learning-artifacts/10-silver-layer-learning-notes.md
_des-output/learning-artifacts/14-data-quality-learning-notes.md
```

---

## Output Must Include

The learning notes must include:

* artifact title;
* source artifact path;
* DES phase;
* artifact purpose;
* related Data Engineering lifecycle concepts;
* related undercurrents;
* explanation of each major artifact section;
* key decisions;
* why those decisions matter;
* upstream dependencies;
* downstream impact;
* common mistakes;
* practical example;
* reflection questions;
* recommended next skill.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Identify `output_dir`, `template_file`, and `checklist_file`.
6. Load only `steps/step-01-context-and-scope.md`.
7. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
8. Stop at every `HALT` point.
9. Do not copy long passages from source material.
10. Do not invent artifact contents that are not present.
11. Do not mark the explanation complete until the checklist passes.

---

## Process Overview

This skill will:

1. Identify the artifact to explain.
2. Identify the DES phase.
3. Map the artifact to Data Engineering concepts using `FUNDAMENTALS-MAP.md`.
4. Read the artifact contents.
5. Explain the artifact using the pattern in `SOUL.md`.
6. Generate learning notes.
7. Ask reflection questions.
8. Recommend the next learning or lifecycle skill.
9. Run the checklist.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* summarize only at surface level;
* explain concepts without connecting them to the artifact;
* quote long passages from source material;
* claim that the user understands the concept without checking;
* change the main artifact unless explicitly requested;
* ignore unresolved or weak sections in the artifact;
* hide conceptual gaps.

---

## HALT Policy

This skill must stop when:

* no artifact is provided and no artifact can be inferred;
* the artifact path does not exist;
* the DES phase cannot be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the artifact is too incomplete to explain safely;
* the user asks for a book-based explanation but the concept map has no relevant mapping.

When stopping, explain what is missing and ask for the minimum required input.

---

## Quality Checklist

* [ ] The source artifact is identified.
* [ ] The DES phase is identified.
* [ ] The explanation follows `SOUL.md`.
* [ ] The artifact is mapped to lifecycle concepts.
* [ ] The artifact is mapped to undercurrents where relevant.
* [ ] Key decisions are explained.
* [ ] Upstream and downstream connections are explained.
* [ ] Common mistakes are included.
* [ ] A practical example is included.
* [ ] Reflection questions are included.
* [ ] The explanation does not reproduce long passages from source material.
* [ ] The next recommended skill is included.

---

## Handoff To The Next Skill

Recommend one of the following:

* the next DES main lifecycle skill;
* `des-artifact-quiz` when available;
* `des-gap-teacher` when available;
* `des-workflow-status-update` if learning status tracking is enabled.
