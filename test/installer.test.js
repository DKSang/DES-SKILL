const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const cliPath = path.join(repoRoot, "bin", "des-skill.js");
const packageJson = require("../package.json");

test("package version is 0.2.2", () => {
  assert.equal(packageJson.version, "0.2.2");
});

test("prints help from the top-level help flag", () => {
  const output = execFileSync(process.execPath, [cliPath, "--help"], {
    cwd: repoRoot,
    encoding: "utf8"
  });

  assert.match(output, /des-skill install/);
  assert.doesNotMatch(output, /BMAD/);
});

test("prints DES branding during install", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, ".agents", "skills");

  try {
    const output = execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
      cwd: tmpRoot,
      encoding: "utf8"
    });

    assert.match(output, /DES-SKILL/);
    assert.match(output, /Data Engineering Superpowers/);
    assert.match(output, /DES is ready to use/);
    assert.doesNotMatch(output, /BMAD/);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("installs all top-level skills into the requested directory", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, "skills");

  try {
    execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
      cwd: repoRoot,
      encoding: "utf8"
    });

    assert.ok(fs.existsSync(path.join(target, "using-des-skill", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-business-discovery", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-ingestion-design", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-create-epic", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-artifact-quiz", "SKILL.md")));
    assert.equal(fs.existsSync(path.join(target, "des-skill", "SKILL.md")), false);
    assert.equal(fs.existsSync(path.join(target, ".gh-skill-install-test")), false);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("creates a DES-style workspace next to installed skills", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, ".agents", "skills");

  try {
    execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
      cwd: tmpRoot,
      encoding: "utf8"
    });

    const workspace = path.join(tmpRoot, "_des");
    assert.ok(fs.existsSync(path.join(workspace, "config.toml")));
    assert.ok(fs.existsSync(path.join(workspace, "config.user.toml")));
    assert.ok(fs.existsSync(path.join(workspace, "_config")));
    assert.ok(fs.existsSync(path.join(workspace, "method", "using-des-skill", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(workspace, "support", "des-create-epic", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(workspace, "learning", "des-artifact-quiz", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "01-business-discovery-brief-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "22-project-evaluation-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "00-workflow-status-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "checklists", "01-business-discovery-checklist.md")));
    assert.ok(fs.existsSync(path.join(workspace, "docs", "workflow-modes.md")));
    assert.ok(fs.existsSync(path.join(workspace, "workflows", "new-project-workflow.md")));
    assert.ok(fs.existsSync(path.join(workspace, "examples", "example_iot_project.md")));
    assert.ok(fs.existsSync(path.join(workspace, "knowledge", "FUNDAMENTALS-MAP.md")));
    assert.ok(fs.existsSync(path.join(workspace, "DES-WORKFLOW.md")));
    assert.ok(fs.existsSync(path.join(workspace, "ARTIFACTS.md")));
    assert.ok(fs.existsSync(path.join(workspace, "SOUL.md")));
    assert.equal(fs.existsSync(path.join(tmpRoot, ".agents", "des-skill")), false);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("refuses to overwrite existing skills unless force is set", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, "skills");

  try {
    execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
      cwd: repoRoot,
      encoding: "utf8"
    });

    assert.throws(
      () => execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: "pipe"
      }),
      /already exists/
    );

    execFileSync(process.execPath, [cliPath, "install", "--dir", target, "--force"], {
      cwd: repoRoot,
      encoding: "utf8"
    });
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("scaffolds a full DES workspace using the init command", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, ".agents", "skills");

  try {
    execFileSync(process.execPath, [cliPath, "init", "--dir", target], {
      cwd: tmpRoot,
      encoding: "utf8"
    });

    assert.ok(fs.existsSync(path.join(target, "using-des-skill", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-business-discovery", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-create-epic", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-artifact-quiz", "SKILL.md")));

    assert.ok(fs.existsSync(path.join(tmpRoot, "_des")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des", "config.toml")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "planning-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "implementation-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "learning-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "test-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "implementation-artifacts", "des-workflow-status.md")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "docs")));

    const configContent = fs.readFileSync(path.join(tmpRoot, "_des", "config.toml"), "utf8");
    assert.match(configContent, /planning_artifacts = "_des-output\/planning-artifacts"/);
    assert.match(configContent, /learning_artifacts = "_des-output\/learning-artifacts"/);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("scaffolds the four project folders when run without a command", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));

  try {
    execFileSync(process.execPath, [cliPath], {
      cwd: tmpRoot,
      encoding: "utf8"
    });

    assert.ok(fs.existsSync(path.join(tmpRoot, "_des")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output")));
    assert.ok(fs.existsSync(path.join(tmpRoot, ".agents")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "docs")));
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});
