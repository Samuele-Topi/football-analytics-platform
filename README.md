# ⚽ Football Analytics Platform

![Project Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.4.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **Next-Generation Tactical Intelligence.**
> A comprehensive system for advanced football data analysis, scouting archetypes, and performance modeling.

---

## 📖 Overview

The **Football Analytics Platform** is a high-performance system designed to bridge the gap between raw tracking data and actionable tactical insights. It goes beyond simple counting stats (goals, assists) to evaluate **Player Roles**, **Team DNA**, and **Game State Context**.

Built with a **FastAPI** backend for heavy data processing (xT, xG, Pitch Control) and a **Next.js** frontend for interactive, real-time visualization.

## ✨ Key Features

### 🧠 The Evaluation Engine
*   **Role-Based Scoring:** Players are rated 0-10.0 based on their specific archetype (e.g., *Ball-Playing CB* vs. *Stopper*).
*   **Context-Aware Metrics:** Stats are adjusted for possession, game state (winning/losing), and opponent strength.
*   **Advanced Models:** Includes **xT (Expected Threat)**, **VAEP**, and **Pitch Control** models.

### 📊 Interactive Visualization
*   **Tactical Board:** 2D Pitch view with pass networks, heatmaps, and shot maps.
*   **Radar Comparisons:** Overlap player profiles to see stylistic differences.
*   **Momentum Waves:** Visualize which team dominated specific periods of the match.

### 🔎 Scout 360
*   **Archetype Dictionary:** Over 50 defined player roles (e.g., *Mezzala*, *Raumdeuter*, *Inverted Wing-Back*).
*   **Market Value Model:** Algorithmic valuation based on performance, age, contract, and potential.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript) | React Server Components, Tailwind CSS, D3.js |
| **Backend** | ![FastAPI](https://img.shields.io/badge/FastAPI-teal?style=flat-square&logo=fastapi) ![Python](https://img.shields.io/badge/Python-3.11-yellow?style=flat-square&logo=python) | Async API, Celery Workers, Scikit-learn |
| **Data** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue?style=flat-square&logo=postgresql) ![Redis](https://img.shields.io/badge/Redis-red?style=flat-square&logo=redis) | Relational Data, Caching, Leaderboards |
| **Ops** | ![Docker](https://img.shields.io/badge/Docker-blue?style=flat-square&logo=docker) | Containerized Monorepo |

---

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+ & pnpm
*   Python 3.11+ & Poetry
*   Docker & Docker Compose

### Installation (Dev)

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/football_analytics_platform.git
    cd football_analytics_platform
    ```

2.  **Start Infrastructure (DB & Redis):**
    ```bash
    docker-compose up -d db redis
    ```

3.  **Install Dependencies:**
    *   *Frontend:* `cd client && pnpm install`
    *   *Backend:* `cd server && poetry install`

---

## 📚 Documentation

Detailed documentation is available in the [`/docs`](./docs/README.md) directory.

*   **[Architecture Guide](./docs/ARCHITECTURE.md):** System design and data flow.
*   **[Data Science Engine](./docs/data-science/README.md):** Methodologies and metrics.
*   **[Master Data Dictionary](./docs/data-science/MASTER_DATA_DICTIONARY.md):** Definitive catalog of all stats.
*   **[Project Roadmap](./docs/ROADMAP.md):** Future plans.

---

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.