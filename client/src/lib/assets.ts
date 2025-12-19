import TEAM_LOGOS from './team_logos.json';
import COMPETITION_LOGOS from './competition_logos.json';
import { WORLD_DATA } from './world-data';

/**
 * Utility to manage external assets (player photos, team logos).
 * To revert to mock icons, change ENABLE_OFFICIAL_ASSETS to false.
 */

export const ENABLE_OFFICIAL_ASSETS = true;

// Build a map of Team ID -> Team Name for easier lookup
const TEAM_ID_TO_NAME: Record<string | number, string> = {};

WORLD_DATA.forEach(continent => {
  continent.nations.forEach(nation => {
    nation.leagues.forEach(league => {
      league.teams.forEach(team => {
        TEAM_ID_TO_NAME[team.id] = team.name;
      });
    });
  });
});

const ASSET_SOURCES = {
  // Premier League Official CDN
  player: (id: string | number) => `https://resources.premierleague.com/premierleague/photos/players/250x250/p${id}.png`,
  team: (id: string | number) => `https://resources.premierleague.com/premierleague/badges/t${id}.svg`,
  
  // Competition Logos (SoFIFA via competition_logos.json)
  competition: (id: string) => {
    const logos = COMPETITION_LOGOS as Record<string, string>;
    // Fallback manual map for any missing ones if needed, or defaults
    return logos[id] || "/file.svg";
  },

  // Country Flags (using FlagCDN)
  flag: (code: string) => `https://flagcdn.com/w80/${code.toLowerCase()}.png`,

  // Fallback / Placeholder
  placeholder: "/avatars/user.svg",
};

/**
 * Returns the URL for a player's official photo.
 */
export function getPlayerPhoto(id?: string | number) {
  if (!ENABLE_OFFICIAL_ASSETS || !id || id === "placeholder") {
    return ASSET_SOURCES.placeholder;
  }
  // If id is a string and already a URL
  if (typeof id === "string" && id.startsWith("http")) return id;
  return ASSET_SOURCES.player(id);
}

/**
 * Returns the URL for a team's official logo.
 */
export function getTeamLogo(id?: string | number) {
  if (!ENABLE_OFFICIAL_ASSETS || !id) {
    return null;
  }
  if (typeof id === "string" && id.startsWith("http")) {
    return id;
  }
  
  // 1. Direct match by Name (if ID passed is actually the name)
  if (typeof id === "string" && (TEAM_LOGOS as Record<string, string>)[id]) {
      return (TEAM_LOGOS as Record<string, string>)[id];
  }

  // 2. Lookup Name by ID, then get Logo
  const name = TEAM_ID_TO_NAME[id];
  if (name && (TEAM_LOGOS as Record<string, string>)[name]) {
      return (TEAM_LOGOS as Record<string, string>)[name];
  }

  // 3. Fallback to Premier League ID system if it's a number (or string number)
  if (!isNaN(Number(id))) {
      return ASSET_SOURCES.team(id);
  }

  return null;
}

/**
 * Returns the URL for a competition's logo.
 */
export function getCompetitionLogo(id: string) {
  if (!ENABLE_OFFICIAL_ASSETS) return null;
  return ASSET_SOURCES.competition(id);
}

/**
 * Returns the URL for a country's flag.
 */
export function getCountryFlag(code: string) {
  if (!ENABLE_OFFICIAL_ASSETS) return null;
  return ASSET_SOURCES.flag(code);
}