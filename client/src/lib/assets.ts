import TEAM_LOGOS from './team_logos.json';

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
      "UEL": "https://upload.wikimedia.org/wikipedia/commons/3/3c/UEFA_Europa_League_logo.svg",
      "UECL": "https://upload.wikimedia.org/wikipedia/commons/e/e5/UEFA_Conference_League_logo_%282024%29.svg",
      "EURO": "https://upload.wikimedia.org/wikipedia/en/9/96/UEFA_Euro_2024_Logo.svg",
      "SERIEA": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2022.svg",
      "LALIGA": "https://assets.laliga.com/assets/public/logos/laliga-h-v.svg",
      "BUNDESLIGA": "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
      "LIGUE1": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ligue_1_McDonald%27s_logo.svg",
      "MLS": "https://upload.wikimedia.org/wikipedia/commons/7/76/MLS_crest_logo_RGB_gradient.svg",
      "BRASILEIRAO": "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
      "PRIMERA_ARG": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Liga_Profesional_de_F%C3%BAtbol_Argentino_-_Logo_2021.svg/1200px-Liga_Profesional_de_F%C3%BAtbol_Argentino_-_Logo_2021.svg.png",
      "RSL": "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Roshn_Saudi_League_Logo.svg/1200px-Roshn_Saudi_League_Logo.svg.png",
      "KLEAGUE": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/K_League_1_logo.svg/1200px-K_League_1_logo.svg.png",
      "EPL_EG": "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Egyptian_Premier_League_logo.svg/1200px-Egyptian_Premier_League_logo.svg.png",
      "ALEAGUE": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/A-Leagues_Logo.svg/1200px-A-Leagues_Logo.svg.png",
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
  
  // Check our manual JSON map first (using the ID as the key, or if ID is number, look for name match?)
  // Since our JSON keys are team names, we should ideally pass the name.
  // But the interface receives ID.
  // We can try to cast ID to string if it matches a key.
  
  if (typeof id === "string" && (TEAM_LOGOS as Record<string, string>)[id]) {
      return (TEAM_LOGOS as Record<string, string>)[id];
  }

  // Fallback to Premier League ID system if it's a number
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
