"use client";

import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from "react";

export default function FilterSidebar() {
  const { setQueryParams, getQueryParams, removeQueryParams } =
    useSetQueryParams();
  const minPrice = Number(getQueryParams("minPrice")) || 0;
  const maxPrice = Number(getQueryParams("maxPrice")) || 1000;

  const [priceToogle, setPriceToogle] = useState(getQueryParams("price"));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="sticky top-22 w-[300px] space-y-6 rounded-lg border border-gray-200 bg-white p-4 max-sm:w-full">
      <div className="space-y-6">
        <Accordion defaultSelectedKeys={["1"]}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Price Range (Per night)"
            classNames={{
              heading:
                "darK:text-white bg-[#FBFFFF] dark:bg-black bg-white  border-b l",
              content: "#FBFFFF",
            }}
          >
            <div className="space-y-2 bg-black bg-transparent">
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
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Sort By Price"
            classNames={{
              heading:
                "darK:text-white bg-[#FBFFFF] dark:bg-black bg-white  border-b l",
              content: "#FBFFFF",
            }}
          >
            <div className="border-b border-gray-200 pb-6">
              <h3 className="mb-3 font-medium">Sort By Price</h3>
              <div className="space-y-2">
                {[
                  { label: "Price Low to High", id: "asc" },
                  { label: "Price High to Low", id: "desc" },
                ].map((filter) => (
                  <div className="flex items-center gap-2" key={filter.id}>
                    <Checkbox
                      size="sm"
                      className="flex cursor-pointer items-center justify-between"
                      radius="sm"
                      isSelected={priceToogle === filter.id || false}
                      value={filter.id}
                      onChange={(event) => {
                        const priceValue = event.target.value;
                        if (priceValue === filter.id && priceToogle !== filter.id) {
                        
                          setPriceToogle(filter.id);
                          setQueryParams("price", filter.id);
                        } else if (priceToogle === filter.id) {
                          removeQueryParams("price");
                          setPriceToogle("");
                        }
                      }}
                    />
                    <span className="text-sm text-[#262626]">
                      {filter.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>
        </Accordion>
        {/* price with asc and desc */}

     

        {/* Review score */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Review score</h3>
          <div className="space-y-2">
            {[

              { label: "3 stars" },
              { label: "4 stars" },
              { label: "5 stars" },
            ].map((score) => (
              <label
                key={score.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" radius="sm" />
                  <span className="text-sm text-[#262626]">{score.label} + ratings</span>
                </div>

              </label>
            ))}
          </div>
        </div>

        {/* Property rating */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Property Type</h3>
         
          <div className="space-y-2">
            {[
              { label: "1-stars" },
              { label: "2-stars" }, 
              { label: "3-stars" },
              { label: "4-stars" },
              { label: "5-stars" },
            ].map((rating) => (
              <label
                key={rating.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" radius="sm" />
                  <span className="text-sm text-[#262626]">{rating.label} </span>
                </div>
  
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
