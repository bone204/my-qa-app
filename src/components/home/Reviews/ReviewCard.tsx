"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import { Review, reviews } from "./reviewsData";
import { useTranslations } from "next-intl";

export { reviews };

export default function ReviewCard({ review, index }: { review: Review; index: number }) {
    const t = useTranslations('ReviewsSection.reviews');
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [4, -4]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-4, 4]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, perspective: 800 }}
            className="group relative p-7 rounded-4xl bg-white/3 border border-white/8 hover:border-white/20 transition-colors duration-500 flex flex-col gap-6 overflow-hidden cursor-default"
        >
            {/* Gradient accent blob */}
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-linear-to-br ${review.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Top row: Stars + Quote icon */}
            <div className="flex items-start justify-between relative">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 transition-colors duration-300 ${i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-white/10 text-white/10"
                                }`}
                        />
                    ))}
                </div>
                <Quote className="w-8 h-8 text-white group-hover:text-white/60 transition-colors duration-500 shrink-0" />
            </div>

            {/* Review text */}
            <p className="review-content group-hover:text-zinc-300 transition-colors duration-500 relative flex-1">
                "{t(`${review.id}.content`)}"
            </p>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            {/* Avatar + info */}
            <div className="flex items-center gap-4 relative">
                <div className={`relative w-11 h-11 rounded-full bg-linear-to-br ${review.gradient} border border-white/10 flex items-center justify-center shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-sm tracking-wide">{review.initials}</span>
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="review-name truncate">{review.name}</span>
                    <span className="review-role">
                        {t(`${review.id}.role`)} · <span className="review-company">{review.company}</span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
