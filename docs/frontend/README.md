# Frontend Design System & UX Principles

## 1. Visual Aesthetic: "The Command Center"
The UI should feel like a high-tech tactical room—sleek, fast, and authoritative.

*   **Primary Palette:**
    *   `Background`: Deep Charcoal (#121212)
    *   `Surface`: Slate Gray (#1E1E1E)
    *   `Primary Accent`: Pitch Green (#00FF41) - Use for positive deltas and success.
    *   `Secondary Accent`: Warning Amber (#FFB000) - Use for caution/average metrics.
    *   `Danger`: Crimson (#FF3B30) - Use for negative deltas and errors.
*   **Typography:** Sans-serif, high-readability fonts (e.g., *Inter* or *Roboto Mono* for data tables).

## 2. Key Components

### The "Interactive Pitch" (SVG/WebGL)
*   **Functionality:** Toggle layers for Heatmaps, Shot Maps, and Pass Networks.
*   **UX:** Hovering over a "Node" (Player) reveals their specific match stats in a tooltip. Click-and-drag time slider to see how tactical shape changed throughout the match.

### The "Radar Comparison" Chart
*   **Functionality:** Compare two players across their Role-Based metrics.
*   **Visual:** Transparent overlapping polygons. Area calculation highlights which player "covers more ground" in their specific role.

### "Momentum Waves"
*   **Functionality:** A timeline chart below the match score.
*   **Metric:** Visualizes `xT` per minute for both teams. Peaks indicate sustained pressure.

## 3. Interaction Principles
*   **Zero-Latency Navigation:** Use Next.js pre-fetching for player profiles.
*   **Progressive Disclosure:** Show high-level stats (0-10.0) first. Allow "Deep Dive" clicks to reveal the raw data and formulas behind the score.
*   **Mobile-First Adaptability:** Complex charts must collapse into simplified "Stat Cards" on smaller screens without losing context.