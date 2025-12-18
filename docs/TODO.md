# 📋 Developer TODO List

**Focus:** Phase 1 (Foundation) & Phase 2 (Data Engine)

## 🚨 Immediate Priorities
- [ ] **Scaffold Client:** Run `npx create-next-app@latest` in `/client`.
- [ ] **Scaffold Server:** Initialize Poetry and FastAPI in `/server`.
- [ ] **Environment:** Create `docker-compose.yml` for local DB/Redis.
- [ ] **Tooling:** Configure `eslint`, `prettier`, and `ruff` (Python linter).

## 🛠️ Data Engineering Tasks
- [ ] **Schema Implementation:** Create SQLAlchemy models based on the Data Dictionary.
- [ ] **Migration Setup:** Configure Alembic for database migrations.
- [ ] **Ingestion Script:** Write basic script to load `archetypes.json` into DB.

## 🎨 Frontend Tasks
- [ ] **Setup:** Configure Tailwind CSS with project color palette.
- [ ] **Component:** Create basic `Layout` shell (Sidebar, Header).
- [ ] **Routing:** Set up App Router structure.

## 📝 Documentation
- [x] **Master Data Dictionary:** Complete.
- [x] **Archetypes:** Complete.
- [ ] **API Spec:** Auto-generate OpenAPI JSON from FastAPI (once setup).