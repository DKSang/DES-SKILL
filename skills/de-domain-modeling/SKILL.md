---
name: de-domain-modeling
description: Use when defining business entities, events, relationships, grains, glossary terms, and fact or dimension candidates before architecture or Gold modeling.
---

# de-domain-modeling

## When To Use

Use after data product and source assessment, before architecture and Gold design. Use when the domain is complex enough that tables should not be designed directly from source schemas.

## Purpose

Create a conceptual domain model that explains the business world independently of tools, vendors, and raw source layouts.

## Inputs Required

- Business question catalog.
- Data product definitions.
- Source inventory.
- KPI catalog.
- Existing glossary or domain documentation if available.

## Step-By-Step Process

1. Identify core business entities such as customer, order, product, device, patient, shipment, location, crop, or account.
2. Identify business events such as purchase, payment, login, sensor reading, claim, delivery, forecast, or recommendation.
3. Define relationships between entities and events.
4. Define candidate grains for facts and dimensions.
5. Identify lifecycle states and slowly changing attributes.
6. Build a glossary for ambiguous terms and synonyms.
7. Map business questions and data products to entities, events, and candidate facts or dimensions.

## Output File

Write the final artifact to:

`.agents/des-skill/output/06-domain-modeling.md`

Use the matching template from:

`.agents/des-skill/templates/domain_model_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Conceptual domain model.
- Entity and event catalog.
- Relationship map.
- Grain candidates.
- Fact and dimension candidates.
- Business glossary.

## Quality Checklist

- Model uses business language, not source table names.
- Events have time and actor or subject where applicable.
- Candidate grains are explicit.
- Glossary resolves ambiguous terms.
- Gold model candidates trace back to business questions.

## Common Mistakes To Avoid

- Copying source schemas as the domain model.
- Designing facts without declaring grain.
- Ignoring many-to-many relationships.
- Skipping glossary terms because they feel obvious.

## Handoff To The Next Skill

Next use `de-architecture-design` to choose a platform architecture that supports the domain model, source realities, and data product SLAs.

## Example Output Format

```markdown
# Domain Model
## Entities
| Entity | Description | Key Attributes | Source Candidates |
## Events
| Event | Description | Grain | Measures | Related Entities |
## Relationships
## Glossary
## Fact And Dimension Candidates
```
