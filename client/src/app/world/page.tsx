"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight, Trophy } from "lucide-react";

const CONTINENTS = [
    { name: "Europe", code: "EU" },
    { name: "South America", code: "SA" },
    { name: "Asia", code: "AS" },
    { name: "Africa", code: "AF" },
    { name: "North America", code: "NA" },
    { name: "Oceania", code: "OC" }
];

export default function WorldRoot() {
  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 border-b border-white/10 pb-6"
      >
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Globe className="h-8 w-8 text-primary" />
        </div>
        <div>
           <h1 className="text-3xl font-bold text-white">Global Database</h1>
           <p className="text-muted-foreground">Browse football data by region.</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
          <Link href="/competitions/international">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                  <Card className="p-8 bg-blue-500/5 border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500/50 transition-colors">
                            <Trophy className="h-6 w-6 text-blue-400" />
                          </div>
                          <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">International</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                  </Card>
              </motion.div>
          </Link>

          {CONTINENTS.map((cont, i) => (
              <Link key={cont.name} href={`/world/${cont.name}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                      <Card className="p-8 bg-surface border-white/5 hover:bg-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center justify-between group">
                          <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                                <Globe className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                              <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">{cont.name}</span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                      </Card>
                  </motion.div>
              </Link>
          ))}
      </div>
    </div>
  );
}
