# Changelog

All notable changes to this project will be documented in this file.

## [1.3.9] - 2025-12-19

### Added
- **Assets:** Implemented `client/src/lib/assets.ts` utility to fetch official player photos and team logos from external CDNs (Premier League).
- **UI:** Updated Scouting and Profile pages to display official assets when available.

## [1.3.8] - 2025-12-19

### Fixed
- **Client Stability:** Disabled experimental React Compiler in `client/next.config.ts` to resolve build crashes and "eternal" compilation times on Node.js v25.
- **Runtime Error:** Fixed `ReferenceError: React is not defined` in `MatchPitch.tsx` by adding missing React import.
- **Dependencies:** Bumped project version to 1.3.8 across all configuration files.

## [1.3.7] - 2025-12-19

### Fixed
- **Backend:** Restored missing `server/app/main.py` entry point to fix ASGI app loading error.

## [1.3.6] - 2025-12-19

### Changed
- **Visual Identity:** Refined color palette to a professional "Blended Blue" theme.
    - Background: Deep Night Blue (`#0B0F19`) instead of stark black.
    - Primary: Soft Professional Blue (`#60A5FA`) instead of neon cyan.
    - Surface: Cool Gray/Black (`#111827`) for better contrast blending.
- **Assets:** Updated favicons and avatars to match the new professional theme.

## [1.3.5] - 2025-12-19

### Changed
- **Visual Identity:** Shifted primary color from Pitch Green to "Electric Cyan" blue-blend.
- **Navigation:** Updated Navbar with explicit links to World Browser, International Competitions, and Shortlist.
- **Assets:** Updated Favicon and Avatar to match the new blue-cyan color palette.

## [1.3.4] - 2025-12-19

### Added
- **Global Database:** Implemented hierarchical browsing (`/world/[...slug]`) covering Continent > Nation > League > Team > Squad > Players.
- **International:** New section (`/competitions/international`) for major tournaments.
- **Shortlist:** Dedicated page (`/shortlist`) for tracking favorite players.
- **Assets:** Generated custom SVG favicon and user avatar.

### Changed
- **Navigation:** Deep hierarchical routing structure replaces flat IDs for browsing.
- **Tactical Feed:** "Replay" mode now correctly pauses when the match is paused.
- **Profile:** User preferences are now fully interactive (Add/Remove tags).
- **Player Page:** Removed "Make Offer" button as requested.

## [1.3.3] - 2025-12-19

### Added
- **Player Profile:** Dedicated dynamic route (`/player/[id]`) with detailed stats and attributes.
- **Visual Modes:** Added Heatmap, Pass Network, and Shots visualization modes to the Match Analysis pitch.
- **Cross-Linking:** Player names in Scouting, Match, and Dashboard now link to their profile.

### Changed
- **Match Analysis:** Timeline scrubber is now interactive.
- **Scouting:** Fixed logic for Age and Potential range sliders.

## [1.3.2] - 2025-12-19

### Added
- **Landing Page:** New marketing/welcome page at root (`/`) with feature highlights.
- **Dashboard:** Relocated "Command Center" to `/dashboard` route.
- **User Profile:** New `/profile` page with stats and user details.
- **TrendInsights:** New dashboard widget replacing the static chart, showing performance, market, and scouting trends.
- **Filtering:** Robust filter panel in Scouting page (League, Position, Age, Potential).

### Changed
- **Match Analysis:** Refactored to "Post-Match" mode (Replay focus, no live indicators).
- **Navigation:** Updated Navbar links and added Profile avatar.
- **UI:** Added `link` variant to Button component.

## [1.3.1] - 2025-12-19

### Added
- **Interactive Pages:** Completed `Match Analysis`, `Scouting`, and `Settings` pages.
- **Data Visualization:** Integrated `recharts` and implemented `MarketValueChart` on the dashboard.
- **Tactical Pitch:** Added `MatchPitch` component with animated player nodes for real-time visualization.
- **Extended UI Library:** Implemented `Badge`, `Button`, `Card`, `Input`, `Label`, and `Switch` components.
- **State Management:** Added interactive toggles in Settings for UI preferences.

### Changed
- Refactored `Dashboard` to use real chart components instead of placeholders.
- Updated `Navbar` to include active route indicators.

### Fixed
- Resolved duplicate import errors in `Settings` page causing build failure.
- Fixed layout issues with chart responsiveness.

## [1.3.0] - 2025-12-19

### Added
- **Frontend Core:** Initialized Next.js 14+ (App Router) with TypeScript and Tailwind CSS.
- **Design System:** Implemented "Command Center" aesthetic with custom dark theme and Framer Motion animations.
- **UI Components:** Added `Navbar` and `StatCard` components.
- **Backup Protocol:** Updated `REMINDERS.md` to include mandatory backups for major updates.
- **Git Hygiene:** Initialized root `.gitignore`.

## [1.2.1] - 2025-12-18
### Added
- Project foundation and "Dual-Expert" master prompt.
- Comprehensive documentation architecture (`docs/` structure).
- Developer protocol and reminders (`REMINDERS.md`).
- Technology stack and architecture definition.
- Initial project roadmap and TODO list.

### Changed
- N/A

### Fixed
- N/A
