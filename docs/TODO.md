# 📋 Developer TODO List

**Focus:** Phase 2 (Data Engine) & Phase 3 (Visualization)

## 🚨 Immediate Priorities
- [x] **Scaffold Client:** Next.js initialized with Command Center aesthetic.
- [ ] **Scaffold Server:** Initialize Poetry and FastAPI in `/server`.
- [ ] **Environment:** Create `docker-compose.yml` for local DB/Redis.
- [ ] **Tooling:** Configure `eslint`, `prettier`, and `ruff` (Python linter).

## 🛠️ Data Engineering Tasks
- [ ] **Schema Implementation:** Create SQLAlchemy models based on the Data Dictionary.
- [ ] **Migration Setup:** Configure Alembic for database migrations.
- [ ] **Ingestion Script:** Write basic script to load `archetypes.json` into DB.

## 🎨 Frontend Tasks
- [x] **Setup:** Tailwind CSS configured with custom palette (v4).
- [x] **Component:** Basic `Layout` shell (Navbar) implemented.
- [x] **Routing:** App Router structure established.
- [ ] **State:** Set up Zustand stores for player filtering.
- [ ] **Charts:** Implement initial Recharts for market value trends.

## 📝 Documentation
- [x] **Master Data Dictionary:** Complete.
- [x] **Archetypes:** Complete.
- [x] **Frontend Structure:** Documented in `docs/frontend/structure.md`.
- [ ] **API Spec:** Auto-generate OpenAPI JSON from FastAPI (once setup).
