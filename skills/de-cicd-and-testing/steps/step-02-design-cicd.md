# Thiết Kế CI/CD Pipeline

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Production deploy phải đi qua staging validation và release evidence.
- HALT nếu secrets, rollback, or promotion approvals chưa rõ.

## Hướng dẫn

### 1. CI pipeline stages

| Stage | Checks | Block merge? |
| :--- | :--- | :--- |
| Static | lint, format, secret scan, dependency scan | Yes |
| Unit | transformation/unit business rule tests | Yes |
| Contract | schema/semver/compatibility tests | Yes |
| DQ config | rule syntax, owners, actions, thresholds valid | Yes |
| Build/package | dbt compile, DAG parse, bundle validate | Yes |

### 2. CD pipeline stages

| Environment | Required gates | Evidence |
| :--- | :--- | :--- |
| Dev | deploy package, smoke run | deploy log |
| Staging | integration run, DQ FAIL=0, contract tests, backfill/idempotency sample | validation report |
| Production | approval, deploy, smoke test, monitor window | release record |

### 3. Tooling-specific guidance

| Stack | CI/CD implementation |
| :--- | :--- |
| GitHub + dbt | GitHub Actions + dbt build/test + Slim CI |
| Azure DevOps/Fabric | Azure Pipelines + Fabric Deployment Pipelines |
| Databricks | Databricks Asset Bundles + jobs validation |
| Airflow | DAG parse tests + staging DAG run |
| Great Expectations/Soda | validation suite run in PR/staging |

### 4. Secrets and rollback

| Area | Requirement |
| :--- | :--- |
| Secrets | OIDC/vault integration; no secrets in repo, logs, or visible env output |
| Rollback code | git revert + redeploy |
| Rollback data | table time travel, partition restore, or snapshot restore |
| Rollback evidence | rehearsed in staging with expected duration |

### 5. HALT — release control review

Trình bày:

| Gate | Pass condition | Gap |
| :--- | :--- | :--- |
| CI blocks breaking contracts | Yes/No |  |
| Staging validates end-to-end | Yes/No |  |
| Secrets managed safely | Yes/No |  |
| Rollback rehearsed | Yes/No |  |
| Release evidence retained | Yes/No |  |

Menu:
- **[C] Tiếp tục**: Xác nhận CI/CD design, chuyển sang soạn thảo.
- **[S] Sửa secrets**: Hoàn thiện vault/OIDC/secret scan.
- **[R] Sửa rollback**: Bổ sung code/data rollback rehearsal.
- **[P] Sửa promotion gates**: Hoàn thiện staging/prod approvals.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
