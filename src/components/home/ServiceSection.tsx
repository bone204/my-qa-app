"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Lock body scroll and notify AppBar when modal is open
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

  // Animation variants
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
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // Custom ease-out expo 
      }
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
        >
          <h2 className="section-title">
            Capabilities that scale
          </h2>
          <p className="mt-6 section-desc mx-auto">
            We offer a comprehensive suite of digital services designed to help your business thrive in the modern technological landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
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
