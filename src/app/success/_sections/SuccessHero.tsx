"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SuccessHero() {
    const t = useTranslations("SuccessPage.hero");

    return (
        <section className="relative pt-32 pb-20 overflow-hidden select-none">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-24 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-48 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">{t('subtitle')}</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="review-title text-center text-5xl md:text-7xl mb-8"
                    >
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
