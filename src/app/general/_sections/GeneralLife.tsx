"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Sparkles,
  TrendingUp,
  MapPin,
  HeartPulse,
  Baby,
  Utensils,
  Palmtree,
  GraduationCap,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * GeneralLife Component
 * 
 * Displays company benefits in a high-performance, ultra-smooth auto-scrolling horizontal carousel.
 * Optimized using motion for infinite scrolling, matching the design in SolutionsSection.
 */
const GeneralLife = () => {
  const t = useTranslations("General.life");

  const benefits = [
    {
      id: "performance",
      icon: TrendingUp,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "relocation",
      icon: MapPin,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: "health",
      icon: HeartPulse,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: "leave",
      icon: Baby,
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      id: "snacks",
      icon: Utensils,
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: "retreat",
      icon: Palmtree,
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      id: "upskill",
      icon: GraduationCap,
      color: "from-sky-500/20 to-blue-500/20",
    },
    {
      id: "flexible",
      icon: Clock,
      color: "from-violet-500/20 to-fuchsia-500/20",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden select-none">
      {/* Container matching SolutionsSection */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-black tracking-[0.4em] uppercase">{t("subtitle")}</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none uppercase italic tracking-tighter">
              {t("title").split(" ").map((word, i) => (
                <span key={i} className={i === t("title").split(" ").length - 1 ? "text-primary" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed italic border-l-2 border-primary/30 pl-6">
              {t("content")}
            </p>
          </motion.div>
        </div>

        {/* Carousel Section - Now inside the container to match SolutionsSection layout */}
        <div 
          className="relative overflow-hidden group"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div 
            className="flex gap-6 w-max pr-6 group-hover:[animation-play-state:paused]"
            style={{ 
              animation: 'marquee 40s linear infinite',
              willChange: 'transform'
            }}
          >
            {[...benefits, ...benefits].map((item, idx) => (
              <div
                key={idx}
                className="w-[280px] md:w-[320px] shrink-0"
              >
                <div className={cn(
                  "group/item relative h-48 rounded-3xl p-8 bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20",
                  "before:absolute before:inset-0 before:bg-linear-to-br before:opacity-0 before:group-hover/item:opacity-100 before:transition-opacity before:duration-500",
                  item.color
                )}>
                  <item.icon className="w-12 h-12 text-white mb-6 relative z-10 transition-transform duration-500 group-hover/item:-translate-y-2" />
                  <div className="flex items-center relative z-10 mt-auto">
                    <span className="text-xl font-bold text-white">
                      {t(`benefits.${item.id}.title`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default GeneralLife;
