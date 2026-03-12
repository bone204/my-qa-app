"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Rocket, Building2, Utensils, ShoppingBag, Dumbbell, 
    HeartPulse, Ticket, Plane, Car, Truck, Cloud, 
    RefreshCw, Zap, Settings, GitBranch, Infinity, 
    Package, ArrowRight, ChevronRight, Sparkles, ShieldCheck,
    Shield
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function SolutionsSection() {
    const t = useTranslations('ServicesPage.solutions');
    const scrollRef = useRef<HTMLDivElement>(null);

    const onDemandItems = [
        { icon: Utensils, key: 'food', color: 'from-orange-500/20 to-red-500/20' },
        { icon: ShoppingBag, key: 'grocery', color: 'from-green-500/20 to-emerald-500/20' },
        { icon: Dumbbell, key: 'fitness', color: 'from-blue-500/20 to-indigo-500/20' },
        { icon: HeartPulse, key: 'telemedicine', color: 'from-red-500/20 to-pink-500/20' },
        { icon: Ticket, key: 'ticketing', color: 'from-purple-500/20 to-blue-500/20' },
        { icon: Plane, key: 'travel', color: 'from-sky-500/20 to-cyan-500/20' },
        { icon: Car, key: 'taxi', color: 'from-yellow-500/20 to-orange-500/20' },
        { icon: Truck, key: 'logistics', color: 'from-zinc-500/20 to-slate-500/20' },
    ];

    return (
        <section className="relative py-32 overflow-hidden select-none">
            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="section-subtitle">
                            {t('subtitle')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="section-title text-center"
                    >
                        {t('title')}
                    </motion.h2>
                </div>

                {/* Part 1: Startup & Enterprise */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    <SolutionCard 
                        icon={Rocket}
                        title={t('startup.title')}
                        desc={t('startup.desc')}
                        btnText={t('seeMore')}
                        variant="primary"
                    />
                    <SolutionCard 
                        icon={Building2}
                        title={t('enterprise.title')}
                        desc={t('enterprise.desc')}
                        btnText={t('seeMore')}
                        variant="secondary"
                    />
                </div>

                {/* Part 2: On-Demand Solutions Carousel */}
                <div className="mb-32">
                    <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-[2px] bg-primary/50" />
                        {t('onDemand.title')}
                    </motion.h3>

                    <div className="relative group">
                        <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
                            {onDemandItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="min-w-[280px] md:min-w-[320px] snap-start"
                                >
                                    <div className={cn(
                                        "group/item relative h-48 rounded-3xl p-8 bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20",
                                        "before:absolute before:inset-0 before:bg-linear-to-br before:opacity-0 before:group-hover/item:opacity-100 before:transition-opacity before:duration-500",
                                        item.color
                                    )}>
                                        <item.icon className="w-12 h-12 text-white mb-6 relative z-10 transition-transform duration-500 group-hover/item:-translate-y-2" />
                                        <div className="flex items-center justify-between relative z-10 mt-auto">
                                            <span className="text-xl font-bold text-white">
                                                {t(`onDemand.items.${item.key}`)}
                                            </span>
                                            <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-2 transition-all duration-300" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part 3: SaaS, Transformation, MVP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {['saas', 'transformation', 'mvp'].map((key, idx) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                                {key === 'saas' && <Cloud className="w-8 h-8 text-primary" />}
                                {key === 'transformation' && <RefreshCw className="w-8 h-8 text-primary" />}
                                {key === 'mvp' && <Zap className="w-8 h-8 text-primary" />}
                            </div>
                            <h4 className="card-title text-2xl mb-4">{t(`products.${key}.title`)}</h4>
                            <p className="card-desc text-base mb-8">{t(`products.${key}.desc`)}</p>
                            <button className="text-primary font-bold flex items-center gap-2 group/btn">
                                {t('seeMore')}
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Part 4: DevOps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] p-8 md:p-16 border border-white/10 bg-linear-to-br from-zinc-950 to-black overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="section-title text-4xl md:text-5xl mb-8">{t('devops.title')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {['consulting', 'cicd', 'iac', 'container'].map((item) => (
                                    <div key={item} className="flex items-center gap-4 text-zinc-300">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                            {item === 'consulting' && <Settings className="w-5 h-5 text-primary" />}
                                            {item === 'cicd' && <GitBranch className="w-5 h-5 text-primary" />}
                                            {item === 'iac' && <Infinity className="w-5 h-5 text-primary" />}
                                            {item === 'container' && <Package className="w-5 h-5 text-primary" />}
                                        </div>
                                        <span className="card-desc font-medium">{t(`devops.items.${item}`)}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="secondary" className="rounded-full border-zinc-800 hover:border-primary px-8">
                                {t('devops.button')}
                            </Button>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="aspect-square rounded-4xl bg-zinc-900/50 border border-white/5 flex items-center justify-center">
                                <Infinity className="w-48 h-48 text-zinc-800 absolute opacity-20" />
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-24 h-24 rounded-2xl bg-zinc-950 border border-white/10 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SolutionCard({ icon: Icon, title, desc, btnText, variant }: { icon: any, title: string, desc: string, btnText: string, variant: 'primary' | 'secondary' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[520px] p-12 rounded-[3.5rem] bg-zinc-900 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-700 shadow-2xl flex flex-col"
        >
            {/* Top Light Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000",
                variant === 'primary' ? "bg-primary" : "bg-white"
            )} />
            
            <div className="relative z-10 h-full flex flex-col items-start text-left">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-700">
                    <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="card-title text-4xl md:text-5xl mb-6 group-hover:translate-x-2 transition-transform duration-700">
                    {title}
                </h3>
                
                <p className="card-desc text-xl font-medium mb-12 max-w-md group-hover:text-zinc-300 transition-colors duration-700">
                    {desc}
                </p>
                
                <div className="mt-auto">
                    <Button 
                        variant="body"
                        className="rounded-full px-10 group/btn"
                    >
                        {btnText}
                    </Button>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 p-12 text-zinc-800/50 group-hover:text-white/5 transition-colors duration-1000 pointer-events-none">
                <Icon size={180} strokeWidth={0.5} />
            </div>
        </motion.div>
    );
}
