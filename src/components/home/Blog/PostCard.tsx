"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/services/blog/types";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const tagColors: Record<string, string> = {
    Trending: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Popular: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    New: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    Featured: "text-primary bg-primary/10 border-primary/20",
};



import Link from "next/link";

export default function PostCard({ post, index }: { post: BlogPost; index: number }) {
    const t = useTranslations('BlogSection');
    const locale = useLocale() as 'en' | 'vi';
    return (
        <Link href={`/blog/${post.id}`} className="block h-full">
            <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full rounded-3xl bg-white/3 border border-white/8 hover:border-white/20 overflow-hidden cursor-pointer transition-colors duration-500"
            >
                {/* Featured Image */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title[locale]}
                        fill
                        quality={100}
                        priority={index === 0}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />
    
                    {/* Category badge */}
                    <div className="absolute bottom-5 left-6">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/90">
                            {t(`categories.${post.category}`)}
                        </span>
                    </div>
    
                    {/* Arrow icon */}
                    <motion.div
                        className="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                </div>
    
                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                    {/* Tag */}
                    <span className={`w-fit text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${tagColors[post.tag.en] ?? "text-zinc-400 bg-white/5 border-white/10"}`}>
                        {post.tag[locale]}
                    </span>
    
                    <h3 className="text-white font-black text-xl leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                        {post.title[locale]}
                    </h3>
    
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors duration-300 flex-1">
                        {post.excerpt[locale]}
                    </p>
    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-4">
                            {post.authorAvatar && (
                                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 shadow-lg shrink-0">
                                    <Image
                                        src={post.authorAvatar}
                                        alt={post.authorName || "Author"}
                                        width={80}
                                        height={80}
                                        quality={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col gap-1">
                                <span className="text-white text-sm font-black tracking-tight">{post.authorName}</span>
                                <div className="flex items-center gap-3 text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        {typeof post.date === 'string' ? post.date : new Date(post.date).toLocaleDateString()}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-primary" />
                                        {post.readTime[locale]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
