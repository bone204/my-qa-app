"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { expertiseData, type ExpertiseItem } from "./ExpertiseData";
import { ExpertiseBall } from "./ExpertiseBall";

export default function ExpertiseSection() {
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
          <span className="section-subtitle select-none">What we do best</span>
          <h2 className="section-title mt-4 select-none">
            Our Specialist <span className="text-primary select-none">Expertise</span>
          </h2>
          <p className="section-desc mx-auto mt-6 select-none">
            We master deep-tech domains to provide you with high-performance, future-proof solutions.
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="container mx-auto px-4 z-10"
      >
        {/* Aligned Row Layout */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-28 max-w-6xl mx-auto">
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
                    {item.title}
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
                "fixed inset-0 z-60 bg-gray-900/40 backdrop-blur-lg",
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
                className="pointer-events-auto relative w-full max-w-4xl max-h-[85vh] md:max-h-none bg-white rounded-4xl sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row transition-shadow duration-300"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Unified Close Button (Same as ServiceModal) */}
                <motion.button
                  onClick={() => setSelectedId(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-primary hover:text-white pointer-events-auto"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Left Side: Visual Ball */}
                <div className={cn(
                  "relative w-full md:w-5/12 flex items-center justify-center py-6 px-12 sm:p-12 bg-linear-to-br shrink-0",
                  selectedItem.gradient
                )}>
                  <motion.div
                    layoutId={`ball-sphere-${selectedItem.id}`}
                    className="w-32 h-32 sm:w-64 sm:h-64 rounded-full glass-morphism flex items-center justify-center shadow-2xl relative"
                  >
                    <motion.div layoutId={`ball-icon-${selectedItem.id}`}>
                      <selectedItem.icon className="w-16 h-16 sm:w-32 sm:h-32 text-white" />
                    </motion.div>
                    {/* Floating mini elements */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full backdrop-blur-md border border-white/30" />
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full backdrop-blur-md border border-white/20" />
                  </motion.div>
                </div>

                {/* Right Side: Content */}
                <motion.div
                  layout
                  className="w-full md:w-7/12 pt-10 pb-12 px-8 sm:p-14 relative select-none flex flex-col justify-start md:justify-center overflow-y-auto custom-scrollbar flex-1"
                >
                  <motion.h3
                    layoutId={`title-${selectedItem.id}`}
                    className="modal-title mb-3"
                  >
                    {selectedItem.title}
                  </motion.h3>

                  <motion.p
                    layout
                    className="modal-desc mb-8"
                  >
                    {selectedItem.description}
                  </motion.p>

                  <motion.div layout className="space-y-10">
                    {selectedItem.details.map((group, idx) => (
                      <motion.div layout key={idx} className="space-y-5">
                        <span className="modal-section-label mb-4!">
                          {group.label}
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {group.skills.map((skill, sIdx) => (
                            <motion.span
                              layout
                              key={sIdx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + sIdx * 0.05 }}
                              className="px-5 py-2.5 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 text-sm font-semibold hover:border-primary/30 hover:bg-primary/5 transition-colors"
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

