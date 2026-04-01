import React from "react";
import FAQHero from "./_sections/FAQHero";
import FAQContent from "./_sections/FAQContent";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('FAQPage');
  return {
    title: t('metaTitle'),
  };
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQHero />
      <FAQContent />
    </main>
  );
}
