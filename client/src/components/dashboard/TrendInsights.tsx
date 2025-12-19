import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react";

type Tab = "performance" | "market" | "scouting";

const DATA = {
  performance: [
    { id: 1, name: "Erling Haaland", team: "Man City", metric: "+1.2 xG", value: 9.8, status: "up" },
    { id: 2, name: "Vinicius Jr", team: "Real Madrid", metric: "+0.8 xA", value: 9.5, status: "up" },
    { id: 3, name: "Onana", team: "Man Utd", metric: "-0.5 PSxG", value: 6.2, status: "down" },
    { id: 4, name: "Salah", team: "Liverpool", metric: "+0.4 xG", value: 8.9, status: "neutral" },
    { id: 5, name: "Rice", team: "Arsenal", metric: "92% Pass", value: 8.7, status: "up" },
  ],
  market: [
    { id: 6, name: "Lamine Yamal", team: "Barcelona", metric: "+€15M", value: "€85M", status: "up" },
    { id: 7, name: "Evan Ferguson", team: "Brighton", metric: "+€8M", value: "€42M", status: "up" },
    { id: 8, name: "Sancho", team: "Man Utd", metric: "-€5M", value: "€25M", status: "down" },
    { id: 9, name: "Wirtz", team: "Leverkusen", metric: "+€12M", value: "€95M", status: "up" },
    { id: 10, name: "Neymar", team: "Al Hilal", metric: "-€10M", value: "€40M", status: "down" },
  ],
  scouting: [
    { id: 11, name: "Estevao", team: "Palmeiras", metric: "Wonderkid", value: "9.9 Pot", status: "up" },
    { id: 12, name: "Echeverri", team: "River Plate", metric: "Elite", value: "9.5 Pot", status: "up" },
    { id: 13, name: "Bardghji", team: "Copenhagen", metric: "Prospect", value: "8.8 Pot", status: "neutral" },
    { id: 14, name: "Moscardo", team: "PSG", metric: "Rotation", value: "8.5 Pot", status: "neutral" },
    { id: 15, name: "Tel", team: "Bayern", metric: "Starter", value: "9.2 Pot", status: "up" },
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
                  <div className="h-8 w-8 rounded-full bg-surface flex items-center justify-center border border-white/5 text-xs font-bold text-muted-foreground group-hover:text-white group-hover:border-primary/50 transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <Link href={`/player/${item.id}`} className="text-sm font-medium text-white group-hover:text-primary transition-colors hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">{item.team}</p>
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
