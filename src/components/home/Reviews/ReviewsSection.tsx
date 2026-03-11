"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import ReviewCard, { reviews } from "./ReviewCard";

const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, filter: "blur(20px)" },
    visible: (direction: "up" | "down") => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: direction === "up" ? { duration: 0 } : {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: 0.05,
        },
    }),
};

const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (direction: "up" | "down") => ({
        opacity: 1,
        y: 0,
        transition: direction === "up" ? { duration: 0 } : {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1] as const,
            delay: 0.25,
        },
    }),
};

export default function ReviewsSection() {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous) setScrollDirection("down");
        else if (latest < previous) setScrollDirection("up");
    });

    return (
        <section className="relative w-full pb-32 bg-background overflow-hidden select-none">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20 gap-5">
                    <motion.div
                        custom={scrollDirection}
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="review-label">
                            Client Reviews
                        </span>
                    </motion.div>

                    <motion.h2
                        custom={scrollDirection}
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="review-title max-w-3xl"
                    >
                        Loved by our <br />
                        <span className="review-subtitle">clients.</span>
                    </motion.h2>

                    <motion.p
                        custom={scrollDirection}
                        variants={descVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="review-desc max-w-xl"
                    >
                        Don't take our word for it. Here's what our partners have to say about working with us.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review, index) => (
                        <ReviewCard key={review.id} review={review} index={index} />
                    ))}
                </div>
            </div>

            {/* Bottom separator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
