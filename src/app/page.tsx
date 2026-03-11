import AboutSection from "@/components/home/About/AboutSection";
import LanguageCarousel from "@/components/home/LanguageCarousel";
import ServiceSection from "@/components/home/Service/ServiceSection";
import ProjectSection from "@/components/home/Projects/ProjectsSection";
import TechSection from "@/components/home/Solution/SolutionSection";
import VisionSection from "@/components/home/Expertise/ExpertiseSection";
import ReviewsSection from "@/components/home/Reviews/ReviewsSection";
import BlogSection from "@/components/home/Blog/BlogSection";
import ContactSection from "@/components/home/Contact/ContactSection";

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
      <ContactSection />
    </div>
  );
}