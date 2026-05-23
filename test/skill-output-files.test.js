const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function listSkillDirs(rootDir) {
  return fs.readdirSync(path.join(repoRoot, rootDir), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(repoRoot, rootDir, name, "SKILL.md")))
    .sort();
}

function readTomlValue(content, key) {
  const match = content.match(new RegExp(`^${key}\\s*=\\s*"([^"]+)"`, "m"));
  return match ? match[1] : null;
}

function regexpEscape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("phase skills declare concrete output files", () => {
  for (const skill of listSkillDirs("skills")) {
    const skillDir = path.join(repoRoot, "skills", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const customizePath = path.join(skillDir, "customize.toml");

    if (!fs.existsSync(customizePath)) {
      continue;
    }

    const skillContent = readText(skillPath);
    const customizeContent = readText(customizePath);
    const outputFile = readTomlValue(customizeContent, "output_file");
    const templateFile = readTomlValue(customizeContent, "template_file");

    if (!outputFile) {
      continue;
    }

    assert.match(skillContent, /## Output(?: File)?/, `${skill} is missing Output section`);
    assert.match(skillContent, /output_file|_des-output\/planning-artifacts/, `${skill} should reference output_file or a planning artifact path`);
    assert.match(outputFile, /_des-output\/planning-artifacts\//, `${skill} output_file should be a planning artifact`);

    if (templateFile && templateFile.includes("_des/templates/")) {
      assert.match(templateFile, /_des\/templates\//, `${skill} template_file should point to _des/templates`);
    }
  }
});

test("support skills declare implementation artifact outputs", () => {
  for (const skill of listSkillDirs("skills-support")) {
    const skillDir = path.join(repoRoot, "skills-support", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const customizePath = path.join(skillDir, "customize.toml");

    assert.ok(fs.existsSync(skillPath), `${skill} is missing SKILL.md`);
    assert.ok(fs.existsSync(customizePath), `${skill} is missing customize.toml`);

    const skillContent = readText(skillPath);
    const customizeContent = readText(customizePath);
    const outputFile = readTomlValue(customizeContent, "output_file") || readTomlValue(customizeContent, "optional_output_file");
    const statusFile = readTomlValue(customizeContent, "status_file") || readTomlValue(customizeContent, "workflow_status_file");

    assert.match(skillContent, /## Output(?: File)?/, `${skill} is missing Output section`);
    assert.ok(outputFile || statusFile, `${skill} should declare an output_file, optional_output_file, or status_file`);

    if (outputFile) {
      assert.match(outputFile, /_des-output\/implementation-artifacts\//, `${skill} output file should be an implementation artifact`);
      assert.match(skillContent, /implementation-artifacts|direct response/i, `${skill} should describe implementation artifact output`);
    }

    if (statusFile) {
      assert.match(statusFile, /_des-output\/implementation-artifacts\//, `${skill} status file should be an implementation artifact`);
    }
  }
});

test("support skills use DES-style multi-step guardrails", () => {
  for (const skill of listSkillDirs("skills-support")) {
    const skillDir = path.join(repoRoot, "skills-support", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const stepsDir = path.join(skillDir, "steps");
    const skillContent = readText(skillPath);
    const stepFiles = fs.readdirSync(stepsDir).filter((name) => /^step-\d{2}-.+\.md$/.test(name));
    const combinedStepContent = stepFiles
      .map((name) => readText(path.join(stepsDir, name)))
      .join("\n");
    const searchable = `${skillContent}\n${combinedStepContent}`.toLowerCase();

    assert.ok(stepFiles.length >= 3, `${skill} should have at least 3 workflow steps`);
    assert.match(skillContent, /## Process Overview/, `${skill} should describe process overview`);
    assert.match(skillContent, /## Guardrails/, `${skill} should define guardrails`);
    assert.match(skillContent, /## HALT Policy/, `${skill} should define HALT policy`);
    assert.ok(searchable.includes("halt"), `${skill} should include HALT guardrails`);
  }
});
