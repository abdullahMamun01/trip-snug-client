"use client";

import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@nextui-org/slider";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from "react";
import { classificationArray } from "@/lib/filter.constants";

export default function FilterSidebar() {
  const { setQueryParams, getQueryParams, removeQueryParams } =
    useSetQueryParams();
  const minPrice = Number(getQueryParams("minPrice")) || 0;
  const maxPrice = Number(getQueryParams("maxPrice")) || 1000;

  const [priceToogle, setPriceToogle] = useState(getQueryParams("price"));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [ratingToggle, setRatingRoggle] = useState(
    getQueryParams("rating") || "",
  );
  const [classificationToggle, setClassificationToggle] = useState(
    getQueryParams("classification") || "",
  );

  const handleToggle = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentValue: string,
    toggleValue: string,
    setToggleValue: (value: string) => void,
    queryKey: string,
  ): void => {
    const value = event.target.value;
    if (value === currentValue && toggleValue !== currentValue) {
      setToggleValue(currentValue);
      setQueryParams(queryKey, currentValue);
    } else if (toggleValue === currentValue) {
      removeQueryParams(queryKey);
      setToggleValue("");
    }
  };

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
                      onChange={(event) =>
                        handleToggle(
                          event,
                          filter.id,
                          priceToogle,
                          setPriceToogle,
                          "sortBy",
                        )
                      }
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

        {/*Hotel Rating */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Review score</h3>
          <div className="space-y-2">
            {[{ label: "3" }, { label: "4" }, { label: "5" }].map((rating) => (
              <label
                key={rating.label}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                    value={rating.label}
                    isSelected={ratingToggle === rating.label || false}
                    onChange={(event) =>
                      handleToggle(
                        event,
                        rating.label,
                        ratingToggle,
                        setRatingRoggle,
                        "rating",
                      )
                    }
                  />
                  <span className="text-sm text-[#262626]">
                    {rating.label} stars + ratings
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* hotel classification */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="mb-3 font-medium">Property Type</h3>

          <div className="space-y-2">
            {classificationArray.map((classification) => (
              <label
                key={classification}
                className="flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    size="sm"
                    radius="sm"
                    value={classification}
                    isSelected={
                      classificationToggle === classification || false
                    }
                    onChange={(event) =>
                      handleToggle(
                        event,
                        classification,
                        classificationToggle,
                        setClassificationToggle,
                        "classification",
                      )
                    }
                  />
                  <span className="text-sm text-[#262626]">
                    {classification}{" "}
                  </span>
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
