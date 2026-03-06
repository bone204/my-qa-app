import AboutSection from "@/components/home/AboutSection";
import MilestonesSection from "@/components/home/MilestonesSection";
import TeamSection from "@/components/home/TeamSection";
import TechSection from "@/components/home/TechSection";
import VisionSection from "@/components/home/VisionSection";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <AboutSection />
      <MilestonesSection />
      <VisionSection />
      <TechSection />
      <TeamSection />
    </div>
  );
}