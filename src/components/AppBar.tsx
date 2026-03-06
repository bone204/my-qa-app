"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useState, useEffect } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function AppBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full select-none transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4 transition-all">
          {/* Logo Left */}
          <div className="flex z-50 items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-[#d7265a]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image 
                src={IMAGES.logo} 
                alt="Logo" 
                width={120} 
                height={120} 
                className="w-20 md:w-28 h-auto object-contain transition-transform hover:scale-105 duration-300"
                priority
              />
            </Link>
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {["Home", "About", "Services"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="group relative text-[15px] font-semibold text-gray-700 transition-colors hover:text-[#d7265a] outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-[#d7265a] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#d7265a] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons Right */}
          <div className="hidden md:flex items-center justify-end gap-3 lg:gap-4">
            <Button variant="secondary" className="px-5 py-2.5 text-sm font-semibold rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">Sign In</Button>
            <Button variant="primary" className="px-5 py-2.5 text-sm font-semibold shadow-md hover:shadow-xl shadow-[#d7265a]/20 hover:shadow-[#d7265a]/30 transition-all rounded-full bg-[#d7265a] hover:bg-[#b01c48]">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 text-gray-700 bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#d7265a] active:scale-95"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} className="text-gray-900" /> : <Menu size={20} className="text-gray-900" />}
              </motion.div>
            </button>
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
              className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 flex flex-col rounded-b-4xl"
            >
              <div className="flex flex-col px-6 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                <nav className="flex flex-col space-y-2 mb-6">
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
                        className="block px-4 py-3 text-2xl font-bold tracking-tight text-gray-900 hover:text-[#d7265a] hover:bg-[#d7265a]/5 rounded-2xl transition-all"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-px w-full bg-gray-100 mb-6" 
                />

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex flex-col gap-3 pb-4"
                >
                  <Button variant="secondary" className="w-[calc(100%-1rem)] mx-auto flex justify-center py-4 text-base font-semibold border-2 rounded-2xl shadow-sm">
                    Sign In
                  </Button>
                  <Button variant="primary" className="w-[calc(100%-1rem)] mx-auto flex justify-center py-4 text-base font-semibold shadow-lg shadow-[#d7265a]/30 rounded-2xl hover:shadow-[#d7265a]/40">
                    Sign Up
                  </Button>
                </motion.div>
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
