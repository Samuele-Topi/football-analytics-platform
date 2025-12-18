# Advanced Football Metrics & Mathematical Modeling

This document provides the high-level mathematical definitions for our "Third-Order" metrics.

## 1. Game State Adjustment (GSA)
Metrics are misleading without context. A player's "Pass Completion %" when winning 3-0 is different from when losing 1-0 in the 85th minute.
*   **Methodology:** We apply a multiplier to all event values based on the scoreline and time remaining.
*   **Formula:** $V_{adj} = V_{base} \times (1 + \sigma(ScoreDiff, Time))$
*   **Logic:** Defensive actions are weighted 1.2x when defending a one-goal lead in the final 10 minutes.

## 2. Pitch Control & Voronoi Dominance
Using tracking data (x, y coordinates of all players), we model which team "controls" which part of the pitch at any given second.
*   **Spearman’s Pitch Control:** We calculate the "Time-to-Intercept" for every point on the pitch for every player.
*   **Metric:** `Zone Dominance %`. If a player is in a zone they control but fail to receive a pass, the "Off-ball Movement" score decreases.

## 3. Expected Threat (xT) - Deep Dive
We use a 12x8 grid (96 zones). 
*   **Transition Matrix:** We calculate the probability $P$ of moving the ball from zone $z_i$ to $z_j$ via pass or carry.
*   **Goal Probability:** $G_z$ is the probability of a goal being scored from zone $z$.
*   **xT Calculation:** $xT(z) = (P_{shot} \times G_z) + (P_{move} \times \sum P(z \to z') xT(z'))$
*   **Result:** This allows us to credit players for "Pre-Assists" and high-value carries that don't result in immediate shots.

## 4. VAEP (Valuing Actions by Estimating Probabilities)
Every action (tackle, pass, foul) is valued by how much it increases the probability of scoring a goal ($P_{score}$) and decreases the probability of conceding one ($P_{concede}$). 
*   $ActionValue = \Delta P_{score} - \Delta P_{concede}$

## 5. Defensive Metrics (The "Invisible" Work)
*   **Intervention Efficiency:** (Successful Interceptions / Potential Interceptions).
*   **Pressure Intensity:** Measured in $m/s^2$ (Acceleration towards the ball carrier).
*   **Covering Distance:** Distance covered while the ball is in the opponent's possession in your designated "defensive zone."

## 6. Composite & Derived Indices (New)
These metrics are calculated by combining multiple base stats to represent complex attributes.

*   **Build-up Score:** Measures a player's contribution to moving the ball from the defensive third to the attacking third.
    *   *Formula:* `(0.4 * Progressive Passes) + (0.4 * Progressive Carries) + (0.2 * Pass Completion %)`
*   **Press Resistance Score:** Quantifies a player's ability to retain possession under pressure.
    *   *Formula:* `(Dribbles Success % * 0.5) + (Pass % Under Pressure * 0.3) + (Fouls Won * 0.2)`
*   **Clinical Finishing Index:** Measures efficiency in front of goal relative to expected output.
    *   *Formula:* `(Goals / xG) * 100` (Baseline is 100).
*   **Defensive Dominance Rating:** A composite of all duel types.
    *   *Formula:* `(Aerial Win % + Ground Duel Win % + Tackle Success %) / 3`
*   **Keeper Sweeper Index:**
    *   *Formula:* `(Defensive Actions Outside Box per 90) * (Avg. Distance from Goal)`

