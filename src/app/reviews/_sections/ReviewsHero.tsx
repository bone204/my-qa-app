"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';

const REVIEW_IDS = ["1", "3", "4"]; // CEO, Founder, Marketing Director

export default function ReviewsHero() {
    const t = useTranslations('ReviewsPage.hero');
    const tSection = useTranslations('ReviewsSection');

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden select-none">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full translate-y-1/2 opacity-30" />

            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
                    {/* Header */}
                    <div className="max-w-4xl space-y-6 pt-12 md:pt-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight"
                        >
                            {t.rich('title', {
                                highlight: (chunks) => (
                                    <span className="text-primary drop-shadow-[0_0_25px_rgba(215,38,90,0.5)] tracking-tighter">
                                        {chunks}
                                    </span>
                                )
                            })}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="max-w-3xl mx-auto text-base md:text-xl text-zinc-400 leading-relaxed font-medium"
                        >
                            {t('description')}
                        </motion.p>
                    </div>

                    {/* Integrated Reviews List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                        {REVIEW_IDS.map((id, index) => {
                            const name = tSection(`reviews.${id}.name`);
                            const role = tSection(`reviews.${id}.role`);
                            const content = tSection(`reviews.${id}.content`);
                            
                            return (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl hover:bg-zinc-800/50 transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                            <Quote size={20} />
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed mb-8 flex-grow line-clamp-5">
                                        "{content}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 overflow-hidden flex items-center justify-center text-white font-bold uppercase">
                                            {role.charAt(0)}
                                        </div>
                                        <div className="text-left flex flex-col justify-center">
                                            <h4 className="text-base md:text-lg font-bold text-white tracking-wide leading-tight">{name}</h4>
                                            <p className="text-[10px] md:text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-1">{role}</p>
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 rounded-[2rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
