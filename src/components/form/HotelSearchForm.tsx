"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { FaUserGroup } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import {
  CalendarDate,
  CalendarDateTime,
  DateValue,
  parseDate,
  ZonedDateTime,
} from "@internationalized/date";
import { useRouter } from "next/navigation";
import getDateWithOffset from "@/lib/date";
import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Input } from "@nextui-org/input";
import { Locate, MapPin } from "lucide-react";
import locations from "@/lib/location.constant";

type RangeValue<T = DateValue> = {
  start: T | null;
  end: T | null;
};

const formatDate = (date: DateValue) => {
  const { day, month, year } = date;
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};

// Validation Schema
const hotelSearchSchema = z.object({
  location: z.string().nonempty("location is required") ,
  checkIn: z.string().nonempty("Check-in date is required"),
  checkOut: z.string().nonempty("Check-out date is required"),
  adults: z.number().int().positive().min(1, "At least 1 adult is required"),
  children: z.number().int().nonnegative().optional(),
});

type HotelSearchFormValues = z.infer<typeof hotelSearchSchema>;

export default function HotelSearchForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HotelSearchFormValues>({
    resolver: zodResolver(hotelSearchSchema),
    defaultValues: {
      checkIn: getDateWithOffset(),
      checkOut: getDateWithOffset(1),
      adults: 1,
      children: 1,
    },
  });
  const checkinIn = getDateWithOffset();
  const checkOut = getDateWithOffset(1);
  const onSubmit = (data: HotelSearchFormValues) => {
    console.log("Form submitted:", data);
    // Add your submission logic here
    const params = new URLSearchParams({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      adults: data.adults.toString() || "1",
      location: data.location,
      // children: data.children.toString(),
    });

    router.push(`/hotels?${params.toString()}`);
  };

  const handleRangeChange = (
    value: RangeValue<CalendarDate | CalendarDateTime | ZonedDateTime> | null,
  ) => {
    if (value?.start) {
      setValue("checkIn", formatDate(value.start));
    }
    if (value?.end) {
      setValue("checkOut", formatDate(value.end));
    }
  };

  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-sm-devide-y flex w-[90%] max-w-5xl items-center gap-2 rounded-md bg-white p-2 shadow-xl dark:bg-[#1A222C] max-sm:flex-col max-sm:gap-y-4 max-sm:py-8 sm:rounded-full"
    >
      {/* destination */}
      <div className="flex w-full flex-1 items-center gap-2 px-4 ">
        <span className="text-sm font-medium text-default-700">
          <MapPin />
        </span>
        <Select
          placeholder="location"
          {...register("location")}
          classNames={{
            trigger:
              "bg-sky-100 hover:bg-sky-100 text-black shadow-none h-unit-10",
          }}
        >
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </Select>
        {errors.location && (
          <p className="text-red-500">{errors.location.message}</p>
        )}
      </div>
      <div className="h-8 w-px bg-default-200 max-sm:hidden" />

      {/* Date Range Picker */}
      <div className="flex w-full flex-1 items-center gap-2 px-4 ">
        <span className="text-sm font-medium text-default-700 sm:hidden">
          <CiCalendarDate className="h-6 w-6" />
        </span>
        <DateRangePicker
          label="Select Dates"
          visibleMonths={2}
          classNames={{
            label: "text-md font-bold dark:text-black",
            inputWrapper: "bg-sky-100",
          }}
          defaultValue={{
            start: parseDate(checkinIn) as any,
            end: parseDate(checkOut) as any,
          }}
          onChange={handleRangeChange}
          className=""
        />
        {errors.checkIn && (
          <p className="text-red-500">{errors.checkIn.message}</p>
        )}
        {errors.checkOut && (
          <p className="text-red-500">{errors.checkOut.message}</p>
        )}
      </div>

      <div className="h-8 w-px bg-default-200 max-sm:hidden" />

      {/* Adults */}
      <div className="flex w-full flex-1 items-center gap-2 px-4 ">
        <span className="text-sm font-medium text-default-700">
          <FaUserGroup className="h-6 w-6" />
        </span>
        <Select
          {...register("adults", { valueAsNumber: true })}
          onChange={(e) => setValue("adults", Number(e.target.value))}
          classNames={{
            trigger: "bg-sky-100 text-black shadow-none h-unit-10",
            value: "text-sm text-black",
          }}
        >
          {["0", "1", "2", "3", "4", "5"].map((a) => (
            <SelectItem key={a} value={a} classNames={{}}>
              {a}
            </SelectItem>
          ))}
        </Select>
        {errors.adults && (
          <p className="text-red-500">{errors.adults.message}</p>
        )}
      </div>

      <div className="h-8 w-px bg-default-200 max-sm:hidden" />

      {/* Children */}
      {/* <div className="flex flex-1 items-center gap-2 px-4">
        <span className="text-sm font-medium text-default-700">Children</span>
        <Select
          {...register("children", { valueAsNumber: true })}
          onChange={(e) => {
            setValue("children", Number(e.target.value));
          }}
          classNames={{
            trigger: "bg-sky-100 text-black shadow-none h-unit-10",
            value: "text-sm text-black",
          }}
        >
          {["1", "2", "3", "4", "5"].map((ch) => (
            <SelectItem key={ch} value={ch}>
              {ch}
            </SelectItem>
          ))}
        </Select>
        {errors.children && (
          <p className="text-red-500">{errors.children.message}</p>
        )}
      </div> */}

      {/* Submit Button */}
      <Button
        size="lg"
        type="submit"
        className="rounded-full bg-[#4F46E5] px-8 text-white max-sm:w-[95%] max-sm:px-4"
      >
        Search
      </Button>
    </form>
  );
}
