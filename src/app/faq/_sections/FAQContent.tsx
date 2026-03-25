"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Briefcase, UserPlus, Code2, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

type CategoryType = 'business' | 'hiring' | 'development';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const AccordionItem = ({ question, answer, isOpen, onClick, index }: AccordionItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group mb-4 rounded-3xl border transition-all duration-500 overflow-hidden",
                isOpen 
                    ? "bg-primary/5 border-primary/30 shadow-2xl shadow-primary/5" 
                    : "bg-zinc-900/40 border-white/5 hover:border-white/20"
            )}
        >
            <button
                onClick={onClick}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
            >
                <span className={cn(
                    "text-lg font-bold tracking-tight transition-colors duration-300",
                    isOpen ? "text-primary" : "text-zinc-200 group-hover:text-white"
                )}>
                    {question}
                </span>
                <div className={cn(
                    "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    isOpen ? "bg-primary text-white rotate-180" : "bg-white/5 text-zinc-400 group-hover:bg-white/10"
                )}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-8 pb-8 text-zinc-400 text-lg leading-relaxed border-t border-white/5 pt-6 font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const CATEGORIES: { id: CategoryType; icon: any }[] = [
    { id: 'business', icon: Briefcase },
    { id: 'hiring', icon: UserPlus },
    { id: 'development', icon: Code2 }
];

export default function FAQContent() {
    const t = useTranslations('FAQPage');
    const [activeTab, setActiveTab] = useState<CategoryType>('business');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const activeQuestions = [0, 1, 2].map(i => ({
        q: t(`categories.${activeTab}.questions.${i}.q`),
        a: t(`categories.${activeTab}.questions.${i}.a`)
    }));

    return (
        <section className="pb-32 relative select-none">
            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
                    
                    {/* Left: Sticky Navigation Tabs */}
                    <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="flex flex-col gap-3">
                            {CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = activeTab === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveTab(cat.id);
                                            setOpenIndex(0);
                                        }}
                                        className={cn(
                                            "relative flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500 group overflow-hidden w-full text-left",
                                            isActive 
                                                ? "bg-primary text-white shadow-[0_10px_30px_rgba(215,38,90,0.3)]" 
                                                : "bg-zinc-900/40 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 shrink-0",
                                            isActive ? "bg-white/20" : "bg-white/5 shadow-inner"
                                        )}>
                                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-zinc-500")} />
                                        </div>
                                        <div className="flex flex-col items-start min-w-0 pr-2">
                                            <span className="text-lg font-black tracking-tight leading-tight">
                                                {t(`categories.${cat.id}.title`)}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <motion.div 
                                                layoutId="activeTabGlow"
                                                className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 skew-x-12 translate-x-full group-hover:animate-shimmer"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Accordion Questions */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            {activeQuestions.map((item, index) => (
                                <AccordionItem
                                    key={`${activeTab}-${index}`}
                                    index={index}
                                    question={item.q}
                                    answer={item.a}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
