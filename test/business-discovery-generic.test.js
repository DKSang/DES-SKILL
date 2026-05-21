const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-business-discovery");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-business-discovery uses generic Phase 1 artifact paths and step names", () => {
  const skill = read("skills/des-business-discovery/SKILL.md");
  const customize = read("skills/des-business-discovery/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-discovery-decisions.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /01-business-discovery-brief\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-business-discovery"/);
  assert.match(customize, /phase = 1/);
  assert.match(customize, /output_file = "\.agents\/des-skill\/output\/01-business-discovery-brief\.md"/);
  assert.match(customize, /template_file = "\.agents\/des-skill\/templates\/01-business-discovery-brief-template\.md"/);
  assert.match(customize, /checklist_file = "\.agents\/des-skill\/checklists\/01-business-discovery-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-business-questions"/);
});

test("business discovery template and checklist cover generic required sections", () => {
  const template = read("templates/01-business-discovery-brief-template.md");
  const checklist = read("checklists/01-business-discovery-checklist.md");

  for (const section of [
    "Project Intent",
    "Business Problem",
    "Stakeholders and Consumers",
    "Target Decisions or Use Cases",
    "Expected Value",
    "Data Maturity Context",
    "Scope",
    "Non-Scope",
    "Constraints",
    "Assumptions",
    "Risks",
    "Initial Success Criteria",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Project intent is defined",
    "Business problem is stated in non-technical language",
    "The artifact does not jump into schema design",
    "The artifact does not prescribe ingestion implementation",
    "No missing business decision is silently invented",
    "Project intent HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("business discovery step files enforce readiness decisions and no technical design", () => {
  const step01 = read("skills/des-business-discovery/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-business-discovery/steps/step-02-discovery-decisions.md");
  const step03 = read("skills/des-business-discovery/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Project Intent Required/);
  assert.match(step01, /Portfolio \/ learning project/);
  assert.match(step02, /HALT - Primary Consumer Priority/);
  assert.match(step02, /HALT - Target Decision or Use Case Approval/);
  assert.match(step02, /HALT - Value Statement Required/);
  assert.match(step02, /HALT - MVP Scope Boundary/);
  assert.match(step02, /HALT - Maturity Level/);
  assert.match(step02, /HALT - Success Criteria/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-business-questions/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /Do not design physical tables, pipelines, architecture, contracts, or serving layers/);
});
