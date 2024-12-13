"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import SpecialRequestsInput from "./SpecialRequestsInput";
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { DollarSign } from "lucide-react";

const hotels = [
  { id: 1, name: "Luxury Resort & Spa", price: 299 },
  { id: 2, name: "Beachfront Paradise", price: 399 },
];

const currecnies = [
  'usd' , "bdt" , "eur"
];

export default function BookingForm() {
  const [selectedGuests, setSelectedGuests] = useState<string>("");
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input variant="faded" placeholder="hotel name" label="Hotel Name" />
        <Input
          variant="faded"
          value="deluxes"
          readOnly={false}
          placeholder="Room Type"
          label="Room Type"
        />
      </div>
      <div>
        <Select
          label="Currecncy Type"
          placeholder="Select currency"
          className="w-full"
          
        >
          {currecnies.map((currency) => (
            <SelectItem key={currency} value={currency} >

            {currency}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input type="date" label="Check-in Date" className="w-full" />
        <Input type="date" label="Check-out Date" className="w-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="col-span-2">Guest Details</label>
        <Input type="number" label="Adults" className="w-full" />
        <Input type="number" label="Children" className="w-full" />
      </div>

      <Divider className="my-4" />
      <Button color="primary" size="lg" className="w-full">
        <FaRegCreditCard className="h-6 w-6" /> Continue to Payment
      </Button>
    </div>
  );
}
