#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const artifactsPath = path.join(root, "ARTIFACTS.md");
const skillsDir = path.join(root, "skills");

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL ${message}`);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function skillExists(skillName) {
  return fs.existsSync(path.join(skillsDir, skillName, "SKILL.md"));
}

function parseRows(content) {
  const parts = content.split("## Optional Phase Artifacts");
  return parts[0].split("\n")
    .filter((line) => /^\| \d{2} \| `/.test(line))
    .map((line) => {
      const cells = line.split("|").map((cell) => cell.trim());
      return {
        order: cells[1],
        skill: cells[2].replace(/`/g, ""),
        output: cells[3].replace(/`/g, ""),
        template: cells[4].replace(/`/g, "")
      };
    });
}

if (!fs.existsSync(artifactsPath)) {
  fail("ARTIFACTS.md is missing");
} else {
  const rows = parseRows(read(artifactsPath));

  if (rows.length !== 22) {
    fail(`ARTIFACTS.md should define 22 canonical artifacts, found ${rows.length}`);
  }

  for (const row of rows) {
    if (!skillExists(row.skill)) {
      fail(`Missing skill referenced by ARTIFACTS.md: ${row.skill}`);
    }

    if (!row.output.startsWith(`.agents/des-skill/output/${row.order}-`) || !row.output.endsWith(".md")) {
      fail(`Non-canonical output path for ${row.skill}: ${row.output}`);
    }

    const templateRelativePath = row.template.replace(".agents/des-skill/", "");
    if (!fs.existsSync(path.join(root, templateRelativePath))) {
      fail(`Missing template for ${row.skill}: ${templateRelativePath}`);
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} artifact validation issue(s) found.`);
  process.exitCode = 1;
} else {
  console.log("PASS Validated canonical artifact map and templates.");
}
