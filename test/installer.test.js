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

    assert.ok(fs.existsSync(path.join(target, "de-business-discovery", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "de-ingestion-design", "SKILL.md")));
    assert.ok(fs.existsSync(path.join(target, "des-skill", "SKILL.md")));
    assert.equal(fs.existsSync(path.join(target, ".gh-skill-install-test")), false);
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
