"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Search, Filter, TrendingUp, TrendingDown, Minus, X, ChevronDown } from "lucide-react";
import { getPlayerPhoto } from "@/lib/assets";

// Mock Data
const PLAYERS = [
  { id: 110633, name: "Erling Haaland", age: 23, position: "ST", team: "Manchester City", value: "€180.0M", potential: 95, trend: "up", league: "Premier League" },
  { id: 61368, name: "Kevin De Bruyne", age: 33, position: "CM", team: "Manchester City", value: "€60.0M", potential: 91, trend: "neutral", league: "Premier League" },
  { id: 209046, name: "Phil Foden", age: 23, position: "RW", team: "Manchester City", value: "€110.0M", potential: 93, trend: "up", league: "Premier League" },
  { id: 1, name: "Lucas Silva", age: 19, position: "CM", team: "Santos FC", value: "€12.5M", potential: 92, trend: "up", league: "Brasileirao" },
  { id: 2, name: "Matteo Ricci", age: 22, position: "CB", team: "Empoli", value: "€8.2M", potential: 85, trend: "up", league: "Serie A" },
  { id: 3, name: "Jonas Wind", age: 24, position: "ST", team: "Wolfsburg", value: "€18.0M", potential: 84, trend: "neutral", league: "Bundesliga" },
  { id: 4, name: "Kaelan O'Connor", age: 18, position: "LW", team: "Leeds Utd", value: "€3.5M", potential: 88, trend: "up", league: "Championship" },
  { id: 5, name: "Davi Luiz", age: 21, position: "CDM", team: "Flamengo", value: "€15.2M", potential: 89, trend: "down", league: "Brasileirao" },
];

export default function ScoutingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
      position: "All",
      minPotential: 0,
      maxAge: 30,
      league: "All"
  });

  const uniqueLeagues = Array.from(new Set(PLAYERS.map(p => p.league)));
  const uniquePositions = Array.from(new Set(PLAYERS.map(p => p.position)));

  const filteredPlayers = PLAYERS.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = filters.position === "All" || player.position === filters.position;
    const matchesAge = player.age <= filters.maxAge;
    const matchesPotential = player.potential >= filters.minPotential;
    const matchesLeague = filters.league === "All" || player.league === filters.league;

    return matchesSearch && matchesPosition && matchesAge && matchesPotential && matchesLeague;
  });

  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
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
        className="space-y-4"
      >
        <div className="flex gap-4 items-center rounded-xl border border-white/5 bg-surface p-4">
            <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search players by name..."
                className="pl-9 bg-background/50 border-transparent focus:border-primary/50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <Button 
                variant={showFilters ? "default" : "outline"} 
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
            >
            <Filter className="h-4 w-4" />
            Filters
            {showFilters ? <ChevronDown className="h-4 w-4 rotate-180" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
        </div>

        {/* Expandable Filter Panel */}
        <AnimatePresence>
            {showFilters && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="rounded-xl border border-white/5 bg-surface/50 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <Label>Position</Label>
                            <select 
                                className="w-full bg-background border border-white/10 rounded-md h-10 px-3 text-sm text-white focus:outline-none focus:border-primary/50"
                                value={filters.position}
                                onChange={(e) => setFilters({...filters, position: e.target.value})}
                            >
                                <option value="All">All Positions</option>
                                {uniquePositions.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label>League</Label>
                            <select 
                                className="w-full bg-background border border-white/10 rounded-md h-10 px-3 text-sm text-white focus:outline-none focus:border-primary/50"
                                value={filters.league}
                                onChange={(e) => setFilters({...filters, league: e.target.value})}
                            >
                                <option value="All">All Leagues</option>
                                {uniqueLeagues.map(l => <option key={l} value={l}>{l}</option>)}
                            </select>
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label>Max Age</Label>
                                <span className="text-xs text-primary font-bold">{filters.maxAge}</span>
                            </div>
                            <input 
                                type="range" 
                                min="16" 
                                max="40" 
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                value={filters.maxAge}
                                onChange={(e) => setFilters(prev => ({...prev, maxAge: parseInt(e.target.value)}))}
                            />
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between">
                                <Label>Min Potential</Label>
                                <span className="text-xs text-primary font-bold">{filters.minPotential}</span>
                            </div>
                            <input 
                                type="range" 
                                min="50" 
                                max="99" 
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                value={filters.minPotential}
                                onChange={(e) => setFilters(prev => ({...prev, minPotential: parseInt(e.target.value)}))}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>

      {/* Player Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
            <motion.div
                key={player.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
            >
                <Card className="group cursor-pointer hover:border-primary/50 transition-all hover:bg-surface-hover overflow-hidden">
                <div className="flex">
                    <div className="w-24 bg-surface-hover relative overflow-hidden flex-shrink-0 border-r border-white/5">
                        <img 
                            src={getPlayerPhoto(player.id)} 
                            alt={player.name}
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                        />
                    </div>
                    <div className="p-6 space-y-4 flex-1">
                        <div className="flex justify-between items-start">
                        <div>
                            <Link href={`/player/${player.id}`} className="font-bold text-lg text-white group-hover:text-primary transition-colors hover:underline">
                            {player.name}
                            </Link>
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
                </div>
                <div className="h-1 bg-white/5 w-full">
                    <div 
                    className="h-full bg-primary transition-all duration-500" 
                    style={{ width: `${player.potential}%` }} 
                    />
                </div>
                </Card>
            </motion.div>
            ))
        ) : (
             <div className="col-span-full py-12 text-center text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>No players found matching your criteria.</p>
                <Button 
                    variant="link" 
                    className="text-primary mt-2"
                    onClick={() => setFilters({ position: "All", minPotential: 0, maxAge: 30, league: "All" })}
                >
                    Clear Filters
                </Button>
            </div>
        )}
      </div>
    </div>
  );
}
