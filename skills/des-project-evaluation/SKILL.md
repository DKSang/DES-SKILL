---
name: des-project-evaluation
description: Use when creating the Project Evaluation Report to evaluate project success against business goals, technical readiness, and adoption evidence.
---

# des-project-evaluation

## Purpose

Use this skill to create the Project Evaluation Report for any data engineering project.

This skill evaluates whether the project achieved its business goals, answered the approved business questions, delivered required data products, met KPI/SLA/quality/security/cost expectations, and created a sustainable path for future improvement.

The goal is to close the data engineering lifecycle with evidence, stakeholder feedback, lessons learned, risks, and next-iteration recommendations.

## When To Use

Use this skill when:

- Phase 21 CI/CD and Testing Specification exists;
- the project needs release review, final evaluation, retrospective, or handoff;
- stakeholders need to know whether the data product is ready, useful, trusted, and maintainable;
- the project team needs to identify lessons learned and next iteration priorities;
- the workflow router selects Phase 22.

Do not use this skill to redesign the full platform, implement fixes, write deployment code, or create new phase artifacts directly.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- `.agents/des-skill/output/18-lineage-metadata-specification.md`;
- `.agents/des-skill/output/19-governance-security-specification.md`;
- `.agents/des-skill/output/20-cost-performance-optimization-specification.md`;
- `.agents/des-skill/output/21-cicd-testing-specification.md`;
- workflow status file, if present;
- release evidence;
- test results;
- quality results;
- operational metrics;
- cost/performance metrics;
- stakeholder feedback;
- adoption/usage evidence;
- open risks and known limitations.

If Phase 21 or release evidence is missing, stop and ask whether to continue as Draft or route back to `des-cicd-testing`.

## Output

Create or update:

```text
.agents/des-skill/output/22-project-evaluation-report.md
```

The artifact must capture:

* project evaluation summary;
* evaluation scope and non-scope;
* business goal evaluation;
* business question coverage;
* requirement and KPI evaluation;
* data product delivery evaluation;
* source and ingestion evaluation;
* Bronze/Silver/Gold layer evaluation;
* contract evaluation;
* transformation evaluation;
* data quality evaluation;
* orchestration and observability evaluation;
* semantic and serving evaluation;
* lineage and metadata evaluation;
* governance and security evaluation;
* cost and performance evaluation;
* CI/CD and testing evaluation;
* stakeholder feedback;
* usage and adoption evidence;
* readiness scorecard;
* risks and known limitations;
* lessons learned;
* next iteration recommendations;
* final decision and handoff.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent test results, stakeholder feedback, adoption metrics, quality pass rates, cost savings, or release evidence.
8. Do not mark the project successful without evidence.
9. Do not hide unresolved risks.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Guardrails

The agent must not:

* treat completion of artifacts as proof of business success;
* claim business value without business evidence;
* claim quality readiness without quality results;
* claim production readiness without release evidence;
* claim adoption without usage or stakeholder evidence;
* ignore known limitations;
* hide open questions;
* recommend production release if blocking security, quality, contract, or CI/CD issues remain;
* skip lessons learned and feedback loop.

## HALT Policy

This skill must stop when evaluation cannot be made safely.

Stop especially when:

* upstream phase artifacts are missing;
* business success criteria are missing;
* release evidence is missing;
* quality/test results are missing;
* stakeholder feedback is missing;
* usage/adoption evidence is missing;
* open risks affect release readiness;
* production readiness decision is requested without evidence.

## Quality Checklist

- [ ] Project evaluation scope is clearly defined.
- [ ] Evaluation principles focus on evidence-based value.
- [ ] Business goals and question coverage are evaluated against evidence.
- [ ] Data product delivery and layer correctness are reviewed.
- [ ] Contract, quality, and operational readiness are scored.
- [ ] Governance, security, and metadata completeness are validated.
- [ ] Stakeholder feedback and adoption evidence are documented or marked missing.
- [ ] Readiness scorecard provides a transparent view of project status.
- [ ] Lessons learned and next iteration recommendations are included.
- [ ] Final readiness decision is supported by documented evidence.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Claiming success based on doc completion | Artifacts are means to an end; business value requires evidence of impact/usage. |
| Hiding unresolved P1 risks | Misleads stakeholders about production readiness; leads to post-release failures. |
| Treating missing evidence as "success" | Leads to false confidence; "Unknown" is the correct status for missing data. |
| Skipping the retrospective/feedback loop | Wastes the opportunity to improve the next iteration or project. |
| Recommending release with security blockers | Violates safety mandates and compliance requirements. |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Evaluates final governance compliance and access control readiness. |
| Data Management | Reviews metadata, lineage, and stewardship completeness. |
| DataOps | Assesses CI/CD effectiveness, release evidence, and operational stability. |
| Data Architecture | Evaluates if the implemented architecture meets business and technical goals. |
| Orchestration | Reviews run history, alerting accuracy, and recovery reliability. |
| Software Engineering | Final check of test coverage, code review quality, and release discipline. |

## Handoff To The Next Skill

Next recommend either `workflow-complete` to close the project or route to the specific phase needed for the next iteration (e.g., `des-business-discovery` for new scope or `des-ingestion-design` for source improvements).
