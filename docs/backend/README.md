# Backend Documentation

API and Server-side logic documentation.

## Contents
- **API Reference:** Endpoints, request/response models.
- **Services:** Business logic for metric calculations.
- **Models:** SQLAlchemy/Pydantic data structures.
- **Tasks:** Background processing (Celery).
- **Data Acquisition:** Tools and workflows for fetching raw data.

## Data Acquisition & External Tools

We utilize specialized external Python environments for data scraping and collection, specifically:

*   **`soccerdata`**: Used to scrape match data from various public sources.
*   **`socceraction`**: Used for converting event stream data into SPADL format for analysis.

**Note:** The directories `soccerdata_env/` and `socceraction_env/` are excluded from version control as they contain standalone virtual environments and large raw datasets. They should be set up locally if raw data ingestion is required.
