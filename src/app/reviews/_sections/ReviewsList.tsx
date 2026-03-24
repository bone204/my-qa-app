"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const REVIEW_IDS = ["1", "3", "4"]; // CEO, Founder, Marketing Director

export default function ReviewsList() {
    const t = useTranslations('ReviewsSection');

    return (
        <section className="py-20 relative select-none">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEW_IDS.map((id, index) => {
                        const role = t(`reviews.${id}.role`);
                        const content = t(`reviews.${id}.content`);
                        
                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl hover:bg-zinc-800/50 transition-all duration-500 overflow-hidden"
                            >
                                {/* Animated Highlight on Hover */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-indigo-500 translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                            <Quote className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-10 flex-grow">
                                        "{content}"
                                    </p>

                                    <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 overflow-hidden flex items-center justify-center">
                                            <span className="text-lg font-bold text-white uppercase">{role.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white tracking-wide">{t(`reviews.${id}.name`)}</h4>
                                            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">{role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
