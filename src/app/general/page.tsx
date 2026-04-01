import GeneralHero from "@/app/general/_sections/GeneralHero";
import GeneralVision from "@/app/general/_sections/GeneralVision";
import GeneralMission from "@/app/general/_sections/GeneralMission";
import GeneralJourney from "@/app/general/_sections/GeneralJourney";
import GeneralJourneyDetail from "@/app/general/_sections/GeneralJourneyDetail";
import GeneralLife from "@/app/general/_sections/GeneralLife";
import GeneralContact from "@/app/general/_sections/GeneralContact";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('General');
  return {
    title: t('metaTitle'),
  };
}

export default function GeneralPage() {
  return (
    <div className="flex w-full flex-col bg-transparent overflow-hidden">
      {/* Hero Section */}
      <GeneralHero />

      {/* Vision Section */}
      <GeneralVision />

      {/* Mission Section */}
      <GeneralMission />

      {/* Our Journey Section */}
      <GeneralJourney />

      {/* Journey Detail Section */}
      <GeneralJourneyDetail />

      {/* Life at QKIT Section */}
      <GeneralLife />

      {/* Contact CTA Section */}
      <GeneralContact />
    </div>
  );
}
