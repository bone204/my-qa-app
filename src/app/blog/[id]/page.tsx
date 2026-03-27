import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Tag, Share2, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostById, getBlogPosts } from '@/services/blog';
import PostCard from '@/components/home/Blog/PostCard';
import { getLocale, getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: 'vi' | 'en' }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPostById(id);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title.vi || post.title.en} | QKIT Blog`,
    description: post.excerpt.vi || post.excerpt.en,
  };
}

export default async function BlogPostDetail({ params, searchParams }: Props) {
  const { id } = await params;
  const { lang } = await searchParams;
  const locale = await getLocale();
  const t = await getTranslations('BlogPage');
  const currentLang = (locale === 'vi' || locale === 'en') ? locale : 'vi';
  const post = await getBlogPostById(id);

  // Fetch related posts (latest 3 posts excluding current one)
  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== id)
    .slice(0, 3);

  if (!post) {
    notFound();
  }

  const content = currentLang === 'vi' ? post.content.vi : post.content.en;
  const title = currentLang === 'vi' ? post.title.vi : post.title.en;
  const excerpt = currentLang === 'vi' ? post.excerpt.vi : post.excerpt.en;
  const tag = currentLang === 'vi' ? post.tag.vi : post.tag.en;
  const readTime = currentLang === 'vi' ? post.readTime.vi : post.readTime.en;

  return (
    <main className="min-h-screen overflow-x-hidden select-none">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full px-6 py-12 md:p-20">
          <div className="max-w-4xl mx-auto space-y-6">

            <div className="flex flex-wrap gap-3">
              <span className="bg-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                {t(`filters.${post.category}`)}
              </span>
              {tag && (
                <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300">
                  {tag}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-6 md:pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/30 p-0.5">
                  <img 
                    src={post.authorAvatar || 'https://i.pravatar.cc/150'} 
                    alt={post.authorName}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">{post.authorName}</p>
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{t('details.author')}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  {typeof post.date === 'string' ? post.date : post.date.toLocaleDateString('vi-VN')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  {readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt/Intro */}
          <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-relaxed italic border-l-4 border-primary pl-6 md:pl-8 mb-12 md:mb-16">
            {excerpt}
          </p>

          {/* Main Markdown Content */}
          <article className="prose-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>

        {/* Related Posts & Footer Container - Wider Layout */}
        <div className="max-w-6xl mx-auto mt-20 md:mt-32 pt-10 md:pt-20">
          {/* Related Posts Section */}
          <div>
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                  {t('details.relatedPosts')}
                </h2>
                <div className="h-1 w-16 md:w-20 bg-primary rounded-full" />
              </div>
              <Link 
                href="/blog"
                className="text-zinc-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest hidden md:block"
              >
                {t('details.viewAll')}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <PostCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-4">
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{t('details.share')}</p>
                <div className="flex gap-2">
                   {[Share2, MessageCircle].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all">
                        <Icon className="w-4 h-4" />
                      </button>
                   ))}
                </div>
             </div>

          </div>
        </div>
      </section>
    </main>
  );
}
