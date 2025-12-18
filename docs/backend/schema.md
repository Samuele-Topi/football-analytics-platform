# Database Schema (PostgreSQL)

The database is designed for high-concurrency read operations and complex analytical joins.

## 1. Core Entities

### `players`
- `id` (UUID, PK)
- `name`, `nationality`, `dob`
- `preferred_foot` (L, R, Both)
- `height_cm`, `weight_kg`
- `current_team_id` (FK)

### `matches`
- `id` (UUID, PK)
- `date`, `competition_id` (FK)
- `home_team_id`, `away_team_id`
- `home_score`, `away_score`
- `xg_home`, `xg_away`
- `stadium`, `attendance`

### `events` (The "Big" Table - Partitioned by Season)
- `id` (BigInt, PK)
- `match_id` (FK)
- `player_id` (FK, nullable)
- `team_id` (FK)
- `type` (Pass, Shot, Tackle, etc.)
- `sub_type` (Through-ball, Header, etc.)
- `x_start`, `y_start`, `x_end`, `y_end`
- `timestamp`, `period`
- `vaep_value` (Float) - Pre-calculated action value.

### `player_ratings`
- `player_id` (FK)
- `match_id` (FK)
- `archetype_id` (FK)
- `rating` (Decimal 3,1)
- `raw_stats` (JSONB) - Snapshot of metrics used for this rating.

## 2. Tactical Metadata

### `team_dna`
- `team_id` (FK)
- `season_id`
- `archetype_id` (FK)
- `possession_avg`, `ppda_avg`, `line_height_avg`
- `style_description` (Text)
