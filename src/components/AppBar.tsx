"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function AppBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Don't hide navbar if mobile menu is open
      if (isMobileMenuOpen) {
        setLastScrollY(currentScrollY);
        return;
      }

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
  }, [lastScrollY, isMobileMenuOpen]);

  // Hide AppBar when a modal is opened in ServiceSection
  useEffect(() => {
    const handleModalToggle = (e: any) => {
      const isOpen = e.detail?.isOpen;
      setIsVisible(!isOpen);
    };

    window.addEventListener("modal-toggle", handleModalToggle);
    return () => window.removeEventListener("modal-toggle", handleModalToggle);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? "top-0 opacity-100" : "-top-24 opacity-0"
          }`}
      >
        <div
          className={cn(
            "mt-6 mx-4 w-full max-w-7xl pointer-events-auto transition-all duration-300",
            "rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
            isScrolled ? "py-2 px-4 md:px-6 shadow-primary/5" : "py-3 px-6 md:px-10"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src={IMAGES.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-16 md:w-28 h-auto object-contain transition-transform hover:scale-105 duration-300 brightness-110"
                  priority
                />
              </Link>
            </div>

            {/* Center Nav */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2"
              onMouseLeave={() => setHoveredItem(null)}
            >
              {["Home", "About", "Services"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onMouseEnter={() => setHoveredItem(item)}
                  className={cn(
                    "group relative px-5 py-2 text-[14px] font-bold transition-all duration-300 outline-none rounded-full",
                    hoveredItem === item ? "text-white" : "text-zinc-400 focus-visible:ring-2 focus-visible:ring-primary"
                  )}
                >
                  <span className="relative z-10">{item}</span>

                  {hoveredItem === item && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}

                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-4 z-20"></span>
                </Link>
              ))}
            </nav>

            <div className="w-40">

            </div>

            {/* Auth Buttons Right */}
            {/* <div
              className="hidden md:flex items-center justify-end gap-3"
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href="/signin"
                onMouseEnter={() => setHoveredItem('signin')}
                className={cn(
                  "relative px-5 py-2 text-sm font-bold transition-all duration-300 outline-none rounded-full",
                  hoveredItem === 'signin' ? "text-white" : "text-zinc-400"
                )}
              >
                <span className="relative z-10">Sign In</span>
                {hoveredItem === 'signin' && (
                  <motion.div
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
              <Button
                variant="primary"
                className="px-6 py-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all rounded-full bg-primary hover:bg-primary/80"
              >
                Sign Up
              </Button>
            </div> */}

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 text-zinc-400 hover:text-white transition-all focus:outline-none"
                aria-label="Toggle Menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content Profile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-[#0d1117]/95 backdrop-blur-2xl shadow-2xl border border-white/10 flex flex-col rounded-3xl pointer-events-auto"
            >
              <div className="flex flex-col px-6 py-8">
                <nav className="flex flex-col space-y-4 mb-8">
                  {["Home", "About", "Services"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-2xl font-black tracking-tight text-white hover:text-primary transition-all"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <Button variant="secondary" className="w-full py-4 text-base font-bold border-white/10 text-white rounded-2xl">
                    Sign In
                  </Button>
                  <Button variant="primary" className="w-full py-4 text-base font-bold rounded-2xl shadow-primary/30">
                    Sign Up
                  </Button>
                </motion.div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop for Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
