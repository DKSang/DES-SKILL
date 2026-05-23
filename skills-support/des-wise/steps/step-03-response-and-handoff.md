# Step 03 — Response and Handoff

## Goal

Return a clear routing recommendation and hand off to the next DES skill.

---

## Required Reading

Read:

```text
skills-support/des-wise/checklist.md
templates/support/des-wise-response-template.md
```

---

## Response Structure

Use this structure:

```md
# DES Wise Recommendation

## 1. I understand you want to...

## 2. Recommended Skill

## 3. Why This Skill

## 4. Required Inputs

## 5. Expected Output

## 6. Copy-Paste Prompt

## 7. Alternative Route

## 8. Next Recommended Skill
```

Keep the response concise unless the user asks for full detail.

---

## Handoff Rules

Always end with:

```text
Next recommended skill: {skill-name}
```

If the next skill requires a status update first, say so clearly.

---

## Status Values

Use one of:

```text
Recommended
Recommended with Missing Evidence
Blocked
Needs Status Update
Ambiguous
```

---

## Final Output

End with:

```md
## Checklist Result

- Routing status:
- Primary skill:
- Missing evidence:
- Next recommended skill:
```
