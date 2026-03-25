"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BLOG_POSTS } from "@/data/blog/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BlogFeatured() {
  const t = useTranslations("BlogPage");
  const featuredPost = BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.slice(1, 4);

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
              alt={featuredPost.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90" />
            <div className="absolute top-8 left-8">
               <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {featuredPost.category}
               </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {featuredPost.publishDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {featuredPost.readingTime}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6 group-hover:text-primary transition-colors duration-300">
            {featuredPost.title}
          </h2>
          
          <p className="text-zinc-400 text-lg font-medium leading-relaxed line-clamp-2 max-w-2xl">
            {featuredPost.description}
          </p>
        </motion.div>

        {/* Right: Secondary Posts List */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-2"
          >
            {t('trending')}
          </motion.h4>
          
          {secondaryPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex gap-6 items-start pb-8 border-b border-white/5 last:border-0 cursor-pointer"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">
                  {post.category}
                </span>
                <h3 className="text-white text-lg font-bold tracking-tight leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                   <span>{post.publishDate}</span>
                   <span>•</span>
                   <span>{post.readingTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
