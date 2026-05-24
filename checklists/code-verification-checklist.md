# Code Verification Checklist

Use this checklist whenever a DES-SKILL phase runs lightweight code verification.

## Before Running

- [ ] Verification is allowed for this phase according to `configs/code-verification-matrix.toml`.
- [ ] Verification purpose is clear.
- [ ] Verification is evidence collection, not production implementation.
- [ ] Input scope is small and safe.
- [ ] Operation is read-only unless explicitly approved.
- [ ] Credentials are not stored in code, logs, or artifacts.
- [ ] Sensitive data handling is approved or avoided.
- [ ] Source rate limits and license terms are respected.
- [ ] Timeout/error handling is used.
- [ ] Output evidence location is defined.

## During Running

- [ ] Sample size is limited.
- [ ] No destructive write is executed.
- [ ] No full extraction is executed unless explicitly approved.
- [ ] No source system stress/load test is performed without approval.
- [ ] Secrets are not printed.
- [ ] Raw sensitive records are not copied into evidence.

## After Running

- [ ] Result is recorded in the phase evidence pack.
- [ ] Script path or command is referenced if retained.
- [ ] Output files are referenced.
- [ ] Limitations are documented.
- [ ] Artifact is revised from evidence.
- [ ] Risk is added if result is partial, failed, blocked, or not run.
- [ ] Handoff includes downstream impact.

## Result

Choose one:

- [ ] Pass
- [ ] [ ] Pass with risks
- [ ] Fail
- [ ] Blocked
- [ ] Not run / Waived with reason
