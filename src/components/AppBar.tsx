"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function AppBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 10);

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Scroll down
            } else {
                setIsVisible(true); // Scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`sticky top-0 z-50 w-full px-4 py-4 md:px-8 transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                {/* Logo Left */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={IMAGES.logo} alt="Logo" width={120} height={120} />
                    </Link>
                </div>

                {/* Center Nav */}
                <nav className="flex items-center gap-12 bg-transparent px-10 py-2">
                    <Link
                        href="/"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/about"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/services"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        Services
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Auth Buttons Right */}
                <div className="flex items-center justify-end gap-4">
                    <Button variant="secondary">Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
