"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Sparkles, CheckCircle2, MessageSquare, Search, Users, Rocket } from 'lucide-react';

export default function WorkExperienceSection() {
    // IMPORTANT: Changed namespace to HirePage to resolve translation lookup issues
    const t = useTranslations('HirePage');
    const tp = useTranslations('ProcessSection');

    // Access nested WorkExperienceSection keys
    const guarantees = tp.raw('left.guarantees') as string[];

    // Define process steps with icons
    const steps = [
        { id: 1, icon: <MessageSquare className="w-8 h-8" /> },
        { id: 2, icon: <Search className="w-8 h-8" /> },
        { id: 3, icon: <Users className="w-8 h-8" /> },
        { id: 4, icon: <Rocket className="w-8 h-8" /> },
    ];
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start 0.4"]
    });

    const sectionWidth = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);
    const sectionRadius = useTransform(scrollYProgress, [0, 1], ["6rem", "0rem"]);

    return (
        <div ref={containerRef} className="w-full flex justify-center bg-background py-12 md:py-24">
            <motion.section
                style={{ width: sectionWidth }}
                className="relative py-24 flex flex-col items-center"
            >
                {/* Visual Background with animated radius - Decoupled to fix position:sticky */}
                <motion.div
                    style={{ borderRadius: sectionRadius }}
                    className="absolute inset-0 bg-primary overflow-hidden -z-10"
                >
                    {/* Background Decorative Elements moved here to be clipped by the radius */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                                {t('WorkExperienceSection.subtitle')}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
                        >
                            {t.rich('WorkExperienceSection.title', {
                                highlight: (chunks) => <span className="text-white drop-shadow-sm opacity-90">{chunks}</span>
                            })}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/80 leading-relaxed font-medium"
                        >
                            {t('WorkExperienceSection.description')}
                        </motion.p>
                    </div>

                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full aspect-video max-w-7xl mx-auto rounded-4xl overflow-hidden border border-white/20 shadow-2xl group"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                        >
                            <source src="/videos/video-1.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 w-full max-w-7xl mx-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 text-left">

                            {/* Left Sticky Content Column - Nested Sticky Div is the Key Fix */}
                            <div className="w-full lg:col-span-5">
                                <div className="lg:sticky lg:top-32 space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
                                            {tp('left.title')}
                                        </h2>
                                        <div className="space-y-6 bg-zinc-900/60 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                                            {/* Subtle gradient background like Success Page sidebar */}
                                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <h3 className="text-xl font-bold text-white uppercase tracking-widest opacity-80 relative z-10">
                                                {tp('left.subtitle')}
                                            </h3>
                                            <ul className="space-y-4">
                                                {guarantees.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4 group">
                                                        <div className="p-1 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-primary transition-all duration-300 mt-1">
                                                            <CheckCircle2 className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-white/80 group-hover:text-white transition-colors text-base font-medium">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Steps Content */}
                            <div className="w-full lg:col-span-7 space-y-12">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="group relative"
                                    >
                                        <div className="flex gap-8 p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 hover:bg-zinc-900/60 transition-all duration-700 overflow-hidden backdrop-blur-xl shadow-xl">
                                            {/* Step Number Background */}
                                            <span className="absolute -right-8 -bottom-8 text-9xl font-black text-white/5 select-none transition-colors group-hover:text-white/10">
                                                0{step.id}
                                            </span>

                                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                                {step.icon}
                                            </div>

                                            <div className="space-y-4 relative z-10">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-white/60 font-black text-xl italic uppercase tracking-tighter">Step {step.id}</span>
                                                    <div className="h-px w-12 bg-white/20" />
                                                </div>
                                                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                                    {tp(`steps.${step.id}.title`)}
                                                </h4>
                                                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                                                    {tp(`steps.${step.id}.description`)}
                                                </p>
                                            </div>
                                        </div>

                                        {index < steps.length - 1 && (
                                            <div className="absolute left-14 lg:left-14 top-full h-12 w-px bg-linear-to-b from-white/30 to-transparent" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
