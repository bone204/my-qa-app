"use client";

import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../_components/ProjectCard";

export default function ProjectsContent() {
    const t = useTranslations("ProjectsPage");
    const projectKeys = ["1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <section className="pb-32 relative select-none overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="review-label">{t('content.badge')}</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="review-title text-center"
                    >
                        {t.rich('content.title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-medium max-w-2xl mt-4"
                    >
                        {t('content.subtitle')}
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {projectKeys.map((key, index) => (
                        <ProjectCard key={key} index={index} projectKey={key} />
                    ))}
                </div>

                {/* Load More Area (Empty for now, but design-wise it fills the bottom) */}
                <div className="mt-24 flex flex-col items-center">
                    <div className="w-px h-24 bg-linear-to-b from-primary/50 to-transparent" />
                    <p className="mt-8 text-xs font-black text-zinc-600 uppercase tracking-[0.4em]">End of Portfolio</p>
                </div>
            </div>
        </section>
    );
}
