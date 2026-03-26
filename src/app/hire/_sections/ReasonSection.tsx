'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Info, Sparkles, Clock, ShieldCheck, LifeBuoy, Globe, Activity, Layers } from 'lucide-react';

const ReasonSection = () => {
    const t = useTranslations('HirePage.ReasonSection');

    const reasons = [
        { id: 1, text: t('items.1'), icon: <Clock className="w-7 h-7 text-primary" /> },
        { id: 2, text: t('items.2'), icon: <ShieldCheck className="w-7 h-7 text-primary" /> },
        { id: 3, text: t('items.3'), icon: <LifeBuoy className="w-7 h-7 text-primary" /> },
        { id: 4, text: t('items.4'), icon: <Globe className="w-7 h-7 text-primary" /> },
        { id: 5, text: t('items.5'), icon: <Activity className="w-7 h-7 text-primary" /> },
        { id: 6, text: t('items.6'), icon: <Layers className="w-7 h-7 text-primary" /> },
    ];

    return (
        <section className="relative py-24 overflow-hidden select-none">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 space-y-4">
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
                        className="section-title"
                    >
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-primary/50 hover:bg-zinc-900/60 transition-all duration-500 backdrop-blur-xl shadow-xl flex items-center gap-6"
                        >
                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-500">
                                {reason.text}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReasonSection;
