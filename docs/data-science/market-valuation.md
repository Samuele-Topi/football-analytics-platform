# Algorithmic Market Valuation Model

Our valuation engine ($V$) is a predictive model, not just a historical price list.

## 1. The Core Formula
$V = (BaseValue(Rating, Role) \times AgeMultiplier) \times LeagueCoeff$

## 2. Age Curve Dynamics
We use a Gamma Distribution to model peak performance years.
*   **GK/CB:** Peak at 27-29.
*   **Wingers/Strikers:** Peak at 24-26.
*   **Formula:** $AgeMult = \alpha \cdot e^{-\beta(Age - Peak)^2}$
*   *Note:* Younger players receive a "Potential Premium" based on the velocity of their rating growth ($dR/dt$). 

## 3. Scarcity Multiplier
Market values are influenced by supply. 
*   If the database shows a shortage of high-performing *Left-Footed Center Backs*, their $V$ increases by a "Scarcity Factor" (1.15x).

## 4. Economic Variables
*   **Contractual Status:** Value decays as the contract approaches its final 12 months (Linear decay model).
*   **Commercial Value:** (Optional) Multiplier based on social media following/global reach for high-profile players.

