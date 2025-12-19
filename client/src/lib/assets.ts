/**
 * Utility to manage external assets (player photos, team logos).
 * To revert to mock icons, change ENABLE_OFFICIAL_ASSETS to false.
 */

export const ENABLE_OFFICIAL_ASSETS = true;

const ASSET_SOURCES = {
  // Premier League Official CDN
  player: (id: string | number) => `https://resources.premierleague.com/premierleague/photos/players/250x250/p${id}.png`,
  team: (id: string | number) => `https://resources.premierleague.com/premierleague/badges/t${id}.svg`,
  
  // Fallback / Placeholder
  placeholder: "/avatars/user.svg",
};

/**
 * Returns the URL for a player's official photo.
 * If the ID is not provided or official assets are disabled, returns a placeholder.
 */
export function getPlayerPhoto(id?: string | number) {
  if (!ENABLE_OFFICIAL_ASSETS || !id || id === "placeholder") {
    return ASSET_SOURCES.placeholder;
  }
  return ASSET_SOURCES.player(id);
}

/**
 * Returns the URL for a team's official logo.
 */
export function getTeamLogo(id?: string | number) {
  if (!ENABLE_OFFICIAL_ASSETS || !id) {
    return null;
  }
  // If id is already a URL, return it
  if (typeof id === "string" && id.startsWith("http")) {
    return id;
  }
  return ASSET_SOURCES.team(id);
}
