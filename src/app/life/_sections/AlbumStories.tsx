"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AlbumStories() {
    const t = useTranslations('LifePage.stories');

    return (
        <section className="space-y-32 mb-40">
            {/* Story 1 */}
            <div className="relative min-h-screen overflow-hidden flex items-center justify-center group">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/img_01.jpg"
                        alt="Office"
                        fill
                        className="object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                    >
                        {t('milestone1.title')}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-xl max-w-xl mx-auto italic font-serif"
                    >
                        {t('milestone1.description')}
                    </motion.p>
                </div>
            </div>

            {/* Story 2 */}
            <div className="relative min-h-screen overflow-hidden flex items-center justify-center group">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/img_02.jpg"
                        alt="Success"
                        fill
                        className="object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                    >
                        {t('milestone2.title')}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-xl max-w-xl mx-auto italic font-serif"
                    >
                        {t('milestone2.description')}
                    </motion.p>
                </div>
            </div>

            {/* Story 3 */}
            <div className="relative min-h-screen overflow-hidden flex items-center justify-center group">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/img_03.jpg"
                        alt="Growth"
                        fill
                        className="object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-black/70" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                    >
                        {t('milestone3.title')}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-xl max-w-xl mx-auto italic font-serif"
                    >
                        {t('milestone3.description')}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
