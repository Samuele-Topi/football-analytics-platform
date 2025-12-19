"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, ArrowRight, Trash2 } from "lucide-react";

const FAVORITES = [
  { id: 1, name: "Erling Haaland", team: "Man City", value: "€180M", position: "ST", age: 23 },
  { id: 11, name: "Estevao", team: "Palmeiras", value: "€35M", position: "RW", age: 17 },
  { id: 12, name: "Claudio Echeverri", team: "River Plate", value: "€25M", position: "CAM", age: 18 },
  { id: 5, name: "Declan Rice", team: "Arsenal", value: "€110M", position: "CDM", age: 25 },
];

export default function ShortlistPage() {
  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between border-b border-white/10 pb-6"
      >
        <div>
           <h1 className="text-3xl font-bold text-white flex items-center gap-3">
             <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" /> 
             Shortlist
           </h1>
           <p className="text-muted-foreground">Your tracked targets and priority signings.</p>
        </div>
        <Button variant="outline" className="gap-2">
            Export List
        </Button>
      </motion.div>

      <div className="grid gap-4">
        {FAVORITES.map((player, i) => (
           <motion.div
             key={player.id}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
           >
              <Card className="p-4 bg-surface border-white/5 hover:border-primary/50 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-6">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                          {player.position}
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                            <Link href={`/player/${player.id}`}>{player.name}</Link>
                          </h3>
                          <p className="text-sm text-muted-foreground">{player.team} • {player.age} yo</p>
                      </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                      <div className="text-right">
                          <div className="text-sm text-muted-foreground">Market Value</div>
                          <div className="text-lg font-bold text-white">{player.value}</div>
                      </div>
                      <div className="flex gap-2">
                          <Link href={`/player/${player.id}`}>
                            <Button size="icon" variant="ghost" className="hover:text-white hover:bg-white/10">
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                          </Link>
                          <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
                              <Trash2 className="h-4 w-4" />
                          </Button>
                      </div>
                  </div>
              </Card>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
