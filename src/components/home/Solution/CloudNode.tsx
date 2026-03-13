"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type SolutionNode, type SubItem } from "./SolutionData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Morphing cloud border-radius keyframes
const BLOB_SHAPES = [
  "60% 40% 65% 35% / 45% 55% 45% 55%",
  "35% 65% 30% 70% / 65% 35% 70% 30%",
  "50% 50% 55% 45% / 40% 60% 40% 60%",
  "65% 35% 60% 40% / 35% 65% 35% 65%",
  "60% 40% 65% 35% / 45% 55% 45% 55%",
];

const BLOB_TIMES = [0, 0.25, 0.5, 0.75, 1];

// Individual icon tooltip on hover
const SubIcon = ({ item, nodeId, sIdx }: { item: SubItem, nodeId: string, sIdx: number }) => {
  const t = useTranslations('SolutionSection.nodes');
  const [active, setActive] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer",
          "border border-white/20 backdrop-blur-md shadow-sm"
        )}
        style={{
          backgroundColor: active ? `${item.color}33` : "rgba(255, 255, 255, 0.05)",
          color: active ? "#ffffff" : item.color,
          boxShadow: active ? `0 0 15px ${item.color}44` : "none"
        }}
      >
        <item.icon className="w-5 h-5" />
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none z-50 flex flex-col items-center"
          >
            <div
              className="px-3 py-1.5 rounded-lg bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap">
                {t(`${nodeId}.subItems.${sIdx}.label`)}
              </span>
            </div>
            {/* Tooltip Arrow */}
            <div
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-zinc-900/90 -mt-px"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Cloud blob node
const CloudNode = ({ node }: { node: SolutionNode }) => {
  const t = useTranslations('SolutionSection.nodes');
  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
        className="absolute blur-[90px] rounded-full pointer-events-none"
        style={{ backgroundColor: node.color }}
      />

      {/* Main Container with Morphing Shape */}
      <motion.div
        animate={{ borderRadius: BLOB_SHAPES }}
        transition={{
          duration: 12, // Slower duration for more fluid movement
          repeat: Infinity,
          ease: "easeInOut", // Smoother transition between shapes
          times: BLOB_TIMES,
          delay: node.delay
        }}
        className="relative overflow-hidden p-px will-change-[border-radius]" // Use p-px and add performance hint
      >
        {/* Animated Gradient Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-full pointer-events-none z-0"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${node.color} 25%, transparent 50%, ${node.color} 75%, transparent 100%)`,
          }}
        />

        {/* Content Glass Container */}
        <motion.div
          animate={{ borderRadius: BLOB_SHAPES }}
          transition={{
            duration: 12, // Sync with parent duration
            repeat: Infinity,
            ease: "easeInOut",
            times: BLOB_TIMES,
            delay: node.delay
          }}
          className={cn(
            "relative z-10 w-64 md:w-80 min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center px-6 md:px-8 py-8 md:py-10 gap-6 md:gap-7",
            "bg-zinc-950/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
            "group-hover:bg-zinc-900/70 transition-colors duration-500 will-change-[border-radius]"
          )}
        >
          {/* Main icon + title */}
          <div className="flex flex-col items-center gap-4 select-none">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay
              }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl overflow-hidden relative"
              style={{
                backgroundColor: `${node.color}22`,
                color: "#ffffff"
              }}
            >
              {/* Inner shine */}
              <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent pointer-events-none" />
              <node.icon className="w-9 h-9 relative z-10" />
            </motion.div>

            <div className="space-y-1 text-center">
              <h4 className="text-white font-black text-lg uppercase tracking-[0.15em] leading-tight">
                {t(`${node.id}.title`)}
              </h4>
              <div className="h-0.5 w-12 bg-white/20 mx-auto rounded-full group-hover:w-20 transition-all duration-500"
                style={{ backgroundColor: `${node.color}aa` }} />
            </div>
          </div>

          {/* Sub icons */}
          <div className="flex items-center gap-3 flex-wrap justify-center relative z-20">
            {node.subItems.map((sub, sIdx) => (
              <SubIcon key={sub.label} item={sub} nodeId={node.id} sIdx={sIdx} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CloudNode;
