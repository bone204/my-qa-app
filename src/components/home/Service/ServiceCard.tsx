import { motion } from "framer-motion";
import { LinkAction } from "../../LinkAction";
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
      
      <h3 className="card-title mb-2 select-none">
        {service.title}
      </h3>
      
      <p className="card-subtitle mb-4 select-none">
        {service.subtitle}
      </p>
      
      <p className="card-desc line-clamp-3 select-none">
        {service.description}
      </p>
      
      <LinkAction className="group-hover:mt-6 select-none" />
    </motion.div>
  );
}
