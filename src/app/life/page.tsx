import AlbumHero from "./_sections/AlbumHero";
import AlbumGallery from "./_sections/AlbumGallery";
import AlbumStories from "./_sections/AlbumStories";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('LifePage');
    return {
        title: t('metaTitle'),
    };
}

export default function LifePage() {
    return (
        <div className="flex w-full flex-col bg-transparent overflow-hidden">
            {/* Hero scattered gallery */}
            <AlbumHero />

            {/* Main Interactive Gallery */}
            <AlbumGallery />

            {/* Parallax Stories */}
            <AlbumStories />
        </div>
    );
}
