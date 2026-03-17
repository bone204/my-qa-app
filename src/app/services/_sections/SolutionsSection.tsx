"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Rocket, Building2, Utensils, ShoppingBag, Dumbbell, 
    HeartPulse, Ticket, Plane, Car, Truck, Cloud, 
    RefreshCw, Zap, Settings, GitBranch, Infinity as InfinityIcon, 
    Package, ArrowRight, ChevronRight, Sparkles, ShieldCheck,
    Shield, Activity
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { LinkAction } from '@/components/ui/LinkAction';
import MetaBalls from '@/components/ui/MetaBalls';

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
                        <span className="review-label">
                            {t('subtitle')}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="review-title text-center"
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

                {/* Part 2: On-Demand Solutions Carousel - Infinite Auto-scroll */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white flex items-center gap-4"
                        >
                            <span className="w-12 h-[2px] bg-primary/50" />
                            {t('onDemand.title')}
                        </motion.h3>
                        
                        <Button variant="body" className="w-fit">
                            {t('seeMore')}
                        </Button>
                    </div>

                    <div 
                        className="relative overflow-hidden group"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    >
                        <motion.div 
                            className="flex gap-6 w-max group-hover:[animation-play-state:paused]"
                            style={{ 
                                animation: 'scroll 40s linear infinite',
                            }}
                        >
                            {[...onDemandItems, ...onDemandItems].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-[280px] md:w-[320px]"
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
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Part 3: SaaS, Transformation, MVP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { key: 'saas', icon: Cloud, gradient: 'from-blue-500 to-cyan-400' },
                        { key: 'transformation', icon: RefreshCw, gradient: 'from-purple-500 to-pink-400' },
                        { key: 'mvp', icon: Zap, gradient: 'from-emerald-500 to-teal-400' }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0, 
                                scale: 1,
                                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 400, damping: 20 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group/solution relative cursor-pointer overflow-hidden rounded-4xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col"
                            style={{ 
                                borderRadius: 32,
                                transitionProperty: 'border-color, box-shadow, background-color',
                                transitionDuration: '300ms',
                                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <div className="absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover/solution:opacity-5 mix-blend-overlay" />
                            
                            <div className={cn(
                                "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg bg-linear-to-br",
                                item.gradient
                            )}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            
                            <h4 className="card-title mb-2 select-none">
                                {t(`products.${item.key}.title`)}
                            </h4>
                            <p className="card-desc line-clamp-3 select-none grow">
                                {t(`products.${item.key}.desc`)}
                            </p>
                            
                            <div className="mt-8 flex items-center text-primary text-xs font-bold uppercase tracking-widest pt-6 border-t border-white/5 opacity-0 group-hover/solution:opacity-100 -translate-x-4 group-hover/solution:translate-x-0 transition-all duration-500">
                                {t('explore')} <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Part 4: DevOps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group/card relative rounded-[3rem] p-8 md:p-12 border border-primary/20 bg-linear-to-br from-zinc-950 via-primary/5 to-black overflow-hidden shadow-2xl shadow-primary/5"
                >
                    
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                                <span className="review-label">{t('devops.badge')}</span>
                            </div>
                            <h3 className="section-title mb-8 text-left! bg-linear-to-r from-white via-white to-primary/50 bg-clip-text text-transparent">
                                {t('devops.title')}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-4">
                                {['consulting', 'cicd', 'iac', 'container'].map((item, i) => (
                                    <motion.div 
                                        key={item} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center  gap-4 text-zinc-300 group/item cursor-default"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:bg-primary/5 transition-all duration-300 shadow-lg">
                                            {item === 'consulting' && <Settings className="w-5 h-5 text-primary group-hover/item:rotate-90 transition-transform duration-500" />}
                                            {item === 'cicd' && <GitBranch className="w-5 h-5 text-primary" />}
                                            {item === 'iac' && <InfinityIcon className="w-5 h-5 text-primary" />}
                                            {item === 'container' && <Package className="w-5 h-5 text-primary" />}
                                        </div>
                                        <span className="text-sm font-semibold text-white group-hover/item:text-primary transition-colors">
                                            {t(`devops.items.${item}`)}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                            <Button variant="body" parentGroup="card" className="mt-8">
                                {t('devops.button')}
                            </Button>
                        </div>
                        
                        <div className="relative hidden lg:block h-[500px]">
                            <MetaBalls
                                color="#ffffff"
                                cursorBallColor="#ffffff"
                                cursorBallSize={4}
                                ballCount={15}
                                animationSize={30}
                                enableMouseInteraction
                                enableTransparency={true}
                                hoverSmoothness={0.15}
                                clumpFactor={1}
                                speed={0.3}
                            />
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
            className="group/card relative min-h-[520px] p-12 rounded-[3.5rem] bg-zinc-900 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-700 shadow-2xl flex flex-col"
        >
            {/* Top Light Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover/card:opacity-15 transition-opacity duration-1000",
                variant === 'primary' ? "bg-primary" : "bg-white"
            )} />
            
            <div className="relative z-10 h-full flex flex-col items-start text-left">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover/card:scale-110 group-hover/card:bg-primary/10 transition-all duration-700">
                    <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="card-title text-4xl md:text-5xl mb-6 group-hover/card:translate-x-2 transition-transform duration-700">
                    {title}
                </h3>
                
                <p className="card-desc text-xl font-medium mb-12 max-w-md group-hover/card:text-zinc-300 transition-colors duration-700">
                    {desc}
                </p>
                
                <div className="mt-auto">
                    <Button 
                        variant="body"
                        parentGroup="card"
                        className="rounded-full px-10"
                    >
                        {btnText}
                    </Button>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 p-12 text-zinc-800/50 group-hover/card:text-white/5 transition-colors duration-1000 pointer-events-none">
                <Icon size={180} strokeWidth={0.5} />
            </div>
        </motion.div>
    );
}
