"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LIFE_PHOTOS } from '@/data/life/life-data';
import { cn } from '@/lib/utils';

export default function AlbumGallery() {
    const t = useTranslations('LifePage.gallery');
    const tp = useTranslations('LifePage.photos');
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredPhotos = LIFE_PHOTOS.filter(photo => 
        activeFilter === 'all' || photo.category === activeFilter
    );

    const categories = ['all', 'team', 'office', 'events', 'growth'];

    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter flex flex-wrap gap-y-2">
                        {t.rich('title', {
                            highlight: (chunks) => (
                                <span className="text-primary italic font-serif mx-2 md:mx-4">
                                    {chunks}
                                </span>
                            ),
                            important: (chunks) => (
                                <span className="text-primary italic font-serif mx-2 md:mx-4">
                                    {chunks}
                                </span>
                            )
                        })}
                    </h2>
                    <p className="text-zinc-500 font-medium text-lg">{t('subtitle')}</p>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/3 border border-white/8 w-fit shrink-0 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={cn(
                                "relative px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 min-w-fit",
                                activeFilter === cat
                                    ? "text-white"
                                    : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            {activeFilter === cat && (
                                <motion.div
                                    layoutId="active-pill-life"
                                    className="absolute inset-0 rounded-xl bg-primary border border-primary/20 shadow-[0_0_20px_rgba(215,38,90,0.3)]"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{t(`filters.${cat}`)}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                <AnimatePresence mode='popLayout'>
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            layout
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid"
                        >
                            <div className="group relative bg-[#fdfdfd] p-4 pb-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 active:scale-95 cursor-pointer rounded-sm">
                                <div className="relative aspect-square overflow-hidden mb-4 rounded-xs">
                                    <Image 
                                        src={photo.url} 
                                        alt={tp(photo.captionKey)} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="px-2">
                                    <p className="text-zinc-800 font-semibold text-sm leading-relaxed font-serif italic text-center">
                                         {tp(photo.captionKey)}
                                    </p>
                                </div>
                                <div className="absolute bottom-4 right-4 text-[9px] font-black text-zinc-300 tracking-[0.2em] uppercase">
                                    #{t(`filters.${photo.category}`)}
                                </div>
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                                     <span className="text-black text-xs">📷</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
