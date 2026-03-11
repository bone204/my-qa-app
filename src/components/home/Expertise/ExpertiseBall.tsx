"use client";

import { motion } from "framer-motion";
import { type ExpertiseItem, expertiseData } from "./ExpertiseData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ExpertiseBallProps {
  item: ExpertiseItem;
  onClick: () => void;
  isExpanded: boolean;
  className?: string;
  sizeMultiplier?: number;
}

export function ExpertiseBall({ item, onClick, isExpanded, className, sizeMultiplier = 1 }: ExpertiseBallProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center",
        isExpanded ? "z-50" : "z-10",
        className
      )}
    >
      <motion.div
        layoutId={`ball-sphere-${item.id}`}
        className={cn(
          "relative flex flex-col items-center justify-center",
          !isExpanded && "animate-float"
        )}
        style={{ animationDelay: `${expertiseData.indexOf(item) * 1.5}s` }}
        initial={false}
        animate={{
          scale: isExpanded ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
      >
        {/* Background Glow */}
        <div
          className="absolute inset-[-25%] animate-tech-glow opacity-60 pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${item.color}33 0%, transparent 70%)`,
            '--glow-color': item.color
          } as any}
        />

        {/* Main Sphere */}
        <motion.div
          className={cn(
            "relative flex flex-col items-center justify-center rounded-full group",
            "tech-ball-shadow transition-all duration-500 border border-white/20 backdrop-blur-md",
            "shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" // Inner shadow for volume
          )}
          style={{
            '--glow-color': `${item.color}`,
            width: `calc(${sizeMultiplier} * 10rem)`,
            height: `calc(${sizeMultiplier} * 10rem)`,
            backgroundColor: `${item.color}1A` // Slightly more opaque but uses backdrop-blur
          } as any}
        >
          {/* Animated Background Gradients - Sharp and Clear */}
          <div className={cn(
            "absolute inset-0 opacity-90 transition-opacity duration-500 bg-linear-to-br rounded-full",
            item.gradient
          )} />

          {/* Animated Rings - Sharper */}
          <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite] opacity-50" />
          <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30" />

          <motion.div
            layoutId={`ball-icon-${item.id}`}
            className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            <item.icon className="w-10 h-10 sm:w-14 sm:h-14 text-white group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
