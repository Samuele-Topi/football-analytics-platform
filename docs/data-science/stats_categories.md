# Statistical Categories & Parameter Organization

This document organizes all the data points, metrics, and parameters used in the Football Analytics Platform into logical categories. This structure is mirrored in the database schema and the frontend API responses.

## 1. Offensive Metrics

### Shooting & Finishing
*   **Goals:** Total goals scored.
*   **xG (Expected Goals):** The probability of a shot resulting in a goal.
*   **npxG (Non-Penalty xG):** xG excluding penalty kicks.
*   **Shooting Accuracy %:** (Shots on Target / Total Shots).
*   **Conversion Rate %:** (Goals / Total Shots).
*   **xG Overperformance:** (Goals - xG).
*   **Average Shot Distance:** Mean distance from goal for all shots.

### Creation & Playmaking
*   **Assists:** Direct passes leading to a goal.
*   **xA (Expected Assists):** The likelihood that a given pass will become a goal assist.
*   **Key Passes:** Passes that lead directly to a shot.
*   **SCA (Shot-Creating Actions):** Offensive actions (dribbles, passes, fouls won) directly leading to a shot.
*   **GCA (Goal-Creating Actions):** Offensive actions directly leading to a goal.
*   **Through Balls:** Passes sent between defenders into open space.
*   **Crosses into Box:** Successful crosses into the 18-yard box.
*   **Cutbacks:** Passes from the byline back into the penalty area.

---

## 2. Possession & Passing

### Progression
*   **Progressive Passes:** Passes that move the ball towards the opponent's goal line by at least 10 yards (or into the penalty area).
*   **Progressive Carries:** Carries that move the ball towards the opponent's goal line by at least 10 yards (or into the penalty area).
*   **Final Third Entries:** Passes entering the final third of the pitch.
*   **Penalty Area Entries:** Passes entering the opponent's penalty area.

### Passing Types
*   **Short Passing %:** Completion rate for passes between 5 and 15 yards.
*   **Medium Passing %:** Completion rate for passes between 15 and 30 yards.
*   **Long Passing %:** Completion rate for passes over 30 yards.
*   **Switch of Play:** Passes traveling more than 40 yards across the width of the pitch.
*   **Lay-offs:** First-time passes away from goal to a teammate.

### Retention & Control
*   **Touches:** Total events where the player touches the ball.
*   **Dispossessed:** Number of times the player loses control of the ball due to a tackle.
*   **Turnovers:** Loss of possession due to a mistake or poor control.
*   **Pass Completion % under Pressure:** Accuracy of passes made while under direct pressure from an opponent.

---

## 3. Defensive Metrics

### Tackling & Interception
*   **Tackles Won:** Successful tackles that regain possession.
*   **Tackles + Interceptions:** A combined metric of defensive activity.
*   **Dribblers Tackled %:** Percentage of dribblers faced that were successfully tackled.
*   **Interceptions:** Reading the game to cut off a pass.
*   **Blocked Shots:** Shots blocked by the player.
*   **Blocked Passes:** Passes blocked by the player.

### Aerial & Physical
*   **Aerial Duels Won:** Number of aerial duels won.
*   **Aerial Win %:** Percentage of aerial duels contested that were won.
*   **Ground Duels Won:** Number of physical 50/50s won on the ground.
*   **Clearances:** Defensive actions that clear the danger.

### Pressing
*   **Pressures:** Number of times applying pressure to an opposing player.
*   **Successful Pressures %:** Percentage of pressures that result in the team regaining possession within 5 seconds.
*   **Defensive Actions in Final Third:** Tackles or interceptions made high up the pitch (Gegenpressing indicator).

---

## 4. Goalkeeping Metrics

### Shot Stopping
*   **PSxG (Post-Shot Expected Goals):** How likely the goalkeeper is to save the shot based on trajectory and speed.
*   **PSxG +/-:** (PSxG - Goals Allowed). Positive numbers indicate above-average shot-stopping.
*   **Save %:** Percentage of shots on target saved.

### Distribution & Sweeping
*   **Sweeper Actions:** Defensive actions outside the penalty area.
*   **Avg. Distance of Defensive Actions:** How far from the goal line the keeper operates.
*   **Crosses Stopped %:** Percentage of crosses into the box that are successfully claimed or punched.
*   **Launch %:** Percentage of goal kicks that are launched long vs. played short.

---

## 5. Advanced / Derived Metrics (Third-Order)

*   **xT (Expected Threat):** Value added to probability of scoring by moving the ball to a more dangerous zone.
*   **Build-up Score:** Involvement in passing chains that lead to a shot, without being the shottist or assister.
*   **Press Resistance Score:** A composite of successful dribbles and passes under pressure.
*   **Defensive Work Rate Index:** (Distance Covered + Pressures + Tackles) / 90.
*   **Clutch Factor:** Performance variance in last 15 mins of close games (+/- 1 goal).
