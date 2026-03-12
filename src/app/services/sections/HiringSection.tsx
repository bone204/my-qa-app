"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Monitor, Smartphone, Layout, Code2, CheckCircle2, Cpu, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function HiringSection() {
    const t = useTranslations('ServicesPage.hiring');

    const devRoles = [
        {
            id: 'mobile',
            icon: <Smartphone className="w-6 h-6" />,
            title: t('developer.roles.mobile.title'),
            desc: t('developer.roles.mobile.desc'),
            tech: t('developer.roles.mobile.tech'),
            color: 'from-blue-500/10 to-cyan-500/10'
        },
        {
            id: 'web',
            icon: <Layout className="w-6 h-6" />,
            title: t('developer.roles.web.title'),
            desc: t('developer.roles.web.desc'),
            tech: t('developer.roles.web.tech'),
            color: 'from-emerald-500/10 to-teal-500/10'
        },
        {
            id: 'fullstack',
            icon: <Code2 className="w-6 h-6" />,
            title: t('developer.roles.fullstack.title'),
            desc: t('developer.roles.fullstack.desc'),
            tech: t('developer.roles.fullstack.tech'),
            color: 'from-orange-500/10 to-yellow-500/10'
        }
    ];

    const uiuxTasks = [0, 1, 2, 3];

    return (
        <section className="relative py-24 w-full overflow-hidden select-none">
            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-32 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        {t('subtitle')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        {t('title')}
                    </motion.h2>
                </div>

                {/* UI/UX Designer Section - Horizontal Video on Right */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900/30 backdrop-blur-sm mb-20"
                >
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Content Left Part */}
                        <div className="flex-1 p-8 md:p-12 lg:p-16 space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                                        <Monitor className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="card-title text-3xl md:text-5xl font-black tracking-tighter">
                                        {t('designer.title')}
                                    </h3>
                                </div>
                                <p className="card-desc text-lg md:text-xl leading-relaxed max-w-2xl">
                                    {t('designer.desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {uiuxTasks.map((idx) => (
                                    <div key={idx} className="flex items-center gap-3 group/task">
                                        <div className="p-1 rounded-full bg-primary/20 text-primary group-hover/task:bg-primary group-hover/task:text-white transition-colors duration-300">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="card-desc font-semibold text-base">
                                            {t(`designer.tasks.${idx}`)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <Link href="#contact">
                                    <Button variant="body">
                                        {t('designer.hireButton')}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Video Right Part - Landscape Fixed */}
                        <div className="w-full lg:w-[45%] p-4 lg:p-8">
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                >
                                    <source src="/videos/video-1.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Developer Roles Section - Row based Detail Layout */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4 mb-4">
                        <Cpu className="w-6 h-6 text-primary animate-pulse" />
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card-title text-2xl md:text-3xl font-bold tracking-tight"
                        >
                            {t('developer.title')}
                        </motion.h3>
                        <div className="flex-1 h-px bg-linear-to-r from-white/20 to-transparent" />
                    </div>

                    <div className="flex flex-col gap-6">
                        {devRoles.map((role, idx) => (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group relative w-full rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/10 hover:border-primary/30 hover:bg-zinc-900/40 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-linear-to-r ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center p-8 lg:p-10 gap-8">
                                    {/* Icon & Title */}
                                    <div className="lg:w-1/4 flex items-center gap-6">
                                        <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 text-primary shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                            {role.icon}
                                        </div>
                                        <h4 className="card-title text-2xl font-black tracking-tight">
                                            {role.title}
                                        </h4>
                                    </div>

                                    {/* Description */}
                                    <div className="lg:flex-1">
                                        <p className="card-desc text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                                            {role.desc}
                                        </p>
                                    </div>

                                    {/* Tech Stack - Different style */}
                                    <div className="lg:w-1/4 flex flex-wrap gap-2">
                                        {role.tech.split(',').map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium group-hover:border-primary/40 group-hover:text-white transition-all duration-300"
                                            >
                                                {item.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hire Button */}
                                    <div className="lg:w-auto">
                                        <Link href="#contact">
                                            <Button variant="body" className="whitespace-nowrap">
                                                {t('developer.hireButton')}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
