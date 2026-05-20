#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const skillsDir = path.join(root, "skills");
const strict = process.argv.includes("--strict");

let issues = 0;

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractChecklistFile(customizeContent) {
  const match = customizeContent.match(/^checklist_file\s*=\s*"([^"]+)"/m);
  if (!match) return null;
  return match[1];
}

function normalizeConfiguredPath(configuredPath, skillDir) {
  return configuredPath
    .replace("{skill-root}", skillDir)
    .replace("{project-root}", root);
}

function auditSkill(skillName) {
  const skillDir = path.join(skillsDir, skillName);
  const customizePath = path.join(skillDir, "customize.toml");
  const skillPath = path.join(skillDir, "SKILL.md");

  if (!fs.existsSync(skillPath) || !fs.existsSync(customizePath)) return;

  const customizeContent = read(customizePath);
  const checklistConfiguredPath = extractChecklistFile(customizeContent);

  if (!checklistConfiguredPath) {
    console.log(`WARN ${skillName}: customize.toml has no checklist_file`);
    issues += 1;
    return;
  }

  const resolvedChecklistPath = path.resolve(normalizeConfiguredPath(checklistConfiguredPath, skillDir));
  const checklistBasename = path.basename(checklistConfiguredPath);

  if (!fs.existsSync(resolvedChecklistPath)) {
    console.log(`FAIL ${skillName}: checklist file does not exist: ${checklistConfiguredPath}`);
    issues += 1;
    return;
  }

  const markdownFiles = [skillPath, ...walkFiles(path.join(skillDir, "steps"))];
  const combined = markdownFiles.map(read).join("\n");

  const hasDirectChecklistCall = [
    "checklist_file",
    checklistConfiguredPath,
    checklistBasename,
    "Run Quality Checklist",
    "Load Local Template and Checklist",
    "checklist validation report",
    "definition-of-done-checklist.md",
    "implementation-readiness-checklist.md"
  ].some((needle) => combined.includes(needle));

  if (!hasDirectChecklistCall) {
    console.log(`WARN ${skillName}: no direct checklist call found in SKILL.md or steps/ for ${checklistBasename}`);
    issues += 1;
  } else {
    console.log(`PASS ${skillName}: checklist is configured and referenced`);
  }
}

if (!fs.existsSync(skillsDir)) {
  console.error("FAIL skills/ directory is missing");
  process.exit(1);
}

const skillNames = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const skillName of skillNames) {
  auditSkill(skillName);
}

if (issues > 0) {
  const message = `${issues} checklist usage issue(s) found.`;
  if (strict) {
    console.error(`\n${message}`);
    process.exitCode = 1;
  } else {
    console.log(`\n${message}`);
    console.log("Run with --strict to fail on warnings.");
  }
} else {
  console.log("\nPASS All configured checklist files are referenced by their skills.");
}
