"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

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
            transition={{ delay: index * 0.1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative rounded-4xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden shadow-xl"
        >
            <div className="flex flex-col md:flex-row min-h-[380px]">
                {/* Video/Image Section */}
                <div className="w-full md:w-2/5 relative overflow-hidden bg-zinc-950">
                    {/* Video element */}
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        loop
                        muted
                        playsInline
                        className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${isPlaying ? 'opacity-100 shadow-2xl' : 'opacity-30'}`}
                    />
                    
                    {/* Overlay for non-playing state */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                                    <Play className="w-8 h-8 text-white group-hover:text-primary fill-current transition-colors" />
                                </div>
                                <span className="mt-4 text-[10px] font-black text-zinc-500 group-hover:text-primary uppercase tracking-[0.3em] transition-colors">Hover to Play</span>
                            </motion.div>
                        </div>
                    )}
                    
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-zinc-950/40" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-10 md:p-12 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                            {t(`${projectKey}.category`)}
                        </span>
                        <div className="h-px bg-white/5 grow" />
                        <span className="text-[11px] font-black text-zinc-600 group-hover:text-primary/40 transition-colors">0{projectKey}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary transition-colors tracking-tight leading-none">
                        {t(`${projectKey}.title`)}
                    </h3>
                    
                    <p className="text-zinc-400 text-lg font-medium leading-relaxed mb-auto">
                        {t(`${projectKey}.desc`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-10">
                        {tech.map((item) => (
                            <span key={item} className="text-[10px] font-bold text-zinc-300 px-4 py-1.5 rounded-[10px] bg-white/5 border border-white/10 group-hover:border-primary/20 transition-all">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
