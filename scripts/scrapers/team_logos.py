import json
import urllib.request
import urllib.parse
import re
import time
import os

# Define the path to your world-data.ts (we'll read this to know which teams to fetch)
# For simplicity in this script, I'll copy the structure or you can export it to JSON first.
# To make this robust, let's define the list of teams we want to find.
# In a real scenario, we'd parse the TS file or have a shared JSON.
# For this demo, I will extract team names from the provided world-data structure manually
# or via a simple regex from the file.

WORLD_DATA_PATH = os.path.join("client", "src", "lib", "world-data.ts")
OUTPUT_FILE = os.path.join("client", "src", "lib", "team_logos.json")

def extract_teams_from_ts(file_path):
    """
    Very basic regex parsing to find team names in the TS file.
    Matches: { id: "...", name: "Team Name" }
    """
    teams = []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            # Regex to find name: "Value" inside the teams array
            # This is a bit brittle but works for the known structure
            matches = re.findall(r'name:\s*"([^"]+)"', content)
            
            # Filter out Continent/Nation/League names if they get caught (basic heuristic)
            # The list represents all names, so we'll just try to fetch logos for all of them.
            # If it's a continent name, Wikipedia might just return a map or flag, which is fine or we filter later.
            # To be more precise, let's look for the specific team pattern if possible.
            
            # Better regex for the specific object structure: { id: ..., name: "X" }
            team_matches = re.findall(r'\{\s*id:\s*[^,]+,\s*name:\s*"([^"]+)"\s*\}', content)
            return team_matches
    except Exception as e:
        print(f"Error reading TS file: {e}")
        return []

def get_wikipedia_logo(team_name):
    """
    Searches Wikipedia for the team and tries to find the infobox logo.
    """
    try:
        # 1. Search Query
        query = f"{team_name} football club logo"
        # Special case for MLS or others
        if "FC" not in team_name and "United" not in team_name:
             query = f"{team_name} FC logo"
        
        # We will use a gentle search via MediaWiki API or just guessing the page
        # A simpler robust way for a script is to use the MediaWiki API to find the page, then get the image.
        
        # Step 1: Search for the page title
        search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&format=json"
        with urllib.request.urlopen(search_url) as response:
            data = json.loads(response.read().decode())
            if not data['query']['search']:
                return None
            page_title = data['query']['search'][0]['title']
            
        # Step 2: Get page info/images
        # We specifically want the 'pageimage' if available or main image
        # Using 'pageimages' prop
        image_url_api = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(page_title)}&prop=pageimages&format=json&pithumbsize=500"
        
        with urllib.request.urlopen(image_url_api) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    return pages[page_id]['thumbnail']['source']
                    
        return None

    except Exception as e:
        print(f"Error fetching {team_name}: {e}")
        return None

def main():
    print("Extracting team names...")
    teams = extract_teams_from_ts(WORLD_DATA_PATH)
    print(f"Found {len(teams)} entities to process.")
    
    logo_map = {}
    
    # Check if file exists to resume
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "r") as f:
            logo_map = json.load(f)
            
    processed = 0
    for team in teams:
        if team in logo_map and logo_map[team]:
            continue # Skip if already has a logo
            
        print(f"[{processed+1}/{len(teams)}] Fetching logo for: {team}")
        url = get_wikipedia_logo(team)
        
        if url:
            logo_map[team] = url
            print(f"  -> Found: {url[:50]}...")
        else:
            print("  -> Not found.")
            logo_map[team] = None # Mark as checked
            
        processed += 1
        time.sleep(0.5) # Be nice to Wikipedia API
        
        # Save periodically
        if processed % 5 == 0:
            with open(OUTPUT_FILE, "w") as f:
                json.dump(logo_map, f, indent=2)

    # Final Save
    with open(OUTPUT_FILE, "w") as f:
        json.dump(logo_map, f, indent=2)
    print("Done! Logos saved to", OUTPUT_FILE)

if __name__ == "__main__":
    main()
