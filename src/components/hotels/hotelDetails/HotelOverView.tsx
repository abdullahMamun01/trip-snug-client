"use client";
import { useState } from "react";

import {
  Bed,
  Bath,
  Users,
  Car,
  Trees,
  Utensils,
  Droplets,
  Shirt,
  Star,
  MapPin,
} from "lucide-react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { getAmenityIcon } from "@/lib/amenities";
import ReviewList from "../../review/ReviewList";
interface IPorps {
  title: string;
  rating: number;
  amenities: string[];
  description: string;
}

export default function HotelOverView({
  title,
  rating,
  amenities,
  description,
}: IPorps) {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="md:col-span-2">
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key.toString())}
        aria-label="Property details"
        variant="underlined"
        classNames={{
          tabList: "gap-6",
          cursor: "w-full bg-blue-500",
          tab: "px-0 h-12",
        }}
      >
        <Tab key="overview" title="Overview">
          <div className="space-y-6 py-6">
            <div>
              <span className="text-sm text-gray-700">Entire home</span>
              <h1 className="mb-4 text-3xl font-bold text-black-2">{title}</h1>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 rounded-md bg-green-700 px-2 py-1 text-white">
                  <span className="font-bold">{rating}</span>
                  <Star className="h-4 w-4 fill-current" />
                </span>
                <span className="font-semibold">Exceptional</span>
                <button className="text-blue-600 hover:underline">
                  See 1 review
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5" />
                <span>2 bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5" />
                <span>2 bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Sleeps 4</span>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-black-2">
                Popular amenities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities?.map((amenity) => {
                  return (
                    <>
                      <div className="flex items-center gap-2">
                        {getAmenityIcon(amenity)}
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    </>
                  );
                })}
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Parking available</span>
                </div>
              </div>
              <Button className="mt-4" variant="light" color="primary">
                See all property amenities
              </Button>
            </div>

            {/* <div>
              <h2 className="mb-4 text-xl font-semibold text-black-2">
                Explore the area
              </h2>
              <div className="mb-4 h-48 rounded-xl bg-gray-100 p-4">
                Map placeholder
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Pronghorn Golf Club</span>
                  </div>
                  <span className="text-gray-600">28 min drive</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Deschutes County Fairgrounds Expo Center</span>
                  </div>
                  <span className="text-gray-600">30 min drive</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Old Mill District</span>
                  </div>
                  <span className="text-gray-600">39 min drive</span>
                </div>
              </div>
            </div> */}
          </div>
        </Tab>
        <Tab key="amenities" title="Amenities">
        </Tab>
        <Tab key="policies" title="Reviews">
          <ReviewList />
        </Tab>
      </Tabs>
    </div>
  );
}
