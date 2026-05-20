# Soạn Thảo CI/CD Spec và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 21 completed nếu contract tests, DQ gates, staging validation, secrets management, rollback, hoặc release evidence thiếu.
- HALT nếu any production release path bypasses CI/CD.

## Hướng dẫn

### 1. Dùng output format chuẩn của skill
Skill này không có template riêng. Soạn `21-cicd-and-testing.md` theo cấu trúc:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Test matrix | all layers, tool, trigger, blocking status |
| CI stages | static/unit/contract/DQ/build gates |
| CD stages | dev/staging/production promotion gates |
| Contract enforcement | semver and compatibility checks |
| Secrets | vault/OIDC/secret scan/no-log policy |
| Rollback | code + data rollback procedure and rehearsal evidence |
| Release evidence | CI run, staging report, approvals, smoke test |

### 2. CI/CD quality gate

| Gate | Pass condition |
| :--- | :--- |
| Automated tests | Critical DQ/contracts/metrics/backfill tests automated |
| Promotion | Staging pass required before production |
| Security | Secret scan and vault integration defined |
| Rollback | Code and data rollback rehearsed |
| Evidence | Release artifacts retained and auditable |
| Ownership | Approvers and owners named |

Nếu gate fail, HALT và không update status completed.

### 3. Evaluation handoff package

| Evaluation handoff item | Required value |
| :--- | :--- |
| Latest CI run evidence |  |
| Staging validation results |  |
| DQ/contract pass rates |  |
| Rollback rehearsal result |  |
| Known release risks |  |

### 4. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `21-cicd-and-testing.md`.
- Update workflow status cho Phase 21 là completed.

### 5. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-project-evaluation`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện tests/promotion/secrets/rollback.

HALT và chờ người dùng chọn.
