const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-requirements-and-kpis");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-requirements-and-kpis uses generic Phase 3 artifact paths and step names", () => {
  const skill = read("skills/des-requirements-and-kpis/SKILL.md");
  const customize = read("skills/des-requirements-and-kpis/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-requirements-and-kpi-definition.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /03-requirements-and-kpi-catalog\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-requirements-and-kpis"/);
  assert.match(customize, /phase = 3/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/03-requirements-and-kpi-catalog-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/03-requirements-and-kpis-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-data-product-definition"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
});

test("requirements and KPIs template and checklist cover generic required sections", () => {
  const template = read("templates/03-requirements-and-kpi-catalog-template.md");
  const checklist = read("checklists/03-requirements-and-kpis-checklist.md");

  for (const section of [
    "Requirement Summary",
    "Functional Requirements",
    "Non-Functional Requirements",
    "KPI and Metric Catalog",
    "Metric Definitions",
    "Metric Grain",
    "Metric Ownership",
    "Business Question Mapping",
    "Consumer Mapping",
    "Acceptance Criteria",
    "Freshness and SLA Expectations",
    "Quality Expectations",
    "Security and Privacy Constraints",
    "Cost and Performance Constraints",
    "Requirement Traceability",
    "Conflicts",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery artifact exists",
    "Phase 2 Business Question Catalog exists",
    "Each P1 business question maps to at least one functional requirement",
    "Each approved KPI has a formula or clear definition",
    "The catalog does not design Gold tables",
    "The catalog does not choose final data sources",
    "KPI formula HALT resolved or KPI remains Candidate/Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("requirements and KPIs step files enforce metric decisions and no downstream design", () => {
  const step01 = read("skills/des-requirements-and-kpis/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-requirements-and-kpis/steps/step-02-requirements-and-kpi-definition.md");
  const step03 = read("skills/des-requirements-and-kpis/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Missing or Weak Business Questions/);
  assert.match(step01, /02-business-question-catalog\.md/);
  assert.match(step02, /HALT - KPI Formula Required/);
  assert.match(step02, /HALT - Metric Grain Required/);
  assert.match(step02, /HALT - Metric Owner Required/);
  assert.match(step02, /HALT - Freshness and SLA Approval/);
  assert.match(step02, /HALT - Metric Conflict/);
  assert.match(step02, /HALT - Acceptance Criteria Required/);
  assert.match(step03, /HALT - Checklist/);
  assert.match(step03, /des-data-product-definition/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /Do not design tables, sources, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code/);
});
