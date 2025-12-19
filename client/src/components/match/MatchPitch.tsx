"use client";

import { motion } from "framer-motion";

interface MatchPitchProps {
  mode?: "replay" | "heatmap" | "passnetwork" | "shots";
  isPlaying?: boolean;
}

interface PlayerAnimation {
  id: string;
  initial: { left?: string; top?: string; right?: string };
  animate: { left?: string[]; top?: string[]; right?: string[] };
  duration: number;
}

export function MatchPitch({ mode = "replay", isPlaying = false }: MatchPitchProps) {
  const [homePlayers, setHomePlayers] = React.useState<PlayerAnimation[]>([]);
  const [awayPlayers, setAwayPlayers] = React.useState<PlayerAnimation[]>([]);

  React.useEffect(() => {
    setHomePlayers([...Array(11)].map((_, i) => ({
      id: `home-${i}`,
      initial: {
        left: `${20 + Math.random() * 30}%`,
        top: `${10 + Math.random() * 80}%`
      },
      animate: {
        left: [
          `${20 + Math.random() * 30}%`,
          `${20 + Math.random() * 30}%`,
          `${20 + Math.random() * 30}%`
        ],
        top: [
          `${10 + Math.random() * 80}%`,
          `${10 + Math.random() * 80}%`,
          `${10 + Math.random() * 80}%`
        ]
      },
      duration: 5 + Math.random() * 5
    })));

    setAwayPlayers([...Array(11)].map((_, i) => ({
      id: `away-${i}`,
      initial: {
        right: `${20 + Math.random() * 30}%`,
        top: `${10 + Math.random() * 80}%`
      },
      animate: {
        right: [
          `${20 + Math.random() * 30}%`,
          `${20 + Math.random() * 30}%`,
          `${20 + Math.random() * 30}%`
        ],
        top: [
          `${10 + Math.random() * 80}%`,
          `${10 + Math.random() * 80}%`,
          `${10 + Math.random() * 80}%`
        ]
      },
      duration: 5 + Math.random() * 5
    })));
  }, []);

  return (
    <div className="relative aspect-[105/68] w-full bg-[#1a2c1d] overflow-hidden rounded-lg border border-white/10 shadow-inner">
      {/* Field Markings */}
      <div className="absolute inset-4 border-2 border-white/20 opacity-50" />
      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/20 -translate-x-1/2 opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-50" />
      
      {/* Goals */}
      <div className="absolute left-0 top-1/2 h-16 w-8 -translate-y-1/2 border-r border-y border-white/20 opacity-50" />
      <div className="absolute right-0 top-1/2 h-16 w-8 -translate-y-1/2 border-l border-y border-white/20 opacity-50" />

      {/* --- MODE: REPLAY (Moving Players) --- */}
      {mode === "replay" && (
        <>
          {homePlayers.map((player) => (
            <motion.div
              key={player.id}
              className="absolute h-4 w-4 rounded-full bg-primary border border-black shadow-lg shadow-primary/20 cursor-pointer z-10"
              initial={player.initial}
              animate={isPlaying ? player.animate : {}}
              transition={{
                duration: player.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}

          {awayPlayers.map((player) => (
            <motion.div
              key={player.id}
              className="absolute h-4 w-4 rounded-full bg-danger border border-black shadow-lg shadow-danger/20 cursor-pointer z-10"
              initial={player.initial}
              animate={isPlaying ? player.animate : {}}
              transition={{
                duration: player.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* --- MODE: HEATMAP --- */}
      {mode === "heatmap" && (
        <div className="absolute inset-0">
          {/* Mock Heat Blobs */}
          <div className="absolute top-[20%] left-[60%] w-32 h-32 bg-red-500/40 blur-3xl rounded-full" />
          <div className="absolute top-[50%] left-[70%] w-40 h-40 bg-red-600/50 blur-3xl rounded-full" />
          <div className="absolute top-[30%] left-[80%] w-24 h-24 bg-yellow-500/40 blur-2xl rounded-full" />
          <div className="absolute bottom-[20%] left-[20%] w-32 h-32 bg-blue-500/30 blur-3xl rounded-full" />
        </div>
      )}

      {/* --- MODE: PASS NETWORK --- */}
      {mode === "passnetwork" && (
        <div className="absolute inset-0">
           {/* Mock Connections */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
             <line x1="20%" y1="50%" x2="35%" y2="30%" stroke="white" strokeWidth="2" />
             <line x1="20%" y1="50%" x2="35%" y2="70%" stroke="white" strokeWidth="2" />
             <line x1="35%" y1="30%" x2="50%" y2="40%" stroke="white" strokeWidth="4" />
             <line x1="35%" y1="70%" x2="50%" y2="60%" stroke="white" strokeWidth="3" />
             <line x1="50%" y1="40%" x2="70%" y2="50%" stroke="white" strokeWidth="5" />
             <line x1="50%" y1="60%" x2="70%" y2="50%" stroke="white" strokeWidth="5" />
           </svg>
           {/* Nodes */}
           <div className="absolute left-[20%] top-[50%] w-6 h-6 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">GK</div>
           <div className="absolute left-[35%] top-[30%] w-8 h-8 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">LB</div>
           <div className="absolute left-[35%] top-[70%] w-8 h-8 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">RB</div>
           <div className="absolute left-[50%] top-[40%] w-10 h-10 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">CM</div>
           <div className="absolute left-[50%] top-[60%] w-10 h-10 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">CM</div>
           <div className="absolute left-[70%] top-[50%] w-12 h-12 bg-primary rounded-full border-2 border-black -translate-x-1/2 -translate-y-1/2 z-10 text-[8px] flex items-center justify-center font-bold text-black">ST</div>
        </div>
      )}

      {/* --- MODE: SHOTS --- */}
      {mode === "shots" && (
        <div className="absolute inset-0">
           {/* Goal */}
           <div className="absolute left-[92%] top-[48%] w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(34,197,94,0.8)] z-20 cursor-pointer hover:scale-125 transition-transform" title="Goal (0.42 xG)" />
           {/* Misses / Saves */}
           <div className="absolute left-[85%] top-[55%] w-3 h-3 bg-red-500 rounded-full border border-white opacity-80 z-20" title="Saved (0.09 xG)" />
           <div className="absolute left-[88%] top-[35%] w-3 h-3 bg-red-500 rounded-full border border-white opacity-80 z-20" title="Blocked (0.05 xG)" />
           <div className="absolute left-[75%] top-[50%] w-3 h-3 bg-red-500 rounded-full border border-white opacity-80 z-20" title="Miss (0.02 xG)" />
           <div className="absolute left-[90%] top-[42%] w-3 h-3 bg-yellow-500 rounded-full border border-white opacity-80 z-20" title="Post (0.12 xG)" />
        </div>
      )}
    </div>
  );
}
