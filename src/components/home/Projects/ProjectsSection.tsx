"use client";

import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users } from "lucide-react";
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

    return (
        <motion.div
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x: position * 140, // More space horizontally
                y: position * -45, // More space vertically
                z: -position * 350, // Deeper Z separation
                scale: 1 - position * 0.12,
                rotateY: position * -18, // More aggressive rotation for 3D depth
                opacity: isActive ? 1 : 0.85 / (position + 0.2),
                filter: isActive ? "blur(0px)" : `blur(${position * 4}px)`,
            }}
            whileHover={!isActive ? { x: position * 155, scale: 1 - position * 0.1 } : {}}
            style={{
                rotateX: isActive ? rotateX : 0,
                rotateY: isActive ? rotateY : (position * -15),
                zIndex: 10 - position,
                perspective: 1500 // Increased perspective depth
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

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        setProgress(0);
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextProject();
                    return 0;
                }
                return prev + 0.35; // Slightly slower for readability
            });
        }, 30);

        return () => clearInterval(interval);
    }, [isHovered, activeIndex]);

    return (
        <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full py-24 md:py-48 bg-background overflow-hidden flex flex-col items-center"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/2 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 z-10 relative mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle select-none">Showcasing our best work</span>
                    <h2 className="section-title mt-4 select-none">
                        Our Latest <span className="text-primary">Projects</span>
                    </h2>
                    <p className="section-desc mx-auto mt-6 select-none">
                        Explore our high-performance solutions designed to push the boundaries of technology and creativity.
                    </p>
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
                                        <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-primary/20 flex items-center gap-3 group w-fit">
                                            Explore Case Study
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                        </button>
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
                                        className="relative h-1.5 transition-all duration-500 rounded-full bg-white/10 overflow-hidden"
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

                {/* Statistics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-32 max-w-4xl mx-auto py-12 px-8 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 flex flex-wrap items-center justify-around shadow-lg gap-8"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-white/5 shadow-sm border border-white/10">
                                    {stat.icon}
                                </div>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</span>
                        </div>
                    ))}

                    <div className="h-12 w-px bg-gray-200 hidden md:block" />

                    <div className="flex flex-col items-center gap-3">
                        <span className="text-3xl font-black text-white tabular-nums">24/7</span>
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Support Available</span>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
