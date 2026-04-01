"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Check, Loader2, Calendar, FileText, AlertCircle } from 'lucide-react';
import { uploadImage } from '@/services/cloudinary';
import { addLifeImage } from '@/services/life';
import ErrorDialog from '@/components/common/ErrorDialog';
import Link from 'next/link';

const CATEGORIES = [
  { value: 'team', label: 'Team & Family' },
  { value: 'office', label: 'Office Space' },
  { value: 'events', label: 'Events & Parties' },
  { value: 'growth', label: 'Learning & Growth' }
];

export default function LifeAdminClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorDetails, setErrorDetails] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: ''
  });
  
  const [formData, setFormData] = useState({
    descEn: '',
    descVi: '',
    type: 'team',
    date: new Date().toISOString().split('T')[0]
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrorDetails({
          isOpen: true,
          message: "Dung lượng ảnh không được vượt quá 5MB."
        });
        return;
      }
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || loading) return;

    setLoading(true);
    setShowSuccess(false);

    try {
      // 1. Check env first to avoid silent failures
      if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET) {
        throw new Error("Lỗi cấu hình: Vui lòng điền thông tin Cloudinary vào file .env");
      }

      // 2. Upload to Cloudinary
      const url = await uploadImage(file);

      // 3. Save to Firestore
      await addLifeImage({
        url,
        description: {
          en: formData.descEn,
          vi: formData.descVi
        },
        type: formData.type as any,
        date: formData.date
      });

      setShowSuccess(true);
      setFile(null);
      setPreview(null);
      setFormData({
        descEn: '',
        descVi: '',
        type: 'team',
        date: new Date().toISOString().split('T')[0]
      });
    } catch (error: any) {
      console.error("Upload error:", error);
      setErrorDetails({
        isOpen: true,
        message: error.message || "Đã xảy ra lỗi không xác định trong quá trình tải lên."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black py-24 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
           <Link href="/life" className="text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Quay lại Album
           </Link>
           <div className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase text-zinc-500 tracking-widest">
              Admin Portal
           </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10 text-pretty">
            <div className="bg-primary/20 p-3 rounded-2xl">
              <Upload className="text-primary w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white">Thêm kỷ niệm mới</h1>
              <p className="text-zinc-500">Tải ảnh lên Cloudinary và lưu thông tin vào Firestore</p>
            </div>
          </div>

          <form onSubmit={handleUpload} className="space-y-8">
            {/* Image Upload Area */}
            <div className="group relative aspect-video rounded-2xl bg-zinc-900 border-2 border-dashed border-zinc-800 hover:border-primary/50 transition-all overflow-hidden">
              {preview ? (
                <>
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => { setFile(null); setPreview(null); }}
                    className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-zinc-800/50 transition-colors group">
                  <div className="p-4 bg-zinc-800 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-zinc-500 w-8 h-8 group-hover:text-primary" />
                  </div>
                  <span className="text-zinc-400 font-medium font-serif italic">Nhấn để chọn ảnh kỉ niệm</span>
                  <span className="text-zinc-600 text-[10px] mt-2 font-black uppercase tracking-widest">PNG, JPG or WEBP (MAX 5MB)</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} required />
                </label>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Type Selection */}
              <div className="space-y-4">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Phân loại</label>
                <select
                  disabled={loading}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div className="space-y-4">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Ngày diễn ra</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5 pointer-events-none" />
                  <input
                    disabled={loading}
                    type="date"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Descriptions */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3 text-primary" />
                  <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Mô tả (Tiếng Việt)</label>
                </div>
                <textarea
                  disabled={loading}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none disabled:opacity-50"
                  placeholder="Hồi ức tuyệt vời cùng đồng đội..."
                  value={formData.descVi}
                  onChange={(e) => setFormData({ ...formData, descVi: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3 text-primary" />
                  <label className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Description (English)</label>
                </div>
                <textarea
                  disabled={loading}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none disabled:opacity-50"
                  placeholder="Amazing memories with the team..."
                  value={formData.descEn}
                  onChange={(e) => setFormData({ ...formData, descEn: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-500/10 border border-green-500/30 text-green-500 p-5 rounded-2xl flex items-center gap-3">
                <div className="p-1.5 bg-green-500/20 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-medium">Tải lên thành công! Kỷ niệm đã được lưu lại.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !file}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Đang xử lý...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Lưu kỷ niệm
                </>
              )}
            </button>
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
