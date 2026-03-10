"use client";

import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, Briefcase, Globe, Award } from "lucide-react";
import Button from "@/components/Button";
import { VideoText } from "@/components/VideoText";
import { VIDEOS } from "@/constants/video";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Smart Home IoT Dashboard",
        category: "Web Application",
        description: "A comprehensive control center for modern living, blending deep-tech automation with an intuitive, minimalist interface.",
        image: "/projects/project1.png",
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 2,
        title: "FinTech Mobile Portfolio",
        category: "Mobile App",
        description: "Redefining personal finance through peak performance and elegant security, designed for the next generation of investors.",
        image: "/projects/project2.png",
        color: "from-emerald-500 to-teal-400",
    },
    {
        id: 3,
        title: "AI Creative Agency Portal",
        category: "Landing Page",
        description: "Where artificial intelligence meets human creativity, featuring dynamic visuals and seamless user journeys for global brands.",
        image: "/projects/project3.png",
        color: "from-purple-500 to-pink-400",
    },
];

const stats = [
    {
        label: "Projects Completed",
        value: 150,
        icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
        suffix: "+",
    },
    {
        label: "Happy Clients",
        value: 98,
        icon: <Users className="w-5 h-5 text-blue-400" />,
        suffix: "%",
    },
    {
        label: "Years Experience",
        value: 8,
        icon: <Briefcase className="w-5 h-5 text-purple-400" />,
        suffix: "+",
    }
];
const ProjectStackCard = ({ project, index, position, isActive, onClick }: {
    project: Project;
    index: number;
    position: number;
    isActive: boolean;
    onClick: () => void;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isActive || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Changed to standard mobile threshold
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x: position * (isMobile ? 45 : 140), // Increased from 35 to 45 for better visibility
                y: position * (isMobile ? -25 : -45),
                z: -position * (isMobile ? 150 : 350),
                width: isMobile ? "86%" : "100%", // Reduced width on mobile to show background
                scale: 1 - position * (isMobile ? 0.05 : 0.12), // Less scale reduction on mobile
                rotateY: position * (isMobile ? -12 : -18),
                opacity: isActive ? 1 : 0.85 / (position + 0.2),
                filter: isActive ? "blur(0px)" : `blur(${position * (isMobile ? 1.5 : 4)}px)`,
            }}
            whileHover={!isActive ? {
                x: position * (isMobile ? 55 : 155),
                scale: 1 - position * (isMobile ? 0.03 : 0.1)
            } : {}}
            style={{
                rotateX: isActive ? rotateX : 0,
                rotateY: isActive ? rotateY : (position * -15),
                zIndex: 10 - position,
                perspective: 1500,
                left: isMobile ? "7%" : "0", // Center the narrower cards on mobile
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
            }}
            className="absolute inset-0 cursor-pointer origin-center transform-gpu"
        >
            <div className={cn(
                "relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-500",
                isActive ? "ring-2 ring-primary/40 shadow-primary/20" : "border border-white/40 shadow-black/5"
            )}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={isActive}
                />

                {!isActive && (
                    <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1.5px] group-hover:bg-transparent transition-all duration-500" />
                )}

                {isActive && (
                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
                )}
            </div>
        </motion.div>
    );
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-3xl font-black text-white tabular-nums">
            {count}
            {suffix}
        </span>
    );
};

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
