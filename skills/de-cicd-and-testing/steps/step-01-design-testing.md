# Thiết Kế Testing Strategy

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- FAIL-severity DQ rules và breaking contract violations phải được automation bắt trước production.
- HALT nếu contract/DQ tests chỉ là manual checklist vì không bảo vệ được deployment.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: DQ rules (14), Data contracts (12), Transformation design (13), Orchestration (15), Cost/Performance (20).

### 2. Test matrix

| Test layer | Scope | Tool option | Trigger | Blocking |
| :--- | :--- | :--- | :--- | :--- |
| Unit | transformation business rules | pytest/dbt unit | PR | Yes |
| Schema/contract | fields/types/required/semver | dbt tests/Great Expectations/Soda | PR + staging | Yes |
| DQ | FAIL/QUARANTINE/WARN rules | dbt/Soda/GE/custom SQL | staging + production | FAIL blocks |
| Integration | Bronze -> Silver -> Gold | orchestration staging run | release | Yes |
| Backfill/idempotency | same date window twice | harness + row/hash compare | release | Yes |
| Metric reconciliation | Gold vs Silver/semantic | SQL assertions | release | Yes |
| Performance regression | P90 runtime/query latency | benchmark/staging | release | warn/block per SLA |

### 3. Contract-test enforcement

| Contract change | Required CI check | Block condition |
| :--- | :--- | :--- |
| Schema field added | compatibility test against previous contract | required field added without major bump |
| Field rename/remove/type change | semver major + migration guide check | no consumer approval |
| Metric formula/grain change | semantic reconciliation + owner sign-off | formula mismatch or no approval |
| Freshness/SLA change | monitor threshold updated | SLA weaker without consumer approval |

### 4. Coverage targets

| Critical asset | Coverage target |
| :--- | :--- |
| FAIL DQ rules | 100% automated |
| Contract-required datasets | 100% schema + freshness + owner checks |
| Critical Gold metrics | 100% reconciliation tests |
| SCD2 dimensions | current-row uniqueness + effective-date tests |
| Backfills | idempotency test for every production backfill path |

### 5. HALT — test coverage approval

Trình bày:

| Area | Required tests | Automated? | Blocking? | Gap |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận testing strategy, chuyển sang CI/CD design.
- **[T] Bổ sung tests**: Thêm test thiếu cho contract/DQ/metric/backfill.
- **[B] Sửa blocking policy**: Điều chỉnh what blocks merge/release.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-design-cicd.md`.
