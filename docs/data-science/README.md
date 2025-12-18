# Data Science & Analytics Methodology

This document defines the mathematical foundations of our analytics engine.

## 1. Advanced Metrics Definition

### Expected Threat (xT)
Unlike xG which only values shots, xT rewards players for moving the ball into zones where a shot is more likely to occur in the next $N$ actions.
*   **Formula Logic:** We use a grid-based Markov Chain model. Each cell $(i, j)$ on the pitch has a value based on the probability of a goal occurring from that cell via a pass or a dribble.
*   **Application:** Identifies "Progressive" players who don't necessarily get assists but are vital to the build-up.

### Passes Per Defensive Action (PPDA)
*   **Formula:** $\text{PPDA} = \frac{\text{Opponent Passes in Attacking 60% of Pitch}}{\text{Defensive Actions (Tackles, Interceptions, Challenges)}}$
*   **Thresholds:** Lower PPDA (< 8.0) indicates high-intensity pressing; Higher PPDA (> 14.0) indicates a "sit-back" or low-block approach.

### "Pack" Passing (Packing)
*   **Definition:** The number of opponents bypassed by a single forward pass.
*   **Metric:** `Pack-90` (Total opponents taken out of the game per 90 minutes).

---

## 2. The Role-Based Evaluation Engine (0-10.0)

Every player is graded based on a **Weighted Role Matrix**. A player's rating is not absolute but relative to their tactical archetype.

### Example: The "Sweeper-Keeper" Profile
| Metric | Weight | Logic |
| :--- | :--- | :--- |
| **Pass Completion % (Long)** | 25% | Essential for starting transitions. |
| **Avg. Distance from Goal** | 20% | Measures proactive positioning. |
| **Sweeper Actions / 90** | 30% | Direct measure of sweeping ability. |
| **PSxG +/-** | 25% | Shot-stopping efficiency. |

### Example: The "Regista" (Deep-Lying Playmaker)
| Metric | Weight | Logic |
| :--- | :--- | :--- |
| **Progressive Passes** | 40% | Core function: advancing the ball. |
| **Deep Completions** | 30% | Ability to find teammates in the final third. |
| **Switch of Play Success** | 20% | Ability to change the point of attack. |
| **Interceptions** | 10% | Defensive positioning. |

---

## 3. Market Valuation Algorithm
$V = (P \times A \times L) + U$
*   $V$ = Estimated Market Value.
*   $P$ = Performance Score (0-10.0).
*   $A$ = Age Coefficient (Parabolic curve peaking at 24-26, decaying after 29).
*   $L$ = League Multiplier (EPL: 1.2, Serie A: 1.0, MLS: 0.7).
*   $U$ = "Uniqueness" / Potential Upside (Calculated by delta between current rating and age-group mean).