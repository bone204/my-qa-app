"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export default function GeneralVision() {
  const t = useTranslations("General.visionMission");

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 relative overflow-hidden select-none">
      <div className="container max-w-7xl mx-auto">
        {/* Vision Section - Left aligned large typography */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
        >
          <div className="lg:col-span-12 z-10">
            <motion.div custom={0} variants={fadeIn} className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">01. {t("vision.title")}</span>
            </motion.div>

            <motion.h2 custom={1} variants={fadeIn} className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter max-w-[100%]">
              {t.rich("vision.desc", {
                highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
              })}
            </motion.h2>
          </div>

          <motion.div
            custom={2}
            variants={fadeIn}
            className="absolute -right-20 top-0 opacity-[0.02] select-none pointer-events-none hidden lg:block -z-10"
          >
            <span className="text-[18vw] text-white/5 font-black italic leading-none uppercase">VISION</span>
          </motion.div>
        </motion.div>

        {/* Decorative Grid items */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none -z-10">
          <div className="grid grid-cols-6 h-full w-full border-x border-white/10">
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
