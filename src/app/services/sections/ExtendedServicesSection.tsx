"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Megaphone, Link as LinkIcon, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function ExtendedServicesSection() {
    const t = useTranslations('ServicesPage.extended');

    const sections = [
        {
            id: 'cloud',
            icon: Cloud,
            color: "from-blue-600/20 to-indigo-600/20",
            borderColor: "group-hover:border-blue-500/50",
            iconColor: "text-blue-400"
        },
        {
            id: 'marketing',
            icon: Megaphone,
            color: "from-purple-600/20 to-pink-600/20",
            borderColor: "group-hover:border-purple-500/50",
            iconColor: "text-purple-400"
        },
        {
            id: 'blockchain',
            icon: LinkIcon,
            color: "from-orange-600/20 to-red-600/20",
            borderColor: "group-hover:border-orange-500/50",
            iconColor: "text-orange-400"
        },
        {
            id: 'web3',
            icon: Cpu,
            color: "from-cyan-600/20 to-teal-600/20",
            borderColor: "group-hover:border-cyan-500/50",
            iconColor: "text-cyan-400"
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden select-none">


            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">{t('sectionSubtitle')}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="review-title text-center"
                    >
                        {t('sectionTitle')}
                    </motion.h2>
                </div>

                {/* 2-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative"
                            >
                                {/* Bento Card Design */}
                                <div className={cn(
                                    "relative h-full overflow-hidden rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-3xl border border-white/5 p-10 transition-all duration-700",
                                    section.borderColor,
                                    "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
                                )}>
                                    {/* Gradient Overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                                        section.color
                                    )} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-8">
                                            <div className={cn(
                                                "w-16 h-16 rounded-2xl flex items-center justify-center bg-zinc-800/50 border border-white/10 group-hover:scale-110 transition-all duration-500",
                                                section.iconColor
                                            )}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                                                0{idx + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-8 pr-10 leading-tight">
                                            {t(`${section.id}.title`)}
                                        </h3>

                                        {/* Sub-services Grid within the card */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                                            {['0', '1', '2', '3', '4', '5'].map((itemKey) => {
                                                const itemText = t(`${section.id}.items.${itemKey}`);
                                                if (itemText.includes(`${section.id}.items`)) return null;
                                                
                                                return (
                                                    <div key={itemKey} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                        <span className="text-[15px] font-medium leading-tight">{itemText}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-auto pt-6 flex justify-between items-center border-t border-white/5">
                                            <Button variant="body" className="px-6 py-2.5 text-sm group/btn">
                                                <span className="flex items-center gap-2">
                                                    {t('seeMore')}
                                                </span>
                                            </Button>
                                            
                                            <div className="relative w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-4 group-hover:translate-x-0 scale-90 md:scale-100">
                                                {/* Background Energy Glow */}
                                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                                                
                                                {/* Multi-layered Orbital System */}
                                                {[0, 1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                                        transition={{ duration: 6 + i * 4, repeat: Infinity, ease: "linear" }}
                                                        className={cn(
                                                            "absolute border",
                                                            i === 0 ? "inset-0 rounded-2xl border-primary/40 shadow-[inset_0_0_10px_rgba(236,72,153,0.2)]" : 
                                                            i === 1 ? "inset-2 rounded-full border-blue-400/30" : 
                                                            "inset-4 rounded-xl border-white/10"
                                                        )}
                                                    >
                                                        {/* Orbital Particles */}
                                                        <div className={cn(
                                                            "absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]",
                                                            i === 0 ? "bg-white" : i === 1 ? "bg-blue-300" : "bg-primary"
                                                        )} />
                                                    </motion.div>
                                                ))}

                                                {/* Pulsing Energy Core */}
                                                <motion.div
                                                    animate={{ 
                                                        scale: [1, 1.3, 1],
                                                        filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                                                    }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="relative w-4 h-4 flex items-center justify-center z-10"
                                                >
                                                    <div className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_white]" />
                                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                                                </motion.div>
                                                
                                                {/* High-intensity Laser Sweep */}
                                                <div className="absolute inset-[-4px] bg-conic-to-t from-primary/60 via-primary/5 to-transparent rounded-full opacity-60 animate-spin-slow mix-blend-screen pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
