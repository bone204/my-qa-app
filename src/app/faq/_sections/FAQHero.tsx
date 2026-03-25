"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export default function FAQHero() {
  const t = useTranslations("FAQPage.hero");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden select-none">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
            {t("subtitle")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
        >
          {t.rich('title', {
            highlight: (chunks) => <span className="text-primary">{chunks}</span>
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl font-medium leading-relaxed"
        >
          {t("description")}
        </motion.p>
      </div>
    </section>
  );
}
