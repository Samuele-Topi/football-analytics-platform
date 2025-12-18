"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/dashboard/StatCard";
import { Activity, Target, Users, TrendingUp } from "lucide-react";

import { MarketValueChart } from "@/components/dashboard/MarketValueChart";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Command <span className="text-primary">Center</span>
        </h1>
        <p className="text-muted-foreground">
          Real-time tactical analysis and player performance tracking.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Targets"
          value="24"
          change={12}
          trend="up"
          icon={Target}
          delay={0.1}
        />
        <StatCard
          title="Matches Tracked"
          value="156"
          change={2.5}
          trend="up"
          icon={Activity}
          delay={0.2}
        />
        <StatCard
          title="Scouting Reports"
          value="892"
          change={0.8}
          trend="neutral"
          icon={Users}
          delay={0.3}
        />
        <StatCard
          title="Global xT (Avg)"
          value="1.42"
          change={4.3}
          trend="down"
          icon={TrendingUp}
          delay={0.4}
        />
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart Area Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-xl border border-white/5 bg-surface p-6 lg:col-span-2 min-h-[400px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Market Value Trends</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Live
              </span>
            </div>
          </div>
          <div className="flex-1 w-full h-full min-h-[300px]">
            <MarketValueChart />
          </div>
        </motion.div>

        {/* Sidebar / Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="rounded-xl border border-white/5 bg-surface p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Alerts</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <div>
                    <p className="text-sm font-medium text-white">High xG Performance</p>
                    <p className="text-xs text-muted-foreground">
                      Player #10 exceeded expected goals by 1.2
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}