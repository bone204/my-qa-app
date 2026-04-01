import React from "react";
import BlogFeatured from "./_sections/BlogFeatured";
import BlogGrid from "./_sections/BlogGrid";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('BlogSection');
  return {
    title: t('metaTitle'),
  };
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
         <BlogFeatured />
         <div className="h-px w-full my-24" />
         <BlogGrid />
      </div>
    </main>
  );
}
