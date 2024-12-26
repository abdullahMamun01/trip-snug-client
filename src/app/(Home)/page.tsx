import ResortHighlight from "@/components/home/ResortHighlight";
import HeroSection from "@/components/Navbar/HeroSection";
import { Promotions } from "@/components/promotional/Promotions";
import FeatureRooms from "@/components/rooms/FeatureRooms";
import PopularDestination from "@/components/rooms/PopularDestination";
import DiscoverSection from "@/components/ui/DiscoverSection";

import HomeFeature from "@/components/ui/HomeFeature";


export default  function HomePage() {
  return (
    <div className="min-h-screen dark:bg-[#1A222C]">
      <HeroSection />
      <HomeFeature />
      <ResortHighlight />
      {/* <FeatureSection/> */}
      <DiscoverSection />
      <Promotions/>
      {/* <FeatureRooms /> */}
      <PopularDestination />
    </div>
  );
}
