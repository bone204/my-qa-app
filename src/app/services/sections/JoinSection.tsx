"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import MagicBento from '@/components/MagicBento';
import { Hourglass, Calendar, Lock, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const JoinSection = () => {
    const t = useTranslations('JoinSection');

    const cards = [
        {
            color: '#1a1a1a',
            className: 'col-span-12 md:col-span-4',
            content: (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <Hourglass className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{t('hourly')}</h3>
                </div>
            )
        },
        {
            color: '#1a1a1a',
            className: 'col-span-12 md:col-span-4',
            content: (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{t('monthly')}</h3>
                </div>
            )
        },
        {
            color: '#1a1a1a',
            className: 'col-span-12 md:col-span-4 border-white/5',
            content: (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{t('fixed')}</h3>
                </div>
            )
        },
        {
            className: 'col-span-12',
            style: { padding: 0, minHeight: 'auto' },
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[300px]">
                    {/* Left side: Premium Gradient */}
                    <div className="bg-linear-to-br from-primary via-blue-600 to-indigo-800 p-10 flex items-center justify-center text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                            {t.rich('twoDays', {
                                highlight: (chunks) => <span className="text-5xl md:text-7xl font-bold block mt-2">{chunks}</span>
                            })}
                        </h2>
                    </div>
                    {/* Right side: Contact Form */}
                    <div className="bg-zinc-950 p-10 flex flex-col justify-center space-y-6">
                        <h3 className="text-xl font-semibold text-primary">{t('hireNow')}</h3>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-primary/50 transition-colors pr-36"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg font-bold flex items-center space-x-2 hover:opacity-90 transition-opacity uppercase text-sm">
                                <span>{t('sendNow')}</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-zinc-500 italic">
                            {t('spamNotice')}
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">{t('subtitle')}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="review-title text-center"
                    >
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h2>
                </div>

                <MagicBento cards={cards} glowColor="132, 0, 255" />
            </div>
        </section>
    );
};

export default JoinSection;
