import ReviewsHero from "@/app/reviews/_sections/ReviewsHero";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ReviewsPage');
  return {
    title: t('metaTitle'),
  };
}

export default function ReviewsPage() {
  return (
    <main className="flex w-full flex-col overflow-hidden min-h-screen">
      <ReviewsHero />
    </main>
  );
}
