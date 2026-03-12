"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import MagicBento from '@/components/MagicBento';
import { Hourglass, Calendar, Lock, Send } from 'lucide-react';
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
            color: '#3b82f6',
            className: 'col-span-12 md:col-span-4 hover:shadow-blue-500/20',
            style: { backgroundColor: '#3b82f6' },
            content: (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{t('fixed')}</h3>
                </div>
            )
        },
        {
            className: 'col-span-12',
            style: { padding: 0, minHeight: 'auto' },
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-[250px]">
                    {/* Left side: Pink Gradient */}
                    <div className="bg-linear-to-r from-[#e91e63] to-[#ff6b6b] p-10 flex items-center justify-center text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                            {t.rich('twoDays', {
                                highlight: (chunks) => <span className="text-5xl md:text-6xl font-bold block mt-2">{chunks}</span>
                            })}
                        </h2>
                    </div>
                    {/* Right side: Contact Form */}
                    <div className="bg-[#1a1a1a] p-10 flex flex-col justify-center space-y-6">
                        <h3 className="text-xl font-semibold text-[#ff6b6b]">{t('hireNow')}</h3>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                className="w-full bg-black/40 border border-white/10 rounded-full py-4 px-6 text-white outline-none focus:border-[#ff6b6b]/50 transition-colors pr-36"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-linear-to-r from-[#e91e63] to-[#ff6b6b] text-white px-6 rounded-full font-bold flex items-center space-x-2 hover:opacity-90 transition-opacity uppercase text-sm">
                                <span>{t('sendNow')}</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-white/40 italic">
                            {t('spamNotice')}
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-normal text-white"
                    >
                        {t('title')}
                    </motion.h2>
                </div>

                <MagicBento cards={cards} glowColor="132, 0, 255" />
            </div>
        </section>
    );
};

export default JoinSection;
