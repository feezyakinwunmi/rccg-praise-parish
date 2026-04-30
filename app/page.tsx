"use client";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Ticker from "./components/Ticker";
import PastorSection from "./components/PastorSection";
import ServicesSection from "./components/ServicesSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import CareersSection from "./components/CareersSection";
import Footer from "./components/Footer";
import WordAndPrayer from "./components/WordAndPrayer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main>
        <HeroSlider />
        <Ticker />
        <PastorSection />
        <ServicesSection />
        <WordAndPrayer/>
        <AnnouncementsSection />
        <CareersSection />
      </main>
    </>
  );
}