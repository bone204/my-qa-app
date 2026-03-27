"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VIDEOS } from '@/constants/video';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

const VIDEOS_LIST = [
    {
        id: 1,
        src: VIDEOS.video1,
        title: "Code Crafting"
    },
    {
        id: 2,
        src: VIDEOS.video2,
        title: "Digital Excellence"
    },
    {
        id: 3,
        src: VIDEOS.video3,
        title: "Technical Precision"
    }
];

import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function AboutSection() {
    const t = useTranslations('AboutSection');
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(0);

    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            scale: 0.9,
            opacity: 0,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            scale: 0.9,
            opacity: 0,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
            }
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex >= VIDEOS_LIST.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = VIDEOS_LIST.length - 1;
            return nextIndex;
        });
    };

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                paginate(1);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered, currentIndex]);

    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };


    return (
        <section className="relative flex min-h-screen w-full items-center justify-center bg-background pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
            {/* Background elements for depth */}


            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-700 z-20 select-none">
                        <div className="flex flex-col space-y-2">
                            <span className="section-subtitle">{t('subtitle')}</span>
                            <h2 className="section-title">
                                {t.rich('title', {
                                    highlight: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </h2>
                        </div>

                        <p className="section-desc">
                            {t('description')}
                        </p>

                        <div className="flex gap-4 pt-2">
                            <Button 
                                variant="body" 
                                className="w-full sm:w-auto"
                                onClick={() => router.push(ROUTES.ABOUT_US.OVERVIEW)}
                            >
                                {t('button')}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Video Carousel */}
                    <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-right duration-700 delay-200 relative">

                        {/* Decorative floating squares behind video */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 rounded-4xl md:rounded-[3rem] bg-linear-to-br from-primary/15 to-transparent border border-primary/20 backdrop-blur-lg -z-10"
                        />
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-12 -left-8 md:-top-16 md:-left-12 w-40 h-40 md:w-56 md:h-56 rounded-4xl md:rounded-[3.5rem] bg-linear-to-tl from-gray-200/80 to-gray-50 border border-gray-300 shadow-xl -z-10"
                        />
                        <motion.div
                            initial={{ rotate: 15 }}
                            animate={{ y: [0, -10, 0], rotate: [15, 30, 15], scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-6 md:-right-10 w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-md -z-10 shadow-lg"
                        />

                        {/* Floating Interactive Code Element */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="hidden md:block absolute -bottom-10 -left-6 md:-bottom-12 md:-left-16 z-20 group perspective-[1000px]"
                        >
                            <div className="relative p-4 md:p-5 rounded-2xl bg-[#0d1117] border border-gray-800 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-4 group-hover:scale-[1.02] shadow-primary/25 hover:shadow-[0_20px_40px_var(--tw-shadow-color)] min-w-[220px] md:min-w-[280px]">
                                {/* macOS Window Controls */}
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                                </div>

                                <div className="font-mono text-[13px] md:text-sm text-gray-300 overflow-hidden leading-relaxed">

                                    {/* Default state: Blinking cursor */}
                                    <div className="block group-hover:hidden transition-opacity duration-300">
                                        <p className="flex items-center text-primary">
                                            <span className="mr-2 text-gray-500 font-bold">{">"}</span>
                                            <motion.span
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.2, repeat: Infinity }}
                                                className="text-white font-bold inline-block w-2 bg-gray-400 h-4"
                                            />
                                        </p>
                                    </div>

                                    {/* Hover State: Typing Code Animation */}
                                    <div className="hidden group-hover:block transition-all duration-300">

                                        {/* Line 1 */}
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            whileInView={{ opacity: 1, width: "100%" }}
                                            transition={{ duration: 0.5, ease: "linear" }}
                                            className="whitespace-nowrap overflow-hidden"
                                        >
                                            <span className="text-[#ff7b72]">async function</span> <span className="text-[#d2a8ff]">buildFuture</span>() {"{"}
                                        </motion.div>

                                        {/* Line 2 */}
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            whileInView={{ opacity: 1, width: "100%" }}
                                            transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
                                            className="whitespace-nowrap overflow-hidden pl-4 mt-1"
                                        >
                                            <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">vision</span> = <span className="text-[#ff7b72]">await</span> <span className="text-[#d2a8ff]">Innovate</span>();
                                        </motion.div>

                                        {/* Line 3 */}
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            whileInView={{ opacity: 1, width: "100%" }}
                                            transition={{ duration: 0.5, delay: 1.1, ease: "linear" }}
                                            className="whitespace-nowrap overflow-hidden pl-4 mt-1 bg-primary/20 inline-block px-1 rounded-sm"
                                        >
                                            <span className="text-[#ff7b72]">return</span> <span className="text-[#79c0ff]">vision</span>.<span className="text-[#d2a8ff]">deploy</span>();
                                        </motion.div>

                                        {/* Line 4 */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 1.6 }}
                                            className="mt-1"
                                        >
                                            {"}"}
                                        </motion.div>

                                        {/* Blinking Cursor at the end */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.8 }}
                                        >
                                            <p className="flex items-center text-gray-500 mt-2">
                                                <span className="mr-2 font-bold">{">"}</span>
                                                <motion.span
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity }}
                                                    className="inline-block w-2 bg-gray-400 h-4"
                                                />
                                            </p>
                                        </motion.div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                        <div
                            className="relative group perspective-[1000px] w-full z-10"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Decorative element behind video */}
                            <div className="absolute -inset-4 rounded-[3.5rem] bg-linear-to-tr from-primary/20 to-transparent blur-2xl pointer-events-none scale-105 transition-all duration-700 group-hover:blur-3xl" />

                            {/* Main Video Wrapper */}
                            <div className="relative aspect-4/3 w-full rounded-[3rem] overflow-hidden bg-white/10 backdrop-blur-sm p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/20">
                                <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-gray-900 shadow-inner">
                                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                        <motion.div
                                            key={currentIndex}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={1}
                                            onDragEnd={handleDragEnd}
                                            className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full will-change-transform z-0"
                                        >
                                            <video
                                                className="h-full w-full object-cover pointer-events-none"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                key={VIDEOS_LIST[currentIndex].src}
                                            >
                                                <source src={VIDEOS_LIST[currentIndex].src} type="video/mp4" />
                                            </video>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Controls (Visible on Hover) */}
                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                                            className="pointer-events-auto h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all border border-white/30 shadow-lg"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); paginate(1); }}
                                            className="pointer-events-auto h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all border border-white/30 shadow-lg"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    {/* Pagination Dots */}
                                    <div className="absolute top-6 right-6 flex gap-2 z-20">
                                        {VIDEOS_LIST.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDirection(idx > currentIndex ? 1 : -1);
                                                    setCurrentIndex(idx);
                                                }}
                                                className={`h-2 rounded-full transition-all duration-300 pointer-events-auto ${idx === currentIndex
                                                    ? "w-8 bg-white"
                                                    : "w-2 bg-white/40 hover:bg-white/70"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
