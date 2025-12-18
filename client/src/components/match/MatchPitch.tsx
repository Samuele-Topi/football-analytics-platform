"use client";

import { motion } from "framer-motion";

export function MatchPitch() {
  return (
    <div className="relative aspect-[105/68] w-full bg-[#1a2c1d] overflow-hidden rounded-lg border border-white/10 shadow-inner">
      {/* Field Markings */}
      <div className="absolute inset-4 border-2 border-white/20 opacity-50" />
      <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/20 -translate-x-1/2 opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-50" />
      
      {/* Goals */}
      <div className="absolute left-0 top-1/2 h-16 w-8 -translate-y-1/2 border-r border-y border-white/20 opacity-50" />
      <div className="absolute right-0 top-1/2 h-16 w-8 -translate-y-1/2 border-l border-y border-white/20 opacity-50" />

      {/* Animated Nodes (Players) */}
      {[...Array(11)].map((_, i) => (
        <motion.div
          key={`home-${i}`}
          className="absolute h-4 w-4 rounded-full bg-primary border border-black shadow-lg shadow-primary/20 cursor-pointer z-10"
          initial={{ 
            left: `${20 + Math.random() * 30}%`, 
            top: `${10 + Math.random() * 80}%` 
          }}
          animate={{
            left: [
              `${20 + Math.random() * 30}%`, 
              `${20 + Math.random() * 30}%`, 
              `${20 + Math.random() * 30}%`
            ],
            top: [
              `${10 + Math.random() * 80}%`, 
              `${10 + Math.random() * 80}%`, 
              `${10 + Math.random() * 80}%`
            ],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {[...Array(11)].map((_, i) => (
        <motion.div
          key={`away-${i}`}
          className="absolute h-4 w-4 rounded-full bg-danger border border-black shadow-lg shadow-danger/20 cursor-pointer z-10"
          initial={{ 
            right: `${20 + Math.random() * 30}%`, 
            top: `${10 + Math.random() * 80}%` 
          }}
          animate={{
            right: [
              `${20 + Math.random() * 30}%`, 
              `${20 + Math.random() * 30}%`, 
              `${20 + Math.random() * 30}%`
            ],
            top: [
              `${10 + Math.random() * 80}%`, 
              `${10 + Math.random() * 80}%`, 
              `${10 + Math.random() * 80}%`
            ],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
