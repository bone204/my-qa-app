"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import CircularText from "@/components/ui/CircularText";

export default function GeneralJourney() {
  const t = useTranslations("General.journey");

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
      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeIn}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
                03. {t("title")} {t("subtitle")}
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter"
            >
              {t("headline").split('&')[0]}
              <span className="text-primary italic"> & </span>
              {t("headline").split('&')[1]}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium max-w-3xl"
            >
              {t("content")}
            </motion.p>
          </div>

          {/* Right Content - Large Decorative Number with Circular Text */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-center h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center w-full h-full"
            >
              {/* Single Circular Text with repeated content */}
              <div className="absolute inset-0 flex items-center justify-center scale-[1.5] lg:scale-[1.8]">
                <CircularText
                  text="8 SUCCESSFUL YEARS * 8 SUCCESSFUL YEARS * "
                  onHover="speedUp"
                  spinDuration={25}
                  className="text-primary/40 font-black tracking-widest text-xl"
                />
              </div>

               <span className="text-[30vw] lg:text-[15vw] font-black text-primary select-none leading-none animate-pulse">
                8
              </span>
              
              {/* Subtle glow effect behind the number */}
              <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements to stay consistent with other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none -z-10">
        <div className="grid grid-cols-6 h-full w-full border-x border-white/10">
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10" />
        </div>
      </div>
    </section>
  );
}
