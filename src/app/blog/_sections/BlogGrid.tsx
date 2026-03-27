"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { getBlogPosts } from '@/services/blog';
import { BlogPost } from '@/services/blog/types';
import { cn } from '@/lib/utils';
import PostCard from '@/components/home/Blog/PostCard';

const POSTS_PER_PAGE = 6;

export default function BlogGrid() {
    const t = useTranslations('BlogPage');
    const locale = useLocale() as 'en' | 'vi';
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const data = await getBlogPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => 
        activeFilter === 'All' || post.category.toLowerCase() === activeFilter.toLowerCase()
    );

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const categories = ['All', 'Design', 'Development', 'Technology', 'Business'];

    return (
        <section className="relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                <div className="flex flex-col gap-2">
                    <h4 className="text-white text-4xl font-black tracking-tighter">
                       {t('latestTitle')} <span className="text-primary italic font-serif">{t('latestHighlight')}</span>
                    </h4>
                    <p className="text-zinc-500 text-sm font-medium">{t('explore')}</p>
                </div>
                
                {/* Filter bar - pill style like Home */}
                <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/3 border border-white/8 w-fit shrink-0 overflow-x-auto pb-1.5 md:pb-1.5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveFilter(cat);
                                setCurrentPage(1);
                            }}
                            className={cn(
                                "relative px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                                activeFilter === cat
                                    ? "text-white"
                                    : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            {activeFilter === cat && (
                                <motion.div
                                    layoutId="active-pill-blog"
                                    className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{t(`filters.${cat}`)}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
                <AnimatePresence mode='wait'>
                    {loading ? (
                        <div className="col-span-full flex flex-col items-center justify-center gap-4 py-20">
                            <Loader2 className="w-8 h-8 text-primary animate-spin" />
                            <p className="text-zinc-500 font-medium animate-pulse">{t('loading')}</p>
                        </div>
                    ) : paginatedPosts.length > 0 ? (
                        paginatedPosts.map((post, index) => (
                            <PostCard key={post.id} post={post} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center italic text-zinc-600">
                            {t('noResults')}
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-24 flex items-center justify-center gap-4">
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="p-3 md:p-4 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:border-white/20 disabled:opacity-20 transition-all bg-white/5 shrink-0"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    
                    <div className="flex items-center gap-1.5 md:gap-3">
                        {(() => {
                            const pages = [];
                            const delta = 1; // Number of pages either side of current
                            
                            for (let i = 1; i <= totalPages; i++) {
                                if (
                                    i === 1 || 
                                    i === totalPages || 
                                    (i >= currentPage - delta && i <= currentPage + delta)
                                ) {
                                    pages.push(i);
                                } else if (
                                    i === currentPage - delta - 1 || 
                                    i === currentPage + delta + 1
                                ) {
                                    pages.push('...');
                                }
                            }
                            
                            // Remove duplicate ellipses
                            const uniquePages = pages.filter((v, i, a) => v !== '...' || a[i - 1] !== '...');

                            return uniquePages.map((page, i) => (
                                typeof page === 'number' ? (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(page)}
                                        className={cn(
                                            "w-10 h-10 md:w-12 md:h-12 rounded-full text-xs md:text-sm font-black transition-all border shrink-0",
                                            currentPage === page 
                                                ? "bg-primary border-primary text-white shadow-[0_8px_25px_rgba(215,38,90,0.4)]" 
                                                : "bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/20"
                                        )}
                                    >
                                        {page}
                                    </button>
                                ) : (
                                    <span key={i} className="text-zinc-600 font-bold px-1 select-none">...</span>
                                )
                            ));
                        })()}
                    </div>

                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="p-3 md:p-4 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:border-white/20 disabled:opacity-20 transition-all bg-white/5 shrink-0"
                    >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
            )}
        </section>
    );
}
