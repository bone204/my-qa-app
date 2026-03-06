import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] text-gray-400 overflow-hidden text-sm">
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-60"></div>

            <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:py-12">
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-8">

                    {/* Company Info - Takes up more space on large screens */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <div className="relative">
                                <Image
                                    src={IMAGES.logo}
                                    alt="Company Logo"
                                    width={110}
                                    height={36}
                                    className="brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
                                />
                            </div>
                        </Link>
                        <p className="max-w-xs leading-relaxed">
                            Premium software solutions helping your business scale and thrive. Quality and innovation are our core.
                        </p>
                        <div className="flex space-x-4 pt-1">
                            <a href="#" className="transform rounded-full bg-white/5 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="transform rounded-full bg-white/5 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="transform rounded-full bg-white/5 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
                        {/* Navigation Links */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
                                Navigation
                            </h3>
                            <ul className="space-y-3">
                                <li><Link href="/" className="inline-block transition-colors hover:text-white">Home</Link></li>
                                <li><Link href="/about" className="inline-block transition-colors hover:text-white">About Us</Link></li>
                                <li><Link href="/services" className="inline-block transition-colors hover:text-white">Services</Link></li>
                                <li><Link href="/pricing" className="inline-block transition-colors hover:text-white">Pricing</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                <li><Link href="/privacy" className="inline-block transition-colors hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="inline-block transition-colors hover:text-white">Terms of Service</Link></li>
                                <li><Link href="/cookie" className="inline-block transition-colors hover:text-white">Cookie Policy</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-span-2 lg:col-span-1">
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
                                Contact
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="leading-tight">123 Business Avenue<br />New York, NY 10001</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="mr-3 h-4 w-4 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@company.com</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="mr-3 h-4 w-4 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
