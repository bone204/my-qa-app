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

/**
 * GeneralLife Component
 * 
 * Displays company benefits in a high-performance, ultra-smooth auto-scrolling horizontal carousel.
 * Optimized using useAnimationFrame and useMotionValue for sub-pixel precision.
 */
const GeneralLife = () => {
  const t = useTranslations("General.life");

  const benefits = [
    {
      id: "performance",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      textColor: "text-blue-400",
    },
    {
      id: "relocation",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      textColor: "text-orange-400",
    },
    {
      id: "health",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      textColor: "text-emerald-400",
    },
    {
      id: "leave",
      icon: <Baby className="w-6 h-6" />,
      color: "from-pink-500/20 to-rose-500/20",
      border: "border-pink-500/30",
      textColor: "text-pink-400",
    },
    {
      id: "snacks",
      icon: <Utensils className="w-6 h-6" />,
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      textColor: "text-amber-400",
    },
    {
      id: "retreat",
      icon: <Palmtree className="w-6 h-6" />,
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-500/30",
      textColor: "text-indigo-400",
    },
    {
      id: "upskill",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-sky-500/20 to-blue-500/20",
      border: "border-sky-500/30",
      textColor: "text-sky-400",
    },
    {
      id: "flexible",
      icon: <Clock className="w-6 h-6" />,
      color: "from-violet-500/20 to-fuchsia-500/20",
      border: "border-violet-500/30",
      textColor: "text-violet-400",
    },
  ];

  // Benefit Carousel Component with Optimized Smoothness
  const ScrollingCarousel = ({ items }: { items: typeof benefits }) => {
    // 2 sets are enough for CSS marquee
    const duplicatedItems = [...items, ...items];

    return (
      <div className="relative w-full overflow-hidden py-10">
        {/* Edge Fading Shaders */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="animate-marquee gap-8">
          {duplicatedItems.map((benefit, i) => (
            <div
              key={`${benefit.id}-${i}`}
              className={`flex-shrink-0 w-80 md:w-[420px] p-10 rounded-[3rem] bg-gradient-to-br ${benefit.color} border ${benefit.border} backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden mx-4`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`mb-8 p-6 rounded-[2rem] bg-white/10 w-fit ${benefit.textColor} shadow-inner [&>svg]:w-10 [&>svg]:h-10`}>
                {benefit.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                {t(`benefits.${benefit.id}.title`)}
              </h3>

              <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed whitespace-normal line-clamp-3 italic">
                {t(`benefits.${benefit.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-32 overflow-hidden select-none">
      {/* Header Container - Contrained to match other sections */}
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
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
      </div>

      {/* Carousel Section - TRUE FULL WIDTH (Outside the container) */}
      <div className="w-full relative z-10">
        <ScrollingCarousel items={benefits} />
      </div>

      {/* Aesthetic Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default GeneralLife;
