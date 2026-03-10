"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ServiceModal } from "./ServiceModal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { services } from "./ServiceData";
import { ServiceCard } from "./ServiceCard";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ServiceSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Directional scroll logic
  const containerRef = useRef<HTMLOptionElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      
      // If entering view while scrolling down, trigger animation
      if (isInView && isScrollingDown && !hasAnimated) {
        setHasAnimated(true);
      }
      
      // Reset when scrolling far above the section
      if (currentScrollY < (containerRef.current?.offsetTop || 0) - 800) {
        setHasAnimated(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, hasAnimated]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("modal-toggle", { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("modal-toggle", { detail: { isOpen: false } }));
    }
  }, [selectedId]);

  const selectedService = services.find((s) => s.id === selectedId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
        >
          <h2 className="section-title select-none">
            Capabilities that scale
          </h2>
          <p className="mt-6 section-desc mx-auto select-none">
            We offer a comprehensive suite of digital services designed to help your business thrive in the modern technological landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 items-start"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isSelected={selectedId === service.id}
              onClick={() => setSelectedId(service.id)}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>

      <ServiceModal 
        service={selectedService || null} 
        onClose={() => setSelectedId(null)} 
      />
    </section>
  );
}
