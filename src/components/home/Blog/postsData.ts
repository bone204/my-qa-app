export type BlogCategory = "All" | "Design" | "Development" | "Technology" | "Business";

export interface Post {
    id: number;
    title: string;
    excerpt: string;
    category: Exclude<BlogCategory, "All">;
    date: string;
    readTime: string;
    tag: string;
}

export const categories: BlogCategory[] = ["All", "Design", "Development", "Technology", "Business"];

export const posts: Post[] = [
    {
        id: 1,
        title: "The Future of UI Design: Glassmorphism & Beyond",
        excerpt: "Exploring how modern aesthetics like glassmorphism are reshaping the way we perceive digital interfaces and what comes next.",
        category: "Design",
        date: "Mar 8, 2026",
        readTime: "5 min read",
        tag: "Trending",
    },
    {
        id: 2,
        title: "Building High-Performance Next.js Applications",
        excerpt: "Deep dive into server components, streaming, and edge rendering to push your Next.js app to its absolute performance limits.",
        category: "Development",
        date: "Mar 5, 2026",
        readTime: "8 min read",
        tag: "Popular",
    },
    {
        id: 3,
        title: "AI-Driven Personalization in Modern SaaS Products",
        excerpt: "How leading SaaS companies are leveraging machine learning to create hyper-personalized user experiences at scale.",
        category: "Technology",
        date: "Mar 2, 2026",
        readTime: "6 min read",
        tag: "New",
    },
    {
        id: 4,
        title: "Why Motion Design is the New Competitive Advantage",
        excerpt: "Micro-animations and thoughtful transitions aren't just aesthetic — they directly impact conversion rates and user retention.",
        category: "Design",
        date: "Feb 28, 2026",
        readTime: "4 min read",
        tag: "New",
    },
    {
        id: 5,
        title: "Scaling a Creative Agency from 0 to $1M ARR",
        excerpt: "The real story behind growing a boutique creative agency, the mistakes we made, and the three pivots that changed everything.",
        category: "Business",
        date: "Feb 24, 2026",
        readTime: "10 min read",
        tag: "Featured",
    },
    {
        id: 6,
        title: "The Web3 UX Problem Nobody Is Talking About",
        excerpt: "Blockchain technology is evolving fast, but user experience hasn't kept up. Here's why and what designers can do about it.",
        category: "Technology",
        date: "Feb 20, 2026",
        readTime: "7 min read",
        tag: "Popular",
    },
];
