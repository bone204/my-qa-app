"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Play, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    index: number;
    projectKey: string;
}

export default function ProjectCard({ index, projectKey }: ProjectCardProps) {
    const t = useTranslations("SuccessPage.projects.items");
    const tech = t.raw(`${projectKey}.tech`) as string[];
    const videoUrl = t(`${projectKey}.video`);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video play interrupted", err));
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden shadow-2xl h-full"
        >
            {/* Visual Header - Video/Preview */}
            <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <video
                    ref={videoRef}
                    src={videoUrl}
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}
                />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6 z-20">
                    <span className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                        {t(`${projectKey}.category`)}
                    </span>
                </div>

                {/* Play Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                        <Play className="w-8 h-8 text-white group-hover:text-primary fill-current transition-colors" />
                    </div>
                </div>

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 md:p-10 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight leading-tight">
                        {t(`${projectKey}.title`)}
                    </h3>
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                </div>

                <p className="text-zinc-400 text-base font-medium leading-relaxed mb-8 line-clamp-3">
                    {t(`${projectKey}.desc`)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {tech.slice(0, 4).map((item) => (
                        <span key={item} className="text-[10px] font-bold text-zinc-400 px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/20 group-hover:text-zinc-200 transition-all">
                            {item}
                        </span>
                    ))}
                    {tech.length > 4 && (
                        <span className="text-[10px] font-bold text-zinc-500 px-3 py-1.5">+ {tech.length - 4} More</span>
                    )}
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="text-zinc-500 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </button>
                        <button className="text-zinc-500 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </button>
                    </div>
                    <span className="text-[11px] font-black text-zinc-700 tracking-widest uppercase">
                        Project 0{projectKey}
                    </span>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-full pointer-events-none bg-linear-to-tr from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 skew-x-[-20deg]" />
        </motion.div>
    );
}
