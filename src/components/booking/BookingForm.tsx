"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import SpecialRequestsInput from "./SpecialRequestsInput";
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { DollarSign } from "lucide-react";
import useBookingStore from "@/stores/booking.store";
import usePaymentRequest from "@/hooks/usePaymentRequest";
import { Spinner } from "@nextui-org/spinner";
import { IPaymentBody } from "@/types/payment.type";

const hotels = [
  { id: 1, name: "Luxury Resort & Spa", price: 299 },
  { id: 2, name: "Beachfront Paradise", price: 399 },
];

const currecnies = ["usd", "bdt", "eur"];

export default function BookingForm() {
  const [selectedGuests, setSelectedGuests] = useState<string>("");
  const { booking, saveBooking } = useBookingStore();
  console.log(booking, " booking form");
  const { mutateAsync, isPending } = usePaymentRequest();
  const chekcInDate = booking?.checkIn;
  const checkOutDate = booking?.checkOut;

  const handleCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (booking) {
      saveBooking({
        ...booking,
        currency: event.target.value,
      });
    }
  };
  const { clearBooking } = useBookingStore();

  const handlePayment = async () => {
    const paymenBody = {
      hotel: booking?.hotel,
      room: booking?.room,
      currency: booking?.currency || "usd",
      guest: booking?.guest,
      checkin: booking?.checkIn,
      checkout: booking?.checkOut,
      roomsAllocated: 1,
    } as IPaymentBody;
    const respone = await mutateAsync(paymenBody);
    if (respone.data) {
      window.location.href = respone.data;
      clearBooking();
    }
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          variant="faded"
          placeholder="hotel name"
          label="Hotel Name"
          value={booking?.hotelName}
          readOnly
        />
        <Input
          variant="faded"
          value={booking?.roomType}
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
          onChange={handleCurrency}
        >
          {currecnies.map((currency) => (
            <SelectItem key={currency} value={currency}>
              {currency}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          value={chekcInDate}
          readOnly
          type="date"
          label="Check-in Date"
          className="w-full"
        />
        <Input
          value={checkOutDate}
          readOnly
          type="date"
          label="Check-out Date"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="col-span-2">Guest Details</label>
        <Input
          type="number"
          value={`${booking?.guest.adults}`}
          label="Adults"
          className="w-full"
          readOnly
        />
        <Input
          type="number"
          value={`${booking?.guest.children}`}
          label="Children"
          className="w-full"
          readOnly
        />
      </div>

      <Divider className="my-4" />
      <Button
        onClick={handlePayment}
        color="primary"
        size="lg"
        className="w-full"
      >
        {isPending ? (
          <>
            <Spinner color="default" size="sm" /> <span>waiting..</span>
          </>
        ) : (
          <>
            <FaRegCreditCard className="h-6 w-6" /> Continue to Payment
          </>
        )}
      </Button>
    </div>
  );
}
