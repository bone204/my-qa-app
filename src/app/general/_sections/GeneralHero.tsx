"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import MagicRings from "@/components/ui/MagicRings";

export default function GeneralHero() {
  const t = useTranslations("General.hero");

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20 px-4 select-none">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Huge QKIT Text - Non-Video version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-full flex flex-col items-center justify-center -mt-8 mb-4 pointer-events-none select-none"
        >
          <h2 className="text-[16vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-white/80 to-primary/20">
            QKIT
          </h2>
          
          {/* Decorative Glitch-like line */}
          <motion.div 
            className="absolute bottom-4 left-1/3 right-1/3 h-[2px] bg-linear-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 max-w-4xl"
        >
          <h4 className="text-primary font-bold tracking-tight mb-4 text-xl">
            {t("whoWeAre")}
          </h4>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t("headline")}
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
            {t("culture")}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="h-[2px] w-12 bg-zinc-800" />
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <div className="h-[2px] w-12 bg-zinc-800" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
