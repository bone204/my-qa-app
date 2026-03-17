import SuccessHero from "@/app/success/_sections/SuccessHero";
import SuccessContent from "@/app/success/_sections/SuccessContent";

export default function SuccessPage() {
    return (
        <div className="flex flex-col w-full bg-background scroll-smooth">
            <SuccessHero />
            <SuccessContent />
        </div>
    );
}
