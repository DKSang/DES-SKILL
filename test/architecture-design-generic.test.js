const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-architecture-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-architecture-design uses generic Phase 7 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-architecture-design/SKILL.md");
  const customize = AlecRead("skills/des-architecture-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-architecture-options-and-decisions.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /07-architecture-decision-record\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-architecture-design"/);
  assert.match(customize, /phase = 7/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/07-architecture-decision-record\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/07-architecture-decision-record-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/07-architecture-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-ingestion-design"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/05-data-source-inventory\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/06-conceptual-domain-model\.md/);
});

test("architecture decision record template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/07-architecture-decision-record-template.md");
  const checklist = AlecRead("checklists/07-architecture-design-checklist.md");

  for (const section of [
    "Architecture Summary",
    "Decision Context",
    "Architecture Goals",
    "Architecture Principles",
    "Target Architecture Overview",
    "Lifecycle Alignment",
    "Environment Strategy",
    "Storage Strategy",
    "Compute Strategy",
    "Batch Streaming and Event Strategy",
    "Integration Pattern",
    "Layer Strategy",
    "Serving Strategy",
    "Orchestration Boundary",
    "Observability Direction",
    "Security and Privacy Posture",
    "Governance and Metadata Direction",
    "DataOps and Software Engineering Direction",
    "Build Versus Buy Considerations",
    "Technology Constraints and Options",
    "Architecture Decisions",
    "Trade-Offs",
    "Reversibility Classification",
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
    "Phase 5 Data Source Inventory exists",
    "Phase 6 Conceptual Domain Model exists",
    "P1 product outputs are identified",
    "The artifact does not design detailed ingestion pipeline",
    "Missing upstream architecture context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("architecture design step files enforce architecture decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-architecture-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-architecture-design/steps/step-02-architecture-options-and-decisions.md");
  const step03 = AlecRead("skills/des-architecture-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /06-conceptual-domain-model\.md/);
  assert.match(step02, /HALT - Target Platform Direction/);
  assert.match(step02, /HALT - Environment Strategy Decision/);
  assert.match(step02, /HALT - Storage Strategy Decision/);
  assert.match(step02, /HALT - Compute Strategy Decision/);
  assert.match(step02, /HALT - Batch, Streaming, or Event Strategy/);
  assert.match(step02, /HALT - Layer Strategy Decision/);
  assert.match(step02, /HALT - Serving Direction Approval/);
  assert.match(step02, /HALT - Security and Privacy Policy/);
  assert.match(step02, /HALT - Cost and FinOps Constraint/);
  assert.match(step02, /HALT - Team Capability and Operational Gate/);
  assert.match(step02, /HALT - Hard-To-Reverse Architectural Decision/);
  assert.match(step03, /HALT - Checklist/);
  assert.match(step03, /des-ingestion-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /design physical schemas/i);
  assert.match(combined, /detailed ingestion pipeline/i);
});
