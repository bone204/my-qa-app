"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    gradient: string;
    isFeatured?: boolean;
}

export default function ServicesBlogSection() {
    const t = useTranslations('ServicesBlog');

    const posts: Post[] = [
        {
            id: "1",
            title: t('posts.1.title'),
            excerpt: t('posts.1.excerpt'),
            category: t('posts.1.category'),
            date: t('posts.1.date'),
            readTime: "6",
            gradient: "from-primary/20 via-blue-900/40 to-indigo-950/60",
            isFeatured: true,
        },
        {
            id: "2",
            title: t('posts.2.title'),
            excerpt: t('posts.2.excerpt'),
            category: t('posts.2.category'),
            date: t('posts.2.date'),
            readTime: "8",
            gradient: "from-rose-500/10 via-purple-900/20 to-zinc-900/40",
        },
        {
            id: "3",
            title: t('posts.3.title'),
            excerpt: t('posts.3.excerpt'),
            category: t('posts.3.category'),
            date: t('posts.3.date'),
            readTime: "5",
            gradient: "from-emerald-500/10 via-teal-900/20 to-zinc-900/40",
        },
        {
            id: "4",
            title: t('posts.4.title'),
            excerpt: t('posts.4.excerpt'),
            category: t('posts.4.category'),
            date: t('posts.4.date'),
            readTime: "7",
            gradient: "from-amber-500/10 via-orange-900/20 to-zinc-900/40",
        },
        {
            id: "5",
            title: t('posts.5.title'),
            excerpt: t('posts.5.excerpt'),
            category: t('posts.5.category'),
            date: t('posts.5.date'),
            readTime: "9",
            gradient: "from-indigo-500/10 via-blue-900/20 to-zinc-900/40",
        },
    ];

    const containerVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const featuredPost = posts.find(p => p.isFeatured);
    const sidePosts = posts.filter(p => !p.isFeatured);

    return (
        <section className="relative w-full py-24 sm:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <span className="w-8 h-[2px] bg-primary" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                                {t('label')}
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl font-black tracking-tighter leading-none"
                        >
                             {t.rich('title', {
                                highlight: (chunks) => <span className="text-gray-500">{chunks}</span>
                            })}
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-6 md:mt-0 flex items-center gap-8"
                    >
                        <div className="hidden sm:flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mr-4">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span>Trending Now</span>
                        </div>
                        <Link href="/blog">
                            <Button variant="body">
                                {t('readMore')}
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* News Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    {/* Main Story */}
                    <motion.div variants={itemVariants} className="lg:col-span-8 group cursor-pointer">
                        {featuredPost && (
                            <div className="flex flex-col h-full">
                                <div className="relative aspect-video mb-8 overflow-hidden rounded-sm bg-white/5">
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
                                    {/* Gradient Placeholder */}
                                    <div className={`absolute inset-0 bg-linear-to-br transition-transform duration-700 group-hover:scale-105 ${featuredPost.gradient}`} />
                                    
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-widest text-white mb-3 w-fit">
                                            Lead Story
                                        </div>
                                    </div>
                                </div>
                                
                                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                                    {featuredPost.category}
                                </span>
                                
                                <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h3>
                                
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl">
                                    {featuredPost.excerpt}
                                </p>
                                
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-wider">
                                            <Calendar className="w-4 h-4 text-primary/60" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-wider">
                                            <Clock className="w-4 h-4 text-primary/60" />
                                            {t('readingTime', { time: featuredPost.readTime })}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:opacity-100 transition-opacity">
                                        <span>{t('readMore')}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Sidebar / Editor's Pick */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <div className="flex items-center gap-2 mb-2">
                             <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Editor's Insights</span>
                             <div className="flex-1 h-px bg-white/10" />
                        </div>
                        
                        {sidePosts.map((post) => (
                            <motion.div 
                                key={post.id}
                                variants={itemVariants}
                                className="group cursor-pointer pb-8 border-b border-white/5 last:border-0"
                            >
                                <div className="flex gap-4">
                                    <div className={`flex-none w-24 h-24 rounded-sm bg-linear-to-br overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-95 ${post.gradient}`} />
                                    
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                                            {post.category}
                                        </span>
                                        <h4 className="text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-[10px] font-medium text-zinc-600 mt-auto uppercase tracking-tighter">
                                            <span>{post.date}</span>
                                            <span className="text-primary/40">•</span>
                                            <span>{t('readingTime', { time: post.readTime })}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
