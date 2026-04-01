import React from "react";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactSection');
  return {
    title: t('metaTitle'),
  };
}

export default function ContactPage() {
  return (
    <div className="bg-[#060606] pt-24 md:pt-32 min-h-screen">
      <ContactSection />
    </div>
  );
}
