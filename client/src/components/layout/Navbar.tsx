"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Activity, Settings, Globe, Star, Trophy, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "World", href: "/world", icon: Globe },
  { name: "International", href: "/competitions/international", icon: Trophy },
  { name: "Scouting", href: "/scouting", icon: Users },
  { name: "Shortlist", href: "/shortlist", icon: Star },
  { name: "Match", href: "/match", icon: Activity },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            PITCH<span className="text-primary">IQ</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-md bg-surface"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
            <Link href="/settings">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Settings className="h-5 w-5" />
                </Button>
            </Link>
            <Link href="/profile">
                <div className="h-8 w-8 rounded-full bg-surface border border-white/10 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                     <div className="h-full w-full bg-gradient-to-tr from-primary/20 to-purple-500/20" />
                </div>
            </Link>
        </div>
      </div>
    </nav>
  );
}
