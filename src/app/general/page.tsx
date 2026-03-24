import GeneralHero from "@/app/general/_sections/GeneralHero";
import GeneralVision from "@/app/general/_sections/GeneralVision";
import GeneralMission from "@/app/general/_sections/GeneralMission";
import GeneralJourney from "@/app/general/_sections/GeneralJourney";


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

    </div>
  );
}
