"use client";

import { motion, useTransform, useInView, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "./projectsData";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const ProjectStackCard = ({ project, index, position, isActive, onClick }: {
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
            setIsMobile(window.innerWidth < 768);
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
                x: position * (isMobile ? 45 : 140),
                y: position * (isMobile ? -25 : -45),
                z: -position * (isMobile ? 150 : 350),
                width: isMobile ? "86%" : "100%",
                scale: 1 - position * (isMobile ? 0.05 : 0.12),
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
                left: isMobile ? "7%" : "0",
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

export const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
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
