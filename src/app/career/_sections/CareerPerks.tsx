"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  CheckCircle2, 
  Sparkles,
  ShieldCheck, 
  Calendar, 
  TrendingUp, 
  Palmtree, 
  DollarSign, 
  PartyPopper, 
  FileText, 
  Utensils, 
  Globe, 
  Soup, 
  Cookie, 
  MessageCircle, 
  Trophy, 
  GraduationCap, 
  Gamepad2,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const MAJOR_PERKS = [0, 1, 4, 8, 13];
const MINOR_PERKS = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

const ICON_MAP: Record<number, any> = {
  0: ShieldCheck, 1: Calendar, 2: TrendingUp, 3: Palmtree, 4: DollarSign,
  5: PartyPopper, 6: FileText, 7: Utensils, 8: Globe, 9: Soup,
  10: Cookie, 11: MessageCircle, 12: Trophy, 13: GraduationCap, 14: Gamepad2
};

const COLOR_MAP: Record<number, string> = {
  0: "from-blue-500/20 to-cyan-500/20",
  1: "from-emerald-500/20 to-teal-500/20",
  4: "from-amber-500/20 to-orange-500/20",
  8: "from-indigo-500/20 to-purple-500/20",
  13: "from-rose-500/20 to-pink-500/20",
};

export default function CareerPerks() {
  const t = useTranslations("Career");

  return (
    <section className="pb-32 relative select-none">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
              {t("perks.title")}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter"
          >
            {t.rich('perks.header', {
              highlight: (chunks) => <span className="text-primary">{chunks}</span>
            })}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left Column: Sidebar Area (Now on the left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="relative rounded-[3rem] bg-zinc-900/60 transition-all duration-500 backdrop-blur-3xl p-1.5 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="p-10 flex flex-col">
                  {/* Gradient Box */}
                  <div className="relative rounded-3xl bg-linear-to-br from-primary to-[#f43f5e] p-10 mb-0 pb-24 overflow-hidden shadow-lg shadow-primary/20">
                    <div className="relative z-10">
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-90">
                        {t('perks.sidebar.subtitle')}
                      </p>
                      <h4 className="text-4xl font-black text-white tracking-tighter leading-[0.9]">
                        {t.rich('perks.sidebar.title', {
                          lineBreak: () => <br/>
                        })}
                      </h4>
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-50" />
                  </div>
                  
                  {/* Highlights Box */}
                  <div className="relative -mt-16 bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl border border-white/10 flex flex-col space-y-12">
                    <div className="space-y-6">
                      <h5 className="text-white font-black text-2xl tracking-tighter leading-[1.1]">
                        {t.rich('perks.sidebar.readyTitle', {
                          lineBreak: () => <br />,
                          highlight: (chunks) => <span className="text-primary text-3xl block mt-1 underline decoration-primary/30 underline-offset-8">{chunks}</span>
                        })}
                      </h5>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                        {t('perks.sidebar.readyDesc')}
                      </p>
                    </div>

                    <Button 
                      variant="primary" 
                      className="w-full justify-center py-6 group"
                    >
                      <div className="flex items-center justify-center gap-4 text-[13px] font-black uppercase tracking-[0.2em]">
                        <span>{t('perks.sidebar.button')}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Major Perks List (Now on the right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="grid grid-cols-1 gap-12">
              {MAJOR_PERKS.map((idx, index) => {
                const Icon = ICON_MAP[idx];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative rounded-4xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row min-h-[300px]">
                      {/* Visual Section */}
                      <div className={cn(
                        "w-full md:w-2/5 relative overflow-hidden bg-zinc-950 flex items-center justify-center",
                        "bg-linear-to-br",
                        COLOR_MAP[idx]
                      )}>
                        <Icon className="w-24 h-24 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 opacity-80" />
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-zinc-950/40" />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                            {t('perks.majorBadge')}
                          </span>
                          <div className="h-px bg-white/5 grow" />
                          <span className="text-[11px] font-black text-zinc-600 group-hover:text-primary/40 transition-colors">0{index + 1}</span>
                        </div>
                        
                        <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight leading-none">
                          {t(`perks.items.${idx}.title`)}
                        </h3>
                        
                        <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                          {t(`perks.items.${idx}.desc`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Consolidated Minor Perks Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative rounded-4xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden shadow-xl"
              >
                <div className="flex flex-col md:flex-row min-h-[400px]">
                  {/* Visual Section */}
                  <div className="w-full md:w-2/5 relative overflow-hidden bg-zinc-950 flex items-center justify-center bg-linear-to-br from-indigo-500/20 to-purple-500/20">
                    <Sparkles className="w-28 h-28 text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 opacity-80" />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-zinc-950/40" />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
                        {t('perks.additional.badge')}
                      </span>
                      <div className="h-px bg-white/5 grow" />
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-10 tracking-tighter leading-none">
                      {t.rich('perks.additional.title', {
                        highlight: (chunks) => <span className="text-primary italic">{chunks}</span>,
                        lineBreak: () => <br/>
                      })}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {MINOR_PERKS.map((idx) => (
                        <div key={idx} className="flex items-center gap-4 group/feat">
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/feat:border-primary/50 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                            {t(`perks.items.${idx}.title`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
