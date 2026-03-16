import ServicesHeroSection from "@/app/services/sections/ServicesHeroSection";
import HiringSection from "@/app/services/sections/HiringSection";
import ExtendedServicesSection from "@/app/services/sections/ExtendedServicesSection";
import IndustrySolutionsSection from "@/app/services/sections/IndustrySolutionsSection";
import SolutionsSection from "@/app/services/sections/SolutionsSection";
import ContactCTASection from "@/app/services/sections/ContactCTASection";
import JoinSection from "@/app/services/sections/JoinSection";
import FAQSection from "@/app/services/sections/FAQSection";

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full">
            <ServicesHeroSection />
            <HiringSection />
            <ExtendedServicesSection />
            <ContactCTASection />
            <SolutionsSection />
            <IndustrySolutionsSection />
            <JoinSection />
            <FAQSection />
        </div>
    );
}
