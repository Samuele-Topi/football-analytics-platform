# Frontend Folder Structure

## Source Directory (`client/src`)

*   **`app/`**: Next.js App Router pages and layouts.
    *   `layout.tsx`: Root layout with `Navbar` and global font/theme settings.
    *   `page.tsx`: Dashboard/Command Center with Market Value trends.
    *   `match/page.tsx`: Live match control and tactical feed.
    *   `scouting/page.tsx`: Talent identification and player search.
    *   `settings/page.tsx`: System preferences and API configuration.
    *   `globals.css`: Tailwind CSS configuration (v4) and "Command Center" theme variables.

*   **`components/`**: Reusable UI components.
    *   `dashboard/`: `StatCard`, `MarketValueChart`.
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
