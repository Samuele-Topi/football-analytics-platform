# Frontend Folder Structure

## Source Directory (`client/src`)

*   **`app/`**: Next.js App Router pages and layouts.
    *   `layout.tsx`: Root layout with `Navbar` and global font/theme settings.
    *   `page.tsx`: Dashboard/Landing page.
    *   `globals.css`: Tailwind CSS configuration (v4) and "Command Center" theme variables.

*   **`components/`**: Reusable UI components.
    *   `dashboard/`: Components specific to the dashboard (e.g., `StatCard`).
    *   `layout/`: Structural components (e.g., `Navbar`, `Sidebar`).
    *   `ui/`: Generic UI primitives (Buttons, Inputs, etc. - intended for Shadcn/ui).

*   **`lib/`**: Utilities and helper functions.
    *   `utils.ts`: `cn` helper for Tailwind class merging.

*   **`hooks/`**: Custom React hooks (currently empty).
*   **`store/`**: State management (Zustand stores - currently empty).
*   **`types/`**: TypeScript definitions.

## Key Configuration Files
*   `client/package.json`: Dependencies and scripts.
*   `client/postcss.config.mjs`: PostCSS configuration for Tailwind.
*   `client/tsconfig.json`: TypeScript configuration.
