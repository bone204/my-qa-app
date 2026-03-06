"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
    {
        id: 1,
        src: "https://www.youtube.com/watch?v=PD61lIYrG-M",
        title: "Code Crafting"
    },
    {
        id: 2,
        src: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4",
        title: "Digital Excellence"
    },
    {
        id: 3,
        src: "https://assets.mixkit.co/videos/preview/mixkit-computer-screen-with-code-on-it-34533-large.mp4",
        title: "Technical Precision"
    }
];

export default function AboutSection() {
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
            if (nextIndex >= VIDEOS.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = VIDEOS.length - 1;
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
        <section className="relative flex min-h-screen w-full items-center justify-center bg-background py-24 overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 h-full w-1/2 bg-(--primary)/5 pointer-events-none" />

            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-700 z-20">
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm font-bold text-[#d7265a] uppercase tracking-widest">Our Mission</span>
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1]">
                                We Build <span className="text-[#d7265a]">Digital</span> Masterpieces.
                            </h2>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Specializing in high-performance software and luxury logistics platforms.
                            We combine aesthetic excellence with technical precision to deliver
                            extraordinary results for our global partners.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <button className="rounded-2xl bg-[#d7265a] px-10 py-5 font-bold text-white shadow-[0_20px_40px_rgba(215,38,90,0.2)] hover:scale-105 transition-all">
                                Discover More
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Video Carousel */}
                    <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-right duration-700 delay-200">
                        <div 
                            className="relative group perspective-[1000px] w-full"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Decorative element behind video */}
                            <div className="absolute -inset-4 rounded-[3.5rem] bg-linear-to-tr from-[#d7265a]/20 to-transparent blur-2xl pointer-events-none scale-105 transition-all duration-700 group-hover:blur-3xl" />

                            {/* Main Video Wrapper */}
                            <div className="relative aspect-4/5 md:aspect-4/3 w-full rounded-[3rem] overflow-hidden bg-white/50 backdrop-blur-sm p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-white/50">
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
                                                key={VIDEOS[currentIndex].src}
                                            >
                                                <source src={VIDEOS[currentIndex].src} type="video/mp4" />
                                            </video>
                                            
                                            {/* Gradient Overlay for title readability */}
                                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                                            
                                            <motion.div 
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="absolute bottom-6 left-8 pointer-events-none"
                                            >
                                                <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                                                    {VIDEOS[currentIndex].title}
                                                </h3>
                                            </motion.div>
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
                                        {VIDEOS.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDirection(idx > currentIndex ? 1 : -1);
                                                    setCurrentIndex(idx);
                                                }}
                                                className={`h-2 rounded-full transition-all duration-300 pointer-events-auto ${
                                                    idx === currentIndex 
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
