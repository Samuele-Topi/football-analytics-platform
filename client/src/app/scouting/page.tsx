"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, TrendingDown, Minus } from "lucide-react";

// Mock Data
const PLAYERS = [
  { id: 1, name: "Lucas Silva", age: 19, position: "CM", team: "Santos FC", value: "€12.5M", potential: 92, trend: "up" },
  { id: 2, name: "Matteo Ricci", age: 22, position: "CB", team: "Empoli", value: "€8.2M", potential: 85, trend: "up" },
  { id: 3, name: "Jonas Wind", age: 24, position: "ST", team: "Wolfsburg", value: "€18.0M", potential: 84, trend: "neutral" },
  { id: 4, name: "Kaelan O'Connor", age: 18, position: "LW", team: "Leeds Utd", value: "€3.5M", potential: 88, trend: "up" },
  { id: 5, name: "Davi Luiz", age: 21, position: "CDM", team: "Flamengo", value: "€15.2M", potential: 89, trend: "down" },
  { id: 6, name: "Erik Hansen", age: 20, position: "RB", team: "Copenhagen", value: "€5.8M", potential: 83, trend: "neutral" },
];

export default function ScoutingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = PLAYERS.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Talent <span className="text-primary">Identification</span>
        </h1>
        <p className="text-muted-foreground">
          Discover and analyze the next generation of football stars.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-4 items-center rounded-xl border border-white/5 bg-surface p-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search players by name..."
            className="pl-9 bg-background/50 border-transparent focus:border-primary/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </motion.div>

      {/* Player Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlayers.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="group cursor-pointer hover:border-primary/50 transition-all hover:bg-surface-hover">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{player.team}</p>
                  </div>
                  <Badge variant="outline" className="bg-white/5">
                    {player.position}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Age</p>
                    <p className="text-sm font-semibold text-white">{player.age}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Potential</p>
                    <p className="text-sm font-semibold text-primary">{player.potential}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Value</p>
                    <p className="text-sm font-semibold text-white">{player.value}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Trend</p>
                    <div className="flex items-center gap-1">
                      {player.trend === "up" && <TrendingUp className="h-3 w-3 text-primary" />}
                      {player.trend === "down" && <TrendingDown className="h-3 w-3 text-danger" />}
                      {player.trend === "neutral" && <Minus className="h-3 w-3 text-muted-foreground" />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-white/5 w-full">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${player.potential}%` }} 
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
