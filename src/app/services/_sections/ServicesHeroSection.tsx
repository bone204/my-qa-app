"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export default function ServicesHeroSection() {
    const t = useTranslations('ServicesPage.hero');

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden select-none">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Side: Title & Description */}
                    <div className="w-full lg:flex-1 lg:max-w-2xl flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="flex flex-col space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="section-subtitle text-start"
                            >
                                {t('subtitle')}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="section-title text-start max-w-none!"
                            >
                                {t.rich('title', {
                                    highlight: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="section-desc text-start max-w-none! font-medium"
                        >
                            {t('description')}
                        </motion.p>
                    </div>

                    {/* Right Side: Project Hiring Card */}
                    <div className="w-full lg:w-[550px] shrink-0 animate-in fade-in slide-in-from-right duration-700 delay-200">
                        <div className="relative group p-1">
                            {/* Animated Glow Border */}
                            <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-white/20 to-primary rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

                            <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        {t('card.title')}
                                    </h3>
                                </div>

                                <p className="text-zinc-400 leading-relaxed font-medium">
                                    {t('card.description')}
                                </p>

                                <div className="space-y-4">
                                    {['0', '1', '2'].map((key) => (
                                        <div key={key} className="flex items-center gap-3 text-sm text-zinc-300 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span>{t(`card.features.${key}`)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <a href="#contact" className="block">
                                        <Button variant="body" className="w-full">
                                            {t('card.button')}
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
