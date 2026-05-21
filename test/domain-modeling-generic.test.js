const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-domain-modeling");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-domain-modeling uses generic Phase 6 artifact paths and step names", () => {
  const skill = read("skills/des-domain-modeling/SKILL.md");
  const customize = read("skills/des-domain-modeling/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-domain-concepts-and-relationships.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /06-conceptual-domain-model\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-domain-modeling"/);
  assert.match(customize, /phase = 6/);
  assert.match(customize, /output_file = "\.agents\/des-skill\/output\/06-conceptual-domain-model\.md"/);
  assert.match(customize, /template_file = "\.agents\/des-skill\/templates\/06-conceptual-domain-model-template\.md"/);
  assert.match(customize, /checklist_file = "\.agents\/des-skill\/checklists\/06-domain-modeling-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-architecture-design"/);
  assert.match(customize, /\.agents\/des-skill\/output\/01-business-discovery-brief\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/02-business-question-catalog\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/04-data-product-specification\.md/);
  assert.match(customize, /\.agents\/des-skill\/output\/05-data-source-inventory\.md/);
});

test("conceptual domain model template and checklist cover generic required sections", () => {
  const template = read("templates/06-conceptual-domain-model-template.md");
  const checklist = read("checklists/06-domain-modeling-checklist.md");

  for (const section of [
    "Domain Model Summary",
    "Domain Scope",
    "Business Glossary",
    "Core Entities",
    "Domain Events",
    "Value Objects and Attributes",
    "Relationships",
    "Conceptual Grains",
    "Identifiers and Identity Rules",
    "Source Alignment",
    "Source of Truth Mapping",
    "Terminology Conflicts",
    "Domain Rules",
    "Lifecycle and State Definitions",
    "Temporal Concepts",
    "Ownership and Stewardship",
    "Downstream Use Case Mapping",
    "Modeling Assumptions",
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
    "Phase 4 Data Product Specification exists",
    "Phase 5 Data Source Inventory exists",
    "P1 product outputs are identified",
    "The artifact does not design physical tables",
    "Missing source context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("conceptual domain modeling step files enforce domain decisions and no physical design", () => {
  const step01 = read("skills/des-domain-modeling/steps/step-01-context-and-readiness.md");
  const step02 = read("skills/des-domain-modeling/steps/step-02-domain-concepts-and-relationships.md");
  const step03 = read("skills/des-domain-modeling/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /05-data-source-inventory\.md/);
  assert.match(step02, /HALT — Business Term Ambiguity/);
  assert.match(step02, /HALT — Core Entity Identity Required/);
  assert.match(step02, /HALT — Conceptual Grain Approval/);
  assert.match(step02, /HALT — Source of Truth Mapping/);
  assert.match(step02, /HALT — Relationship Ambiguity/);
  assert.match(step02, /HALT — Domain Event Definition/);
  assert.match(step02, /HALT — Temporal Concept Approval/);
  assert.match(step02, /HALT — Lifecycle or State Definition/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-architecture-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /design physical schemas/i);
  assert.match(combined, /database tables/i);
});
