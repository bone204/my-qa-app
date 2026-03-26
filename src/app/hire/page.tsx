import HireHeroSection from "./_sections/HireHeroSection";
import JoinSection from "./_sections/JoinSection";
import EvidenceSection from "./_sections/EvidenceSection";
import WorkExperienceSection from "./_sections/WorkExperienceSection";

export default function HirePage() {
    return (
        <div className="flex flex-col w-full select-none">
            <HireHeroSection />
            <JoinSection />
            <EvidenceSection />
            <WorkExperienceSection />
        </div>
    );
}
