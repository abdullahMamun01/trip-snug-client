"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Tab, Tabs } from "@nextui-org/tabs";
import {
  BookingForm,
  BookingSummary,
  BookingImages,
} from "@/components/booking";

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-[1200px] p-4">
      <Breadcrumb pageName="Booking" parent="Home" />
      <Card className="p-4">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Hotel Booking</h1>
          <p className="text-default-500">
            Experience something new every moment
          </p>
          <BookingImages />
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
