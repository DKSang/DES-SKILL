#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const phaseGates = {
  "des-business-discovery": {
    title: "Project Intent",
    why: "Project intent controls governance depth, discovery scope, CI/CD rigor, security expectations, and release evidence.",
    decision: "Confirm whether this work is a portfolio or learning project, an MVP product, a production-grade data product, or a hybrid.",
    options: [
      "A. Portfolio / learning project",
      "B. MVP product",
      "C. Production-grade data product",
      "D. Hybrid: portfolio outcome with production-grade design discipline"
    ],
    recommendation: "Choose D when the user wants a serious demo repository that still teaches end-to-end delivery.",
    impact: [
      "A: lighter governance and release evidence, higher risk of shortcuts",
      "B: narrowed scope and pragmatic gates",
      "C: full governance, contracts, security, CI/CD, and go/no-go evidence",
      "D: production-style artifacts while keeping MVP delivery constraints"
    ]
  },
  "des-business-questions": {
    title: "Business Question Priority",
    why: "Question priority drives KPI selection, source assessment, Gold grains, semantic model, and serving design.",
    decision: "Choose the must-have business questions and identify the top three that downstream artifacts must optimize for.",
    options: [
      "A. Prioritize operational recommendation questions",
      "B. Prioritize analyst dashboard questions",
      "C. Prioritize monitoring and risk questions",
      "D. Prioritize platform/demo completeness"
    ],
    recommendation: "Choose the option that maps to the primary consumer confirmed in business discovery.",
    impact: [
      "A: product and serving design optimize for action",
      "B: semantic model and dashboard needs dominate",
      "C: SLAs, freshness, and alerting become primary",
      "D: artifact coverage is broad but MVP focus may weaken"
    ]
  },
  "des-requirements-and-kpis": {
    title: "KPI Definition Approval",
    why: "A KPI cannot be used downstream until formula, grain, owner, source dependency, threshold, and freshness are approved.",
    decision: "Approve, revise, or defer each unresolved KPI definition.",
    options: [
      "A. Approve current KPI definition",
      "B. Revise formula",
      "C. Revise grain or owner",
      "D. Defer KPI from current scope"
    ],
    recommendation: "Approve only when business meaning, formula, grain, owner, source dependency, acceptance threshold, and freshness are explicit.",
    impact: [
      "A: KPI can drive product, Gold, semantic, DQ, and release checks",
      "B: downstream metric logic must wait",
      "C: source, domain, and Gold designs may need revision",
      "D: reduces scope and prevents unstable metric design"
    ]
  },
  "des-data-product-definition": {
    title: "Data Product Consumer and Serving Boundary",
    why: "A data product without a clear consumer and first output produces unstable Gold and Serving design.",
    decision: "Choose the primary consumer and first release output for each data product.",
    options: [
      "A. End-user application first",
      "B. Analyst dashboard or semantic model first",
      "C. Shared Gold tables first",
      "D. API or data agent first"
    ],
    recommendation: "Choose B or C first when requirements and data readiness are still being stabilized.",
    impact: [
      "A: UX and serving constraints appear early",
      "B: semantic consistency and certified metrics dominate",
      "C: model quality and contracts become the first release focus",
      "D: API stability, latency, and contract design become primary"
    ]
  },
  "des-data-source-assessment": {
    title: "Source of Truth Approval",
    why: "Multiple systems may describe the same entity; the agent must not choose authority without approval.",
    decision: "Choose the source of truth for each entity, event, or metric dependency.",
    options: [
      "A. Use source A as authoritative",
      "B. Use source B as authoritative",
      "C. Use merge / conformed source strategy",
      "D. Defer this entity or dependency from MVP"
    ],
    recommendation: "Choose A or B when one owner and one source are clearly authoritative; choose C only when reconciliation is required and owned.",
    impact: [
      "A/B: simpler implementation with source-specific limitations",
      "C: better completeness but adds mapping and reconciliation work",
      "D: reduces MVP scope and avoids unsupported downstream design"
    ]
  },
  "des-domain-modeling": {
    title: "Domain Entity Meaning",
    why: "Entity meaning and grain drive source mapping, Silver conformance, Gold facts, contracts, and semantic metrics.",
    decision: "Define ambiguous entities by instance meaning, natural key, stability over time, owning source, and downstream usage.",
    options: [
      "A. Approve current entity definition",
      "B. Revise entity meaning",
      "C. Split into multiple entities",
      "D. Defer entity from current scope"
    ],
    recommendation: "Approve only after one instance, natural key, stability, source owner, and downstream outputs are clear.",
    impact: [
      "A: downstream schemas can use the entity",
      "B: relationships and source mapping must be revised",
      "C: avoids overloaded terms but increases model surface",
      "D: removes unstable downstream dependencies"
    ]
  },
  "des-architecture-design": {
    title: "Architecture Direction Approval",
    why: "Architecture direction affects cost, maintainability, CI/CD, local feedback loops, deployment, and governance.",
    decision: "Approve the target architecture direction and explicitly reject alternatives.",
    options: [
      "A. Cloud-platform-first processing and deployment",
      "B. Local-first hybrid with cloud integration and deployment",
      "C. dbt / DuckDB / SQL-first transforms with cloud serving",
      "D. Custom hybrid with explicit layer ownership"
    ],
    recommendation: "Choose B when the project needs fast iteration plus production alignment.",
    impact: [
      "A: stronger cloud alignment but slower feedback loops",
      "B: balanced local testing and deployment realism",
      "C: fastest modeling iteration but needs integration discipline",
      "D: flexible but requires precise responsibility boundaries"
    ]
  },
  "des-ingestion-design": {
    title: "Ingestion Pattern and Replay Strategy",
    why: "Ingestion cannot be implemented safely without idempotency, replay, rate-limit, late-data, and failure recovery decisions.",
    decision: "Choose ingestion and replay strategy for each source.",
    options: [
      "A. Full refresh overwrite",
      "B. Incremental append with checkpoint",
      "C. Incremental upsert / merge",
      "D. Manual batch load for MVP"
    ],
    recommendation: "Choose the simplest option that satisfies freshness, replay, and source behavior.",
    impact: [
      "A: simple but can be costly and may lose history",
      "B: preserves events but needs checkpoint and dedup rules",
      "C: supports current-state updates but needs stable keys",
      "D: acceptable only for low-risk MVP or seed data"
    ]
  },
  "des-bronze-layer-design": {
    title: "Bronze Retention and Access Policy",
    why: "Bronze may contain raw payloads and sensitive fields; retention and access decisions affect replay, privacy, and audit.",
    decision: "Approve raw preservation, raw payload storage, retention period, schema drift behavior, and Bronze access role.",
    options: [
      "A. Keep Bronze indefinitely for replay",
      "B. Keep Bronze for a fixed period, then archive",
      "C. Keep only a curated raw subset",
      "D. Do not store raw payload"
    ],
    recommendation: "Choose B unless raw data is small, non-sensitive, and explicitly useful for replay.",
    impact: [
      "A: maximum replay and audit, highest storage/governance burden",
      "B: balanced replay and cost",
      "C: lower risk but weaker forensic value",
      "D: lowest retention risk, weakest replay/debugging"
    ]
  },
  "des-silver-layer-design": {
    title: "Silver Conformance Rule Approval",
    why: "Silver defines trusted conformed data; key mapping, timezone, units, duplicates, and missing values cannot be guessed.",
    decision: "Approve conformance, deduplication, key, timezone, unit conversion, and missing-value rules for each entity or table.",
    options: [
      "A. Use source natural key",
      "B. Generate surrogate key",
      "C. Use composite key",
      "D. Defer until source mapping is confirmed"
    ],
    recommendation: "Choose the key strategy that preserves source traceability and supports Gold grain.",
    impact: [
      "A: simple and traceable but source-dependent",
      "B: stable analytics key but needs mapping rules",
      "C: accurate when no single key exists but more complex",
      "D: blocks downstream conformance until source truth is clearer"
    ]
  },
  "des-gold-layer-design": {
    title: "Gold Table Grain and Consumer Approval",
    why: "Every Gold table must have a clear business question, consumer, grain, primary key, freshness expectation, and contract level.",
    decision: "Approve, revise, or defer each candidate Gold table.",
    options: [
      "A. Approve table",
      "B. Revise grain",
      "C. Revise consumer or output",
      "D. Remove or defer table"
    ],
    recommendation: "Approve only when the table has a consumer and the sentence 'one row per ...' is unambiguous.",
    impact: [
      "A: table can feed contracts, semantic model, and serving design",
      "B: aggregation and metric logic must change",
      "C: serving and contract choices must change",
      "D: reduces scope and prevents unstable downstream dependencies"
    ]
  },
  "des-data-contracts": {
    title: "Data Contract Approval",
    why: "A contract is invalid until owner, consumers, schema version, required columns, freshness SLA, and breaking-change policy are approved.",
    decision: "Approve contract level and change policy for each source, table, or product boundary.",
    options: [
      "A. Approve as production contract",
      "B. Approve as shared/internal contract",
      "C. Mark experimental with no stability guarantee",
      "D. Block until owner or consumer confirms"
    ],
    recommendation: "Choose A for consumer-facing or release-critical data; choose C only for explicitly experimental surfaces.",
    impact: [
      "A: downstream work can rely on schema and SLA",
      "B: internal stability is expected but release exposure may be limited",
      "C: consumers must not treat it as stable",
      "D: blocks dependent implementation and release"
    ]
  },
  "des-transformation-design": {
    title: "Transformation Engine Decision",
    why: "Transformation engine choice affects local development, CI, deployment, runtime, testing, and maintainability.",
    decision: "Choose the engine and layer ownership for Bronze, Silver, Gold, tests, and deployment.",
    options: [
      "A. Platform notebooks / PySpark",
      "B. dbt + DuckDB or local SQL",
      "C. Hybrid: platform for ingestion/Silver, local/dbt for Gold",
      "D. Custom engine split"
    ],
    recommendation: "Choose C when local Gold modeling is valuable and platform execution still matters.",
    impact: [
      "A: strong platform parity but slower local iteration",
      "B: fast local CI but needs deployment integration",
      "C: balances local modeling and platform workloads",
      "D: flexible but must define ownership explicitly"
    ]
  },
  "des-data-quality": {
    title: "Data Quality Severity Approval",
    why: "DQ severity determines whether pipelines block, warn, continue, alert, quarantine, or only record information.",
    decision: "Classify each unresolved DQ rule and approve threshold, owner, and remediation.",
    options: [
      "A. P1 Blocking: pipeline or release must fail",
      "B. P2 Warning: alert but continue",
      "C. P3 Info: monitor only",
      "D. Defer rule until better baseline data exists"
    ],
    recommendation: "Use P1 for required keys, timestamps, contract fields, and metrics that would be materially wrong.",
    impact: [
      "A: highest protection, may stop delivery",
      "B: keeps delivery moving with operational visibility",
      "C: useful for learning baselines",
      "D: avoids false confidence but leaves a known gap"
    ]
  },
  "des-orchestration-observability": {
    title: "Failure Response Ownership",
    why: "A schedule or alert is not useful without owner, response time, retry behavior, escalation path, and recovery steps.",
    decision: "Approve failure response for each pipeline or job.",
    options: [
      "A. Approve current response policy",
      "B. Change owner",
      "C. Change severity or response time",
      "D. Defer observability for MVP"
    ],
    recommendation: "Do not choose D for P1 pipelines or consumer-facing freshness commitments.",
    impact: [
      "A: pipeline can move toward CI/CD and release readiness",
      "B: accountability changes and runbook must update",
      "C: SLA and alert thresholds must update",
      "D: acceptable only when no release claim depends on the pipeline"
    ]
  },
  "des-semantic-model-design": {
    title: "Semantic Metric Consistency",
    why: "Semantic measures must match approved KPI definitions; the semantic layer must not invent formulas.",
    decision: "Approve, revise, map, or remove each semantic measure.",
    options: [
      "A. Approve measure",
      "B. Revise formula",
      "C. Map to existing KPI",
      "D. Remove or defer measure"
    ],
    recommendation: "Choose A only when business meaning, aggregation, filters, owner, and KPI mapping are explicit.",
    impact: [
      "A: serving layer can expose the measure",
      "B: KPI and Gold alignment must be checked",
      "C: prevents duplicate metrics",
      "D: avoids exposing uncertified measures"
    ]
  },
  "des-serving-layer-design": {
    title: "Serving Consumer Access",
    why: "Serving exposes data to users or systems; access pattern and stability level must be approved.",
    decision: "Choose serving path and access restrictions for each consumer.",
    options: [
      "A. BI / semantic model",
      "B. Web app API",
      "C. Direct Gold table access",
      "D. Exported files",
      "E. Data agent / natural language interface"
    ],
    recommendation: "Choose the narrowest path that supports the consumer decision workflow.",
    impact: [
      "A: optimized for analytics and certified measures",
      "B: requires API SLA and contract discipline",
      "C: powerful but broadens governance risk",
      "D: simple distribution but versioning can drift",
      "E: requires strong semantic, lineage, and safety controls"
    ]
  },
  "des-lineage-metadata-design": {
    title: "Critical Lineage Completeness",
    why: "Consumer-facing outputs must have source-to-serving lineage before they can be called release-ready.",
    decision: "Approve lineage completeness for each output from Source to Bronze to Silver to Gold to Semantic/Serving to Consumer.",
    options: [
      "A. Approve lineage as complete",
      "B. Missing upstream mapping",
      "C. Missing downstream consumer mapping",
      "D. Mark output as not release-ready"
    ],
    recommendation: "Choose A only when critical source, transform, metric, and consumer paths are traceable.",
    impact: [
      "A: output can proceed to governance/security checks",
      "B: source/domain/layer artifacts need revision",
      "C: serving/product metadata needs revision",
      "D: release evaluation must block or accept risk"
    ]
  },
  "des-governance-and-security": {
    title: "Secret and Environment Security",
    why: "Security decisions must be explicit before CI/CD, deployment, production access, or release approval.",
    decision: "Approve secret handling, environment separation, permissions, raw data restrictions, and service identity handling.",
    options: [
      "A. Approve current security plan",
      "B. Require a managed secret store",
      "C. Use CI/CD secrets for MVP",
      "D. Block deployment until security is fixed"
    ],
    recommendation: "Choose B or C only when access boundaries and secret rotation expectations are clear.",
    impact: [
      "A: work can proceed to cost and CI/CD with recorded controls",
      "B: stronger control, more setup",
      "C: pragmatic MVP, must not leak into long-term production by accident",
      "D: prevents unsafe release"
    ]
  },
  "des-cost-and-performance-optimization": {
    title: "Cost and Runtime Budget",
    why: "Optimization cannot be evaluated without budget, runtime, local/cloud boundary, and query performance targets.",
    decision: "Approve cost/runtime target and optimization priority.",
    options: [
      "A. Optimize for lowest cost",
      "B. Optimize for fastest runtime",
      "C. Balance cost and runtime",
      "D. Defer optimization until measurements exist"
    ],
    recommendation: "Choose C for production-like MVPs; choose D when no measurements exist yet and release is not blocked.",
    impact: [
      "A: may increase latency or operational complexity",
      "B: may increase platform spend",
      "C: practical tradeoff with explicit thresholds",
      "D: avoids premature optimization but must record measurement plan"
    ]
  },
  "des-cicd-and-testing": {
    title: "CI/CD Release Gate Approval",
    why: "Deployment must not proceed without approved gates for tests, validation, secrets, smoke checks, and promotion.",
    decision: "Approve CI/CD gates and environment promotion rules.",
    options: [
      "A. Strict gates for all environments",
      "B. Strict gates for test and production only",
      "C. Lightweight gates for MVP",
      "D. Block until missing tests are implemented"
    ],
    recommendation: "Choose B when development needs speed but release evidence still matters.",
    impact: [
      "A: highest confidence, slower changes",
      "B: balanced developer speed and release safety",
      "C: fastest MVP, higher release risk",
      "D: prevents release until validation gaps close"
    ]
  },
  "des-project-evaluation": {
    title: "Release Go/No-Go",
    why: "This is the final release decision; the agent must not mark release-ready without explicit approval and evidence.",
    decision: "Choose release status after reviewing business outputs, KPIs, sources, architecture, Gold specs, contracts, DQ, CI/CD, security, and risks.",
    options: [
      "A. Go - release-ready",
      "B. Go with known risks",
      "C. No-go - blockers remain",
      "D. Defer release evaluation"
    ],
    recommendation: "Choose A only when fresh evidence supports every release claim; choose B only with named risk owner and expiry.",
    impact: [
      "A: project can be marked release-ready",
      "B: release may proceed but risks must be visible and owned",
      "C: route blockers back to the affected phase or support skill",
      "D: no release claim may be made"
    ]
  }
};

const phaseSkills = Object.keys(phaseGates);

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeIfChanged(filePath, content) {
  const previous = fs.existsSync(filePath) ? read(filePath) : "";
  if (previous !== content) fs.writeFileSync(filePath, content);
}

function insertAfterPurpose(content, block) {
  if (content.includes("## HALT Policy")) return content;

  const match = content.match(/## Purpose\r?\n\r?\n[\s\S]*?(?=\r?\n## )/);
  if (!match) {
    return `${content.trimEnd()}\n\n${block}\n`;
  }

  return content.replace(match[0], `${match[0].trimEnd()}\n\n${block}\n\n`);
}

function prependBlock(content, block) {
  if (content.includes(block.split("\n")[0])) return content;
  return `${block}\n\n${content.trimStart()}`;
}

function appendBlock(content, block) {
  if (content.includes(block.split("\n")[0])) return content;
  return `${content.trimEnd()}\n\n${block}\n`;
}

function haltPolicyBlock() {
  return [
    "## HALT Policy",
    "",
    "This skill must stop when a required decision cannot be safely inferred.",
    "",
    "The agent must not continue if any of these are unresolved:",
    "",
    "- required upstream artifacts are missing or inconsistent;",
    "- business owner, metric owner, source owner, or release owner is unclear;",
    "- business priority, consumer, or project intent is ambiguous;",
    "- source of truth, access, quality, legal use, cost, or ownership is unknown;",
    "- KPI formula, grain, freshness, SLA, threshold, or acceptance criteria is ambiguous;",
    "- architecture, storage, compute, deployment, or engine trade-off needs approval;",
    "- data contract owner, consumer impact, schema version, or breaking-change policy is missing;",
    "- DQ severity, threshold, remediation, alerting, or escalation is unknown;",
    "- security, access, retention, environment, secret, or release evidence is missing.",
    "",
    "Use the detailed HALT checkpoints in `steps/`: readiness HALT in step 01, phase decision HALT in step 02, and validation HALT in the final step. HALT asks for a decision, not permission to continue."
  ].join("\n");
}

function readinessBlock(skillName) {
  return [
    "## HALT - Readiness Check Failed",
    "",
    "Stop here before continuing.",
    "",
    "### Trigger",
    "Use this HALT if required upstream context is missing, contradictory, stale, or not approved.",
    "",
    "Missing or blocked items:",
    "- Required upstream artifact is missing.",
    "- Workflow status says an earlier phase is incomplete.",
    "- Owner, source, KPI, contract, quality rule, security control, or release evidence is unknown.",
    "- Continuing would require the agent to guess.",
    "",
    "### Decision needed",
    `Decide whether \`${skillName}\` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.`,
    "",
    "### Options",
    "A. Provide missing information now",
    "B. Route back to the recommended upstream skill",
    "C. Continue as draft with explicit assumptions and risks",
    "D. Stop this workflow",
    "",
    "### Recommendation",
    "Choose B if the missing item affects downstream design, implementation, governance, or release readiness.",
    "",
    "### Impact",
    "- A: workflow can continue after the missing facts are recorded.",
    "- B: preserves artifact quality and prevents downstream rework.",
    "- C: creates a draft only; status must not be marked Done unless risk is explicitly accepted.",
    "- D: no artifact/status change should be made except recording the stop reason.",
    "",
    "### Required response",
    "Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds."
  ].join("\n");
}

function decisionBlock(gate) {
  return [
    `## HALT - ${gate.title}`,
    "",
    "Stop here. Do not continue until the user confirms this decision.",
    "",
    "### Why this matters",
    gate.why,
    "",
    "### Decision needed",
    gate.decision,
    "",
    "### Options",
    ...gate.options,
    "",
    "### Recommended default",
    gate.recommendation,
    "",
    "### Impact",
    ...gate.impact.map((item) => `- ${item}`),
    "",
    "### Required user response",
    "Please choose one option or provide a custom decision. Do not continue until the user responds."
  ].join("\n");
}

function validationBlock() {
  return [
    "## HALT - Checklist Blocked",
    "",
    "Stop here before marking the artifact Done or advancing workflow status.",
    "",
    "### Trigger",
    "Use this HALT if the configured checklist does not pass, evidence is missing, approval is missing, or the artifact still contains unresolved blockers.",
    "",
    "### Blocked checklist items",
    "- List each blocked or unresolved checklist item.",
    "- Name the artifact section and owner affected.",
    "- State what evidence or decision is missing.",
    "",
    "### Impact",
    "This artifact cannot be marked Done and the workflow status must not advance.",
    "",
    "### Options",
    "A. Fix the artifact now",
    "B. Mark as draft with blockers",
    "C. Route back to an upstream skill",
    "D. Stop",
    "",
    "### Required response",
    "Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds."
  ].join("\n");
}

for (const skillName of phaseSkills) {
  if (skillName === "des-business-discovery" || skillName === "des-business-questions" || skillName === "des-requirements-and-kpis" || skillName === "des-data-product-definition") {
    // Phase 01 through Phase 04 have dedicated generic workflows with custom step names and HALT taxonomy.
    continue;
  }

  const skillDir = path.join(root, "skills", skillName);
  const skillPath = path.join(skillDir, "SKILL.md");
  const stepsDir = path.join(skillDir, "steps");

  if (!fs.existsSync(skillPath)) {
    throw new Error(`Missing ${skillPath}`);
  }

  writeIfChanged(skillPath, insertAfterPurpose(read(skillPath), haltPolicyBlock()));

  if (!fs.existsSync(stepsDir)) {
    throw new Error(`Missing steps directory for ${skillName}`);
  }

  const stepFiles = fs.readdirSync(stepsDir)
    .filter((name) => /^step-\d{2}-.+\.md$/.test(name))
    .sort();

  if (stepFiles.length === 0) {
    throw new Error(`No step files for ${skillName}`);
  }

  const firstStep = path.join(stepsDir, stepFiles[0]);
  writeIfChanged(firstStep, prependBlock(read(firstStep), readinessBlock(skillName)));

  const decisionIndex = stepFiles.length >= 2 ? 1 : 0;
  const decisionStep = path.join(stepsDir, stepFiles[decisionIndex]);
  writeIfChanged(decisionStep, prependBlock(read(decisionStep), decisionBlock(phaseGates[skillName])));

  const finalStep = path.join(stepsDir, stepFiles[stepFiles.length - 1]);
  writeIfChanged(finalStep, appendBlock(read(finalStep), validationBlock()));
}

console.log(`Injected HALT policy and step gates for ${phaseSkills.length} phase skills.`);
