"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function ContactCTASection() {
    const t = useTranslations('ServicesPage.contactCTA');

    return (
        <section className="relative py-16 overflow-hidden select-none">

            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group p-[2px] rounded-[4rem] overflow-hidden"
                >
                    {/* Animated Gradient Border - The "Special" Part */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_20%,#ec4899_40%,transparent_50%,transparent_70%,#ec4899_90%,transparent_100%)] animate-spin-slow opacity-40 group-hover:opacity-100 transition-opacity duration-1000 scale-[1.5]" />

                    <div className="relative bg-zinc-950/80 backdrop-blur-3xl rounded-[4rem] px-8 py-20 md:px-20 md:py-24 flex flex-col items-center text-center border border-white/10">
                        {/* Noise Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />

                        {/* Centered Focal Icon */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative mb-10"
                        >
                            <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse" />
                            <div className="relative w-20 h-20 rounded-3xl bg-linear-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center backdrop-blur-md">
                                <MessageCircle className="w-10 h-10 text-primary" />
                            </div>
                        </motion.div>

                        <div className="space-y-6 max-w-4xl">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="section-title text-4xl md:text-7xl"
                            >
                                {t('title')}
                            </motion.h2>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="section-desc text-lg md:text-2xl font-medium max-w-2xl mx-auto"
                            >
                                {t('description')}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="pt-12"
                        >
                            <Button variant="primary" className="px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
                                <span className="flex items-center gap-3">
                                    <Sparkles className="w-6 h-6" />
                                    {t('button')}
                                </span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
