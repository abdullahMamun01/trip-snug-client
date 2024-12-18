import ResortHighlight from "@/components/home/ResortHighlight";
import HeroSection from "@/components/Navbar/HeroSection";
import FeatureRooms from "@/components/rooms/FeatureRooms";
import PopularDestination from "@/components/rooms/PopularDestination";
import DiscoverSection from "@/components/ui/DiscoverSection";

import FeatureSection from "@/components/ui/FeatureSection";
import HomeFeature from "@/components/ui/HomeFeature";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="min-h-screen dark:bg-[#1A222C]">
      <HeroSection />
      <HomeFeature />
      <ResortHighlight />
      {/* <FeatureSection/> */}
      <DiscoverSection />
      <FeatureRooms />
      <PopularDestination />
    </div>
  );
}
