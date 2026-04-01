import AboutSection from "@/components/home/About/AboutSection";
import dynamic from 'next/dynamic';

const LanguageCarousel = dynamic(() => import("@/components/home/LanguageCarousel"));
const ServiceSection = dynamic(() => import("@/components/home/Service/ServiceSection"));
const ProjectSection = dynamic(() => import("@/components/home/Projects/ProjectsSection"));
const TechSection = dynamic(() => import("@/components/home/Solution/SolutionSection"));
const VisionSection = dynamic(() => import("@/components/home/Expertise/ExpertiseSection"));
const ReviewsSection = dynamic(() => import("@/components/home/Reviews/ReviewsSection"));
const BlogSection = dynamic(() => import("@/components/home/Blog/BlogSection"));
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
  };
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <AboutSection />
      <LanguageCarousel />
      <ServiceSection />
      <VisionSection />
      <TechSection />
      <ProjectSection />
      <ReviewsSection />
      <BlogSection />
    </div>
  );
}