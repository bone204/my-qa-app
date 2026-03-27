'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Smartphone, Monitor, Palette, Terminal, Sparkles, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const HireCategorySection = () => {
    const t = useTranslations('HirePage.CategorySection');

    const categories = [
        {
            key: 'mobile',
            route: ROUTES.HIRE.MOBILE,
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            items: t.raw('categories.mobile.items') as string[]
        },
        {
            key: 'frontend',
            route: ROUTES.HIRE.FRONTEND,
            icon: <Monitor className="w-8 h-8 text-primary" />,
            items: t.raw('categories.frontend.items') as string[]
        },
        {
            key: 'design',
            route: ROUTES.HIRE.UIUX,
            icon: <Palette className="w-8 h-8 text-primary" />,
            items: t.raw('categories.design.items') as string[]
        },
        {
            key: 'fullstack',
            route: ROUTES.HIRE.FULLSTACK,
            icon: <Code2 className="w-8 h-8 text-primary" />,
            items: t.raw('categories.fullstack.items') as string[]
        },
        {
            key: 'devops',
            route: ROUTES.HIRE.DEVOPS,
            icon: <Terminal className="w-8 h-8 text-primary" />,
            items: t.raw('categories.devops.items') as string[]
        }
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden select-none ">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 md:mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">{t('subtitle')}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title leading-tight! lg:whitespace-nowrap"
                    >
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {categories.slice(0, 3).map((cat, index) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group/card p-8 rounded-4xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 relative overflow-hidden backdrop-blur-2xl shadow-xl flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex flex-col items-center text-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors">
                                        {t(`categories.${cat.key}.title`)}
                                    </h3>
                                </div>

                                <ul className="space-y-3 grow mb-12">
                                    {cat.items.map((item, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (idx * 0.05) }}
                                            className="flex items-start gap-3 group/item"
                                        >
                                            <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-black transition-all duration-300">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-base text-zinc-400 group-hover/item:text-white transition-colors leading-snug">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex justify-center mt-auto">
                                    <Link href={cat.route} className="w-full">
                                        <Button variant="body" parentGroup="card" className="w-full">
                                            {t('hireButton')}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Fullstack & DevOps Section - Stacking Full Width */}
                <div className="grid grid-cols-1 gap-8">
                    {categories.slice(3).map((cat, index) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group/card w-full p-10 md:p-14 rounded-4xl bg-linear-to-br from-zinc-900/60 to-zinc-950/80 border border-white/5 hover:border-primary/40 transition-all duration-700 relative overflow-hidden backdrop-blur-2xl shadow-2xl"
                        >
                            {/* Special Decorative Background for DevOps */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--color-primary),transparent_55%)] opacity-10 -z-10" />
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-md">
                                    <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)]">
                                        <Terminal className="w-12 h-12 text-primary" />
                                    </div>
                                    <div className="space-y-12">
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-black text-white tracking-tight group-hover/card:text-primary transition-colors uppercase leading-tight">
                                                {t(`categories.${cat.key}.title`)}
                                            </h3>
                                            <p className="text-lg text-zinc-400 group-hover/card:text-zinc-300 transition-colors leading-relaxed font-medium">
                                                {t(`categories.${cat.key}.description`)}
                                            </p>
                                        </div>

                                        <Link href={cat.route} className="w-full">
                                            <Button variant="body" parentGroup="card" className="w-full">
                                                {t('hireButton')}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="w-px h-auto self-stretch bg-white/5 hidden lg:block" />
                                
                                <div className="grow w-full">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-8 text-center lg:text-left opacity-80">
                                        Năng lực cung cấp
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                                        {cat.items.map((item, idx) => (
                                            <motion.li 
                                                key={idx} 
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + (idx * 0.05) }}
                                                className="flex items-center gap-4 group/item"
                                            >
                                                <div className="p-1.5 rounded-full bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-black transition-all duration-300">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="text-lg text-zinc-400 group-hover/item:text-white transition-colors font-medium">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HireCategorySection;
