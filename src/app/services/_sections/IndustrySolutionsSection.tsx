"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
    HeartPulse, 
    Wallet, 
    Building2, 
    ShoppingCart, 
    Dumbbell, 
    Utensils, 
    Plane, 
    Briefcase, 
    GraduationCap, 
    Film, 
    Truck,
    CheckCircle2, 
    Sparkles, 
    ArrowRight 
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const industriesInfo = [
    { id: 'healthcare', icon: HeartPulse, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { id: 'fintech', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'realestate', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { id: 'ecommerce', icon: ShoppingCart, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'fitness', icon: Dumbbell, color: 'text-violet-500', bg: 'bg-violet-500/10' },
    { id: 'restaurant', icon: Utensils, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'travel', icon: Plane, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { id: 'business', icon: Briefcase, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { id: 'education', icon: GraduationCap, color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { id: 'entertainment', icon: Film, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { id: 'logistics', icon: Truck, color: 'text-slate-400', bg: 'bg-slate-400/10' },
];

export default function IndustrySolutionsSection() {
    const t = useTranslations("ServicesPage.industries");

    return (
        <section className="py-12 md:py-24 relative overflow-hidden select-none">

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-12 md:mb-24">
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="review-title text-center"
                    >
                        {t('title')}
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-medium max-w-2xl mt-4"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industriesInfo.map((industry, index) => (
                        <IndustryCard 
                            key={industry.id} 
                            industry={industry} 
                            index={index} 
                            t={t}
                        />
                    ))}
                    
                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative rounded-4xl p-8 border-2 border-dashed border-primary/30 flex flex-col justify-center items-center text-center group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <ArrowRight className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t('ctaTitle')}</h3>
                        <p className="text-zinc-400 mb-8 max-w-[250px]">{t('ctaDesc')}</p>
                        
                        <Link href={ROUTES.ABOUT_US.CONTACT}>
                            <Button variant="body">
                                {t('ctaButton')}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function IndustryCard({ industry, index, t }: { industry: any, index: number, t: any }) {
    const Icon = industry.icon;
    const items = t.raw(`${industry.id}.items`) as string[];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.05, 0.3) }}
            className="group relative rounded-[2.5rem] p-8 bg-zinc-900/40 border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col"
        >
            {/* Hover background effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}>
                <div className={`absolute -top-24 -right-24 w-64 h-64 ${industry.bg} rounded-full blur-[80px]`} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${industry.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-7 h-7 ${industry.color}`} />
                    </div>
                    <div className="text-sm font-bold text-zinc-600 group-hover:text-primary transition-colors">
                        0{index + 1}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                    {t(`${industry.id}.title`)}
                </h3>

                <ul className="space-y-4 mb-8 grow">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                            <span className="text-zinc-400 text-sm font-medium group-hover/item:text-zinc-200 transition-colors leading-snug">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    {t('explore')} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
}
