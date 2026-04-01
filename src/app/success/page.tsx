import SuccessHero from "@/app/success/_sections/SuccessHero";
import SuccessContent from "@/app/success/_sections/SuccessContent";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('SuccessPage');
    return {
        title: t('metaTitle'),
    };
}

export default function SuccessPage() {
    return (
        <div className="flex flex-col w-full bg-background scroll-smooth">
            <SuccessHero />
            <SuccessContent />
        </div>
    );
}
