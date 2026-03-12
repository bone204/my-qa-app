import ServicesHeroSection from "@/app/services/sections/ServicesHeroSection";
import HiringSection from "@/app/services/sections/HiringSection";
import ServiceSection from "@/components/home/Service/ServiceSection";
import ReviewsSection from "@/components/home/Reviews/ReviewsSection";

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full">
            <ServicesHeroSection />
            <HiringSection />
        </div>
    );
}
