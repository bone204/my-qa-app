"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Briefcase, ArrowRight, Globe } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslations, useLocale } from 'next-intl';
import { setLocale } from '@/app/(actions)/locale';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function AppBar() {
  const t = useTranslations('AppBar');
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseAtTop, setIsMouseAtTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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

  // Show AppBar when mouse is near the top of the screen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // If mouse is within top 40px of the viewport, show the bar
      // If it moves below 100px, we stop "forcing" it visible from mouse peak
      if (e.clientY <= 40) {
        setIsMouseAtTop(true);
      } else if (e.clientY > 100) {
        setIsMouseAtTop(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hide AppBar when a modal is opened in ServiceSection
  useEffect(() => {
    const handleModalToggle = (e: any) => {
      const isOpen = e.detail?.isOpen;
      setIsVisible(!isOpen);
    };

    window.addEventListener("modal-toggle", handleModalToggle);
    return () => window.removeEventListener("modal-toggle", handleModalToggle);
  }, []);

  const isAppBarVisible = isVisible || isMouseAtTop;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${isAppBarVisible ? "top-0 opacity-100" : "-top-24 opacity-0 select-none"
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
              className="hidden lg:flex items-center gap-1 lg:gap-2"
              onMouseLeave={() => setHoveredItem(null)}
            >
              {['services', 'successStories', 'portfolio', 'aboutUs', 'news'].map((key) => {
                const item = t(`nav.${key}`);
                return (
                  <div
                    key={key}
                    className="relative group/nav-item"
                    onMouseEnter={() => setHoveredItem(key)}
                  >
                    <Link
                      href={key === 'aboutUs' ? '#' : (key === 'successStories' ? '/success' : `/${key.toLowerCase()}`)}
                      onClick={(e) => {
                        if (key === 'aboutUs') {
                          e.preventDefault();
                        }
                      }}
                      className={cn(
                        "group flex items-center gap-1.5 relative px-5 py-2 text-[14px] font-bold transition-all duration-300 outline-none rounded-full",
                        hoveredItem === key ? "text-white" : "text-zinc-400 focus-visible:ring-2 focus-visible:ring-primary"
                      )}
                    >
                      <span className="relative z-10">{item}</span>
                      {key === 'aboutUs' && (
                        <ChevronDown className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/nav-item:rotate-180" />
                      )}

                      {hoveredItem === key && (
                        <motion.div
                          layoutId="nav-hover-bg"
                          className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}

                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover/nav-item:w-4 z-20"></span>
                    </Link>

                    {/* Dropdown Menu cho Về Chúng Tôi */}
                    {key === 'aboutUs' && (
                      <AnimatePresence>
                        {hoveredItem === key && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56"
                          >
                            <div className="rounded-2xl border border-white/10 bg-[#1a1c23]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col min-w-[500px] w-max">
                              {/* Top Section */}
                              <div className="flex p-6">
                                {/* Left Column */}
                                <div className="flex-1 pr-6 border-r border-white/10 group/col-left">
                                  <h4 className="text-xs font-bold text-zinc-500 group-hover/col-left:text-white transition-colors duration-300 mb-5">{t('aboutDropdown.aboutUs')}</h4>
                                  <div className="flex flex-col space-y-4">
                                    {[
                                      { name: t('aboutDropdown.overview'), href: "/tong-quan" },
                                      { name: t('aboutDropdown.feedback'), href: "/phan-hoi" },
                                      { name: t('aboutDropdown.contact'), href: "/lien-he" },
                                    ].map((subItem) => (
                                      <Link key={subItem.name} href={subItem.href} className="group/link flex items-center gap-3">
                                        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-primary group-hover/link:bg-primary/20 transition-colors shrink-0" />
                                        <span className="text-sm font-semibold text-white group-hover/link:text-primary transition-colors">{subItem.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex-1 pl-6 group/col-right">
                                  <h4 className="text-xs font-bold text-zinc-500 group-hover/col-right:text-white transition-colors duration-300 mb-5">{t('aboutDropdown.others')}</h4>
                                  <div className="flex flex-col space-y-4">
                                    {[
                                      { name: t('aboutDropdown.life'), href: "/cuoc-song" },
                                      { name: t('aboutDropdown.faq'), href: "/faq" },
                                    ].map((subItem) => (
                                      <Link key={subItem.name} href={subItem.href} className="group/link flex items-center gap-3">
                                        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-primary group-hover/link:bg-primary/20 transition-colors shrink-0" />
                                        <span className="text-sm font-semibold text-white group-hover/link:text-primary transition-colors">{subItem.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Bottom Section */}
                              <Link href="/su-nghiep" className="group/career relative px-6 py-5 overflow-hidden flex items-center justify-between">
                                <div className="absolute inset-0 bg-linear-to-r from-indigo-900 via-purple-700 to-pink-600 opacity-90 transition-opacity group-hover/career:opacity-100" />
                                <div className="relative z-10 flex items-center gap-4">
                                  <Briefcase className="w-7 h-7 text-white stroke-[1.5]" />
                                  <div className="flex flex-col">
                                    <h4 className="text-[15px] font-bold text-white mb-0.5">{t('career.title')}</h4>
                                    <p className="text-xs font-medium text-white/70">{t('career.desc')}</p>
                                  </div>
                                </div>
                                <ArrowRight className="relative z-10 w-4 h-4 text-white/50 group-hover/career:text-white group-hover/career:translate-x-1 transition-all" />
                              </Link>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Auth Buttons Right */}
            <div
              className="hidden lg:flex items-center justify-end gap-3"
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className="relative group/lang font-sans"
                onMouseEnter={() => setHoveredItem('lang')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 shadow-sm",
                    hoveredItem === 'lang' ? "bg-white/10 border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "bg-white/5 border border-white/10 text-zinc-300"
                  )}
                >
                  <Globe className={cn("w-4 h-4 transition-transform duration-500", hoveredItem === 'lang' && "rotate-180")} />
                  <span className="text-sm font-bold min-w-[20px] text-center">
                    {locale.toUpperCase()}
                  </span>
                </button>

                <AnimatePresence>
                  {hoveredItem === 'lang' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-3 w-40"
                    >
                      <div className="rounded-2xl border border-white/10 bg-[#1a1c23]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col p-2 space-y-1">
                        {[
                          { code: 'vi', label: t('languages.vi') },
                          { code: 'en', label: t('languages.en') }
                        ].map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLocale(lang.code);
                              setHoveredItem(null);
                            }}
                            className={cn(
                              "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                              locale === lang.code
                                ? "bg-primary/20 text-primary"
                                : "text-zinc-300 hover:bg-white/10 hover:text-white"
                            )}
                          >
                            {lang.label}
                            {locale === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/signin"
                className="outline-none rounded-full"
              >
                <Button variant="secondary" className="px-5 py-2 text-sm">
                  {t('buttons.hire')}
                </Button>
              </Link>
              <Button
                variant="primary"
                className="px-6 py-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all rounded-full bg-primary hover:bg-primary/80"
              >
                {t('buttons.contact')}
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden">
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
              className="lg:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-[#0d1117]/95 backdrop-blur-2xl shadow-2xl border border-white/10 flex flex-col rounded-3xl pointer-events-auto"
            >
              <div className="flex flex-col px-6 py-8">
                <nav className="flex flex-col space-y-4 mb-8">
                  {['home', 'services', 'successStories', 'portfolio', 'aboutUs', 'news'].map((key, i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={key === "home" ? "/" : (key === 'aboutUs' ? '/tong-quan' : (key === 'successStories' ? '/success' : `/${key.toLowerCase()}`))}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-2xl font-black tracking-tight text-white hover:text-primary transition-all"
                      >
                        {t(`nav.${key}`)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <Button variant="secondary" className="w-full py-4 text-base">
                    {t('buttons.hire')}
                  </Button>
                  <Button variant="primary" className="w-full py-4 text-base shadow-primary/30">
                    {t('buttons.contact')}
                  </Button>
                  <div className="flex flex-col gap-3 mt-2 pt-5 border-t border-white/10">
                    <div className="flex items-center gap-2 pl-2">
                      <Globe className="w-4 h-4 text-zinc-500" />
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t('selectLanguage')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { code: 'vi', label: t('languages.vi') },
                        { code: 'en', label: t('languages.en') }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLocale(lang.code);
                            setIsMobileMenuOpen(false);
                          }}
                          className={cn(
                            "flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold border transition-all duration-300 active:scale-95",
                            locale === lang.code
                              ? "bg-primary/20 border-primary/50 text-white shadow-[0_0_15px_rgba(236,72,153,0.15)]"
                              : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                          )}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
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
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
