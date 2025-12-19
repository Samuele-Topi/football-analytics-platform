"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, DollarSign, Shield, MapPin, Calendar, Star } from "lucide-react";
import { useParams } from "next/navigation";

export default function PlayerProfile() {
  const params = useParams();
  const playerId = params.id;

  // Mock Data - In a real app, fetch based on playerId
  const player = {
    name: "Erling Haaland",
    team: "Manchester City",
    number: "9",
    position: "ST",
    age: 23,
    nationality: "Norway",
    height: "195cm",
    foot: "Left",
    value: "€180M",
    contract: "2027",
    stats: {
      matches: 18,
      goals: 19,
      assists: 4,
      xg: 14.2,
      rating: 8.4
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-6"
      >
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-surface border-4 border-primary/20 flex items-center justify-center text-3xl font-bold text-primary">
            {player.number}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-4xl font-bold text-white">{player.name}</h1>
              <Badge className="bg-primary text-black font-bold">{player.position}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> {player.team}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {player.nationality}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {player.age} Years</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Star className="h-4 w-4" /> Shortlist
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Stats Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <Card className="bg-surface border-white/10">
                <div className="p-4 text-center">
                   <div className="text-sm text-muted-foreground mb-1">Goals</div>
                   <div className="text-3xl font-bold text-primary">{player.stats.goals}</div>
                </div>
             </Card>
             <Card className="bg-surface border-white/10">
                <div className="p-4 text-center">
                   <div className="text-sm text-muted-foreground mb-1">xG</div>
                   <div className="text-3xl font-bold text-white">{player.stats.xg}</div>
                </div>
             </Card>
             <Card className="bg-surface border-white/10">
                <div className="p-4 text-center">
                   <div className="text-sm text-muted-foreground mb-1">Assists</div>
                   <div className="text-3xl font-bold text-white">{player.stats.assists}</div>
                </div>
             </Card>
             <Card className="bg-surface border-white/10">
                <div className="p-4 text-center">
                   <div className="text-sm text-muted-foreground mb-1">Avg Rating</div>
                   <div className="text-3xl font-bold text-green-400">{player.stats.rating}</div>
                </div>
             </Card>
          </div>

          {/* Attributes Radar Placeholder */}
          <Card className="bg-surface border-white/10 min-h-[300px]">
             <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <Activity className="h-5 w-5 text-primary" /> Performance Radar
                </CardTitle>
             </CardHeader>
             <CardContent className="flex items-center justify-center h-[250px]">
                <div className="relative h-48 w-48 rounded-full border border-white/10 flex items-center justify-center">
                    {/* Mock Radar Shape */}
                    <div className="absolute inset-0 bg-primary/20 clip-polygon" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
                    <div className="text-xs text-muted-foreground">Attributes Chart</div>
                </div>
             </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <Card className="bg-surface border-white/10">
              <CardHeader>
                 <CardTitle>Transfer Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-muted-foreground">Market Value</span>
                    <span className="font-bold text-white">{player.value}</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-muted-foreground">Contract Exp</span>
                    <span className="font-bold text-white">{player.contract}</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-muted-foreground">Wage</span>
                    <span className="font-bold text-white">€375k / week</span>
                 </div>
                 <div className="pt-2">
                    <div className="flex items-center gap-2 text-sm text-green-400">
                       <TrendingUp className="h-4 w-4" /> Value increasing rapidly
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
