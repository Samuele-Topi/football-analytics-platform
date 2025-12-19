"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, ArrowRight } from "lucide-react";
import { getPlayerPhoto, getTeamLogo, getCompetitionLogo, getCountryFlag } from "@/lib/assets";

// Mock Data Structure with IDs
const NATIONS = [
    { name: "England", code: "GB-ENG" },
    { name: "Spain", code: "ES" },
    { name: "Germany", code: "DE" },
    { name: "Italy", code: "IT" },
    { name: "France", code: "FR" },
    { name: "Brazil", code: "BR" },
    { name: "Argentina", code: "AR" }
];
const LEAGUES = [
    { name: "Premier League", id: "PL" },
    { name: "La Liga", id: "LALIGA" },
    { name: "Serie A", id: "SERIEA" },
    { name: "Bundesliga", id: "UCL" }, // Mocking with UCL if ID missing
];
const TEAMS = [
    { name: "Man City", id: 43 },
    { name: "Arsenal", id: 1 },
    { name: "Liverpool", id: 8 },
    { name: "Real Madrid", id: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
];
const SQUADS = ["First Team", "U23", "U18", "Women's Team"];
const PLAYERS = [
  { id: 110633, name: "Erling Haaland", pos: "ST", age: 23, val: "€180M" },
  { id: 61368, name: "Kevin De Bruyne", pos: "CM", age: 32, val: "€60M" },
  { id: 209046, name: "Phil Foden", pos: "RW", age: 24, val: "€110M" },
  { id: 110260, name: "Ruben Dias", pos: "CB", age: 26, val: "€80M" },
];

export default function WorldBrowser() {
  const params = useParams();
  const slug = params.slug as string[];
  const depth = slug?.length || 0;

  // Breadcrumbs
  const breadcrumbs = slug.map((item, index) => ({
    name: decodeURIComponent(item),
    href: `/world/${slug.slice(0, index + 1).join('/')}`,
  }));

  const renderContent = () => {
    // 1. Continent View -> Show Nations
    if (depth === 1) {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {NATIONS.map((nation, i) => (
            <Link key={nation.name} href={`/world/${slug[0]}/${nation.name}`}>
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center gap-4 group text-white">
                  <img src={getCountryFlag(nation.code)!} alt={nation.name} className="h-6 w-10 object-cover rounded-sm" />
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
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {LEAGUES.map((league, i) => (
            <Link key={league.name} href={`/world/${slug[0]}/${slug[1]}/${league.name}`}>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex justify-between items-center group">
                  <div className="flex items-center gap-4 text-white">
                     <div className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-lg p-1.5">
                        <img src={getCompetitionLogo(league.id)!} alt={league.name} className="h-full w-full object-contain" />
                     </div>
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

    // 3. League View -> Show Teams
    if (depth === 3) {
      return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEAMS.map((team, i) => (
            <Link key={team.name} href={`/world/${slug[0]}/${slug[1]}/${slug[2]}/${team.name}`}>
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-6 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center gap-4 text-center">
                  <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center p-4">
                      <img src={getTeamLogo(team.id)!} alt={team.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">{team.name}</span>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      );
    }

    // 4. Team View -> Show Squad Types
    if (depth === 4) {
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {SQUADS.map((squad, i) => (
            <Link key={squad} href={`/world/${slug[0]}/${slug[1]}/${slug[2]}/${slug[3]}/${squad}`}>
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.05 }}
              >
                <Card className="p-8 bg-surface border-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center gap-6 group">
                  <Users className="h-10 w-10 text-primary" />
                  <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{squad}</h3>
                      <p className="text-muted-foreground">View roster and stats</p>
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      );
    }

    // 5. Squad View -> Show Players
    if (depth === 5) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Squad List</h2>
              <Badge variant="outline">24 Players</Badge>
          </div>
          {PLAYERS.map((player, i) => (
            <Link key={player.name} href={`/player/${player.id}`}>
               <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="flex items-center justify-between p-4 rounded-lg bg-surface border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                        <img src={getPlayerPhoto(player.id)} alt={player.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white group-hover:text-primary transition-colors">{player.name}</h4>
                        <p className="text-sm text-muted-foreground">{player.pos} • {player.age} yo</p>
                    </div>
                </div>
                <span className="font-bold text-white">{player.val}</span>
              </motion.div>
            </Link>
          ))}
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
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
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
