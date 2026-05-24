const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-gold-layer-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-gold-layer-design uses generic Phase 11 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-gold-layer-design/SKILL.md");
  const customize = AlecRead("skills/des-gold-layer-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-gold-output-and-metric-design.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /11-gold-layer-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-gold-layer-design"/);
  assert.match(customize, /phase = 11/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/11-gold-layer-specification\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/11-gold-layer-specification-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/11-gold-layer-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-data-contracts"/);
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
});

test("gold layer specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/11-gold-layer-specification-template.md");
  const checklist = AlecRead("checklists/11-gold-layer-design-checklist.md");

  for (const section of [
    "Gold Layer Summary",
    "Gold Scope",
    "Gold Design Principles",
    "Business Question to Gold Mapping",
    "Requirement and KPI to Gold Mapping",
    "Silver to Gold Mapping",
    "Gold Dataset Inventory",
    "Gold Output Type",
    "Consumer and Serving Alignment",
    "Grain and Aggregation Rules",
    "Metric and KPI Definitions Used",
    "Dimension Fact Aggregate and Output Model Decisions",
    "Filtering and Slicing Expectations",
    "History and Slowly Changing Behavior",
    "Freshness and SLA Expectations",
    "Gold Boundary Data Quality Rules",
    "Access Control and Security Handling",
    "Contract Expectations",
    "Lineage and Traceability",
    "Performance and Cost Considerations",
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
    "P1 business questions are identified",
    "The artifact does not include transformation SQL/Python code",
    "Missing Silver context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase.replace("/", "\\/")), `checklist missing ${phrase}`);
  }
});

test("gold layer design step files enforce conformance decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-gold-layer-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-gold-layer-design/steps/step-02-gold-output-and-metric-design.md");
  const step03 = AlecRead("skills/des-gold-layer-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /10-silver-layer-specification\.md/);
  assert.match(step02, /HALT - Business Question Mapping/);
  assert.match(step02, /HALT - Consumer and Serving Alignment/);
  assert.match(step02, /HALT - Metric Definition Alignment/);
  assert.match(step02, /HALT - Grain and Aggregation Rule/);
  assert.match(step02, /HALT - Modeling Pattern Decision/);
  assert.match(step02, /HALT - History and Slowly Changing Behavior/);
  assert.match(step02, /HALT - Freshness and SLA/);
  assert.match(step02, /HALT - Gold Boundary Data Quality Rules/);
  assert.match(step02, /HALT - Access Control and Security/);
  assert.match(step02, /HALT - Contract Expectation/);
  assert.match(step02, /HALT - Lineage and Traceability/);
  assert.match(step03, /HALT - Checklist/);
  assert.match(step03, /des-data-contracts/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /transformation SQL\/Python code/i);
  assert.match(combined, /pipeline implementation code/i);
});
