"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const HERO_ASSETS = [
    { id: 1, src: '/images/img_04.jpg', x: 8, y: 12, rotate: -12 },
    { id: 2, src: '/images/img_05.jpg', x: 82, y: 8, rotate: 15 },
    { id: 3, src: '/images/img_07.jpg', x: 5, y: 75, rotate: -8 },
    { id: 4, src: '/images/img_08.jpg', x: 88, y: 72, rotate: 10 },
    { id: 5, src: '/images/img_02.jpg', x: 75, y: 45, rotate: -5 },
];

export default function AlbumHero() {
    const t = useTranslations('LifePage.hero');
    const { scrollY } = useScroll();
    
    // Parallax effect for scattered photos
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-8">
            {/* Artistic Scattered Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                {HERO_ASSETS.map((asset, index) => (
                    <motion.div
                        key={asset.id}
                        style={{ 
                            left: `${asset.x}%`, 
                            top: `${asset.y}%`,
                            y: index % 2 === 0 ? y1 : y2,
                            rotate: asset.rotate
                        }}
                        className="absolute w-32 md:w-64 aspect-4/5 bg-white p-1.5 pb-6 md:p-2 md:pb-8 shadow-2xl skew-x-1"
                    >
                         <div className="relative w-full h-full grayscale-50 hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-xs">
                            <Image 
                                src={asset.src} 
                                alt="Memory" 
                                fill 
                                className="object-cover"
                            />
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                        {t('subtitle')}
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-tight md:leading-[0.8] mb-12 flex flex-wrap justify-center gap-y-4"
                >
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
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-zinc-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto italic"
                >
                    "{t('description')}"
                </motion.p>
            </div>
        </section>
    );
}
