"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import { BlogPost } from "@/data/blog/blog-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categoryAccents: Record<string, string> = {
    Design: "from-purple-500/20 to-pink-500/20",
    Tutorial: "from-emerald-500/20 to-teal-500/20",
    Technology: "from-blue-500/20 to-cyan-500/20",
    Business: "from-orange-500/20 to-amber-500/20",
};

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    const t = useTranslations('BlogPage');
    
    // For consistency with Home style tags
    const displayTag = post.tags[0] || 'New';

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col rounded-[32px] bg-white/3 border border-white/8 hover:border-white/20 overflow-hidden cursor-pointer transition-colors duration-500 h-full"
        >
            {/* Header with Background Image and Gradient Overlay */}
            <div className={cn(
                "relative h-48 overflow-hidden bg-linear-to-br flex items-end p-6",
                categoryAccents[post.category] || "from-zinc-800 to-zinc-900"
            )}>
                {/* Background Image */}
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                
                {/* Category badge */}
                <span className="relative text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                </span>

                {/* Arrow icon */}
                <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
                    whileHover={{ scale: 1.1 }}
                >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-8 flex-1">
                {/* Tag */}
                <span className="w-fit text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border text-primary bg-primary/10 border-primary/20">
                    {displayTag}
                </span>

                <h3 className="text-white font-black text-xl leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-zinc-500 text-sm font-medium leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors duration-300 flex-1">
                    {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {post.publishDate}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            {post.readingTime}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold">
                        <Eye className="w-3.5 h-3.5 text-primary" />
                        <span>{post.viewCount}</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
