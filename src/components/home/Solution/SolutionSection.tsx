"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView
} from "framer-motion";
import { solutionNodes } from "./SolutionData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowUp } from "lucide-react";
import CloudNode from "./CloudNode";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: expandProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4"]
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionWidth = useTransform(expandProgress, [0, 1], ["80%", "100%"]);
  const sectionRadius = useTransform(expandProgress, [0, 1], ["6rem", "0rem"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <div ref={sectionRef} className="w-full overflow-hidden flex justify-center bg-background">
      <motion.section
        ref={containerRef}
        style={{ width: sectionWidth, borderRadius: sectionRadius }}
        className="relative py-16 md:py-20 overflow-hidden bg-primary"
      >
        {/* Background Parallax Title — left-to-right sweep */}
        <motion.div
          style={{ y: titleY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <motion.span
            animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 100%)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.45, 1] }}
            className="text-[15vw] font-black uppercase tracking-tighter text-white/20 whitespace-nowrap select-none"
          >
            SOLUTIONS
          </motion.span>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          {/* Header */}
          <div className="flex flex-col items-center mb-10 md:mb-14">
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="section-subtitle text-white select-none"
              >
                Technical Ecosystem
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="section-title text-white select-none"
              >
                The Digital <span className="text-gray-900">Neural</span> Network.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                className="section-desc text-white/70! text-center mx-auto select-none"
              >
                Beyond standard code, we build intelligent ecosystems that connect vision and technology perfectly.
              </motion.p>
            </div>
          </div>

          {/* Neural Network Map (Desktop) */}
          <div className="hidden md:block relative h-[750px] w-full max-w-5xl mx-auto">
            {/* SVG Connection Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="chain-ab" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="chain-bc" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {isInView && (
                <>
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                    x1={`${solutionNodes[0].x}%`} y1={`${solutionNodes[0].y}%`}
                    x2={`${solutionNodes[1].x}%`} y2={`${solutionNodes[1].y}%`}
                    stroke="white" strokeWidth="1" strokeOpacity="0.2"
                  />
                  <motion.line
                    animate={{ pathLength: [0, 1, 0], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                    x1={`${solutionNodes[0].x}%`} y1={`${solutionNodes[0].y}%`}
                    x2={`${solutionNodes[1].x}%`} y2={`${solutionNodes[1].y}%`}
                    stroke="url(#chain-ab)" strokeWidth="2.5" strokeDasharray="6 16"
                  />
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    x1={`${solutionNodes[1].x}%`} y1={`${solutionNodes[1].y}%`}
                    x2={`${solutionNodes[2].x}%`} y2={`${solutionNodes[2].y}%`}
                    stroke="white" strokeWidth="1" strokeOpacity="0.2"
                  />
                  <motion.line
                    animate={{ pathLength: [0, 1, 0], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                    x1={`${solutionNodes[1].x}%`} y1={`${solutionNodes[1].y}%`}
                    x2={`${solutionNodes[2].x}%`} y2={`${solutionNodes[2].y}%`}
                    stroke="url(#chain-bc)" strokeWidth="2.5" strokeDasharray="6 16"
                  />
                </>
              )}
            </svg>

            {/* Cloud Nodes */}
            {solutionNodes.map((node) => (
              <CloudNode key={node.id} node={node} />
            ))}
          </div>

          {/* Mobile View: Vertical Cards */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {solutionNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative w-full max-w-md bg-white p-6 rounded-4xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 shrink-0 rounded-2xl border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${node.color}15`,
                        borderColor: `${node.color}33`,
                        color: node.color
                      }}
                    >
                      <node.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-black text-zinc-900 select-none uppercase tracking-tight">{node.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {node.subItems.map((sub) => (
                          <div
                            key={sub.label}
                            className="flex items-center gap-1.5 border rounded-2xl px-3 py-1.5 transition-colors bg-zinc-50 border-zinc-100"
                          >
                            <sub.icon className="w-3.5 h-3.5" style={{ color: sub.color }} />
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{sub.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                {index < solutionNodes.length - 1 && (
                  <div className="w-px h-6 bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
