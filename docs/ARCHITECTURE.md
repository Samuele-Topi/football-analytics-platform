# System Architecture

## Monorepo Structure

The project is organized as a monorepo to keep frontend and backend closely aligned while maintaining separation of concerns.

```
football_analytics_platform/
├── client/                 # Next.js Frontend Application
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── components/     # Atomic design components
│   │   └── lib/            # Utilities & API hooks
│   └── ...
├── server/                 # FastAPI Backend Application
│   ├── app/
│   │   ├── api/            # Route handlers
│   │   ├── core/           # Config & Security
│   │   ├── models/         # SQLAlchemy/Pydantic models
│   │   └── services/       # Business logic (Metric calculation)
│   └── ...
├── docs/                   # Documentation
└── ...
```

## Data Flow

1.  **Ingestion:** Raw match data is ingested via Python scripts (scrapers/API clients).
2.  **Storage (Hybrid Strategy):**
    *   **Relational Data (PostgreSQL):** Stores entities (Players, Teams, Matches) and event data (Shots, Passes, Tackles).
    *   **Tracking Data (Parquet/Object Store):** High-frequency coordinate data (25fps) is stored as compressed Parquet files or in a specialized time-series DB to prevent relational bloat.
3.  **Processing:** Background workers (Celery) calculate complex metrics (xG, xT) using the **Data Science Engine**, pulling from both storage layers.
4.  **Serving:** The **FastAPI** backend exposes RESTful endpoints (and potentially GraphQL) to serve processed data.
5.  **Presentation:** The **Next.js** frontend consumes these APIs to render interactive visualizations (Heatmaps, Charts).

## Key Components

### The "Evaluation Engine"
A Python-based module within `server/` that runs post-match. It takes raw event data and:
1.  Calculates per-90 metrics.
2.  Normalizes data against league averages.
3.  Applies role-specific weights (e.g., boosting "Passes" for a *Ball-Playing CB*).
4.  Outputs a 0-10.0 rating.
