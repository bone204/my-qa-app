"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import ProjectCard from "../_components/ProjectCard";

export default function SuccessContent() {
    const t = useTranslations("SuccessPage");
    const projectKeys = ["1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <section className="pb-32 relative select-none">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Project List */}
                    <div className="lg:col-span-12 xl:col-span-8 space-y-12">
                        <div className="grid grid-cols-1 gap-12">
                            {projectKeys.map((key, index) => (
                                <ProjectCard key={key} index={index} projectKey={key} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar Area */}
                    <div className="lg:hidden xl:block xl:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            {/* Form design as requested */}
                            <div className="relative rounded-[2.5rem] bg-zinc-900/60 backdrop-blur-xl p-1 border border-white/10 overflow-hidden shadow-2xl">
                                <div className="p-8 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                                        {t('sidebar.question')}
                                    </h3>

                                    {/* Gradient Box */}
                                    <div className="relative rounded-3xl bg-linear-to-br from-[#ec4899] to-[#f43f5e] p-6 mb-0 pb-20 overflow-hidden shadow-lg shadow-pink-500/20">
                                        <div className="relative z-10">
                                            <p className="text-white/90 text-xs font-bold uppercase tracking-widest mb-2">
                                                {t('sidebar.badge')}
                                            </p>
                                            <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                                {t('sidebar.highlight')}
                                            </h4>
                                        </div>
                                        {/* Decorative circle */}
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                                    </div>

                                    {/* Form Box (Overlapping) */}
                                    <div className="relative -mt-16 bg-zinc-900 rounded-4xl p-6 shadow-2xl border border-white/10 flex flex-col space-y-4">
                                        <h5 className="text-[#ec4899] font-bold text-lg uppercase tracking-tight">
                                            {t('sidebar.title')}
                                        </h5>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder={t('sidebar.emailPlaceholder')}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-[#ec4899]/50 transition-all text-sm placeholder:text-zinc-500"
                                            />
                                        </div>

                                        <Button variant="primary" className="w-full justify-center bg-linear-to-r from-[#ec4899] to-[#f43f5e] hover:brightness-110 border-none py-4 text-sm font-bold shadow-lg shadow-pink-500/30 text-white rounded-full transition-all active:scale-95">
                                            {t('sidebar.button')}
                                        </Button>

                                        <p className="text-[10px] text-zinc-500 text-center font-bold uppercase tracking-wider">
                                            {t('sidebar.notice')}
                                        </p>
                                    </div>

                                    {/* Features Checklist */}
                                    <div className="mt-10 space-y-5 px-2">
                                        {(t.raw('sidebar.features') as string[]).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-4 group/feat">
                                                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/feat:border-primary/50 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
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
