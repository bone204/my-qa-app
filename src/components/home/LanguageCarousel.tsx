"use client";

import React, { useEffect, useRef, useState } from 'react';

const LANGUAGES = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
    { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

export default function LanguageCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [heldId, setHeldId] = useState<number | null>(null);
    const heldIdRef = useRef<number | null>(null);
    const isFirstRun = useRef(true);

    // Reduced duplication to 2 sets as requested (max 2 occurrences of each icon)
    const itemsRef = useRef(
        [...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((lang, idx) => ({
            ...lang,
            id: idx,
            x: 0,
            y: 0,
            targetY: 0,
            speed: 0.8 + Math.random() * 1.0,
            scale: 0.8 + Math.random() * 0.4,
        }))
    );

    useEffect(() => {
        heldIdRef.current = heldId;
    }, [heldId]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = containerRef.current;
        if (!container) return;

        const initPositions = () => {
            const rect = container.getBoundingClientRect();
            const numLanes = 4;
            const topPadding = 30;
            const bottomPadding = 30;
            const iconSize = 80;

            // Available height for positioning the top-left of icons
            const availableHeight = rect.height - topPadding - bottomPadding - iconSize;
            const laneSpacing = availableHeight / (numLanes - 1);

            itemsRef.current.forEach((item, idx) => {
                const lane = idx % numLanes;
                const laneY = topPadding + (lane * laneSpacing);
                item.y = laneY;
                item.targetY = laneY;
                // Spread items horizontally to avoid initial bunching
                item.x = rect.width + (Math.floor(idx / numLanes) * (rect.width / 3));
            });
            isFirstRun.current = false;
        };

        if (isFirstRun.current) {
            initPositions();
        }

        let animationFrameId: number;

        const update = () => {
            const currentRect = container.getBoundingClientRect();
            const currentHeldId = heldIdRef.current;

            itemsRef.current.forEach((item) => {
                const element = document.getElementById(`lang-item-${item.id}`);

                if (currentHeldId !== item.id) {
                    item.x -= item.speed;

                    // Return to lane
                    if (item.y !== item.targetY) {
                        item.y += (item.targetY - item.y) * 0.05;
                        if (Math.abs(item.targetY - item.y) < 0.1) item.y = item.targetY;
                    }

                    // Reset to right side
                    if (item.x < -200) {
                        item.x = currentRect.width + 100;
                    }
                }

                if (element) {
                    element.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) scale(${item.id === currentHeldId ? 1.2 : item.scale})`;
                }
            });

            animationFrameId = requestAnimationFrame(update);
        };

        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (heldId !== null && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const mouseRelativeY = e.clientY - rect.top;

            // Edge release
            const padding = 15;
            if (mouseRelativeY < padding || mouseRelativeY > (rect.height - padding)) {
                setHeldId(null);
                return;
            }

            const item = itemsRef.current.find(i => i.id === heldId);
            if (item) {
                item.x = e.clientX - rect.left - 40;
                item.y = mouseRelativeY - 40;
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-[350px] w-full overflow-hidden bg-gradient-to-r from-[#d7265a] via-[#f43f5e] to-[#d7265a] isolate"
            onMouseMove={handleMouseMove}
            onMouseUp={() => setHeldId(null)}
            onMouseLeave={() => setHeldId(null)}
        >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative h-full w-full pointer-events-none">
                {itemsRef.current.map((item) => (
                    <div
                        id={`lang-item-${item.id}`}
                        key={item.id}
                        className={`absolute left-0 top-0 select-none will-change-transform pointer-events-auto cursor-grab active:cursor-grabbing ${heldId === item.id ? 'z-[100]' : 'z-10'
                            }`}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setHeldId(item.id);
                        }}
                    >
                        {heldId === item.id && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-sm font-bold text-[#d7265a] shadow-xl animate-in fade-in zoom-in duration-200">
                                {item.name}
                                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                            </div>
                        )}

                        <div
                            className={`flex aspect-square h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-2xl transition-all duration-300 ${heldId === item.id
                                ? 'shadow-[0_0_40px_rgba(255,255,255,0.9)] scale-100 ring-4 ring-white/30'
                                : 'hover:scale-105'
                                }`}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                width={54}
                                height={54}
                                className="h-14 w-14 object-contain pointer-events-none"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#d7265a] via-[#d7265a]/40 to-transparent z-40 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#d7265a] via-[#d7265a]/40 to-transparent z-40 pointer-events-none" />
        </section>
    );
}
