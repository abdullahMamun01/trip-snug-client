import { Button } from '@nextui-org/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Image1 from "@/assests/hero.avif"
import Image2 from "@/assests/hero2.avif"

export default function FeatureSection() {
  return (
    <section className="container mx-auto px-4 py-32 bg-sky-50 ">
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/2 relative">
        <div className="relative w-full h-[400px]">
          <Image
            src={Image2}
            alt="Snowy mountain landscape"
            className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10 transition-transform duration-300 hover:scale-105"
          />
          <Image
            src={Image1}
            alt="Tropical beach sunset"
            className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg z-20">
            <span className="text-2xl font-bold text-primary">Our</span>
            <span className="block text-xs text-center">Best Service to user</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 space-y-6">
        <span className="text-primary text-sm font-medium">Discover the World with Us</span>
        <h1 className="text-4xl font-bold leading-tight">
          Your Journey Begins Here
        </h1>
        <p className="text-muted-foreground">
        Exclusive Deals, Central Locations! Search & Book Cheap Hotels Online. Next Stop: The Right Property for You. Big Range of Top-Rated Properties. Earn Reward Nights.
        </p>
        <ul className="space-y-2">
          {[
            "Handpicked accommodations",
            "24/7 travel support",
            "Exclusive local experiences"
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Start Planning
        </Button>
      </div>
    </div>
  </section>
  )
}
