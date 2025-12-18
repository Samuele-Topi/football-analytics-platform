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

1.  **Ingestion:** Raw match data is ingested via Python scripts (scrapers/API clients) into the **PostgreSQL** database.
2.  **Processing:** Background workers (Celery) calculate complex metrics (xG, xT) using the **Data Science Engine**.
3.  **Serving:** The **FastAPI** backend exposes RESTful endpoints (and potentially GraphQL) to serve processed data.
4.  **Presentation:** The **Next.js** frontend consumes these APIs to render interactive visualizations (Heatmaps, Charts).

## Key Components

### The "Evaluation Engine"
A Python-based module within `server/` that runs post-match. It takes raw event data and:
1.  Calculates per-90 metrics.
2.  Normalizes data against league averages.
3.  Applies role-specific weights (e.g., boosting "Passes" for a *Ball-Playing CB*).
4.  Outputs a 0-10.0 rating.
