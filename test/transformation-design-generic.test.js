const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-transformation-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-transformation-design uses generic Phase 13 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-transformation-design/SKILL.md");
  const customize = AlecRead("skills/des-transformation-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-transformation-logic-and-dependencies.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /13-transformation-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-transformation-design"/);
  assert.match(customize, /phase = 13/);
  assert.match(customize, /output_file = "\.agents\/des-skill\/output\/13-transformation-specification\.md"/);
  assert.match(customize, /template_file = "\.agents\/des-skill\/templates\/13-transformation-specification-template\.md"/);
  assert.match(customize, /checklist_file = "\.agents\/des-skill\/checklists\/13-transformation-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-data-quality"/);
  assert.match(customize, /\.agents\/des-skill\/output\/01-business-discovery-brief\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/02-business-question-catalog\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/04-data-product-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/05-data-source-inventory\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/06-conceptual-domain-model\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/07-architecture-decision-record\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/08-ingestion-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/09-bronze-layer-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/10-silver-layer-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/11-gold-layer-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/12-data-contract-specification\.md/);
});

test("transformation design specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/13-transformation-specification-template.md");
  const checklist = AlecRead("checklists/13-transformation-design-checklist.md");

  for (const section of [
    "Transformation Summary",
    "Transformation Scope",
    "Transformation Design Principles",
    "Transformation Inventory",
    "Layer to Layer Transformation Mapping",
    "Dependency Graph",
    "Input and Output Dataset Mapping",
    "Transformation Grain",
    "Business Rules",
    "Cleaning and Conformance Rules",
    "Join and Relationship Rules",
    "Deduplication and Survivorship Rules",
    "SCD and History Handling",
    "Aggregation and Metric Calculation Rules",
    "Incremental Processing Strategy",
    "Backfill and Replay Strategy",
    "Late Arriving and Corrected Data Handling",
    "Error Handling and Quarantine Behavior",
    "Validation and Test Expectations",
    "Contract Alignment",
    "Lineage and Metadata Expectations",
    "Performance and Cost Considerations",
    "Security and Privacy Handling",
    "Implementation Boundary",
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
    "Phase 12 Data Contract Specification exists",
    "P1 contracted outputs and transformation paths are identified",
    "The artifact does not include transformation",
    "Missing Gold/Contract context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase.replace("/", "\\/")), `checklist missing ${phrase}`);
  }
});

test("transformation design step files enforce transformation decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-transformation-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-transformation-design/steps/step-02-transformation-logic-and-dependencies.md");
  const step03 = AlecRead("skills/des-transformation-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /12-data-contract-specification\.md/);
  assert.match(step02, /HALT - Input and Output Mapping/);
  assert.match(step02, /HALT - Transformation Grain/);
  assert.match(step02, /HALT - Business Rule Ambiguity/);
  assert.match(step02, /HALT - Join and Relationship Rule/);
  assert.match(step02, /HALT - Metric and Aggregation Rule/);
  assert.match(step02, /HALT - Deduplication and Survivorship Rule/);
  assert.match(step02, /HALT - SCD and History Behavior/);
  assert.match(step02, /HALT - Incremental Processing Strategy/);
  assert.match(step02, /HALT - Backfill and Replay Strategy/);
  assert.match(step02, /HALT - Late-Arriving and Corrected Data/);
  assert.match(step02, /HALT - Error Handling and Quarantine/);
  assert.match(step02, /HALT - Validation and Test Expectations/);
  assert.match(step02, /HALT - Contract Alignment/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-data-quality/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /transformation SQL\/Python\/dbt\/notebook code/i);
  assert.match(combined, /orchestration pipeline code/i);
});
