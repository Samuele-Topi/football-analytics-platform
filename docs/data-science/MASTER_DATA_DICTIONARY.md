# Master Data Dictionary

**Version:** 1.0.0
**Status:** Definitive Reference
**Description:** This document catalogs every single data point, metric, and parameter collected or derived by the Football Analytics Platform. It serves as the contract between the Data Engineering pipeline and the Frontend UI.

---

## 1. General & Biographical Data
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Minutes Played** | Total regulation + stoppage time on pitch. | Match Meta | Raw | Profile Header |
| **Age** | Player age at time of match. | Bio Data | Raw | Profile Header |
| **Matches Started** | Count of games in starting XI. | Match Meta | Raw | Donut Chart |
| **Sub Minutes** | Minutes played coming off the bench. | Match Meta | Raw | Bar Chart |

---

## 2. Attacking: Shooting & Finishing
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Goals** | Total goals scored. | Event (Shot) | Raw, Per 90, Percentile | Timeline, Bar |
| **xG (Expected Goals)** | Probability (0-1) of a shot becoming a goal. | Model (Features: Dist, Angle, Body Part) | Raw, Per 90, Cumulative | Step Chart, Shot Map |
| **npxG** | xG excluding penalty kicks. | Derived | Per 90, Percentile | Radar Chart |
| **xG per Shot** | Average quality of chances taken. | Derived (xG / Shots) | Ratio, Percentile | Scatter Plot |
| **G-xG (Overperformance)** | Goals minus Expected Goals (Finishing Skill). | Derived | Raw Delta | Diverging Bar |
| **Shots Total** | All attempts (On target, off, blocked). | Event (Shot) | Per 90, Percentile | Shot Map (Hexbin) |
| **Shots on Target %** | % of shots that were goals or saved. | Derived | Percentage | Pie Chart |
| **Avg. Shot Distance** | Mean distance (yards) from goal line. | Event (Coords) | Average (Yards) | Radial Bar |
| **Goals per Shot** | Conversion rate. | Derived | Percentage | Trend Line |

---

## 3. Attacking: Creation & Playmaking
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Assists** | Final pass leading to a goal. | Event (Pass) | Raw, Per 90 | Timeline |
| **xA (Expected Assists)** | Likelihood pass becomes an assist. | Model | Raw, Per 90, Percentile | Pass Map (Weighted) |
| **Key Passes** | Passes directly leading to a shot. | Event (Pass) | Per 90, Percentile | Pass Map |
| **SCA (Shot-Creating Actions)** | Two offensive actions leading to a shot. | Event Sequence | Per 90 | Stacked Bar |
| **GCA (Goal-Creating Actions)** | Two offensive actions leading to a goal. | Event Sequence | Per 90 | Stacked Bar |
| **SCA Types** | Breakdown: Pass, Dribble, Foul Drawn. | Event Attribute | Raw Count | Stacked Bar |
| **Through Balls** | Pass between defenders into open space. | Event Attribute | Per 90 | Pass Map |
| **Deep Completions** | Passes completed within 20m of goal. | Event (Coords) | Per 90 | Heatmap |
| **Crosses** | Ball played from flank into box. | Event (Pass) | Per 90, Success % | Crossing Zone Map |
| **Cutbacks** | Pass from byline back into box. | Event (Pass) | Raw, Success % | Arrow Map |

---

## 4. Possession: Passing & Progression
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Passes Attempted** | Total passes initiated. | Event (Pass) | Per 90 | Context Stat |
| **Pass Completion %** | Successful Passes / Attempts. | Derived | Percentage | Radial Gauge |
| **Progressive Passes** | Moves ball >10y twd goal (or into box). | Event (Coords) | Per 90, Percentile | Progressive Pass Map |
| **Passes into Final 1/3** | Completed passes entering attacking third. | Event (Coords) | Per 90 | Zone Map |
| **Passes into Penalty Area** | Completed passes entering 18-yard box. | Event (Coords) | Per 90, Percentile | Zone Map |
| **Short Passes (5-15y)** | Cmp% and Vol for short range. | Event (Pass) | Vol / 90, Cmp% | Bar Group |
| **Medium Passes (15-30y)** | Cmp% and Vol for mid range. | Event (Pass) | Vol / 90, Cmp% | Bar Group |
| **Long Passes (>30y)** | Cmp% and Vol for long range. | Event (Pass) | Vol / 90, Cmp% | Bar Group |
| **Switch of Play** | Pass traveling >40y width-wise. | Event (Coords) | Raw Count | Arch Map |
| **Lay-offs** | 1st time pass away from goal. | Event Attribute | Raw Count | Context Stat |
| **xP (Expected Pass Cmp)** | Probability pass is completed. | Model | Ratio vs Actual % | Scatter Plot |

---

## 5. Possession: Dribbling & Control
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Touches** | Total on-ball events. | Event | Per 90 | Heatmap |
| **Touches in Box** | Touches inside opponent's penalty area. | Event (Coords) | Per 90, Percentile | Heatmap (Crop) |
| **Dribbles Attempted** | Attempt to bypass defender. | Event (Dribble) | Per 90 | Scatter Plot |
| **Dribble Success %** | Successful Bypasses / Attempts. | Derived | Percentage | Radar Chart |
| **Progressive Carries** | Carry >10y twd goal (or into box). | Event (Carry) | Per 90, Percentile | Carry Map (Lines) |
| **Carries into Final 1/3** | Carries entering attacking third. | Event (Coords) | Per 90 | Flow Map |
| **Miscontrols** | Unforced loss of possession. | Event (Error) | Per 90 (Inverted) | Bar Chart |
| **Dispossessed** | Tackled by opponent. | Event (Loss) | Per 90 (Inverted) | Bar Chart |
| **Pass Targets Received** | Successfully receiving a pass. | Event (Receipt) | Per 90, % of Team | Network Node Size |

---

## 6. Defending: Engagement
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Tackles Won** | Dispossessing opponent. | Event (Tackle) | Per 90, Percentile | Defensive Map (X) |
| **Tackles (Def 3rd)** | Tackles in defensive third. | Event (Coords) | Per 90 | Zone Map |
| **Tackles (Mid 3rd)** | Tackles in middle third. | Event (Coords) | Per 90 | Zone Map |
| **Tackles (Att 3rd)** | Tackles in attacking third. | Event (Coords) | Per 90 | Zone Map |
| **Dribblers Tackled %** | % of dribblers stopped. | Derived | Percentage | Radar Chart |
| **Pressures** | Closing down ball carrier. | Event (Pressure) | Per 90, PAdj (Possession Adjusted) | Pressure Heatmap |
| **Successful Pressure %** | Ball won back within 5s of pressure. | Derived | Percentage | Gauge |
| **Blocks** | Blocking Shot or Pass. | Event (Block) | Per 90 | Body Map |
| **Interceptions** | Cutting off a pass. | Event (Int) | Per 90, PAdj | Defensive Map |
| **Clearances** | Kicking ball away from danger. | Event (Clear) | Per 90 | Context Stat |
| **Errors leading to Shot** | Mistake resulting in opp shot. | Event (Error) | Raw Count | Warning Icon |

---

## 7. Defending: Aerial & Physical
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **Aerial Duels Won** | Winning header. | Event (Duel) | Per 90 | Bar Chart |
| **Aerial Win %** | Won / Total Contested. | Derived | Percentage, Percentile | Radar Chart |
| **Ground Duels Won** | Physical 50/50s on ground. | Event (Duel) | Per 90 | Bar Chart |
| **Fouls Committed** | Whistled infractions. | Event (Foul) | Per 90 | Table |
| **Fouls Drawn** | Winning a free kick. | Event (Foul) | Per 90 | Table |
| **Cards (Y/R)** | Disciplinary record. | Event (Card) | Raw Count | Icon Overlay |

---

## 8. Goalkeeping (GK)
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **PSxG (Post-Shot xG)** | Difficulty of shots on target faced. | Model (Trajectory, Speed) | Per 90 | Trend Line |
| **PSxG +/-** | PSxG minus Goals Allowed (Shot Stopping). | Derived | Raw, Per 90, Percentile | Diverging Bar |
| **Save %** | Saves / Shots on Target. | Derived | Percentage | Gauge |
| **Crosses Stopped %** | Crosses claimed/punched vs attempted. | Derived | Percentage | Radar Chart |
| **Sweeper Actions** | Def actions outside box. | Event (GK) | Per 90 | Heatmap |
| **Avg. Keeper Distance** | Mean distance from goal line (sweeping). | Tracking / Event | Yards | Pitch Viz |
| **Launch %** | % of Goal Kicks > 40 yards. | Event (Pass) | Percentage | Distribution Bar |
| **Pass Cmp % (Launch)** | Accuracy of long kicks. | Derived | Percentage | Context Stat |

---

## 9. Advanced & Derived Indices
| Metric Name | Definition | Data Source | Presentation Formats | Visualization Type |
| :--- | :--- | :--- | :--- | :--- |
| **xT (Expected Threat)** | Probability added to scoring by moving ball. | Model (Grid) | Per 90, Net (For-Ag) | Flow/Heatmap |
| **VAEP** | Valuing Actions by Estimating Probabilities. | Model | Total Score | Rating Card |
| **PPDA** | Passes Allowed Per Defensive Action. | Derived (Team) | Ratio | Trend Line |
| **Field Tilt** | % of final third passes vs opponent. | Derived (Team) | Percentage | Possession Bar |
| **Build-up Score** | Contribution to non-shot-assist chains. | Composite | 0-100 Score | Radar Chart |
| **Press Resistance** | Ability to keep ball under pressure. | Composite | 0-100 Score | Radar Chart |
| **GSA (Game State Adj)** | Metrics normalized for scoreline context. | Calculation | Adjusted Value | Comparison Table |
