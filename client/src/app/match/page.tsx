"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MatchPitch } from "@/components/match/MatchPitch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BarChart2, Share2, Download, PlayCircle, Star, PauseCircle } from "lucide-react";
import Link from "next/link";

type ViewMode = "replay" | "heatmap" | "passnetwork" | "shots";

export default function MatchPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("replay");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timelineValue, setTimelineValue] = useState(62);

  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
      {/* Header / Match Selector */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
      >
        <div>
           <h1 className="text-3xl font-bold text-white">Post-Match Analysis</h1>
           <p className="text-muted-foreground">Comprehensive tactical breakdown and performance reports.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" /> Previous Matches
            </Button>
             <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Export Report
            </Button>
        </div>
      </motion.div>

      {/* Scoreboard / Metadata */}
      <Card className="border-white/10 bg-surface">
         <div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center">
             {/* Home Team */}
             <div className="flex flex-col items-center gap-2">
                 <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500">
                     <span className="text-2xl font-bold text-blue-500">MC</span>
                 </div>
                 <h2 className="text-xl font-bold text-white">Man City</h2>
                 <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">4-3-3</Badge>
             </div>

             {/* Score */}
             <div className="flex flex-col items-center gap-2">
                 <div className="text-5xl font-mono font-bold text-white tracking-wider">
                     2 - 1
                 </div>
                 <Badge className="bg-white/10 text-muted-foreground hover:bg-white/20">FT</Badge>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                     <Clock className="h-3 w-3" />
                     <span>19 Dec 2025 • Etihad Stadium</span>
                 </div>
             </div>

             {/* Away Team */}
             <div className="flex flex-col items-center gap-2">
                 <div className="h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500">
                     <span className="text-2xl font-bold text-red-500">LIV</span>
                 </div>
                 <h2 className="text-xl font-bold text-white">Liverpool</h2>
                 <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">4-2-3-1</Badge>
             </div>
         </div>
         <div className="border-t border-white/5 bg-black/20 p-2 flex justify-center gap-8 text-sm">
             <div className="flex gap-2 text-muted-foreground">
                 <span className="font-bold text-white">58%</span> Possession <span className="font-bold text-white">42%</span>
             </div>
             <div className="flex gap-2 text-muted-foreground">
                 <span className="font-bold text-white">1.42</span> xG <span className="font-bold text-white">0.89</span>
             </div>
             <div className="flex gap-2 text-muted-foreground">
                 <span className="font-bold text-white">14</span> Shots <span className="font-bold text-white">8</span>
             </div>
         </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Pitch View - Replay Mode */}
        <motion.div 
          className="lg:col-span-2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="flex-1 border-white/10 bg-surface/50 backdrop-blur overflow-hidden flex flex-col min-h-[500px]">
             <div className="p-3 border-b border-white/5 bg-surface flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">Tactical Feed</span>
                </div>
                <div className="flex gap-2">
                   <Button 
                      variant={viewMode === 'heatmap' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => setViewMode('heatmap')}
                   >Heatmap</Button>
                   <Button 
                      variant={viewMode === 'passnetwork' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => setViewMode('passnetwork')}
                   >Pass Network</Button>
                   <Button 
                      variant={viewMode === 'shots' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => setViewMode('shots')}
                   >Shots</Button>
                    <Button 
                      variant={viewMode === 'replay' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => setViewMode('replay')}
                   >Replay</Button>
                </div>
             </div>
             <div className="relative flex-1 p-6 flex items-center justify-center bg-black/20">
                <MatchPitch mode={viewMode} />
             </div>
             {/* Timeline Scrubber */}
             <div className="p-4 bg-surface border-t border-white/5">
                 <div className="flex items-center gap-4">
                     <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setIsPlaying(!isPlaying)}
                     >
                        {isPlaying ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
                     </Button>
                     <div className="flex-1 relative group">
                         <input 
                            type="range" 
                            min="0" 
                            max="90" 
                            value={timelineValue}
                            onChange={(e) => setTimelineValue(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                         />
                         
                         {/* Goal Markers */}
                         <div className="absolute top-1/2 -translate-y-1/2 left-[23%] h-2 w-1 bg-white/50 pointer-events-none" title="Goal 1-0" />
                         <div className="absolute top-1/2 -translate-y-1/2 left-[45%] h-2 w-1 bg-white/50 pointer-events-none" title="Goal 1-1" />
                         <div className="absolute top-1/2 -translate-y-1/2 left-[88%] h-2 w-1 bg-white/50 pointer-events-none" title="Goal 2-1" />
                     </div>
                     <span className="text-xs font-mono text-muted-foreground w-12 text-right">{timelineValue}:00</span>
                 </div>
             </div>
          </Card>
        </motion.div>

        {/* Sidebar Analysis */}
        <div className="space-y-6">
            <Card className="p-4 bg-surface border-white/10">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" /> Man of the Match
                </h3>
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10" />
                    <div>
                        <Link href="/player/1" className="font-bold text-white hover:text-primary transition-colors hover:underline">Kevin De Bruyne</Link>
                        <p className="text-xs text-muted-foreground">8.9 Rating • 1 Goal • 1 Assist</p>
                    </div>
                </div>
            </Card>

            <Card className="p-4 bg-surface border-white/10">
                <h3 className="text-sm font-bold text-white mb-4">Key Insights</h3>
                <ul className="space-y-3">
                    <li className="text-sm text-muted-foreground border-l-2 border-primary pl-3">
                        <span className="text-white font-medium">Right Flank Overload:</span> City focused 65% of attacks down the right side in the 2nd half.
                    </li>
                    <li className="text-sm text-muted-foreground border-l-2 border-danger pl-3">
                        <span className="text-white font-medium">Defensive Gap:</span> Liverpool conceded 1.2 xG from cutbacks.
                    </li>
                    <li className="text-sm text-muted-foreground border-l-2 border-yellow-500 pl-3">
                        <span className="text-white font-medium">Pressing Intensity:</span> Drop off in PPDA from 8.2 to 14.5 after 70th minute.
                    </li>
                </ul>
            </Card>
        </div>
      </div>
    </div>
  );
}