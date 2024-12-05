import ResortHighlight from '@/components/home/ResortHighlight'
import HeroSection from '@/components/Navbar/HeroSection'
import FeatureRooms from '@/components/rooms/FeatureRooms'
import PopularDestination from '@/components/rooms/PopularDestination'
import DiscoverSection from '@/components/ui/FavouriteStay'
import FeatureSection from '@/components/ui/FeatureSection'
import HomeFeature from '@/components/ui/HomeFeature'
import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <HomeFeature/>
      <ResortHighlight/>
      {/* <FeatureSection/> */}
      <DiscoverSection/>
      <FeatureRooms/>
      <PopularDestination/>
    </div>
  )
}
