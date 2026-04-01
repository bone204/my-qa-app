import { motion } from "framer-motion";
import { LinkAction } from "../../ui/LinkAction";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ServiceData } from "./ServiceData";
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('ServiceSection.services');
  const tCommon = useTranslations('Common');
  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${t(`${service.id}.title`)} - ${tCommon('discoverMore')}`}
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-4xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-xl hover:shadow-primary/10 hover:border-primary/30 outline-hidden focus-visible:ring-2 focus-visible:ring-primary/50",
        isSelected ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{ 
        borderRadius: 32,
        transitionProperty: 'border-color, box-shadow, background-color',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
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
        {t(`${service.id}.title`)}
      </h3>
      
      <p className="card-subtitle mb-4 select-none">
        {t(`${service.id}.subtitle`)}
      </p>
      
      <p className="card-desc line-clamp-3 select-none">
        {t(`${service.id}.description`)}
      </p>
      
      <LinkAction 
        label={tCommon('discoverMore')} 
        className="mt-6 select-none" 
      />
    </motion.div>
  );
}
