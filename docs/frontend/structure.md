# Frontend Folder Structure

## Source Directory (`client/src`)

*   **`app/`**: Next.js App Router pages and layouts.
    *   `layout.tsx`: Root layout with `Navbar` and global font/theme settings.
    *   `page.tsx`: **NEW** Landing Page / Welcome Screen.
    *   `dashboard/page.tsx`: **MOVED** Command Center Dashboard.
    *   `match/page.tsx`: Post-match analysis and replay.
    *   `profile/page.tsx`: **NEW** User profile and stats.
    *   `scouting/page.tsx`: Talent identification with advanced filters.
    *   `settings/page.tsx`: System preferences.
    *   `globals.css`: Tailwind CSS configuration (v4).

*   **`components/`**: Reusable UI components.
    *   `dashboard/`: `StatCard`, `TrendInsights`.
    *   `layout/`: `Navbar`.
    *   `match/`: `MatchPitch` (Tactical board).
    *   `ui/`: Generic UI primitives: `Badge`, `Button`, `Card`, `Input`, `Label`, `Switch`.

*   **`lib/`**: Utilities and helper functions.
    *   `utils.ts`: `cn` helper for Tailwind class merging.

*   **`hooks/`**: Custom React hooks (currently empty).
*   **`store/`**: State management (Zustand stores - currently empty).
*   **`types/`**: TypeScript definitions.

## Key Configuration Files
*   `client/package.json`: Dependencies and scripts.
*   `client/postcss.config.mjs`: PostCSS configuration for Tailwind.
*   `client/tsconfig.json`: TypeScript configuration.
