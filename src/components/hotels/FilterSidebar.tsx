/* eslint-disable react/no-unescaped-entities */
"use client";

import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar() {
  const { setQueryParams, getQueryParams ,removeQueryParams} = useSetQueryParams();
  const minPrice = Number(getQueryParams("minPrice")) || 0;
  const maxPrice = Number(getQueryParams("maxPrice")) || 1000;

  const [priceToogle, setPriceToogle] = useState(getQueryParams("price"));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  return (
    <div className="w-[300px] space-y-6 rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold">Filter by:</h2>

      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Price Range (price per night)</h3>
          <div className="space-y-2">
            <Slider
              className="max-w-md"
              defaultValue={priceRange}
              formatOptions={{ style: "currency", currency: "USD" }}
              label="Price Range"
              maxValue={10000}
              minValue={0}
              step={50}
              onChange={(value) => {
                if (Array.isArray(value)) {
                  setQueryParams("minPrice", value[0].toString());
                  setQueryParams("maxPrice", value[1].toString());
                }
              }}
              classNames={{
                track: "h-1 bg-gray-300", // Thinner track with a light gray background
                thumb: "w-3 h-3  rounded-full shadow-md", // Customize the thumb
                label: "mb-2",
              }}
            />
          </div>
        </div>
        {/* price with asc and desc */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Sort By Price</h3>
          <div className="space-y-2">
            {[
              { label: "Price Low to High", id: "asc", count: 4 },
              { label: "Price High to Low", id: "desc", count: 27 },
            ].map((filter) => (
              <label
                key={filter.id}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                    isSelected={priceToogle === filter.id}
                    onClick={() => {
                      if(priceToogle === filter.id){
                        removeQueryParams('price')
                        setPriceToogle('')
                      }else{
                        setPriceToogle(filter.id);
                      setQueryParams("price", filter.id);
                      }
                      
                    }}
                  />
                  <span className="text-sm text-[#262626]">{filter.label}</span>
                </div>
                <span className="text-sm text-gray-500">{filter.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Facilities</h3>
          <div className="space-y-2">
            {[
              { label: "Parking", count: 63 },
              { label: "Restaurant", count: 54 },
              { label: "Pet friendly", count: 1 },
            ].map((facility) => (
              <label
                key={facility.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" radius="sm" />
                  <span className="text-sm text-[#262626]">
                    {facility.label}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{facility.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Review score */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Review score</h3>
          <div className="space-y-2">
            {[
              { label: "Good: 7+", count: 7 },
              { label: "Pleasant: 6+", count: 20 },
            ].map((score) => (
              <label
                key={score.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" radius="sm" />
                  <span className="text-sm text-[#262626]">{score.label}</span>
                </div>
                <span className="text-sm text-gray-500">{score.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property rating */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Property rating</h3>
          <p className="mb-2 text-sm text-gray-600">
            Find high-quality hotels and vacation rentals
          </p>
          <div className="space-y-2">
            {[
              { label: "1 star", count: 2 },
              { label: "2 stars", count: 3 },
              { label: "3 stars", count: 30 },
              { label: "4 stars", count: 2 },
              { label: "5 stars", count: 4 },
            ].map((rating) => (
              <label
                key={rating.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" radius="sm" />
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
  );
}
