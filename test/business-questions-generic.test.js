const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-business-questions");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-business-questions uses generic Phase 2 artifact paths and step names", () => {
  const skill = read("skills/des-business-questions/SKILL.md");
  const customize = read("skills/des-business-questions/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-question-discovery-and-prioritization.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /02-business-question-catalog\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-business-questions"/);
  assert.match(customize, /phase = 2/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/02-business-question-catalog\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/02-business-question-catalog-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/02-business-questions-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-requirements-and-kpis"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
});

test("business questions template and checklist cover generic required sections", () => {
  const template = read("templates/02-business-question-catalog-template.md");
  const checklist = read("checklists/02-business-questions-checklist.md");

  for (const section of [
    "Question Summary",
    "Prioritized Business Questions",
    "Question Classification",
    "Consumer Mapping",
    "Decision Mapping",
    "Expected Answer Format",
    "Candidate Metrics",
    "Freshness Expectations",
    "Grain Hints",
    "Source Hints",
    "Dependencies",
    "Out of Scope Questions",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery artifact exists",
    "Each P1 question maps to a consumer",
    "The catalog does not define final KPI formulas",
    "The catalog does not design Gold tables",
    "The catalog does not choose final data sources",
    "Question priority HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("business questions step files enforce Phase 2 decisions and no downstream design", () => {
  const step01 = read("skills/des-business-questions/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-business-questions/steps/step-02-question-discovery-and-prioritization.md");
  const step03 = read("skills/des-business-questions/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Missing or Weak Phase 1 Context/);
  assert.match(step01, /01-business-discovery-brief\.md/);
  assert.match(step02, /HALT - Question Priority Approval/);
  assert.match(step02, /HALT - Scope Conflict/);
  assert.match(step02, /HALT - Answerability Risk/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-requirements-and-kpis/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /Do not define final KPI formulas/);
  assert.match(combined, /Do not design tables, sources, pipelines, dashboards, semantic models, APIs, ML models, contracts, or code/);
});
