"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function EvidenceSection() {
    const t = useTranslations('EvidenceSection');

    const brands = [
        { name: 'Google', color: 'text-white' },
        { name: 'Tinder', color: 'text-white' },
        { name: 'Maersk', color: 'text-white' },
        { name: 'Meta', color: 'text-white' },
        { name: 'Amazon', color: 'text-white' },
        { name: 'Netflix', color: 'text-white' },
    ];

    const hireProjects = [
        {
            id: 'psychology',
            image: '/projects/project3.png',
            category: 'Psychology',
            span: 'md:col-span-2 md:row-span-2',
            color: 'from-purple-600/30 to-transparent'
        },
        {
            id: 'kids',
            image: '/projects/project1.png',
            category: 'Education',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-blue-600/30 to-transparent'
        },
        {
            id: 'fitness',
            image: '/projects/project2.png',
            category: 'Health & Fitness',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-emerald-600/30 to-transparent'
        },
    ];

    return (
        <section className="relative py-32 w-full overflow-hidden select-none">

            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">
                            {t('title')}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        {t.rich('subtitle', {
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
                        {t.rich('description', {
                            highlight: (chunks) => <span className="text-white font-bold">{chunks}</span>
                        })}
                    </motion.p>

                    {/* Stylized Brand Marquee */}
                    <div className="w-full mt-12 overflow-hidden py-10 border-y border-white/5 relative">
                        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-10" />

                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex items-center gap-20 whitespace-nowrap min-w-max px-10"
                        >
                            {[...brands, ...brands, ...brands].map((brand, i) => (
                                <span
                                    key={i}
                                    className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-700 hover:text-primary transition-colors cursor-default italic uppercase"
                                >
                                    {brand.name}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Refined Bento Grid - 3 items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {hireProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -5 }}
                            className={`${project.span} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl transition-all duration-500 hover:border-primary/50 shadow-2xl`}
                        >
                            {/* Project Image as Background */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.id}
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0"
                                />
                                <div className={`absolute inset-0 bg-linear-to-t ${project.color} to-zinc-950/80`} />
                            </div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <motion.span
                                        className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4"
                                    >
                                        {project.category}
                                    </motion.span>
                                    <h4 className={`font-black text-white leading-tight tracking-tighter transition-colors duration-500 ${project.span.includes('col-span-2') ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                                        {t(`projects.${project.id}.title`)}
                                    </h4>
                                </div>

                                <div className="space-y-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className={`text-zinc-300 leading-relaxed font-medium ${project.span.includes('col-span-2') ? 'text-lg max-w-md' : 'text-sm'}`}>
                                        {t(`projects.${project.id}.description`)}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

