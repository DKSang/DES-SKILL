# Thiết Kế CI/CD Pipeline

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. CI pipeline stages
- Lint và format check
- Unit test run
- Contract test check
- DQ rule validation (staging data)
- Schema migration check

### 2. CD pipeline stages
- Deploy to staging → run integration tests → approve
- Deploy to production → smoke test → alert if FAIL

### 3. Branching strategy
- Feature branch → PR → CI → merge to main → CD
- Hotfix path cho production incidents

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận CI/CD design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
