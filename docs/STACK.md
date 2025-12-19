# Technology Stack

## Frontend (Client)
*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Utility-first), Framer Motion (Animations)
*   **State Management:** React Context / Zustand
*   **Visualization:** Recharts (Charts), D3.js (Advanced/Custom Pitch Visuals)
*   **Fetching:** TanStack Query (React Query)

## Backend (Server)
*   **Framework:** FastAPI (Python) - High performance, easy async support.
*   **Language:** Python 3.11+
*   **Data Processing:** Pandas, NumPy, Polars (for large datasets)
*   **Machine Learning:** Scikit-learn (Valuation models)

## Database & Infrastructure
*   **Primary DB:** PostgreSQL (Relational Data: Players, Matches, Teams)
*   **Caching:** Redis (Leaderboards, Frequent Queries)
*   **Containerization:** Docker & Docker Compose
*   **Task Queue:** Celery (for background stat processing)

## Tools
*   **Version Control:** Git
*   **Package Manager:** pnpm (Node), poetry/pip (Python)

## Data Engineering & Acquisition
*   **`soccerdata`:** A collection of wrappers for scraping football data from various websites.
*   **`socceraction`:** Convert event stream data to the SPADL format and value game states (xT, VAEP).
*   *(Note: These run in separate local environments to isolate dependencies.)*

## Quality Assurance & Testing
*   **Frontend:** Vitest, React Testing Library
*   **Backend:** Pytest
*   **E2E:** Playwright (Optional)
