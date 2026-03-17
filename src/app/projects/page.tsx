import ProjectsHero from "@/app/projects/_sections/ProjectsHero";
import ProjectsContent from "@/app/projects/_sections/ProjectsContent";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col w-full bg-background scroll-smooth">
            <ProjectsHero />
            <ProjectsContent />
        </div>
    );
}
