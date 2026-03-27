"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface HireHeroSectionProps {
    ns?: string;
    slug?: string;
}

export default function HireHeroSection({ ns = 'HirePage', slug }: HireHeroSectionProps) {
    const t = useTranslations(ns as any);
    const tBenefits = useTranslations('HirePage');

    const benefits = [
        tBenefits('benefits.replacement'),
        tBenefits('benefits.flexible'),
        tBenefits('benefits.nda'),
        tBenefits('benefits.refund')
    ];

    return (
        <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 select-none">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Side: Content */}
                    <div className="w-full lg:flex-1 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="section-subtitle">{t(slug ? `${slug}.subtitle` : 'subtitle')}</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h1 className="section-title text-start max-w-none!">
                                    {t.rich(slug ? `${slug}.title` : 'title', {
                                        highlight: (chunks) => <span className="text-primary">{chunks}</span>
                                    })}
                                </h1>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-desc text-start max-w-none! font-medium"
                        >
                            {t(slug ? `${slug}.description` : 'description')}
                        </motion.p>
                    </div>

                    {/* Right Side: Benefits */}
                    <div className="w-full lg:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-1 gap-6"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-primary/30"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20 transition-transform group-hover:scale-110">
                                        <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-lg font-bold text-white tracking-tight">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
