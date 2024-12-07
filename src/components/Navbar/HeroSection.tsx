
import Image from "next/image";

import HeroImage from "@/assests/hero.avif";
import HotelSearchForm from "../form/HotelSearchForm";

export default function HeroSection() {

  return (
    <div className="relative min-h-screen ">
      <Image
        src={HeroImage}
        alt="Luxury Hotel Pool"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 flex flex-col items-center justify-center text-white">
        {/* Star rating */}
        <div className="mb-6 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-5 w-5 fill-current text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>

        {/* Hero text */}
        <h1 className="font-serif mb-4 text-7xl font-medium tracking-tight">
          Welcome to Trip Snug
        </h1>
        <p className="mb-16 text-lg text-white/90">
          Deleniti nostrum laboriosam praesentium quasi quam voluptate.
        </p>

        
        <HotelSearchForm/>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
        <p className="mb-2 text-sm font-light text-white/80">Scroll down</p>
        <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/30">
          <div className="mx-auto mt-2 h-1 w-1 animate-bounce rounded-full bg-white" />
        </div>
      </div>

    </div>
  );
}
