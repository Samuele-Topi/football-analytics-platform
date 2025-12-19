"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

import { LeagueLogo } from "@/components/ui/league-logo";
import { getCompetitionLogo } from "@/lib/assets";

const COMPETITIONS = [
  { id: "WC", name: "FIFA World Cup", region: "Global", teams: 48, next: "2026" },
  { id: "EURO", name: "UEFA Euro", region: "Europe", teams: 24, next: "2024" },
  { id: "UCL", name: "UEFA Champions League", region: "Europe", teams: 36, next: "2025" },
  { id: "UEL", name: "UEFA Europa League", region: "Europe", teams: 36, next: "2025" },
  { id: "UECL", name: "UEFA Conference League", region: "Europe", teams: 36, next: "2025" },
];

export default function InternationalPage() {
  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Globe className="h-8 w-8 text-blue-500" />
        </div>
        <div>
           <h1 className="text-3xl font-bold text-white">Major Competitions</h1>
           <p className="text-muted-foreground">Global tournaments and league databases.</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPETITIONS.map((comp, i) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                  <Card className="p-6 bg-surface border-white/5 hover:border-blue-500/50 transition-all cursor-pointer group">
                      <LeagueLogo 
                        src={getCompetitionLogo(comp.id)} 
                        name={comp.name} 
                        size="md"
                        className="mb-4 bg-white/5 rounded-lg p-2"
                      />
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">{comp.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{comp.region}</p>
                      
                      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm">
                          <span className="text-white">{comp.teams} Teams</span>
                          <span className="text-muted-foreground">Next: {comp.next}</span>
                      </div>
                  </Card>
              </motion.div>
          ))}
      </div>
    </div>
  );
}
