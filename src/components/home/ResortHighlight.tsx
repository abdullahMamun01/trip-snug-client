import { Button } from "@nextui-org/button";

import Image from "next/image";

import ResorFeatureImage from "@/assests/resort-feature.jpg";
import Lauggage from "@/assests/luggage.png";
import { Briefcase, Coffee, Key, User } from "lucide-react";

export default function ResortHighlight() {
  return (
    <div className="container relative mx-auto py-12 ">
      <div className=" grid items-center gap-2 lg:grid-cols-2 ">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg w-full">
            <Image
              src={ResorFeatureImage}
              alt="Luxury hotel room with ocean view"
              className="object-cover w-full"
              width={1000}
              height={800}
              
            />
          </div>

          {/* Info boxes */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2">
            <div className="bg-sky-600 bg-opacity-90 p-6 text-white">
              <div className="text-2xl font-light">24/7 Day</div>
              <div className="mt-1 text-sm uppercase tracking-wider">
                Reception
              </div>
            </div>
            <div className="bg-sky-600 bg-opacity-80 p-6 text-white">
              <div className="text-2xl font-light">Main Hall</div>
              <div className="mt-1 text-sm uppercase tracking-wider">
                Booking
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-12">
          <div className="space-y-6">
            <div className="uppercase tracking-wider text-neutral-500">
              Enjoy your stay
            </div>

            <h1 className="font-serif text-5xl leading-tight text-primary-400 lg:text-6xl">
              Best Resort in the City Area
            </h1>

            <p className="leading-relaxed text-neutral-600">
              Experience unmatched luxury and comfort at the best resort in the
              city area. Nestled in a prime location, our resort offers a
              perfect blend of serene surroundings and modern amenities. 
              Enjoy a range of recreational activities. Whether you are here for
              a romantic getaway, a family vacation, or a business retreat, our
              resort is your ultimate destination for an unforgettable stay
            </p>

            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="flex items-start gap-3">
                <Key className="h-6 w-6 text-neutral-400" />
                <div>
                  <div className="text-sm font-medium uppercase">
                    Suite Smart Key
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 text-neutral-400" />
                <div>
                  <div className="text-sm font-medium uppercase">
                    Luggage Deposit
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="h-6 w-6 text-neutral-400" />
                <div>
                  <div className="text-sm font-medium uppercase">
                    Room Service
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="h-6 w-6 text-neutral-400" />
                <div>
                  <div className="text-sm font-medium uppercase">
                    Daily Cleaning
                  </div>
                </div>
              </div>
            </div>

            <Button className=" rounded-md bg-primary px-8 py-6 text-white transition-colors hover:bg-[#2C3E50]">
              READ MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative suitcase image */}
    </div>
  );
}
