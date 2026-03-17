import ServicesHeroSection from "@/app/services/_sections/ServicesHeroSection";
import HiringSection from "@/app/services/_sections/HiringSection";
import ExtendedServicesSection from "@/app/services/_sections/ExtendedServicesSection";
import IndustrySolutionsSection from "@/app/services/_sections/IndustrySolutionsSection";
import SolutionsSection from "@/app/services/_sections/SolutionsSection";
import ContactCTASection from "@/app/services/_sections/ContactCTASection";
import JoinSection from "@/app/services/_sections/JoinSection";
import FAQSection from "@/app/services/_sections/FAQSection";
import ServicesBlogSection from "@/app/services/_sections/ServicesBlogSection";

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
            <ServicesBlogSection />
        </div>
    );
}
