import HeroSlider from "./components/HeroSlider";
import Ticker from "./components/Ticker";
import PastorSection from "./components/PastorSection";
import ServicesSection from "./components/ServicesSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import CareersSection from "./components/CareersSection";
import WordAndPrayer from "./components/WordAndPrayer";
import VisitSection from "./components/VisitSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker />
      <PastorSection />
      <ServicesSection />
      <WordAndPrayer />
      <AnnouncementsSection />
      <CareersSection />
      <VisitSection />
    </>
  );
}
