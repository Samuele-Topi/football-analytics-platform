# Architecture & Stack Assessment (v1.2.1)
**Date:** 2025-12-18
**Auditor:** Gemini CLI Agent

## Executive Summary
The current architecture and technology stack are **highly appropriate** and **well-designed** for a high-performance Football Analytics Platform. The separation of concerns between the Data Science Engine (Python) and the Presentation Layer (Next.js) is optimal. The choice of a Monorepo facilitates tight integration and consistent versioning.

However, specific recommendations are made regarding **Tracking Data Storage** and **Type Safety** to prevent future scaling issues.

---

## 1. Architecture Review

### Strengths
*   **Pipeline Design:** The `Ingestion -> Processing (Celery) -> Serving (FastAPI) -> Presentation` flow is the industry standard for data-intensive applications. It ensures the user-facing API remains responsive even when complex metrics (like xT or Pitch Control) are being calculated in the background.
*   **Evaluation Engine Separation:** Isolating the core logic into a dedicated Python module allows for the easy integration of complex libraries (NumPy, SciPy) without bloating the API controllers.
*   **Monorepo:** Facilitates code sharing (where possible) and unified tooling/deployment pipelines.

### Potential Bottlenecks & Recommendations
*   **Tracking Data Storage:** The current plan implies storing all data in PostgreSQL.
    *   *Risk:* Storing frame-by-frame tracking data (25fps x 22 players x 90 mins) in a relational DB will lead to massive table bloat and slow queries.
    *   *Recommendation:* Use **Parquet** files or a **Time-Series Database** (e.g., InfluxDB, ClickHouse) for raw tracking frames. Use PostgreSQL only for event data (shots, passes) and metadata.
*   **API Type Safety:**
    *   *Risk:* Discrepancies between Python Pydantic models and TypeScript interfaces.
    *   *Recommendation:* Implement an automated code generator (e.g., `openapi-typescript`) to generate TS types directly from the FastAPI `openapi.json` schema.

---

## 2. Technology Stack Review

### Frontend (Next.js + TypeScript)
*   **Verdict:** **Excellent.**
*   **Analysis:** Next.js (App Router) is ideal for performance. `Recharts` is solid for standard metrics, but the inclusion of `D3.js` is critical for the "Interactive Pitch" requirements.
*   **Gap:** No testing framework is currently explicitly configured in the root `package.json`.
    *   *Recommendation:* Add **Vitest** and **React Testing Library**.

### Backend (FastAPI + Python)
*   **Verdict:** **Excellent.**
*   **Analysis:** Python is non-negotiable for this domain. FastAPI provides the speed of Go/Node.js with the ecosystem of Python.
*   **Gap:** `Polars` is mentioned for data processing. This is a strong choice over Pandas for performance, but ensure the "Evaluation Engine" is optimized for Polars' lazy execution model.

### Database (PostgreSQL)
*   **Verdict:** **Good (with caveats).**
*   **Analysis:** Perfect for relational data (Players, Teams).
*   **Caveat:** As noted above, unsuitable for raw tracking data at scale.

---

## 3. Action Plan
1.  **Refine Storage Strategy:** Update `ARCHITECTURE.md` to specify hybrid storage (Postgres for relational, Parquet/S3 for tracking).
2.  **Tooling Setup:** Initialize testing frameworks (pytest, Vitest).
3.  **Type Gen:** Set up scripts to sync Pydantic models to TypeScript.
