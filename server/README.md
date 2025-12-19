# Football Analytics Platform - Backend

## Setup

This backend uses **Poetry** for dependency management.

### Installation

1.  Install Poetry: `pip install poetry`
2.  Install dependencies:
    ```bash
    poetry install
    ```

### Running the Server

```bash
poetry run uvicorn app.main:app --reload
```

### Testing

```bash
poetry run pytest
```
