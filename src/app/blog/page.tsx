"use client";

import React from "react";
import BlogFeatured from "./_sections/BlogFeatured";
import BlogGrid from "./_sections/BlogGrid";

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
