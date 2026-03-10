import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "body";
    children: ReactNode;
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    if (variant === "secondary") {
        return (
            <button
                className={`rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-bold text-black shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-95 ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }

    if (variant === "body") {
        return (
            <button
                className={cn(
                    "group relative w-auto cursor-pointer overflow-hidden rounded-full text-center font-bold transition-all duration-300 py-4 px-10 md:py-5 md:px-12",
                    "border border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]", // Mobile & Tablet default
                    "lg:border-pink-500/20 lg:bg-background lg:shadow-none lg:hover:border-pink-500/50 lg:hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]", // Desktop overrides
                    className
                )}
                {...props}
            >
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-pink-500 h-2 w-2 rounded-full transition-all duration-500 scale-[160.8] lg:scale-1 lg:group-hover:scale-[160.8]"></div>
                    <span className="inline-block transition-all duration-500 opacity-0 translate-x-12 lg:opacity-100 lg:translate-x-0 lg:group-hover:translate-x-12 lg:group-hover:opacity-0 text-pink-500 text-base md:text-lg whitespace-nowrap">
                        {children}
                    </span>
                </div>
                <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-3 transition-all duration-500 opacity-100 translate-x-0 lg:opacity-0 lg:translate-x-12 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                    <span className="text-base md:text-lg font-bold text-white whitespace-nowrap">{children}</span>
                    <ArrowRight className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
            </button>
        );
    }

    return (
        <button
            className={cn(
                "group relative overflow-hidden rounded-full bg-primary px-5 py-2 text-base font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/80 hover:shadow-md hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 active:scale-95",
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 flex h-full w-full scale-0 items-center justify-center rounded-full bg-white/20 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
        </button>
    );
}
