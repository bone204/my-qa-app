"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
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
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
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

      <AnimatePresence>
        {selectedId && selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-md"
              style={{ pointerEvents: 'auto' }}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedService.id}`}
                className="pointer-events-auto relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 flex flex-col"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ borderRadius: 32 }}
              >
                <div className="p-8 sm:p-12 overflow-y-auto w-full h-full custom-scrollbar">
                  <div className="flex items-start justify-between mb-8">
                    <div 
                      className={cn(
                        "inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl text-white shadow-xl shrink-0",
                        selectedService.gradient
                      )}
                    >
                      <selectedService.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {selectedService.title}
                  </h3>
                  
                  <p className="mb-6 text-base sm:text-lg font-medium text-zinc-500 dark:text-zinc-400">
                    {selectedService.subtitle}
                  </p>
                  
                  <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                    {selectedService.description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <div className="rounded-[1.5rem] bg-zinc-50/50 dark:bg-zinc-800/30 p-6 sm:p-8 ring-1 ring-inset ring-zinc-100/50 dark:ring-zinc-800/50">
                      <h4 className="mb-4 font-semibold tracking-wide text-foreground uppercase text-xs opacity-50">Core Capabilities</h4>
                      <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                        {selectedService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
