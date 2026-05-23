const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillsDir = path.join(repoRoot, "skills");
const supportSkillsDir = path.join(repoRoot, "skills-support");

const phaseSkills = [
  "des-business-discovery",
  "des-business-questions",
  "des-requirements-and-kpis",
  "des-data-product-definition",
  "des-data-source-assessment",
  "des-domain-modeling",
  "des-architecture-design",
  "des-ingestion-design",
  "des-bronze-layer-design",
  "des-silver-layer-design",
  "des-gold-layer-design",
  "des-data-contracts",
  "des-transformation-design",
  "des-data-quality",
  "des-orchestration-observability",
  "des-semantic-model-design",
  "des-serving-layer-design",
  "des-lineage-metadata-design",
  "des-governance-and-security",
  "des-cost-and-performance-optimization",
  "des-cicd-and-testing",
  "des-project-evaluation"
];

const supportSkills = [
  "des-code-review",
  "des-correct-course",
  "des-create-epic",
  "des-create-story",
  "des-dev-task-breakdown",
  "des-implementation-plan",
  "des-release-readiness-review",
  "des-retrospective",
  "des-sprint-planning",
  "des-story-readiness-check",
  "des-wise",
  "des-workflow-status-update"
];

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function skillContent(skillName) {
  return read(path.join("skills", skillName, "SKILL.md"));
}

function supportSkillContent(skillName) {
  return read(path.join("skills-support", skillName, "SKILL.md"));
}

test("all DES skills use the des prefix without legacy de skill folders", () => {
  const skillFolders = fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  assert.equal(skillFolders.some((name) => /^de-/.test(name)), false);

  for (const skillName of skillFolders) {
    if (skillName === "using-des-skill") continue;
    assert.match(skillName, /^des-/);
    assert.match(skillContent(skillName), new RegExp(`name: ${skillName}\\b`));
  }
});

test("the 22 canonical phase skills define HALT policy and step-level gates", () => {
  for (const skillName of phaseSkills) {
    const content = skillContent(skillName);
    const stepsDir = path.join(skillsDir, skillName, "steps");
    const stepFiles = fs.existsSync(stepsDir)
      ? fs.readdirSync(stepsDir).filter((name) => /^step-\d{2}-.+\.md$/.test(name)).sort()
      : [];
    const combinedSteps = stepFiles
      .map((name) => fs.readFileSync(path.join(stepsDir, name), "utf8"))
      .join("\n");

    assert.match(content, /## HALT Policy/, `${skillName} missing HALT policy`);
    if (skillName === "des-business-discovery") {
      assert.match(combinedSteps, /## HALT - Project Intent Required/, `${skillName} missing project intent HALT`);
    } else if (skillName === "des-business-questions") {
      assert.match(combinedSteps, /## HALT - Missing or Weak Phase 1 Context/, `${skillName} missing phase 1 context HALT`);
    } else if (skillName === "des-requirements-and-kpis") {
      assert.match(combinedSteps, /## HALT - Missing or Weak Business Questions/, `${skillName} missing phase 2 context HALT`);
    } else if (skillName === "des-data-product-definition") {
      assert.match(combinedSteps, /## HALT - Missing or Weak Requirements Context/, `${skillName} missing requirements context HALT`);
    } else {
      assert.match(combinedSteps, /## HALT (?:-|.) (Readiness Check Failed|Missing or Weak|Upstream Artifact Completeness)/, `${skillName} missing readiness HALT`);
    }
    assert.match(combinedSteps, /## HALT (?:-|.) .*?(Approval|Priority|Definition|Decision|Policy|Completeness|Consistency|Budget|Gate|Required|Unknown|Scope)/s, `${skillName} missing phase-specific decision HALT`);
    assert.match(combinedSteps, /Checklist Blocked|checklist/i, `${skillName} missing validation checklist gate`);
  }
});

test("DES-style support pipeline skills exist", () => {
  for (const skillName of supportSkills) {
    const skillPath = path.join(supportSkillsDir, skillName, "SKILL.md");
    assert.ok(fs.existsSync(skillPath), `${skillName} is missing`);

    const content = supportSkillContent(skillName);
    assert.match(content, /## When To Use/);
    assert.match(content, /## Purpose/);
    assert.match(content, /## (Guardrails|Quality Checklist)/);
  }
});

test("top-level workflow and artifact docs do not reference legacy de skill names", () => {
  for (const relativePath of ["README.md", "DES-WORKFLOW.md", "ARTIFACTS.md", "templates/00-workflow-status-template.md"]) {
    const content = read(relativePath);
    assert.equal(/`de-[a-z0-9-]+`/.test(content), false, `${relativePath} contains legacy de skill reference`);
  }
});
