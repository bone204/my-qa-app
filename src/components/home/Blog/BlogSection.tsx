"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Rss } from "lucide-react";
import PostCard from "./PostCard";
import { posts, categories, BlogCategory } from "./postsData";

const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, filter: "blur(20px)" },
    visible: (direction: "up" | "down") => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: direction === "up" ? { duration: 0 } : {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: 0.05,
        },
    }),
};

export default function BlogSection() {
    const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous) setScrollDirection("down");
        else if (latest < previous) setScrollDirection("up");
    });

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter((p) => p.category === activeCategory);

    return (
        <section className="relative w-full pb-32 bg-background overflow-hidden select-none">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* ── Header: title left / desc right ── */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

                    {/* Left: label + title on one line feel */}
                    <div className="flex flex-col gap-4">
                        <motion.div
                            custom={scrollDirection}
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            className="flex items-center gap-2 w-fit"
                        >
                            <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                <Rss className="w-2 h-2 text-primary" />
                            </div>
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
                                Latest Articles
                            </span>
                        </motion.div>

                        <motion.h2
                            custom={scrollDirection}
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-5xl md:text-6xl font-black tracking-tighter leading-none"
                        >
                            <span className="text-white">Fresh </span>
                            <span className="text-primary">ideas.</span>
                        </motion.h2>
                    </div>

                    
                </div>

                {/* ── Filter bar — full width above cards ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-1.5 mb-10 p-1.5 rounded-2xl bg-white/3 border border-white/8 w-fit"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? "text-white"
                                    : "text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative">{cat}</span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Cards Grid ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {filteredPosts.map((post, index) => (
                            <PostCard key={post.id} post={post} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom separator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
