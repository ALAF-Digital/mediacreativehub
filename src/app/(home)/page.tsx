import ActionsSection from "@/containers/Home/ActionsSection";
import AssetSliderSection from "@/containers/Home/AssestSliderSection";
import GetStartedSection from "@/containers/Home/GetStartedSection";
import LandingSection from "@/containers/Home/LandingSection";
import NewsOnTheGoSection from "@/containers/Home/NewsOnTheGoSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <AssetSliderSection />
      <ActionsSection />
      <NewsOnTheGoSection />
      <GetStartedSection />
    </>
  );
}
