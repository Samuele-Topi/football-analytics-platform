import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react";
import { getPlayerPhoto, getTeamLogo } from "@/lib/assets";

type Tab = "performance" | "market" | "scouting";

const DATA = {
  performance: [
    { id: 110633, name: "Erling Haaland", team: "Man City", teamId: 43, pos: "ST", metric: "+1.2 xG", value: 9.8, status: "up" },
    { id: 204311, name: "Vinicius Jr", team: "Real Madrid", teamId: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", pos: "LW", metric: "+0.8 xA", value: 9.5, status: "up" },
    { id: 233150, name: "Onana", team: "Man Utd", teamId: 12, pos: "GK", metric: "-0.5 PSxG", value: 6.2, status: "down" },
    { id: 110668, name: "Salah", team: "Liverpool", teamId: 8, pos: "RW", metric: "+0.4 xG", value: 8.9, status: "neutral" },
    { id: 204480, name: "Rice", team: "Arsenal", teamId: 1, pos: "CDM", metric: "92% Pass", value: 8.7, status: "up" },
  ],
  market: [
    { id: 541334, name: "Lamine Yamal", team: "Barcelona", teamId: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_（logo）.svg", pos: "RW", metric: "+€15M", value: "€85M", status: "up" },
    { id: 284145, name: "Evan Ferguson", team: "Brighton", teamId: 36, pos: "ST", metric: "+€8M", value: "€42M", status: "up" },
    { id: 204336, name: "Sancho", team: "Man Utd", teamId: 12, pos: "LW", metric: "-€5M", value: "€25M", status: "down" },
    { id: 232145, name: "Wirtz", team: "Leverkusen", teamId: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg", pos: "CAM", metric: "+€12M", value: "€95M", status: "up" },
    { id: 204311, name: "Neymar", team: "Al Hilal", teamId: "https://upload.wikimedia.org/wikipedia/en/b/b3/Al_Hilal_SFC_logo.svg", pos: "LW", metric: "-€10M", value: "€40M", status: "down" },
  ],
  scouting: [
    { id: 510362, name: "Estevao", team: "Palmeiras", teamId: "https://upload.wikimedia.org/wikipedia/en/1/10/Palmeiras_logo.svg", pos: "RW", metric: "Wonderkid", value: "9.9 Pot", status: "up" },
    { id: 544815, name: "Echeverri", team: "River Plate", teamId: "https://upload.wikimedia.org/wikipedia/en/a/ac/River_Plate_crest.svg", pos: "CAM", metric: "Elite", value: "9.5 Pot", status: "up" },
    { id: 281456, name: "Bardghji", team: "Copenhagen", teamId: "https://upload.wikimedia.org/wikipedia/en/9/93/FC_Kobenhavn_logo.svg", pos: "RW", metric: "Prospect", value: "8.8 Pot", status: "neutral" },
    { id: 283145, name: "Moscardo", team: "PSG", teamId: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", pos: "CDM", metric: "Rotation", value: "8.5 Pot", status: "neutral" },
    { id: 205678, name: "Tel", team: "Bayern", teamId: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_logo_（2017）.svg", pos: "ST", metric: "Starter", value: "9.2 Pot", status: "up" },
  ],
};

export function TrendInsights() {
  const [activeTab, setActiveTab] = useState<Tab>("performance");

  return (
    <Card className="h-full bg-surface border-white/5 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="font-bold text-white flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          Global Trends
        </h3>
        <div className="flex bg-black/20 p-1 rounded-lg">
          {(["performance", "market", "scouting"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary/20 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {DATA[activeTab].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-surface border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <img src={getPlayerPhoto(item.id)} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <Link href={`/world/Europe/England/Premier League/${item.team}/${item.name}`} className="text-sm font-medium text-white group-hover:text-primary transition-colors hover:underline">
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="h-3.5 w-3.5 bg-white/10 rounded-sm p-0.5 flex items-center justify-center">
                            <img src={getTeamLogo(item.teamId)!} alt="Team" className="h-full w-full object-contain" />
                        </div>
                        <p className="text-[10px] text-muted-foreground">{item.team} • <span className="text-primary/80">{item.pos}</span></p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                     <span className={`text-sm font-bold ${item.status === 'up' ? 'text-primary' : item.status === 'down' ? 'text-danger' : 'text-white'}`}>
                        {item.value}
                     </span>
                     {item.status === 'up' && <TrendingUp className="h-3 w-3 text-primary" />}
                     {item.status === 'down' && <TrendingDown className="h-3 w-3 text-danger" />}
                     {item.status === 'neutral' && <Minus className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <Badge variant="outline" className="text-[10px] h-5 px-1 bg-black/20 border-white/5 text-muted-foreground">
                    {item.metric}
                  </Badge>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  );
}
