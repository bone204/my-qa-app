"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { expertiseData, type ExpertiseItem } from "./ExpertiseData";
import { ExpertiseBall } from "./ExpertiseBall";
import { useTranslations } from 'next-intl';

export default function ExpertiseSection() {
  const t = useTranslations('ExpertiseSection');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Directional scroll logic (matching ServiceSection)
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Existing "scrolling-past" check for ball triggers
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);

      // 2. Directional scroll logic for title animation
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isInView && isScrollingDown && !hasAnimated) {
        setHasAnimated(true);
      }

      // Reset when scrolling far above the section
      if (currentScrollY < (sectionRef.current?.offsetTop || 0) - 800) {
        setHasAnimated(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isInView, hasAnimated]);

  const selectedItem = expertiseData.find((item) => item.id === selectedId);

  // Automatically close modal if the user scrolls the background page while it is open.
  useEffect(() => {
    if (!selectedId) return;

    const handleScrollClose = () => {
      setSelectedId(null);
    };

    // Use a small delay before attaching the listener to prevent the initial click 
    // from triggering a scroll event (e.g. if the click causes a layout shift)
    const timeout = setTimeout(() => {
      // Only listen to window scroll, which doesn't trigger when scrolling inside the modal's internal div.
      window.addEventListener('scroll', handleScrollClose, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [selectedId]);

  const handleMouseEnter = (id: string | null) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Ignore hover if the user is actively scrolling to prevent accidental popups
    if (isScrollingRef.current && id !== null) return;

    if (id === null) return;

    // Intent-based logic:
    // 1. If nothing is selected, wait 150ms to confirm "intent" (avoids fast pass-through)
    // 2. If something is already open, use 60ms for snappy switching
    const delay = selectedId ? 60 : 150;

    timeoutRef.current = setTimeout(() => {
      setSelectedId(id);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Add a small grace period before closing to allow moving to the modal
    timeoutRef.current = setTimeout(() => {
      setSelectedId(null);
    }, 80);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full pb-24 md:pb-48 bg-background overflow-hidden flex flex-col items-center justify-start"
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/2 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 z-10 relative mb-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <span className="section-subtitle select-none">{t('subtitle')}</span>
          <h2 className="section-title mt-4 select-none">
            {t.rich('title', {
                highlight: (chunks) => <span className="text-primary select-none">{chunks}</span>
            })}
          </h2>
          <p className="section-desc mx-auto mt-6 select-none">
            {t('description')}
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="container mx-auto px-4 z-10"
      >
        {/* Aligned Row Layout */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-28 max-w-7xl mx-auto">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              className="relative"
            >
              <div className="flex flex-col items-center gap-10 group/ball-unit">
                <ExpertiseBall
                  item={item}
                  sizeMultiplier={1.2}
                  onClick={() => setSelectedId(item.id)}
                  isExpanded={selectedId === item.id}
                />
                {selectedId !== item.id && (
                  <motion.span
                    layoutId={`title-label-${item.id}`}
                    className="expertise-ball-label"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * expertiseData.indexOf(item) }}
                  >
                    {t(`items.${item.id}.title`)}
                  </motion.span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expanded Detail View */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className={cn(
                "fixed inset-0 z-60 bg-gray-900/40",
                !selectedId && "pointer-events-none"
              )}
              transition={{ duration: 0.2 }}
            />
            <div className="fixed inset-0 z-70 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={handleMouseLeave}
                className="pointer-events-auto relative w-full max-w-4xl max-h-[85vh] md:max-h-none bg-[#0a0a0a] border border-white/10 rounded-4xl sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row transition-shadow duration-300"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Unified Close Button (Same as ServiceModal) */}
                <motion.button
                  onClick={() => setSelectedId(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 transition-colors hover:bg-primary hover:text-white pointer-events-auto"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Left Side: Visual Ball */}
                <div className={cn(
                  "relative w-full md:w-5/12 flex items-center justify-center py-6 px-12 sm:p-12 shrink-0 overflow-hidden",
                  selectedItem.gradient.replace('from-', 'from-').replace('to-', 'to-') // Ensure high contrast
                )}>
                  {/* Decorative mesh background for the left side */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />

                  <motion.div
                    layoutId={`ball-sphere-${selectedItem.id}`}
                    className="w-32 h-32 sm:w-64 sm:h-64 rounded-full border border-white/30 flex items-center justify-center shadow-2xl relative tech-ball-shadow"
                    style={{ '--glow-color': selectedItem.color } as any}
                  >
                    {/* Matching gradient background from ExpertiseBall.tsx */}
                    <div className={cn(
                      "absolute inset-0 opacity-90 bg-linear-to-br rounded-full",
                      selectedItem.gradient
                    )} />

                    <motion.div layoutId={`ball-icon-${selectedItem.id}`} className="relative z-10">
                      <selectedItem.icon className="w-16 h-16 sm:w-32 sm:h-32 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    </motion.div>

                    {/* Glassy reflections */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none rounded-full" />

                    {/* Floating mini elements */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full border border-white/30 z-20" />
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full border border-white/20 z-20" />
                  </motion.div>
                </div>

                {/* Right Side: Content */}
                <motion.div
                  layout
                  className="w-full md:w-7/12 pt-10 pb-12 px-8 sm:p-14 relative select-none flex flex-col justify-start md:justify-center overflow-y-auto custom-scrollbar flex-1 bg-linear-to-b from-[#0d1117] to-[#0a0a0a]"
                >
                  <motion.h3
                    layoutId={`title-${selectedItem.id}`}
                    className="modal-title mb-3 text-white"
                  >
                    {t(`items.${selectedItem.id}.title`)}
                  </motion.h3>

                  <motion.p
                    layout
                    className="modal-desc mb-8 text-zinc-400"
                  >
                    {t(`items.${selectedItem.id}.description`)}
                  </motion.p>

                  <motion.div layout className="space-y-10">
                    {selectedItem.details.map((group, idx) => (
                      <motion.div layout key={idx} className="space-y-5">
                        <span className="modal-section-label mb-4! text-zinc-500 font-bold border-l-2 border-primary pl-4">
                          {t(`items.${selectedItem.id}.details.${idx}.label`)}
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {group.skills.map((skill, sIdx) => (
                            <motion.span
                              layout
                              key={sIdx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + sIdx * 0.05 }}
                              className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-semibold hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

// Re-using cn helper locally if needed, but ExpertiseBall should handle it.
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

