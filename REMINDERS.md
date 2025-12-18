# Developer Protocol & Reminders

**CRITICAL: READ BEFORE EVERY SESSION**

This file serves as the strict operational protocol for the "Football Analytics Platform" project.

## 1. Git Hygiene
*   **COMMIT FREQUENTLY:** Never leave work uncommitted at the end of a response/task.
*   **PUSH REMINDER:** After every commit, remind the user to push from their own terminal (since I cannot push directly).
*   **USER PUSH:** The user is responsible for executing `git push` to ensure remote synchronization.
*   **DETAILED MESSAGES:** Commit messages must explain *why* a change was made, not just *what* changed.
    *   *Bad:* "Updated file."
    *   *Good:* "feat(scoring): Implemented weight adjustment for goalkeeper distribution metric."

## 2. Documentation Sync
*   **UPDATE DOCS:** If code changes, the corresponding documentation in `docs/` MUST be updated immediately.
*   **REFLECT ARCHITECTURE:** If a folder moves or a schema changes, update `docs/ARCHITECTURE.md` or `docs/backend/schema.md`.

## 3. Version Control
*   **BUMP VERSION:** For every significant update (new feature, bug fix, major refactor), update the `version` field in:
    *   `package.json` (Root)
    *   `client/package.json` (Frontend)
    *   `server/pyproject.toml` (or equivalent)

## 4. Quality Assurance
*   **NO BROKEN BUILDS:** Ensure the application builds before ending a session.
*   **LINT/FORMAT:** Run standard linters before committing.

---
*Signed: The Full-Stack Architect & The Data Engineer*
