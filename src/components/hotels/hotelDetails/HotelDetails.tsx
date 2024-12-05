'use client'
import { useState } from "react"

import { Bed, Bath, Users, Car, Trees, Utensils, Droplets, Shirt, Star, MapPin } from "lucide-react"
import { Tab, Tabs } from "@nextui-org/tabs"
import { Button } from "@nextui-org/button"

export default function HotelDetails() {
  const [selectedTab, setSelectedTab] = useState("overview")

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
          <div className="py-6 space-y-6">
            <div>
              <span className="text-sm text-gray-700">Entire home</span>
              <h1 className="text-3xl text-black-2 font-bold mb-4">
                Cascade Vista | Golf Cart + E-bikes | Sleeps 4+ 2 kids | Hot Tub
              </h1>
              <div className="flex items-center gap-3">
                <span className="bg-green-700 text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="font-bold">10</span>
                  <Star className="w-4 h-4 fill-current" />
                </span>
                <span className="font-semibold">Exceptional</span>
                <button className="text-blue-600 hover:underline">
                  See 1 review
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>2 bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>2 bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Sleeps 4</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-black-2 font-semibold mb-4">Popular amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Parking available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Hot Tub</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trees className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Outdoor Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shirt className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Washer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700">Barbecue grill</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-gray-700"/>
                  <span className="text-gray-700">Kitchen</span>
                </div>
              </div>
              <Button
                className="mt-4"
                variant="light"
                color="primary"
              >
                See all property amenities
              </Button>
            </div>

            <div>
              <h2 className="text-xl text-black-2 font-semibold mb-4">Explore the area</h2>
              <div className="bg-gray-100 rounded-xl p-4 mb-4 h-48">
                Map placeholder
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Pronghorn Golf Club</span>
                  </div>
                  <span className="text-gray-600">28 min drive</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Deschutes County Fairgrounds Expo Center</span>
                  </div>
                  <span className="text-gray-600">30 min drive</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Old Mill District</span>
                  </div>
                  <span className="text-gray-600">39 min drive</span>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab key="amenities" title="Amenities" />
        <Tab key="policies" title="Policies" />
      </Tabs>
    </div>
  )
}