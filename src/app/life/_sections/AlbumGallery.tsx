"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { getLifeImages } from '@/services/life';
import { LifeImage } from '@/services/life/types';
import { X } from 'lucide-react';

export default function AlbumGallery() {
    const t = useTranslations('LifePage.gallery');
    const locale = useLocale();
    const [activeFilter, setActiveFilter] = useState('all');
    const [photos, setPhotos] = useState<LifeImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState<LifeImage | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const data = await getLifeImages();
            setPhotos(data);
            setLoading(false);
        };
        fetchPhotos();
    }, []);

    // Prevent scroll when lightbox is open
    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPhoto]);

    const filteredPhotos = photos.filter(photo =>
        activeFilter === 'all' || photo.type === activeFilter
    );

    const categories = ['all', 'team', 'office', 'events', 'growth'];

    if (loading && photos.length === 0) {
        return (
            <div className="py-32 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
            </div>
        );
    }

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

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[400px]">
                <AnimatePresence mode='popLayout'>
                    {filteredPhotos.map((photo) => (
                        <motion.div
                            layout
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <div className="group relative bg-[#fdfdfd] p-4 pb-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 active:scale-95 cursor-pointer rounded-sm">
                                <div className="relative aspect-square overflow-hidden mb-4 rounded-xs">
                                    <Image
                                        src={photo.url}
                                        alt={locale === 'vi' ? photo.description.vi : photo.description.en}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="px-2 space-y-4">
                                    <p className="text-zinc-800 font-semibold text-sm leading-relaxed font-serif italic text-center">
                                        {locale === 'vi' ? photo.description.vi : photo.description.en}
                                    </p>

                                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                                        <span className="text-[10px] md:text-xs font-black text-primary/60 tracking-widest uppercase">
                                            #{t(`filters.${photo.type}`)}
                                        </span>
                                        {photo.date && (
                                            <span className="text-[10px] md:text-xs font-bold text-zinc-400 font-mono">
                                                {new Date(photo.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {!loading && filteredPhotos.length === 0 && (
                    <div className="col-span-full h-64 flex items-center justify-center">
                        <p className="text-zinc-500 italic">Chưa có ảnh nào trong mục này.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-110 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPhoto(null);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={selectedPhoto.url}
                                    alt={locale === 'vi' ? selectedPhoto.description.vi : selectedPhoto.description.en}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center space-y-2 px-4"
                            >
                                <p className="text-white text-lg md:text-2xl font-serif italic">
                                    {locale === 'vi' ? selectedPhoto.description.vi : selectedPhoto.description.en}
                                </p>
                                <div className="flex items-center justify-center gap-4 text-xs font-black tracking-widest uppercase text-primary/80">
                                    <span>#{t(`filters.${selectedPhoto.type}`)}</span>
                                    {selectedPhoto.date && (
                                        <span className="text-zinc-500">
                                            {new Date(selectedPhoto.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
