"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Tab, Tabs } from "@nextui-org/tabs";
import {
  BookingForm,
  BookingSummary,
  BookingImages,
} from "@/components/booking";
import { CalendarDays } from "lucide-react";
import useBookingStore from "@/stores/booking.store";
import { formatDate } from "@/lib/date";

export default function BookingPage() {
  const { booking } = useBookingStore();
  return (
    <div className="mx-auto max-w-[1200px] p-4">
      <Breadcrumb pageName="Booking" parent="Home" />
      <Card className="p-4 rounded-md" >
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Confrim Hotel Booking</h1>

          <div className="w-full rounded-lg bg-sky-50 p-4">
            <div className="grid gap-4 divide-y">
              <div className="flex items-center gap-4">
                <CalendarDays className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="flex gap-2">
                    <span className="font-medium">Check-in:</span>
                    <span>
                      {formatDate(new Date(booking?.checkIn as string))}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium">Check-out:</span>
                    <span>
                      {formatDate(new Date(booking?.checkOut as string))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-semibold">{booking?.roomName}</h3>
                <p className="text-muted-foreground text-sm">
                  {booking?.guest.adults} adults , {booking?.guest.children} children  , 1 room
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Tabs aria-label="Booking options">
            <Tab key="details" title="Booking Details">
              <BookingForm />
            </Tab>
            <Tab key="summary" title="Booking Summary">
              <BookingSummary />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
