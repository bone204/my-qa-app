import AboutSection from "@/components/home/About/AboutSection";
import LanguageCarousel from "@/components/home/LanguageCarousel";
import MilestonesSection from "@/components/home/Service/ServiceSection";
import TeamSection from "@/components/home/TeamSection";
import TechSection from "@/components/home/Solution/SolutionSection";
import VisionSection from "@/components/home/Expertise/ExpertiseSection";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <AboutSection />
      <LanguageCarousel />
      <MilestonesSection />
      <VisionSection />
      <TechSection />
      <TeamSection />
    </div>
  );
}