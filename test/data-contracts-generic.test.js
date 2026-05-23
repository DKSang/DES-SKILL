const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-data-contracts");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-data-contracts uses generic Phase 12 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-data-contracts/SKILL.md");
  const customize = AlecRead("skills/des-data-contracts/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-contract-boundary-and-obligations.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /12-data-contract-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-data-contracts"/);
  assert.match(customize, /phase = 12/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/12-data-contract-specification\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/12-data-contract-specification-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/12-data-contracts-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-transformation-design"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/05-data-source-inventory\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/06-conceptual-domain-model\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/07-architecture-decision-record\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/08-ingestion-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/09-bronze-layer-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/10-silver-layer-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/11-gold-layer-specification\.md/);
});

test("data contract specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/12-data-contract-specification-template.md");
  const checklist = AlecRead("checklists/12-data-contracts-checklist.md");

  for (const section of [
    "Data Contract Summary",
    "Contract Scope",
    "Contract Design Principles",
    "Contract Inventory",
    "Producer and Consumer Mapping",
    "Contract Level",
    "Dataset and Output Identity",
    "Business Meaning and Grain",
    "Schema Expectations",
    "Field Level Expectations",
    "Metric and KPI Expectations",
    "Freshness and SLA Expectations",
    "Quality Expectations",
    "Volume and Completeness Expectations",
    "Security and Access Expectations",
    "Lineage and Metadata Expectations",
    "Compatibility and Versioning Policy",
    "Change Management Policy",
    "Deprecation Policy",
    "Incident and Escalation Policy",
    "Acceptance and Validation Criteria",
    "Contract Ownership and Approval",
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
    "Phase 10 Silver Layer Specification exists",
    "Phase 11 Gold Layer Specification exists",
    "P1 Gold outputs are identified",
    "The artifact does not include transformation code",
    "Missing Gold context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase.replace("/", "\\/")), `checklist missing ${phrase}`);
  }
});

test("data contracts step files enforce data contract decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-data-contracts/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-data-contracts/steps/step-02-contract-boundary-and-obligations.md");
  const step03 = AlecRead("skills/des-data-contracts/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /11-gold-layer-specification\.md/);
  assert.match(step02, /HALT - Contract Level Approval/);
  assert.match(step02, /HALT - Producer, Consumer, and Owner/);
  assert.match(step02, /HALT - Schema Expectations/);
  assert.match(step02, /HALT - Grain Expectation/);
  assert.match(step02, /HALT - Metric and KPI Alignment/);
  assert.match(step02, /HALT - Freshness and SLA/);
  assert.match(step02, /HALT - Quality Thresholds/);
  assert.match(step02, /HALT - Security and Access Policy/);
  assert.match(step02, /HALT - Lineage and Metadata Expectations/);
  assert.match(step02, /HALT - Compatibility and Versioning Policy/);
  assert.match(step02, /HALT - Change Management Policy/);
  assert.match(step02, /HALT - Incident and Escalation Policy/);
  assert.match(step02, /HALT - Acceptance and Validation Criteria/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-transformation-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /transformation SQL\/Python code/i);
  assert.match(combined, /pipeline implementation code/i);
});
