"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Users, ArrowRight, Trophy, Star, Activity, TrendingUp, Calendar, ArrowLeft } from "lucide-react";
import { getPlayerPhoto, getTeamLogo, getCompetitionLogo, getCountryFlag } from "@/lib/assets";
import { WORLD_DATA, Continent, Nation, League, Team } from "@/lib/world-data";
import { TeamLogo } from "@/components/ui/team-logo";
import { LeagueLogo } from "@/components/ui/league-logo";

const SQUADS = ["First Team", "U23", "U18", "Women's Team"];
const PLAYERS = [
  { id: 110633, name: "Erling Haaland", pos: "ST", age: 23, val: "€180M", natCode: "NO", nationality: "Norway" },
  { id: 61368, name: "Kevin De Bruyne", pos: "CM", age: 32, val: "€60M", natCode: "BE", nationality: "Belgium" },
  { id: 209046, name: "Phil Foden", pos: "RW", age: 24, val: "€110M", natCode: "GB-ENG", nationality: "England" },
  { id: 110260, name: "Ruben Dias", pos: "CB", age: 26, val: "€80M", natCode: "PT", nationality: "Portugal" },
];

export default function WorldBrowser() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string[];
  const depth = slug?.length || 0;

  // Breadcrumbs
  const breadcrumbs = slug.map((item, index) => ({
    name: decodeURIComponent(item),
    href: `/world/${slug.slice(0, index + 1).join('/')}`,
  }));

  // Helper to find data based on slug
  const getContinent = () => WORLD_DATA.find(c => c.name.toLowerCase() === decodeURIComponent(slug[0] || "").toLowerCase());
  const getNation = (continent: Continent) => continent.nations.find(n => n.name.toLowerCase() === decodeURIComponent(slug[1] || "").toLowerCase());
  const getLeague = (nation: Nation) => nation.leagues.find(l => l.name.toLowerCase() === decodeURIComponent(slug[2] || "").toLowerCase());
  const getTeam = (league: League) => league.teams.find(t => t.name.toLowerCase() === decodeURIComponent(slug[3] || "").toLowerCase());

  const handleBack = () => {
    // If at depth 1 (Continent), go back to /world (root of this feature)
    if (depth === 1) {
        router.push('/world');
    } else {
        // Go back one level in the hierarchy
        const parentPath = `/world/${slug.slice(0, depth - 1).join('/')}`;
        router.push(parentPath);
    }
  };


  const renderContent = () => {
    // 0. World View (All Continents) - Not strictly depth 0 as page is [...slug], but handled if slug is empty
    // However, [...slug] requires at least one segment usually, but if /world is root, we need to handle that in /world/page.tsx or here if optional catch-all.
    // Assuming /world leads to a separate page or this handles it if we adjust routing.
    // For now, let's assume depth starts at 1.

    // 1. Continent View -> Show Nations
    if (depth === 1) {
      const continent = getContinent();
      if (!continent) return <div>Continent not found</div>;

      return (
        <div className="grid md:grid-cols-3 gap-6">
          {continent.nations.map((nation, i) => (
            <Link key={nation.name} href={`/world/${slug[0]}/${nation.name}`}>
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center gap-4 group text-white">
                  <div className="h-8 w-12 bg-white/5 rounded overflow-hidden flex items-center justify-center p-0">
                    <img src={getCountryFlag(nation.code)!} alt={nation.name} className="h-full w-full object-cover" />
                  </div>
                  <span className="text-lg font-bold group-hover:text-primary transition-colors">{nation.name}</span>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      );
    }

    // 2. Nation View -> Show Leagues
    if (depth === 2) {
      const continent = getContinent();
      const nation = continent && getNation(continent);
      if (!nation) return <div>Nation not found</div>;

      return (
        <div className="grid md:grid-cols-2 gap-6">
          {nation.leagues.map((league, i) => (
            <Link key={league.name} href={`/world/${slug[0]}/${slug[1]}/${league.name}`}>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex justify-between items-center group">
                  <div className="flex items-center gap-4 text-white">
                     <LeagueLogo 
                        src={getCompetitionLogo(league.id)} 
                        name={league.name} 
                        size="md"
                        className="p-2 border border-white/5 group-hover:border-primary/30 transition-colors bg-white/5 rounded-lg"
                     />
                     <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{league.name}</h3>
                        <p className="text-sm text-muted-foreground">Top Division</p>
                     </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      );
    }

    // 3. League/Competition View
    if (depth === 3) {
      const continent = getContinent();
      const nation = continent && getNation(continent);
      const league = nation && getLeague(nation);
      if (!league) return <div>League not found</div>;

      return (
        <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-surface to-background border-white/5">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <LeagueLogo 
                        src={getCompetitionLogo(league.id)} 
                        name={league.name} 
                        size="lg"
                        className="p-6 border border-white/10 shadow-2xl bg-white/5 rounded-2xl"
                    />
                    <div className="flex-1 text-center md:text-left">
                        <Badge className="bg-primary text-black mb-2">Tier 1 • Professional</Badge>
                        <h2 className="text-4xl font-black text-white mb-2">{league.name}</h2>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start text-muted-foreground">
                            <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> {nation!.name}</span>
                            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {league.teams.length} Teams</span>
                            <span className="flex items-center gap-2"><Trophy className="h-4 w-4" /> Reigning: {league.teams[0]?.name || "TBD"}</span>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {league.teams.map((team, i) => (
                    <Link key={team.name} href={`/world/${slug[0]}/${slug[1]}/${slug[2]}/${team.name}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center gap-4 text-center group">
                            <TeamLogo 
                                src={getTeamLogo(team.name)} 
                                name={team.name} 
                                size="lg" 
                                className="p-2 transition-transform group-hover:scale-110 duration-300"
                            />
                            <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">{team.name}</span>
                        </Card>
                    </motion.div>
                    </Link>
                ))}
            </div>
        </div>
      );
    }

    // 4. Team View -> Show Squad Types
    if (depth === 4) {
      const continent = getContinent();
      const nation = continent && getNation(continent);
      const league = nation && getLeague(nation);
      const team = league && getTeam(league);
      if (!team) return <div>Team not found</div>;

      return (
        <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <TeamLogo 
                    src={getTeamLogo(team.name)} 
                    name={team.name} 
                    size="lg" 
                    className=""
                />
                <div>
                    <h2 className="text-3xl font-bold text-white">{team.name}</h2>
                    <p className="text-muted-foreground">{league!.name} • {nation!.name}</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {SQUADS.map((squad, i) => (
                    <Link key={squad} href={`/world/${slug[0]}/${slug[1]}/${slug[2]}/${slug[3]}/${squad}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Card className="p-8 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center gap-6 group">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{squad}</h3>
                            <p className="text-muted-foreground">View roster and stats</p>
                        </div>
                        </Card>
                    </motion.div>
                    </Link>
                ))}
            </div>
        </div>
      );
    }

    // 5. Squad View -> Show Players
    if (depth === 5) {
       // Mock players for now, as we don't have 10,000 players in the mock data
       // In a real app, this would fetch from the backend based on Team ID + Squad Type
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">{decodeURIComponent(slug[4])} Roster</h2>
              <Badge variant="outline">24 Players</Badge>
          </div>
          {PLAYERS.map((player, i) => (
            <Link key={player.name} href={`/world/${slug[0]}/${slug[1]}/${slug[2]}/${slug[3]}/${slug[4]}/${player.name}`}>
               <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="flex items-center justify-between p-4 rounded-lg bg-surface border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-0">
                        <img src={getPlayerPhoto(player.id)} alt={player.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white group-hover:text-primary transition-colors">{player.name}</h4>
                        <p className="text-sm text-muted-foreground">{player.pos} • {player.age} yo</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-5 w-8 bg-white/5 rounded-sm overflow-hidden flex items-center justify-center">
                        <img src={getCountryFlag(player.natCode)!} alt={player.nationality} className="h-full w-full object-cover" />
                    </div>
                    <span className="font-bold text-white">{player.val}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      );
    }

    // 6. Hierarchical Player View
    if (depth === 6) {
        const playerName = decodeURIComponent(slug[5]);
        const player = PLAYERS.find(p => p.name === playerName) || PLAYERS[0];
        // In real app, we'd find the player by slug
        
        return (
            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-6"
                >
                    <div className="flex items-center gap-6">
                        <div className="h-32 w-32 rounded-full bg-surface border-4 border-primary/20 overflow-hidden flex items-center justify-center">
                            <img src={getPlayerPhoto(player.id)} alt={player.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h1 className="text-4xl font-bold text-white">{player.name}</h1>
                                <Badge className="bg-primary text-black font-bold">{player.pos}</Badge>
                                <span className="text-2xl font-black text-white/20">#9</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                                <span className="flex items-center gap-2">
                                    <div className="h-4 w-4 bg-white/10 rounded-sm p-0.5">
                                         {/* We'd need to pass the team ID down or fetch it */}
                                        <img src={getTeamLogo(43)!} alt="Team" className="h-full w-full object-contain" />
                                    </div>
                                    {decodeURIComponent(slug[3])}
                                </span>
                                <span className="flex items-center gap-2">
                                    <img src={getCountryFlag(player.natCode)!} alt={player.nationality} className="h-3 w-5 object-cover rounded-sm" />
                                    {player.nationality}
                                </span>
                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {player.age} Years</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button className="gap-2"><Star className="h-4 w-4" /> Shortlist</Button>
                        <Button variant="outline">Compare</Button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="md:col-span-2 p-6 bg-surface border-white/5">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Tactical DNA</h3>
                        <div className="h-64 rounded-xl bg-white/5 flex items-center justify-center">
                            <p className="text-muted-foreground">Tactical Heatmap / Radar Chart Placeholder</p>
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <Card className="p-6 bg-surface border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" /> Market Value</h3>
                            <div className="text-3xl font-black text-white">{player.val}</div>
                            <p className="text-xs text-primary mt-1">+€15.2M last 6 months</p>
                        </Card>
                        <Card className="p-6 bg-surface border-white/5">
                             <h3 className="text-lg font-bold text-white mb-4">Core Attributes</h3>
                             <div className="space-y-3">
                                {[
                                    { label: "Finishing", val: 95 },
                                    { label: "Pace", val: 92 },
                                    { label: "Physical", val: 88 },
                                    { label: "Aerial", val: 90 }
                                ].map(attr => (
                                    <div key={attr.label}>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-muted-foreground">{attr.label}</span>
                                            <span className="text-white font-bold">{attr.val}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary" style={{ width: `${attr.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

    return <div>Not found</div>;
  };

  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
       {/* Breadcrumbs */}
       <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto pb-2">
           <Link href="/world" className="hover:text-white transition-colors">World</Link>
           {breadcrumbs.map((crumb) => (
               <div key={crumb.href} className="flex items-center gap-2">
                   <span>/</span>
                   <Link href={crumb.href} className="hover:text-white transition-colors whitespace-nowrap">
                       {crumb.name}
                   </Link>
               </div>
           ))}
       </div>

       {/* Header */}
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <Button 
            variant="outline" 
            size="icon" 
            onClick={handleBack}
            className="h-10 w-10 shrink-0 bg-surface border-white/10 hover:bg-white/5 mr-2"
        >
            <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Globe className="h-8 w-8 text-primary" />
        </div>
        <div>
           <h1 className="text-3xl font-bold text-white capitalize">{decodeURIComponent(slug[slug.length - 1])}</h1>
           <p className="text-muted-foreground">
               {depth === 1 ? "Select a Nation" : 
                depth === 2 ? "Select a League" : 
                depth === 3 ? "Select a Team" : 
                depth === 4 ? "Select Squad" : "Player Roster"}
           </p>
        </div>
      </motion.div>

      {renderContent()}
    </div>
  );
}
