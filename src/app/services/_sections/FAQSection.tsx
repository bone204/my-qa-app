"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                    "text-lg md:text-xl font-semibold transition-colors duration-300",
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
                        <div className="px-8 pb-8 text-zinc-400 text-lg leading-relaxed border-t border-white/5 pt-6">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQSection() {
    const t = useTranslations('FAQSection');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
        q: t(`questions.${i}.q`),
        a: t(`questions.${i}.a`)
    }));

    return (
        <section className="py-16 md:py-32 relative overflow-visible select-none">
            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left: Sticky Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="review-label">{t('badge')}</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="review-title text-left"
                            >
                                {t.rich('title', {
                                    highlight: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-zinc-400 font-medium max-w-2xl mt-8 text-left"
                            >
                                {t('description')}
                            </motion.p>
                            
                            {/* Decorative Background Blur for Title Area */}
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        </div>
                    </div>

                    {/* Right: Accordion Questions */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {questions.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    index={index}
                                    question={item.q}
                                    answer={item.a}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
