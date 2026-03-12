import ServicesHero from "@/app/services/sections/ServicesHero";
import ServiceSection from "@/components/home/Service/ServiceSection";
import ReviewsSection from "@/components/home/Reviews/ReviewsSection";

export default function ServicesPage() {
    return (
        <div className="flex w-full flex-col">
            <ServicesHero />
        </div>
    );
}
