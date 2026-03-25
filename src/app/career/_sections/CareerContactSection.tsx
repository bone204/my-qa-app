"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Smartphone, Briefcase, MessageSquare, Upload, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { Particles } from '@/components/ui/Particles';
import { useTranslations } from 'next-intl';

const POSITIONS = [0, 1, 2, 3, 4, 5, 6, 7];

export default function CareerContactSection() {
    const t = useTranslations('Career.contact');
    const tp = useTranslations('Career.positions');
    const [fileName, setFileName] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '0',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section id="apply-now" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#060606] select-none">
            {/* Background Decorative Elements matching ContactSection */}
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="section-subtitle">{t('subtitle')}</span>
                    </motion.div>
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
                    className="max-w-4xl mx-auto"
                >
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

                                {/* Row 3: Position Applied For */}
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
                                        {POSITIONS.map((p) => (
                                            <option key={p} value={p}>{tp(p.toString())}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Row 4: CV Upload Area */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                                        <FileText size={14} className="text-primary" /> {t('form.cv')}
                                    </label>
                                    <div className="relative group/file">
                                        <input
                                            type="file"
                                            id="cv-upload"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <div className="w-full border-2 border-dashed border-white/10 group-hover/file:border-primary/50 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 bg-white/5 transition-all">
                                            {fileName ? (
                                                <>
                                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center scale-110 transition-transform">
                                                        <CheckCircle2 className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <p className="text-white font-bold">{fileName}</p>
                                                    <p className="text-zinc-500 text-xs uppercase tracking-widest">File and ready to upload</p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover/file:bg-primary/10 transition-colors">
                                                        <Upload className="w-8 h-8 text-zinc-500 group-hover/file:text-primary transition-colors" />
                                                    </div>
                                                    <p className="text-zinc-400 font-medium text-center">
                                                        {t('form.cvPlaceholder')}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 5: Message */}
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
                                    type="button"
                                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(215,38,90,0.3)] hover:shadow-[0_15px_40px_rgba(215,38,90,0.5)] transition-all group"
                                >
                                    {t('form.submit')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
