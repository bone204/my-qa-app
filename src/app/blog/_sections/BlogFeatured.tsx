"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { getBlogPosts } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function BlogFeatured() {
  const t = useTranslations("BlogPage");
  const locale = useLocale() as 'en' | 'vi';
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await getBlogPosts();
      setPosts(data.slice(0, 4));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-24 animate-pulse">
        <div className="lg:col-span-7 aspect-video bg-white/5 rounded-[32px]" />
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="h-6 w-32 bg-white/5 rounded-full" />
          {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section className="relative mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

        {/* Left: Big Featured Post */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 group cursor-pointer"
        >
          <div className="relative aspect-video lg:aspect-square xl:aspect-video rounded-[32px] overflow-hidden mb-8">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title[locale]}
              fill
              quality={100}
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90" />
            <div className="absolute top-8 left-8">
              <span className="px-5 py-2 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">
                {featuredPost.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-5 text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-primary" />
              {typeof featuredPost.date === 'string' ? featuredPost.date : new Date(featuredPost.date).toLocaleDateString()}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-primary" />
              {featuredPost.readTime[locale]}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8 group-hover:text-primary transition-colors duration-300">
            {featuredPost.title[locale]}
          </h2>

          <p className="text-zinc-400 text-xl font-medium leading-relaxed line-clamp-3 max-w-2xl">
            {featuredPost.excerpt[locale]}
          </p>
        </motion.div>

        {/* Right: Secondary Posts List */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-[11px] mb-2"
          >
            {t('trending')}
          </motion.h4>

          {secondaryPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex gap-8 items-start pb-10 border-b border-white/5 last:border-0 cursor-pointer"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-4xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title[locale]}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                  {post.category}
                </span>
                <h3 className="text-white text-xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title[locale]}
                </h3>
                <div className="flex items-center gap-4 text-zinc-500 text-[11px] font-black uppercase tracking-widest mt-1">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    {typeof post.date === 'string' ? post.date : new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                  <span className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-primary" />
                    {post.readTime[locale]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
