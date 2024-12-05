/* eslint-disable react/no-unescaped-entities */
'use client'

import { Checkbox } from "@nextui-org/checkbox"
import { ChevronDown } from "lucide-react"

export default function FilterSidebar() {
  return (
    <div className="w-[300px] p-4 space-y-6 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold">Filter by:</h2>

      <div className="space-y-6">
        {/* Popular filters */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Popular filters</h3>
          <div className="space-y-2">
            {[
              { label: "5 stars", count: 4 },
              { label: "Sea view", count: 27 },
              { label: "Air conditioning", count: 63 },
              { label: "Swimming pool", count: 16 },
              { label: "Resorts", count: 1 },
              { label: "Beach", count: 28 },
              { label: "Pet friendly", count: 1 },
              { label: "Restaurant", count: 54 },
            ].map((filter) => (
              <label key={filter.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                   
                  />
                  <span className="text-sm text-[#262626]">{filter.label}</span>
                </div>
                <span className="text-sm text-gray-500">{filter.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Property Type</h3>
          <div className="space-y-2">
            {[
              { label: "Hotels", count: 67 },
              { label: "Resorts", count: 1 },
            ].map((type) => (
              <label key={type.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
          
                  />
                  <span className="text-sm text-[#262626]">{type.label}</span>
                </div>
                <span className="text-sm text-gray-500">{type.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Facilities</h3>
          <div className="space-y-2">
            {[
              { label: "Parking", count: 63 },
              { label: "Restaurant", count: 54 },
              { label: "Pet friendly", count: 1 },
            ].map((facility) => (
              <label key={facility.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                   
                  />
                  <span className="text-sm text-[#262626]">{facility.label}</span>
                </div>
                <span className="text-sm text-gray-500">{facility.count}</span>
              </label>
            ))}
            <button className="flex items-center text-blue-600 text-sm font-medium">
              Show all 14
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Room facilities */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Room facilities</h3>
          <div className="space-y-2">
            {[
              { label: "Private bathroom", count: 44 },
              { label: "Sea view", count: 27 },
              { label: "Air conditioning", count: 63 },
            ].map((facility) => (
              <label key={facility.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                   
                  />
                  <span className="text-sm text-[#262626]">{facility.label}</span>
                </div>
                <span className="text-sm text-gray-500">{facility.count}</span>
              </label>
            ))}
            <button className="flex items-center text-blue-600 text-sm font-medium">
              Show all 12
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Review score */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Review score</h3>
          <div className="space-y-2">
            {[
              { label: "Good: 7+", count: 7 },
              { label: "Pleasant: 6+", count: 20 },
            ].map((score) => (
              <label key={score.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                  
                  />
                  <span className="text-sm text-[#262626]">{score.label}</span>
                </div>
                <span className="text-sm text-gray-500">{score.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Distance from center */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Distance from center of Cox's Bazar</h3>
          <div className="space-y-2">
            {[
              { label: "Less than 1 km", count: 2 },
              { label: "Less than 3 km", count: 41 },
              { label: "Less than 5 km", count: 65 },
            ].map((distance) => (
              <label key={distance.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                
                  />
                  <span className="text-sm text-[#262626]">{distance.label}</span>
                </div>
                <span className="text-sm text-gray-500">{distance.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property rating */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-medium mb-3">Property rating</h3>
          <p className="text-sm text-gray-600 mb-2">Find high-quality hotels and vacation rentals</p>
          <div className="space-y-2">
            {[
              { label: "1 star", count: 2 },
              { label: "2 stars", count: 3 },
              { label: "3 stars", count: 30 },
              { label: "4 stars", count: 2 },
              { label: "5 stars", count: 4 },
            ].map((rating) => (
              <label key={rating.label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
               
                  />
                  <span className="text-sm text-[#262626]">{rating.label}</span>
                </div>
                <span className="text-sm text-gray-500">{rating.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fun Things To Do header */}
        <h3 className="font-medium">Fun Things To Do</h3>
      </div>
    </div>
  )
}