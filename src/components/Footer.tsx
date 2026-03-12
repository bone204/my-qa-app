import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className="relative bg-[#060606] text-gray-400 overflow-hidden text-sm select-none border-t border-white/5 mt-auto">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Decorative Top Line with Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-80" />

            <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

                    {/* Company Info */}
                    <div className="lg:w-1/3 xl:w-2/5 space-y-8">
                        <Link href="/" className="inline-block transition-transform duration-500 hover:scale-105 group">
                            <div className="relative">
                                {/* Logo Glow */}
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="/images/logo-transparent.svg"
                                    alt="QKIT Logo"
                                    width={140}
                                    height={45}
                                    className="relative opacity-90 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="footer-desc text-zinc-400 leading-relaxed font-medium">
                             {t('description')}
                        </p>
                        <div className="flex space-x-4 pt-4">
                            {[
                                { name: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                                { name: "Twitter", path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                                { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
                            ].map((social) => (
                                <a key={social.name} href="#" className="group relative flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(215,38,90,0.2)] hover:-translate-y-1">
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="h-5 w-5 fill-current text-zinc-500 transition-colors duration-300 group-hover:text-primary" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Sections */}
                    <div className="lg:w-2/3 xl:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
                        <div className="space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t('navigationTitle')}</h3>
                            <ul className="space-y-5">
                                {[0, 1, 2, 3, 4].map((idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-zinc-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block font-medium">
                                            {t(`navigationLinks.${idx}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t('legalTitle')}</h3>
                            <ul className="space-y-5">
                                {[0, 1, 2, 3].map((idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-zinc-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block font-medium">
                                            {t(`legalLinks.${idx}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{t('contactTitle')}</h3>
                            <ul className="space-y-6">
                                <li className="group flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                        <svg className="h-4.5 w-4.5 text-zinc-500 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">{t('office')}</span>
                                        <span className="text-zinc-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                            {t.rich('officeAddress', {
                                                br: () => <br />
                                            })}
                                        </span>
                                    </div>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                        <svg className="h-4.5 w-4.5 text-zinc-500 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">{t('supportEmail')}</span>
                                        <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">contact@qkit.vn</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 pb-4 md:flex-row">
                    <p className="text-xs text-zinc-500 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} QKIT Technology. {t('allRightsReserved')}
                    </p>
                    <div className="mt-4 flex gap-8 md:mt-0 items-center">
                        <span className="text-xs text-zinc-500 font-medium tracking-wide">{t('designedBy')} <span className="text-primary font-bold">QKIT</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
