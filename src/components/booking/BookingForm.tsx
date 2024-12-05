"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import SpecialRequestsInput from "./SpecialRequestsInput";
import { useState } from "react";

const hotels = [
  { id: 1, name: "Luxury Resort & Spa", price: 299 },
  { id: 2, name: "Beachfront Paradise", price: 399 },
];

const roomTypes = [
  { label: "Standard Room", value: "standard" },
  { label: "Deluxe Room", value: "deluxe" },
  { label: "Suite", value: "suite" },
  { label: "Executive Suite", value: "executive" },
];

export default function BookingForm() {
  const [selectedGuests, setSelectedGuests] = useState<string>("");
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select
          label="Select Hotel"
          placeholder="Choose a hotel"
          className="w-full"
        >
          {hotels.map((hotel) => (
            <SelectItem key={hotel.id} value={hotel.id}>
              {hotel.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Room Type"
          placeholder="Select room type"
          className="w-full"
        >
          {roomTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input type="date" label="Check-in Date" className="w-full" />
        <Input type="date" label="Check-out Date" className="w-full" />
      </div>

      <Select
        label="Number of Guests"
        placeholder="Select number of guests"
        className="w-full"
        value={selectedGuests}
        onChange={(e) => setSelectedGuests(e.target.value)}
      >
        {["1", "2", "3", "4"].map((num) => (
          <SelectItem key={num} value={num}>
            {num} {num === "1" ? "Guest" : "Guests"}
          </SelectItem>
        ))}
      </Select>

      <Divider className="my-4" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input type="text" label="First Name" className="w-full" />
        <Input type="text" label="Last Name" className="w-full" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input type="email" label="Email" className="w-full" />
        <Input type="tel" label="Phone Number" className="w-full" />
      </div>

      <SpecialRequestsInput />

      <Button color="primary" size="lg" className="w-full">
        Continue to Payment
      </Button>
    </div>
  );
}
