"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Check, Loader2, Calendar, FileText, User, Tag, Clock, Hash, Layout, Eye, Edit3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { uploadImage } from '@/services/cloudinary';
import { addBlogPost } from '@/services/blog';
import { BlogCategory } from '@/services/blog/types';
import ErrorDialog from '@/components/common/ErrorDialog';
import Link from 'next/link';

const CATEGORIES: { value: BlogCategory; label: string }[] = [
    { value: 'Design', label: 'Design' },
    { value: 'Development', label: 'Development' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Business', label: 'Business' }
];

const TAG_OPTIONS = [
    { en: 'Trending', vi: 'Xu hướng' },
    { en: 'Popular', vi: 'Phổ biến' },
    { en: 'New', vi: 'Mới' },
    { en: 'Featured', vi: 'Nổi bật' },
];

export default function BlogAdminClient() {
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [mainPreview, setMainPreview] = useState<string | null>(null);
    const [authorImage, setAuthorImage] = useState<File | null>(null);
    const [authorPreview, setAuthorPreview] = useState<string | null>(null);
    
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [previewVi, setPreviewVi] = useState(false);
    const [previewEn, setPreviewEn] = useState(false);
    const [errorDetails, setErrorDetails] = useState<{ isOpen: boolean; message: string }>({
        isOpen: false,
        message: ''
    });

    const [formData, setFormData] = useState({
        titleEn: '',
        titleVi: '',
        excerptEn: '',
        excerptVi: '',
        contentEn: '',
        contentVi: '',
        category: 'Development' as BlogCategory,
        tagEn: '',
        tagVi: '',
        readTimeEn: '5 min read',
        readTimeVi: '5 phút đọc',
        authorName: '',
        date: new Date().toISOString().split('T')[0]
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'author') => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrorDetails({
                    isOpen: true,
                    message: "Dung lượng ảnh không được vượt quá 5MB."
                });
                return;
            }
            
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'main') {
                    setMainImage(file);
                    setMainPreview(reader.result as string);
                } else {
                    setAuthorImage(file);
                    setAuthorPreview(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mainImage || loading) {
            if (!mainImage) {
                setErrorDetails({ isOpen: true, message: "Vui lòng chọn ảnh bìa cho bài viết." });
            }
            return;
        }

        setLoading(true);
        setShowSuccess(false);

        try {
            // 1. Upload Images
            const imageUrl = await uploadImage(mainImage);
            let authorAvatarUrl = '';
            if (authorImage) {
                authorAvatarUrl = await uploadImage(authorImage);
            }

            // 2. Save to Firestore
            await addBlogPost({
                title: { en: formData.titleEn, vi: formData.titleVi },
                excerpt: { en: formData.excerptEn, vi: formData.excerptVi },
                content: { en: formData.contentEn, vi: formData.contentVi },
                category: formData.category,
                date: formData.date,
                readTime: { en: formData.readTimeEn, vi: formData.readTimeVi },
                tag: { en: formData.tagEn, vi: formData.tagVi },
                image: imageUrl,
                authorName: formData.authorName,
                authorAvatar: authorAvatarUrl
            });

            setShowSuccess(true);
            setMainImage(null);
            setMainPreview(null);
            setAuthorImage(null);
            setAuthorPreview(null);
            setFormData({
                titleEn: '',
                titleVi: '',
                excerptEn: '',
                excerptVi: '',
                contentEn: '',
                contentVi: '',
                category: 'Development',
                tagEn: '',
                tagVi: '',
                readTimeEn: '5 min read',
                readTimeVi: '5 phút đọc',
                authorName: '',
                date: new Date().toISOString().split('T')[0]
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error: any) {
            console.error("Upload error:", error);
            setErrorDetails({
                isOpen: true,
                message: error.message || "Đã xảy ra lỗi trong quá trình tải lên."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black py-24 px-4 overflow-x-hidden">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="bg-primary/20 p-3 rounded-2xl">
                            <FileText className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black text-white">Viết bài mới</h1>
                            <p className="text-zinc-500 text-sm">Quản lý nội dung bài viết đa ngôn ngữ và media</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Section: Media */}
                        <div className="space-y-8">
                            <h2 className="text-white font-bold flex items-center gap-2">
                                <Layout className="w-4 h-4 text-primary" />
                                Hình ảnh bài viết
                            </h2>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 group relative aspect-video rounded-2xl bg-zinc-900 border-2 border-dashed border-zinc-800 hover:border-primary/50 transition-all overflow-hidden cursor-pointer">
                                    {mainPreview ? (
                                        <>
                                            <img src={mainPreview} alt="Main" className="w-full h-full object-cover" />
                                            <button type="button" onClick={() => { setMainImage(null); setMainPreview(null); }} className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-red-500 transition-colors">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-zinc-800/50 transition-colors">
                                            <Upload className="text-zinc-500 w-8 h-8 mb-4 group-hover:text-primary transition-colors" />
                                            <span className="text-zinc-400 font-serif italic text-sm">Ảnh bìa bài viết (16:9)</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'main')} />
                                        </label>
                                    )}
                                </div>

                                <div className="group relative aspect-square rounded-2xl bg-zinc-900 border-2 border-dashed border-zinc-800 hover:border-primary/50 transition-all overflow-hidden cursor-pointer">
                                    {authorPreview ? (
                                        <>
                                            <img src={authorPreview} alt="Author" className="w-full h-full object-cover" />
                                            <button type="button" onClick={() => { setAuthorImage(null); setAuthorPreview(null); }} className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-red-500 transition-colors">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-zinc-800/50 transition-colors">
                                            <User className="text-zinc-500 w-8 h-8 mb-4 group-hover:text-primary transition-colors" />
                                            <span className="text-zinc-400 font-serif italic text-xs text-center px-4">Ảnh tác giả (1:1)</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'author')} />
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Section: Meta Data */}
                        <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-900 pt-12">
                            <div className="space-y-4">
                                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Layout className="w-3 h-3" /> Danh mục
                                </label>
                                <select
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all cursor-pointer"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value as BlogCategory })}
                                >
                                    {CATEGORIES.map(cat => (
                                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <User className="w-3 h-3" /> Tên tác giả
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                    value={formData.authorName}
                                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> Ngày đăng
                                </label>
                                <input
                                    type="date"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Section: Localized Content */}
                        <div className="space-y-12 border-t border-zinc-900 pt-12">
                            {/* Tiếng Việt */}
                            <div className="space-y-6 bg-zinc-900/30 p-6 rounded-2xl border border-zinc-900">
                                <span className="text-primary font-black text-[10px] uppercase tracking-widest">Nội dung Tiếng Việt</span>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Tiêu đề tiếng Việt"
                                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl font-bold text-white focus:outline-none focus:border-primary transition-all"
                                        value={formData.titleVi}
                                        onChange={(e) => setFormData({ ...formData, titleVi: e.target.value })}
                                        required
                                    />
                                    <textarea
                                        placeholder="Mô tả ngắn tiếng Việt"
                                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-400 focus:outline-none focus:border-primary transition-all resize-none h-20"
                                        value={formData.excerptVi}
                                        onChange={(e) => setFormData({ ...formData, excerptVi: e.target.value })}
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-zinc-400 focus:outline-none focus:border-primary cursor-pointer w-full"
                                            value={formData.tagVi}
                                            onChange={(e) => {
                                                const selected = TAG_OPTIONS.find(t => t.vi === e.target.value);
                                                setFormData({ 
                                                    ...formData, 
                                                    tagVi: e.target.value,
                                                    tagEn: selected ? selected.en : formData.tagEn
                                                });
                                            }}
                                        >
                                            <option value="">-- Chọn Tag (VI) --</option>
                                            {TAG_OPTIONS.map(tag => (
                                                <option key={tag.vi} value={tag.vi}>{tag.vi}</option>
                                            ))}
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Thời gian đọc (VD: 5 phút đọc)"
                                            className="bg-transparent border-b border-zinc-800 py-2 text-sm text-zinc-400 focus:outline-none focus:border-primary"
                                            value={formData.readTimeVi}
                                            onChange={(e) => setFormData({ ...formData, readTimeVi: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Nội dung chi tiết</label>
                                        <button 
                                            type="button"
                                            onClick={() => setPreviewVi(!previewVi)}
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                                        >
                                            {previewVi ? <><Edit3 className="w-3 h-3" /> Sửa bài</> : <><Eye className="w-3 h-3" /> Xem trước</>}
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <AnimatePresence mode="wait">
                                            {previewVi ? (
                                                <motion.div 
                                                    key="preview-vi"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-6 min-h-[300px] prose-markdown overflow-y-auto"
                                                >
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                        {formData.contentVi || "_Chưa có nội dung..._"}
                                                    </ReactMarkdown>
                                                </motion.div>
                                            ) : (
                                                <motion.textarea
                                                    key="edit-vi"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    placeholder="Nội dung bài viết ( Markdown được khuyến khích )..."
                                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary min-h-[300px] font-mono text-sm leading-relaxed"
                                                    value={formData.contentVi}
                                                    onChange={(e) => setFormData({ ...formData, contentVi: e.target.value })}
                                                    required
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                            {/* English */}
                            <div className="space-y-6 bg-zinc-900/30 p-6 rounded-2xl border border-zinc-900">
                                <span className="text-primary font-black text-[10px] uppercase tracking-widest">English Content</span>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="English Title"
                                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl font-bold text-white focus:outline-none focus:border-primary transition-all"
                                        value={formData.titleEn}
                                        onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                                        required
                                    />
                                    <textarea
                                        placeholder="English Excerpt"
                                        className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-400 focus:outline-none focus:border-primary transition-all resize-none h-20"
                                        value={formData.excerptEn}
                                        onChange={(e) => setFormData({ ...formData, excerptEn: e.target.value })}
                                        required
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-zinc-400 focus:outline-none focus:border-primary cursor-pointer w-full"
                                            value={formData.tagEn}
                                            onChange={(e) => {
                                                const selected = TAG_OPTIONS.find(t => t.en === e.target.value);
                                                setFormData({ 
                                                    ...formData, 
                                                    tagEn: e.target.value,
                                                    tagVi: selected ? selected.vi : formData.tagVi
                                                });
                                            }}
                                        >
                                            <option value="">-- Select Tag (EN) --</option>
                                            {TAG_OPTIONS.map(tag => (
                                                <option key={tag.en} value={tag.en}>{tag.en}</option>
                                            ))}
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Read Time (e.g. 5 min read)"
                                            className="bg-transparent border-b border-zinc-800 py-2 text-sm text-zinc-400 focus:outline-none focus:border-primary"
                                            value={formData.readTimeEn}
                                            onChange={(e) => setFormData({ ...formData, readTimeEn: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-4 mb-2">
                                        <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Detailed Content</label>
                                        <button 
                                            type="button"
                                            onClick={() => setPreviewEn(!previewEn)}
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                                        >
                                            {previewEn ? <><Edit3 className="w-3 h-3" /> Edit Mode</> : <><Eye className="w-3 h-3" /> Preview</>}
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <AnimatePresence mode="wait">
                                            {previewEn ? (
                                                <motion.div 
                                                    key="preview-en"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-6 min-h-[300px] prose-markdown overflow-y-auto"
                                                >
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                        {formData.contentEn || "_No content yet..._"}
                                                    </ReactMarkdown>
                                                </motion.div>
                                            ) : (
                                                <motion.textarea
                                                    key="edit-en"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    placeholder="Full Blog Content ( Markdown encouraged )..."
                                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-primary min-h-[300px] font-mono text-sm leading-relaxed"
                                                    value={formData.contentEn}
                                                    onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
                                                    required
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Message */}
                        {showSuccess && (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-500/10 border border-green-500/30 text-green-500 p-6 rounded-2xl flex items-center gap-4">
                                <div className="p-2 bg-green-500/20 rounded-full">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Đăng bài thành công!</h4>
                                    <p className="text-xs opacity-70">Bài viết của bạn đã được lưu vào hệ thống và sẵn sàng hiển thị.</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Action Buttons */}
                        <div className="pt-8 flex flex-col items-center gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-black uppercase tracking-widest text-xs py-6 rounded-2xl transition-all flex items-center justify-center gap-3 group"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Đang tải dữ liệu...
                                    </>
                                ) : (
                                    <>
                                        <Check className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                        Xuất bản bài viết
                                    </>
                                )}
                            </button>
                            <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
                                Lưu ý: Ảnh bìa là bắt buộc để xuất bản
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>

            <ErrorDialog
                isOpen={errorDetails.isOpen}
                onClose={() => setErrorDetails({ ...errorDetails, isOpen: false })}
                message={errorDetails.message}
            />
        </main>
    );
}
