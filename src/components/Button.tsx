import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
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

    return (
        <button
            className={`group relative overflow-hidden rounded-full bg-[#d7265a] px-5 py-2 text-base font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#b01c48] hover:shadow-md hover:ring-2 hover:ring-[#d7265a]/50 hover:ring-offset-2 active:scale-95 ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 flex h-full w-full scale-0 items-center justify-center rounded-full bg-white/20 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
        </button>
    );
}
