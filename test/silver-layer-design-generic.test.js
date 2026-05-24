const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-silver-layer-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-silver-layer-design uses generic Phase 10 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-silver-layer-design/SKILL.md");
  const customize = AlecRead("skills/des-silver-layer-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-silver-entity-and-conformance-decisions.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /10-silver-layer-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-silver-layer-design"/);
  assert.match(customize, /phase = 10/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/10-silver-layer-specification\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/10-silver-layer-specification-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/10-silver-layer-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-gold-layer-design"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/05-data-source-inventory\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/06-conceptual-domain-model\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/07-architecture-decision-record\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/08-ingestion-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/09-bronze-layer-specification\.md/);
});

test("silver layer specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/10-silver-layer-specification-template.md");
  const checklist = AlecRead("checklists/10-silver-layer-design-checklist.md");

  for (const section of [
    "Silver Layer Summary",
    "Silver Scope",
    "Silver Design Principles",
    "Bronze to Silver Mapping",
    "Silver Dataset Inventory",
    "Domain Entity and Event Alignment",
    "Conceptual to Logical Mapping",
    "Grain and Identity Rules",
    "Key Strategy",
    "Deduplication and Survivorship Rules",
    "Conformance and Standardization Rules",
    "Data Type Normalization",
    "Timezone and Temporal Normalization",
    "Unit and Currency Normalization",
    "Code Status and Category Mapping",
    "Null and Missing Value Handling",
    "Schema Evolution Handling",
    "Source of Truth and Cross Source Reconciliation",
    "Silver Boundary Data Quality Rules",
    "Rejected and Quarantined Record Handling",
    "Privacy and Security Handling",
    "Lineage and Traceability",
    "Refresh and Incremental Behavior",
    "Risks",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery brief exists",
    "Phase 2 Business Question Catalog exists",
    "Phase 3 Requirements and KPI Catalog exists",
    "Phase 4 Data Product Specification exists",
    "Phase 5 Data Source Inventory exists",
    "Phase 6 Conceptual Domain Model exists",
    "Phase 7 Architecture Decision Record exists",
    "Phase 8 Ingestion Specification exists",
    "Phase 9 Bronze Layer Specification exists",
    "P1 Bronze datasets are identified",
    "The artifact does not design detailed Gold tables",
    "Missing Bronze context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase.replace("/", "\\/")), `checklist missing ${phrase}`);
  }
});

test("silver layer design step files enforce conformance decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-silver-layer-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-silver-layer-design/steps/step-02-silver-entity-and-conformance-decisions.md");
  const step03 = AlecRead("skills/des-silver-layer-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /09-bronze-layer-specification\.md/);
  assert.match(step02, /HALT - Domain Alignment Approval/);
  assert.match(step02, /HALT - Grain and Identity Rule/);
  assert.match(step02, /HALT - Key Strategy/);
  assert.match(step02, /HALT - Source of Truth and Reconciliation/);
  assert.match(step02, /HALT - Deduplication and Survivorship/);
  assert.match(step02, /HALT - Timezone and Temporal Normalization/);
  assert.match(step02, /HALT - Unit and Currency Normalization/);
  assert.match(step02, /HALT - Code Status and Category Mapping/);
  assert.match(step02, /HALT - Null and Missing Value Handling/);
  assert.match(step02, /HALT - Silver Boundary Data Quality Rules/);
  assert.match(step02, /HALT - Sensitive Data Handling/);
  assert.match(step02, /HALT - Lineage and Traceability/);
  assert.match(step03, /HALT - Checklist/);
  assert.match(step03, /des-gold-layer-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /design detailed Gold/i);
  assert.match(combined, /pipeline implementation code/i);
});
