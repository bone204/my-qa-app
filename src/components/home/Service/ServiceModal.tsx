"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ServiceData } from "./ServiceData";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-rose-950/20 backdrop-blur-md"
            style={{ pointerEvents: 'auto' }}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
            <motion.div
              layoutId={`card-${service.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="pointer-events-auto relative w-full hide-scrollbar max-w-2xl max-h-[85vh] overflow-hidden bg-[#0d1117] shadow-[0_0_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex flex-col"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: 40 }}
            >
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-sm ring-1 ring-white/20 backdrop-blur-md transition-colors hover:bg-primary"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </motion.button>

              <div className="p-6 sm:p-10 overflow-y-auto w-full h-full custom-scrollbar">
                <div className="flex items-start justify-between mb-8">
                  <div 
                    className={cn(
                      "inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl text-white shadow-xl shrink-0 bg-linear-to-br",
                      service.gradient
                    )}
                  >
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                </div>
                
                <h3 className="modal-title mb-3 select-none">
                  {service.title}
                </h3>
                
                <p className="modal-subtitle mb-5 select-none">
                  {service.subtitle}
                </p>
                
                <p className="modal-desc mb-8 select-none">
                  {service.description}
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="rounded-3xl bg-white/5 p-6 sm:p-8 ring-1 ring-white/10">
                    <span className="modal-section-label select-none">Core Capabilities</span>
                    <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center modal-feature-text select-none">
                          <CheckCircle2 className="mr-4 h-5 w-5 shrink-0 text-primary" />
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
  );
}
