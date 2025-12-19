/**
 * Utility to manage external assets (player photos, team logos).
 * To revert to mock icons, change ENABLE_OFFICIAL_ASSETS to false.
 */

export const ENABLE_OFFICIAL_ASSETS = true;

const ASSET_SOURCES = {
  // Premier League Official CDN
  player: (id: string | number) => `https://resources.premierleague.com/premierleague/photos/players/250x250/p${id}.png`,
  team: (id: string | number) => `https://resources.premierleague.com/premierleague/badges/t${id}.svg`,
  
  // Competition Logos (Premier League, Champions League, etc.)
  competition: (id: string) => {
    const logos: Record<string, string> = {
      "PL": "https://resources.premierleague.com/premierleague/competitions/static/pl-logo.png",
      "UCL": "https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logo_main_w.png",
      "SERIEA": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2022.svg",
      "LALIGA": "https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg",
      "WC": "https://upload.wikimedia.org/wikipedia/commons/a/ab/FIFA_World_Cup_2022_logo.svg",
    };
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
  return ASSET_SOURCES.team(id);
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
