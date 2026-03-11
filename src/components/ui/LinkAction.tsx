import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LinkActionProps {
  label?: string;
  className?: string;
}

export function LinkAction({ label = "Discover more", className }: LinkActionProps) {
  return (
    <div className={cn(
      "flex items-center text-sm font-semibold text-primary dark:text-primary/80 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0",
      className
    )}>
      {label} <ArrowRight className="ml-2 h-4 w-4" />
    </div>
  );
}
