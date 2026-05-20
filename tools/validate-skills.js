#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const skillsDir = path.join(root, "skills");
const workflowPath = path.join(root, "DES-WORKFLOW.md");

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`PASS ${message}`);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function listSkillNames() {
  if (!fs.existsSync(skillsDir)) {
    fail("skills/ directory is missing");
    return [];
  }

  return fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const fields = {};
  for (const line of match[1].split("\n")) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (item) fields[item[1]] = item[2].trim();
  }

  return fields;
}

function validateSkill(skillName) {
  const skillPath = path.join(skillsDir, skillName, "SKILL.md");
  if (!fs.existsSync(skillPath)) {
    fail(`${skillName} is missing SKILL.md`);
    return;
  }

  const content = read(skillPath);
  const frontmatter = parseFrontmatter(content);

  if (!frontmatter) {
    fail(`${skillName} is missing YAML frontmatter`);
    return;
  }

  if (frontmatter.name !== skillName) {
    fail(`${skillName} frontmatter name must match directory name`);
  }

  if (!frontmatter.description) {
    fail(`${skillName} is missing description`);
  } else if (!frontmatter.description.startsWith("Use when")) {
    fail(`${skillName} description should start with "Use when"`);
  }

  for (const heading of ["## When To Use", "## Purpose", "## Quality Checklist", "## Common Mistakes To Avoid"]) {
    if (!content.includes(heading)) {
      fail(`${skillName} is missing heading: ${heading}`);
    }
  }

  if (!content.includes("## Handoff To The Next Skill") && skillName !== "using-des-skill") {
    fail(`${skillName} is missing handoff guidance`);
  }
}

function validateWorkflow(skillNames) {
  if (!fs.existsSync(workflowPath)) {
    fail("DES-WORKFLOW.md is missing");
    return;
  }

  const workflow = read(workflowPath);
  const referenced = Array.from(workflow.matchAll(/`(de-[a-z0-9-]+|using-des-skill)`/g)).map((match) => match[1]);
  const uniqueReferenced = [...new Set(referenced)];

  for (const name of uniqueReferenced) {
    if (!skillNames.includes(name)) {
      fail(`DES-WORKFLOW.md references missing skill: ${name}`);
    }
  }

  if (!workflow.includes("using-des-skill")) {
    fail("DES-WORKFLOW.md should reference using-des-skill as the entrypoint");
  }
}

function validatePackage() {
  const packagePath = path.join(root, "package.json");
  if (!fs.existsSync(packagePath)) {
    fail("package.json is missing");
    return;
  }

  const packageJson = JSON.parse(read(packagePath));
  if (!packageJson.bin || !packageJson.bin["des-skill"]) {
    fail("package.json must expose des-skill binary");
  }

  for (const required of ["skills/", "templates/", "DES-WORKFLOW.md", "README.md", "LICENSE"]) {
    if (!packageJson.files || !packageJson.files.includes(required)) {
      fail(`package.json files should include ${required}`);
    }
  }
}

function main() {
  const skillNames = listSkillNames();

  for (const skillName of skillNames) {
    validateSkill(skillName);
  }

  validateWorkflow(skillNames);
  validatePackage();

  if (failures > 0) {
    console.error(`\n${failures} validation issue(s) found.`);
    process.exitCode = 1;
    return;
  }

  pass(`Validated ${skillNames.length} skills and workflow references.`);
}

main();
