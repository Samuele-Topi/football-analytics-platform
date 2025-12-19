"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamLogoProps {
  src: string | null;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function TeamLogo({ src, name, className, size = "md" }: TeamLogoProps) {
  const [error, setError] = useState(!src);

  const sizeClasses = {
    sm: "h-6 w-6 text-[10px]",
    md: "h-12 w-12 text-xs",
    lg: "h-24 w-24 text-xl",
    xl: "h-32 w-32 text-2xl",
  };

  const getInitials = (n: string) => {
    return n
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (error || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground font-bold",
          sizeClasses[size],
          className
        )}
        title={`${name} (Logo missing)`}
      >
        <span>{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center shrink-0", sizeClasses[size], className)}>
      <img
        src={src}
        alt={name}
        className="h-full w-full object-contain drop-shadow-md"
        onError={() => {
          console.warn(`Failed to load logo for team: ${name}. URL: ${src}`);
          setError(true);
        }}
      />
    </div>
  );
}
