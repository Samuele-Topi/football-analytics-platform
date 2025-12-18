"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: React.ElementType;
  delay?: number;
}

export function StatCard({ title, value, change, trend, icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl border border-white/5 bg-surface p-6 hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
        {change !== undefined && (
          <span
            className={cn(
              "flex items-center text-xs font-medium",
              trend === "up" ? "text-primary" : trend === "down" ? "text-danger" : "text-muted-foreground"
            )}
          >
            {trend === "up" ? (
              <ArrowUpRight className="mr-1 h-3 w-3" />
            ) : trend === "down" ? (
              <ArrowDownRight className="mr-1 h-3 w-3" />
            ) : (
              <Minus className="mr-1 h-3 w-3" />
            )}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 bg-gradient-to-r from-primary to-transparent transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  );
}
