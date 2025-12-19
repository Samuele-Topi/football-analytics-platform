"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight } from "lucide-react";

const CONTINENTS = ["Europe", "South America", "Asia", "Africa", "North America", "Oceania"];

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
          {CONTINENTS.map((cont, i) => (
              <Link key={cont} href={`/world/${cont}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                      <Card className="p-8 bg-surface border-white/5 hover:bg-white/5 hover:border-primary/50 transition-all cursor-pointer flex items-center justify-between group">
                          <div className="flex items-center gap-4">
                              <Globe className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                              <span className="text-xl font-bold text-white">{cont}</span>
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
