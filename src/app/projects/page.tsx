import ProjectsHero from "@/app/projects/_sections/ProjectsHero";
import ProjectsContent from "@/app/projects/_sections/ProjectsContent";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('ProjectsPage');
    return {
        title: t('metaTitle'),
    };
}

export default function ProjectsPage() {
    return (
        <div className="flex flex-col w-full bg-background scroll-smooth">
            <ProjectsHero />
            <ProjectsContent />
        </div>
    );
}
