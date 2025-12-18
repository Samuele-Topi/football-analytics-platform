# Comprehensive Archetype Dictionary (V2.0)

This document provides a granular breakdown of every player and team archetype. These are the blueprints used by the **Evaluation Engine** to weigh metrics and calculate the 0-10.0 scores.

---

## 1. Player Archetypes: Goalkeepers (GK)

*   **The Sweeper-Keeper:** Proactive off the line. High weight on `Defensive Actions Outside Box`, `Avg. Distance from Goal`, and `Short Pass Accuracy`. (Example: Neuer, Ederson).
*   **The Shot-Stopper:** Pure reflex-based. High weight on `PSxG +/-`, `Reflex Save %`, and `Handling`. (Example: Oblak, De Gea).
*   **The Commander:** Aerial dominance and organization. High weight on `Crosses Claimed %`, `Punched Actions`, and `Defensive Organization Rating`.
*   **The Distributor:** Focused on counter-attack initiation. High weight on `Long Pass Accuracy`, `Throw Success`, and `Side-Volley Accuracy`. (Example: Alisson, Raya).

---

## 2. Player Archetypes: Defenders (DF)

### Center Backs (CB)
*   **The Wall (Traditional CB):** Physicality and clearance. `Blocks`, `Clearances`, `Aerial Win %`, `Tackles in Defensive Third`.
*   **The Ball-Playing CB (Libero):** Build-up play. `Progressive Passes`, `Passes into Final Third`, `Carries`, `Switch of Play`.
*   **The Aggressor (Stopper):** Steps out of the line. `Interceptions`, `Tackles in Midfield Third`, `Fouls Committed (Tactical)`.
*   **The Sweeper-Cover:** The last line. `Recovery Speed`, `Tackles as Last Man`, `Positioning Delta`.
*   **The Wide Center-Back:** Found in back-3 systems. `Overlapping Runs`, `Crosses from Deep`, `Dribbles`. (Example: Bastoni).

### Fullbacks / Wingbacks (FB/WB)
*   **The Wing-Back (Attacking):** Essentially a winger. `Sprints`, `Crosses`, `Key Passes`, `Touches in Opp. Box`.
*   **The Inverted Fullback:** Moves into midfield during build-up. `Central Pass Completion`, `Underlapping Runs`, `Positional Fluidity`. (Example: Zinchenko, Walker).
*   **The No-Nonsense FB:** Strictly defensive. `1v1 Defending Success %`, `Tackles Won`, `Low Positional Deviation`.
*   **The Playmaking Fullback:** Directs play from wide. `Through Balls`, `xA (Expected Assists)`, `Long Pass Accuracy`. (Example: Alexander-Arnold).

---

## 3. Player Archetypes: Midfielders (MF)

*   **The Regista (Deep Playmaker):** The heartbeat. `Deep Completions`, `Tempo Setting`, `Long Ball Accuracy`. (Example: Pirlo, Rodri).
*   **The Destroyer (6):** Defensive shield. `Tackles`, `Interceptions`, `Ground Duels Won`. (Example: Casemiro, Palhinha).
*   **The Anchorman:** Static shield. `Positional Discipline`, `Short Pass Safety`, `Pressure Resistance`.
*   **The Box-to-Box (Engine):** High work rate. `Distance Covered`, `Sprints`, `Late Box Entries`, `Recoveries`. (Example: Bellingham, Valverde).
*   **The Mezzala:** Central mid that drifts wide to half-spaces. `Crosses from Half-Space`, `Dribbles`, `Shot-Creating Actions`. (Example: De Bruyne).
*   **The Carrilero (Shuttler):** Lateral cover. `Lateral Interceptions`, `Support Passes`, `Positional Coverage`.
*   **The Creative Hub (10):** The final ball specialist. `Key Passes`, `xA`, `Through Balls`, `SCA`.
*   **The Shadow Striker:** Aggressive 10. `Shots on Target`, `Touches in Box`, `Goals per 90`. (Example: Müller).

---

## 4. Player Archetypes: Forwards (FW)

*   **The Fox-in-the-Box (Poacher):** Minimal touches, maximum goals. `xG per Shot`, `Touches in Box`, `Conversion Rate`. (Example: Haaland).
*   **The Target Man:** Physical focal point. `Aerial Duels Won`, `Hold-up Success`, `Lay-offs`. (Example: Giroud).
*   **The False 9:** Drops deep to create space. `Passes into Final Third`, `Distance from Goal`, `Dribbles`. (Example: Messi, Firmino).
*   **The Raumdeuter (Space Investigator):** Unconventional movement. `Off-ball Movement Value`, `Shot Accuracy`, `Positioning`. (Example: Müller).
*   **The Inside Forward:** Winger that cuts inside. `Dribbles into Box`, `Shots from Distance`, `Inverted Runs`. (Example: Salah, Vinícius).
*   **The Creative Winger:** Touchline hugger. `Crosses`, `1v1 Success`, `Progressive Carries`.
*   **The Pressing Forward:** Defensive vanguard. `Turnovers Forced`, `High Pressures`, `Defensive Actions in Attacking Third`. (Example: Watkins).
*   **The Advanced Forward:** Stretches play. `Runs in Behind`, `Offside Frequency (High)`, `Speed Deltas`.

---

## 5. Team Archetypes (Tactical DNA)

*   **Tiki-Taka:** High possession, short passing, extreme control. (>65% Possession, <12.0 PPDA).
*   **Vertical Tiki-Taka:** Possession-based but fast forward progression. (>55% Possession, High `Progressive Pass` count).
*   **Gegenpressing (Heavy Metal):** High-intensity recovery and vertical transitions. (Low PPDA, High `Turnovers Forced in Final Third`).
*   **Catenaccio:** Ultra-disciplined low block, patient counter-attacking. (Low `Avg. Defensive Line`, High `Counter-Attack Frequency`).
*   **Park the Bus:** Extreme defensive concentration, low width, low engagement line.
*   **Route One (Long Ball):** Direct play to Target Man. (High `Avg. Pass Length`, High `Aerial Duels`).
*   **Wing-Play:** Heavy reliance on wide delivery. (High `Cross Frequency`, High `Wide Channel Usage`).
*   **The Chameleon (Functionalism):** High variance in stats based on opponent. Low standard deviation in tactical consistency.
*   **Total Football:** Extreme fluidity. High `Positional Swap` count, balanced stat distribution across all roles.

---

## 6. Managerial Archetypes

*   **The Tactician:** High frequency of formation/system changes in-game.
*   **The Motivator:** Performance delta improvement in high-pressure matches/derbies.
*   **The Talent Developer:** Significant rating growth in U23 players under their tenure.
*   **The System-Builder:** High tactical consistency score (low variance in team archetype over time).