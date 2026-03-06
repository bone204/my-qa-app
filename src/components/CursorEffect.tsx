"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function CursorEffect() {
    const ripplesContainerRef = useRef<HTMLDivElement>(null);
    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Track mouse position
    const mouse = useRef({ x: -100, y: -100 });

    useEffect(() => {
        setMounted(true);
        // ... (existing logic continues)

        // Reusable ripple creation function
        const createRipple = (x: number, y: number, isClick = false) => {
            if (!ripplesContainerRef.current) return;

            const ripple = document.createElement('div');

            // If it's a click, maybe make it slightly distinct (sharper/faster)
            // but keep the same HD style
            ripple.className = 'absolute rounded-full border border-[#d7265a] bg-[#d7265a]/5 pointer-events-none will-change-[transform,opacity]';

            const size = isClick ? 50 : 40; // Click ripples start slightly larger
            ripple.style.left = `${x - size / 2}px`;
            ripple.style.top = `${y - size / 2}px`;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            // Animation: 3s for auto-ripples, 1.5s for click-ripples (more reactive)
            const duration = isClick ? '1.5s' : '3s';
            ripple.style.animation = `cursorRippleAnim ${duration} cubic-bezier(0.1, 0.4, 0.2, 1) forwards`;

            ripplesContainerRef.current.appendChild(ripple);

            setTimeout(() => {
                if (ripple && ripplesContainerRef.current?.contains(ripple)) {
                    ripplesContainerRef.current.removeChild(ripple);
                }
            }, isClick ? 1500 : 3000);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Check if hovering over an interactive element
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHoveringInteractive(!!isInteractive);
        };

        const handleMouseDown = (e: MouseEvent) => {
            // Check if clicking an interactive element
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            // Only create click-ripple if NOT clicking a button/link
            if (!isInteractive) {
                createRipple(e.clientX, e.clientY, true);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', handleMouseDown, { passive: true });

        // Ripple emission interval (generates expanding DOM elements)
        const rippleInterval = setInterval(() => {
            if (mouse.current.x < 0 || isHoveringInteractive) return;
            createRipple(mouse.current.x, mouse.current.y, false);
        }, 800);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            clearInterval(rippleInterval);
        };
    }, [isHoveringInteractive]);

    if (!mounted) return null;

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-[100] h-screen w-screen overflow-hidden"
            aria-hidden="true"
        >
            <div ref={ripplesContainerRef} className="absolute inset-0 pointer-events-none" />

            <style jsx global>{`
                @keyframes cursorRippleAnim {
                    0% {
                        transform: scale(0.1);
                        opacity: 1;
                        border-width: 2px;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                        border-width: 0px;
                    }
                }
            `}</style>
        </div>
    );
}
