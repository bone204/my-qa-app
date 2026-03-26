"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { projects } from '@/components/home/Projects/projectsData';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function EvidenceSection() {
    const t = useTranslations('EvidenceSection');
    const pt = useTranslations('ProjectsSection');

    const brands = [
        { name: 'Google', color: 'text-white', logo: '/brands/google.svg' },
        { name: 'Tinder', color: 'text-white', logo: '/brands/tinder.svg' },
        { name: 'Maersk', color: 'text-white', logo: '/brands/maersk.svg' },
    ];

    const hireProjects = [
        { id: 'kids', color: 'from-blue-500 to-cyan-400', category: 'Education' },
        { id: 'fitness', color: 'from-emerald-500 to-teal-400', category: 'Health & Fitness' },
        { id: 'psychology', color: 'from-purple-500 to-pink-400', category: 'Psychology' },
    ];

    return (
        <section className="relative py-24 w-full overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {t('title')}
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
                    >
                        {t('subtitle')}
                    </motion.h2>

                    {/* Logo Marquee-style Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 mt-8">
                        {brands.map((brand) => (
                            <div key={brand.name} className="flex items-center gap-3 group">
                                <span className={`text-2xl md:text-4xl font-black tracking-tighter ${brand.color} group-hover:text-primary transition-colors`}>
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="mt-24 space-y-12">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            {t('projectsTitle')}
                        </h3>
                        <div className="hidden md:block h-px flex-1 mx-8 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hireProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                     {/* Subtle Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="w-full h-full rounded-2xl bg-zinc-950/50 backdrop-blur-sm border border-white/5 flex flex-col justify-end p-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                                                {project.category}
                                            </span>
                                            <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                                                {t(`projects.${project.id}.title`)}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <p className="text-sm text-zinc-400 leading-relaxed min-h-[80px]">
                                        {t(`projects.${project.id}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background blur effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
