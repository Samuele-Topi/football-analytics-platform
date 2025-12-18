# The Scoring Logic Engine: Algorithm Specification

The 0-10.0 rating system is derived through a four-stage pipeline.

## Stage 1: Data Normalization (Z-Scores)
We don't compare a Center Back's tackles to a Winger's. 
1.  Gather all players in the same **Archetype** (e.g., *Ball-Playing CB*).
2.  Calculate the Mean ($\mu$) and Standard Deviation ($\sigma$) for every relevant metric.
3.  Calculate the Z-Score: $z = \frac{x - \mu}{\sigma}$.
4.  This ensures that an "8.5" means the player is significantly above the average for *their specific role*.

## Stage 2: Role-Based Weighting Matrix
Each Archetype has a JSON weight configuration.
```json
{
  "archetype": "Regista",
  "weights": {
    "progressive_passes": 0.35,
    "deep_completions": 0.25,
    "pass_accuracy_long": 0.15,
    "interceptions": 0.15,
    "recoveries": 0.10
  }
}
```

## Stage 3: Quality Coefficients
*   **League Strength:** We use an Elo-based ranking for leagues. A tackle in the Premier League is weighted higher than one in a lower-tier league.
*   **Opposition Strength:** If a striker scores against a Top 4 defense, the rating boost is 1.25x compared to scoring against a bottom-table team.

## Stage 4: Bayesian Smoothing
To prevent "Statistical Noise" (e.g., a sub coming on for 5 minutes and getting a 10.0 because they made one pass), we use Bayesian inference to pull ratings toward the player's historical mean until a sufficient sample size (minutes played) is reached.
