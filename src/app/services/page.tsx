import ServicesHeroSection from "@/app/services/sections/ServicesHeroSection";
import HiringSection from "@/app/services/sections/HiringSection";
import ExtendedServicesSection from "@/app/services/sections/ExtendedServicesSection";
import SolutionsSection from "@/app/services/sections/SolutionsSection";
import ContactCTASection from "@/app/services/sections/ContactCTASection";

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full">
            <ServicesHeroSection />
            <HiringSection />
            <ExtendedServicesSection />
            <ContactCTASection />
            <SolutionsSection />
        </div>
    );
}
