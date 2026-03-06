"use client";

import React from 'react';

export default function AboutSection() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center bg-[var(--background)] py-24">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 h-full w-1/2 bg-[var(--primary)]/5 pointer-events-none" />

            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm font-bold text-[#d7265a] uppercase tracking-widest">Our Mission</span>
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1]">
                                We Build <span className="text-[#d7265a]">Digital</span> Masterpieces.
                            </h2>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Specializing in high-performance software and luxury logistics platforms.
                            We combine aesthetic excellence with technical precision to deliver
                            extraordinary results for our global partners.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <button className="rounded-2xl bg-[#d7265a] px-10 py-5 font-bold text-white shadow-[0_20px_40px_rgba(215,38,90,0.2)] hover:scale-105 transition-all">
                                Discover More
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Video Container */}
                    <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-right duration-700 delay-200">
                        <div className="relative group">
                            {/* Decorative element behind video */}
                            <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-[#d7265a]/10 to-transparent blur-xl pointer-events-none" />

                            {/* Main Video Wrapper */}
                            <div className="relative aspect-video w-full rounded-[3rem] overflow-hidden bg-white p-3 shadow-2xl ring-1 ring-black/5">
                                <div className="h-full w-full rounded-[2.2rem] overflow-hidden bg-gray-100">
                                    <video
                                        className="h-full w-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34462-large.mp4" type="video/mp4" />
                                    </video>

                                    {/* Play Overlay purely for aesthetics */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity opacity-0 group-hover:opacity-100">
                                        <div className="h-20 w-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#d7265a] shadow-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="ml-1 h-10 w-10">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
