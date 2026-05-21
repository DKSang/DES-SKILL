const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-data-product-definition");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-data-product-definition uses generic Phase 4 artifact paths and step names", () => {
  const skill = read("skills/des-data-product-definition/SKILL.md");
  const customize = read("skills/des-data-product-definition/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-product-boundary-and-service-design.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /04-data-product-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-data-product-definition"/);
  assert.match(customize, /phase = 4/);
  assert.match(customize, /output_file = "\.agents\/des-skill\/output\/04-data-product-specification\.md"/);
  assert.match(customize, /template_file = "\.agents\/des-skill\/templates\/04-data-product-specification-template\.md"/);
  assert.match(customize, /checklist_file = "\.agents\/des-skill\/checklists\/04-data-product-definition-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-data-source-assessment"/);
  assert.match(customize, /\.agents\/des-skill\/output\/01-business-discovery-brief\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/02-business-question-catalog\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/03-requirements-and-kpi-catalog\.md/);
});

test("data product specification template and checklist cover generic required sections", () => {
  const template = read("templates/04-data-product-specification-template.md");
  const checklist = read("checklists/04-data-product-definition-checklist.md");

  for (const section of [
    "Data Product Summary",
    "Product Intent",
    "Primary and Secondary Consumers",
    "Supported Use Cases",
    "Business Question and Requirement Mapping",
    "Product Outputs",
    "Product Boundary",
    "Non-Scope",
    "Service Expectations",
    "Freshness and SLA Expectations",
    "Quality and Trust Expectations",
    "Access and Serving Expectations",
    "Ownership and Stewardship",
    "Lifecycle Status",
    "Dependencies",
    "Data Contract Expectations",
    "Governance and Security Considerations",
    "Success Criteria",
    "Assumptions",
    "Risks",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery artifact exists",
    "Phase 2 Business Question Catalog exists",
    "Phase 3 Requirements and KPI Catalog exists",
    "Data product name and intent are defined",
    "First release output is clearly marked",
    "The artifact does not design physical schemas",
    "Primary consumer HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("data product definition step files enforce product decisions and no downstream design", () => {
  const step01 = read("skills/des-data-product-definition/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-data-product-definition/steps/step-02-product-boundary-and-service-design.md");
  const step03 = read("skills/des-data-product-definition/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Missing or Weak Requirements Context/);
  assert.match(step01, /03-requirements-and-kpi-catalog\.md/);
  assert.match(step02, /HALT - Primary Consumer Approval/);
  assert.match(step02, /HALT - Product Boundary Approval/);
  assert.match(step02, /HALT - First Release Output Approval/);
  assert.match(step02, /HALT - Service Expectation Approval/);
  assert.match(step02, /HALT - Product Owner Required/);
  assert.match(step02, /HALT - Lifecycle Status/);
  assert.match(step02, /HALT - Trust Expectation Required/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-data-source-assessment/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /Do not design physical tables, sources, pipelines, transformations, full data contracts, dashboards, semantic model internals, APIs, application implementation, or code/);
});
