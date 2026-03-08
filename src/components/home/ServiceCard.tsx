import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ServiceData } from "./ServiceData";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceCardProps {
  service: ServiceData;
  isSelected: boolean;
  onClick: () => void;
  variants?: any;
}

export function ServiceCard({ service, isSelected, onClick, variants }: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ 
        y: -25, 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-4xl bg-white border border-zinc-200 p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-colors duration-200",
        isSelected ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{ borderRadius: 32 }}
    >
      <div className="absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5 mix-blend-overlay" />
      
      <div 
        className={cn(
          "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg bg-linear-to-br",
          service.gradient
        )}
      >
        <service.icon className="h-6 w-6" />
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-foreground">
        {service.title}
      </h3>
      
      <p className="mb-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        {service.subtitle}
      </p>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {service.description}
      </p>
      
      <div className="flex items-center text-sm font-semibold text-primary dark:text-primary/80 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:mt-6 group-hover:max-h-20 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
        Explore service <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </motion.div>
  );
}
