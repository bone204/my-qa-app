"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, TrendingUp, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ROUTES } from "@/constants/routes";
import Button from "@/components/ui/Button";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  gradient: string;
}

export default function BlogFeatured() {
  const t = useTranslations("BlogPage");
  const locale = useLocale();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const gradients = [
    "from-primary/20 via-blue-900/40 to-indigo-950/60",
    "from-rose-500/10 via-purple-900/20 to-zinc-900/40",
    "from-emerald-500/10 via-teal-900/20 to-zinc-900/40",
    "from-amber-500/10 via-orange-900/20 to-zinc-900/40",
    "from-indigo-500/10 via-blue-900/20 to-zinc-900/40"
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getBlogPosts();
        const mappedPosts: Post[] = data.slice(0, 5).map((blogPost, index) => {
          const dateValue = new Date(blogPost.date as string);
          const formattedDate = new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }).format(dateValue);

          return {
            id: blogPost.id,
            title: (blogPost.title as any)[locale] || blogPost.title.en,
            excerpt: (blogPost.excerpt as any)[locale] || blogPost.excerpt.en,
            category: t(`filters.${blogPost.category}`),
            date: formattedDate,
            readTime: (blogPost.readTime as any)[locale] || blogPost.readTime.en,
            image: blogPost.image,
            gradient: gradients[index % gradients.length]
          };
        });
        setPosts(mappedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [locale]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <div className="animate-pulse mb-24">
        <div className="h-4 w-32 bg-white/10 mb-4 rounded" />
        <div className="h-12 w-96 bg-white/10 mb-12 rounded" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8 aspect-video bg-white/5 rounded-sm" />
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-24 bg-white/5 rounded-sm" />)}
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <section className="relative mb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              {t('hero.subtitle')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black tracking-tighter leading-none"
          >
            {t.rich('hero.title', {
              highlight: (chunks) => <span className="text-primary">{chunks}</span>
            })}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 md:mt-0 flex items-center gap-8"
        >
          <div className="hidden sm:flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mr-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>{t('trending')}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
      >
        {/* Main Story */}
        <motion.div variants={itemVariants} className="lg:col-span-8 group cursor-pointer">
          <Link href={`${ROUTES.BLOG}/${featuredPost.id}`} className="flex flex-col h-full">
            <div className="relative aspect-video mb-8 overflow-hidden rounded-sm bg-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
              {featuredPost.image ? (
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <div className={`absolute inset-0 bg-linear-to-br transition-transform duration-700 group-hover:scale-105 ${featuredPost.gradient}`} />
              )}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-primary text-[10px] font-black uppercase tracking-widest text-white mb-3 w-fit">
                  Lead Story
                </div>
              </div>
            </div>

            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
              {featuredPost.category}
            </span>

            <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
              {featuredPost.title}
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl line-clamp-3">
              {featuredPost.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-primary/60" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-primary/60" />
                  {featuredPost.readTime} {t('stats.readTime')}
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:opacity-100 transition-opacity">
                <span>{t('details.viewAll')}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-500">{t('trending')}</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {secondaryPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="pb-8 border-b border-white/5 last:border-0"
            >
              <Link
                href={`${ROUTES.BLOG}/${post.id}`}
                className="group cursor-pointer block"
              >
                <div className="flex gap-4">
                  <div className={`relative flex-none w-24 h-24 rounded-sm bg-linear-to-br overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-95 ${post.gradient}`}>
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                      {post.category}
                    </span>
                    <h4 className="text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-zinc-600 mt-auto uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="text-primary/40">•</span>
                      <span>{post.readTime} {t('stats.readTime')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
