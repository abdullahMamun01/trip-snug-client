import HotelDescription from "@/components/hotels/hotelDetails/HotelDescription";
import HotelDetails from "@/components/hotels/hotelDetails/HotelDetails";
import HotelImages from "@/components/hotels/hotelDetails/HotelImages";
import HotelPricingCard from "@/components/hotels/hotelDetails/HotelPricingCard";
import ReviewList from "@/components/hotels/hotelDetails/ReviewList";
import React from "react";

export default function HotelDetailsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* <Header /> */}
      <HotelImages />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <HotelDetails />
          <HotelDescription />
          <ReviewList />
        </div>
        <div className="col-span-1">
          <HotelPricingCard />
        </div>
      </div>
    </div>
  );
}
