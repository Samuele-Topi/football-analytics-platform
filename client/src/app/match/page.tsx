"use client";

import { motion } from "framer-motion";
import { MatchPitch } from "@/components/match/MatchPitch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, FastForward } from "lucide-react";

export default function MatchPage() {
  return (
    <div className="container mx-auto p-6 space-y-8 h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
           <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white"
          >
            Live Match <span className="text-primary">Control</span>
          </motion.h1>
          <p className="text-muted-foreground">Real-time tactical feed and analysis.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface px-4 py-2 rounded-lg border border-white/5">
          <div className="flex items-center gap-4 text-white font-mono text-xl font-bold">
            <span>MAN CITY</span>
            <span className="text-primary bg-primary/10 px-2 rounded">2 - 1</span>
            <span>LIVERPOOL</span>
          </div>
          <Badge variant="destructive" className="animate-pulse">LIVE 67'</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Main Pitch View */}
        <motion.div 
          className="lg:col-span-2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="flex-1 border-white/10 bg-surface/50 backdrop-blur overflow-hidden flex flex-col">
             <div className="p-1 border-b border-white/5 bg-surface flex justify-between items-center px-4">
                <span className="text-xs font-mono text-muted-foreground">CAM-1: TACTICAL FEED</span>
                <div className="flex gap-2">
                   <Button variant="ghost" size="icon" className="h-6 w-6"><PlayCircle className="h-4 w-4" /></Button>
                   <Button variant="ghost" size="icon" className="h-6 w-6"><PauseCircle className="h-4 w-4" /></Button>
                   <Button variant="ghost" size="icon" className="h-6 w-6"><FastForward className="h-4 w-4" /></Button>
                </div>
             </div>
             <div className="relative flex-1 p-6 flex items-center justify-center bg-black/20">
                <MatchPitch />
             </div>
          </Card>
          
          {/* Momentum / Timeline Placeholder */}
          <Card className="h-32 border-white/10 bg-surface/50 backdrop-blur p-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
             <div className="flex items-end justify-between h-full gap-1">
                {[...Array(60)].map((_, i) => (
                   <motion.div 
                      key={i}
                      initial={{ height: "10%" }}
                      animate={{ height: `${20 + Math.random() * 80}%` }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                      className={`w-full rounded-t-sm opacity-60 ${i % 2 === 0 ? 'bg-primary' : 'bg-danger'}`}
                   />
                ))}
             </div>
             <div className="absolute top-2 left-4 text-xs font-bold text-muted-foreground">MOMENTUM (xT)</div>
          </Card>
        </motion.div>

        {/* Sidebar Stats */}
        <motion.div 
           className="space-y-4 overflow-y-auto pr-2"
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
        >
           <Card className="p-4 bg-surface border-white/10">
              <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Match Stats</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Possession</span>
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-primary font-bold">58%</span>
                       <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[58%]" />
                       </div>
                       <span className="text-xs text-danger font-bold">42%</span>
                    </div>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-sm text-white">xG</span>
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-primary font-bold">1.42</span>
                       <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[60%]" />
                       </div>
                       <span className="text-xs text-danger font-bold">0.89</span>
                    </div>
                 </div>
              </div>
           </Card>

           <Card className="p-4 bg-surface border-white/10">
              <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">Live Feed</h3>
              <div className="space-y-4">
                 {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex gap-3 items-start border-l-2 border-primary/20 pl-3 py-1">
                       <span className="text-xs font-mono text-muted-foreground">6{i}'</span>
                       <div>
                          <p className="text-xs text-white">Key Pass completed by <span className="text-primary">De Bruyne</span> into the box.</p>
                       </div>
                    </div>
                 ))}
              </div>
           </Card>
        </motion.div>
      </div>
    </div>
  );
}
