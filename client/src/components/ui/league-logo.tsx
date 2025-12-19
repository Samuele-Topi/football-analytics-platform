"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeagueLogoProps {
  src: string | null;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LeagueLogo({ src, name, className, size = "md" }: LeagueLogoProps) {
  const [error, setError] = useState(!src);

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-32 w-32",
  };

  if (error || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted-foreground",
          sizeClasses[size],
          className
        )}
        title={`${name} (Logo missing)`}
      >
        <Trophy className="h-1/2 w-1/2 opacity-20" />
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center shrink-0", sizeClasses[size], className)}>
      <img
        src={src}
        alt={name}
        className="h-full w-full object-contain"
        onError={() => {
          console.warn(`Failed to load logo for league: ${name}. URL: ${src}`);
          setError(true);
        }}
      />
    </div>
  );
}
