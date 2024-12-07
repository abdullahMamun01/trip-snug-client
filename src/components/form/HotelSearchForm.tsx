"use client";
import { HotelSearch, useHotelSearchStore } from "@/stores/hotels/search.store";
import { DateValue, getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { DateRangePicker  } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";

type RangeValue = {
  start: DateValue | null;
  end: DateValue | null;
};

const formatDate = (date: DateValue) => {
  // Example: Convert to a readable format
  const { day, month, year } = date;
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};

export default function HotelSearchForm() {
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("1");
  const { setSearchState, searchState } = useHotelSearchStore();
  const [date, setDate] = useState<any>("");

  const handleRangeChange = (value: RangeValue) => {
    console.log("Selected range:", value);


    if (value.start) {
      console.log("Start Date:", formatDate(value.start));
    }
    if (value.end) {
      console.log("End Date:", formatDate(value.end));
    }
  };
  const handleChange = (
    field: keyof HotelSearch,
    value: string | number | null,
  ) => {
    setSearchState({ [field]: value });
  };
  console.log(searchState);
  return (
    <div className="flex w-[90%] max-w-5xl items-center gap-2 rounded-full bg-white p-2 shadow-xl">
      {/* <div className="flex flex-1 items-center gap-2 px-4">
        <span className="text-sm font-medium text-default-700">Check-in</span>
        <Input
          type="date"
          variant="flat"
          name="checkin"
          className="w-40 rounded-md bg-sky-100"
          onChange={(e) => handleChange('checkIn' , e.target.value)}
          classNames={{
            input: "text-sm ",
            inputWrapper: "bg-transparent shadow-none",
          }}
        />
      </div> */}
      <div className="flex flex-1 items-center gap-2 px-4">
        <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
          <DateRangePicker
            label="Select Dates "
            visibleMonths={2}
            classNames={{
              label: "text-md  font-bold",
              inputWrapper: "bg-sky-100",
            }}
            onChange={handleRangeChange}
          />
        </div>
      </div>
      <div className="h-8 w-px bg-default-200" />

      {/* <div className="flex flex-1 items-center gap-2 px-4">
        <span className="text-sm font-medium text-default-700">Check-out</span>
        <Input
          type="date"
          variant="flat"
          name="checkout"
          className="w-40 rounded-md bg-sky-100"
          onChange={(e) => handleChange('checkOut' , e.target.value)}
          classNames={{
            input: "text-sm",
            inputWrapper: "bg-transparent shadow-none",
          }}
        />
      </div> */}

      <div className="h-8 w-px bg-default-200" />

      <div className="flex flex-1 items-center gap-2 px-4">
        <span className="text-sm font-medium text-default-700">Adults</span>

        <Select
          value={[adults]}
          onChange={(e) => {
            setAdults(e.target.value);
            handleChange("adults", Number(e.target.value));
          }}
          classNames={{
            trigger: "bg-sky-100 text-black shadow-none h-unit-10",
            value: "text-sm text-black",
          }}
          placeholder="select item"
        >
          {["1", "2", "3", "4", "5"].map((a, i) => (
            <SelectItem key={`${a}`} value={`${a}`}>
              {a}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="h-8 w-px bg-default-200" />

      <div className="flex flex-1 items-center gap-2 px-4">
        <span className="text-sm font-medium text-default-700">Children</span>
        <Select
          selectedKeys={[children]}
          onChange={(e) => {
            setChildren(e.target.value);
            handleChange("children", Number(e.target.value));
          }}
          classNames={{
            trigger: "bg-sky-100 text-black shadow-none h-unit-10",
            value: "text-sm text-black",
          }}
          placeholder="select item"
        >
          {["1", "2", "3", "4", "5"].map((ch, i) => (
            <SelectItem key={`${ch}`} value={ch}>
              {ch}
            </SelectItem>
          ))}
        </Select>
      </div>

      <Button size="lg" className="rounded-full bg-[#4F46E5] px-8 text-white">
        Search
      </Button>
    </div>
  );
}
