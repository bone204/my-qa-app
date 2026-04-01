import HireHeroSection from "./_sections/HireHeroSection";
import JoinSection from "./_sections/JoinSection";
import EvidenceSection from "./_sections/EvidenceSection";
import WorkExperienceSection from "./_sections/WorkExperienceSection";
import ReasonSection from "./_sections/ReasonSection";
import HireCategorySection from "./_sections/HireCategorySection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('HirePage');
    return {
        title: t('metaTitle'),
    };
}

export default function HirePage() {
    return (
        <div className="flex flex-col w-full select-none">
            <HireHeroSection />
            <HireCategorySection />
            <JoinSection />
            <WorkExperienceSection />
            <ReasonSection />
            <EvidenceSection />
        </div>
    );
}
