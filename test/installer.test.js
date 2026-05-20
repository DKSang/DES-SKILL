const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const cliPath = path.join(repoRoot, "bin", "des-skill.js");

test("prints help from the top-level help flag", () => {
  const output = execFileSync(process.execPath, [cliPath, "--help"], {
    cwd: repoRoot,
    encoding: "utf8"
  });

  assert.match(output, /des-skill install/);
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
    assert.ok(fs.existsSync(path.join(target, "de-business-discovery", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "de-ingestion-design", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-skill", "SKILL.md")));
    assert.equal(fs.existsSync(path.join(target, ".gh-skill-install-test")), false);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("creates the project support workspace next to installed skills", () => {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "des-skill-test-"));
  const target = path.join(tmpRoot, ".agents", "skills");

  try {
    execFileSync(process.execPath, [cliPath, "install", "--dir", target], {
      cwd: tmpRoot,
      encoding: "utf8"
    });

    const workspace = path.join(tmpRoot, ".agents", "des-skill");
    assert.ok(fs.existsSync(path.join(workspace, "output")));
    assert.ok(fs.existsSync(path.join(workspace, "planning")));
    assert.ok(fs.existsSync(path.join(workspace, "sprint-status")));
    assert.ok(fs.existsSync(path.join(workspace, "sprint-status", "des-workflow-status.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "01-business-discovery-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "22-project-evaluation-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "templates", "00-workflow-status-template.md")));
    assert.ok(fs.existsSync(path.join(workspace, "checklists", "business_readiness_checklist.md")));
    assert.ok(fs.existsSync(path.join(workspace, "workflows", "new-project-workflow.md")));
    assert.ok(fs.existsSync(path.join(workspace, "examples", "example_iot_project.md")));
    assert.ok(fs.existsSync(path.join(workspace, "DES-WORKFLOW.md")));
    assert.ok(fs.existsSync(path.join(workspace, "ARTIFACTS.md")));
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
    assert.ok(fs.existsSync(path.join(target, "de-business-discovery", "SKILL.md")));

    assert.ok(fs.existsSync(path.join(tmpRoot, "_des")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des", "config.toml")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "planning-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "_des-output", "implementation-artifacts")));
    assert.ok(fs.existsSync(path.join(tmpRoot, "docs")));

    const configContent = fs.readFileSync(path.join(tmpRoot, "_des", "config.toml"), "utf8");
    assert.match(configContent, /planning_artifacts = "_des-output\/planning-artifacts"/);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});
