"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Globe, MapPin, Building2, Briefcase, MessageSquare, User, Smartphone, Layout, MessageCircle } from 'lucide-react';
import axios from 'axios';
import { Particles } from '@/components/ui/Particles';
import { useTranslations } from 'next-intl';

const SkypeIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M22.052 16.591a11.954 11.954 0 10-14.643-14.643 6.002 6.002 0 105.881 5.881 5.925 5.925 0 00.126.331 6 6 0 108.307 8.307c.108.04.22.083.33.124z" />
    </svg>
);

const CONTACT_PLATFORMS = [
    "Skype", "Telegram", "WhatsApp", "Zalo", "Phone Call", "Email", "Other"
];

const POSITIONS = [
    "CEO / Founder", "Chủ tịch / Giám đốc", "Quản lý / Trưởng phòng", "Nhân viên / Chuyên viên", "Sinh viên / Thực tập sinh", "Khác"
];

const INDUSTRIES = [
    "Công nghệ thông tin / Phần mềm", "Thương mại điện tử", "Logistics / Vận tải", "Tài chính / Ngân hàng", "Y tế / Chăm sóc sức khỏe", "Giáo dục", "Sản xuất", "Khác"
];

export default function ContactSection() {
    const t = useTranslations('ContactSection');
    const [countries, setCountries] = useState<string[]>([]);
    const [isLoadingCountries, setIsLoadingCountries] = useState(true);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: 'Vietnam',
        email: '',
        phone: '',
        position: 'CEO / Founder',
        industry: 'Công nghệ thông tin / Phần mềm',
        platform: 'Skype',
        message: ''
    });

    useEffect(() => {
        // Specify exactly what we need: ?fields=name
        axios.get('https://restcountries.com/v3.1/all?fields=name')
            .then(response => {
                const countryNames = response.data.map((c: any) => c.name.common).sort();
                setCountries(countryNames);
                // Optionally update default to first loaded country if Vietnam is not exact
                if (countryNames.length > 0 && !countryNames.includes('Vietnam')) {
                    const vnMatch = countryNames.find((name: string) => name.includes('Viet'));
                    setFormData(prev => ({ ...prev, country: vnMatch || countryNames[0] }));
                }
                setIsLoadingCountries(false);
            })
            .catch(error => {
                console.error('Error fetching the country data:', error);
                setCountries(["Vietnam", "United States", "Singapore", "Japan", "Korea", "China", "Germany", "France", "United Kingdom", "Australia", "Canada", "Other"]);
                setIsLoadingCountries(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#060606] select-none">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Particles
                    particleColors={["#ffffff", "#ab91ff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        {t('subtitle')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-desc mx-auto font-medium"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-1 gap-12"
                >
                    {/* Form Container */}
                    <div className="relative group">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-px bg-linear-to-r from-primary/30 via-white/10 to-primary/30 rounded-3xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative bg-zinc-950/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
                            <form className="space-y-8">
                                {/* Row 1: First Name & Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <User size={14} className="text-primary" /> {t('form.lastName')}
                                        </label>
                                        <input
                                            type="text" name="firstName" placeholder={t('form.lastNamePlaceholder')}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <User size={14} className="text-primary" /> {t('form.firstName')}
                                        </label>
                                        <input
                                            type="text" name="lastName" placeholder={t('form.firstNamePlaceholder')}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <Mail size={14} className="text-primary" /> {t('form.email')}
                                        </label>
                                        <input
                                            type="email" name="email" placeholder={t('form.emailPlaceholder')}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <Smartphone size={14} className="text-primary" /> {t('form.phone')}
                                        </label>
                                        <input
                                            type="tel" name="phone" placeholder={t('form.phonePlaceholder')}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Position & Industry */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <Briefcase size={14} className="text-primary" /> {t('form.position')}
                                        </label>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                            onChange={handleChange}
                                        >
                                            {POSITIONS.map((p, idx) => <option key={p} value={p}>{t(`positions.${idx}`)}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <Layout size={14} className="text-primary" /> {t('form.industry')}
                                        </label>
                                        <select
                                            name="industry"
                                            value={formData.industry}
                                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                            onChange={handleChange}
                                        >
                                            {INDUSTRIES.map((i, idx) => <option key={i} value={i}>{t(`industries.${idx}`)}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Contact Platform & Country */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <MessageSquare size={14} className="text-primary" /> {t('form.platform')}
                                        </label>
                                        <select
                                            name="platform"
                                            value={formData.platform}
                                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                            onChange={handleChange}
                                        >
                                            {CONTACT_PLATFORMS.map((p, idx) => <option key={p} value={p}>{t(`platforms.${idx}`)}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                            <Globe size={14} className="text-primary" /> {t('form.country')}
                                        </label>
                                        <select
                                            name="country"
                                            disabled={isLoadingCountries}
                                            value={formData.country}
                                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer disabled:opacity-50"
                                            onChange={handleChange}
                                        >
                                            {isLoadingCountries ? (
                                                <option>{t('form.loadingCountries')}</option>
                                            ) : (
                                                countries.map(c => <option key={c} value={c}>{c}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 6: Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                        <MessageSquare size={14} className="text-primary" /> {t('form.message')}
                                    </label>
                                    <textarea
                                        name="message" rows={4} placeholder={t('form.messagePlaceholder')}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600 resize-none"
                                        onChange={handleChange}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(215,38,90,0.3)] hover:shadow-[0_15px_40px_rgba(215,38,90,0.5)] transition-all group"
                                >
                                    {t('form.submit')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Direct Contact Channels Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 py-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                            <SkypeIcon size={20} className="text-zinc-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('channels.Skype')}</p>
                            <p className="text-sm font-semibold text-white">live:.cid.qkit_tech</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                            <Mail size={20} className="text-zinc-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('channels.Email')}</p>
                            <p className="text-sm font-semibold text-white">contact@qkit.vn</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                            <Phone size={20} className="text-zinc-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('channels.Hotline')}</p>
                            <p className="text-sm font-semibold text-white">+84 (0) 123 456 789</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
