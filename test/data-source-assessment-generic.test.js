const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-data-source-assessment");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-data-source-assessment uses generic Phase 5 artifact paths and step names", () => {
  const skill = read("skills/des-data-source-assessment/SKILL.md");
  const customize = read("skills/des-data-source-assessment/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-source-inventory-and-risk-assessment.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /05-data-source-inventory\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-data-source-assessment"/);
  assert.match(customize, /phase = 5/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/05-data-source-inventory\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/05-data-source-inventory-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/05-data-source-assessment-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-domain-modeling"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
});

test("data source assessment template and checklist cover generic required sections", () => {
  const template = read("templates/05-data-source-inventory-template.md");
  const checklist = read("checklists/05-data-source-assessment-checklist.md");

  for (const section of [
    "Source Inventory Summary",
    "Source-to-Product Mapping",
    "Source-to-Requirement and KPI Mapping",
    "Source System Inventory",
    "Source Type and Generation Pattern",
    "Ownership and Contacts",
    "Access Method and Permissions",
    "Source of Truth Decisions",
    "Data Format and Schema",
    "Update Frequency and Freshness",
    "Volume and Growth",
    "History and Retention",
    "Quality Profile",
    "Reliability and Availability",
    "Schema Change and Evolution",
    "Security and Privacy Classification",
    "Compliance and Regulatory Concerns",
    "Cost, Licensing, and Usage Limits",
    "Operational Dependencies",
    "Contract and SLA Expectations",
    "Ingestion Feasibility",
    "Risks",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery artifact exists",
    "Phase 2 Business Question Catalog exists",
    "Phase 3 Requirements and KPI Catalog exists",
    "Phase 4 Data Product Specification exists",
    "P1 product outputs are identified",
    "The artifact does not design ingestion pipelines",
    "Missing upstream product context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("data source assessment step files enforce source decisions and no downstream design", () => {
  const step01 = read("skills/des-data-source-assessment/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-data-source-assessment/steps/step-02-source-inventory-and-risk-assessment.md");
  const step03 = read("skills/des-data-source-assessment/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /04-data-product-specification\.md/);
  assert.match(step02, /HALT . Source Owner Required/);
  assert.match(step02, /HALT . Source of Truth Decision/);
  assert.match(step02, /HALT . Access and Permission Approval/);
  assert.match(step02, /HALT . Sensitive Data Classification/);
  assert.match(step02, /HALT . Freshness and Reliability Expectation/);
  assert.match(step02, /HALT . Source Quality Unknown/);
  assert.match(step02, /HALT . Schema Change Behavior/);
  assert.match(step02, /HALT . Cost, License, or Usage Limit/);
  assert.match(step03, /HALT - Checklist/);
  assert.match(step03, /des-domain-modeling/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /Do not design ingestion pipelines/i);
});
