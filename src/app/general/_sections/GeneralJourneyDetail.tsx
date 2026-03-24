"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Trees, Warehouse, Code2, Users2, Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function GeneralJourneyDetail() {
  const t = useTranslations("General.journeyDetails.milestone1");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const img3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const fadeInEffect: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const images = [
    {
      src: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2069&auto=format&fit=crop",
      size: "aspect-[4/5]",
      colSpan: "lg:col-span-4",
      title: t("title"),
      desc: t("engineers"),
      icon: <Users2 className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      size: "aspect-[4/5]",
      colSpan: "lg:col-span-4",
      title: t("title"),
      desc: t("office"),
      icon: <Warehouse className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      size: "aspect-[4/5]",
      colSpan: "lg:col-span-4",
      title: t("title"),
      desc: t("language"),
      icon: <Code2 className="w-6 h-6" />,
      delay: 0.3,
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen py-40 overflow-hidden select-none">
      {/* Background Year Typography */}
      <div className="absolute top-1/4 left-[46%] -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-5">
        <motion.h1
          style={{ opacity: textOpacity }}
          className="text-[40vw] font-black italic tracking-tighter leading-none text-white whitespace-nowrap"
        >
          QKIT
        </motion.h1>
      </div>

      <div className="container max-w-[90rem] mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className=" max-w-7xl mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInEffect}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <span className="text-8xl md:text-9xl font-black text-primary tracking-tighter leading-none italic">
                2018
              </span>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-black uppercase text-white tracking-[0.3em]">{t("date")}</p>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase italic tracking-tight flex flex-col gap-2">
              <span>{t("title")}</span>
              <span className="text-primary opacity-50 decoration-primary/30 underline-offset-8">THE BEGINNING</span>
            </h2>

            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed border-l-4 border-primary/20 pl-8">
              {t("desc")}
            </p>
          </motion.div>
        </div>

        {/* Synchronized Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {images.map((img, idx) => (
            <div key={idx} className="relative">
              {/* Reset Reveal Animation Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: img.delay, duration: 0.8, ease: "easeOut" }}
                className="relative group block"
              >
                {/* Image Card */}
                <div className={`${img.size} relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 glass-card transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-primary/20`}>
                  <Image
                    src={img.src}
                    alt={img.desc}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                  {/* Milestone Text Inside Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                      <div className="p-6 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 space-y-3">
                        <div className="flex items-center gap-3 text-primary">
                          <div className="w-1.5 h-5 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                          <span className="text-xs font-black tracking-[0.3em] uppercase">{img.title}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-black text-white leading-tight italic uppercase tracking-tighter">
                          {img.desc}
                        </p>
                      </div>
                  </div>
                </div>

                {/* Aesthetic Detail elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50" />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
