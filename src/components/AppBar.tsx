import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";

export default function AppBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-transparent px-4 py-4 md:px-8">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                {/* Logo Left */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={IMAGES.logo} alt="Logo" width={150} height={150} />
                    </Link>
                </div>

                {/* Center Nav */}
                <nav className="flex items-center gap-12 bg-transparent px-10 py-4">
                    <Link
                        href="/"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/about"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        href="/services"
                        className="group relative text-base font-bold text-gray-700 transition-colors hover:text-black"
                    >
                        Services
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Auth Buttons Right */}
                <div className="flex items-center justify-end gap-4">
                    <button className="rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-bold text-black shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-95">
                        Sign In
                    </button>
                    <button className="group relative overflow-hidden rounded-full bg-black px-5 py-2 text-base font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-md hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 active:scale-95">
                        <span className="relative z-10">Sign Up</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 opacity-0 group-hover:scale-100 group-hover:opacity-100"></div>
                    </button>
                </div>
            </div>
        </header>
    );
}
