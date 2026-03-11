"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Globe, Award } from "lucide-react";
import Button from "@/components/Button";
import { VideoText } from "@/components/VideoText";
import { VIDEOS } from "@/constants/video";
import { projects, stats } from "./projectsData";
import { ProjectStackCard, Counter } from "./ProjectStackCard";

const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8, filter: "blur(20px)" },
    visible: (direction: "up" | "down") => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: direction === "up" ? { duration: 0 } : {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: 0.1
        }
    })
};


export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { amount: 0.2 });

    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous) {
            setScrollDirection("down");
        } else if (latest < previous) {
            setScrollDirection("up");
        }
    });

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        setProgress(0);
    };

    // Reset hover state when scrolling away to prevent stuck "frozen" state
    useEffect(() => {
        if (!isInView) {
            setIsHovered(false);
        }
    }, [isInView]);

    useEffect(() => {
        if (isHovered || !isInView) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextProject();
                    return 0;
                }
                return prev + 0.35;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [isHovered, activeIndex, isInView]);

    return (
        <section
            ref={containerRef as any}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full py-24 md:py-48 bg-background overflow-hidden flex flex-col items-center select-none"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/2 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 z-10 relative mb-20 text-center">
                <motion.div
                    custom={scrollDirection}
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex justify-center"
                >
                    <VideoText
                        src={VIDEOS.bgText}
                        fontSize={15}
                        fontWeight={900}
                        className="h-[20vh] md:h-[25vh] w-full"
                        fontFamily="Inter, sans-serif"
                    >
                        PROJECTS
                    </VideoText>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 min-h-[600px] max-w-7xl mx-auto">

                    {/* Left Side: Descriptions */}
                    <div className="w-full lg:w-5/12 order-2 lg:order-1 flex flex-col justify-center">
                        <div className="min-h-[400px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="flex flex-col gap-6"
                                >
                                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                                        {projects[activeIndex].category}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                                        {projects[activeIndex].title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg">
                                        {projects[activeIndex].description}
                                    </p>

                                    <div className="mt-8">
                                        <Button
                                            variant="body"
                                            className="w-fit"
                                        >
                                            Explore Case Study
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex items-center gap-4 mt-16">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setProgress(0);
                                        }}
                                        className="relative h-1.5 transition-all duration-500 rounded-full bg-white/20 hover:bg-white/40 overflow-hidden"
                                        style={{ width: activeIndex === index ? "80px" : "16px" }}
                                    >
                                        {activeIndex === index && (
                                            <motion.div
                                                className="absolute inset-0 bg-primary origin-left"
                                                animate={{ width: `${progress}%` }}
                                                transition={{ ease: "linear", duration: 0 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image Stack */}
                    <div className="w-full lg:w-7/12 h-[450px] md:h-[600px] relative order-1 lg:order-2 flex items-center justify-center">
                        <div className="relative w-full max-w-[550px] h-full perspective-[2000px]">
                            {projects.map((project, index) => {
                                let position = index - activeIndex;
                                if (position < 0) position += projects.length;
                                const isActive = index === activeIndex;

                                return (
                                    <ProjectStackCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        position={position}
                                        isActive={isActive}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setProgress(0);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Bar (Full Width) */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-32 w-[95%] max-w-[1300px] mx-auto py-6 px-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-wrap items-center justify-around shadow-lg gap-8"
            >
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 group min-w-[140px]">
                        <div className="flex items-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="p-3 rounded-xl bg-white/5 shadow-inner border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-500"
                            >
                                {stat.icon}
                            </motion.div>
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <span className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] group-hover:text-zinc-300 transition-colors duration-500">{stat.label}</span>
                    </div>
                ))}

                <div className="h-16 w-px bg-linear-to-b from-transparent via-white/10 to-transparent hidden xl:block" />

                <div className="flex flex-col items-center gap-3 group min-w-[140px]">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <span className="text-3xl font-black text-white tabular-nums tracking-tighter">24/7</span>
                    </div>
                    <span className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">Active Support</span>
                </div>
            </motion.div>
        </section >
    );
}
