"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Post } from "./postsData";
import { useTranslations } from "next-intl";

const tagColors: Record<string, string> = {
    Trending: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Popular: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    New: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    Featured: "text-primary bg-primary/10 border-primary/20",
};

const categoryAccents: Record<string, string> = {
    Design: "from-purple-500/20 to-pink-500/20",
    Development: "from-blue-500/20 to-cyan-500/20",
    Technology: "from-emerald-500/20 to-teal-500/20",
    Business: "from-orange-500/20 to-amber-500/20",
};

export default function PostCard({ post, index }: { post: Post; index: number }) {
    const t = useTranslations('BlogSection');
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col rounded-3xl bg-white/3 border border-white/8 hover:border-white/20 overflow-hidden cursor-pointer transition-colors duration-500"
        >
            {/* Header gradient */}
            <div className={`relative h-40 bg-linear-to-br ${categoryAccents[post.category]} flex items-end p-5`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute top-4 right-8 w-16 h-16 rounded-full bg-white/4" />

                {/* Category badge */}
                <span className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition-colors duration-500">
                    {t(`categories.${post.category}`)}
                </span>

                {/* Arrow icon */}
                <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Tag */}
                <span className={`w-fit text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${tagColors[post.tag] ?? "text-zinc-400 bg-white/5 border-white/10"}`}>
                    {t(`posts.${post.id}.tag`)}
                </span>

                <h3 className="text-white font-bold text-lg leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
                    {t(`posts.${post.id}.title`)}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors duration-300 flex-1">
                    {t(`posts.${post.id}.excerpt`)}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-3 text-zinc-600 text-xs">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {t(`posts.${post.id}.readTime`)}
                        </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
            </div>
        </motion.article>
    );
}
