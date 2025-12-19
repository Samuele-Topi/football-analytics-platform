"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-8 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            v1.3.8 Live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            The Future of <br />
            <span className="text-primary">Football Analytics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced scouting, real-time match analysis, and predictive modeling powered by next-gen data engines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/dashboard">
            <Button size="lg" className="h-12 px-8 text-base">
              Enter Command Center <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/scouting">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10">
              Scout Players
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Deep Data",
              desc: "Granular event data including xG, xT, and pressure metrics.",
            },
            {
              icon: Zap,
              title: "Real-Time",
              desc: "Live match feeds with sub-second latency and tactical updates.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Platform",
              desc: "Enterprise-grade security for sensitive scouting reports.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-surface hover:bg-surface-hover transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
