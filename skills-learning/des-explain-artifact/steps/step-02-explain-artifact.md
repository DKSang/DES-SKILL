# Step 02 — Explain Artifact

## Goal

Create a detailed learning explanation for the selected DES artifact.

The explanation must teach the Data Engineering concepts behind the artifact, not merely summarize the artifact.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/artifact-explanation-template.md
source artifact
```

---

## Explanation Procedure

### 1. Identify Artifact Purpose

Explain:

* what the artifact is;
* why it exists;
* what problem it prevents;
* what decisions it captures.

### 2. Map to Fundamentals

Using `knowledge/FUNDAMENTALS-MAP.md`, identify:

* lifecycle stage;
* undercurrents;
* related concepts;
* learning goal.

Do not use unsupported mappings.

### 3. Explain Major Sections

For each major section in the artifact:

1. describe what the section means;
2. explain why it matters;
3. explain what a beginner might misunderstand;
4. connect it to upstream or downstream phases.

### 4. Explain Key Decisions

Identify the important decisions inside the artifact.

For each decision, explain:

* decision;
* why it matters;
* trade-off;
* downstream impact;
* risk if ignored.

### 5. Explain Common Mistakes

Use the concept map and artifact evidence to identify likely mistakes.

Examples:

* solution-first design;
* unclear grain;
* missing owner;
* missing quality expectations;
* missing metadata;
* confusing technical cleaning with business transformation;
* ignoring governance.

### 6. Give Practical Example

Give one small realistic example related to the artifact.

The example should be concrete and short.

### 7. Ask Reflection Questions

Ask 3–5 questions.

Questions should test understanding, not memorization.

---

## Output Format

Use this structure:

```md
# Learning Notes — {Artifact Title}

## Metadata

- Source artifact:
- DES phase:
- Learning status:
- Explanation depth:
- Related lifecycle concepts:
- Related undercurrents:

## 1. Artifact Purpose

## 2. Fundamental Concept

## 3. Why This Artifact Matters

## 4. Section-by-Section Explanation

## 5. Key Decisions and Trade-offs

## 6. Upstream and Downstream Connections

## 7. Common Mistakes

## 8. Practical Example

## 9. Reflection Questions

## 10. Recommended Next Step
```

---

## HALT Conditions

Stop if:

* the artifact content is not available;
* the phase mapping is missing;
* the explanation would require inventing artifact contents;
* the artifact is too incomplete and should be improved first.

If stopping, explain the issue and recommend whether to improve the artifact first.

---

## Continue

After drafting the learning notes, continue to:

```text
steps/step-03-checklist-and-handoff.md
```
